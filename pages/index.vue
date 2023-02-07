<template>
  <div class="main-container">
    <main>
      <SearchBar />
      <QuestionList />
      <SocketAlarm />
    </main>
  </div>
</template>

<script>
import QuestionList from "@/components/Main/QuestionList";
export default {
  components: {
    QuestionList,
  },
};
</script>

<style lang="scss">
/* .main-container {
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
.board-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px 40px;
}

body {
  margin: 0;
} */
</style>
