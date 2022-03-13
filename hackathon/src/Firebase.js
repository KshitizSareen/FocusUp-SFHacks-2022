import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAU1vAApjGClcM4STiUMnwnfQlGyqkw-hE",
    authDomain: "focusup-sfhacks2022.firebaseapp.com",
    projectId: "focusup-sfhacks2022",
    storageBucket: "focusup-sfhacks2022.appspot.com",
    messagingSenderId: "831622725334",
    appId: "1:831622725334:web:d88ff80e265df8171e1377",
    measurementId: "G-EX1SX6WM01"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const storage=getStorage(app);

  export default storage;