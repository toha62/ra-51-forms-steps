import StepForm from './components/StepForm';
import Listing from './components/Listing';

// const data = [
//   {date: '20.07.2019', distance: 5.7},
//   {date: '19.07.2019', distance: 14.2},
//   {date: '18.07.2019', distance: 3.4},
// ];

function App() {
  const inputHandler = (dateValue, distValue) => {
    
    console.log(dateValue, distValue);
  };

  return (
    <div className='container'>
      <StepForm inputHandler={inputHandler} />  
      <Listing />  
    </div>    
  )
}

export default App
