import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AssetExample from './components/AssetExample';
import PantallaContactos from './components/PantallaContactos';
import Pantalla3 from './components/Pantalla3';

function PantallaInicial({navigation})
{
return(
  <View>
  <Text> Pantalla Inicial </Text>
  <Button 
  title="Ir a detalles" 
  onPress ={ () => navigation.navigate('detalles')}
  />
  <Button 
  title="Ir a ejemplo" 
  onPress ={ () => navigation.navigate('ejemplo')}
  />
  </View>
);

}

function PantallaDetalles()
{
return(
  <View>
  <Text> Pantalla Detalles </Text>
  </View>
);

}
const Stack = createStackNavigator();

function App()
{
  return(
      <NavigationContainer>
           <Stack.Navigator>
            <Stack.Screen name="inicio" component ={PantallaInicial} /> 
            <Stack.Screen name="detalles" component ={PantallaDetalles} /> 
            <Stack.Screen name="ejemplo" component = {PantallaContactos} />
            <Stack.Screen name="3pantalla" component = {Pantalla3} />
            
            </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;