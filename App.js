// import { StatusBar } from "expo-status-bar";
// import {
//   Button,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import scraps from "./data.json";

// export default function App() {
//   // Group scraps by category
//   const scrapsByCategory = {};

//   scraps.forEach((scrap) => {
//     if (!scrapsByCategory[scrap.scrapCategory]) {
//       scrapsByCategory[scrap.scrapCategory] = [];
//     }
//     scrapsByCategory[scrap.scrapCategory].push(scrap);
//   });

//   console.log(scrapsByCategory);

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {Object.keys(scrapsByCategory).map((category) => (
//           <View key={category} style={{ borderWidth: 1, padding: 20 }}>
//             <Text style={styles.categoryTitle}>{category}</Text>
//             {scrapsByCategory[category].map((scrap) => (
//               <View key={scrap.scrapID} style={{ borderWidth: 1, padding: 20 }}>
//                 <Text>{scrap.scrapName}</Text>
//                 <Text>{scrap.scrapSizeVol}</Text>
//                 <Pressable onPress={() => console.log(scrap)}>
//                   <Text>SUBMIT</Text>
//                 </Pressable>
//               </View>
//             ))}
//           </View>
//         ))}
//       </ScrollView>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://reactnative.dev/' }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
