type ListPropTypes<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends { id: number; first: string }>({
  items,
  onClick,
}: ListPropTypes<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            <>{item.first}</>
          </div>
        );
      })}
    </div>
  );
};

export default List;
