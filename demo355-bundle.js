/*
 * @Author: artemis
 * @Date: 2021-12-16 08:36:23
 * @LastEditTime: 2021-12-16 14:54:01
 * @LastEditors: artemis
 * @Description: 
 */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');
const getModuleInfo = file => {
  const body = fs.readFileSync(file, 'utf-8');
  const ast = parser.parse(body, {
    sourceType: 'module' //表示我们要解析的是ES模块
  });
  const deps = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file);
      const abspath = './' + path.join(dirname, node.source.value);
      deps[node.source.value] = abspath;
    }
  });
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  });
  const moduleInfo = { file, deps, code };
  return moduleInfo;
};

const parseModules = file => {
  const entry = getModuleInfo(file);
  const temp = [entry];
  const depsGraph = {};
  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps;
    if (deps) {
      for (const key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]));
        }
      }
    }
  }
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code
    };
  });
  return depsGraph;
};
const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file));
  // 代码执行过程中调用的require函数实际上是absRequire，它会抽取出deps中这个依赖路径对应的文件绝对路径，再通过require调用绝对路径
  return `(function (graph){
    function require(file){
      function absRequire(relPath){
        return require(graph[file].deps[relPath])
      }
      var exports = {};
      (function (require,exports,code){
        eval(code)
      })(absRequire,exports,graph[file].code)
      return exports
    }
    require('${file}')
  })(${depsGraph})`;
};

const content = bundle('./demo355.js');
console.log(content);

fs.mkdirSync('./dist');
fs.writeFileSync('./dist/demo355-bundle.js', content);
