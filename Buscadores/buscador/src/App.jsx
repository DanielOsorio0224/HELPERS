import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'


function App() {

  const [usuarios, setUsuarios] = useState([])
  const [pagina, setPagina] = useState(1)
  
  const getPagina = (e) =>{
    setPagina(e.target.value)
  }
  const getUsuarios = () =>{
    fetch(`https://reqres.in/api/users?page=${pagina}`)
        .then(res => res.json())
        .then(res => {
          setUsuarios(res.data)
          console.log(usuarios)
        },error => {console.log(error)})
  }

  useEffect(()=>{
    getUsuarios()
  },[pagina])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ul className='usuarios'>
        {usuarios.map(usuario =>{
          return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}  <img src={usuario.avatar} alt="avatar" /></li>
        })}
      </ul>
      <select onChange={getPagina}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  )
}

export default App
