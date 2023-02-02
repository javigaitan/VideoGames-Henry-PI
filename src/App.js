
const btnPulsado = () => {
  alert(`Hola`)
}

const App = () => {

  const array = [1,2,3,4,5,6]
  
  return (
    <div>
      {array.map((n,key)=>{
        return <p key ={key}>{n}</p>
          
      })}
    </div>
  )





  /*const title = <h1>Estoy creanto un h1 asignando con una constante</h1>;
  return <div>{title}</div>*/
  
   /*Ejemplo de JSX 
  <button onClick={btnPulsado}>pulsame</button>*/


}

export default App;
 