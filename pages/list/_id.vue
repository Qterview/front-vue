<template>
  <div v-if="question !== null" class="main-container">
    <main>
      <BreadCrumb :createAt="createdAt" />
      <h1>{{ question }}</h1>

      <div class="info">
        <div class="left">
        </div>
        <div class="right">
          <span>
            <BookmarkIcon class="icon" size="1x" />
          </span>
          <span>
            <MoreHorizontalIcon class="icon" size="1x" />
          </span>
        </div>
      </div>
      <div class="content">
        <h5>{{ answer }}</h5>
      </div>
      <div class="action">

        <div class="likeCount">
          <h3>추천수 {{ likeCount }}</h3>
        </div>
        <div class="likeButton">
          <span class="likeButtonInner">
            <ThumbsUpIcon class="icon" size="2x" @click.prevent="postLike" />
          </span>
          <span class="unlikeButtonInner">
            <ThumbsDownIcon class="icon" size="2x" @click.prevent="postUnlike" />
          </span>
        </div>
        <!-- <div class="likedButton">
          <span>
            <ThumbsUpIcon v-if="tempCount!==0" class="icon" size="2x" />
          </span>
          <span>
            <ThumbsDownIcon v-if="tempCount!==0" class="icon" size="2x" />
          </span>
        </div> -->
      </div>
    </main>
  </div>
</template>
<script>
import {
  EyeIcon,
  WatchIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  MessageCircleIcon,
  BookmarkIcon,
  MoreHorizontalIcon
} from "vue-feather-icons";
export default {
  components: {
    EyeIcon,
    WatchIcon,
    ThumbsUpIcon,
    ThumbsDownIcon,
    MessageCircleIcon,
    BookmarkIcon,
    MoreHorizontalIcon
  },
  data() {
    return {
      id: null,
      question: null,
      answer: null,
      like: 0,
      likeCount: 0,
      tempList: [],
      createdAt: null,
      // comment: [],
    };
  },
  created() {
    this.getQuestion();
  },
  methods: {
    async getQuestion() {
      this.id = this.$route.params.id;
      const data = await this.$api.$get(`/posts/${this.id}`);
      this.question = data.title;
      this.answer = data.content;
      this.like = data.useful;
      this.likeCount = this.like
      this.createdAt = data.createdAt;
    },

    async postLike() {
      if (this.tempList.includes(this.id)) {
        window.alert('이미 평가하였습니다.')
        return;
      }
      try {
        await this.$api.$post(`/posts/like/${this.id}`)
        this.likeCount += 1
        this.tempList.push(this.id)

      } catch (error) {
        if (error.response.data.msg === '이미 평가했습니다')
          window.alert('이미 평가하였습니다.')
        return;
      }

    },

    async postUnlike() {
      if (this.tempList.includes(this.id)) {
        window.alert('이미 평가하였습니다.')
        return;
      }
      try {
        await this.$api.$post(`/posts/unlike/${this.id}`)
        this.likeCount -= 1
        this.tempList.push(this.id)

      } catch (error) {
        if (error.response.data.msg === '이미 평가했습니다')
          window.alert('이미 평가하였습니다.')
        return;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 24px;
  margin: 0;
  line-height: 32px;
}

h5 {
  font-size: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.info {
  opacity: 0.4;
  color: #222;
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    gap: 20px;

    .icon {
      position: relative;
      top: 1.5px;
    }
  }
}

.action {
  margin: 250px;

  /* display: flex; */
  /* justify-content: space-between; */
  .likeCount {
    display: block;
    font-weight: bold;
    font-size: 18px;
    color: blueviolet;
    height: 50px;
    margin-left: 65px;
  }

  .likeButton {
    opacity: 0.6;
    display: flex;
    width: 200px;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
  }
  .likeButtonInner:hover {
    opacity: 0.4;
  }
  .unlikeButtonInner:hover {
    opacity: 0.4;
  }

  .likedButton {
    opacity: 0.4;
    display: flex;
    width: 200px;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
  }
}

.content {
  padding: 30px 0;
  white-space: pre-line;
  line-height: 28px;
}
</style>