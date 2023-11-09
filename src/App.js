import './App.css';
import Welcome from './components/Welcome/Welcome';
import CompraList from './components/CompraList/CompraList';



function App() {
  return (
    <div className="App">
      <Welcome nome="Joana" sobrenome="Dark"/> 
      <div className="descricao">
        <p className="app-text">Aproveite para se organizar e não esquecer nenhum item. Crie a sua própria lista de compras</p>

      </div>
      <CompraList/>
    </div>
  );
}

export default App;
