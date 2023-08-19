const Filter = ({ filter, setFilter }) => {
  /** No select, o padrão de nosso sistema começa com ALL = Todas */
  /** botões de ordem alfabetica, são Asc = ascendente, e Desc = ordem descendente; não são filtros, é ordenação*/
  return (
    <div className='filter'>
      <h2>Filtrar:</h2>
      <div className='filter-options'>
        <div>
          <p>Status:</p>
          <select value={ filter } onChange={(e) => setFilter(e.target.value)} >
            <option value='All'>Todas</option>
            <option value='Completed'>Completas</option>
            <option value='Incomplete'>Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button>Asc</button>
          <button>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
