// styles/TipsStyles.js
// Styles for TipsScreen

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
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#4A6FA5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
    minHeight: 200,
    justifyContent: 'space-between',
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tipEmoji: {
    fontSize: 40,
    marginRight: 12,
  },
  tipMeta: {
    flex: 1,
  },
  tipCategory: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4A6FA5',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 2,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A2B4A',
  },
  tipDescription: {
    fontSize: 15,
    color: '#5A6A7A',
    lineHeight: 22,
    marginBottom: 20,
  },
  indicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  indicatorText: {
    fontSize: 13,
    color: '#8A9AB0',
    fontWeight: '600',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D0D8E8',
  },
  dotActive: {
    backgroundColor: '#4A6FA5',
    width: 20,
  },
  nextButton: {
    backgroundColor: '#4A6FA5',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  autoLabel: {
    textAlign: 'center',
    fontSize: 12,
    color: '#8A9AB0',
    marginTop: 10,
  },
});

export default styles;