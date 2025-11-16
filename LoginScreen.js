import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { authService } from '../../services/authService';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    // Implementation
  };

  return (
    <View style={styles.container}>
      {/* Login UI */}
    </View>
  );
};

export default LoginScreen;