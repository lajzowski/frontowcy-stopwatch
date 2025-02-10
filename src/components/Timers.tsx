import { formatTime } from '../extras/formatTime.ts';

interface Props {
  isVisible: boolean;
  fullTime: number;
  currentLapTime: number;
}

export const Timers = ({isVisible, fullTime, currentLapTime}: Props) => {

  return <div className={'timers'} style={{display: isVisible ? 'none' : undefined}}>
    <div className={'timers--header'}>WYŚCIG ROZPOCZĘTY!</div>
    <div className={'timers--total-left'}>Całkowity Czas:</div>
    <div className={'timers--total'}>{formatTime(fullTime)}</div>
    <div className={'timers--current-lap-left'}>Aktualne okrążenie:</div>
    <div className={'timers--current-lap'}>{formatTime(currentLapTime)}</div>
  </div>
}
