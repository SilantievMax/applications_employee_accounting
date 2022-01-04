import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employees-add-form/employees-add-form'


import './app.css';

function App() {

  const data = [
    {name: 'Верхотуреива Елена', salary: 1567, increase: false},
    {name: 'Силантьев Алексей', salary: 1725, increase: true},
    {name: 'Статов Валерий', salary: 1788, increase: false},
  ];

    return (
      <div className="app">
        <AppInfo/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeersList data={data}/>
        <EmployeersAddForm/>
      </div>
    );
}

export default App;
