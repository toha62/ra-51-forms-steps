export default function StepForm({ distance, date, handleOnChangeDate, handleOnChangeDist, handleSubmit }) {
 
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-box">
        <label htmlFor="date-input">Дата (ДД.ММ.ГГ)</label>
        <input className="form-input" type="date" name="date" id="date-input" value={date} onChange={handleOnChangeDate} required />
      </div>
      <div className="form-box">
        <label htmlFor="distance-input">Пройдено, км</label>
        <input className="form-input" type="text" name="distance" id="distance-input" value={distance} onChange={handleOnChangeDist} required />
      </div>
      <div className="form-box button-box">
        <button className="form-input form-button" type="submit">OK</button>
      </div>            
    </form>
  );
}