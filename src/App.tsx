import Spline from '@splinetool/react-spline';
import './App.css';
import DownloadIcon from '@mui/icons-material/Download';
import logo from './assets/img/logo192.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import DownloadBTN from './components/DownloadBTN';

function App() {

  const [countdownString, setCountdownString] = useState('');
  const [instructions, setInstructions] = useState(true);
  const [instructionText, setInstructionText] = useState('Loading experience...');
  const [comingSoon, setComingSoon] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setInstructions(false);
        setTimeout(() => {
          setInstructionText('Press `0` to toggle instructions');
        }, 1100);
      }, 3000);
    }, []);

    useEffect(() => {
      setInstructions(true);
      setTimeout(() => {
        setInstructions(false);
      }, 3000);
        
      }, [instructionText]);

  useEffect(() => {
    // Create a timer that displays a number that counts down every second until the date 2/1/2024
    const timer = setInterval(() => {
      // Get the current date
      const currentDate = new Date();
      // Get the date 2/1/2024
      const targetDate = new Date('2/15/2024');
      // Get the difference between the two dates
      const difference = targetDate.getTime() - currentDate.getTime();
      // Convert the difference to seconds
      const differenceInSeconds = difference / 1000;
      setCountdownString(`${Math.floor(differenceInSeconds)}`);
    }, 1000);
    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // If the current date is BEFORE 1/15/2024, set the countdown string to 'Coming Soon'
  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date('2/15/2024');
    if (currentDate.getTime() < targetDate.getTime()) {
      setComingSoon(true);
    }
  }
  , []);

  if (comingSoon) {
    return (
      <div className="App"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          flexDirection: 'column'
        }}
      >
        <code>Coming Soon</code>
        <br />
        <br />
        <code>1/15/2024</code>
        <br />
        <br />
        <code><a href='kearneyjohn.com' style={{
          color: 'lightgrey',
          textDecoration: 'none',
        }}>kearneyjohn.com</a></code>

      </div>
    )
  }

  return (
    <div className="App">

      {/* Countdown Timer at the top */}
      <motion.div className='App-Container-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <code>{countdownString} :: Archive</code>
        </motion.div>

        <motion.div className='App-Container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
          <h1>KEARNEY LAB VOLUME I</h1>
          <h5 style={{userSelect: 'none'}}>Multi-Sample Kit By Kearneyonline</h5>
          <br />
          <div className='DownloadBTN-Container'>
              <DownloadBTN />
              <DownloadBTN free/>
          </div>
          <AnimatePresence mode='wait'>
            {instructions && (
              
            <motion.div className='App-Instructions'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
             {instructionText} 
            </motion.div>
            )
            }
          </AnimatePresence>
        </motion.div>
        
        {/* Mobile shit */}
        <motion.div className='Mobile-Warning'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <motion.img src={logo} className="App-Logo" alt="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            />
            

            <motion.h1 style={{fontSize: '1.5rem'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >KEARNEY LAB VOLUME I</motion.h1>
            <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            >kearneyonline</motion.h5>
            <br />
            <motion.div className='App-Container-Sub'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            >
              <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
                <p>10 Hi-Hats</p>
                <p>10 Open Hats</p>
                <p>11 Bass Sounds</p>
                <p>5 Kicks</p>
                <p>40 Drum Licks</p>
                <p>15 Piano Riffs</p>
                <p>35 Starters</p>
                <p>14 Vocal Chops</p>
                <p>40 SFX + Percs</p>
                <p>15 Piano Midis</p>
                <p>8 Full Length Samples (demos)</p>
                <p>+ 4 Preset Banks</p>
              </div>
              <br />
              <div className='DownloadBTN-Container'>
                <DownloadBTN />
                <DownloadBTN free/>
              </div>
            </motion.div>
            <br />
            <code style={{position: 'fixed', bottom: '0', paddingBottom: '1rem', color: 'white', textAlign: 'center', width: '90%'}}>
              This experience is not optimized for mobile. Please visit this page on a desktop device.
            </code>
        </motion.div>
        <Spline scene="https://prod.spline.design/kSv79pxthU7ue6P3/scene.splinecode" className='Spline-Container'/>
    </div>
  );
}

export default App;
