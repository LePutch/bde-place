import React from "react";
import { PixelContext } from "../features/selectPixel";

export const useSelectedPixelState = (id) => {
    const { state, dispatch } = React.useContext(PixelContext)

    const isSelected = state.selectedPixelId === id;

    return [isSelected, dispatch]
} 