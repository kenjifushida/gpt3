import React from 'react'
import { Feature } from '../../components'
import './whatGpt3.css'

const WhatGpt3 = () => {
  return (
    <div className='gpt3-whatgpt3 section-margin' id='whatgpt3'>
      <div className='gpt3-whatgpt3-feature'>
        <Feature />
      </div>
      <div className='gpt3-whatgpt3-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3-whatgpt3-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGpt3