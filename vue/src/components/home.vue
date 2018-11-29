<template>
  <el-row type="flex">
    <el-col>
      <el-select v-model="provinceCode" placeholder="请选择省份" @change="provinceChange">
        <el-option
          v-for="item in provinceList"
          :key="item.value"
          :label="item.name"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col>
      <el-select v-model="cityCode" placeholder="请选择城市">
        <el-option
          v-for="item in cityList"
          :key="item.value"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
    </el-col>
    <el-col>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { getAllProvinceList, getCityByProvince } from 'utils'
  console.log(getAllProvinceList())
  export default {
    data() {
      return {
        provinceList: getAllProvinceList(),
        provinceCode: getAllProvinceList()[0].value,
        cityList: getCityByProvince(getAllProvinceList()[0].value),
        cityCode: getCityByProvince(getAllProvinceList()[0].value)[0].name
      }
    },
    methods: {
      provinceChange (value) {
        this.cityList = getCityByProvince(value)
        this.cityCode = getCityByProvince(value)[0].name
      }
    },
    mounted() {
      
    },
  } 
</script>
 
