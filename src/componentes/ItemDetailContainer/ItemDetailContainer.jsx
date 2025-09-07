import { useState, useEffect, use } from 'react';
//import { getUnProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from "../../services/config"
import {doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()


    useEffect(() => {
        const nuevoDoc = doc(db, "productos", idItem)

        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data()
            console.log(data)
            const nuevoProducto = {id: res.id, ...data}
            console.log(nuevoProducto)
            setProducto(nuevoProducto)
        })
        .catch(error => console.log(error))
    },[idItem])

    //useEffect(() => {
    //    getUnProducto(idItem)
    //    .then(respuesta => setProducto(respuesta))
    //}, [idItem])


  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer