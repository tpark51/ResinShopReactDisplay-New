import React from 'react'

const Home = ({Name, onShow}) => {
  return (
    <div id = "nav-element">
        <button id = "nav-button" onClick = {onShow}>{Name}</button>
    </div>
  )
}

export default Home