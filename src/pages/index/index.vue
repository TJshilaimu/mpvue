<template>
  <div class="container">
    <!-- 轮播图部分 -->
    <swiper indicator-dots="true" autoplay circular interval="3000" duration="500">
      <block v-for="(item,index) in imgList" :key="index">
        <swiper-item>
          <div @click="toImg">
            <img :src="item.url" alt="">
            <div class="imgInfo">{{item.text}}</div>
          </div>
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类图标选择 -->
    <div class="small_icon">
      <swiper indicator-dots autoplay interval="5000">
        <block v-for="(item,index) in iconText" :key="index">
          <swiper-item>
            <div class="wrap">
              <div class="box" v-for="(t,_index) in item" :key="index">
                <img src="/static/images/caomei.jpg" alt="" @click="showMsg">
                <span>{{t.val}}</span>
              </div>

            </div>
          </swiper-item>
        </block>

      </swiper>
    </div>

    <!-- 导航 -->
    <div class="bar">
      <scroll-view scroll-x="true" class="scroll">
        <li :class="{'active': nowIndex==index}" v-for="(item,index) in scrollText" :key="index"
          @click="changeColor(index)">{{item}}</li>
      </scroll-view>
    </div>

    <!-- 卡片区 -->
    <div class="card">
      <block v-for="item in cardUrl" :key="index">
        <card :list="item" />
      </block>


    </div>
  </div>
</template>

<script>
  import card from '@/components/card.vue'
  import myData from '../../utils/data.js'
  import throttle from '../../utils/throttle.js'
  export default {
    data() {
      return {
        imgList: [{
            url: '/static/images/x4.jpg',
            text: "图片描述1"
          }, {
            url: '/static/images/x5.jpg',
            text: "图片描述2"
          },
          {
            url: '/static/images/x2.jpg',
            text: "图片描述3"
          }
        ],
        iconText: [
          [{
            val: '9.9特卖',
            id: 1
          }, {
            val: '新品',
            id: 2
          }, {
            val: '测试',
            id: 3
          }, {
            val: '测试',
            id: 4
          }, {
            val: '测试',
            id: 5
          }, {
            val: '测试',
            id: 6
          }, {
            val: '测试',
            id: 7
          }, {
            val: '测试',
            id: 8
          }],
          [{
            val: '9.9特卖',
            id: 11
          }, {
            val: '新品',
            id: 21
          }, {
            val: '测试',
            id: 31
          }, {
            val: '测试',
            id: 41
          }, {
            val: '测试',
            id: 51
          }, {
            val: '测试',
            id: 61
          }, {
            val: '测试',
            id: 71
          }, {
            val: '测试',
            id: 81
          }]
        ],
        nowIndex: 0,
        scrollText: [
          '生列', '二学',
          '越手', '和度',
          '当管', '二每',
          '书查', '你那',
          '火往', '区价'
        ],
        cardUrl: ['/static/images/x1.jpg', '/static/images/x2.jpg', '/static/images/x4.jpg', '/static/images/lyf.jpg',
          '/static/images/x5.jpg', '/static/images/caomei.jpg', '/static/images/x1.jpg', '/static/images/x2.jpg',
          '/static/images/x4.jpg', '/static/images/lyf.jpg', '/static/images/x5.jpg', '/static/images/caomei.jpg',
          '/static/images/x1.jpg', '/static/images/x2.jpg', '/static/images/x4.jpg', '/static/images/lyf.jpg',
          '/static/images/x5.jpg', '/static/images/lyf.jpg', '/static/images/timg.jpg', '/static/images/x2.jpg',
          '/static/images/x4.jpg', '/static/images/lyf.jpg', '/static/images/x5.jpg', '/static/images/caomei.jpg'
        ]
      }
    },
    //下拉触底请求更多数据
    onReachBottom: function () {
      this.cardUrl = this.cardUrl.concat(myData.arr)
    },
    computed: {
      // imgUrl() {
      //   return this.cardUrl.sort(() => Math.random() - 0.5);
      // }
    },
    methods: {
      toImg() {
        wx.navigateTo({
          url: '/pages/imgInfo/main'
        });
      },
      changeColor(index) {
        this.nowIndex = index
      },
      showMsg() {
        wx.showToast({
          title: '功能未完善', //提示的内容,
          icon: 'success', //图标,
          duration: 1000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: res => {}
        });
      },
      showMore(){
        this.cardUrl = this.cardUrl.concat(myData.arr)
      }
    },
    components: {
      card
    }
  }

</script>

<style scoped>
  swiper {
    width: 100%;
    height: 300rpx;
  }

  swiper-item {
    width: 100%;
    height: 300rpx;
  }

  swiper-item>div {
    width: 100%;
    height: 100%;
    position: relative;

  }

  swiper-item div img {
    width: 100%;
    height: 100%;
  }

  swiper .imgInfo {
    position: absolute;
    bottom: 10rpx;
    left: 10rpx
  }

  @font-face {
    font-family: 'iconfont';
    /* project id 2026542 */
    src: url('//at.alicdn.com/t/font_2026542_x5gy191ejzp.eot');
    src: url('//at.alicdn.com/t/font_2026542_x5gy191ejzp.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_2026542_x5gy191ejzp.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_2026542_x5gy191ejzp.woff') format('woff'),
      url('//at.alicdn.com/t/font_2026542_x5gy191ejzp.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_2026542_x5gy191ejzp.svg#iconfont') format('svg');
  }

  .small_icon {
    width: 100%;
    height: 380rpx;
    background-color: #fff;
    margin-bottom: 10rpx;
  }

  .small_icon swiper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 10rpx;

  }

  .small_icon swiper swiper-item {
    width: 100%;
    height: 100%;

  }

  swiper-item .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: aqua;
    align-content: center;
    transform: translateX(-50%);
    margin-left: 50%;
    padding: 10rpx 0;
    /* margin-right: 10rpx; */
  }

  .wrap .box {
    width: 80px;
    height: 80px;
    /* line-height: 80px; */
    box-sizing: border-box;
    border-radius: 6rpx;
    padding: 4rpx;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 10rpx;
    align-items: center;
    /* border:1px solid red; */
  }

  .wrap .box img {
    width: 60%;
    height: 60%;
    border-radius: 26rpx;

    /* border:1px solid red */
  }

  .wrap .box span {
    font-size: 12px;
    /* display: none; */

  }

  .bar {
    width: 100%;
    height: 100rpx;
    background-color: blanchedalmond;
    margin-top: 10rpx;
  }

  /* .scroll li{
    flex:0 0 100rpx;
    margin-left:20rpx;
    /* padding-bottom: 10rpx; 
    font-size: 32rpx;
  } */
  .scroll li.active {
    border-bottom-color: tomato;
    color: tomato;
  }

  .scroll {
    white-space: nowrap;
  }

  .scroll li {
    border: 2px solid transparent;
    box-sizing: border-box;
    display: inline-block;
    margin: 0 10rpx;
    width: 100rpx;
    text-align: center;
    height: 80rpx;
    line-height: 80rpx;
    /* cursor: pointer; */
  }

  .card {
    display: flex;
    flex-wrap: wrap;

  }

</style>
