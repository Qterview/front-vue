<template>
  <div class="main-container">
    <main>
      <SearchBar />
      <BestBoardCard />
    </main>
  </div>
</template>

<script>
// import BoardCard from '@/components/Main/BoardCard'
import BestBoardCard from "@/components/Main/BestBoardCard";
export default {
  components: {
    // BoardCard,
    BestBoardCard,
  },
  // data(){
  //   return {
  //     mainContent: []
  //   }
  // },
  // created() {
  //       this.getQuestionList();
  //   },
  // methods: {
  //   async getQuestionList() {
  //           const data = await this.$api.$get("/posts/list")

  //           if (!Array.isArray(data)) {
  //               return;
  //           }
  //           console.log(data)

  //           this.mainContent = data;
  //       }
  // }
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    max-width: 70%;
  }
}
.board-card-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px 40px;
}

body {
  margin: 0;
}
</style>
