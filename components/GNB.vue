<template>
  <div class="nav-container">
  <nav>
    <div class="side-block">
      <nuxt-link to="/" id="logo-btn">
        <img src="/logo/qterview_logo.png" alt="Qterviw 로고" />
      </nuxt-link>
    </div>
    <div class="side-block">
      <a @click.prevent="clickWriteButton" id="write-btn"> 질문등록 </a>
      <a @click.prevent="clickLoginButton" id="login-btn"> {{ user.email ? "로그아웃" : "로그인" }} </a>
    </div>
    <LoginModal />
    <WritieModal />
  </nav>
  </div>
</template>
<script>
import LoginModal from "@/components/Modal/LoginModal";
import WriteModal from "@/components/Modal/WriteModal";
import {mapState} from 'vuex';

export default {
  components: {
    LoginModal,
    WriteModal,
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    clickWriteButton(){
      //로그인해야 글쓰기
        // if(!this.user.email){
        //     this.$store.commit('modal/SHOW_LOGIN_MODAL')
        // }
        //return;
        this.$store.commit("modal/SET_WRITE_MODAL", true)
    },
    clickLoginButton(){
        if(!this.user.email){
            this.$store.commit('modal/SHOW_LOGIN_MODAL')
            return;
        }
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-container {
  border-bottom: 1px solid #d4d4d4;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 0 20px;
  max-width: 1100px;
  .side-block {
    display: flex;
    height: 100%;
    align-items: center;
    #logo-btn {
      margin-right: 60px;
    }
    .text-menu {
      color: #222;
      font-size: 20px;
      margin-right: 30px;
    }
    #write-btn {
      background: rgb(218, 50, 56);
      color: white;
      font-size: 14px;
      height: 40px;
      margin-left: 10px;
      width: 82px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }
    #login-btn {
      background: white;
      color: rgb(34, 34, 34);
      font-size: 14px;
      border: solid 1px rgb(212, 212, 212);
      height: 40px;
      margin-left: 10px;
      width: 82px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }
  }
}
</style>