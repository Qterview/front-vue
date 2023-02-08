<template>
  <div v-if="socketstate.register" class="socket-outside">
    <div id="socket-modal">
      <div class="head">
        <span>질문 등록 완료</span>
        <div class="btn-container">
          <img
            src="/cross-icon.png"
            alt="닫기"
            @click.prevent="
              $store.commit('socketstate/SHOW_REGISTER_ALARM', false)
            "
          />
        </div>
      </div>

      <nuxt-link
        :to="{
          name: 'list-id',
          params: {
            id: alarmId,
          },
        }"
        @click.prevent="$store.commit('socketstate/SHOW_REGISTER_ALARM', false)"
      >
        <h5 class="title">{{ `${alarmTitle}` }}</h5>
      </nuxt-link>
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
      alarmId: "",
    };
  },
  created: function () {},
  mounted() {
    this.socket = this.$nuxtSocket({
      name: "alarm",
      channel: "/alarm", //namespace
    });

    this.socket.on("alarm", (data) => {
      console.log("소켓 데이터:", data);
      this.$store.commit("socketstate/SHOW_REGISTER_ALARM", true);
      this.alarmTitle = data.data;
      this.alarmId = data.id;
    });
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
  background: rgba(0, 0, 0, 0.6);
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
    padding: 0px 30px 20px 10px;
    border-bottom: solid 1px rgb(223, 225, 228);
  }

  .title {
    padding-left: 10px;
  }

  .btn-container {
    display: flex;
    position: relative;
    top: -10px;
    left: 35px;

    & > img {
      cursor: pointer;
      width: 16px;
    }
  }
}
</style>
