import { useState } from 'react'

function InputList ({items, value, change, clickAuto}) {
  const [ focus, setFocus ] = useState(false)

  const handleClickList = (item) => {
    clickAuto(item)
    setFocus(false)
  }

  return (
    <>
      <input 
        className="input" 
        type="text" 
        value={value} 
        onChange={change} 
        placeholder="search movie...." 
        data-testid="input-list"
        onFocus={() => setFocus(true)}
      />
      {
        items && items.length > 0 && focus && <div className="wrapper">
         { 
          items.map((item, index) => (
            <li key={index} onClick={() => handleClickList(item)}>{item.Title}</li>
          ))
         }
        </div>
      }
    </>
  )
}

export default InputList