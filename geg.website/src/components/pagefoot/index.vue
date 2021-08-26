<template>
  <div class="pf_wrap">
    <div class="pc_box pf_nabox">
      <div class="pfn_tibox">Powered By</div>
      <div class="pfn_icbox">
        <img src="~@/assets/imgs/foot/binance.png">
        <img src="~@/assets/imgs/foot/pancakeswap.png">
        <img src="~@/assets/imgs/foot/gnosissafe.png">
        <img src="~@/assets/imgs/foot/tokenpocket.png">
        <img src="~@/assets/imgs/foot/defibox.png">
        <img src="~@/assets/imgs/foot/coinhub.png">
        <img src="~@/assets/imgs/foot/mdexcom.png">
      </div>
      <div class="pfn_tibox">More Information</div>
      <div class="pfn_icbox">
        <img src="~@/assets/imgs/foot/discord.png" @click="$openPage('https://discord.gg/pagXSTbqxT')">
        <img src="~@/assets/imgs/foot/twitter.png" @click="$openPage('https://twitter.com/GeFiOfficial')">
        <img src="~@/assets/imgs/foot/telegram.png" @click="$openPage('https://t.me/GeFiOfficial')">
      </div>
      <div class="pfn_tibox">More Information</div>
      <div class="pfn_icbox">
        <img src="~@/assets/imgs/foot/gitbook.png" @click="$openPage('https://info.ge.finance')">
        <img src="~@/assets/imgs/foot/medium.png" @click="$openPage('https://medium.com/@GeFiOfficial')">
      </div>
    </div>
    <div class="pf pc_box">
      <div class="pf_le">
        <div class="pf_logo">
          <img src="~@/assets/imgs/logo.png">
        </div>
        <div class="pf_nav">
          <div @click="$openMailbox('info@ge.finance')">Contact Us </div>
          <div @click="$openPage('https://info.ge.finance')">About Us</div>
        </div>
        <div class="copyright">Copyright © 2021 GeFi </div>
      </div>
      <div class="pf_ri">
        <div class="pfr_mbox">
          <span>Join Our Community</span>
          <img src="~@/assets/imgs/foot/f1.png" @click="$openPage('https://t.me/GeFiOfficial')">
          <img src="~@/assets/imgs/foot/f2.png" @click="$openPage('https://twitter.com/GeFiOfficial')">
          <img src="~@/assets/imgs/foot/f3.png" @click="$openPage('https://discord.gg/pagXSTbqxT')">
          <img src="~@/assets/imgs/foot/f4.png" @click="$openPage('https://www.reddit.com/r/GeFi/')">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .pf_wrap {
//   background: #000;
// }
.pf_nabox {
  margin-top: -300px;
  .pfn_tibox {
    margin: 20px 0 14px;
    font-size: 18px;
    color: #2EC78F;
  }
  .pfn_icbox {
    display: flex;
    flex-wrap: wrap;
    >img {
      margin: 0 25px 25px 0;
      width: 200px;
    }
  }
}
.pf {
  padding: 30px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pf_le {
    .pf_logo {
      >img {
        width: 106px;
      }
    }
    .pf_nav {
      padding: 30px 0;
      display: flex;
      >div {
        font-size: 14px;
        margin-right: 50px;
      }
    }
    .copyright {
      color: #746591;
    }
  }
  .pf_ri {
    .pfl_box {
      display: flex;
      .pflb_btn {
        margin-left: 20px;
        display: flex;
        align-items: center;
        width: 150px;
        height: 50px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #FFFFFF;
        >img {
          margin: 0 20px;
          width: 28px;
        }
      }
    }
    .pfr_mbox {
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      >img {
        margin-left: 20px;
        width: 45px;
      }
    }
  }
}
</style>
