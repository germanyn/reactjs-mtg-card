import React from 'react'

import 'reactjs-mtg-card/dist/index.css'
import GermanoCard from './cards/GermanoCard'
import NissaCard from './cards/NissaCard'
import SpectralSailor from './cards/SpectralSailor'

const App = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
    }}>
      <div style={{
        width: '680px',
        margin: 'auto',
        padding: '12px',
      }}>
        <h1>Reactjs MTG Cards</h1>
        <NissaCard/>
        <SpectralSailor/>
        <GermanoCard/>
      </div>
    </div>
  )
}

export default App
