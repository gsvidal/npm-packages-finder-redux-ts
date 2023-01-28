import { ChangeEvent, FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);

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
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => <li key={item}>{item}</li>)
        )}
        {error && <h2>Network error!</h2>}
      </ul>
    </form>
  );
};

export default RepositoriesList;
