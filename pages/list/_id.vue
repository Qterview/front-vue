<template>
    <div v-if="question !== null" class="main-container">
      <main>
        <BreadCrumb :question="question" />
        <h1>{{question}}</h1>

        <div class="info">
          <div class="left">
            <!-- <span>
              <WatchIcon class="icon" size="1x" />
              {{$moment(createdAt).format("MM.DD")}}
            </span> -->

            <!-- 조회수미구현 -->
            <!-- <span>
              <EyeIcon class="icon" size="1x" />
              {{viewCount}}
            </span> -->

            <!-- 추가질문 댓글등록 -->
            <!-- <span>
              <MessageCircleIcon class="icon" size="1x" />
              {{commentCount}}
            </span> -->
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
          <h5>{{answer}}</h5>
        </div>
        <!-- <picture v-if="article.articleImgAddress" class="article-image">
          <img
            :src="`https://blind-clone-coding.s3.ap-northeast-2.amazonaws.com/${article.articleImgAddress}`"
            :alt="article.articleImgAddress"
          />
        </picture> -->
        <div class="action">

          <div class="likeCount">
            <h3>추천수  {{ likeCount }}</h3> 
          </div>
          <div class="likeButton">
            <span>
              <ThumbsUpIcon v-if="tempCount==0" class="icon" size="2x" @click="tempCount+=1" @click.prevent="postLike"/>
            </span>
            <span>
              <ThumbsDownIcon v-if="tempCount==0" class="icon" size="2x" @click="tempCount+=1" @click.prevent="postUnlike" />
            </span>
            
            <!-- <span>
              <MessageCircleIcon class="icon" size="1x" />
              {{article.commentCount}}
            </span> -->
          </div>
          <div class="likedButton">
            <span>
              <ThumbsUpIcon v-if="tempCount!==0" class="icon" size="2x" />
            </span>
            <span>
              <ThumbsDownIcon v-if="tempCount!==0" class="icon" size="2x" />
            </span>
            
            <!-- <span>
              <MessageCircleIcon class="icon" size="1x" />
              {{article.commentCount}}
            </span> -->
          </div>
        </div>
        <!-- <section class="comment">
          <h5>추가질문 {{article.commentCount}}</h5>
          <InputComment :articleId="article._id" />
          <div class="comment-list">
            <CommentCard v-for="c in comment" :key="c._id" :comment="c" />
          </div>
        </section> -->
      </main>
      <!-- <RecommendArticleList /> -->
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
    //   CommentCard,
    //   CommentList,
    //   ContentCard,
    //   InputComment,
    //   RecommendArticleList,
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
        tempCount: 0,
        comment: []
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

      async postLike(){
        if(this.tempCount!==0){
          window.alert('이미 평가하였습니다.')
          return;
        }
        await this.$api.$post(`/posts/like/${this.id}`)
        this.likeCount += 1
      },

      async postUnlike(){
        if(this.tempCount!==0){
          window.alert('이미 평가하였습니다.')
          return;
        }
        await this.$api.$post(`/posts/unlike/${this.id}`)
        this.likeCount -= 1
      }
    }
  };
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
  .info{
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
    .likeCount{
      display: block;
      font-weight: bold;
      font-size: 18px;
      color: blueviolet;
      height: 50px;
      margin-left: 65px;
    }
    .likeButton {
      opacity: 0.4;
      display: flex;
      width: 200px;
      justify-content: space-between;
      gap: 20px;
    }
    .likedButton {
      opacity: 0.4;
      display: flex;
      width: 200px;
      justify-content: space-between;
      gap: 20px;
    }
  }
  .content {
    padding: 30px 0;
    white-space: pre-line;
    line-height: 28px;
  }
  </style>