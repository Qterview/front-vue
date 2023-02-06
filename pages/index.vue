<template>
  <div class="main-container">
    <main>
      <SearchBar />
      <QuestionList /> 
      <Socket />
    </main>
  </div>
</template>

<script>
// import * as socket from "websocket";
import QuestionList from '@/components/Main/QuestionList'
export default {
  components: {
    QuestionList
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
    width: 100%;
    max-width: 736px;
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
