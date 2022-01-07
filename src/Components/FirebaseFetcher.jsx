import React, { useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

async function getItems(db) {
  const itemsCol = collection(db, 'items');
  const itemSnapshot = await getDocs(itemsCol);
  const itemList = itemSnapshot.docs.map(doc => doc.data());
  return itemList;
}

const firebaseConfig = {
    apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
    authDomain: "yardzen-demo.firebaseapp.com",
    databaseURL: "https://yardzen-demo.firebaseio.com",
    projectId: "yardzen-demo",
    storageBucket: "yardzen-demo.appspot.com",
    messagingSenderId: "509183652730",
    appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FirebaseFetcher = ({ setItems }) => {
    useEffect(() => {
        getItems(db).then((items) => {
            setItems(items);
        });
    }, []) // Only run this once since we aren't making multiple requests

    return <div></div>
}

export default FirebaseFetcher;
