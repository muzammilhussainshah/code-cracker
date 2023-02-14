// import React, { Component } from "react";

// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Entypo from 'react-native-vector-icons/Entypo'

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { RFPercentage } from 'react-native-responsive-fontsize';

// import Colors from '../../styles/Colors';
// import TVTracker from '../../pages/TVTracker/TVTracker';
// import Find from '../../pages/Find/Find';
// import More from '../../pages/More/More';
// import Countdown from '../../pages/Countdown/Countdown';

// const BottomTab = createBottomTabNavigator();

// export default class BottomTabNavigator extends Component {
//   render() {
//     return (
//       <BottomTab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: Colors.tabActive,
//           tabBarInactiveTintColor: Colors.tabInactive,
//           headerShown: false,
//           tabBarStyle: {
//             backgroundColor: `#262626`,
//             paddingVertical: RFPercentage(0.6),
//             paddingBottom: Platform.OS == 'ios' ? RFPercentage(3) : RFPercentage(0.5),
//             height: Platform.OS == 'ios' ? RFPercentage(9.2) : RFPercentage(10),
//           },
//         }}
//       >
//         <BottomTab.Screen
//           name="TV Tracker"
//           component={TVTracker}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome
//                 name='tv'
//                 size={RFPercentage(2.7)}
//                 color={color} />
//             ),
//           }}
//         />
//         <BottomTab.Screen
//           name="Countdown"
//           component={Countdown}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Entypo
//                 name='back-in-time'
//                 size={RFPercentage(2.7)}
//                 color={color} />
//             )
//           }}
//         />
//         <BottomTab.Screen
//           name="Find"
//           component={Find}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome
//                 name='search'
//                 size={RFPercentage(2.7)}
//                 color={color} />
//             )
//           }}
//         />
//         <BottomTab.Screen
//           name="More"
//           component={More}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Entypo
//                 name='dots-three-horizontal'
//                 size={RFPercentage(2.7)}
//                 color={color} />)
//           }}
//         />


//       </BottomTab.Navigator>
//     );
//   }

// }

