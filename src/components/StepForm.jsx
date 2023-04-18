export default function StepForm() {
  return (
    <form action="">
      <div className="form-box">
        <label htmlFor="date-input">Дата (ДД.ММ.ГГ)</label>
        <input className="form-input" type="date" id="date-input" />
      </div>
      <div className="form-box">
        <label htmlFor="distance-input">Пройдено, км</label>
        <input className="form-input" type="text" id="distance-input" />
      </div>
      <div className="form-box button-box">
        <button className="form-input form-button" type="submit">OK</button>
      </div>            
    </form>
  );
}