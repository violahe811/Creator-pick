import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      // 模拟请求延迟（让loading看起来真实）
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 直接跳转（不依赖真实API）
      navigation.replace('Products');

    } catch (e) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}

      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
}