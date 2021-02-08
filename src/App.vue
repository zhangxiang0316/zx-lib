<template>
  <div id="app">
    <zx-form ref="mForm" :formData="formData" :formCols="formCols" :rules="rules"></zx-form>
  </div>
</template>
<script type="text/ecmascript-6">
import zxForm from '@/components/form'

export default {
  components: {
    zxForm
  },
  data() {
    return {
      formData: {},
      formCols: [
        [
          {
            eType: 'Input',
            placeholder: "请输入姓名",
            label: "Input",
            prop: 'name',
            noShow: false,
            span: 6,
            suffixIcon: "el-icon-eleme"
          },
        ]
      ],
      rules: {},
    }
  }
}
</script>

<style>

</style>
