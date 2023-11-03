import React from 'react';

import { usePageData } from '../../../hooks/usePage';
import { usePatients } from '../../../hooks/usePatients';

import PatientsTable from './PatientsMedTable';

import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Mes Patients',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Médecin',
      route: 'verticalMed/patientsMed'
    },
    {
      title: 'Patients'
    }
  ]
};

const PatientsMedPage = () => {
  const { patients, editPatient, deletePatient } = usePatients();
  usePageData(pageData);

  return (
    <>
      <PatientsTable
        onDeletePatient={deletePatient}
        onEditPatient={editPatient}
        patients={patients}
      />
    </>
  );
};

export default PatientsMedPage;
