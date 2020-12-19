import ajax from './ajax'

//http://demo.itlike.com/web/xlmc/api/homeApi
//http://demo.itlike.com/web/xlmc/api/homeApi/categories
//http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001/   001-006

export const getHomeData = () => ajax('http://demo.itlike.com/web/xlmc/api/homeApi')

export const getCateData = () => ajax('http://demo.itlike.com/web/xlmc/api/homeApi/categories')

export const getCateDetailData = (detail) => ajax('http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/' + detail)


//用户中心接口
//http://demo.itlike.com/web/xlmc/api/send_code
//http://demo.itlike.com/web/xlmc/api/login_code
//http://demo.itlike.com/web/xlmc/api/login_pwd
//http://demo.itlike.com/web/xlmc/api/userinfo
//http://demo.itlike.com/web/xlmc/api/logout

//获取短信验证码（get）
export const getPhoneCode = (phone) => ajax('http://demo.itlike.com/web/xlmc/api/send_code', { phone })

//手机验证码登录（post）
export const PhoneCodeLogin = (phone, code) => ajax('http://demo.itlike.com/web/xlmc/api/login_code', { phone, code }, "POST")

export const passWorldLogin = (user_name, user_pwd, captcha) => ajax('http://demo.itlike.com/web/xlmc/api/login_pwd', { user_name, user_pwd, captcha }, "POST")

//自动登录
export const getUserInfo = () => ajax('http://demo.itlike.com/web/xlmc/api/userinfo')

export const getLogOut = () => ajax('http://demo.itlike.com/web/xlmc/api/logout')


//用户地址接口
//http://demo.itlike.com/web/xlmc/api/address/search/+user_id  //获取地址
//http://demo.itlike.com/web/xlmc/api/address/add  //添加地址
//http://demo.itlike.com/web/xlmc/api/address/  //获取地址
//http://demo.itlike.com/web/xlmc/api/address/del  //删除地址
//http://demo.itlike.com/web/xlmc/api/address/one //获取单条地址

export const getUserAddress = (user_id) => ajax('http://demo.itlike.com/web/xlmc/api/address/search/' + user_id);

export const addUserAddress = (user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode) => ajax('http://demo.itlike.com/web/xlmc/api/address/add', { user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode }, 'POST');

export const changeUserAddress = (address_id, user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode) => ajax('http://demo.itlike.com/web/xlmc/api/address/edit', { address_id, user_id, address_name, address_phone, address_area, address_area_detail, address_post_code, address_tag, province, city, county, areaCode }, 'POST');

export const delUserAddress = (address_id) => ajax('http://demo.itlike.com/web/xlmc/api/address/del/' + address_id);


export const getCurrentUserAddress = (user_id, address_id) => ajax('http://demo.itlike.com/web/xlmc/api/address/one', { user_id, address_id }, "post");