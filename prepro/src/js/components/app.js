import React, { useState } from 'react'

import data from './data'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>

      <p className="sass">esto es Sass</p>
      <p className="less">esto es Less</p>
      <p className="stylus">esto es Stylus</p>
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