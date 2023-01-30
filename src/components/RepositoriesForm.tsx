import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import './styles/RepositoriesForm.css';

const RepositoriesForm = (): JSX.Element => {
  const [term, setTerm] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const { searchRepositories } = useActions();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //When user submits the form we call the action creator and that's going to make the request to the npm api for us
    if (term !== '') {
      searchRepositories(term);
    }
  };

  useEffect(() => {
    if (term === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [term]);

  return (
    <form action="" onSubmit={handleSubmit} className="form">
      <label htmlFor="input"></label>
      <input
        id="input"
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Search packages"
      />
      <button className="button" disabled={isButtonDisabled}>
        Search
      </button>
    </form>
  );
};

export default RepositoriesForm;
