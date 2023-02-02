<template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            query: null
        }
    },
    created(){
        this.findQuestion();
    },
    methods: {
        async findQuestion(){
            this.query = this.$route.params.query
            const data = await this.$api.$get('/search', {
                data: this.query
            })
            console.log(data)
        }
    }
    
}
</script>
<style lang="">
    
</style>