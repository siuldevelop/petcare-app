// app/(tabs)/registrar.tsx
// RegisterPet screen - controlled form to register a new pet

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from '../../styles/RegisterPetStyles';

export default function RegisterPetScreen() {
  // useState (multiple): one independent state per form field
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  // useState: controls whether the register button is enabled
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect with dependencies: validates form in real time
  // enables/disables register button based on field completion
  useEffect(() => {
    const allFieldsFilled =
      name.trim().length > 0 &&
      species.trim().length > 0 &&
      breed.trim().length > 0 &&
      age.trim().length > 0 &&
      weight.trim().length > 0;

    setIsFormValid(allFieldsFilled);
  }, [name, species, breed, age, weight]);

  // Shows an alert with the registered pet summary
  const handleRegister = () => {
    Alert.alert(
      '✅ Mascota registrada',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age} año(s)\nPeso: ${weight} kg`,
      [{ text: 'Aceptar', style: 'default' }]
    );
  };

  // Resets all fields to their initial empty values
  const handleClear = () => {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  // Returns how many fields are filled (used for progress indicator)
  const filledCount = [name, species, breed, age, weight].filter(
    (val) => val.trim().length > 0
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🐾 Registrar Mascota</Text>
          <Text style={styles.headerSubtitle}>
            Completa todos los campos para continuar
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Form card */}
          <View style={styles.formCard}>

            {/* Name field */}
            <Text style={styles.fieldLabel}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Luna"
              placeholderTextColor="#A0AABB"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            {/* Species field */}
            <Text style={styles.fieldLabel}>Especie</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Perro, Gato, Ave..."
              placeholderTextColor="#A0AABB"
              value={species}
              onChangeText={setSpecies}
              autoCapitalize="words"
            />

            {/* Breed field */}
            <Text style={styles.fieldLabel}>Raza</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: Golden Retriever"
              placeholderTextColor="#A0AABB"
              value={breed}
              onChangeText={setBreed}
              autoCapitalize="words"
            />

            {/* Age field */}
            <Text style={styles.fieldLabel}>Edad (años)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 3"
              placeholderTextColor="#A0AABB"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />

            {/* Weight field */}
            <Text style={styles.fieldLabel}>Peso (kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 12.5"
              placeholderTextColor="#A0AABB"
              value={weight}
              onChangeText={setWeight}
              keyboardType="decimal-pad"
            />

            {/* Real-time validation indicator */}
            <View style={styles.validationRow}>
              <View
                style={[
                  styles.validationDot,
                  isFormValid
                    ? styles.validationDotComplete
                    : styles.validationDotIncomplete,
                ]}
              />
              <Text style={styles.validationText}>
                {filledCount} de 5 campos completados
              </Text>
            </View>
          </View>

          {/* Action buttons */}
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={[
                styles.registerButton,
                !isFormValid && styles.registerButtonDisabled,
              ]}
              onPress={handleRegister}
              disabled={!isFormValid}
              activeOpacity={0.8}
            >
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClear}
              activeOpacity={0.8}
            >
              <Text style={styles.clearButtonText}>Limpiar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}