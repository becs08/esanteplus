import { Button, Card, DatePicker, DatePickerProps, Form, Input, Select, Timeline } from 'antd';
import { useFormik } from 'formik';
import { IPageData } from '../../interfaces/page';
import { usePageData } from '../../hooks/usePage';
import { useGetPatient } from '../../hooks/useGetPatient';
import { useGetBillings } from '../../hooks/useGetBillings';
import { useState } from 'react';
import dayjs from 'dayjs';
import BillingTable from './components/BillingTable';


const pageData: IPageData = {
  title: 'Fiche Médicale',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Médecin',
      route: 'verticalMed/doctor-profile'
    },
    {
      title: 'Doctors',
      route: 'verticalMed/patientMed-profile'
    },
    {
      title: 'Oumar Ndiaye'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

const onDateChange: DatePickerProps['onChange'] = (date) => {
    setFieldValue('date', date ? date.toISOString() : null);
  };


const ProfileForm = ({ patient }) => {
  const { values } = useFormik({
    initialValues: { ...patient },
    onSubmit: () => null
  });

  const [type, setType] = useState('');

  const handleTypeChange = (value) => {
    setType(value);
  };

  

  const today = dayjs();

  return (
    <Form layout='vertical'>
      <Form.Item label='Type'>
        <Select
          placeholder='Type'
          value={type}
          onChange={handleTypeChange}
        >
          <Select.Option value='consultation'>Consultation</Select.Option>
          <Select.Option value='analyse'>Analyse</Select.Option>
        </Select>
      </Form.Item>

      {type === 'analyse' && (
        <>
          <Form.Item label="Analyse">
            <Input placeholder="Type d'Analyse" />
          </Form.Item>
          <br />
          <Form.Item className='form-group'>
            <DatePicker
              defaultValue={today} 
              placeholder='Date'
              name='date'
              onChange={onDateChange}
            />
          </Form.Item>
          <br />
          <Form.Item className='form-group'>
            <DatePicker 
              placeholder='Date de sortie des résultats'
              defaultValue={values.date ? dayjs(values.date) : null}
              name='date'
              onChange={onDateChange}
            />
          </Form.Item>           
        </>
      )}
      {type === 'consultation' && (
        <>
          <Form.Item label='Consultation'>
            <Input placeholder='Symptôme' />
          </Form.Item>
          <br />
          <FormItem label=''>
            <Input.TextArea rows={4} placeholder='Diagnostic' />
          </FormItem>
          <br />
          <Form.Item label=''>
            <Input placeholder='Prescription' />
          </Form.Item>
          <br />
          <Form.Item className='form-group'>
            <DatePicker
              defaultValue={today} 
              placeholder='Date'
              name='date'
            />
          </Form.Item> 
        </>
      )}
    </Form>
  );
};   

const PatientTimeline = () => {
  const timelineItems = [
    {
      color: 'red',
      children: (
        <div className='d-flex flex-column'>
          <h4 className='m-0'>Profil</h4>
          <br />
          <span className='text-base'>
           <div><strong>Nom:</strong> Ndiaye <strong>Prénom:</strong> Oumar Ngalla</div>
           <div><strong>Sexe:</strong>Homme</div>
           <div><strong>Date de Naissance:</strong> 15/07/2006 <strong>Lieu:</strong> Dakar</div>
           <div><strong>Nationalité:</strong> Sénégalais </div>
           <div><strong>Adresse:</strong> Yoff </div>
           <div><strong>Etat Civil:</strong> Célibataire </div>
           <div><strong>Numéro NIN :</strong> 560989999 </div>
           <div><strong>Email:</strong> oumarngalla06@gmail.com </div>
           <div><strong>Numéro de telephone:</strong> +221775678989 </div>
          </span>
        </div>
      )
    },
    {
      color: 'blue',
      children: (
        <div className='d-flex flex-column'>
          <h4 className='m-0'>Informations Supplémentaires</h4>
          <br />
          <span className='text-base'>
          <div><strong>Poids:</strong>65.0kg <strong>Taille:</strong>186.0cm </div>
          <div><strong>Groupe Sanguin:</strong> O+ </div>
          </span>
        </div>
      )
    },
    {
      color: 'yellow',
      children: (
        <div className='d-flex flex-column'>
          <h4 className='m-0'>Allergies</h4>
          <br />
          <span className='text-base'>
            - Crustacés
          </span>
        </div>
      )
    },
    {
      color: 'pink',
      children: (
        <div className='d-flex flex-column'>
          <h4 className='m-0'>Antécédents Médicaux</h4>
          <br />
          <span className='text-base'>
          N/A
          </span>
        </div>
      )
    },
    {
      color: 'blue',
      children: (
        <div className='d-flex flex-column'>
          <h4 className='m-0'>Antécédents Familiaux</h4>
          <br />
          <span className='text-base'>N/A</span>
        </div>
      )
    },
    {
      color: 'red',
      children: (
        <div className='d-flex flex-column'>
          <h4 className='m-0'>Vaccins</h4>
          <br />
          <span className='text-base'>
           - BCG (Bacille de Calmette et Guérin)
           - ROR (Rougeole, Oreillons, Rubéole)
           - HPV (Papillomavirus humain)
          </span>
        </div>
      )
    }
  ];

  return (
    <Timeline items={timelineItems} />
  )
};

const PatientMedProfilePage = () => {
  const { patient } = useGetPatient('Ndiaye');

  const billings = useGetBillings();

  usePageData(pageData);

  return (
    patient && (
      <>
        <div className='row mb-4'>
          <div className='col-md-6 col-sm-12'>

            <div className='info stack'>
              <ProfileForm patient={patient} />
              <Button type='primary'>Mettre à jour</Button>

              <Card title='Historique' className='mb-0'>
                <BillingTable billings={billings} />
              </Card>
            </div>
          </div>

          <div className='col-md-6 col-sm-12'>
            <Card>
              <PatientTimeline />
            </Card>
          </div>
        </div>
      </>
    )
  );
};

export default PatientMedProfilePage;
function setFieldValue(arg0: string, arg1: string) {
   
}

