import React, { Component } from 'react';
import {
    ListView,
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';

class ListViewDetailPage extends Component {
    static navigationOptions = {
        title: 'ListView',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.datas = null;
        this.state = {
            dataSource: this.ds.cloneWithRows(this.datas ? this.datas : []),//提现明细
        };
    }
    componentWillMount(){
        var arr = [];

        for (let i=0;i<12;i++){
            arr.push(`第${i}排`)
            //arrImage.push(require('../../asset/'+i+'.png'))
        }
        this.setState({
            dataSource: this.ds.cloneWithRows(arr),
        })
    }
    render() {
        return (
            <ScrollView style={{paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <View style={styles.listViewStyle}>
                        <Text>{rowData}</Text>
                    </View>}
                />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:10,
    },
    inputText: {
        height: 30,
        borderWidth: 0,
        color:'#333333',
        marginLeft: 10,
        fontSize: 24,
    },
    contractStyle :{
        flexDirection:'row',
        marginTop:30,
        marginBottom:30,
        marginLeft:40,
        width:143,
    },
    selectImageStyle:{
        width: 22,
        height: 22,
        marginRight:9,
    },
    listViewStyle:{
        flexDirection:'row',
        height:30,
        backgroundColor:'cyan',
        marginTop:3,
        justifyContent:'center',
        alignItems:'center',
    }

});
// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
export default ListViewDetailPage;