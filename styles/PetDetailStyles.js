import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#DBEAFE' // fondo general azul suave
  },

  card: {
    backgroundColor: '#F0F9FF', // fondo de la tarjeta con color suave
    borderRadius: 30,
    paddingVertical: 45,
    paddingHorizontal: 30,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.12,
    shadowRadius: 25,
    elevation: 12,

    borderWidth: 1,
    borderColor: '#BFDBFE',
  },

  emoji: { 
    fontSize: 105,
    textAlign: 'center',
    marginBottom: 18
  },

  name: { 
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 28,
    letterSpacing: 1
  },

  field: { 
    fontSize: 17,
    color: '#1F2937',
    marginTop: 12,
    textAlign: 'center',

    backgroundColor: '#BFDBFE', // color donde está la info
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 14,

    borderWidth: 1,
    borderColor: '#93C5FD',

    overflow: 'hidden'
  },

  favoriteBtn: {
    marginTop: 40,
    backgroundColor: '#4F46E5',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',

    shadowColor: '#4F46E5',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6
  },

  favoriteBtnText: { 
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 1
  },
})

export default styles