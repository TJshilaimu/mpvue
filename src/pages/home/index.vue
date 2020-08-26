<template>
  <div class="my_container">
    <!-- 个人信息 -->
    <div class="info">
      <div class="img">
        <img :src="imgUrl" alt="">
        <!-- <p>a</p> -->
      </div>
      <div class="userName">
        <p>{{name}}</p>
      </div>
      <div class="scale">
        <p>二维码</p>
      </div>
    </div>
    <!-- 菜单列表 -->
    <ul>
      <li>
        <img src="/static/images/床.png" alt="">
        <span>我的订单</span>
      </li>
      <li>
        <img src="/static/images/日历.png" alt="">
        <span>会员中心</span>
      </li>
      <li>
        <img src="/static/images/床.png" alt="">
        <span>我的订单</span>
      </li>
      <li>
        <img src="/static/images/指南针.png" alt="">
        <span>会员中心</span>
      </li>
      <li>
        <img src="/static/images/望远镜.png" alt="">
        <span>我的订单</span>
      </li>
      <li>
        <img src="/static/images/日历.png" alt="">
        <span>会员中心</span>
      </li>
      <li>
        <img src="/static/images/床.png" alt="">
        <span>我的订单</span>
      </li>
      <li>
        <img src="/static/images/日历.png" alt="">
        <span>会员中心</span>
      </li>
    </ul>
    
  </div>
</template>

<script>
  export default {
    data(){
      return{
        imgUrl:'',
        name:''
      }
    },
    mounted(){
      let that =this;
      wx.getUserInfo({
        withCredentials: false,
        success: res => {
          console.log(res)
          that.name = res.userInfo.nickName;
          that.imgUrl = res.userInfo.avatarUrl
        },
        fail: () => {},
        complete: () => {}
      });
    }
  }

</script>

<style scoped>
  .my_container{
    background-color: #444;
    width:100%;
    height:100%;
    padding-top:10rpx;
  }
  .my_container .info{
    margin-bottom:10rpx;
    background-color: #eee;
    width:100%;
    height:160rpx;
    line-height: 160rpx;
    display:flex;
    justify-content: space-around;
    align-items: center;
    border:1px solid red;
  }
  .info .img{
    flex: 0 0 200rpx;
    height:160rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .userName{
    flex:1 1 auto;
    /* border:1px solid red; */
    padding-left:30rpx;
  }
  .scale{
    flex: 0 0 160rpx;
    /* border:1px solid red */
  }
  .scale p{
    padding-right:20rpx;
  }
  .img img{
    width:100rpx;
    height:100rpx;
  }
  ul{
    width:100%;
    height:100%;
    background-color: #fff;
    margin-bottom: 10rpx;
  }
  li{
    list-style-type: none;
    height:80rpx;
    /* line-height: 60rpx; */
    margin:0 30rpx;
    padding:20rpx 0;
    /* border:1px solid red; */
    display: flex;
    align-items: center;
    border-bottom:1px solid gray;
  }
  li:last-child{
    border:none;
  }
  li img{
    width:80rpx;
    height: 80rpx;
    /* border:1px solid pink; */
  }
  li span{
    display: inline-block;
    height:60rpx;
    width:200rpx;
    vertical-align: top;
    padding:0;
    margin:0;
    /* border:1px solid blue; */
    line-height: 60rpx;
    margin-left:30rpx;
  }

</style>
