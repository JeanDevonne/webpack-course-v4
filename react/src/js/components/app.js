import React, { useState } from 'react'

import Loader from './loader'
import data from './data'


function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      que linda aplicación hecha en React.js
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