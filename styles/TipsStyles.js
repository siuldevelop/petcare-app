import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ECFDF5', // Verde muy suave
  },

  header: {
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1F2937',
    letterSpacing: 1,
  },

  headerSubtitle: {
    fontSize: 13,
    color: '#10B981', // Verde
    marginTop: 6,
    fontWeight: '600',
  },

  scrollContent: {
    padding: 22,
    paddingBottom: 40,
  },

  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 26,
    marginBottom: 18,
    minHeight: 220,
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  tipEmoji: {
    fontSize: 40,
    marginRight: 14,
  },

  tipMeta: {
    flex: 1,
  },

  tipCategory: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 3,
  },

  /* COLORES POR TIPO DE TIP */

  categoryHealth: {
    color: '#10B981', // Verde
  },

  categoryFood: {
    color: '#F59E0B', // Amarillo
  },

  categoryCare: {
    color: '#3B82F6', // Azul
  },

  tipTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },

  tipDescription: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 20,
  },

  indicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  indicatorText: {
    fontSize: 12,
    color: '#6B7280',
  },

  dotsRow: {
    flexDirection: 'row',
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
  },

  dotActive: {
    backgroundColor: '#10B981',
    width: 20,
  },

  nextButton: {
    backgroundColor: '#10B981',
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,

    shadowColor: '#10B981',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  autoLabel: {
    textAlign: 'center',
    fontSize: 11,
    color: '#6B7280',
    marginTop: 12,
    fontStyle: 'italic',
  },

});

export default styles;