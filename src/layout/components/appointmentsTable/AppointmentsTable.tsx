import React, { ReactNode } from 'react';

import { Avatar, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { IAppointment } from '../../../interfaces/patient';

const AppointmentImg = ({ img }) => {
  const isData = img.startsWith('data:image');
  const isWithPath = img.startsWith('http');

  if (isData || isWithPath) {
    return <Avatar size={40} src={img} />;
  }

  return <Avatar size={40} src={`${window.location.origin}/${img}`} />;
};

const columns: ColumnProps<IAppointment>[] = [
  {
    key: 'img',
    title: '',
    dataIndex: 'img',
    render: (img) => <AppointmentImg img={img} />
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Nom',
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    render: (name) => <strong>{name}</strong>
  },
  {
    key: 'email',
    dataIndex: 'email',
    title: 'Email',
    sorter: (a, b) => (a.email > b.email ? 1 : -1),
    render: (email) => (
      <span className='nowrap' style={{ color: '#336cfb' }}>
        <span className='icofont icofont-ui-email mr-1' style={{ fontSize: 16 }} />
        {email}
      </span>
    )
  },
  {
    key: 'data',
    dataIndex: 'date',
    title: 'Date',
    render: (date) => (
      <span className='nowrap' style={{ color: '#a5a5a5' }}>
        {date.split('T')[0]}
      </span>
    )
  },
  {
    key: 'visit',
    title: 'Heure de Visite',
    render: (appointment) => (
      <span className='nowrap' style={{ color: '#a5a5a5' }}>
        {appointment.from} - {appointment.to}
      </span>
    )
  },
  {
    key: 'number',
    dataIndex: 'number',
    title: 'Numero',
    render: (phone) => (
      <span className='d-flex align-baseline nowrap' style={{ color: '#336cfb' }}>
        <span className='icofont icofont-ui-cell-phone mr-1' style={{ fontSize: 16 }} />
        {phone}
      </span>
    )
  },
  
  {
    key: 'condition',
    dataIndex: 'injury',
    title: 'Type'
  }
];

type Props = {
  data: IAppointment[];
  actions?: (appointment: IAppointment) => ReactNode;
};

const AppointmentsTable = ({ data, actions }: Props) => {
  const actionColumn: ColumnProps<IAppointment> = {
    key: 'actions',
    title: '',
    render: actions
  };

  const displayedColumns = actions ? [...columns, actionColumn] : columns;

  return (
    <Table
      rowKey='number'
      dataSource={data}
      columns={displayedColumns}
      pagination={{ hideOnSinglePage: true }}
    />
  );
};

export default AppointmentsTable;
