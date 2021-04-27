import * as React from 'react'
import {Values} from "./CountDownForm"
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
   
interface Remaining {
    Days: number
    Hours: number
    Minutes: number
    Seconds: number
}


type FunctionProps = {
    date: Date
}

const Remaining = ({date}:FunctionProps) => {
    
    console.log("Remaining......" , date.getTime()/1000)
    

    let currentTime = new Date().getTime()/1000;    

    let diff = date.getTime()/1000 - currentTime;

    let remaining=  {   
        Days: Math.floor( diff / (60*60*24) ),
        Hours: Math.floor( diff / (60*60) % 24 ),
        Minutes: Math.floor( diff / 60 % 60),
        Seconds: Math.floor( diff % 60 )
    }

    console.log("Out" , remaining)

    return <div>{remaining.Days} Day(s)   {remaining.Hours} Hours  {remaining.Minutes} Minutes  {remaining.Seconds} Seconds</div>
         
};

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
                 <Typography color="textSecondary" gutterBottom variant="h6" component="h3" >
                    {new Date(date).toString()}
                 </Typography>
                 <Typography color="textSecondary" gutterBottom variant="h3" component="h3" >
                 <Remaining date={new Date(date)}/>
                 </Typography>
              </CardContent>
             </Card>
                    
        </React.Fragment>
    );
};