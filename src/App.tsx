import { useRef, useState } from 'react';
import { Lap } from './types/lap.interface.ts';
import { LabsTable } from './components/LabsTable.tsx';
import { TimerButtons } from './components/TimerButtons.tsx';
import { Timers } from './components/Timers.tsx';
import { Summary } from './components/Summary.tsx';
import './style.scss';

export const App = () => {
  const [fullTime, setFullTime] = useState(0);
  const [currentLapTime, setCurrentLapTime] = useState(0);
  const [start, setStart] = useState<boolean>(false);
  const timer = useRef<number | null>(null);
  const [laps, setLaps] = useState<Lap[]>([]);
  const [currentLap, setCurrentLap] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, {number: currentLap, time: currentLapTime}]);
    setCurrentLapTime(0);
    setCurrentLap((prevLap) => prevLap + 1);
  }

  const handleStart = () => {
    setStart(true);

    timer.current = setInterval(() => {
      setFullTime((prevTime) => prevTime + 10);
      setCurrentLapTime((prevTime) => prevTime + 10);
    }, 100);
    setIsVisible(false);
  };

  const handleStop = () => {
    setStart(false);
    handleLap();
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setIsVisible(true);
  };


  const resetTimer = () => {
    setFullTime(0);
    setCurrentLapTime(0);
    setLaps([]);
    setCurrentLap(1);
    setIsVisible(false);
  };



  return (
    <div className={'container'}>
      <h1>Frontowcy - Stop Watch</h1>
      <Timers currentLapTime={currentLapTime} fullTime={fullTime} isVisible={isVisible}/>
      <TimerButtons start={start} handleStop={handleStop} resetTimer={resetTimer} currentLap={currentLap} fullTime={fullTime} handleLap={handleLap} handleStart={handleStart} />
      <LabsTable laps={laps} isVisible={isVisible} />
      <Summary laps={laps} fullTime={fullTime} isVisible={isVisible} />
    </div>
  );
};
