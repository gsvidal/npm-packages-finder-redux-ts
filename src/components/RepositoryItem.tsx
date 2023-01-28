import './styles/RepositoryItem.css';

type RepositoryItemProps = {
  item: string;
};

const RepositoryItem = ({ item }: RepositoryItemProps): JSX.Element => {
  return (
    <li className="item">
      <a href={item}>{item}</a>{' '}
    </li>
  );
};

export default RepositoryItem;
