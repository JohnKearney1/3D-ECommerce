import Spline from '@splinetool/react-spline';
import './App.css';
import DownloadIcon from '@mui/icons-material/Download';
import logo from './assets/img/logo192.png';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {

  // const [countdown, setCountdown] = useState(0);
  const [countdownString, setCountdownString] = useState('');

  useEffect(() => {
    // Create a timer that displays a number that counts down every second until the date 2/1/2024
    const timer = setInterval(() => {
      // Get the current date
      const currentDate = new Date();
      // Get the date 2/1/2024
      const targetDate = new Date('2/1/2024');
      // Get the difference between the two dates
      const difference = targetDate.getTime() - currentDate.getTime();
      // Convert the difference to seconds
      const differenceInSeconds = difference / 1000;
      setCountdownString(`${Math.floor(differenceInSeconds)}`);
    }, 1000);
    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
        <motion.div className='App-Container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
          <h1>Kearney Kit 1</h1>
          <h5>kearneyonline</h5>
          <br />
          <div className='App-Container-Sub'>
            <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
              <p>- 15 Drum Licks</p>
              <p>- 5 Drum Fills</p>
              <p>- 5 Drum Beats</p>
            </div>
            <br />
            <button>
              Download 
              <DownloadIcon style={{fontSize: '1.25rem'}}/>
            </button>
          </div>
          
        </motion.div>
        <motion.div className='App-Container-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <code>{countdownString}</code>
        </motion.div>
        <motion.div className='Mobile-Warning'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <img src={logo} className="App-Logo" alt="logo"/>
            

            <h1>Kearney Kit 1</h1>
            <h5>kearneyonline</h5>
            <br />
            <div className='App-Container-Sub'>
              <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
                <p>- 15 Drum Licks</p>
                <p>- 5 Drum Fills</p>
                <p>- 5 Drum Beats</p>
              </div>
              <br />
              <button>
                Download 
                <DownloadIcon style={{fontSize: '1.25rem'}}/>
              </button>
            </div>
            <br />
            <code style={{position: 'fixed', bottom: '0', paddingBottom: '1rem', color: 'lightblue', textAlign: 'center', width: '90%'}}>
              This experience is not optimized for mobile. Please visit this page on a desktop device.
            </code>
        </motion.div>
        <Spline scene="https://prod.spline.design/kSv79pxthU7ue6P3/scene.splinecode" className='Spline-Container'/>
    </div>
  );
}

export default App;
