import React from 'react';
import ReactEcharts from 'echarts-for-react';

import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import AppointmentsTable from '../../../layout/components/appointmentsTable/AppointmentsTable';
import hospitalOptions from './charts/hospital-options';

import { incomeInWeek, incomeInMonth } from './charts/income-options';

import {
  patientsGenderOptions,
  departmentsOptions,
  patientsAgeOptions
} from './charts/patients-options';

import { useFetchPageData, usePageData } from '../../../hooks/usePage';

import { IAppointment } from '../../../interfaces/patient';
import { IPageData } from '../../../interfaces/page';
import VerticalLayout from '../../../layout/vertical/Vertical';

const pageData: IPageData = {
  fulFilled: false,
  breadcrumbs: [
    {
      title: 'Dashboards',
      route: 'default-dashboard'
    },
    {
      title: 'Default'
    }
  ]
};

const DashboardPage = () => {
  const [appointments] = useFetchPageData<IAppointment[]>('./data/last-appointments.json', []);
  usePageData(pageData);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <span
                  className='icofont icofont-first-aid-alt'
                  style={{ fontSize: 48, color: '#0B8FAC' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Structures de Santé Inscrites</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                  47
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'> 
                <span
                  className='icofont icofont-wheelchair'
                  style={{ fontSize: 48, color: '#0B8FAC' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Utilisateurs Inscrits </h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                  549
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <FontAwesomeIcon icon={faClock} style={{ fontSize: 48, color: '#0B8FAC' }} />
              </div>

              <div className='col-7'>
                 <h6 className='mt-0 mb-1'>Demandes d'Adhésion</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                   05
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className='col-12 col-md-6 col-xl-3'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-5'>
                <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: 48, color: '#0B8FAC' }} />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Acceptation d'Adhésion</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                  04
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card title="Inscription au cours de l'Année">
        <ReactEcharts className='chart-container container-h-400' option={hospitalOptions} />
      </Card>

      <div className='row'>
        <div className='col-12 col-md-6'>
          <Card title={'Région'}>
            <ReactEcharts className='chart-container container-h-300' option={patientsAgeOptions} />
          </Card>
        </div>
        <div className='col-12 col-md-6'>
          <Card title={'Departements'}>
            <ReactEcharts className='chart-container container-h-300' option={departmentsOptions} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
