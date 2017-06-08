import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"

import TodoList from "./TodoList"
import store from "./TodoStore"

//import * as firebase from 'firebase'

//var config = {
//    apiKey: "AIzaSyCK51MS7_7ztfSmpomSqSL_9NJ0I-u_LfQ",
//    authDomain: "reactfirstapp-cf971.firebaseapp.com",
//    databaseURL: "https://reactfirstapp-cf971.firebaseio.com",
//    storageBucket: "reactfirstapp-cf971.appspot.com",
//    messagingSenderId: "802691498956"
//};
//firebase.initializeApp(config);



const app = document.getElementById("app");

ReactDOM.render(<TodoList store={store} />, app);

