<template>
  <div v-if="socketstate.register" class="socket-outside">
    <div id="socket-modal">
      <div class="head">
        질문 등록 알림
      </div>
      <nuxt-link :to="{
        name: 'list-id',
        params: {
          id: alarmId,
        },
      }" @click.prevent="$store.commit('socketstate/SHOW_REGISTER_ALARM', false)">
        <h5 class="title">{{ `${alarmTitle}` }}</h5>
      </nuxt-link>

      <div class="btn-container">
        <button class="close-btn" @click.prevent="$store.commit('socketstate/SHOW_REGISTER_ALARM', false)">
          닫기
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import * as socket from "websocket";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["socketstate"]),
  },
  data() {
    return {
      socket: null,
      alarmTitle: "",
      alarmId: ""
    };
  },
  created: function () {

  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: "alarm",
      channel: "/alarm" //namespace
    })

    this.socket.on('alarm', (data) => {
      console.log('소켓 데이터:', data)
      this.$store.commit('socketstate/SHOW_REGISTER_ALARM', true)
      this.alarmTitle = data.data
      this.alarmId = data.id

    })

  },

};
</script>
<style lang="scss" scoped>
.socket-outside {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  //background: rgba(0, 0, 0, 0.75);
  display: grid;
  place-content: center;
  z-index: 1;


}

#socket-modal {
  width: 520px;
  padding: 24px;
  background: white;
  border-color: black;

  a {
    color: #222;
    display: block;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.4em;
    margin-top: 1px;
    height: 52px;
    margin-bottom: 0;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(34, 34, 34);
    font-size: 18px;
    font-weight: 700;
    padding: 23px 30px;
    border-bottom: solid 1px rgb(223, 225, 228);

    .close-btn>img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  .btn-container {
    display: flex;
    margin-top: 30px;
  }
}
</style>
