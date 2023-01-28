import RepositoriesForm from './RepositoriesForm';
import RepositoriesList from './RepositoriesList';
import './styles/App.css';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <h1>Find a NPM package:</h1>
      <h2>Powered by: npms.io</h2>
      <RepositoriesForm />
      <RepositoriesList />
    </div>
  );
};

export default App;
