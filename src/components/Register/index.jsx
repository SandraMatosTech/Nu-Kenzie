import './style.css'
import { useState } from 'react'

export function Register({setListTransactions,listTransactions}){


    const [descricao, setDescricao] = useState("")
    const [valor,setValor] = useState ("")
    const [tipoValor,setTipoValor] = useState ("entrada")

 



    function handleSubmit(event){
      

        event.preventDefault()
        let novoValor=0
        if(tipoValor==='saída'){
            novoValor= -valor
           
           
        }else{
            novoValor=valor

        }
        
        console.log([...listTransactions,{descricao,novoValor, tipoValor}])
        setListTransactions(  [...listTransactions,{descricao,novoValor, tipoValor}])

    }
    return(
        <form className='form' onSubmit={handleSubmit}>
        
            <label htmlFor='descricao'>Descrição</label> 
            <input type="text" placeholder="Digite aqui sua descrição" 
            id='descricao' 
            onChange = {(event) => setDescricao(event.target.value)}></input>
            <p className='pExemplo'>Ex: Compra de roupas</p>

            <div className='divValorTipoValor'>
                <label htmlFor='valor'>Valor</label> 
                    <input type="text"
                    id='valor'
                    onChange=  {(event) => setValor(Number(event.target.value))}></input>
                    
                <label htmlFor='tipoValor' id='tipoValor'>Tipo de valor</label> 
                <select  required onChange=  {(event) => setTipoValor(event.target.value)}>
                <option selected value='entrada' >Entrada</option>
                <option value='saída'>Saída</option>

            </select>
            </div>
            
           
            <button className="btnInserirValor" type="submit">Inserir valor</button>
        </form>
    )
}