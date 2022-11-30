import './styles.css';

export default function SearchBar() {
  return (
    <form className="ct-search-bar">
      <div className="ct-search-bar-container">
        <input type="text" placeholder="Digite sua busca"/><button>Buscar</button> 
      </div>
    </form>
  );
}
