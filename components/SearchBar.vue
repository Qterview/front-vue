<template>
  <div class="wrap-searchbar">
    <input type="text" v-model="query" placeholder="검색어 입력" />
    <nuxt-link
      :key="query"
      :to="{
        name: 'search-query',
        params: {
          query: query,
        },
      }"
    >
      <SearchIcon class="search-icon" />
    </nuxt-link>
  </div>
</template>
<script>
import { SearchIcon } from "vue-feather-icons";
export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      query: null,
    };
  },
  // methods: {
  //   handleChange(){
  //     this.$emit('search', this.query)
  //   }
  // }
};
</script>
<style lang="scss" scoped>
.wrap-searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999999;
  width: 100%;
  margin: 40px 0 20px;
  padding: 0px 10px 0px 10px;
  border-radius: 30px;
  &:focus-within {
    border: 2px solid #999999;
  }
  & > .search-icon {
    position: absolute;
    margin-right: 20px;
    margin-top: 18px;
  }
  & > a {
    color: #767676;
    margin-right: 10px;
  }
  & > input {
    display: block;
    width: inherit;
    height: 60px;
    padding: 0 15px 0 15px;
    border: none;
    border-radius: 20px;
    font-size: 18px;
    box-sizing: border-box;
    &:focus {
      outline-style: none;
    }
  }
}
</style>
