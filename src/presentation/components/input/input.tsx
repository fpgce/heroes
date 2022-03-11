import React, { useState } from 'react'

import styles from './input-styles.scss'
import search from '@/presentation/assets/search.png'

const enterKey = "Enter"

interface Props {
  type: 'search'
  onSubmit: Function
}

const input: React.FC<Props> = (props) => {
  const [input, setInput] = useState('')

  function submit() {
    if(input){
      props.onSubmit(input)
    }
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value)
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.code === enterKey){
      props.onSubmit(input)
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <input placeholder='search by title (press Enter)' value={input} onChange={handleChange} onKeyPress={onKey}></input>
      <div className={styles.cleanBtn} onClick={submit}>
        <img src={search} />
      </div>
    </div>
  )
}

export default input
