import React, { memo } from "react";
import "./pixel.css"
import { useSelectedPixelState } from "./useSelectedPixelState";

const PIXEL_SIZE = 3.1

export const Pixel = ({ id }) => {

    const [isSelected, color, dispatch] = useSelectedPixelState(id)
    return <ThemedPixel isSelected={isSelected} color={color} dispatch={dispatch} id={id} />
}

const ThemedPixel = memo(({ id, isSelected, color, dispatch }) => {
    const style = { width: PIXEL_SIZE, height: PIXEL_SIZE, background: color }

    return <div
        style={style}
        onClick={(e) => {
            e.preventDefault()
            dispatch({ type: "select", selectedPixelId: id })
        }}
        className={isSelected ? "selected" : ""}
    />
})