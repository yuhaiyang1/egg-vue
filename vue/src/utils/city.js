/**
 * des: 获取省市区数据
 * 调用说明：
 * getAllProvinceList()方法获取所有的省份
 * getAllCityList() 方法获取所有的城市
 * getCityByProvince(provinceCode) 方法获取某个省份对应的所有城市，需要传入省份的 code
 * author: heyun
 */

const PROVINCE_CITY_API  = require ('./cityData')
const getList = (code) => {
  let list = []
  for (let key in PROVINCE_CITY_API) {
    if (PROVINCE_CITY_API[key][1] === `${code}`) {
      list.push({
        name: PROVINCE_CITY_API[key][0],
        value: key
      })
    }
  }
  return list
}

 // 获取所有的省份
export const getAllProvinceList = () => {
  return getList('086')
}

 // 获取所有的城市
export const getAllCityList = () => {
  return getList('086').reduce((total, item) => {
    return total.concat(getList(item.value))
  }, [])
}

// 获取某个省份的城市
export const getCityByProvince = (provinceCode) => {
  return getList(provinceCode)
}

// 获取某个城市的地区列表
const getRegionByCityCode = (cityCode) => {
  return getList(cityCode)
}
