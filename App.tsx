import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput
} from 'react-native';

function App() {
  return (<SafeAreaView>
    <View style={{ display: 'flex', alignItems: 'center', }}>
      <Text style={{fontSize: 20, fontWeight:'500',letterSpacing:3, paddingTop:20}}>Hello World !</Text>

      < Image source={{
        uri: 'https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
      }}
        style={{ width: '100%', height: '100%', marginTop: 20 }} />

    </View>

  </SafeAreaView>
  )
}

export default App;