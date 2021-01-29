import { createContext, useEffect, useState } from 'react';
import getState from './flux';

// vacio para reemplazarlo con los datos 
export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        /*en useState se llama a la funcion de flux(contiene store y funciones)*/
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                /* store: { ...state.store, updateStore }, */
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            // funciones a ejecutar cuando carga la pagina //al cargar la pagina ya tengo los datos
            state.actions.getList();
            state.actions.getDataCharacters("https:/swapi.dev/api/people/");
            state.actions.getDataPlanets("https://swapi.dev/api/planets/");
            state.actions.getDataNave("https://swapi.dev/api/starships/");
           /*  return () =>{
                state.actions.saveFav();
            } */
            /* state.actions.a(); */
        }, [])

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )

    }
    return StoreWrapper;
}

export default injectContext;