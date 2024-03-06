const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')


btn1.addEventListener('click',()=>{
  const campoUsuario = document.querySelector('#filmeInput').value
  const itemLista = document.createElement('li')
  listaFilmes.append(itemLista)
  itemLista.innerHTML = `<strong>Este filme é o ${campoUsuario}</strong>`
  itemLista.style.backgroundColor = 'red'
  itemLista.classList.add('ativo')
  itemLista.classList.toggle('ativo')
  
})
