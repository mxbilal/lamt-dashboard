import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, TextField } from '@mui/material';

const LMTForm = ({ initialValues, validationSchema, fields, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          {fields.map((field) => (
            <FieldWrapper key={field.name} field={field} />
          ))}
        </Grid>
        <Button variant='outlined' type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

const FieldWrapper = ({ field }) => {
  const { values, setFieldValue } = useFormikContext();
  const { name, label, type } = field;

  return (
    <Grid item xs={4}>
      <TextField
        type={type || 'text'}
        name={name}
        label={label}
        variant="outlined"
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
      />
      <ErrorMessage name={name} component="div" className="error" />
    </Grid>
  );
};

export default LMTForm;
