<template>
  <div class="question-container">
    <section>
      <strong>{{ query }}</strong>
      검색결과
    </section>
    <section class="total">전체({{ questionList.length }})</section>
    <section class="question-list">
      <GlobalQuestionCard
        v-for="a in questionList"
        :question="a.question"
        :key="a.id"
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
      console.log(data);
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
<style lang=""></style>
