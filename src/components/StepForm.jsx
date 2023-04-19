import { useState } from 'react';

export default function StepForm({ inputHandler }) {
  const [dist, setDist] = useState('');

  const changeHandler = ({ target: {value} }) => {
    // console.log(value);
    if (!value) {
      setDist('');
    }
    if (value.match(/^\d+\.?\d?$/)) {
      // console.log('match' + value.match(/^\d+\.?\d?$/));
      setDist(value);
    }    
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    inputHandler(evt.target.elements.date.value, evt.target.elements.distance.value);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="form-box">
        <label htmlFor="date-input">Дата (ДД.ММ.ГГ)</label>
        <input className="form-input" type="date" name="date" id="date-input" required />
      </div>
      <div className="form-box">
        <label htmlFor="distance-input">Пройдено, км</label>
        <input className="form-input" type="text" name="distance" id="distance-input" required value={dist} onChange={changeHandler}/>
      </div>
      <div className="form-box button-box">
        <button className="form-input form-button" type="submit">OK</button>
      </div>            
    </form>
  );
}