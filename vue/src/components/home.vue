<template>
  <div>
    <div class="home-body">
      <div class="home-card">
        <el-select v-model="provinceCode" placeholder="请选择省份" @change="provinceChange">
          <el-option
            v-for="item in provinceList"
            :key="item.value"
            :label="item.name"
            :value="item.value + ''">
          </el-option>
        </el-select>
      </div>
      <div  class="home-card">
        <el-select v-model="cityCode" placeholder="请选择城市">
          <el-option
            v-for="item in cityList"
            :key="item.value + ''"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
      </div>
      <div class="home-card">
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="search"
          >搜索</el-button>
      </div>
    </div>
    <div class="home-body">
    <div v-for="(item, index) in dataSource" :key="index" class="home-card">
      <el-card :body-style="{ padding: '0px', width: '115px' }">
        <img :src="item.images.small " class="home-image">
        <div style="padding: 1px;">
         <el-tooltip class="item" placement="top">
            <div slot="content">{{ item.title }}</div>
            <span class='home-title'>{{ item.title.length > 6 ? item.title.substring(0, 6) + '...': item.title}}</span>
          </el-tooltip>
          <div>
             <star-rate
              star-half
              disabled
              v-model="item.rating.average"
              type="star1"/>
             <span style="color: #ff9900;font-size: 12px">{{ item.rating.average * 2 }} 分</span>
            <!-- <el-button type="text" class="button">操作按钮</el-button> -->
          </div>
        </div>
      </el-card>
    </div>
  </div>
  <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="15"
      layout="total, prev, pager, next"
      :total="total">
  </el-pagination>
  </div>
</template>

<script>
import StarRate from 'vue-cute-rate'
import { getAllProvinceList, getCityByProvince } from 'utils'
import { getMovieList, test} from 'service'
  export default {
    components: {
      StarRate,
    },
    data() {
      return {
        provinceList: getAllProvinceList(),
        provinceCode: getAllProvinceList()[0].value,
        cityList: getCityByProvince(getAllProvinceList()[0].value),
        cityCode: getCityByProvince(getAllProvinceList()[0].value)[0].name,
        dataSource: [],
        total: 0,
        pageNum: 1,
        currentPage1: 5,
      }
    },
    mounted() {
      console.log(test, 'test')
      test()
      // this.search()
    },
    methods: {
      provinceChange (value) {
        this.cityList = getCityByProvince(value)
        if (this.cityList.length) {
            this.cityCode = getCityByProvince(value)[0].name
        } else {
          const { name } = this.provinceList.find(i => i.value === value)
          this.cityCode = name
        }
      },
      handleCurrentChange(val) {
        this.pageNum = val
        this.search()
        console.log(`当前页: ${val}`);
      },
      async search () {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
        });
        const { subjects = [], total } = await getMovieList({ cityCode: this.cityCode, pageNum: this.pageNum})
        loading.close();
        subjects.forEach(item => {
          item.rating.average = (item.rating.average / 2).toFixed(1) + ''
        })
        this.dataSource = subjects
        this.total = total
      },
    }
  } 
</script>
 <style>
  .home-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .home-title {
      display: inline-block;
      letter-spacing: normal;
      word-spacing: normal;
      margin-bottom: 10px 0px;
      color: #333;
  }
  .home-card{
    margin: 10px;
  }
  .home-image {
      width: 100%;
  }
  .iconfont {
    font-size: 12px !important;
    
  }
  .star-full {
    margin: 0 !important;
  }
 </style>
 
