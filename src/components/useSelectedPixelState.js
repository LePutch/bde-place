import React from "react";
import { PixelContext } from "../features/selectPixel";

export const useSelectedPixelState = (id) => {
    const { state, dispatch } = React.useContext(PixelContext)

    const isSelected = state.selectedPixelId === id;
    const remoteColor = state.pixels[id] ? state.pixels[id].color : "grey"
    const selectedColor = state.selectedColor
    const color = isSelected ? selectedColor : remoteColor
    return [isSelected, color, dispatch]
} 