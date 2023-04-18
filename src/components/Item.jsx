export default function Item({ url = '', imageUrl = '', title = '', currencyCode = '', price = '', quantity = ''}) {
  
  return (
    <>
      <div className="item-image">
        <a href={url}>
          <img src={imageUrl} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title.length > 50 ? title.slice(0, 50) + '...' : title}</p>
        <p className="item-price">{currencyCode === 'USD' ? '$' + price : currencyCode === 'EUR' ? '\u20AC' + price : price + ' GBP'}</p>
        <p className={quantity <= 10 ? "item-quantity level-low" :
          quantity <= 20 ? "item-quantity level-medium" : "item-quantity level-high"}>{quantity} left</p>
      </div>
    </>
  );
}