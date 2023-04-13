import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBC0QQzsA1oVHPD-G22bM8rY4Km3yAqlqw",
  authDomain: "jokes-a120f.firebaseapp.com",
  databaseURL: "https://jokes-a120f-default-rtdb.firebaseio.com",
  projectId: "jokes-a120f",
  storageBucket: "jokes-a120f.appspot.com",
  messagingSenderId: "200796295089",
  appId: "1:200796295089:web:665833762647cc03d03790"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const tabela = collection(db, "sale");

document.getElementById("btn").addEventListener("click",getJoke);

const jokeContainer = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";



function getJoke(){
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
        var temp=document.getElementById("joke").innerHTML;
        console.log(temp);
        addDoc(tabela,{
          joke:temp
        });
    });

}


