document.addEventListener("DOMContentLoaded", async () => {
    if ("Notification" in window && "serviceWorker" in navigator) {
      const permission = await Notification.requestPermission();
      
      if (permission === "granted") {
        console.log("User allowed notifications");
      } else {
        console.log("User denied notifications");
      }
    }
  });
  async function subscribeUserToPush() {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: "YOUR_PUBLIC_VAPID_KEY"
    });
  
    console.log("Push Subscription:", JSON.stringify(subscription));
    // Send this subscription to your server to store it
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker.register("/service-worker.js")
        .then(subscribeUserToPush)
        .catch(console.error);
    }
  });
    