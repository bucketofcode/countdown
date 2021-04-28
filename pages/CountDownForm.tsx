import * as React from 'react';
import { Field, Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { CountDownField } from './CountDownField';
import { TextField } from '@material-ui/core';
import { PreviewCard } from './PreviewCard';

export interface Values {
  firstName:string;
  firstName2:string;
  email:string;
  date:Date;
}

interface Props {
  onSubmit: (values: Values)  => void;
}

export const CountDownForm: React.FC<Props> = ({onSubmit}) => {
  
    return (
    <Formik 
      initialValues={{firstName: "", firstName2:"", date: (new Date(2021,12,11)) , email:""}} 
      onSubmit={
      (values) => onSubmit(values)
      }
    > 
    {({values, setFieldValue}) => (
        <Form>
          <div>
            <Field 
              name="firstName" 
              placeholder="first name person 1" 
              component={CountDownField}
              label="Countdown clock for.."/>
          </div>
          <div>
            <Field 
              name="firstName2" 
              placeholder="first name person 2" 
              component={CountDownField}
              label="and"/>
          </div>
          <br/>
          <div>
          <TextField
            id="dateOn"
            name="date"
            label="on the big day"
            type="date"
            margin="normal"
            value={new Date(values.date)}
            onChange={value => {
              // overriding default behavior of the Formik setFieldValue so we can set the type as Date. 
              // Otherwise Formik will read the changed value as a String and this will cause the Preview component to fail.
              // There may be a nicer way to do this?
              setFieldValue("date", new Date(value.target.value))
            } }
            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
          <br/>
          <div>
            <Field 
              name="email" 
              placeholder="email" 
              component={CountDownField}
             />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <PreviewCard 
            firstName={values.firstName}
            firstName2={values.firstName2}
            date={values.date}
            email={values.email}
          />
          {/* 
          Pre tag used for testing purposes only...
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre> */}
        </Form> 
      )}
      </Formik> 
      );
    };
  