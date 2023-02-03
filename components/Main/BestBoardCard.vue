<template>
  <div class="board-container">
    <!-- <div class="head">
            <div class="title-side">
                <h2></h2>
            </div>
            <nuxt-link :to="{
                name: 'list',
                params: {
                    id: '좋은 질문들'
                }
            }">  </nuxt-link>
        </div> -->

    <section v-if="questionList.length > 0" class="question-list">
      <nuxt-link
        v-for="a in questionList"
        :key="a._id"
        :class="question - link"
        :to="{
          name: 'question-id',
          params: { id: a.question },
        }"
      >
        <div class="question-title">
          {{ a.title }}
        </div>
        <div class="count-display">
          <div class="count-like">
            <ThumbsUpIcon size="1x" />
            <span>
              {{ a.useful }}
            </span>
          </div>
        </div>
      </nuxt-link>
    </section>
  </div>
</template>
<script>
import { ThumbsUpIcon } from "vue-feather-icons";
export default {
  // props: {
  //     question: {
  //         type: String,
  //         required: true
  //     },
  //     answer: {
  //         type: String,
  //         require:true
  //     },
  //     like : {
  //         type: Number,
  //         default:0
  //     },
  //     questionList: {
  //         type: Array,
  //         default: []
  //     }
  // },
  components: { ThumbsUpIcon },
  data() {
    return {
      questionList: [],
    };
  },
  created() {
    this.getQuestionList();
  },
  methods: {
    async getQuestionList() {
      const data = await this.$api.$get("/posts?page=0");

      if (!Array.isArray(data)) {
        return;
      }
      console.log(data);

      this.questionList = data.sort(function (a, b) {
        return b.like - a.like;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.question-list > a {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: rgb(206, 217, 238);
  margin-bottom: 20px;
  padding: 30px 10px 30px 10px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  //좋아요 아이콘 밀림
  // & > div > .count-like {
  //   display: flex;
  //   position: absolute;
  //   & > svg,
  //   span {
  //     position: relative;
  //     display: flexbox;
  //     width: 20px;
  //     right: 40px;
  //     bottom: 10px;
  //     margin-left: 5px;
  //   }
  //   & > span {
  //     display: flexbox;
  //   }
  // }
}
</style>
