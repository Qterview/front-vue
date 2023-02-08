<template>
  <div v-if="modal.login.show" class="modal-outside">
    <div id="login-modal">
      <div class="head">
        <h5>로그인</h5>
        <a @click.prevent="$store.commit('modal/CLOSE_LOGIN_MODAL')" class="close-btn">
          <img src="/icon/close.png" alt="닫기" />
        </a>
      </div>
      <div class="body">
        <div class="row">
          <label for="user-email">
            이메일
          </label>
          <input id="user-email" type="email" v-model="email" />
        </div>
        <div class="row">
          <label for="user-password">
            비밀번호
          </label>
          <input id="user-password" type="password" v-model="password" />
        </div>
        <button class="login-btn" @click="login">이메일로 로그인</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["modal"]),
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async login(){
      const data = await this.$axios.$post('/', {email: this.email, password: this.password})
    
      if(data.error){
        return;
      }
     this.$store.commit("user/SET_USER", { email: data.email, nickname: data.nickname})
     this.$store.commit('modal/CLOSE_LOGIN_MODAL')
    },


  }
};
</script>
<style lang="scss" scoped>

#login-modal {
  background: white;
  width: 520px;
  border-radius: 10px;
  .body{
    font-size: 16px;
    padding: 0 30px;
    line-height: 24px;
    .row{
      margin: 20px 0;
      label{
        display: block;
      }
      input{
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
      }
    }
    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(55, 172, 201);
      border: none;
      color: white;
      font-size: 24px;
      font-weight: 400;
      width: 100%;
      height: 64px;
      margin-bottom: 30px;
    }
  }
}
</style>
