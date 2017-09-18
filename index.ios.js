/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  TextInput,
  StyleSheet,
    FlatList,
} from 'react-native';
import {StackNavigator, TabNavigator } from "react-navigation";
import  FlatListDetailPage from './src/FlatListDetailPage';
import  ListViewDetailPage from './src/ListViewDetailPage';

import HomePageCoponent from './src/component/HomePageCoponent';
import MinePageComponent from './src/component/MinePageComponent';

class RecentChatsScreen extends React.Component {
    static navigationOptions = {
        title:'首页',
        // titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    onPress(rowData){
        if (rowData.index === 2){
            this.props.navigation.navigate("ListViewDetailPage",{listRow:rowData.item})
        }else {
            this.props.navigation.navigate("FlatListDetailPage",{listRow:rowData.item})
        }

    }

    render() {
        return(
            <View style={{flex:1}}>
                <HomePageCoponent onPress={(rowData)=>this.onPress(rowData)}/>
            </View>
        )
    }
}

class MinePage extends React.Component {
    static navigationOptions = {
        title: '我的',
        headerStyle:{backgroundColor:'red'},
    };
    render() {
        return <MinePageComponent />
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: {
        screen: RecentChatsScreen,
        navigationOptions:{
            // title:'列表界面',
            tabBarLabel:'列表界面',
            showIcon:true,
            swipeEnabled:false,
            animationEnabled:false,
            tabBarIcon:({tintColor}) => (<Image source={require('./asset/0.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),

        },
        mode: 'card',

    },
    All: {
        screen: MinePage,
        navigationOptions:{
            tabBarLabel:'我的界面',
        //     title:'我的界面',
            showIcon:true,
            swipeEnabled:false,
            animationEnabled:false,
            tabBarIcon:({tintColor}) => (<Image source={require('./asset/1.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        },
    },
});
const SimpleApp = StackNavigator({
    Home:{
        screen:MainScreenNavigator,
        
    },
    ListViewDetailPage: { screen: ListViewDetailPage },
    FlatListDetailPage: { screen: FlatListDetailPage },

});


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
