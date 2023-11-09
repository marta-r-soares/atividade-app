import {useState} from 'react';
import CompraItem from '../CompraItem/CompraItem';
import './CompraList.css';
import ComprasForm from '../ComprasForm/ComprasForm';


const CompraList = () =>{
    const [compras, setCompras] = useState([]);

    const addCompra = (compraTextChildrem) => {
       setCompras([...compras, compraTextChildrem])
    }

    return(
        <section className="compralist">
            <h2 className="compra-title">Minha lista de Compras</h2>
            <ComprasForm onAdd={addCompra}/>

            <ol className="compras">
                {compras.map ((compra, index) => (
                     <CompraItem compra={compra} key={index}/>

                ))}
            </ol>
        </section>
    )
}

export default CompraList;