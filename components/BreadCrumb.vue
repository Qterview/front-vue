<template>
    <section class="breadcrumb">
      μμ±μΌμ {{ updatedDate }} {{ updatedTime }}
    </section>
  </template>
  <script>
  export default {
    props: {
    updatedDate: {
      type: String
    },
    updatedTime: {
      type: String
    }
  },

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