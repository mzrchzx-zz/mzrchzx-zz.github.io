import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyDtXCWNJIZH5rtos_l1JaD2iV-DYL6GDl8',
  authDomain: 'testapikovue.firebaseapp.com',
  databaseURL: 'https://testapikovue.firebaseio.com',
  projectId: 'testapikovue',
  storageBucket: 'testapikovue.appspot.com',
  messagingSenderId: '330463282662',
  appId: '1:330463282662:web:2c226d691a68c59a998227'
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()


// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
}