<template>
  <div class="main-container">
    <main>
      <SearchBar />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  main {
    width: 100%;
    max-width: 736px;
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
