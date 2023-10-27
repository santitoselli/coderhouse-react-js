
import { db } from "./firebase/firebaseConfig";
import { collection, getDoc, doc, getDocs, where, query, Timestamp, addDoc } from 'firebase/firestore'



const getItems = async () => {
    const itemsRef = collection(db, 'items')
    const snapshot = await getDocs(itemsRef)

    return snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
}

const getItemById = async (itemId) => {
    const itemRef = doc(db, 'items', itemId)
    const snapshot = await getDoc(itemRef)

    if (snapshot.exists()) {
        return {
            id: snapshot.id, ...snapshot.data()
        }
    } else {
        return null
    }
}

const getItemsByCategory = async (categoryId) => {
        const itemsRef = collection(db, 'items')
        const queryItem = query(itemsRef, where('category', '==', categoryId))
        const snapshot = await getDocs(queryItem)

        return snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
}

export async function createBuyOrder(orderData) {
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const itemsRef = collection(db, 'buyOrders');
    const buyOrder = await addDoc(db, orderWithDate);
    console.log("Orden lista con el id ", buyOrder.id);
    return buyOrder.id;
}


export const itemServices = { getItems, getItemById, getItemsByCategory}