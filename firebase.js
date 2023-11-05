import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsnzBZpU22DJ2RyF1LmXbfgZI5QxLxczg",
  authDomain: "dapper-ce13c.firebaseapp.com",
  projectId: "dapper-ce13c",
  storageBucket: "dapper-ce13c.appspot.com",
  messagingSenderId: "522756342069",
  appId: "1:522756342069:web:ce2983a8a78f9221494c7c",
  measurementId: "G-WDEB1YKMGX",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
