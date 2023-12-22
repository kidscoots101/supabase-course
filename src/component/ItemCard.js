const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
      <div className="rating">{item.number}</div>
    </div>
  );
};
export default ItemCard;
