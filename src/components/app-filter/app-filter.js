import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="button">
          Все соотрудники
      </button>
      <button
        className="btn btn-outline-light"
        type="button">
          На повышения
      </button>
      <button
        className="btn btn-outline-light"
        type="button">
          З/П больше 1000$
      </button>
    </div>
  )
}

export default AppFilter;
