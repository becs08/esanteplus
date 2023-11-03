import React, { ChangeEvent, useState } from 'react';

import { useFormik } from 'formik';
import { Button, Divider, Form, Input, Select } from 'antd';

import ImageLoader from '../../layout/components/patients/ImageLoader';

import { usePageData } from '../../hooks/usePage';
import { useGetUser } from '../../hooks/useGetUser';

import { IPageData } from '../../interfaces/page';
import { IPatient } from '../../interfaces/patient';

const pageData: IPageData = {
  title: 'Modifier mon compte',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Apps',
      route: 'verticalMed/edit-account'
    },
    {
      title: 'Service Pages ',
      route: 'verticalMed/edit-account'
    },
    {
      title: 'Edit Account'
    }
  ]
};

const FormItem = Form.Item;
const Option = Select.Option;

const UserAvatar = ({ src, className = null }) => {
  return (
    <div className={`avatar-wrapper ${className}`}>
      <ImageLoader src={src} size={100} />
    </div>
  );
};

const AccountForm = ({ user }) => {
  const [submitted, setSubmitted] = useState({ ...user });
  const { values, setValues, handleSubmit } = useFormik<IPatient>({
    onSubmit: (values) => setSubmitted(values),
    initialValues: { ...user }
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name) => (value) => {
    setValues({ ...values, [name]: value });
  };

  const hasChanged = Object.keys(values).some((key) => values[key] !== submitted[key]);

  return (
    <Form layout='vertical'>
      <FormItem label='Prénom'>
        <Input
          name='name'
          onChange={handleChange}
          placeholder='Prénom'
          defaultValue={values.name}
        />
      </FormItem>

      <FormItem label='Nom'>
        <Input
          name='lastName'
          onChange={handleChange}
          defaultValue={values.lastName}
          placeholder='Nom'
        />
      </FormItem>

      <FormItem label='Âge'>
        <Input
          type='number'
          name='age'
          onChange={handleChange}
          defaultValue={values.age}
          placeholder='Âge'
        />
      </FormItem>

      <FormItem label='Sexe'>
        <Select
          onChange={handleSelectChange('gender')}
          defaultValue={values.gender}
          placeholder='Gender'
        >
          <Option value='male'>Masculin</Option>
          <Option value='female'>Féminin</Option>
        </Select>
      </FormItem>

      <FormItem label='Numéro'>
        <Input
          type='number'
          name='number'
          onChange={handleChange}
          defaultValue={values.number}
          placeholder='Numéro'
        />
      </FormItem>

      <FormItem label='Adresse'>
        <Input.TextArea
          name='address'
          onChange={handleChange}
          rows={4}
          defaultValue={values.address}
          placeholder='Adresse'
        />
      </FormItem>

      <FormItem label='Spécialité'>
        <Input.TextArea
          name='Spécialité'
          onChange={handleChange}
          rows={4}
          defaultValue={values.address}
          placeholder='Spécialité'
        />
      </FormItem>

      <div className='elem-list justify-content-between'>
        <Button disabled={!hasChanged} className='bg-color-success' onClick={() => handleSubmit()}>
          <span className='text-color-500'>Enregistrer</span>
        </Button>

        <Button ghost danger className='ml-auto'>
          Supprimer mon compte
        </Button>
      </div>
    </Form>
  );
};

const PasswordForm = () => {
  return (
    <Form layout='vertical'>
      <FormItem label='Mot de passe'>
        <Input.Password placeholder='Mot de passe' />
      </FormItem>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <FormItem
            name='password'
            label='Nouveau mot de passe'
            rules={[{ required: true, message: 'Veillez entrer le nouveau mot de passe' }]}
          >
            <Input.Password placeholder='Nouveau mot de passe' />
          </FormItem>
        </div>

        <div className='col-md-6 col-sm-12'>
          <FormItem
            name='confirmPassword'
            label='Confirmez le mot de passe'
            rules={[
              {
                required: true,
                message: 'Veillez confirmer le nouveau mot de passe !'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Les deux mots de passe ne sont pas identiques !');
                }
              })
            ]}
          >
            <Input.Password placeholder='Confirmer le mot de passe' />
          </FormItem>
        </div>
      </div>

      <Button type='primary'>Changer le mot de passe</Button>
    </Form>
  );
};

const EditAccountPage = () => {
  const user = useGetUser();
  usePageData(pageData);
  return (
    <div className='stack' style={{ maxWidth: 690, margin: '0 auto' }}>
      <UserAvatar className='mt-0' src={user.img} />
      <AccountForm user={user} />

      <Divider />

      <PasswordForm />
    </div>
  );
};

export default EditAccountPage;
