import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';

const ResturantCard= (props)=> {
     return(
    <View style={{
     
        height: 400,
        backgroundColor: 'white',
        elevation: 1,
        borderWidth: 0.5,
        borderColor: 'gray',
        margin: 6
    }}>
     <Image source={{uri: props.uri}}
     style={{margin: 10, height: 200 , width: '95%', borderRadius: 8}}
     />
     <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10}}> {props.name} </Text>
     <Image source={require('../stars_zomato.jpeg')} style={{
       height: 25, width: 320,
       margin: 15 
     }}/>
     <View style={{marginLeft: 15, }}>
     <Text style={{fontSize: 15, color: 'gray'}}>{props.type}</Text>
     <Text  style={{marginTop:5, fontSize: 15,color: 'gray'}}>100 per Person .  34 mins </Text>
       <Image source={require('../safety_zomato.jpeg')} style={{
       height: 25, width: 320,
       marginTop: 10 
     }}/>
     </View>
    </View>
    )

}
export default ResturantCard;