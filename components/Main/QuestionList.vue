<template>
  <div class="question-container">
    <section v-if="questionList.length > 0" class="question-list">
      <GlobalQuestionCard
        v-for="a in questionList"
        :question="a.question"
        :answer="a.answer"
        :key="a.id"
        :_id="a.id"
        :like="a.like"
      />
    </section>
  </div>
</template>
<script>
import { ThumbsUpIcon } from "vue-feather-icons";
export default {
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

      this.questionList = data.sort(function (a, b) {
        return b.like - a.like;
      });
    },

    getQuestionState($state) {
      setTimeout(async () => {
        if (this.questionList.length > 0) {
          this.lastIndex = this.questionList[this.questionList.length - 1].id;
        }
        // const data = await this.$api.$get(
        //     `/posts/search/${this.$route.params.id}?lastIndex=${this.lastIndex}`
        // );
        if (data.article.length === 0) {
          $state.complete();
        } else {
          this.articleList = this.articleList.concat(data.article);
          $state.loaded();
        }
      }, 100);
    },
  },
};
</script>
<style lang=""></style>
