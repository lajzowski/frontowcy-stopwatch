import { Button } from 'antd';

interface Props {
  handleStart: () => void;
  handleStop: () => void;
  resetTimer: () => void;
  handleLap: () => void;
  start: boolean;
  fullTime: number;
  currentLap: number;
}


export const TimerButtons = ({handleStart, handleStop, resetTimer, handleLap, start, fullTime, currentLap}: Props) => {


  return <div className={'buttons'}>
    <Button onClick={handleStart} style={{width: 100, margin: 10}} variant={'solid'} color={'green'}
            disabled={start}>Start</Button>
    <Button onClick={handleStop} style={{width: 100, margin: 10}} variant={'solid'} color={'danger'}
            disabled={!start}>Stop</Button>

    <Button onClick={resetTimer} style={{width: 100, margin: 10}} variant={'solid'} color={'orange'}
            disabled={fullTime === 0 && currentLap === 1}>Reset</Button>
    <Button onClick={handleLap} style={{width: 100, margin: 10}} variant={'solid'} color={'yellow'}
            disabled={!start}>Lap</Button>
  </div>
}
