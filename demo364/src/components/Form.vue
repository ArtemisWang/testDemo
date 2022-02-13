<!--
 * @Author: yating.wang
 * @Date: 2021-12-29 14:56:27
 * @LastEditTime: 2022-01-05 08:13:10
 * @LastEditors: yating.wang
 * @Description: 表单组件
-->
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: "Form",
  props:['props'],
  data() {
    return {
      formObject: {},
    };
  },
  created() {
    const { list, initialValue } = this.props;
    list.forEach((formItem) => {
      this.$set(
        this.formObject,
        formItem.fieldName,
        initialValue[formItem.fieldName] ??
          (formItem.type === "CHECKBOX" ? [] : "")
      );
    });
  },
  methods: {
    submitForm(){
      this.$refs._form.validate((valid) => {
          if (valid) {
            console.log('submit!');
            this.$emit('submit', this.formObject)
          } else {
            console.log('error submit!!');
            return false; // 终止表单提交
          }
        });
    },
    resetForm(){
      this.$refs._form.resetFields();
    }
  },
  render(h) {
    const { list, labelWidth, isSubmitBtn = false, rules = {} } = this.props;
    return (
      <el-form
        ref="_form"
        label-width={`${labelWidth}px`}
        props={{ model: this.props }}
        inline={true}
        rules={rules}
        model={this.formObject}
      >
        {list.map((formItem) => {
          const {
            fieldName,
            type,
            label,
            placeholder = "",
            style = {},
            options = {},
          } = formItem;
          const { itemList = [] } = options;
          switch (type) {
            case "INPUT":
              return (
                <el-form-item label={label} style={style} prop={fieldName}>
                  <el-input
                    value={this.formObject[fieldName]}
                    onInput={(val) => (this.formObject[fieldName] = val)}
                    placeholder={placeholder}
                  ></el-input>
                </el-form-item>
              );
            case "SELECT":
              return (
                <el-form-item label={label} style={style} prop={fieldName}>
                  <el-select
                    value={this.formObject[fieldName]}
                    onInput={(val) => (this.formObject[fieldName] = val)}
                    placeholder={placeholder}
                  >
                    {itemList.map((optionItem) => {
                      return (
                        <el-option
                          key={optionItem.value}
                          label={optionItem.text}
                          value={optionItem.value}
                        ></el-option>
                      );
                    })}
                  </el-select>
                </el-form-item>
              );
            case "RADIO":
              return (
                <el-form-item label={label} style={style} prop={fieldName}>
                  <el-radio-group
                    value={this.formObject[fieldName]}
                    onInput={(val) => (this.formObject[fieldName] = val)}
                  >
                    {itemList.map((optionItem) => {
                      return <el-radio label={optionItem.text}></el-radio>;
                    })}
                  </el-radio-group>
                </el-form-item>
              );
            case "CHECKBOX":
              return (
                <el-form-item label={label} style={style} prop={fieldName}>
                  <el-checkbox-group value={this.formObject[fieldName]}>
                    {itemList.map((optionItem) => {
                      return (
                        <el-checkbox
                          label={optionItem.text}
                          key={optionItem.value}
                          onChange={(val) => {
                            (val &&
                              this.formObject[fieldName].push(
                                optionItem.text
                              )) ||
                              (this.formObject[fieldName] = this.formObject[
                                fieldName
                              ].filter(
                                (_checked) => _checked !== optionItem.text
                              ));
                          }}
                        >
                          {optionItem.label}
                        </el-checkbox>
                      );
                    })}
                  </el-checkbox-group>
                </el-form-item>
              );
          }
        })}
        {isSubmitBtn && (
          <el-form-item>
            <el-button type="primary" onClick={this.submitForm}>
              提交
            </el-button>
            <el-button onClick={this.resetForm}>重置</el-button>
          </el-form-item>
        )}
      </el-form>
    );
  },
};
</script>

<style lang='scss' scoped>
</style>