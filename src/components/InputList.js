function InputList ({items, value, change}) {
  return (
      <input 
        className="input" 
        type="text" 
        value={value} 
        onChange={change} 
        placeholder="search movie...." 
        data-testid="input-list"
      />
  )
}

export default InputList