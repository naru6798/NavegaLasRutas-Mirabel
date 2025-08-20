import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({  }) => {


    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()


    useEffect(() => {
        const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        
        /*getProductos()
            .then(respuesta => setProductos(respuesta))*/
    }, [idCategoria])

    console.log(productos);

    return (
        <div>{
            <ItemList productos={productos} />
        }</div>
    )

}

export default ItemListContainer