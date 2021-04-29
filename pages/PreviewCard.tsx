import React, { useEffect, useState } from "react";
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
    difference: number
}

type CalculateDifferenceProps = {
    date: Date
}

const Remaining = ({difference}:FunctionProps) => {
    
    // calculate remaining days, hours etc. Probably could also include year but starting with this
    let remaining=  {   
            Days: Math.floor( difference / (60*60*24) ),
            Hours: Math.floor( difference / (60*60) % 24 ),
            Minutes: Math.floor( difference / 60 % 60),
            Seconds: Math.floor( difference % 60 )
        }
    return remaining
};

const CalculateDifference = ({date}:CalculateDifferenceProps): number => {
    let currentTime = new Date().getTime()/1000;    
    let diff = date.getTime()/1000 - currentTime;
    return diff
}

export const PreviewCard: React.FC<Values> = ({firstName, firstName2, date}) => {

    // calculate time between today's date and the target date for the wedding
    let timeLeft = CalculateDifference({date})

    let functionProps = {difference: timeLeft }

    // create React Hook which will be used to track state of the coutdown hook for this function component
    const [remaining, setRemaining] = useState(Remaining(functionProps));
   
    // set up so it refreshes countdown every 1 second - Using React Hook
    useEffect(() => {
        const timer = setTimeout(() => {
            setRemaining(Remaining(functionProps));
        }, 1000);
        return () => clearTimeout(timer);
      });

    // create object which will hold the various interval data (day, hours, etc.)
    const timerComponents = [];
    
    // Loop through object and populate array
    Object.keys(remaining).forEach((interval) => {
        if (!remaining[interval]) {
            return;
        }
        
        // only display preview for dates in the future
        if (remaining[interval] < 0){
            return
        }

        timerComponents.push(
            <span>
            {remaining[interval]} {interval}{" "}
            </span>
        );
        });
    
    // logic to control showing or hiding the date and count information
    let countDownDiv;
    let dateDiv;
    if (timerComponents.length > 0 ){
        countDownDiv = <div>{timerComponents.length ? timerComponents : <span>The big day has arrived!</span>}</div>
        dateDiv = new Date(date).toDateString()
    }

    return (
        <React.Fragment>
            
             <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="h5" component="h2">
                    --Preview-- 
                 </Typography>
                <Typography color="textSecondary" gutterBottom variant="h5" component="h2">
                     Wedding Day  Countdown for 
                 </Typography>
                 <Typography gutterBottom variant="h2" component="h2" >
                     
                     {firstName} { firstName2.length >0 ? "&" : "" } {firstName2} <br/>
                 </Typography>
                 
                 <Typography color="textSecondary" gutterBottom variant="h2" component="h3" >
                    {countDownDiv} 
                 </Typography>
                 <Typography color="textSecondary" gutterBottom variant="h4" component="h3" >
                    {dateDiv}
                 </Typography>
              </CardContent>
             </Card>
        </React.Fragment>
    );
};