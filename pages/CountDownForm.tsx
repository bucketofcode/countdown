import * as React from 'react';
import { Field, Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { CountDownField } from './CountDownField';
import { TextField } from '@material-ui/core';


interface Values {
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
            name="date"
            label="on the big day"
            type="date"
            // defaultValue="2017-05-24"
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
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form> 
      )}
      </Formik> 
      );
    };
  