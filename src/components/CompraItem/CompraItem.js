const CompraItem = ({compra}) => {
    return (
        <li className="compra-item">
             <input type="checkbox" />
            {compra}
        </li>
    )
}

export default CompraItem;