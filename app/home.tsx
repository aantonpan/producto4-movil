import * as Notifications from 'expo-notifications';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { registerForPushNotificationsAsync } from '../firebase/notifications';
import { styles } from '../styles/homeStyles';


const LOGO = require('../assets/images/atlas-logo.png');

export default function Home() {
  const router = useRouter();
  const [expoToken, setExpoToken] = useState<string | null>(null);

  useEffect(() => {
  console.log('Ejecutando useEffect para obtener token...');
  registerForPushNotificationsAsync().then(token => {
    if (token) {
      console.log('Token recibido ✅:', token);
      setExpoToken(token);
    } else {
      console.log('No se recibió ningún token ❌');
    }
  });

  const subscription = Notifications.addNotificationReceivedListener(notification => {
    console.log("📩 Notificación recibida internamente:", notification);
  });

  return () => subscription.remove();
}, []);



  const scale = useRef(new Animated.Value(1)).current;
  const onPressIn = () => {
    Animated.spring(scale, { toValue: 1.1, friction: 3, useNativeDriver: true }).start();
  };
  const onPressOut = () => {
    Animated.spring(scale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.background}>
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
          <Animated.Image
            source={LOGO}
            style={[styles.logo, { transform: [{ scale }] }]}
            resizeMode="contain"
          />
        </Pressable>

        <Button
          mode="contained"
          onPress={() => router.push('/listado')}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Ver jugadores
        </Button>

        {/* Mostrar el token push */}
        {expoToken && (
          <Text style={{ color: 'black', marginTop: 20, padding: 10 }}>
            {expoToken}
          </Text>
        )}
      </View>
    </>
  );
}
