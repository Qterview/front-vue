<template>
    <section class="breadcrumb">
      누군가의 질문과 ChatGPT의 응답
    </section>
  </template>
  <script>
  export default {
    props: {
      question: {
        type: String,
        required: true
      },
    }
  };
  </script>
  <style lang="scss" scoped>
  .breadcrumb {
    padding: 40px 0 20px;
    & > a {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      color: #222;
    }
  }
  </style>