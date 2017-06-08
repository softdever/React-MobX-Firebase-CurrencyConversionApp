import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCK51MS7_7ztfSmpomSqSL_9NJ0I-u_LfQ",
    authDomain: "reactfirstapp-cf971.firebaseapp.com",
    databaseURL: "https://reactfirstapp-cf971.firebaseio.com",
    storageBucket: "reactfirstapp-cf971.appspot.com",
    messagingSenderId: "802691498956"
    };

    firebase.initializeApp(config);

    const root = firebase.database().ref();
    const todos = firebase.database().ref('todos');

    const Fb = {
        root,
        todos
    };

    export { Fb };