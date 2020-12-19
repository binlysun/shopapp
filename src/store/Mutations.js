import {
    ADD_GOODS,
    INIT_SHOP_CART,
    REMOVE_CART,
    SINGER_SELECTED,
    ALL_SELECTED,
    CLEAR_CART,
    SAVE_USER_INFO,
    INIT_USER_INFO,
    LOG_OUT,
} from './Mutations-type'


import { setStore, getStore } from './../config/localStorage'

export default {
    //1.往购物车添加数据
    [ADD_GOODS](state, { goodsId, goodsName, goodsImage, goodsPrice }) {
        let shopCart = state.shopCart;
        //1.1判断是否存在
        if (shopCart[goodsId]) { //存在num+1
            shopCart[goodsId]['num']++;
        } else {
            //如果没有产生一个新对象
            shopCart[goodsId] = {
                "num": 1,
                "id": goodsId,
                "name": goodsName,
                "small_image": goodsImage,
                "price": goodsPrice,
                "checked": true,
            }
        }
        //产生新对象
        state.shopCart = {...shopCart }
        setStore('shopCart', state.shopCart)

    },

    //2.页面初始化，购物车获取本地数据
    [INIT_SHOP_CART](state) {
        let initCart = getStore('shopCart')
        if (initCart) {
            state.shopCart = JSON.parse(initCart);
        }

    },
    //3.商品移除购物车
    [REMOVE_CART](state, { goodsId }) {
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId]
        if (goods) {
            if (goods["num"] > 0) {
                goods["num"]--
                    if (goods["num"] === 0) {
                        delete shopCart[goodsId];
                    }
            } else {
                goods = null
            }

            //同步数据
            state.shopCart = {...shopCart };
            setStore('shopCart', state.shopCart);
        }

    },

    //caet 单选
    [SINGER_SELECTED](state, { goodsId }) {
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId]
        if (goods) {
            goods.checked = !goods.checked
                //同步数据
            state.shopCart = {...shopCart };
            setStore('shopCart', state.shopCart);
        }
    },
    //cart 全选
    [ALL_SELECTED](state, { checkedflag }) {
        let shopCart = state.shopCart;
        Object.values(shopCart).forEach((goods, index) => {
            goods.checked = checkedflag
        })
        state.shopCart = {...shopCart };
        setStore('shopCart', state.shopCart);
    },

    [CLEAR_CART](state) {
        let shopCart = state.shopCart;
        shopCart = null;

        state.shopCart = {...shopCart };
        setStore('shopCart', state.shopCart);

    },




    //用户信息相关
    [SAVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
        setStore("userInfo", state.userInfo)
    },

    [INIT_USER_INFO](state) {
        let userInfo = getStore('userInfo')
        if (userInfo) {
            state.userInfo = JSON.parse(userInfo);
        }
    },
    [LOG_OUT](state) {

        state.userInfo = {}
        setStore('userInfo', state.userInfo)

    }

}