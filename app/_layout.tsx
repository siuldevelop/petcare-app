/* hace que el stack navigator se renderice en todas las pantallas, 
lo que permite navegar a la pantalla de detalle desde cualquier pantalla del tab navigator
*/

import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="pet-detail" options={{title: 'Detalle'}}/>
    </Stack>
  )
}