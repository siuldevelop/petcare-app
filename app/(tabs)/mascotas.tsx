import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../../styles/PetListStyles'

interface Pet {
  id: string
  name: string
  species: string
  breed: string
  age: number
  weight: number
}

const initialPets: Pet[] = [
  { id: '1', name: 'Luna', species: 'Perro', breed: 'Labrador', age: 3, weight: 25 },
  { id: '2', name: 'Michi', species: 'Gato', breed: 'Persa', age: 2, weight: 4 },
  { id: '3', name: 'Pico', species: 'Loro', breed: 'Amazonico', age: 5, weight: 1 },
]

export default function Mascotas() {
  const [pets, setPets] = useState<Pet[]>([])
  const router = useRouter()

  useEffect(() => {
    setPets(initialPets)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({
            pathname: '/pet-detail',
            params: {
              id: item.id,
              name: item.name,
              species: item.species,
              breed: item.breed,
              age: String(item.age),
              weight: String(item.weight),
              }
          })}
          >
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.species}>{item.species}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}