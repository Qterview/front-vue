<template>
    <div class="question-container">
        <!-- <div class="head">
            <div class="title-side">
                <h2></h2>
            </div>
            <nuxt-link :to="{
                name: 'list',
                params: {
                    id: '좋은 질문들'
                }
            }">  </nuxt-link>
        </div> -->

        <section v-if="questionList.length > 0" class="question-list">
            <!-- <nuxt-link v-for="a in questionList" :key="a._id" :class="question - link" :to="{
                name: 'question-id',
                params: { id: a.question },
            }"> -->
            <GlobalQuestionCard v-for="a in questionList" :question="a.question" :answer="a.answer" :key="a.id" :_id="a.id" :like="a.like" />
            <!-- <span lass="question-title">{{ a.question }}</span>
                <div class="count-like">
                    <ThumbsUpIcon size="1x" />
                    <span>{{ a.like }}</span>
                </div> -->
            <!-- </nuxt-link> -->
            <!-- <infinite-loading @infinite="getQuestionList"></infinite-loading> -->
        </section>
    </div>
</template>
<script>
import { ThumbsUpIcon } from "vue-feather-icons";
export default {
    // props: {
    //     question: {
    //         type: String,
    //         required: true
    //     },
    //     answer: {
    //         type: String,
    //         require:true
    //     },
    //     like : {
    //         type: Number,
    //         default:0
    //     },
    //     questionList: {
    //         type: Array,
    //         default: []
    //     }
    // },
    components: { ThumbsUpIcon },
    data() {
        return {
            questionList: [],
        };
    },
    created() {
        this.getQuestionList();
    },
    methods: {
        async getQuestionList() {
            const data = await this.$api.$get("/posts/list");

            if (!Array.isArray(data)) {
                return;
            }

            this.questionList = data.sort(function (a, b) {
                return b.like - a.like;
            });
        },

        getQuestionState($state) {
            setTimeout(async () => {
                if (this.questionList.length > 0) {
                    this.lastIndex = this.questionList[this.questionList.length - 1].id;
                }
                // const data = await this.$api.$get(
                //     `/posts/search/${this.$route.params.id}?lastIndex=${this.lastIndex}`
                // );
                if (data.article.length === 0) {
                    $state.complete();
                } else {
                    this.articleList = this.articleList.concat(data.article);
                    $state.loaded();
                }
            }, 100);
        }
    },
};
</script>
<style lang=""></style>
