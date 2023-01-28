import { useTypedSelector } from '../hooks/useTypedSelector';
import RepositoryItem from './RepositoryItem';
import './styles/RepositoriesList.css';

const RepositoriesList = (): JSX.Element => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  return (
    <>
      {data.length > 0 && (
        <section className="list-container">
          <ul className="repo-list">
            {loading ? (
              <p>Loading...</p>
            ) : (
              data.map((item) => <RepositoryItem key={item} item={item} />)
            )}
            {error && <h2>Network error!</h2>}
          </ul>
        </section>
      )}
    </>
  );
};

export default RepositoriesList;
