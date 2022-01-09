import React, { useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from "../firebaseConfig.js";

async function getItems(db) {
  const itemsCol = collection(db, 'items');
  const itemSnapshot = await getDocs(itemsCol);
  const itemList = itemSnapshot.docs.map(doc => doc.data());
  return itemList;
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
