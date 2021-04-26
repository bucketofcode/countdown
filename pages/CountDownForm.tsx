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
  date:string;
}


interface Props {
  onSubmit: (values: Values)  => void;
}




export const CountDownForm: React.FC<Props> = ({onSubmit}) => {
    
    
    return (
    <Formik 
    initialValues={{firstName: "", firstName2:"", date:"", email:""}} 
    onSubmit={
      (values) => onSubmit(values)
      }
    > 
    {({values}) => (
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
            type="datetime-local"
            margin="normal"
            //defaultValue="2022-05-30"
            // className={classes.textField}
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
            dateOn={values.dateOn}
            email={values.email}
          />
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form> 
      )}
      </Formik> 
      );
    };
  