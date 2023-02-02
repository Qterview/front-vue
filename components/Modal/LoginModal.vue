<template>
  <div v-if="modal.login.show" class="modal-outside">
    <div id="login-modal">
      <div class="head">
        로그인
      </div>

      <div class="body">
      </div>
      <div class="foot">
        <a @click.prevent="$store.commit('modal/SET_LOGIN_MODAL_CLOSE')" class="'close-btn'">
          <img src alt />
        </a> 
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
  // data(){
  //   return {
  //     leftTime: 180,
  //     displayTime: '3분'
  //   }
  // }
};
</script>
<style lang="scss" scoped>
/* .modal-outside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    display: grid;
    place-content: center;
} */
#login-modal {
  background: white;
  width: 520px;
}
</style>
