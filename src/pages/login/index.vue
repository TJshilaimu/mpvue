<template>
  <div class="login">
    <form @submit="submit">
      <input type="text" name="name" v-model="name" placeholder="请输入用户名">
      <input type="password" name="pwd" v-model="pwd"  placeholder="请输入密码">
      <button form-type="submit" type="primary">登录</button>
    </form>
  </div>
</template>

<script>
  const db = wx.cloud.database({
    env: "test-41qbp"
  })
  export default {
    data(){
      return{
        name:'',
        pwd:''
      }
    },
    methods: {
      submit(e) {
        let that =this;
        this.name = e.target.value.name;
        this.pwd = e.target.value.pwd;
        db.collection('login').where({  
            name: this.name,
            pwd:this.pwd
        }).get().then(res => {
          console.log(res)
          if(res.data.length == 0 ){
            wx.showModal({
              title: '密码不正确或没有此用户', //提示的标题,
              content: '请验证后再输入', //提示的内容,
              showCancel: true, //是否显示取消按钮,
              cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
              cancelColor: '#000000', //取消按钮的文字颜色,
              confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
              confirmColor: '#3CC51F', //确定按钮的文字颜色,
              success: res => {
                if (res.confirm) {
                  console.log('用户点击确定')
                  that.name='';
                  that.pwd=''
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            });
          }else{
            wx.showToast({
            title: '登录成功', //提示的内容,
            icon: 'success', //图标,
            duration: 1000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: res => {
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/shopCar/main'
                });
              }, 500)
            }
          });
          }
        }).catch(console.error)
      }
    }
  }

</script>

<style scoped>
 .login {
    padding: 30rpx;
  }

  input {
    height: 40rpx;
    line-height: 40rpx;
    ;
    margin-bottom: 30rpx;
  }
</style>
