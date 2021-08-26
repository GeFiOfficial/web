<template>
  <div class="dt">
    <div class="dt_bbox">
      <div class="ifg_top">
        <img src="~@/assets/imgs/logo.png">
        <!-- <div class="flex_mid ifgt_btn">DAPP</div> -->
      </div>
      <div class="dtb_tbox">
        <img src="~@/assets/imgs/hm_logo.png">
        <div class="dtbt_txt">
          Stake Yields. Optimize & Earn. Trade & Play Games to earn NFTs.
        </div>
        <div class="dtbt_txt" style="font-size: 24px;margin-top: 12px">
          • Total of 285,000 sGEG is up for public sales<br>
          • 10 sGEG is equivalent to 1 GEG<br>
          • Total of 28,500 GEG token is allocated for<br>
          staking pool with sGEG to earn GEG
        </div>
      </div>
    </div>

    <div class="dt_ifbox">
      <div class="dti_top pc_box">
        <div>
          On-going<br>
          {{timeLine[onePanel].name}} Phase
        </div>
        <div>
          <div class="dtit_tbox">Total sGEG</div>
          <div>{{timeLine[onePanel].tolGeg}} sGEG</div>
        </div>
        <div>
          <div class="dtit_tbox">sGEG price</div>
          <div>{{timeLine[onePanel].gegPri}} USDT/BUSD</div>
        </div>
        <div class="dtit_ri">
          <div @click="showGodsPop()" class="dtitr_mbox">
            PURCHASE
            <img src="~@/assets/imgs/dtit_ri_logo.png">
          </div>
          <div class="dtitr_txbox">
            Minimum purchase = 1 sGEG<br>
            Maximum purchase = 25,000<br>
            sGEG per BSC wallet address
          </div>
        </div>
      </div>
      <div class="dtb_tmbox">
        <div>
          <div>{{days}}</div>
          <span>Days</span>
        </div>
        <div>
          <div>{{hours}}</div>
          <span>Hours</span>
        </div>
        <div>
          <div>{{mintues}}</div>
          <span>Minutes</span>
        </div>
        <div>
          <div>{{seconds}}</div>
          <span>Seconds</span>
        </div>
      </div>
      <div class="dtb_infobox" v-html="timeLine[onePanel].info">
      </div>
      <div class="dtb_proInfo">
        <span>Proccessing</span>
        <span>{{getProgressBar(timeInfo.theIndex)}}%</span>
      </div>
      <div class="dtb_probox">
        <div class="dtp_line" :style="'width:' + (getProgressBar(timeInfo.theIndex) > 100 ? 100 : getProgressBar(timeInfo.theIndex)) + '%'">
          <div class="dtpl_dbox"></div>
        </div>
      </div>
      <div class="dti_febox pc_box">
        <div>
          <div class="dtif_tit" v-html="timeLine[twoPanel].title">
          </div>
          <div class="dtif_txt">
            <span>Total sGEG</span>
            <span>{{timeLine[twoPanel].tolGeg}} sGEG</span>
          </div>
          <div class="dtif_txt">
            <span>sGEG price</span>
            <span>{{timeLine[twoPanel].gegPri}} USDT/BUSD</span>
          </div>
          <div class="dtif_infobox" v-html="timeLine[twoPanel].info"></div>
        </div>
        <div>
          <div class="dtif_tit" v-html="timeLine[threePanel].title">
          </div>
          <div class="dtif_txt">
            <span>Total sGEG</span>
            <span>{{timeLine[threePanel].tolGeg}} sGEG</span>
          </div>
          <div class="dtif_txt">
            <span>sGEG price</span>
            <span>{{timeLine[threePanel].gegPri}}  USDT/BUSD</span>
          </div>
          <div class="dtif_infobox" v-html="timeLine[threePanel].info"></div>
        </div>
        <div class="dtif_ribox">
          <!-- <div class="dtif_tit"></div> -->
          <div class="dtifr_txt1">
            TARGET YIELD FARMING LAUNCHING<br> DATE = 8th AUGUST 2021<br>
            Stake
            <img src="~@/assets/imgs/hm_logo.png">
            sGEG earn
            <img src="~@/assets/imgs/dtit_ri_logo.png">
            GEG
          </div>
          <div class="dtifr_txt2"></div>
        </div>
      </div>
      <div class="dtb_btn" @click="$openPage('https://www.gefi.club/LogIn.aspx?ReturnUrl=%2f')">Claim Airdrops</div>
    </div>

    <div class="dt_ctbox">
      <div class="pc_box">
        <div class="dtc_tbox">
          Initial Stake Offering (ISO)
        </div>
        <div class="dtc_txbox" style="margin-bottom: 50px">
          • You will receive sGEG after the end of every phase, you will be able to stake into sGEG pool<br>
          to earn GEG token once the pool is officially launched<br>
          • 28,500 GEG Token will be distributed over period of 365 days to sGEG staking pool (Initial Staking Offering)<br>
          • When the pool is created, the presale participants of 285,000 sGEG can begin the staking process<br>
          • Please do take note that the staking process is non-reversible ONCE COMMITTED
        </div>
        <div class="dtc_subtxbox">
          YIELD FARMING LAUCHING DATE =  <span>12TH AUGUST 2021 (12:00 UTC TIME)</span><br>
          • Market lauching price of GEG = <span> 80 USDT/BUSD each</span><br>
          • Users will be able to purchase GEG token and add liquidity on <br>
          <span>Pancakeswap.Finance</span> and <span>MDEX.com</span><br>
          • GEG - LP Yield farming will be available on <span>GE.Finance</span><br>
          • GEG Token BSC Contract Address = <br>
          <span>0x99dAB6065951BecaC1dECBaC0C1A16b9BbF12913</span><br>
        </div>
        <div class="dtc_tbox">
          Usage of collected funds from sGEG public sales
        </div>
        <div class="dtc_txbox" style="margin-bottom: 50px">
          • 70%  of collected funds from sGEG presale will be allocated for liquidity on Pancakeswap.Finance and MDEX.com<br>
          • 30%  of collected funds from sGEG presale will be dedicated to the team to ensure sustainable and rapid innovation, <br>
          future incentives of cross-chain vaults and other products in GE.Finance ecosystem
        </div>
        <div class="dtc_tbox">
          Our K.O.L Applications
        </div>
        <div class="dtc_txbox">
          A total airdrop of 300 GEG (listing price at $80 per GEG ) will be shared among all Key Opinion Leaders (K.O.L).<br>
          1 GEG to 1 K.O.L upon fulfilling the requirements; to be distributed on project launching date. <br>
          Additional GEG will be distributed to top 10 best K.O.L!<br>
          Earn 10% of friends’ earnings forever by sharing YOUR referral link.
        </div>
        <div class="dtc_tbox">
          TIME FRAME: 23RD JULY 2021 (12:00 UTC TIME)<br> – 22ND AUGUST 2021 (11:59 UTC TIME)
        </div>
        <div class="dtc_tbox">
          Requirements:
        </div>
        <div class="dtc_txbox">
          PLATFORM:  YOUTUBE OR TIKTOK<br>
          TOPIC: GEFI HIGHLIGHTS<br>
          DURATION: 30 SECONDS – 1 MINUTE<br>
          HASHTAG: #GEFI #GEG #GES<br>
          VIEWS: 2000 AND ABOVE<br>
          ATTACH OWN REFERRAL LINK IN VIDEO CAPTION & DESCRIPTION<br>
          SUBMIT PROOF OF UPLOAD TO INFO@GE.FINANCE FOR VERIFICATION<br>
          VERIFICATION DATE: 25TH AUGUST 2021 – 31ST AUGUST 2021<br>
          DISTRIBUTION DATE: 1ST SEPTEMBER 2021
        </div>
        <div class="geg_btn" @click="$openMailbox('info@ge.finance')">Become Our K.O.L</div>
        <div class="dtc_tbox">
          Initial purchase requirement of 1 sGEG and a maximum <br> of 25,000 sGEG per wallet during Pre-Sales 
        </div>
        <div class="dtc_tbox">
          GEG Community:
        </div>
        <div class="dtc_txbox">
          Purchase at least 100,000USD value of sGEG to build your own community group<br>
          Earn 40% of your community group’s stake yield earnings
        </div>
        <div class="dtc_tbox">
          Terms & Conditions:
        </div>
        <div class="dtc_txbox">
          Purchase 100,000USD value of sGEG<br>
          Community group LOGO & short brief submission<br>
          Community Channels with at least 1000 subscribers<br>
          Promote GEG admin in channel as moderator<br>
          SAFT Simple Agreement Future Tokens between GeFi and community leader
        </div>
        <div class="geg_btn" @click="$openMailbox('info@ge.finance')">Community Applications</div>
        <div class="dtc_img">
          <img src="~@/assets/imgs/tit1.png">
        </div>.
        <div class="dtc_cvbox">
          <div>
            <img src="~@/assets/imgs/fv_le.png" style="width: 490px">
            <!-- <div class="dtc_txbox">
              Finance Vaults 40% - 38,000 GEG
            </div> -->
          </div>
          <div>
            <img src="~@/assets/imgs/fv_ri.png" style="width: 192px"><br>
            <img src="~@/assets/imgs/fv_txt.png" style="width: 287px">
          </div>
        </div>
        <div class="dtc_gifbox">
          <div>
            <div class="dtc_tbox">
              GEG (GeGem)
            </div>
            <div class="dtc_txbox">
              Create monetary incentives for the most<br>
              committed and motivated users by decentralized<br>
              finance vault
            </div>
            <div class="dtc_txbox">
              Purchase privilege items on GeHub and GeGame
            </div>
            <div class="dtcg_tbbox">
              <div class="dtcgt_nav">
                <div>Total Supply</div>
                <div>95,000 units</div>
              </div>
              <div class="dtcgt_nav">
                <div>Ticker</div>
                <div>GEG</div>
              </div>
              <div class="dtcgt_nav">
                <div>Chain</div>
                <div>Binance Smart Chain</div>
              </div>
              <div class="dtcgt_nav">
                <div>Compatibility</div>
                <div>TRUST WALLET / TOKEN POCKET</div>
              </div>
            </div>
          </div>
          <div>
            <div class="dtc_tbox">
              GES (GeStone)
            </div>
            <div class="dtc_txbox">
              Develop the world’s first and largest digital Gems & <br>
              Jewelry marketplace for crypto collectibles and <br>
              non-fungible tokens (NFTs). Buy, sell, and discover <br>
              exclusive digital assets and physical products.
            </div>
            <div class="dtc_txbox">
              Develop blockchain - powered game, multiplayer <br>
              collectibles NFT card, farm builder, battle game, <br>
              where anyone can buy and own virtual lands, mine <br>
              exciting items and meet new friends
            </div>
            <div class="dtcg_tbbox">
              <div class="dtcgt_nav">
                <div>Ticker</div>
                <div>GES</div>
              </div>
              <div class="dtcgt_nav">
                <div>Chain</div>
                <div>Binance Smart Chain</div>
              </div>
              <div class="dtcgt_nav">
                <div>Compatibility</div>
                <div>TRUST WALLET / TOKEN POCKET</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="isShowGodsPop" closeable round>
      <div class="vp_gbox">
        <div class="vpg_tibox">Public offering</div>
        <div class="vpg_wlbox"><wallet-btn></wallet-btn></div>
        <div class="vpg_waybox">
          <span>Payment method:</span>
          <div class="vpgw_wrap">
            <van-radio-group v-model="payMethod" direction="horizontal">
              <van-radio :name="0">USDT</van-radio>
              <van-radio :name="1">BUSD</van-radio>
            </van-radio-group>
          </div>
        </div>
        <div class="vpg_waybox">
          <span>Number of public offerings:</span>
          <div class="vpgw_intbox">
            <div class="vpgwi_mbox">
              <input type="text" placeholder="Please input quantity" v-model.trim="entNum">
              <span @click="getMax()">Max</span>
            </div>
          </div>
        </div>
        <div class="vpg_waybox" style="margin-top: -16px;">
          <span></span>
          <div class="vpgwi_bla">
            {{tokenList[payMethod].name}}: {{$toFixed(tokenList[payMethod].balance)}}
          </div>
        </div>
        <div class="vpg_bbox">
          <div class="vpg_le" @click="isShowGodsPop = false">cancel</div>
          <div class="vpg_ri" @click="clickBtn(entNum)">Submit</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import walletBtn from '@/web3/walletBtn.vue'
