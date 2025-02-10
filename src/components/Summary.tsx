import { Descriptions } from 'antd';
import { formatTime } from '../extras/formatTime.ts';
import { Lap } from '../types/lap.interface.ts';

interface Props {
  laps: Lap[];
  fullTime: number;
  isVisible: boolean;
}

export const Summary = ({laps, fullTime, isVisible}:Props) => {


  return <div className={'summary'} style={{display: !isVisible ? 'none' : undefined}}>
    <Descriptions title="Podsumowanie" column={1}>
      <Descriptions.Item label="Łączny czas">{formatTime(fullTime)}</Descriptions.Item>
      <Descriptions.Item label="Średni czas okrążenia">{
        formatTime(laps.reduce((prev, curr) => prev + curr.time, 0) / laps.length)
      }</Descriptions.Item>
      <Descriptions.Item label="Najszybsze okrążenie">
        {laps.length > 0 ? (
          <div>
            Okrążenie {Math.min(...laps.map(lap => lap.time)) ? laps.find(lap => lap.time === Math.min(...laps.map(lap => lap.time)))?.number : 'Brak danych'} (
            {laps.length > 0 ? formatTime(Math.min(...laps.map(lap => lap.time))) : 'Brak danych'})
          </div>
        ) : (
          'Brak okrążeń'
        )}
      </Descriptions.Item>
      <Descriptions.Item label="Najwolniejsze okrążenie">
        {laps.length > 0 ? (
          <div>
            Okrążenie {Math.max(...laps.map(lap => lap.time)) ? laps.find(lap => lap.time === Math.max(...laps.map(lap => lap.time)))?.number : 'Brak danych'} (
            {laps.length > 0 ? formatTime(Math.max(...laps.map(lap => lap.time))) : 'Brak danych'})
          </div>
        ) : (
          'Brak okrążeń'
        )}

      </Descriptions.Item>
    </Descriptions>
  </div>
}
