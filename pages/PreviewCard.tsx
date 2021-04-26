import * as React from 'react'
import {Values} from "./CountDownForm"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

export const PreviewCard: React.FC<Values> = ({firstName, firstName2, date}) => {

    return (
        <React.Fragment>
             <Card>
              <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                     {firstName} & {firstName2} <br/>
                     {date}
                 </Typography>
              </CardContent>
             </Card>
        </React.Fragment>
    );
};