import axios from "./axios"

//getMenu
export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data: param                          
  })
}