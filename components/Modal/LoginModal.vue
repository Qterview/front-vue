<template>
  <div v-if="login.show" class="modal-outside">
    <div class="login-modal">
      <div class="head">
        <h5>로그인 인증</h5>
        <a
          @click.prevent="$store.commit('modal/SET_LOGIN_MODAL_CLOSE')"
          class="'close-btn'"
        >
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
</style>
