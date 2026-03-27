import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: { 
    flex: 1,
    backgroundColor: '#EEF1F6',
    paddingTop: 40,
    paddingHorizontal: 12,
  },

  // tarjeta tipo catálogo
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    margin: 8,

    borderRadius: 22,

    paddingVertical: 28,
    paddingHorizontal: 18,

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },

    elevation: 8,

    borderWidth: 1,
    borderColor: '#F0F0F0',

    // efecto visual más moderno
    transform: [{ scale: 1 }],
  },

  emoji: { 
    fontSize: 60,
    marginBottom: 14,
  },

  name: { 
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
  },

  species: { 
    fontSize: 12,
    color: '#6B7280',
    marginTop: 6,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontWeight: '500',
  },

  idBadge: {
    position: 'absolute',
    top: 10,
    right: 12,
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
  }

})

export default styles
