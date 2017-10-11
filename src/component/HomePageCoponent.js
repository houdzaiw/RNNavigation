import React,{ Component,PureComponent } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native'
var images = [
    require('../../asset/小鸡.png'),
    require('../../asset/狐狸.png'),
    require('../../asset/熊猫.png'),
    require('../../asset/狼.png'),
    require('../../asset/鹿.png'),
]
class HomePageCoponent extends Component {

    static defaultProps = {

    }

    constructor(props){
        super(props)
        this.state = {
            arrList : [],
            //arrImage : [],
        }
    }

    componentWillMount(){
        var arr = [];
        var arrImage = [];
        for (let i=0;i<6;i++){
            arr.push(`第${i}排`)
            //arrImage.push(require('../../asset/'+i+'.png'))
        }
        this.setState({
            arrList:arr,
            arrImage:arrImage,
        })
    }


    renderList=(rowData)=>{
        // var name = ('../../asset/小鸡.png');
        // alert(333333);
        return(
            <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => {this.props.onPress && this.props.onPress(rowData)}}
            >
                <Image source={images[rowData.index]} style={{width:20,height:20,marginRight:10}}></Image>
                <Text>{rowData.item}</Text>
            </TouchableOpacity>
        )
    }
    renderList1(){
        alert(22222222);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.arrList}
                    // renderItem={this.renderList1.bind()}
                     renderItem={this.renderList}
                     // renderItem={()=>this.renderList1()}
                />
            </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    touchableStyle:{
        flexDirection:'row',
        height:30,
        width:300,
        backgroundColor:'cyan',
        marginTop:3,
        justifyContent:'center',
        alignItems:'center',
    }
});
// 问题
export default HomePageCoponent;
// module.default = HomePageCoponent;