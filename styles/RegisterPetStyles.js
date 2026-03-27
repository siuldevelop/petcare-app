import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnClear: {
    backgroundColor: '#e53935',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  btnDisabled: { backgroundColor: '#aaa' },
})

export default styles