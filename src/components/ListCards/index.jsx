import './style.css'
import deletar from '../../assets/trash.svg'
import NaoLancamento from '../../assets/NoCard.svg'
import NaoLancamentoMobile from '../../assets/NoCardMobile.svg'




export function ListaCards({ listTransactions, setListTransactions }) {

    function deletarLi(dados) {
        const arrayFilter = listTransactions.filter((item) => {
            return item !== dados

        })
        setListTransactions(arrayFilter)


    }

    return (
        <div className='divLis'>
            <p className='pResumoFinanceiro'>Resumo financeiro</p>






            {
                listTransactions.length === 0 ? (
                    <>
                        <img className='imgNaoMobile' src={NaoLancamentoMobile} alt="" />
                        <img className='imgNaoDesktop' src={NaoLancamento} alt="" />
                    </>

                ) : (
                    <ul className='ulCard'>
                        {
                             listTransactions.map((dados,index) => {
                                return (
                                        <li key={index} className="liCard">
                                            <p className='pDescricao'>  {dados.descricao}</p>
                                            <p className='pTipo'>  {dados.novoValor}</p>
                                            <p className='pValor'> {dados.tipoValor}</p>
                                            <button onClick={() => { deletarLi(dados) }} className='botaoDeletar'> <img className="deletar" src={deletar} alt="" /></button>
                
                                        </li>
                                        )
                               
                
                
                            })
                        }
           

                    </ul>

                )}
       
        </div>

    )



}