import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvZWflnzsT0HCr_efWmYbMbdUcZ10ifQA',
  authDomain: 'weatherapp-dc236.firebaseapp.com',
  projectId: 'weatherapp-dc236',
  storageBucket: 'weatherapp-dc236.appspot.com',
  messagingSenderId: '82091149868',
  appId: '1:82091149868:web:8e800b7f42311e0ef59f89',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
