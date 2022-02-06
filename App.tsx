import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Data } from './src/data/Data';
import { crypto } from './src/data/types';

export default function App() {

 
  const [data, setData] = useState<Array<crypto> | undefined>([])
  const [loading,setLoading] = useState(true)
  useEffect(()=> {
    Data.getData().then(response  => setData(response)).finally(() => setLoading(false))


  }, [])

  // const handleData = (data: any | undefined) => {
  //   if(data.length > 0) {
  //     return "Loading please wait"
  //   } else {
  //     return data[0].price.toString() + " " + data[0].name
  //   }
  // }



  if(loading) {
    return <View>
      <ActivityIndicator
      collapsable
      color={"red"}
      size={"large"}
      /> 
    </View>
  }

  return (
    <View style={styles.container}>

      <View style={{flexDirection:'row', flex:1}}>

          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

            <Text style={{fontSize: 15, color: 'white'}}>

              {/* {handleData(data)} */}

            </Text>


            <Text style={{fontSize: 15, color: 'white'}}>

              {data==undefined ? "Loading" : data[0].quote.price}

            </Text>

         
          </View>

          <View style={{flex:1}}>

            <Text style={{fontSize: 15, color: 'white'}}>
              {data==undefined ? "Loading" : data[1].name}
            </Text>

          </View>

            <Text style={{fontSize: 15, color: 'white'}}>

              {data==undefined ? "Loading" : data[1].quote.price}

            </Text>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingTop: 80
  }
});
