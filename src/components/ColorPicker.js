import React from "react"
import { PixelContext } from "../features/selectPixel"

export const ColorPicker = () => {
    const pixelContext = React.useContext(PixelContext)
    const colors = [
        "#ffffff",
        "#e4e4e4",
        "#888888",
        "#222222",
        "#ffa7d1",
        "#e50000",
        "#e59500",
        "#a06a42",
        "#e5d900",
        "#94e044",
        "#02be01",
        "#00d3dd",
        "#0083c7",
        "#0000ea",
        "#cf6ee4",
        "#820080",
    ]

    return <div style={{ background: "white", display: "flex", justifyContent: "space-around", width: "100%", boxShadow: "0px 0px 5px 0px #686868", flexWrap: "wrap" }}>
        {colors.map((color) => (<div
            key={color}
            style={{ height: 20, borderRadius: 3, background: color, margin: 8, minWidth: 40, boxShadow: "0px 0px 5px 0px #686868" }}
            onClick={
                (e) => {
                    e.preventDefault()
                    const action = { type: "pickColor", color }
                    pixelContext.dispatch(action)
                }
            }
        />))}
    </div>


}