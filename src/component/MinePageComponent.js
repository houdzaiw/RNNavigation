import React,{ Component,PureComponent } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

class MinePageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 1};
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 当shouldComponentUpdate方法返回false时，就不会执行render()方法，componentWillUpdate和componentDidUpdate方法也不会被调用
        // 默认情况下，shouldComponentUpdate方法返回true防止state快速变化时的问题，但是如果·state不变，props只读，
        // 可以直接覆盖shouldComponentUpdate用于比较props和state的变化，决定UI是否更新，当组件比较多时，使用这个方法能有效提高应用性能
        if (this.props.color !== nextProps.color) {
            alert(11111)
            return true;
        }
        if (this.state.count !== nextState.count) {
            alert(22222)
            return true;
        }
        alert(3333)
        return false;
    }
    componentWillUpdate(){
        // alert('componentWillUpdate有调用')
    }
    componentDidUpdate(){
        // alert('componentDidUpdate有调用')
    }
    render() {
        return (
            <View>
                <Button title={'hello world'}
                        color={this.props.color}
                        onPress={() => this.setState(state => ({count: state.count+1}))}>
                    Count: {this.state.count}
                </Button>
                <Text style={{flex:1,backgroundColor:'cyan'}}>
                    { this.state.count }
                </Text>
            </View>
        );
    }
}
export default MinePageComponent;