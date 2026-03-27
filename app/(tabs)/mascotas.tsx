import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, TextInput } from 'react-native'
import styles from '../../styles/PetListStyles'

interface Pet {
  id: string
  name: string
  species: string
  breed: string
  age: number
  weight: number
}

const getEmoji = (species: string) => {
  if (species === 'Perro') return '🐶'
  if (species === 'Gato') return '🐱'
  if (species === 'Loro') return '🦜'
  return '🐾'
}

const initialPets: Pet[] = [
  { id: '1', name: 'Luna', species: 'Perro', breed: 'Labrador', age: 3, weight: 25 },
  { id: '2', name: 'Michi', species: 'Gato', breed: 'Persa', age: 2, weight: 4 },
  { id: '3', name: 'Pico', species: 'Loro', breed: 'Amazonico', age: 5, weight: 1 },
  { id: '4', name: 'Max', species: 'Perro', breed: 'Pastor Alemán', age: 4, weight: 30 },
  { id: '5', name: 'Nala', species: 'Gato', breed: 'Siamés', age: 1, weight: 3 },
  { id: '6', name: 'Rocky', species: 'Perro', breed: 'Bulldog', age: 5, weight: 20 },
  { id: '7', name: 'Simba', species: 'Gato', breed: 'Maine Coon', age: 3, weight: 6 },
  { id: '8', name: 'Kiwi', species: 'Loro', breed: 'Cacatúa', age: 2, weight: 1 },
  { id: '9', name: 'Toby', species: 'Perro', breed: 'Beagle', age: 4, weight: 15 },
  { id: '10', name: 'Lola', species: 'Gato', breed: 'Bengalí', age: 2, weight: 4 },
  { id: '11', name: 'Bruno', species: 'Perro', breed: 'Rottweiler', age: 6, weight: 35 },
  { id: '12', name: 'Pelusa', species: 'Gato', breed: 'Angora', age: 3, weight: 5 },
]

export default function Mascotas() {
  const [pets, setPets] = useState<Pet[]>([])
  const [search, setSearch] = useState('')
  const router = useRouter()

  useEffect(() => {
    setPets(initialPets)
  }, [])

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <SafeAreaView style={styles.container}>

      <Text style={{
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
      }}>
        Mascotas 🐾
      </Text>

      <TextInput
        placeholder="Buscar mascota..."
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: '#FFF',
          marginHorizontal: 10,
          marginBottom: 15,
          padding: 12,
          borderRadius: 12,
          fontSize: 16,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 6,
          elevation: 2
        }}
      />

      <FlatList
        data={filteredPets}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor:
                  item.species === 'Perro'
                    ? '#E8F5E9'
                    : item.species === 'Gato'
                    ? '#E3F2FD'
                    : '#FFF8E1'
              }
            ]}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: '/pet-detail',
                params: {
                  id: item.id,
                  name: item.name,
                  species: item.species,
                  breed: item.breed,
                  age: String(item.age),
                  weight: String(item.weight),
                  emoji: getEmoji(item.species),
                },
              })
            }
          >
            <Text style={styles.emoji}>{getEmoji(item.species)}</Text>

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