const toAdd = '0xaAbe720433973Fd4D42A96f2332412e3e17183B4'

export default {
  components: {
    walletBtn
  },
  data () {
    return {
      timeFn: null,
      nowTime: new Date(),
      days: 0,
      hours: 0,
      mintues: 0,
      seconds: 0,
      onePanel: 0,
      twoPanel: 1,
      threePanel: 2,
      isShowGodsPop: false,
      payMethod: 0,
      entNum: '',
      timeInfo: {
        isOpen: false,
        theIndex: 0,
        isExceed: false
      },
      timeLine: [
        {
          name: '1st',
          tolGeg: 57000,
          gegPri: 4,
          // startTime: new Date('2021/7/8 20:00:00'),
          startTime: 1625745600000,
          // endTime: new Date('2021/7/11 19:59:59'),
          endTime: 1626004799000,
          endTimeText: '2021/7/11',
          minNum: 1,
          maxNum: 25000,
          title: 'Phase 1<br> 8th July – 11th July 2021',
          info: 'Phase 1 Initial Stake Offering Period (3 days)<br> 8TH July 2021 (12:00pm UTC Time)<br> - 11TH July 2021 (11:59am UTC Time)'
        },
        {
          name: '2nd',
          tolGeg: 85500,
          gegPri: 5,
          // startTime: new Date('2021/7/12 20:00:00'),
          startTime: 1626091200000,
          // endTime: new Date('2021/7/22 19:59:59'),
          endTime: 1626955199000,
          endTimeText: '2021/7/22',
          minNum: 1,
          maxNum: 25000,
          title: 'Phase 2<br> 12th July – 22nd July 2021',
          info: 'Phase 2 Initial Stake Offering Period (10 days)<br> 12TH JULY 2021 (12:00PM UTC TIME)<br> – 22ND JULY 2021 (11:59AM UTC TIME) – 10 DAYS'
        },
        {
          name: '3rd',
          tolGeg: 142500,
          gegPri: 6,
          // startTime: new Date('2021/7/23 20:00:00'),
          startTime: 1627041600000,
          // endTime: new Date('2021/8/6 19:59:59'),
          endTime: 1628251199000,
          endTimeText: '2021/8/6',
          minNum: 1,
          maxNum: 25000,
          title: 'Phase 3 <br>23rd July – 6th August 2021',
          info: 'Phase 3 Initial Stake Offering Period (14 days)<br> 23RD July 2021 (12:00pm UTC Time)<br> - 6TH August 2021 (11:59am UTC Time)'
        },
      ],
      tokenList: [
        {
          name: 'USDT',
          tokenAdd: '0x55d398326f99059fF775485246999027B3197955',
          numAy: Math.pow(10, 18),
          isAuth: false,
          balance: 0,
          toBalance: 0
        },
        {
          name: 'BUSD',
          tokenAdd: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
          numAy: Math.pow(10, 18),
          isAuth: false,
          balance: 0,
          toBalance: 0
        },
      ]
    }
  },
  beforeDestroy () {
    if (this.timerFn) {
      clearInterval(this.timerFn)
    }
  },
  computed: {
    walletAddress: {
      get () {
        return this.$walletFuc.walletAddress
      }
    }
  },
  watch: {
    walletAddress () {
      this.init()
    }
  },
  created () {
    this.timeOut()
    this.init()
    this.setTimer()
  },
  methods: {
    getProgressBar (theIndex) {
      if (this.timeInfo.isOpen || this.timeInfo.isExceed) {
        const tol = this.$BigNumber(this.tokenList[0].toBalance).plus(this.tokenList[1].toBalance)
        .dividedBy(this.timeLine[theIndex].gegPri).dividedBy(this.timeLine[theIndex].tolGeg).multipliedBy(100).toFixed(2)
        if (tol > 100) {
          return '100.00'
        }
        return tol
      }
      return '0.00'
    },
    init () {
      this.tokenList.forEach((item, index) => {
        this.getToBalance(item)
      })
      if (this.walletAddress) {
        this.tokenList.forEach((item, index) => {
          this.getWalletBalance(item)
        })
      }
    },
    setTimer () { // 定时器
      if (this.timerFn) {
        clearInterval(this.timerFn)
      }
      this.timerFn = setInterval(() => {
        this.isOpenTime (false)
        this.init()
      }, 1000)
    },
    timeOut () { // 倒计时
      const showTime = () => {
        const nowTime = new Date()
        this.nowTime = nowTime
        let entTime = 0
        if (nowTime > this.timeLine[2].endTime) {
          this.onePanel = 2
          this.twoPanel = 1
          this.threePanel = 0
          return false
        }
        for (let i = 0; i < 3; i++) {
          if (nowTime <= this.timeLine[i].startTime) {
            entTime = this.timeLine[i].startTime
            this.onePanel = i
            this.twoPanel = i + 1 > 2 ? i - 1 : i + 1
            this.threePanel = i + 2 > 2 ? i - 1 : i + 2
            break
          }
          if (nowTime <= this.timeLine[i].endTime) {
            entTime = this.timeLine[i].endTime
            this.onePanel = i
            this.twoPanel = i + 1 > 2 ? i - 1 : i + 1
            this.threePanel = i + 2 > 2 ? i - 1 : i + 2
            break
          }
        }
        const timeApart = entTime - nowTime // 距离结束时间的毫秒数
        if (timeApart > 0) {
          const days = Math.floor(timeApart / (1000 * 60 * 60 * 24)).toString() // 计算天数
          const hours = Math.floor(timeApart / (1000 * 60 * 60) % 24).toString() // 计算小时数
          const mintues = Math.floor(timeApart / (1000 * 60) % 60).toString() // 计算分钟数
          const seconds = Math.floor(timeApart / 1000 % 60).toString() // 计算秒数
          this.days = days.length < 2 ? '0' + days : days
          this.hours = hours.length < 2 ? '0' + hours : hours
          this.mintues = mintues.length < 2 ? '0' + mintues : mintues
          this.seconds = seconds.length < 2 ? '0' + seconds : seconds
        } else {
          this.days = 0
          this.hours = 0
          this.mintues = 0
          this.seconds = 0
        }
      }
      this.timeOver = setInterval(function () {
        showTime()
      }, 1000)
    },
    async showGodsPop () {
      const obj = await this.isOpenTime()
      if (obj.isOpen) {
        this.payMethod = 0
        this.entNum = ''
        this.isShowGodsPop = true
      }
    },
    async isOpenTime (ishaveTips = true) {
      // const nowTime = new Date('2021/7/8 14:00:00')
      const nowTime = new Date()
      let timeInfo = {
        isOpen: false, // 未开放
        theIndex: 0,
        isExceed: false // 未到结束时间
      }
      if (nowTime > this.timeLine[2].endTime) {
        if (ishaveTips) {
          this.$toast('Initial Stake Offering ended')
        }
        return timeInfo
      }
      for (let i = 0; i < 3; i++) {
        if (nowTime < this.timeLine[i].startTime) {
          if (ishaveTips) {
            this.$toast('Stay tuned for the next phase')
          }
          break
        }
        if (nowTime <= this.timeLine[i].endTime) {
          Object.assign(timeInfo, {
            isOpen: true,
            theIndex: i,
            isExceed: true
          })
          break
        }
      }
      const usdtCont = this.$contract(this.$abierc, this.tokenList[0].tokenAdd)
      let usdtBalance = await usdtCont.methods.balanceOf(toAdd).call()
      usdtBalance = this.$BigNumber(usdtBalance).dividedBy(this.tokenList[0].numAy).toString()
      const busdCont = this.$contract(this.$abierc, this.tokenList[1].tokenAdd)
      let busdBalance = await busdCont.methods.balanceOf(toAdd).call()
      busdBalance = this.$BigNumber(busdBalance).dividedBy(this.tokenList[1].numAy).toString()
      const tol = this.$BigNumber(usdtBalance).plus(busdBalance).dividedBy(this.timeLine[timeInfo.theIndex].gegPri)
      .dividedBy(this.timeLine[timeInfo.theIndex].tolGeg).multipliedBy(100).toFixed(2)
      if (tol >= 100) {
        if (ishaveTips) {
          this.$toast('Initial Stake Offering ended')
        }
        Object.assign(timeInfo, {
          isOpen: false
        })
      }
      this.timeInfo = timeInfo
      return timeInfo
    },
    async getMax () {
      const obj = await this.isOpenTime()
      this.entNum = Math.min(this.tokenList[this.payMethod].balance, this.timeLine[obj.theIndex].gegPri * 25000)
    },
    async getWalletBalance (theItem) {
      const ercCont = this.$contract(this.$abierc, theItem.tokenAdd)
      let balance
      balance = await ercCont.methods.balanceOf(this.walletAddress).call()
      balance = this.$BigNumber(balance).dividedBy(theItem.numAy).toString()
      theItem.balance = balance
      return Promise.resolve(balance)
    },
    async getToBalance (theItem) {
      const ercCont = this.$contract(this.$abierc, theItem.tokenAdd)
      let toBalance = await ercCont.methods.balanceOf(toAdd).call()
      toBalance = this.$BigNumber(toBalance).dividedBy(theItem.numAy).toString()
      theItem.toBalance = toBalance
      return Promise.resolve(toBalance)
    },
    async clickBtn (entNum) {
      if (!this.walletAddress) {
        this.$toast(this.$t('js.Pleaseconnectyourwallet'))
        return false
      }
      const obj = await this.isOpenTime()
      if (!obj.isOpen) {
        return false
      }
      if (!entNum || !/^\d+(\.\d+)?$/.test(entNum)) {
        this.$toast('Please enter the correct quantity')
        return Promise.resolve(false)
      } else if (entNum < this.timeLine[obj.theIndex].gegPri) {
        this.$toast('Not less than ' + this.timeLine[obj.theIndex].gegPri +' ' + this.tokenList[this.payMethod].name)
        return false
      } else if (entNum > this.timeLine[obj.theIndex].gegPri * 25000 ) {
        this.$toast('Not more than ' + this.timeLine[obj.theIndex].gegPri * 25000 +' ' + this.tokenList[this.payMethod].name)
        return false
      }
      this.$toast.loading({
        duration: 0,
        message: this.$t('js.loading')
      })
      try {
        let theCont = this.$contract(this.$abierc, toAdd)
        const num = '0x' + this.$BigNumber(entNum).multipliedBy(this.tokenList[this.payMethod].numAy).toString(16)
        let value = 0
        let encodeABI = theCont.methods.transfer(toAdd, num).encodeABI()
        const gasPrice = await this.$walletFuc.getGasPrice()
        const gas = await this.$walletFuc.web3EstimateGas(encodeABI, this.tokenList[this.payMethod].tokenAdd, gasPrice, value)
        let txHash = ''
        if (this.$walletFuc.connectionMode === 'MetaMask') {
          txHash = await this.$walletFuc.metaMaskSendTransaction(encodeABI, this.tokenList[this.payMethod].tokenAdd, gasPrice, gas, value)
        } else if (this.$walletFuc.connectionMode === 'WalletConnect') {
          txHash = await this.$walletFuc.walletConnectSendTransaction(encodeABI, this.tokenList[this.payMethod].tokenAdd, gasPrice, gas, value)
        }
        this.entNum = ''
        this.isShowGodsPop = false
        return Promise.resolve(txHash)
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vp_gbox { 
  width: 900px;
  background: #051A2E;
  border-radius: 14px;
  .vpg_tibox {
    text-align: center;
    font-size: 26px;
    padding: 47px 0 20px;
  }
  .vpg_wlbox {
    padding: 6px 0;
    text-align: center;
    margin: 24px auto;
    width: 300px;
    background: linear-gradient(134deg, #04EF07 0%, #237F39 100%);
    color: #000;
    border-radius: 18px;
  }
  .vpg_waybox {
    margin: 24px 0;
    padding-left: 100px;
    display: flex;
    align-items: center;
    font-size: 18px;
    >span {
      padding-right: 30px;
      text-align: right;
      width: 260px;
      color: #51708E;
    }
    .vpgw_wrap {
      /deep/ .van-radio--horizontal {
        margin-right: 24px;
      }
      /deep/ .van-radio__label {
        color: #fff;
      }
    }
    .vpgw_intbox {
      .vpgwi_mbox {
        display: flex;
        align-items: center;
        width: 400px;
        height: 70px;
        background: #031425;
        border-radius: 14px;
        >input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          height: 100%;
          font-size: 18px;
          color: #fff;
          text-indent: 1em;
        }
        input::placeholder {
          color: #0C2F51;
        }
        >span {
          margin-right: 18px;
          padding: 6px 18px;
          color: #000;
          border-radius: 8px;
          background: linear-gradient(134deg, #04EF07 0%, #237F39 100%);
        }
      }
    }
    .vpgwi_bla {
      width: 400px;
      text-align: right;
      color: #1E568C;
      font-size: 16px;
    }
  }
  .vpg_bbox {
    padding: 8px 0 60px;
    width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    >div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 56px;
      font-size: 20px;
      border-radius: 6px;
      background: #0D3255;
      color: #fff;
    }
    .vpg_ri {
      color: #000;
      background: linear-gradient(134deg, #04EF07 0%, #237F39 100%);
    }
  }
}
.dt {
  padding-bottom: 100px;
  min-height: 4331px;
  background: url('~@/assets/imgs/dt_bg.png') no-repeat;
  background-size: 100% 100%;
  .dt_bbox {
    position: relative;
    .dtb_tbox {
      text-align: center;
      padding: 200px 0 80px;
      >img {
        width: 242px;
      }
      .dtbt_txt {
        color: #2EC78F;
        font-size: 42px;
      }
    }
  }
  .dt_ifbox {
    padding: 40px 0;
    background: rgba(255, 255, 255, 0.06);
    .dti_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #2EC78F;
      >div {
        text-align: center;
        font-size: 30px;
        .dtit_tbox {
          margin-bottom: 8px;
          font-size: 22px;
        }
      }
      >div:nth-child(1) {
        font-size: 48px;
      }
      .dtit_ri {
        position: relative;
        .dtitr_mbox {
          text-align: left;
          padding: 13px 40px;
          color: #162F06;
          font-size: 22px;
          width: 270px;
          background: linear-gradient(134deg, #04EF07 0%, #237F39 100%);
          border-radius: 29px;
          >img {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            width: 94px;
          }
        }
        .dtitr_txbox {
          position: absolute;
          width: 280px;
          text-align: right;
          right: 0;
          bottom: -90px;
          font-size: 14px;
          color: #8B8B8B;
          line-height: 20px;
        }
      }
    }
    .dtb_tmbox {
      margin: 24px 0;
      display: flex;
      justify-content: center;
      >div {
        font-size: 16px;
        text-align: center;
        >div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 93px;
          height: 93px;
          background: url('~@/assets/imgs/gezi.png') no-repeat;
          background-size: cover;
          font-size: 36px;
        }
      }
    }
    .dtb_probox {
      margin: 0 auto;
      padding: 14px 14px;
      width: 1222px;
      height: 38px;
      background: url('~@/assets/imgs/pro_line.png') no-repeat;
      background-size: cover;
      .dtp_line {
        position: relative;
        height: 100%;
        background: #fff;
        border-radius: 12px;
        .dtpl_dbox {
          position: absolute;
          top: -12px;
          right: -18px;
          width: 36px;
          height: 36px;
          background: url('~@/assets/imgs/pro_dian.png') no-repeat;
          background-size: cover;
        }
      }
    }
    .dtb_infobox {
      margin-bottom: -20px;
      text-align: center;
      font-size: 14px;
      color: #2EC78F;
    }
    .dtb_proInfo {
      margin: 4px auto;
      width: 1180px;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: #2EC78F;
    }
    .dtb_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      font-size: 22px;
      width: 282px;
      height: 94px;
      background: url('~@/assets/imgs/dt_btn.png') no-repeat;
      background-size: cover;
      color: #2EC78F;
    }
    .dti_febox {
      padding: 21px 0 120px;
      display: flex;
      justify-content: space-between;
      >div {
        position: relative;
        padding: 35px 12px 0;
        width: 380px;
        height: 237px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.1);
        .dtif_tit {
          margin-bottom: 28px;
          height: 69px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          text-align: center;
        }
        .dtif_txt {
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          color: #C7C7C7;
          font-size: 16px;
          >span:nth-child(2) {
            color: #2EC78F;
          }
        }
        .dtif_infobox {
          position: absolute;
          left: 0;
          width: 400px;
          top: 260px;
          font-size: 12px;
          color: #8B8B8B;
        }
      }
      .dtif_ribox {
        .dtifr_txt1 {
          text-align: center;
          margin-bottom: 12px;
          font-size: 17px;
          color: #2EC78F;
          line-height: 27px;
          >img {
            width: 24px;
            vertical-align: middle;
          }
        }
        .dtifr_txt2 {
          text-align: center;
          font-size: 16px;
          color: #2EC78F;
        }
      }
    }
  }
  .dt_ctbox {
    padding: 60px 0 230px;
    .dtc_tbox {
      margin: 12px 0;
      font-size: 28px;
      color: #2EC78F;
    }
    .dtc_txbox {
      margin: 12px 0;
      line-height: 24px;
      font-size: 16px;
    }
    .dtc_subtxbox {
      margin-bottom: 50px;
      font-size: 24px;
      line-height: 40px;
      span {
        color: #2EC78F;
      }
    }
    .dtc_img {
      >img{
        width: 642px;
      }
    }
    .dtc_cvbox {
      margin: 63px 0 83px;
      display: flex;
      justify-content: space-between;
      >div {
        flex: 1;
        img {
          margin: 12px 0;
        }
      }
      >div:nth-child(2) {
        text-align: center;
      }
    }
    .dtc_gifbox {
      display: flex;
      justify-content: space-between;
      >div {
        width: 528px;
      }
      .dtcg_tbbox {
        .dtcgt_nav {
          margin: 1px 0;
          display: flex;
          justify-content: space-between;
          >div {
            text-indent: 1em;
            display: flex;
            align-items: center;
            font-size: 16px;
            height: 60px;
            background: rgba(255, 255, 255, .06);
          }
          >div:nth-child(1) {
            width: 187px;
          }
          >div:nth-child(2) {
            width: 340px;
            color: #2EC78F;
          }
        }
      }
    }
  }
}
</style>
