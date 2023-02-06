<template>
  <div v-if="socketstate.register" class="modal-outside">
    <div id="socket-modal">
      <div class="title">{{ title }}</div>
      <div class="btn-container">
        <button
          class="cancel btn"
          @click="$store.commit('modal/SHOW_REGISTER_ALARM', false)"
        >
          닫기
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import * as socket from "websocket";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["socketstate"]),
  },
  data() {
    return {
      client: null,
    };
  },
  created: function () {
    const client = new socket.w3cwebsocket("ws://localhost:3001/");

    client.onopen = function () {
      console.log("Connected");
      client.send(
        JSON.stringify({
          event: "events",
          data: "test",
        })
      );
      client.onmessage = function (data) {
        console.log(data);
      };
    };
    // this.connection = new socket.w3cwebsocket('ws://localhost:3001', 'echo-protocol')
    // this.connection.onopen = function(event){
    //     console.log(event)
    //     console.log('웹소켓 연결')
    // }

    // this.connection.onmessage = function(event){
    //     console.log(event)
    // }

    // the code in this block will only run on client side
    // console.log("Starting connection to WebSocket Server")
    // this.connection = new socket.w3cwebsocket('ws://localhost:3001')

    // this.connection.onmessage = function(event) {
    //   console.log(event);
    // }

    // this.connection.onopen = function(event) {
    //   console.log(event)
    //   console.log("Successfully connected to the echo websocket server...")
    // }
  },
  mounted() {
    // window.socket = this.$nuxtSocket({
    //     // path: '/socket.io',
    //     transport: ['websocket'],
    //   })
    //   window.socket.open()
  },
  //   methods: {
  //     async getRegisterState(){
  //         setInterval(()=>{
  //             this.socket.emit('RegisterAlarm', 'Hello')
  //         }, 3000)
  //     }
  //   },
};
</script>
<style lang="scss" scoped>
#socket-modal {
  width: 320px;
  padding: 24px;
  background: white;

  .btn-container {
    display: flex;
    margin-top: 30px;
  }
}
</style>
