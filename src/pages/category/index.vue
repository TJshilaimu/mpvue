<template>
  <div class="category">
    <div class="slide">
      <ul class="nav">
		  <li class="nav_item" :class="{'active':nowIndex == index}" @click="showFood(index)" v-for="(item,index) in navList" :key="item.id">{{item.name}}</li>
	  </ul>
    </div>
    <div class="content">
      <div class="content_item" v-for="(item,index) in foodInfo" :key="item.id">
		  <div class="item_info">
			<span>￥{{item.price}}</span>
			<span>{{item.name}}</span>
		  </div>
		  <div class="item_num">
			  <span @click="changeNum(false,item)">-</span>
			  <input type="text" value="0" v-model="item.num">
			  <span @click="changeNum(true,item)">+</span>
		  </div>
	  </div> 
    </div>
  </div>
</template>

<script>
	import foodData from '../../utils/foodData'
  export default {
		data(){
			return{
				navList:[],
				foodList:[],
				nowIndex:0,
				num:0
			}
		},
		mounted(){
			console.log(foodData)
			this.navList=foodData.navList;
			this.foodList= foodData.classifyData
		},
		computed:{
			foodInfo(){
				return this.foodList[this.nowIndex]
			}
		},
		methods:{
			showFood(index){
				this.nowIndex = index
			},
			changeNum(e,item){
				if(e){
					item.num++;
				}else{
					item.num >0?item.num--:item.num;
				}
			}
		}
  }

</script>

<style scoped>
	.category{
		width:100vw;
		height:100vh;
		display: flex;
		align-items: flex-start;
	}
	.slide{
		flex: 0 0 200rpx;
		height:100%;
		border:1px solid red;
	}
	.content{
		flex:1 1 auto;
		/* border:1px solid blue */
	}
	.nav{
		list-style-type: none;
		display: flex;
		width:100%;
		height:90%;
		flex-direction: column;
		justify-content: flex-start;
		/* border:1px solid pink; */
	}
	.nav .nav_item{
		/* flex:1 1 auto; */
		display: inline-block;
		padding:20rpx 30rpx;
		text-align: center;
		height:60rpx;
		line-height: 60rpx;
		border-bottom:1px solid black ;
	
	}
	.nav .nav_item.active{
		color:#f40;
		background-color: bisque;
	}
	.content_item{
		height:140rpx;
		width:100%;
		border-bottom:1px solid gray;
		/* line-height:140rpx; */
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.item_info{
		flex:1
	}
	.item_num{
		/* border:1px solid pink; */
		border-radius:10rpx;
		padding:20rpx;
		flex:1;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.item_info>span{
		margin-left:10rpx
	}
	.item_num>span{
		flex:1 1 auto;
		border:1px solid #ccc;
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
		
	}
	.item_num input{
		flex:0 0 50%;
		padding-left:16rpx;
		text-align: center;
		border:1px solid gray;
	}
</style>
