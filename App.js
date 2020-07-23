import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome,Feather,Foundation,MaterialCommunityIcons,FontAwesome5,Ionicons,Entypo,Octicons} from '@expo/vector-icons';
import Constants from 'expo-constants'
import OrderScreen from './screens/OrderScreen.js';
import GoOutScreen from './screens/goOutScreen.js';
import GoldScreen from './screens/GoldScreen.js';
import ProfileScreen from './screens/profileScreen.js';
import ExploreScreen from './screens/ExploreScreen.js';

const Header=()=>{
  return(
    <View style={{ backgroundColor: 'white', padding: 15, marginTop: Constants.statusBarHeight,
    borderBottomWidth: 0.5 , borderColor: 'gray'}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Octicons name="location" size={28} color="black" />
     <Text style={{fontWeight: 'bold', fontSize: 18,
     fontFamily: 'verdana'
     
     }}>Your Home Address </Text>
     <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
     <Entypo name="credit-card" size={24} color="black" />
     </View>
    </View>
  )
}



const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const bottomTabs = ()=>{
  return(
    <Tabs.Navigator   initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Order') {
               return <Feather name="shopping-bag" size={29} color={color} />
            } else if (route.name === 'Go Out') {
             return <MaterialCommunityIcons name="shoe-print" size={29} color={color} />
            }else if (route.name === 'Gold') {
            return <MaterialCommunityIcons name="rhombus-split" size={29} color={color} />
            }
            else if (route.name === 'Explore') {
            return <MaterialCommunityIcons name="compass-outline" size={29} color={color} />
            }
            else if (route.name === 'Profile') {
            return  <Ionicons name="md-beer" size={28} color={color} />
            }



            // You can return any component that you like here!
           
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        indicatorStyle:{
          backgroundColor: 'green'
        },
      
         borderWidth: 2,
         labelStyle: {
           fontSize: 13
         },
        
        }}>
      <Tabs.Screen name="Order" component={OrderScreen}/>
       <Tabs.Screen name="Go Out" component={GoOutScreen}/>
        <Tabs.Screen name="Gold" component={GoldScreen}/>
        <Tabs.Screen name="Explore" component={ExploreScreen}/>
         <Tabs.Screen name="Profile" component={ProfileScreen}/>
    </Tabs.Navigator>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="tabs" component={bottomTabs}  options={ {header: () => {
  return (
   <Header/>
  );
}}}/>
     </Stack.Navigator>
     </NavigationContainer>
    );
  }
}
