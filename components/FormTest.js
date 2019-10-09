import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TextInput,
    ScrollView
} from 'react-native';

export default class FormTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inVal: ""
        }
    }

    getInput = () => {
        Alert.alert("Input", this.state.inVal);
    }

    getValue = (val) => {
        this.setState({
            inVal: val
        })
    }

    scrollHandler = () => {
        // console.log("广东时间");
        
    }

    render() {
        return (
            <ScrollView onScroll={ this.scrollHandler }>
            <View>
                <Text>用户名：</Text>
                <TextInput style={styles.inputStyle} placeholder="请输入。。。。" onChangeText={this.getValue} ></TextInput>
                <Button title="获取input值" onPress={this.getInput} style={styles.buttonStyle} ></Button>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
                <Text>关东</Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        width: 200,
        borderWidth: 2,
        borderColor: "red",
        borderStyle: "solid"
    },
    buttonStyle: {
        width: 200,
        color: "green"
    }
})