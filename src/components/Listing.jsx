import Item from './Item'

export default function Listing({ items, handleOnRemove, handleOnEdit }) {
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
                handleOnRemove = {() => handleOnRemove(item.date)}  
                handleOnEdit = {handleOnEdit}            
              />
            </li>  
          )}
        </ul>
      </div>
      
    </div>
  );
}