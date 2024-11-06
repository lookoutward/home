<template>
  <div class="container">
    <van-nav-bar title="LookOutward" />

    <div class="content">
      <div>
        <div><strong>LookOutward: Unlocking the Potential of Web3.
        </strong></div>

        <div>
          <p>At LookOutward, we empower Web3 innovation with the stability and security of Bitcoin through Stacks. Our
          mission is to enable businesses and developers to build decentralized applications (DApps) and smart contracts
          that leverage Bitcoin’s unmatched security as a foundation for growth and trust.</p>

          <p>With our Stacks-based solutions, you gain access to a powerful ecosystem that combines the programmability of
          smart contracts with Bitcoin’s proven track record. Our platform supports various applications, from
          decentralized finance (DeFi) and social networks to NFTs and asset management, all designed to meet the
          demands of today’s digital landscape.</p>

          <p>Choose a solution that’s secure, scalable, and Bitcoin-native. With LookOutward, you’re not just building
          apps—you’re creating a new Web3 experience rooted in the most secure blockchain network. Start your journey
          with us and bring your Web3 vision to life on Bitcoin.</p>
        </div>
      </div>
    </div>


    <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>



    <TabBar />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'; // 确保路径正确

export default {
  components: {
    TabBar, // 确保 TabBar 组件被注册
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
  /* 添加滚动条支持，防止内容溢出 */
}
</style>
