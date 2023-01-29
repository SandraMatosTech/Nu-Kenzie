import './style.css'
// import { Register } from '../Register'

export function ValorTotal({listTransactions}){
    const somaTotal = listTransactions.reduce((valorAntigo,valorNovo)=> (valorAntigo+valorNovo.novoValor),0)

    return(
        <div className='divValorTotal'>
            <p>Valor total:</p> <span> {somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            <p className='pValorTotal'>O valor se refere ao saldo</p></span>

           
        </div>
    )
}
