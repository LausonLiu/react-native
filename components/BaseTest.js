import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Alert, 
  Image,
  TextInput
} from 'react-native';

export default class BaseTest extends React.Component {

  buttonHandler =() => {
    // alert(324);
    Alert.alert("弹窗标题", "lorem435445弹窗的内容",[
      {
      text:"确认",
      onPress:() => { alert("确认提交成功了"); }
    },
     {
      text:"取消",
      onPress:() => { alert("取消成功"); }
    },
    {
      text:"返回",
      onPress:() => { alert("返回成功了"); }
    }
  ],
  { cancelable: false }
  )
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.textColor}>第一个react-native</Text>
        <Button 
        onPress={this.buttonHandler}
        title="按钮"
        color="blue"
        ></Button>
        {/* 1.本地图片使用require("路径") ，2.网络图片{uri: "链接"}，网络图片必须设置宽高*/}
        <Image source= { require("./assets/splash.png") } style={ {width:100,height:100} } ></Image>
        <Image source= { { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3722782908,3148642250&fm=26&gp=0.jpg"} } style={ styles.imgStyle } ></Image>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: "red",
    fontSize: 20 ,//css样式不能带单位
    fontWeight:"bold"
  },
  imgStyle:{
    width:300,
    height:200
  }
});
