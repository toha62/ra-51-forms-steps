import { useState } from 'react';
import StepForm from './components/StepForm';
import Listing from './components/Listing';

// const items = [
//   {date: '20.07.2019', distance: 5.7},
//   {date: '19.07.2019', distance: 14.2},
//   {date: '18.07.2019', distance: 3.4},
// ];

function App() {
  const [items, setItems] = useState([]);
  const inputHandler = (dateValue, distValue) => {
    const index = items.findIndex(item => item.date === dateValue);
    
    if (index === -1) {
      setItems(prev => [{date: dateValue, distance: +distValue}, ...prev].sort((a, b) => a.date < b.date ? 1 : -1));
    } else {
      const tempArr = [...items];

      tempArr[index].distance += +distValue;
      setItems(tempArr);
    }    
  };

  const handleOnRemove = () => {
    console.log('remove');
  }

  const handleOnEdit = () => {
    console.log('edit');
  }

  return (
    <div className='container'>
      <StepForm
        inputHandler = {inputHandler}
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
