import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center', padding: 24 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    elevation: 3,
    alignItems: 'center',
  },
  tip: { fontSize: 18, color: '#333', textAlign: 'center', marginBottom: 16 },
  counter: { fontSize: 14, color: '#888', marginBottom: 20 },
  btn: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
})

export default styles