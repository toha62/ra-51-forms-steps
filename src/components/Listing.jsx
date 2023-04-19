import Item from './Item'

export default function Listing({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="step-list-container">
      <div className="step-list_header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено, км</span>
        <span>Действия</span>
      </div>
      <div className="step-list_body">
        <ul className="item-list">
          {items.map(item =>
            <li key={item.date} className="item">
              <Item
                date = {item.date}                
                distance = {item.distance}               
              />
            </li>  
          )}
        </ul>
      </div>
      
    </div>
  );
}