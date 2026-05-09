import React, { useState } from 'react';

import {
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

import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

const HomeScreen = () => {

  const [fullName, setFullName] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('Colombia');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Account created');
  };

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                Fullname
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#94A3B8"
                value={fullName}
                onChangeText={setFullName}
              />

              {/* DOCUMENT */}
              <Text style={styles.label}>
                Document Number
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your document number"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={documentNumber}
                onChangeText={setDocumentNumber}
              />

              {/* PHONE */}
              <Text style={styles.label}>
                Phone Number
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                placeholderTextColor="#94A3B8"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              {/* ADDRESS */}
              <Text style={styles.label}>
                Address
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your address"
                placeholderTextColor="#94A3B8"
                value={address}
                onChangeText={setAddress}
              />

              {/* COUNTRY */}
              <Text style={styles.label}>
                Country
              </Text>

              <View style={styles.pickerContainer}>

                <Picker
                  selectedValue={country}
                  onValueChange={(itemValue: string) =>
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
                    label="Mexico"
                    value="Mexico"
                  />

                  <Picker.Item
                    label="Argentina"
                    value="Argentina"
                  />

                  <Picker.Item
                    label="Peru"
                    value="Peru"
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
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              {/* PASSWORD */}
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
                onPress={() => router.back()}
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

export default HomeScreen;

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
    marginBottom: 22,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
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

  registerButton: {
    backgroundColor: '#0F172A',
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