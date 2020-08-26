<template>
  <div class="register">
    <form @submit="submit">
      <input type="text" name="name" placeholder="请输入用户名">
      <input type="password" name="pwd" placeholder="请输入密码">
      <button form-type="submit" type="primary">注册</button>
    </form>
  </div>
</template>

<script>
  const db = wx.cloud.database({
    env: "test-41qbp"
  })
  export default {
    data() {
      return {
        name: '',
        pwd: null
      }
    },
    methods: {
      submit(e) {
        this.name = e.target.value.name;
        this.pwd = e.target.value.pwd;
        db.collection('login').add({
            data:{
                name:this.name,
                pwd:this.pwd
            }
        }).then(res =>{
            wx.showToast({
              title: '注册成功', //提示的内容,
              icon: 'success', //图标,
              duration: 1000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: res => {
                  setTimeout(function(){
                      wx.switchTab({ url: '/pages/shopCar/main' });
                  },500)
              }
            });
        }).catch(console.error)
      }
    }
  }

</script>

<style scoped>
  .register {
    padding: 30rpx;
  }

  input {
    height: 40rpx;
    line-height: 40rpx;
    ;
    margin-bottom: 30rpx;
  }

</style>
