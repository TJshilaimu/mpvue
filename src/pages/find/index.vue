<template>
  <div class="my_container">
	<ul class="nav">
		<li>
			<img src="/static/images/caomei.jpg" alt="">
			<div>优先购</div>
		</li>
		<li>
			<img src="/static/images/caomei.jpg" alt="">
			<div>赢好礼</div>
		</li>
		<li>
			<img src="/static/images/caomei.jpg" alt="">
			<div>线下门店</div>
		</li>
	</ul>
	<div class="content">
		<div class="box" @click="show">
			<img src="/static/images/caomei.jpg" alt="">
			<p>
				<span class="active">活动</span>
				<span class="info">摆摊吧！少年</span>
			</p>
		</div>
		<div class="box"  @click="show">
			<img src="/static/images/caomei.jpg" alt="">
			<p>
				<span class="active">专题</span>
				<span class="info">智慧生活，为您实现</span>
			</p>
		</div>
	</div>
  </div>
</template>

<script>
  export default {
	methods:{
		show(){
			wx.showToast({
			  title: '敬请期待', //提示的内容,
			  icon: 'success', //图标,
			  duration: 1000, //延迟时间,
			  mask: true, //显示透明蒙层，防止触摸穿透,
			  success: res => {}
			});
		}
	}
  }

</script>

<style scoped>
	.my_container{
		background-color: #aaa;
		height:100%;
	}
	.nav{
		display: flex;
		width:100%;
		height:200rpx;
		background-color: #fff;
	}
	.nav li{
		flex:1;
		margin:20rpx;
		text-align:center;
		border-right:1px solid gray;
	}
	.nav li:last-child{

		border-right: none;
	}
	li img{
		width:60rpx;
		height:60rpx;
	}
	.content{
		/* width:100%; */
		box-sizing: border-box;
		margin:10rpx;
		text-align:center;
	}
	.content .box{
		/* width:100%; */
		/* border:1px solid red; */
		height:500rpx;
		margin-bottom:10rpx;
		background-color: #fff;

	}
	.box img{
		width: 100%;
		height:400rpx;
	}
	.box .active{
		display: inline-block;
		background-color: #f40;
		color:white;
		padding:10rpx 16rpx;
		border-radius:20rpx;
		margin-right:20rpx;
	}
</style>
