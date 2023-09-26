import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa"
import "./Stars.css"

function Stars({inicial}) {
const [estrellas, setEstrellas] = useState([1,2,3,4,5])
const [seleccion, setSeleccion] = useState(0)
const [mouseHover, setMouseHover] = useState(0)


useEffect(() => {
    if (inicial) {
        setSeleccion(inicial)
    }
}, [])

function onHandleMouseEnter(currentValue) {
    setMouseHover(currentValue)
}
function onHandleMouseLeave(currentValue) {
    setMouseHover(currentValue)
}
function onHandleMouseClick(currentValue) {
    setSeleccion(currentValue)
}


  return (
    <div >
        <div className='star-container'>
            {estrellas.map((item) => {
            const painted = item <= (seleccion || mouseHover)
            return (
                <FaStar
                    className='star'
                    color={painted ? "gold" : "black"}
                    onMouseLeave={() => onHandleMouseLeave(item)}
                    onMouseEnter={() => onHandleMouseEnter(item)}
                    onClick={() => onHandleMouseClick(item)}
                    style={{ cursor: "pointer" }}
                />
            )
            })}
        </div>  
    </div>
  )
}

export default Stars