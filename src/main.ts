import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8pqSIZcPXURlPs1Nq334rb-DcxwTXR3k',
  authDomain: 'weatherapp-25a91.firebaseapp.com',
  projectId: 'weatherapp-25a91',
  storageBucket: 'weatherapp-25a91.appspot.com',
  messagingSenderId: '503902143057',
  appId: '1:503902143057:web:4dfcb261bd1c8aa9c7ee70',
  measurementId: 'G-SKT70NZS1X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
