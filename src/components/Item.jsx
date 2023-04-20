export default function Item({ date, distance, handleOnRemove, handleOnEdit }) {
  const formatedDate = new Date(Date.parse(date)).toLocaleDateString('ru-RU').replace(/\./g, '-');

  return (
    <>
      <div className="item-date">{formatedDate}</div>
      <div className="item-distance">{distance}</div>
      <div className="item-action">
        <button className="item-edit" onClick={handleOnEdit}>
        <span className="material-icons">edit</span>
        </button>
        <button className="item-remove" onClick={handleOnRemove}>
          <span className="material-icons">delete_forever</span>
        </button>
      </div>      
    </>
  );
}