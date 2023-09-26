import React, { useEffect, useState } from 'react'
import "./Tabla.css"
import Stars from './Stars'

function Tabla() {
const [data, setData] = useState()
const [loaded, setLoaded] = useState(false)

const datos = [
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
    {
      name: "Televisor Sanyo",
      category: "Tecnologia",
      score: 1,
    },
  ];

const loadData = async () => {
    setTimeout(() => {
        setData(datos)
        setLoaded(true)
    }, 3000)
}


useEffect(() => {
    loadData()
}, [])



  return (
    <div>
        <h1>Listado</h1>
        {loaded && (
        <table>
            <thead>
                <tr>
                    <td className='titulos'>Nombre</td>
                    <td className='titulos'>Categoria</td>
                    <td className='titulos'>Puntos</td>
                </tr>
            </thead>
            <tbody>
                {datos.map((item) => {

                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td><Stars inicial={item.score}></Stars></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        )}
        {!loaded && <h2> LOADING </h2>}
    </div>
  )
}

export default Tabla