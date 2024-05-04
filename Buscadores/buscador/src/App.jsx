import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'


function App() {

  const [usuarios, setUsuarios] = useState([])
  
  const getUsuarios = () =>{
    fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => {
          setUsuarios(res.data)
          console.log(usuarios)
        },error => {console.log(error)})
  }

  useEffect(()=>{
    getUsuarios()
  },[])
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
      
    </>
  )
}

export default App
