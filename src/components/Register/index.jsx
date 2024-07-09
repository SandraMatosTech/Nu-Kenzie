import './style.css';
import '../../styles/globalStyles.css'
import '../../styles/reset.css'
import { useState } from 'react';

export function Register({ setListTransactions, listTransactions }) {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState(0.00);
    const [tipoValor, setTipoValor] = useState('Entrada');

    function handleSubmit(event) {
        event.preventDefault();
        let novoValor = 0.00;

        if (tipoValor === 'Despesa') {
            novoValor = -valor;
        } else {
            novoValor = valor;
        }

        setListTransactions([...listTransactions, { descricao, valor: novoValor, tipoValor }]);
        setDescricao('');
        setValor(0.00);
        setTipoValor('Entrada');
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='descricao'>Descrição</label>
            <input
                type='text'
                placeholder='Digite aqui sua descrição'
                onChange={(event) => setDescricao(event.target.value)}
                className='descricao'
                value={descricao}
            />
            <p className='pExemplo'>Ex: Compra de roupas</p>

            <div className='divValorTipoValor'>
                <div className='divValor'>
                    <label htmlFor='valor'>Valor</label>
                    <input
                        type='text'
                        placeholder='0.00'
                        className='inputValorSoma'
                        value={valor}
                        id='valor'
                        onChange={(event) => setValor(parseFloat(event.target.value))}
                    />
                    <span className='cifrao'>R$</span>
                </div>

                <div className='divTipoValor'>
                    <label htmlFor='tipoValor'>Tipo de valor</label>
                    <select
                        className='select'
                        required
                        value={tipoValor}
                        onChange={(event) => setTipoValor(event.target.value)}
                    >
                        <option value='Entrada'>Entrada</option>
                        <option value='Despesa'>Despesa</option>
                    </select>
                </div>
            </div>

            <button className='btnInserirValor' type='submit'>Inserir valor</button>
        </form>
    );
}
