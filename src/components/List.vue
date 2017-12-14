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
      <Page :total="totalCount * 6" show-elevator @on-change="changePage" :page-size="6" :current="curPage"></Page>
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
      if(!this.$route.query.curPage) { // url未指定页码数
        this.$router.push({
          path:'list',
          query:{
            curPage:1
          }
        })
      } else { // url手动输入
        this.curPage = this.$route.query.curPage
        this.getData()
      }
    },
    methods: {
      getData() {
        this.$Loading.start()
        const self = this
        const URL = 'http://imoocnote.calfnote.com/inter/getClasses.php'
        let param = {
          params:{
            curPage:this.curPage
          }
        }
        axios.get(URL, param)
          .then(response => {
            let data = response.data
            this.totalCount = data.totalCount
            this.lists = data.data.map(item =>{
              return {
                ...item,
                isLongTime:item.timespan.indexOf('小时') != -1 ? true : false
              }
            })
            this.$Loading.finish()
          })
          .catch(error => this.$Loading.error())
      },
      changePage(curPage) {
        this.$router.push({
          path:'list',
          query:{
            curPage:curPage
          }
        })
      }
    },
    watch:{
      $route() {
        this.curPage = this.$route.query.curPage //|| 1
        this.getData()
      }
    }
  }
</script>
