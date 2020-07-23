import React from 'react';
import {StyleSheet,View,Text,Image,ScrollView} from 'react-native';
import SmallPicCard from './SmallPicCard.js'
import ResturantCard from './ResturauntCard.js'
import { AntDesign } from '@expo/vector-icons';
const ResturauntData = [
{name: 'NIC - Natural Ice Creams',
uri: 'https://media.gettyimages.com/photos/colorful-scoops-ice-cream-background-concept-picture-id965401258?b=1&k=6&m=965401258&s=612x612&w=0&h=7MwkS8b31-gc97Dituwyc0Cc21iylbT99uWJhcu5P0U=',
type: 'Ice Cream , Deserts',
},
{name: 'Bitoo Samosay Wala',
uri: 'https://media.istockphoto.com/photos/samosa2-picture-id507066979?b=1&k=6&m=507066979&s=612x612&h=K9-54uD9jHAEfAIDfazlG-Z0d1KdQFUErIYV8EODJuk=',
type: 'Street Food, Chinese',
},
{name: 'Dominos Pizza ',
uri: 'https://images.freeimages.com/images/small-previews/c5e/roasted-tomato-pizza-1538009.jpg',
type: 'Pizza, Fast Food',
},
{name: 'Burger King',
uri: 'https://media.istockphoto.com/photos/burger-king-picture-id458406353?b=1&k=6&m=458406353&s=612x612&h=msD-mLa68mERGIkyp855KaxpEwZ8zXtGoSacubhmHbc=',
type: 'Burger, American',
},
{name: 'Gulaab',
uri: 'https://media.gettyimages.com/photos/nonvegetarian-indian-thali-picture-id174973324?b=1&k=6&m=174973324&s=612x612&w=0&h=MBnZh1-enX5h0P8Nsbpn5nNPE6_rYJur_8vENwnE450=',
type: 'North Indian, StreetFood, Mithai',
},

]

const Brands= [{uri:'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo-500x319.png',
name: 'McDonalds '},
{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png', name: 'Dominos'},
{uri: 'https://seeklogo.com/images/B/Burger_King-logo-EB00FAD8D3-seeklogo.com.png',
name: 'Burger king'},
{uri: 'https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo-500x430.png',
name: 'KFC'},
{uri: "http://www.licensingcorner.com/wp-content/uploads/2017/12/Haldiram-768x489.jpg", 
name: 'Haldirams'},{
  uri: 'https://www.designmantic.com/blog/wp-content/uploads/2016/08/SubWayNewLogo.png',
  name: 'SubWay'
}
]

const BrandCard = (props)=>{
  return(
    <View style={{margin: 15}}>
      <Image source={{uri: props.uri}} style={{height: 80, width: 80, borderRadius: 40,marginBottom:6}}/>
      <Text style={{fontWeight: 'bold'}}> {props.name}</Text>
    </View>
  )
}

export default class OrderScreen extends React.Component{
  render()
  {
    return(
      <View style={{backgroundColor:'white'}}>
     <View style={{borderWidth: 1, borderColor: 'gray', padding: 12, margin: 8}}>
    <View style={{flexDirection: 'row'}}>
    <AntDesign name="search1" size={24} color="gray"  />
     <Text style={{marginLeft: 10, color: 'gray'}}>  Search for resturaunts, cuisines,...</Text>
     </View>
     </View>
   
      <ScrollView>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <Text style={{ fontSize: 25,
    margin: 6,
    fontStyle: '',
    marginTop: 15,
    fontFamily: 'helvetica',
    color: 'red'}}> Food </Text>
    <Text style={Styles.topnav}> market </Text>
    <Text style={Styles.topnav}> food@work</Text>
    <Text style={Styles.topnav}> self Pickup</Text>
    </ScrollView>
 <View style={{marginTop: 2}}/>
      {ResturauntData.map(items=>{
        return  <ResturantCard  name={items.name} uri={items.uri} type={items.type} />
      })}
      <Text style={{fontWeight: 'bold', fontSize: 22}}>  Top Brands in Spotlight</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        Brands.map(item=>{
          return (
            <BrandCard uri={item.uri} name={item.name}/>
          )
        })
      }
       </ScrollView>
        {ResturauntData.map(items=>{
        return  <ResturantCard  name={items.name} uri={items.uri} type={items.type} />
      })}
       <Text style={{fontWeight: 'bold', fontSize: 22}}>  Lockdown Cravings </Text>    
 <SmallPicCard/>
   {ResturauntData.map(items=>{
        return  <ResturantCard  name={items.name} uri={items.uri} type={items.type} />
      })}

     </ScrollView>
      </View>
    )
  }
}
const Styles = StyleSheet.create({
  topnav:{
    fontSize: 25,
    margin: 6,
    fontStyle: '',
    marginTop: 15,
    fontFamily: 'helvetica',
    color: 'gray'
  }
})