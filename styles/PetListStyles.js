import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  emoji: { fontSize: 36, marginRight: 12 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  species: { fontSize: 14, color: '#888', marginTop: 4 },
})

export default styles