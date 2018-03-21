<template>
  <div class='page-home'>
    <we-header></we-header>
    <p class='btn' @click = 'goLogin' v-if='!authenticated'>去登录</p>
    <p class='btn' @click = 'goAccount'>去账户中心</p>
    <p class='btn' @click = 'logout' v-if='authenticated'>退出</p>
    <img class='home-img' src='../../images/home/1.jpg' />
    <img class='home-img' src='../../images/home/1.png' />
    <div class='home-bg'></div>
  </div>
</template>

<script>
  import WeHeader from '~component/layouts/header.vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters({
        // 映射 this.auth/authenticated 为 store.getters.auth/authenticated
        authenticated: 'auth/authenticated',
      }),
    },
    methods: {
      ...mapActions({
        logout: 'auth/logout', // 映射 this.logout() 为 this.$store.dispatch('auth/logout')
      }),
      goLogin() {
        this.$router.push('/login');
      },
      goAccount() {
        this.$router.push('/profile');
      },
    },
    components: {
      WeHeader,
    },
    mounted() {
    },
  };
</script>
<style lang="less">
@import '~@/styles/var.less';

.page-home {
  .home-img {
    width: 100%;
  }
  .home-bg {
    width: 100%;
    height: 200px;
    background: url('@{imgPath}/home/2.jpg');
    background-size: cover;
  }
}
</style>
