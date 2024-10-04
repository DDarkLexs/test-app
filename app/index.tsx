import { useEffect } from "react";
import { Alert, Text, Vibration, View } from "react-native";

export default function Index() {

  useEffect(() => {

    Alert.prompt("Teste", "Teste", (value) => {
      console.log(value);
      Vibration.vibrate([1000,1000,1000,1000,1000,1000,1000]);

    })
    
  }, [])
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ola mundo, como vai?</Text>
    </View>
  );
}
