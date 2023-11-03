import { IRoute } from '../interfaces/routing';

import SettingsPage from '../pages/settings/Settings';

import PatientsPage from '../pages/dashboards/patients/Patients';
import DashboardPage from '../pages/dashboards/dashboard/Dashboard';
import AppointmentsPage from '../pages/dashboards/appointments/AppointmentsPage';
import DoctorsPage from '../pages/dashboards/doctors/Doctors';

import DoctorProfilePage from '../pages/medic/DoctorsProfilePage';
import PatientProfilePage from '../pages/medic/PatientProfilePage';
import Payments from '../pages/dashboards/payments/Payments';
import Departments from '../pages/medic/Departments';
import InvoicesPage from '../pages/services/InvoicesPage';
import InvoicePage from '../pages/services/InvoicePage';
import PricingPage from '../pages/services/PricingPage';
import EventsTimelinePage from '../pages/services/events-timeline/EventsTimeline';
import UserProfilePage from '../pages/services/UserProfilePage';
import EditAccountPage from '../pages/services/EditAccounPage';
import EventsCalendarPage from '../pages/services/EventsCalendarPage';

import TypographyPage from '../pages/typography/TypographyPage';

import TablesPage from '../pages/tables/TablesPage';
import DashMedecinPage from '../pages/dashMedecin/dashboard/Dashboard';
import DashSecretairePage from '../pages/dashSecretaire/dashboard/Dashboard';
import PatientMedProfilePage from '../pages/medic/PatientMedProfilPage';
import PatientsMedPage from '../pages/dashMedecin/patientsMed/PatientsMed';
import AppointmentsMedPage from '../pages/dashMedecin/appointments/AppointmentsMedPage';
import AppointmentsSecPage from '../pages/dashSecretaire/appointments/AppointmentsSecPage';




export const defaultRoutes: IRoute[] = [
  {
    path: 'settings',
    component: SettingsPage
  },
  {
    path: 'patients',
    component: PatientsPage
  },
  {
    path: 'patientsMed',
    component: PatientsMedPage
  },
  {
    path: 'default-dashboard',
    component: DashboardPage
  },
  {
    path: 'medecin-dashboard',
    component: DashMedecinPage
  },
  {
    path: 'secretaire-dashboard',
    component: DashSecretairePage
  },
  {
    path: 'appointments',
    component: AppointmentsPage
  },
  {
    path: 'appointmentsSec',
    component: AppointmentsSecPage
  },
  {
    path: 'appointmentsMed',
    component: AppointmentsMedPage
  },
  {
    path: 'doctors',
    component: DoctorsPage
  },
  {
    path: 'doctor-profile',
    component: DoctorProfilePage
  },
  {
    path: 'patient-profile',
    component: PatientProfilePage
  },
  {
    path: 'patientMed-profile',
    component: PatientMedProfilePage
  },
  {
    path: 'payments',
    component: Payments
  },
  {
    path: 'departments',
    component: Departments
  },
  {
    path: 'invoices',
    component: InvoicesPage
  },
  {
    path: 'invoice',
    component: InvoicePage
  },
  {
    path: 'pricing',
    component: PricingPage
  },
  {
    path: 'events-timeline',
    component: EventsTimelinePage
  },
  {
    path: 'user-profile',
    component: UserProfilePage
  },
  {
    path: 'edit-account',
    component: EditAccountPage
  },
  {
    path: 'events-calendar',
    component: EventsCalendarPage
  },
 
  {
    path: 'typography',
    component: TypographyPage
  },
 
  {
    path: 'tables',
    component: TablesPage
  },
 
];
