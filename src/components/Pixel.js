import React from "react";
import "./pixel.css"
import { useSelectedPixelState } from "./useSelectedPixelState";

export const Pixel = ({ color, id }) => {

    const [isSelected, dispatch] = useSelectedPixelState(id)
    //const color = pixelContext.state.selectedColor
    const baseStyle = { width: 1, height: 1, background: color }
    //const style = isSelected ? { ...baseStyle, background: color } : baseStyle

    return <div
        style={baseStyle}
        onClick={(e) => {
            e.preventDefault()
            dispatch({ type: "select", selectedPixelId: id })
        }}
        className={isSelected ? "selected" : ""}
    />
}