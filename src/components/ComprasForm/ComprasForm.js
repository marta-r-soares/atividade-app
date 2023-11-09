import {useState} from 'react';

const CompraForm = ({onAdd}) => {
    const [compraText, setCompraText] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setCompraText(event.target.value);
    }

    const handleSubimit = (event) => {
        event.preventDefault();
        onAdd(compraText);
        setCompraText('');
    }

    return(
        <form className="lista-register" onSubmit={handleSubimit}>
            <label htmlFor="compra">Lista de compras:</label>
            <input type="text" 
                id="compra" 
                placeholder="Digite seu item de compra"
                value= {compraText}
                onChange={handleChange}
            />
        <button type="submit">Enviar</button>
    </form>
    )
}

export default CompraForm;