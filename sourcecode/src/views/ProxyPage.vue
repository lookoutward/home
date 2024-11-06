<template>
  <div class="container">
    <van-nav-bar title="Web3 Domain Agency" />

    <div class="content">

      <div>
        <div><strong>Potential Value of Web3 Domains</strong></div>
        <p>Scarcity and Uniqueness: Web3 domains are typically based on blockchain technology, ensuring they are
          unique and non-replicable.</p>
        <p>Wide Applications: They can serve as identification tools for digital assets, wallet addresses, and can
          also function as URLs in decentralized browsers.</p>
        <p>Market Demand: As the Web3 ecosystem grows, more businesses and individuals are becoming interested in
          decentralized applications and blockchain technology, driving up demand for Web3 domains.</p>
        <p>Investment Potential: Similar to digital currencies or NFTs, Web3 domains are considered digital assets
          with investment potential.</p>
        <p>Trading Platforms: Numerous dedicated platforms exist for the buying and selling of Web3 domains.</p>
      </div>
      <div>&nbsp;</div>

<!-- 
      <div class="scroll-container">
        <van-nav-bar title="Auction/Sale/Registration" />
        <div class="scroll-content">
        </div>
      </div> -->

      <div>&nbsp;</div>


      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>



    </div>

    <TabBar />


  </div>
</template>

<script>
import { NavBar, } from 'vant';
import TabBar from '@/components/TabBar.vue'; // 确保路径正确

export default {
  name: 'ScrollComponent',
  components: {
    'van-nav-bar': NavBar,
    TabBar // 确保 TabBar 组件被注册

  },
  setup() { }
};
</script>

<style scoped>
.custom-width {
  width: 5ch;
}

.unit {
  color: #e20e0e;
}

.tabbar-link {
  display: flex;
  flex: 1;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 16px;
}

p {
  margin-bottom: 16px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.input-field {
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;
}

.payment-button {
  width: 100%;
  max-width: 400px;
}

.van-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}


/*****************滚动******************** */

.scroll-container {
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  background-color: #f3f3f3;
}

.scroll-content {
  position: absolute;
  animation: scroll-up 50s linear infinite;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>
