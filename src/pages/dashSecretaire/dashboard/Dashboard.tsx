import React from 'react';
import ReactEcharts from 'echarts-for-react';

import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import AppointmentsTable from '../../../layout/components/appointmentsTable/AppointmentsTable';
import hospitalOptions from './charts/hospital-options';


import {
  patientsGenderOptions,
  departmentsOptions,
  patientsAgeOptions
} from './charts/patients-options';

import { useFetchPageData, usePageData } from '../../../hooks/usePage';

import { IAppointment } from '../../../interfaces/patient';
import { IPageData } from '../../../interfaces/page';


const pageData: IPageData = {
  fulFilled: false,
  breadcrumbs: [
    {
      title: 'Secrétaire',
      route: 'secretaire-dashboard'
    },
    {
      title: 'Secretaire'
    }
  ]
};

const DashSecretairePage = () => {
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
                <h6 className='mt-0 mb-1'>Rendez-vous</h6>
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
                <h6 className='mt-0 mb-1'>Nouveaux patients</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                  213
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
                  className='icofont icofont-blood'
                  style={{ fontSize: 48, color: '#0B8FAC' }}
                />
              </div>

              <div className='col-7'>
                 <h6 className='mt-0 mb-1'>Consultations et Analyses</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                   23
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
                  className='icofont icofont-dollar-true'
                  style={{ fontSize: 48, color: '#0B8FAC' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Revenus</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                  180.000 FCFA
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card title="Enquête hospitalière">
        <ReactEcharts className='chart-container container-h-400' option={hospitalOptions} />
      </Card>

      <Card title='Derniers rendez-vous' className='mb-0'>
        <AppointmentsTable data={appointments} />
      </Card>  

      <div className='row'>
        <div className='col-12 col-md-4'>
          <Card title={'Âge des patients'}>
            <ReactEcharts className='chart-container container-h-300' option={patientsAgeOptions} />
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title={'Sexe des patients'}>
            <ReactEcharts className='chart-container container-h-300' option={patientsGenderOptions} />
          </Card>
        </div>

        <div className='col-12 col-md-4'>
          <Card title={'Departements'}>
            <ReactEcharts className='chart-container container-h-300' option={departmentsOptions} />
          </Card>
        </div>
      </div>

      
    </>
  );
};

export default DashSecretairePage;
