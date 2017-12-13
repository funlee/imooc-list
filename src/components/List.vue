<template>
  <div class="list">
    <div class="top">
      <a href="https://www.imooc.com/" class="logo">
        <span class="logo-img"></span>程序员的梦工厂</a>
    </div>
    <div class="course">
      <Row :gutter="20">
        <Col :xs="24" :sm="12" :md="8" :lg="8" v-for="list in lists" :key="list.id">
        <div class="course-item">
          <img :src="list.image" :alt="list.title" :title="list.title" class="course-img">
          <div class="title_div">
            <span class="title">{{list.title}}</span>
          </div>
          <div class="subtitle">{{list.subtitle}}</div>
          <div :class="{long:list.isLongTime,timetitle:true}">{{list.timespan}}</div>
        </div>
        </Col>
      </Row>
    </div>
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="24">
      <Page :total="totalCount * 6" show-elevator v-on:on-change="changePage" page-size="6"></Page>
      </Col>
    </Row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'List',
    data() {
      return {
        lists: [],
        curPage: 1,
        totalCount: 1
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.$Loading.start()
        const self = this
        const URL = 'http://imoocnote.calfnote.com/inter/getClasses.php'
        axios.get(URL, {
            params: {
              curPage: self.curPage
            }
          })
          .then(response => {
            self.lists = []
            self.totalCount = response.data.totalCount
            var dataset = response.data.data
            dataset.map(item => {
              item.isLongTime = item.timespan.indexOf('小时') != -1 ? true : false
              self.lists.push(item)
            })
            self.$Loading.finish()
          })
          .catch(error => {
            console.log(error)
            self.$Loading.error()
          })
      },
      changePage(curPage) {
        this.curPage = curPage
        this.getData()
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
