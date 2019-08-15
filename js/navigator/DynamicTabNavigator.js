/* 把 bottomNavigator 封装成单独的动态组件 */
import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import MyPage from "../page/MyPage";
import FavoritePage from "../page/FavoritePage";
import TrendingPage from "../page/TrendingPage";
import PopularPage from "../page/PopularPage";

const TABS = {
  /* 底部路由动态配置,页路由 */
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      /* 这里实际上是一个对象 的 { } 按需引用*/
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialIcons
          name={'whatshot'}
          size={26}
          style={{ color: tintColor }}
        />
      }
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Ionicons
          name={'md-trending-up'}
          size={26}
          style={{ color: tintColor }}
        />
      }
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '喜欢',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialIcons
          name={'favorite'}
          size={26}
          style={{ color: tintColor }}
        />
      }
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Entypo
          name={'user'}
          size={26}
          style={{ color: tintColor }}
        />
      }
    }
  }
}

export default class DynamicTabNavigator extends Component {
  _tabNavigator () {
    const { PopularPage, MyPage, TrendingPage, FavoritePage } = TABS
    /* 根据需要，动态设置小tabs */
    const tabs = { PopularPage, MyPage, TrendingPage, FavoritePage }
    /* 动态配置每个组件的名字 */
    PopularPage.navigationOptions.tabBarLabel = '最新'
    const bottomNav = createBottomTabNavigator({
      ...tabs
    }, {
        tabBarOptions: {
          activeTintColor: 'red'
        }
      })
    return createAppContainer(bottomNav)
  }
  render () {
    const Tab = this._tabNavigator()
    return <Tab />
  }
}