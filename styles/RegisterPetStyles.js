import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ECFDF5', // verde muy suave
  },

  header: {
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#D1FAE5', // verde claro
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#065F46',
    letterSpacing: 1,
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#10B981', // verde principal
    marginTop: 6,
    fontWeight: '600',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 24,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  fieldLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 6,
    marginTop: 16,
  },

  input: {
    backgroundColor: '#ECFDF5', // verde muy suave
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1F2937',

    borderWidth: 1,
    borderColor: '#A7F3D0',
  },

  inputFocused: {
    borderColor: '#10B981',
    backgroundColor: '#FFFFFF',
  },

  inputError: {
    borderColor: '#EF4444',
  },

  errorText: {
    fontSize: 11,
    color: '#EF4444',
    marginTop: 4,
  },

  validationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    padding: 12,
    backgroundColor: '#D1FAE5',
    borderRadius: 10,
  },

  validationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },

  validationDotComplete: {
    backgroundColor: '#10B981',
  },

  validationDotIncomplete: {
    backgroundColor: '#A7F3D0',
  },

  validationText: {
    fontSize: 13,
    color: '#374151',
  },

  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
  },

  registerButton: {
    flex: 2,
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',

    shadowColor: '#10B981',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },

  registerButtonDisabled: {
    backgroundColor: '#A7F3D0',
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  clearButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#A7F3D0',
  },

  clearButtonText: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '600',
  },

});

export default styles;