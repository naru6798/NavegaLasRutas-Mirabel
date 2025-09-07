import "./ItemListContainer.css";
import { useEffect, useState } from "react";
/* import { getProductos, getProductoPorCategoria } from "../../asyncmock"; */
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from "../../services/config"
import {collection, getDocs, query, where} from "firebase/firestore"
import Loader from "../Loader/Loader";


const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()


    useEffect(() => {
        setLoading(true)
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos")

        getDocs(misProductos)
        .then(res => {
            const nuevosProductos = res.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos)
        })
        .catch(error => console.log(error))
        .finally(() => {
            console.log("Proceso finalizado")
            setTimeout(() => setLoading(false), 300);
        });
    },[idCategoria])


    //useEffect(() => {
    //    const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos

    //    funcionProductos(idCategoria)
    //    .then(res => setProductos(res))
        
        /*getProductos()
            .then(respuesta => setProductos(respuesta))*/
    //}, [idCategoria])

    

    return (
        <div>
            {loading ? <Loader/> : <ItemList productos={productos}/>}
        </div>
    )

}

export default ItemListContainer