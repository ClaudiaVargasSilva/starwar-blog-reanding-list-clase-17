import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Shop_name = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="col-lg-3">

            <h1 className="my-4"><i class="fas fa-jedi"></i></h1>
            <div className="list-group">
            <b className="list-group-item">Add Favorites<span className="float-right">{store.favorite.length}</span></b>
                {   
                     !!store.favorite.length !== 0 &&
                     store.favorite.map((valor, index) => {
                         return <a key={index} className="list-group-item">{valor}<i class="far fa-trash-alt float-right" onClick={() => actions.deleteFavorite(valor)}></i></a>
                     })
                    
                }
                
            </div>

        </div>

    )
}

{/* <a href="#" className="list-group-item">Favoritos<i class="far fa-trash-alt float-right"></i></a>
<a href="#" className="list-group-item">Favoritos<i class="far fa-trash-alt float-right"></i></a> */}
/* 
store.favorite.length === 0 ?

/* <a className="list-group-item">------</a>
:
store.favorite.map((valor, index) => {
    return <a key={index} className="list-group-item">{valor}<i class="far fa-trash-alt float-right"></i></a>
})  */