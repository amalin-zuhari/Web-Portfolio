import React, { useState, useEffect } from 'react';
import './App.css';

function CombinedComponent() {
  // State for toggle button
  const [isOn, setIsOn] = useState(false);

  // State for counting button presses
  const [press, setPress] = useState(0);

  // Function to toggle the state
  const toggle = () => {
    setIsOn(!isOn);
  };

  // useEffect hook to change the body's background color when isOn changes
  useEffect(() => {
    document.body.style.backgroundColor = isOn ? 'lightblue' : 'pink';

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isOn]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div>
        <h2 className='ml-5 mt-5'>
          You have clicked this button <span className='text-danger'>{press}</span> times
        </h2>
        <button className='btn btn-primary ml-5' onClick={() => setPress(press + 1)}>Click Me</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
        <button onClick={toggle} style={{ padding: '10px', fontSize: '16px' }}>
          {isOn ? 'Turn OFF' : 'Turn ON'}
        </button>
      </div>
    </div>
  );
}

export default CombinedComponent;
