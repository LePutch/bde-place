import React from "react";
import "./pixel.css"
import { useSelectedPixelState } from "./useSelectedPixelState";

export const Pixel = ({ id }) => {

    const [isSelected, color, dispatch] = useSelectedPixelState(id)
    const baseStyle = { width: 1, height: 1, background: "grey" }
    const style = isSelected ? { ...baseStyle, background: color } : baseStyle

    return <div
        style={style}
        onClick={(e) => {
            e.preventDefault()
            dispatch({ type: "select", selectedPixelId: id })
        }}
        className={isSelected ? "selected" : ""}
    />
}