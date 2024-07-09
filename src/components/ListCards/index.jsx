import './style.css';
import '../../styles/globalStyles.css'
import '../../styles/reset.css'
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
        <div className='mainDivList'>
            <p className='pResumoFinanceiro'>Resumo financeiro</p>

            {
                listTransactions.length === 0 ? (
                    <>
                        <img className='imgNaoDesktop' src={NaoLancamento} alt="" />
                        <img className='imgNaoMobile' src={NaoLancamentoMobile} alt="" />

                    </>

                ) : (
                    <ul className='ulCard'>
                        {
                            listTransactions.map((dados, index) => {
                                return (
                                    <li key={index} className="liCard">
                                        <div className='divDescricaoValor'>
                                            <p className='pDescricao'>  {dados.descricao}</p>
                                            <p className='pValor'>R$ {dados.valor}</p>

                                        </div>
                                        <div className='divTipoBtn'>
                                            <p className='pTipo'>  {dados.tipoValor}</p>
                                            <button onClick={() => { deletarLi(dados) }} className='botaoDeletar'> <img className="deletar" src={deletar} alt="" /></button>



                                        </div>
                                    </li>

                                )

                            })
                        }
                    </ul>
                )}
        </div>
    )



}