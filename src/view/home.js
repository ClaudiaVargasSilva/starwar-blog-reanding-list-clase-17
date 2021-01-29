import { Navbar } from '../component/navbar';
import { Footer } from '../component/footer';
import { Shop_name } from '../component/shop_name';
import { Carousel } from '../component/carousel';
import { Item } from '../component/item';
import { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal"

const Home = () => {
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
                                        actions.getDataCharacters(store.characters.previous)
                                    }}>
                                        Prev
                                    </div>
                                    <div className="btn btn-sm btn btn-secondary mb-2" id="next" onClick={() => {

                                        actions.getDataCharacters(store.characters.next)
                                    }}>
                                        Next
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                {
                                    !!store.characters &&
                                    store.characters.results.map((valor, i) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 mb-4">
                                                <div className="card h-100">
                                                    <a href="#"><img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${(i + 1) + store.c}.jpg`} alt="" /></a>
                                                    <div className="card-body">
                                                        <h4 className="card-title" >
                                                            <Link data-toggle="modal" data-target={"#exampleModalCenter" + i}>{valor.name}{(i + 1) + store.c}</Link>


                                                        </h4>
                                                        <b className="card-text">BirthYear:</b><p>{valor.birth_year}</p>
                                                        <b className="card-text">Gender:</b><p>{valor.gender}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        {/* <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target={"#exampleModalCenter" + i}>
                                                            Learn more
                                                        </button> */}
                                                        <Modal index={i} character={valor} />
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
export default Home; 