import React, { useEffect } from "react"
import { listenForNewSnapshot, writePixel } from "./firebase"

export const initialSelectedPixelId = { selectedPixelId: null, selectedColor: "white", pixels: {} }

export const reducer = (state, action) => {
    switch (action.type) {
        case "select":
            return { ...state, selectedPixelId: action.selectedPixelId }
        case "pickColor":
            return { ...state, selectedColor: action.color }
        case "update":
            return { ...state, pixels: action.payload }
        case "write":
            writePixel(state.selectedPixelId, state.selectedColor)
            return { ...state, selectedPixelId: null }
        default:
            return state
    }
}

export const PixelContext = React.createContext({ state: initialSelectedPixelId, dispatch: () => null })

export const PixelProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialSelectedPixelId)

    const dispatchNewSnapshot = (pixels) => {
        const action = { type: "update", payload: pixels }
        dispatch(action)
    }

    useEffect(() => {
        listenForNewSnapshot(dispatchNewSnapshot)
    }, [])

    return (
        <PixelContext.Provider value={{ state, dispatch }}>
            {children}
        </PixelContext.Provider>
    )
}