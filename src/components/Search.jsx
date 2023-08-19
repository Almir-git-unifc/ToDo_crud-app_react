/**Recebe dois estados, o estado de buscar=search, e o estado de mudar a busca=setSearch  */
const Search = ({ search, setSearch }) => {
  return (
    <div className='search'>
      <h2>Pesquisar:</h2>
      <input
        type='text'
        value={search} /** value é o termo da pesquisa */ 
        onChange={e => setSearch(e.target.value)}
        placeholder='Digite para pesquisar...'
      />
    </div>
  );
};
export default Search
