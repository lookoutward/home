<template>
  <van-page>
    <van-nav-bar title="Case Studies" />
    <van-cell-group>
      <van-cell
        v-for="(item, index) in features"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        is-link
        @click="navigateTo(item.url)"
      />
    </van-cell-group>
  </van-page>
  <TabBar />
</template>

<script setup>
import { useRouter } from 'vue-router';
import TabBar from '@/components/TabBar.vue';

const router = useRouter();

const features = [
  {
    title: 'Midkey (Encryption tools)',
    icon: 'shield-o', // 使用 vant 内置的锁图标
    url: 'http://www.midkey.xyz', // 外部链接
  },
  {
    title: 'Guichat (Private chat)',
    icon: 'chat-o', // 使用 vant 内置的好友图标
    url: 'http://www.guichat.xyz', // 外部链接
  },
  {
    title: 'Web3 Domain (Proxy)',
    icon: 'hot-o', // 使用 vant 内置的好友图标
    url: '/proxy', // 外部链接
  },
];

// 导航函数
const navigateTo = (url) => {
  // 检查是否为外部链接
  if (url.startsWith('http')) {
    window.location.href = url;
  } else {
    router.push(url);
  }
};
</script>

<style scoped>
.page-bd {
  padding: 16px;
}
</style>
