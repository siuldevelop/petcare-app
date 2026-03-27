import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/PetDetailStyles'

export default function PetDetail() {
  const { name, species, breed, age, weight, emoji } = useLocalSearchParams()
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    navigation.setOptions({ title: String(name) })
  }, [name])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.field}>Especie: {species}</Text>
        <Text style={styles.field}>Raza: {breed}</Text>
        <Text style={styles.field}>{"Edad: " + age + " años"}</Text>
        <Text style={styles.field}>{"Peso: " + weight + " kg"}</Text>
        <TouchableOpacity
          style={styles.favoriteBtn}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Text style={styles.favoriteBtnText}>
            {isFavorite ? 'Favorito' : 'Agregar a favoritos'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}