import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native';

const Dimensions = require("Dimensions");
const screenSize = Dimensions.get("window");

export default class FlatTest extends Component {

    // _keyExtractor= (item,index) => item.id;

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [
                {
                    id: 1,
                    username: "andy",
                    age: 23
                },
                {
                    id: 2,
                    username: "kelvin",
                    age: 14
                },
                {
                    id: 3,
                    username: "lili",
                    age: 34
                },
            ]
        }
    }

    showInfo = ({ item }) => {
        // console.log(infos);
        return <Text>{item.username}:{item.age}</Text>
    }

    touchHadler = (id) => {
        Alert.alert("点击了" + id)
    }


    render() {
        return (
            <View>
                <Text>表格组件</Text>
                <FlatList
                    data={this.state.userInfo}
                    renderItem={this.showInfo}
                    // keyExtractor={this._keyExtractor}
                    keyExtractor={(item, index) => index.toString()}    //设置key值，防止出现错误警告
                ></FlatList>
                <Text>===============================</Text>
                <Text>宽度：{screenSize.width}</Text>
                <Text>高度：{screenSize.height}</Text>
                <TouchableNativeFeedback onPress={this.touchHadler.bind(this, 12)} >
                    <View style={styles.viewStyle}></View>
                </TouchableNativeFeedback>

                <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor="#ccc"
                    onPress={this.touchHadler.bind(this, 12)}
                >
                    <View style={styles.viewStyle1}></View>
                </TouchableHighlight>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.touchHadler.bind(this, 12)}
                >
                    <View style={styles.viewStyle2}></View>
                </TouchableOpacity>

                <View style={ styles.fatherBox } >
                    <View style={ styles.box1 } ></View>
                    <View style={ styles.box2 } ></View>
                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    viewStyle: {
        width: 100,
        height: 100,
        backgroundColor: "#ccc"
    },
    viewStyle1: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
    viewStyle2: {
        width: 100,
        height: 100,
        backgroundColor: "purple"
    },
    fatherBox: {
        flexDirection: "row"
    },
    box1: {
        // width: "40%",
        flex:3,
        height: 100,
        backgroundColor: "orange"
    },
    box2: {
        // width: "60%",
        flex:1,
        height: 100,
        backgroundColor: "pink"
    }
})