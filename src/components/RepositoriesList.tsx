import { useTypedSelector } from '../hooks/useTypedSelector';
import RepositoryItem from './RepositoryItem';

const RepositoriesList = (): JSX.Element => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  // console.log(data);

  return (
    <ul>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <RepositoryItem key={item} item={item} />)
      )}
      {error && <h2>Network error!</h2>}
    </ul>
  );
};

export default RepositoriesList;
