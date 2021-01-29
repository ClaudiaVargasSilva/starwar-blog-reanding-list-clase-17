import { Navbar } from '../component/navbar';
import { Footer } from '../component/footer';
import { Shop_name } from '../component/shop_name';
import { Carousel } from '../component/carousel';
import { Item } from '../component/item';
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, withRouter } from "react-router-dom";
import { ModalNaves } from "../component/modalNaves";



const Naves = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <Shop_name />
                        <div className="col-lg-9">
                            <Carousel />

                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-around">
                                    <div className="btn btn-sm btn btn-secondary mb-2" id="prev" onClick={() => {
                                        actions.getDataNave(store.naves.previous)
                                    }}>
                                        Prev
                                    </div>
                                    <div className="btn btn-sm btn btn-secondary mb-2" id="next" onClick={() => {

                                        actions.getDataNave(store.naves.next)
                                    }}>
                                        Next
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {
                                    !!store.naves &&
                                    store.naves.results.map((valor, i) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 mb-4">
                                                <div className="card h-100">
                                                    <a href="#"><img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/vehicles/${(i + 1) + store.c}.jpg`} alt="" /></a>
                                                    
                                                    <div className="card-body">
                                                        <h4 className="card-title" >
                                                            <Link data-toggle="modal" data-target={"#exampleModalCenter" + i}>{valor.name}</Link>
                                                        </h4>
                                                        <b className="card-text">Cargo Capacity:</b><p>{valor.cargo_capacity}</p>
                                                        <b className="card-text">Consumables:</b><p>{valor.consumables}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <ModalNaves index={i} nave={valor} />
                                                        <small className="text-muted"><i className= { store.favorite.includes(valor.name) ? "fas fa-heart" : "far fa-heart"} onClick={() => actions.addFavorite(valor.name)}></i></small>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>

        </>
    )
}
export default Naves;

{/* <div className="container">
                <div className="row">
                    <Shop_name />
                    <div className="col-lg-9">
                        <Carousel />
                        <div className="row">
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> */}