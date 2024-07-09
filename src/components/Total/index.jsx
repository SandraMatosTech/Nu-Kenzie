import './style.css'
import { Register } from '../Register'

export function ValorTotal({listTransactions}){
    console.log(listTransactions)
    const somaTotal = listTransactions.reduce((valorAntigo,valorNovo)=> (valorAntigo+valorNovo.valor),0)

    return(
        <div className='mainTotal'>
            <div className='divValorTotalSpan'>
                <p className='pTituloValorTotal'>Valor total:</p>
                <span className='total'> {somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            </div>
            
            <p className='pValorTotal'>O valor se refere ao saldo</p>

           
        </div>
    )
}
