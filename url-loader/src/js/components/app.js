import React, { useState } from 'react'

import data from './data'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      que linda aplicación hecha en React.js
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="" width="50px" />
      </p>
      <ul>
        {
          loaderList.map(item => <Loader data={item} key={item.id}></Loader>)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido</button>
    </div>
  )
}

export default App