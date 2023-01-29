<template>
  <nav>
    <div class="left-side">
      <nuxt-link to="/">
        <img src="" alt="Qterviw 로고" />
      </nuxt-link>
    </div>
    <div class="right-side">
      <a @click.prevent=""> 질문등록 </a>
      <a @click.prevent=""> 로그인 </a>
    </div>
    <LoginModal />
    <WritingModal />
  </nav>
</template>
<script>
import LoginModal from "@/components/Modal/LoginModal.vue";
import WriteModal from "@/components/Modal/WriteModal.vue";
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
        if(!this.user.email){
            this.$store.commit('modal/SHOW_LOGIN_MODAL')
        }
    },
    clickLoginButton(){
        if(!this.user.email){
            this.$store.commit('modal/SHOW_LOGIN_MODAL')
        }
    }
  }
};
</script>
<style lang=""></style>
