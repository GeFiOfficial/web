<template>
  <div class="wallet_btn">
    <div class="wb_box" v-if="!$walletFuc.walletAddress && !$walletFuc.connectionMode" @click="openConnectionMode = true">wallet</div>
    <div class="wb_box" v-if="!$walletFuc.walletAddress && $walletFuc.connectionMode" @click="openConnectionMode = true">NET ERR</div>
    <div class="wb_box"  v-else-if="$walletFuc.connectionMode === 'MetaMask'">
      {{$walletFuc.walletAddress.substr(0,6)}}***{{$walletFuc.walletAddress.substring($walletFuc.walletAddress.length - 6)}}
    </div>
    <!-- <div class="wb_box" v-else-if="$walletFuc.connectionMode === 'WalletConnect'"  @click="cancelPop">
      {{$walletFuc.walletAddress.substr(0,6)}}***{{$walletFuc.walletAddress.substring($walletFuc.walletAddress.length - 6)}}
    </div> -->

    <van-popup round v-model="openConnectionMode" closeable get-container="#app">
      <div class="dntPopTitle">Connect to a wallet <span class="cmArraw" @click="openConnectionMode = false"></span></div>
      <ul class="dntPopWrap">
        <li @click="selectConnectionMode('MetaMask')"> MetaMask</li>
        <li @click="selectConnectionMode('MetaMask')"> Tokenpocket</li>
        <li @click="selectConnectionMode('MetaMask')"> Trust wallet</li>
        <!-- <li @click="selectConnectionMode('WalletConnect')"> WalletConnect</li> -->
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openConnectionMode: false // 授权方式菜单
    }
  },
  methods: {
    selectConnectionMode (item) { // 选择授权方式
      if (item === 'MetaMask') {
        this.$walletFuc.metaMaskConnect()
      } else if (item === 'WalletConnect') {
        this.$walletFuc.walletConnect()
      }
      this.openConnectionMode = false
    },
    cancelPop () {
      this.$confirm('断开钱包链接', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$walletFuc.delWalletConnect()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wallet_btn {
  .wb_box {
    font-size: 20px;
    font-family: 'NEWB';
    padding: 4px 12px;
    // border: 1px solid $a_act;
  }
}
/deep/ .wbb_warap {
  width: 300px;
  border-radius: 12px;
}
.wb_main {
  .wbm_box {
    display: flex;
    align-items: center;
    margin: 12px 0;
    padding: 12px;
    background: #F1F1F3;
    // color: $a_act;
    // border: $bor_rds;
    // border-radius: $bor_rds;
    cursor: pointer;
    >img {
      width: 24px;
      margin: 0 12px 0 0;
    }
    >i {
      margin: 0 0 0 auto;
    }
  }
}
.dntPopTitle {
  padding: 16px 24px;
  font-size: 18px;
  background: linear-gradient(180deg, #101B35 0%, #0C152B 100%);
  color: #fff;
}
.dntPopWrap {
  padding: 12px 0;
  width: 300px;
  background: #080F1F;
  color: #fff;
}
.dntPopWrap li {
  margin: 8px 18px;
  padding: 8px 10px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #162445;
  border-radius: 12px;;
}
.dntPopWrap li .svg-icon {
  margin: 0 12px;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.app-pop-box {
  background: #080F1F;
  color: #BDBDBD;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  width: 300px;
}
.pop-title {
  text-align: center;
  padding: 22px 0 12px;
  font-size: 16px;
}
.pop-add {
  padding: 0 24px;
}
.pop-btn-box {
  border-top: 1Px solid #162445;
  margin: 14px 0 0 0;
  display: flex;
}
.pop-btn-box >div:nth-child(1) {
  border-right: 1Px solid #282d38;
}
.pop-btn-box >div {
  padding: 12px 0;
  flex: 1;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
</style>