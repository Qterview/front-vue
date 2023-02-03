<template>
  <article>
    <div class="head">
      <nuxt-link
        :to="{
          name: 'list-key',
          params: {
            key: key,
          },
        }"
        class="title"
      >
        {{ question }}
      </nuxt-link>
    </div>

    <div class="body">
      <nuxt-link
        :to="{
          name: 'list-key',
          params: {
            key: key,
          },
        }"
        class="content"
      >
        {{ answer }}
      </nuxt-link>
    </div>

    <div class="foot">
      <div class="left">
        <!-- <EyeIcon class="icon" size="1x" />
                {{ viewCount }} -->
        <nuxt-link
          :to="{
            name: 'list-key',
            params: {
              key: key,
            },
          }"
          class="count"
        >
          <ThumbsUpIcon class="icon" size="1x" />
          {{ like }}
        </nuxt-link>
      </div>
      <!-- <div class="right">
        {{ question.createdAt }}
      </div> -->
    </div>
  </article>
</template>
<script>
import {
  EyeIcon,
  ThumbsUpIcon,
  // MessageCircleIcon,
  // BookmarkIcon
} from "vue-feather-icons";
export default {
  props: {
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    like: {
      type: Number,
    },
    key: {
      type: String,
    },
  },
  components: { ThumbsUpIcon },
};
</script>
<style lang="scss">
article {
  padding: 20px;
  border-bottom: 1px solid #eee;

  a {
    color: #222;
  }

  &:nth-child(2n - 1) {
    border-right: 1px solid #eee;
  }

  .head {
    .title {
      display: block;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.4em;
      margin-top: 1px;
      height: 52px;
      margin-bottom: 0;
    }
  }

  .body {
    .content {
      margin-top: 4px;
      color: #222;
      display: block;
      font-size: 14px;
      line-height: 1.25em;
    }

    .info {
      margin-top: 20px;
      display: block;
    }
  }

  .foot {
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    opacity: 0.4;

    .count {
      margin-right: 15px;

      .icon {
        position: relative;
        top: 1px;
      }
    }
  }
}
</style>
