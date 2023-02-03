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
        :class="question-link"
        :to="{
          name: 'question-id',
          params: { id: a.question },
        }"
      >
        <div class="question-title">
          {{ a.question }}
        </div>
        <div class="count-display">
          <div class="count-like">
            <ThumbsUpIcon size="1x" />
            {{ a.like }}
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
      const data = await this.$api.$get("/posts/list");

      if (!Array.isArray(data)) {
        return;
      }
      console.log(data);

      this.questionList = data.sort(function (a, b){
        return b.like - a.like
      });
    },
  },
};
</script>
<style lang=""></style>
