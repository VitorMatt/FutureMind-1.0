import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
const [pageCadastro, setPageCadastro] = useState('')


    return(
        <GlobalContext.Provider value={{pageCadastro, setPageCadastro}}>
            {children}
        </GlobalContext.Provider>
    );
};