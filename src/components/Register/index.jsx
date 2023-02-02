import './style.css'
import { useState } from 'react'

export function Register({setListTransactions,listTransactions}){


    const [descricao, setDescricao] = useState("")
    const [valor,setValor] = useState (0)
    const [tipoValor,setTipoValor] = useState ("entrada")


 



    function handleSubmit(event){
      

        event.preventDefault()
        let novoValor=0
        if(tipoValor==='saída'){
            novoValor= -valor
           
           
        }else{
            novoValor=valor

        }
     
        console.log({descricao,valor:novoValor, tipoValor})
        setListTransactions(  [...listTransactions,{descricao,valor:novoValor, tipoValor}])
        setDescricao('')

        setValor(0)
        setTipoValor("entrada")

    }

    return(
        <form className='form' onSubmit={handleSubmit}>
        
            <label htmlFor='descricao'>Descrição</label> 
            <input type="text" placeholder="Digite aqui sua descrição" 
            onChange = {(event) => setDescricao(event.target.value)}
            className='descricao'
            value={descricao}
            ></input>
            <p className='pExemplo'>Ex: Compra de roupas</p>

            <div className='divValorTipoValor'>
                <div className='divValor'>
                <label htmlFor='Valor'>Valor</label> 
                <input type="text"
                className='inputValorSoma'
                value={valor}
                id='valor'
                onChange=  {(event) => 
                     setValor(Number(event.target.value))}></input>
                </div>
                
                <div className='divTipoValor'>
                <label htmlFor='tipoValor' id='tipoValor'>Tipo de valor</label> 
                <select className='select' required onChange=  {(event) => setTipoValor(event.target.value)}>
                <option selected value='Entrada' >Entrada</option>
                <option value='Despesa'>Despesa</option>

                </select>
                </div>
               
            </div>
            
           
            <button className="btnInserirValor" type="submit">Inserir valor</button>
        </form>
    )
}