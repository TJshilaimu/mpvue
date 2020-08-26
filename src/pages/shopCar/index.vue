<template>
  <div class="my_box">
    <div class="content"v-if="isLogin">
      购物车内容尚未开发
    </div>
  <div v-else>
    <div class="login" @click="toLogin">
      登录
    </div>
    <div class="login" @click="toRegister">
     注册
   </div>
  </div>
  </div>
</template>

<script>
  const db = wx.cloud.database({
    env:'test-41qbp'
  })
  export default {
    data(){
      return{
        isLogin:false,
        id:''
      }
    },
    onShow(){
      let that = this;
      wx.cloud.callFunction({name:'gitId'}).then(res => {
        this.id = res.result.openid;
      })
      db.collection('login').where({
        _openid:this.id
      }).get().then(res =>{
        console.log(res)
        if(res.data.length > 0){
          that.isLogin = true;
        }else{
          that.isLogin = false;
        }
      }).catch(console.error)
    },
    methods:{
      toLogin(){
        wx.navigateTo({ url: '/pages/login/main' });
      },
      toRegister(){
        wx.navigateTo({ url: '/pages/register/main' });
      }
    },
    mounted(){
      wx.login({
        success: res => {
          // console.log('ok')
        },
        fail: () => {
          wx.showModal({
            title: '尚未登录', //提示的标题,
            content: '请先登录', //提示的内容,
            showCancel: true, //是否显示取消按钮,
            cancelText: '取消', //取消按钮的文字，默认为取消，最多 4 个字符,
            cancelColor: '#000000', //取消按钮的文字颜色,
            confirmText: '登录', //确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: '#3CC51F', //确定按钮的文字颜色,
            success: res => {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          });
        },
        complete: () => {}
      });
    }
  }

</script>

<style scoped>
  .my_box{
    /* position: relative; */
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:50%;
  }
  .login{
    /* position: fixed; */
    width:140rpx;
    height:60rpx;
    margin-left:30rpx;
    padding:20rpx 30rpx;
    background-color: #f40;
    color:#fff;
    font-size:32rpx;
    font-weight:bold;
    line-height: 60rpx;
    text-align: center;
    border-radius: 20rpx;
    margin-bottom: 30rpx;;
  }
</style>
