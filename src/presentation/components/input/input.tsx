import React, { useState } from 'react'

import styles from './input-styles.scss'

const enterKey = "Enter"

interface Props {
  onSubmit: Function
}

const input: React.FC<Props> = (props) => {
  const [input, setInput] = useState('')
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }
  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === enterKey){
      props.onSubmit(input)
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <input placeholder='search by title (press Enter)' value={input} onChange={handleChange} onKeyPress={onKey}></input>
    </div>
  )
}

export default input
