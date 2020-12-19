import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);

//引入侧边栏插件
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);

//引入分类栏搜索框及吸顶
import { Search } from 'vant';
Vue.use(Search);
import { Sticky } from 'vant';
Vue.use(Sticky);

//复选框
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

import { Toast } from 'vant';
Vue.use(Toast);

import { Dialog } from 'vant';
Vue.use(Dialog);

import { NavBar } from 'vant';
Vue.use(NavBar);

import { ContactCard } from 'vant';
Vue.use(ContactCard);
import { AddressList } from 'vant';
Vue.use(AddressList);
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);

import { Button } from 'vant';
Vue.use(Button);

import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);
import { Popup } from 'vant';
Vue.use(Popup);