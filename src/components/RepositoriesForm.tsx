import { ChangeEvent, FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';
import RepositoriesList from './RepositoriesList';

const RepositoriesForm = (): JSX.Element => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositories } = useActions();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //When user submits the form we call the action creator and that's going to make the request to the npm api for us
    searchRepositories(term);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Insert a term:</label>
      <input type="text" value={term} onChange={handleChange} />
      <button>Search</button>
      <RepositoriesList />
    </form>
  );
};

export default RepositoriesForm;
