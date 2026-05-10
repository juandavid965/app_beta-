import React, { useState } from 'react';

import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Picker } from '@react-native-picker/picker';

import { router } from 'expo-router';

const RegisterScreen = () => {

  const [fullName, setFullName] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('Colombia');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // MOSTRAR / OCULTAR PASSWORD
  const [passwordVisible, setPasswordVisible] =
    useState(false);

  // ERRORES
  const [errors, setErrors] = useState<any>({});

  // VALIDAR EMAIL
  const validateEmail = (value: string) => {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      return 'Este campo es obligatorio';
    }

    if (!value.includes('@')) {
      return 'Este email necesita @';
    }

    if (!emailRegex.test(value)) {
      return 'Correo inválido';
    }

    return '';
  };

  // VALIDAR TELEFONO
  const validatePhone = (value: string) => {

    if (!value.trim()) {
      return 'Este campo es obligatorio';
    }

    if (value.length !== 10) {
      return 'Debe tener 10 dígitos';
    }

    return '';
  };

  // VALIDAR CAMPOS
  const validateFields = () => {

    let newErrors: any = {};

    // FULLNAME
    if (!fullName.trim()) {
      newErrors.fullName =
        'Este campo es obligatorio';
    }

    // DOCUMENT
    if (!documentNumber.trim()) {
      newErrors.documentNumber =
        'Este campo es obligatorio';
    }

    // PHONE
    const phoneError = validatePhone(phone);

    if (phoneError) {
      newErrors.phone = phoneError;
    }

    // ADDRESS
    if (!address.trim()) {
      newErrors.address =
        'Este campo es obligatorio';
    }

    // EMAIL
    const emailError = validateEmail(email);

    if (emailError) {
      newErrors.email = emailError;
    }

    // PASSWORD
    if (!password.trim()) {
      newErrors.password =
        'Este campo es obligatorio';
    }

    if (password.length < 6) {
      newErrors.password =
        'Mínimo 6 caracteres';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // REGISTER
  const handleRegister = async () => {

    if (validateFields()) {

      const user = {
        fullName,
        documentNumber,
        phone,
        address,
        country,
        email,
        password,
      };

      try {

        // GUARDAR USUARIO
        await AsyncStorage.setItem(
          'user',
          JSON.stringify(user),
        );

        Alert.alert(
          'Registro exitoso',
          'Cuenta creada correctamente',
          [
            {
              text: 'OK',
              onPress: () =>
                router.replace('/LoginScreen'),
            },
          ]
        );

      } catch (error) {

        Alert.alert(
          'Error',
          'No se pudo guardar el usuario',
        );
      }
    }
  };

  return (

    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >

      <SafeAreaView style={styles.container}>

        <StatusBar
          barStyle="light-content"
        />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={
            Platform.OS === 'ios'
              ? 'padding'
              : 'height'
          }
        >

          {/* HEADER */}
          <View style={styles.header}>

            <Text style={styles.bankName}>
              NovaBank
            </Text>

            <Text style={styles.subtitle}>
              Create your secure account
            </Text>

          </View>

          {/* CARD */}
          <View style={styles.card}>

            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                paddingBottom: 120,
              }}
            >

              <Text style={styles.title}>
                Register
              </Text>

              {/* FULL NAME */}
              <Text style={styles.label}>
                Full Name
              </Text>

              <TextInput
                style={[
                  styles.input,
                  errors.fullName &&
                  styles.inputError,
                ]}
                placeholder="Enter your full name"
                placeholderTextColor="#94A3B8"
                value={fullName}
                onChangeText={setFullName}
              />

              {errors.fullName && (
                <Text style={styles.errorText}>
                  {errors.fullName}
                </Text>
              )}

              {/* DOCUMENT */}
              <Text style={styles.label}>
                Document Number
              </Text>

              <TextInput
                style={[
                  styles.input,
                  errors.documentNumber &&
                  styles.inputError,
                ]}
                placeholder="Enter your document number"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={documentNumber}
                onChangeText={setDocumentNumber}
              />

              {errors.documentNumber && (
                <Text style={styles.errorText}>
                  {errors.documentNumber}
                </Text>
              )}

              {/* PHONE */}
              <Text style={styles.label}>
                Phone Number
              </Text>

              <TextInput
                style={[
                  styles.input,
                  errors.phone &&
                  styles.inputError,
                ]}
                placeholder="Enter your phone number"
                placeholderTextColor="#94A3B8"
                keyboardType="phone-pad"
                maxLength={10}
                value={phone}
                onChangeText={setPhone}
              />

              {errors.phone && (
                <Text style={styles.errorText}>
                  {errors.phone}
                </Text>
              )}

              {/* ADDRESS */}
              <Text style={styles.label}>
                Address
              </Text>

              <TextInput
                style={[
                  styles.input,
                  errors.address &&
                  styles.inputError,
                ]}
                placeholder="Enter your address"
                placeholderTextColor="#94A3B8"
                value={address}
                onChangeText={setAddress}
              />

              {errors.address && (
                <Text style={styles.errorText}>
                  {errors.address}
                </Text>
              )}

              {/* COUNTRY */}
              <Text style={styles.label}>
                Country
              </Text>

              <View style={styles.pickerContainer}>

                <Picker
                  selectedValue={country}
                  onValueChange={(itemValue) =>
                    setCountry(itemValue)
                  }
                  dropdownIconColor="#0F172A"
                  style={styles.picker}
                >

                  <Picker.Item
                    label="Colombia"
                    value="Colombia"
                  />

                  <Picker.Item
                    label="México"
                    value="México"
                  />

                  <Picker.Item
                    label="Argentina"
                    value="Argentina"
                  />

                  <Picker.Item
                    label="Perú"
                    value="Perú"
                  />

                  <Picker.Item
                    label="Chile"
                    value="Chile"
                  />

                </Picker>

              </View>

              {/* EMAIL */}
              <Text style={styles.label}>
                Email
              </Text>

              <TextInput
                style={[
                  styles.input,
                  errors.email &&
                  styles.inputError,
                ]}
                placeholder="Enter your email"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              {errors.email && (
                <Text style={styles.errorText}>
                  {errors.email}
                </Text>
              )}

              {/* PASSWORD */}
              <Text style={styles.label}>
                Password
              </Text>

              <View
                style={[
                  styles.passwordContainer,
                  errors.password &&
                  styles.inputError,
                ]}
              >

                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!passwordVisible}
                  value={password}
                  onChangeText={setPassword}
                />

                {/* BOTON OJO */}
                <TouchableOpacity
                  onPress={() =>
                    setPasswordVisible(
                      !passwordVisible
                    )
                  }
                  style={styles.eyeButton}
                >

                  <Image
                    source={
                      passwordVisible
                        ? require('../../src/images/pasword mostrar.png')
                        : require('../../src/images/paswod no mostrar.png')
                    }
                    style={styles.eyeIcon}
                  />

                </TouchableOpacity>

              </View>

              {errors.password && (
                <Text style={styles.errorText}>
                  {errors.password}
                </Text>
              )}

              {/* BUTTON */}
              <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
              >

                <Text style={styles.registerButtonText}>
                  Create Account
                </Text>

              </TouchableOpacity>

              {/* LOGIN */}
              <TouchableOpacity
                onPress={() =>
                  router.replace('/LoginScreen')
                }
              >

                <Text style={styles.loginText}>
                  I already have an account
                </Text>

              </TouchableOpacity>

            </ScrollView>

          </View>

        </KeyboardAvoidingView>

      </SafeAreaView>

    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  header: {
    paddingHorizontal: 30,
    marginTop: 50,
    marginBottom: 25,
  },

  bankName: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    letterSpacing: 1,
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
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 30,
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
    marginBottom: 6,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  inputError: {
    borderColor: '#EF4444',
    borderWidth: 2,
    backgroundColor: '#FEF2F2',
  },

  errorText: {
    color: '#EF4444',
    marginBottom: 14,
    marginLeft: 4,
    fontSize: 13,
    fontWeight: '600',
  },

  pickerContainer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },

  picker: {
    color: '#0F172A',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingRight: 15,
    marginBottom: 6,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#0F172A',
  },

  eyeButton: {
    padding: 5,
  },

  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#475569',
  },

  registerButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  loginText: {
    textAlign: 'center',
    marginTop: 28,
    marginBottom: 20,
    color: '#2563EB',
    fontSize: 15,
    fontWeight: '600',
  },

});