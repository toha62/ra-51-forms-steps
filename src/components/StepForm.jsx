import { useState } from 'react';

export default function StepForm({ distance, handleOnChange, handleSubmit }) {
 
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-box">
        <label htmlFor="date-input">Дата (ДД.ММ.ГГ)</label>
        <input className="form-input" type="date" name="date" id="date-input" required />
      </div>
      <div className="form-box">
        <label htmlFor="distance-input">Пройдено, км</label>
        <input className="form-input" type="text" name="distance" id="distance-input" value={distance} onChange={handleOnChange} required />
      </div>
      <div className="form-box button-box">
        <button className="form-input form-button" type="submit">OK</button>
      </div>            
    </form>
  );
}