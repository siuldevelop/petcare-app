import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="mascotas" options={{ title: 'Mascotas' }} />
      <Tabs.Screen name="registrar" options={{ title: 'Registrar' }} />
      <Tabs.Screen name="consejos" options={{ title: 'Consejos' }} />
    </Tabs>
  )
}