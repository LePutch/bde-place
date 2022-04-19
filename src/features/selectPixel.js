import React from "react"

export const initialSelectedPixelId = { selectedPixelId: null, selectedColor: "white" }

export const reducer = (state, action) => {
    switch (action.type) {
        case "select":
            return { ...state, selectedPixelId: action.selectedPixelId }
        case "pickColor":
            return { ...state, selectedColor: action.color }
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