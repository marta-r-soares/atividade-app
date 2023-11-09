import "./Welcome.css"
function Welcome({nome,sobrenome}){
    return(
        <h1>Olá, {nome || 'usuario'} {sobrenome || 'teste'} seja bem vind@!</h1>
    )
}
export default Welcome;