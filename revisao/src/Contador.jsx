
import { useState } from 'react';

export default function Contador() {
  const [textoBotao, settextoBotao] = useState('Rebeca')

function handleClick() {
  settextoBotao(textoBotao === "Rebeca" ? "Ouro" : "Rebeca")
}

  return (
    <>
     <button onClick={handleClick}>{textoBotao}</button>
    </>
    
  )
}





