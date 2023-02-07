<template>
  <div v-if="modal.write" class="modal-outside">
    <div id="write-modal">
      <div class="head">
        <a
          @click.prevent="$store.commit('modal/SET_WRITE_MODAL', false)"
          class="close-btn"
        >
          <img src="" alt="닫기" />
        </a>
        <h5>글쓰기</h5>
        <a @click.prevent="confirmUploadModal">등록</a>
      </div>
      <div class="input-container">
        <!-- 제목입력 -->
        <!-- <input type="text" v-model="title" placeholder="제목입력" /> -->
        <!-- 본문입력 -->
        <textarea v-model="content" placeholder="질문을 입력해주세요"></textarea>
        <!-- 하단부 버튼 -->
        <!-- <div class="foot"></div> -->
      </div>
    </div>
    <ConfirmModal
      :show="showConfirmModal"
      :title="confirmTitle"
      @confirm="listenConfirm"
    />
  </div>
</template>
<script>
import ConfirmModal from "@/components/Modal/ConfirmModal.vue";
import { mapState } from "vuex";
export default {
  components: {
    ConfirmModal,
  },
  computed: { ...mapState(["modal"]) },

  data() {
    return {
      content: null,
      showConfirmModal: false,
      confirmTitle: "",
    };
  },
  methods: {
    closeConfirmModal() {
      this.showConfirmModal = false;
      this.confirmTitle = "";
    },
    confirmUploadModal() {
      this.showConfirmModal = true;
      this.confirmTitle = "시간대에 따라 응답이 지연될 수 있습니다.";
    },
    listenConfirm(confirm) {
      !confirm ? this.closeConfirmModal() : this.uploadQuestion();
    },

    async uploadQuestion() {
      const data = await this.$api.$post("/posts", {
        //title: this.title,
        question: this.content,
      });
      console.log(data)

      if (!data) {
        return;
      }

      this.closeConfirmModal();
      // this.$store.commit("modal/SET_PENDING_STATE", this.content)
      this.$store.commit("modal/SET_WRITE_MODAL", false);
    },
  },
};
</script>
<style lang="scss" scoped>
#write-modal {
  width: 750px;
  height: auto;
  background: white;
  height: 610px;
  .dropdown {
    width: inherit;
    user-select: none;
    .current-select {
      height: 68px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #d4d4d4;
      .down-icon {
        transition: 0.3s ease-in-out;
        &.rotated {
          transform: rotate(180deg);
        }
      }
    }
    .board-container {
      position: absolute;
      overflow-y: auto;
      width: inherit;
      border-bottom: 1px solid #d4d4d4;
      height: 100%;
      max-height: 252px;
    }
    .board-item {
      padding: 12px 20px 11px;
      font-size: 12px;
      border-bottom: 1px solid #f6f7fa;
      cursor: pointer;
      background: white;
      &:hover {
        color: #fff;
        background: #da3238;
      }
    }
  }
  .input-container {
    padding: 0 52px 55px;
  }
  input[type="text"] {
    padding: 26px 60px 24px 0;
    font-size: 20px;
    line-height: 1.25em;
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
  }
  textarea {
    width: 100%;
    resize: none;
    display: block;
    border: none;
    margin-top: 30px;
    font-size: 16px;
    min-height: 240px;
    overflow: hidden;
    letter-spacing: -0.1px;
    line-height: 1.5em;
  }
  .foot {
    height: 67px;
    padding: 0 24px;
    background: #f6f7fa;
    border: 0;
    display: flex;
    align-items: center;
    & > .icon {
      padding: 0 10px;
    }
  }
}
</style>
