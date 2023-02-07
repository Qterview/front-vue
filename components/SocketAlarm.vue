<template>
  <div v-if="socket.register" class="modal-outside">
    <div id="socket-modal">
      <div class="title">{{ alarmTitle }}</div>
      <div class="btn-container">
        <button
          class="cancel btn"
          @click.prevent="$store.commit('modal/SHOW_REGISTER_ALARM', false)"
        >
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
    ...mapState(["socket"]),
    ...mapState(["modal"])
  },
  data() {
    return {
      socket: null,
    };
  },
  created: function () {
    // const client = new socket.w3cwebsocket("ws://localhost:3001/");

    // client.onopen = function () {
    //   console.log("Connected");
    //   client.send(
    //     JSON.stringify({
    //       event: "events",
    //       data: "test",
    //     })
    //   );
    //   client.onmessage = function (data) {
    //     console.log(data);
    //   };
    // };
  },
  mounted() {
      this.socket = this.$nuxtSocket({
        name: "alarm",
        channel: "/alarm" //namespace
      })

      this.socket.on('connection', () => {
        this.getRegisterAlarm()
      }) 

  },
    methods: {
      async getRegisterAlarm(){
        const pending = this.$store.modal.pendingQuestion
        switch (true)
        {
          case !pending :    
          return;

          case pending :
          setInterval(()=>{
              this.socket.emit('alarm', (data) => {
                if(data){
                this.$store.commit('modal/SHOW_REGISTER_ALARM', true)
                this.alarmTitle = data
              }else{
                this.getRegisterAlarm()
              } 
              })
          }, 3000)
          break;
        }
      }
    },
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
