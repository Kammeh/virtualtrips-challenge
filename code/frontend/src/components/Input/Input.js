import { useState } from 'react';

const Input = ({ name, placeholder, onTextChange }) => {
  const [inputVal, setInputVal] = useState('');

  const onChange = (e) => {
    setInputVal(e.target.value);
    onTextChange(e.target.value);
  }

  return (
    <>
      <input type="text" name={name} placeholder={placeholder} value={inputVal} onChange={onChange} />

      <style jsx>
        {`
          input {
            padding: 3px;
            min-width: 260px;
            font-size: 1.8rem;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  )
}

export default Input;