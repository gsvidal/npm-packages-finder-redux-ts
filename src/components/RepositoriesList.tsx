import { useTypedSelector } from '../hooks/useTypedSelector';
import RepositoryItem from './RepositoryItem';
import './styles/RepositoriesList.css';

const RepositoriesList = (): JSX.Element => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const { beforeFirstSearch } = useTypedSelector((state) => state.repositories);

  return (
    <>
      {loading && <h2 className="message message--loading">Loading...</h2>}
      {data.length > 0 && (
        <section className="list-container">
          <ul className="repo-list">
            {data.map((item) => (
              <RepositoryItem key={item} item={item} />
            ))}
          </ul>
        </section>
      )}
      {!beforeFirstSearch && data.length === 0 && !loading && !error && (
        <h2 className="message">No packages found with that term</h2>
      )}
      {error && (
        <h2 className="message message--error">
          Network error!, please try again
        </h2>
      )}
    </>
  );
};

export default RepositoriesList;
