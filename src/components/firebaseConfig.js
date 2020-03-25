import {
  initializeApp
} from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyCZWXLbc0NuEkgqIztM5li02LbWipHOflA',
  authDomain: 'arias-portfolio.firebaseapp.com',
  databaseURL: 'https://arias-portfolio.firebaseio.com',
  projectId: 'arias-portfolio',
  storageBucket: 'arias-portfolio.appspot.com',
  messagingSenderId: '823180128121',
  appId: '1:823180128121:web:6d04124424bb31d40989a8',
  measurementId: 'G-165471L5TJ'
})

export const db = app.database()

// Database References
export const viewersRef = db.ref('viewers')
export const usersRef = db.ref('users')
