import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
  },
  emoji: { fontSize: 60, textAlign: 'center', marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  field: { fontSize: 16, color: '#555', marginTop: 8 },
  favoriteBtn: {
    marginTop: 20,
    backgroundColor: '#f0a500',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  favoriteBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
})

export default styles