export default function Item({ date, distance }) {
  
  return (
    <>
      <div className="item-date">{date}</div>
      <div className="item-distance">{distance}</div>
      <div className="item-action">
        <button className="item-edit">
        <span className="material-icons">edit</span>
        </button>
        <button className="item-remove">
          <span className="material-icons">close</span>
        </button>
      </div>      
    </>
  );
}