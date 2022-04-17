import React from "react"

export const initialSelectedPixelId = null

export const reducer = (state, action) => {
    switch (action.type) {
        case "select":
            return action.selectedPixelId
        default:
            return state
    }
}

export const PixelContext = React.createContext({ state: initialSelectedPixelId, dispatch: () => null })

export const PixelProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialSelectedPixelId)

    return (
        <PixelContext.Provider value={{ state, dispatch }}>
            {children}
        </PixelContext.Provider>
    )
}