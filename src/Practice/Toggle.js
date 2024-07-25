import React, { useState, useEffect } from 'react';

function ToggleButton() {
  // Declare a state variable named 'isOn' and a function to update it named 'setIsOn'
  const [isOn, setIsOn] = useState(false);

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
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle} style={{ padding: '10px', fontSize: '16px' }}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}

export default ToggleButton;
