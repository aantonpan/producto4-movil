// firebase/notifications.ts
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";

export async function registerForPushNotificationsAsync() {
  try {
    let token;

    if (!Device.isDevice) {
      Alert.alert("Error", "Debes usar un dispositivo físico");
      return;
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      Alert.alert(
        "Permisos denegados",
        "No se concedieron permisos para recibir notificaciones push"
      );
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;


    console.log("Expo Push Token:", token);
    Alert.alert("Token generado correctamente", token);

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  } catch (error) {
    console.error("Error al registrar notificaciones:", error);
    Alert.alert("Error inesperado", JSON.stringify(error));
  }
}
