import React from 'react'

const Home2 = ({Name, onShow}) => {
  return (
    <div id = "nav-element">
        <button id = "nav-button" onClick = {onShow}>{Name}</button>
    </div>
  )
}

export default Home2