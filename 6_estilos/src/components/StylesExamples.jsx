import React from 'react'
import './StylesExamples.css'
import styles from "./StylesExamples.module.css"

const StylesExamples = () => {

  const inline = {
    color: 'blue',
    fontSize: '12px'
  }
  
  return (
    <>
    {/* inline */}
    <h2 style={inline}>Estilo In-line</h2>
    {/* externo */}
    <p className='text'>CSS arquivo</p>
    {/* css modules */}
    <p className={styles.textPurple}>CSS module</p>
    </>
  )
}

export default StylesExamples