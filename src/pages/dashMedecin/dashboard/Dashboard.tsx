import ReactEcharts from 'echarts-for-react';

import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';



import AppointmentsTable from '../../../layout/components/appointmentsTable/AppointmentsTable';

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
      title: 'Médecin',
      route: 'medecin-dashboard'
    },
    {
      title: 'Default'
    }
  ]
};

const DashMedecinPage = () => {
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
                <h6 className='mt-0 mb-1'>Rendez-Vous du jour</h6>
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
                <h6 className='mt-0 mb-1'>Patients Suivis</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                  38
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
                 <h6 className='mt-0 mb-1'>En Attente</h6>
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
                <span
                  className='icofont icofont-folder'
                  style={{ fontSize: 48, color: '#0B8FAC' }}
                />
              </div>

              <div className='col-7'>
                <h6 className='mt-0 mb-1'>Dossier Mis à Jour</h6>
                <div className='count' style={{ fontSize: 20, color: '#0B8FAC', lineHeight: 1.4 }}>
                  04
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card title='Derniers rendez-vous' className='mb-0'>
        <AppointmentsTable data={appointments} />
      </Card>

      
    </>
  );
};

export default DashMedecinPage;
