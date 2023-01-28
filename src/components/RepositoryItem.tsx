type RepositoryItemProps = {
  item: string;
};

const RepositoryItem = ({ item }: RepositoryItemProps): JSX.Element => {
  return <li>{item}</li>;
};

export default RepositoryItem;
