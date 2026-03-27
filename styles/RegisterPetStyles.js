// styles/RegisterPetStyles.js
// Styles for RegisterPetScreen
 
import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  header: {
    backgroundColor: '#4A6FA5',
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#C8D8F0',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#4A6FA5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4A6FA5',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#F5F8FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1A2B4A',
    borderWidth: 1.5,
    borderColor: '#E0E8F5',
  },
  inputFocused: {
    borderColor: '#4A6FA5',
    backgroundColor: '#FFFFFF',
  },
  inputError: {
    borderColor: '#E05A5A',
  },
  errorText: {
    fontSize: 12,
    color: '#E05A5A',
    marginTop: 4,
    marginLeft: 4,
  },
  validationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: '#F5F8FF',
    borderRadius: 12,
  },
  validationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  validationDotComplete: {
    backgroundColor: '#4CAF50',
  },
  validationDotIncomplete: {
    backgroundColor: '#D0D8E8',
  },
  validationText: {
    fontSize: 13,
    color: '#5A6A7A',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#4A6FA5',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
  },
  registerButtonDisabled: {
    backgroundColor: '#B0C0D8',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4A6FA5',
  },
  clearButtonText: {
    color: '#4A6FA5',
    fontSize: 16,
    fontWeight: '700',
  },
});
 
export default styles;