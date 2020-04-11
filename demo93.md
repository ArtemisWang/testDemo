## 1-查看git的使用方法
>>git

## 2-创建git仓库
>>git init

## 3-查看当前仓库文件变化情况
>>git status

## 4-添加修改
>>git add

## 5-本次还没提交的修改
>>git diff

## 6-回滚，撤销提交操作
>>git reset

## 7-向git提交自己的身份(name)
>>git config --global user.name "xxx"

## 8-向git提交自己的身份(email)
>>git config --global user.email "xxx@xx.com"

## 9-向git提交内容
>>git commit -m "xx"

## 10-让git忽略某些文件
创建.gitignore文件，在文件中添加文件名/文件夹名

## 11-让git不再追踪某个文件/文件夹
>>git rm --cached xx

## 12-git添加分支
>>git branch xx

## 13-git切换分支
>>git checkout xx

## 14-合并分支
>>git merge xx

## 15-列出本地分支
>>git branch

## 16-删除分支
>>git branch -d xx

## 17-添加远程仓库
>>git remote add origin xxx

## 18-设置本地分支追踪远程分支
>>git push --set-upstream

## 19-克隆仓库
>>git clone xxx (xxx为远程分支)