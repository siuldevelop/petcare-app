// app/(tabs)/consejos.tsx
// Tips screen - displays pet care tips with automatic rotation every 5 seconds

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { CARE_TIPS } from '../../data/tipsData';
import styles from '../../styles/TipsStyles';

// Maximum number of tips constant
const MAX_TIPS = CARE_TIPS.length;

// Auto-rotation interval in milliseconds
const ROTATION_INTERVAL = 5000;

export default function TipsScreen() {
  // useState: manages the current tip index
  const [currentIndex, setCurrentIndex] = useState(0);

  // useState: informative message showing current tip position
  const [positionMessage, setPositionMessage] = useState('');

  // useEffect with empty array [] + cleanup: creates an interval that rotates
  // tips automatically every 5 seconds, returns clearInterval to avoid memory leaks
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
    }, ROTATION_INTERVAL);

    // Cleanup: clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // useEffect with dependency: updates position message every time the tip changes
  useEffect(() => {
    setPositionMessage(`Consejo ${currentIndex + 1} de ${MAX_TIPS}`);
  }, [currentIndex]);

  // Advances manually to the next tip
  const handleNextTip = () => {
    setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
  };

  const currentTip = CARE_TIPS[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>💡 Consejos de Cuidado</Text>
        <Text style={styles.headerSubtitle}>
          Para el bienestar de tu mascota
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Tip card */}
        <View style={styles.tipCard}>
          {/* Tip header: emoji + category + title */}
          <View style={styles.tipHeader}>
            <Text style={styles.tipEmoji}>{currentTip.emoji}</Text>
            <View style={styles.tipMeta}>
              <Text style={styles.tipCategory}>{currentTip.category}</Text>
              <Text style={styles.tipTitle}>{currentTip.title}</Text>
            </View>
          </View>

          {/* Tip description */}
          <Text style={styles.tipDescription}>{currentTip.description}</Text>

          {/* Position indicator and dots */}
          <View style={styles.indicatorRow}>
            <Text style={styles.indicatorText}>{positionMessage}</Text>
            <View style={styles.dotsRow}>
              {CARE_TIPS.map((_, index) => (
                <View
                  key={index}
                  style={[styles.dot, index === currentIndex && styles.dotActive]}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Manual next button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextTip}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>Siguiente consejo →</Text>
        </TouchableOpacity>

        {/* Auto-rotation label */}
        <Text style={styles.autoLabel}>
          ⏱ Cambia automáticamente cada 5 segundos
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}