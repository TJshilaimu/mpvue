<template>
  <div class="wrap" :class="{'hidden':flag}">
    <div class="box">
      <div class="img">
        <img :src="list" alt="">
      </div>
      <div class="info">
        <div class="text">
          尼龙偏光镜片，超清超薄轻巧佩戴尼龙偏光镜片，超清超薄轻巧佩戴超薄轻巧佩戴尼龙
        </div>
        <div class="money">
          ￥3399元起
        </div>
        <span class="other" v-if="flag">你的浏览足迹</span>
      </div>
    </div>
    <div class="close">
      <img src="/static/images/删除.png" alt="" @click="handle"> 
    </div>
  </div>
</template>

<script>
  export default {
	props: ['list'],
	data(){
		return {
			flag:null
		}
	},
	mounted(){
		this.flag = Math.random() < 0.5
	},
	methods:{
		handle(){
			this.flag=true
		}
	}
  
  }
 
</script>

<style scoped>
	.wrap{
		position: relative;
		box-sizing: border-box;
		margin:10rpx;
	}
	.wrap.hidden{
		display: none;
	}
  .box {
    width: 340rpx;
    background-color: #EEE;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .box .img {
    margin-top: 20rpx;
    width: 270rpx;
    height: 400rpx;
	margin-left:40rpx;
	margin-bottom: 8rpx;
  }

  .box .img img {
    width: 100%;
    height: 100%
  }

  .info .text,
  .money,
  .other {
    text-align: left;
    padding: 0 20rpx;
    /* margin-left: -60rpx; */
    width: 100%;
    /* color:red */
  }

  .info .text {
	  width: 90%;
    font-size: 24rpx;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
	margin-bottom:8rpx
  }
.info .money{
	color:#f40;
}
.info .other{
	font-size:20rpx;
	color:#f40
}
.close{
	position: absolute;
	top:10rpx;
	right: 10rpx;
	width:40rpx;
	height: 40rpx;
}
.close img{
	width:100%;
	height:100%;
}

</style>
