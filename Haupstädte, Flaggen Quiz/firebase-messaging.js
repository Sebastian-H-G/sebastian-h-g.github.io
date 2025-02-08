import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";

// Your Firebase Config (replace with your actual config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission for notifications
async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");
    getFCMToken();
  } else {
    console.log("Notification permission denied.");
  }
}

// Get FCM Token (needed to send notifications)
async function getFCMToken() {
  try {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_VAPID_KEY"
    });
    if (token) {
      console.log("FCM Token:", token);
      // Send this token to your server to send push notifications
    } else {
      console.log("No FCM token available. Request permission to generate one.");
    }
  } catch (error) {
    console.error("Error getting FCM token", error);
  }
}

// Handle incoming messages while app is in foreground
onMessage(messaging, (payload) => {
  console.log("Message received:", payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});

// Ask for notification permission when page loads
document.addEventListener("DOMContentLoaded", requestPermission);
