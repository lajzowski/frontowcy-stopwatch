import { Lap } from '../types/lap.interface.ts';
import { ColumnsType } from 'antd/es/table';
import { formatTime } from '../extras/formatTime.ts';
import { Table } from 'antd';

interface Props {
  laps: Lap[];
  isVisible: boolean;
}

export const LabsTable = ({laps, isVisible}:Props) => {
  const columns:ColumnsType<Lap> = [
    {
      title: 'Numer okrążenia',
      dataIndex: 'number',
      key: 'number',
      sorter: (a, b) => a.number - b.number,
    },
    {
      title: 'Czas',
      dataIndex: 'time',
      key: 'time',
      sorter: (a, b) => a.time - b.time,
      render: (value: number) => formatTime(value)
    }];


  return <Table style={{display: isVisible ? 'none' : undefined}} dataSource={laps} columns={columns} size={'small'} />
}
