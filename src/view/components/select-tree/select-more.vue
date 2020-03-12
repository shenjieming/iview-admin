<template>
  <Row>
    {{userpage}}
    <Input v-model="userName" placeholder="请输入用户名"  @input="handleReachBottom" @on-focus="filterMatch(userName)">
      <Icon type="ios-arrow-down" slot="suffix"  v-if="scrollshow" @click="scrollshow=!scrollshow"/>
      <Icon type="ios-arrow-up" slot="suffix"  v-else @click="scrollshow=!scrollshow"/>
    </Input>
    <div class="scrollClass" v-show="scrollshow">
      <Scroll height="100" :on-reach-bottom="handleReachBottom" loading-text="加载中...">
        <div  v-for="(item,index) in userNameList" :key="index"  @click="selected(item)"  class="scrollListClass">
          {{ item.name }}
        </div>
        <div @click.stop="handleReachBottom" style="text-align: center;cursor: pointer" class="scrollListClass" v-if="userNameList.length">加载更多...</div>
        <div style="text-align: center;cursor: pointer" class="scrollListClass" v-else>暂无数据...</div>
      </Scroll>
    </div>
  </Row>
</template>
<script>
  import Icons from "../../../components/icons/icons";
  export default {
    components: {Icons},
    data () {
      return {
        userName: '',
        scrollshow: false,
        userpage: 1,
        userNameList: []
      }
    },
    computed: {
    },
    methods: {
      scrollListClick(val){
        console.log(val)
        this.scrollshow = false;
        // this.formValidate = val;
        // this.Formdata = val;
        // this.formValidate.userName = val.name;
        // // console.log(111)
        // this.handleSelectAll(false);
      },
      // 过滤匹配数据
      filterMatch (val) {
        if (val && val !== '') {
          console.log(this.userNameList.filter(item => item.name.indexOf(val) >= 0))
          // this.userNameList = this.userNameList.filter(item => item.name.indexOf(val) >= 0)
        }
      },
      // 获取数据
      getList() {
        for (let i= 0; i<= 5; i ++) {
          this.userNameList.push({name: `姓名${i+this.userpage}`})
        }
      },
      handleReachBottom () {
        return new Promise(resolve => {
          this.scrollshow = true
          this.userpage = this.userpage ++
          setTimeout(() => {
            this.getList()
            this.filterMatch(this.userName)
          }, 500)
        })
      },
      selected (item) {
        console.log(item)
        this.userName = item.name
      }
    },
    mounted() {
      document.addEventListener('click', (e)=> {
        if (e.target.className != 'scrollClass') {
          this.scrollshow= false;
        }
      })
    }
  }
</script>
<style lang="less">
  .scrollClass{
    position:absolute;
    background:white;
    z-index:3;
    width:100%;
    overflow:hidden;
    /*border:1px solid #eee;*/
    cursor: pointer;
    border-radius: 4px;
    ::-webkit-scrollbar
    {
      width: 6px;
      height: 16px;
      background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
      // -webkit-box-shadow: inset 0 0 6px #e9eaec;
      border-radius: 3px;
      background-color: #f5f7f9;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
      border-radius: 3px;
      // -webkit-box-shadow: inset 0 0 6px #e9e9e9;
      background-color: #ccc;
    }
  }
  .scrollListClass{
    height:24px;
    line-height:24px;
    /*border:1px solid #eee;*/
    padding: 2px 10px;
  }
  .scrollListClass :hover{
    background: #F3F3F3;
  }
</style>
