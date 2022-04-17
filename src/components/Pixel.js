import React from "react";
import "./pixel.css"
import { PixelContext } from "../features/selectPixel";

export const Pixel = ({ color, id }) => {
    const pixelContext = React.useContext(PixelContext)

    const isSelected = pixelContext.state === id;
    //const color = pixelContext.state.selectedColor
    const baseStyle = { width: 1, height: 1, background: color }
    //const style = isSelected ? { ...baseStyle, background: color } : baseStyle

    return <div
        style={baseStyle}
        onClick={(e) => {
            e.preventDefault()
            pixelContext.dispatch({ type: "select", selectedPixelId: id })
        }}
        className={isSelected ? "selected" : ""}
    />
}