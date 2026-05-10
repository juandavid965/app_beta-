import React, { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    if (!email.trim() || !password.trim()) {

      Alert.alert(
        'Campos requeridos',
        'Completa todos los campos',
      );

      return;
    }

    try {

      setLoading(true);

      const userData = await AsyncStorage.getItem('user');

      if (!userData) {

        Alert.alert(
          'Usuario no encontrado',
          'Primero debes registrarte',
        );

        setLoading(false);
        return;
      }

      const parsedUser = JSON.parse(userData);

      if (
        parsedUser.email === email &&
        parsedUser.password === password
      ) {

        await AsyncStorage.setItem(
          'isLoggedIn',
          'true',
        );

        router.replace('/HomeScreen');

      } else {

        Alert.alert(
          'Error',
          'Correo o contraseña incorrectos',
        );
      }

    } catch (error) {

      Alert.alert(
        'Error',
        'Ocurrió un problema al iniciar sesión',
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
      />

      <View style={styles.header}>

        <Text style={styles.bankName}>
          NovaBank
        </Text>

        <Text style={styles.subtitle}>
          Secure Mobile Banking
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.title}>
          Welcome Back
        </Text>

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >

          {loading ? (

            <ActivityIndicator color="#FFFFFF" />

          ) : (

            <Text style={styles.loginButtonText}>
              Login
            </Text>

          )}

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/RegisterScreen')
          }
        >

          <Text style={styles.registerText}>
            I don't have an account
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  header: {
    paddingHorizontal: 30,
    marginTop: 80,
    marginBottom: 40,
  },

  bankName: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#CBD5E1',
    marginTop: 10,
    fontSize: 16,
  },

  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 35,
  },

  label: {
    color: '#334155',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 22,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  loginButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  registerText: {
    textAlign: 'center',
    marginTop: 28,
    color: '#2563EB',
    fontSize: 15,
    fontWeight: '600',
  },

});