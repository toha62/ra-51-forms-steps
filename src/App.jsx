import { useState } from 'react';
import StepForm from './components/StepForm';
import Listing from './components/Listing';

// const items = [
//   {date: '20.07.2019', distance: 5.7},
// ];

function App() {
  const [items, setItems] = useState([]);
  const [dist, setDist] = useState('');

  const handleOnChange = ({ target: {value} }) => {
    if (!value) {
      setDist('');
    }
    if (value.match(/^\d+\.?\d?$/)) {
      setDist(value);
    }    
  };

  const handleSubmit = (evt) => {   
    evt.preventDefault();

    const dateValue = evt.target.elements.date.value;
    const distValue = evt.target.elements.distance.value;
    const index = items.findIndex(item => item.date === dateValue);
    
    if (index === -1) {
      setItems(prev => [{date: dateValue, distance: +distValue}, ...prev].sort((a, b) => a.date < b.date ? 1 : -1));
    } else {
      const tempArr = [...items];

      tempArr[index].distance += +distValue;
      setItems(tempArr);
    }    
    
    evt.target.reset();
    setDist('');
  };
  
  const handleOnRemove = (key) => {    
    const index = items.findIndex(item => item.date === key);
    const tempArr = [...items];

    tempArr.splice(index, 1);
    setItems(tempArr);
  }

  const handleOnEdit = () => {
    console.log('edit');
  }

  return (
    <div className='container'>
      <StepForm
        distance = {dist}
        handleOnChange = {handleOnChange}
        handleSubmit = {handleSubmit}
      />  
      <Listing
        items = {items}
        handleOnRemove = {handleOnRemove}
        handleOnEdit = {handleOnEdit}
      />  
    </div>    
  )
}

export default App
