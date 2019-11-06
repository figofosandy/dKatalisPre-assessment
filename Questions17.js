import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
export default class ReactNativeHacks extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: 'true',
      flag2: 'true',
      isShow:true
    }
  }
  buttonClick() {
   // Write your logic here to toggle the flag 
   this.setState({isShow:!this.state.isShow})
   if(this.state.isShow){
     this.setState({flag:''})
   } else {
     this.setState({flag:'true'})
   }
  }
  render() {
    return (
    <View style={styles.container}>
      <Text>   
         {
             // Code to show/hide on basis of `this.state.flag` value 
            this.state.flag
         }
      </Text>
      <Text style={styles.mainClass}>
        {
             // Code to show/hide using styles on basis of `this.state.flag` value  
            this.state.flag2
         }
      </Text>



     <TouchableNativeFeedback>
      <View style={styles.button}>
       <Text style={styles.buttonText} //call function `buttonClick`
             onPress={() => { this.buttonClick()}}>Click here.</Text>
      </View>
     </TouchableNativeFeedback>

     <TouchableNativeFeedback>
      <View style={styles.button}>
       <Text style={styles.buttonText} //call function `buttonClick`
             onPress={() =>{
              if(StyleSheet.flatten(styles.mainClass)==StyleSheet.flatten(styles.showClass)){
                styles.mainClass=StyleSheet.flatten(styles.hideClass)
              } else {
                styles.mainClass=StyleSheet.flatten(styles.showClass)
              }
              this.forceUpdate()
              }}>Style</Text>
      </View>
     </TouchableNativeFeedback>
     
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 button: {
   backgroundColor: '#ff8000',
   borderRadius: 4,
   padding:10
 },
  buttonText : {
    color : '#fff',
    textAlign:'center',
    fontWeight: 'bold'
  },
  hideClass: {
    height: 0,
    width: 0
  },
  mainClass:{

  },
  showClass:{

  }
});
AppRegistry.registerComponent('ReactNativeHacks', () => ReactNativeHacks);