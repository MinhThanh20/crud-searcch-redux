import Context from "./Context";
import React, { useReducer } from "react";
import Reducer, { initState } from "./Reducer";
import logger from "./logger";
function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(Reducer), initState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider