import React,{ Component } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    Button,
    View,
    Image
} from 'react-native'

class FlatListDetailPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
        }
    }

    static navigationOptions = {
        title: '踩过的坑',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    componentWillMount(){

    }
    _onStartShouldSetResponderCapture (event) {
        let target = event.nativeEvent.target;
        // if(!inputComponents.includes(target)) {
        //     dismissKeyboard();
        // }
        // return false;
    }

    _inputOnLayout(event){
        let target = event.nativeEvent.target;
    }
    render(){
        const {navigate,goBack,state} = this.props.navigation;

        return(
            <ScrollView /*keyboardShouldPersistTaps = {true}*/ >
                 {/*<View style={{flex:1,backgroundColor:'red'}} onStartShouldSetResponderCapture={this._onStartShouldSetResponderCapture.bind(this)}>*/}
                     {/**/}
                 {/*</View>*/}
                <TextInput onLayout={this._inputOnLayout.bind(this)} style={{width:150,height:30,backgroundColor:'cyan'}}
                           onChangeText={(text) => this.setState({name:text.replace(/\s/g,'')})}
                           value={this.state.name}
                           placeholder={'请输您的大名'}
                />

                <Button style={{width:150,height:200}} title={'TD'} onPress={() => {alert(11111)}} />

                {/*<View style={styles.contractStyle}>*/}
                    {/*<Image source={require('../asset/0.png')} style={styles.selectImageStyle}></Image>*/}
                    <Text style={{fontSize:20,alignSelf:'center'}}>
                        <Text>今年iPhoneX也想掺和一把，官方的描述，</Text>
                        <Text style={{color:'#4bbfed',marginLeft:20}}>&nbsp;&nbsp;FaceID功能通过原深感摄像头来实现</Text>
                        <Text>，投射超过30000个肉眼不可见的光点。</Text>
                    </Text>
                {/*</View>*/}

            </ScrollView>
        )
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


});


export default FlatListDetailPage;
// export default SecondDetaiPage;
// module.exports = FlatListDetailPage;