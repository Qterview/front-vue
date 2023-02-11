<template>
  <div class="question-container">
  <p></p>
    <section class="total">
      <strong>{{ query }}</strong>
      검색결과
      <p></p>
      전체({{ questionList.length }})
    </section>

    <section class="question-list">
      <GlobalQuestionCard
        v-for="a in questionList"
        :question="a.question"
        :key="a.id"
        :_id="a.id"
        :like="a.like"
      />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: null,
      questionList: [],
    };
  },
  created() {
    this.findQuestion();
  },
  methods: {
    async findQuestion() {
      this.query = this.$route.params.query;
      const data = await this.$api.$get(
        `/posts/search/${this.$route.params.query}`
      );

      this.questionList = data.map(v => {
        return {
            id: v._id,
            question: v.title,
            answer: v.content,
            like: v.useful,
        }
      });
      return this.questionList
    },
  },
};
</script>
<style lang="scss" scoped>
.total {
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-bottom: 1px solid #eee;
}
</style>
