<template>
  <div class="container">
    <van-nav-bar title="Solutions" />

    <div class="content">
      <div>
        <div><strong>Solutions</strong></div>


        <div>


          <p>
            Discover a robust range of Web3 solutions built on Stacks, leveraging Bitcoin's security and
            decentralization.
            Our offerings include smart contract development, DApp creation, and token issuance, all designed for
            diverse
            business scenarios—finance, social platforms, NFTs, and beyond. Each solution is tailored to meet the
            specific
            needs of your industry, ensuring you can effectively engage with your audience.</p>
          <p>
            Our development process utilizes modern technologies to enhance your applications' performance and user
            experience. By employing Node.js, we create scalable and efficient server-side solutions that handle
            real-time
            data effortlessly. Combined with Vue 3, we build responsive front-end applications that offer seamless
            interactions and a dynamic user interface, ensuring that your DApps are not only functional but also
            visually
            appealing.</p>
          <p>
            Additionally, our expertise in Clarity enables us to develop secure and predictable smart contracts that are
            fully integrated with the Stacks blockchain. This clarity in programming allows for enhanced security and
            transparency in your transactions, setting a solid foundation for your Web3 projects. Whether you're
            launching
            a new NFT collection or a decentralized finance platform, our team has the skills to deliver robust
            solutions.</p>
          <p>
            Each solution integrates seamlessly with the Bitcoin network, providing unparalleled security and
            interoperability. By tapping into Bitcoin’s stability and transparency, you can build innovative, scalable
            applications and confidently expand your reach in the Web3 landscape. Partner with us to leverage
            cutting-edge
            technology and transform your vision into reality, making a lasting impact in the decentralized economy.</p>

            <div><strong>Stacks</strong></div>

            <p>
          Stacks is an innovative layer that brings smart contracts and decentralized applications (DApps) to Bitcoin,
          enhancing its capabilities without altering its core principles. By leveraging the security and stability of
          the Bitcoin network, Stacks enables developers to create applications that are both powerful and secure. With
          its unique consensus mechanism, known as Proof of Transfer (PoX), Stacks connects to Bitcoin, allowing users
          to earn Bitcoin rewards while building on this robust platform. This integration ensures that all Stacks
          applications benefit from the unparalleled security that Bitcoin is known for, making it an ideal foundation
          for Web3 solutions.</p>
          <p>
          One of the standout features of Stacks is its developer-friendly environment, which supports familiar
          programming languages and frameworks. Stacks utilizes Clarity, a decidable smart contract language that
          provides predictability and security in contract execution. This allows developers to build DApps with
          confidence, knowing that their code will behave as expected. Additionally, Stacks seamlessly interacts with
          Bitcoin's native assets, enabling the creation of new tokens and decentralized financial services. By bridging
          the gap between traditional Bitcoin functionality and advanced smart contract capabilities, Stacks is paving
          the way for a new era of decentralized applications.</p>





        </div>

        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>


    </div>




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
