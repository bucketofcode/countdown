import * as React from 'react'
import {Values} from "./CountDownForm"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
   


export const PreviewCard: React.FC<Values> = ({firstName, firstName2, date}) => {

    return (
        <React.Fragment>
             <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="h4" component="h2">
                    Preview 
                 </Typography>
                <Typography color="textSecondary" gutterBottom variant="h4" component="h2">
                     Wedding Day  Countdown for 
                 </Typography>
                 <Typography gutterBottom variant="h2" component="h2" >
                     {firstName} { firstName2.length >0 ? "&" : "" } {firstName2} <br/>
                 </Typography>
                 <Typography color="textSecondary" gutterBottom variant="h3" component="h3" >
                    {date}
                 </Typography>
              </CardContent>
             </Card>
        </React.Fragment>
    );
};