import { CountDownForm } from "./CountDownForm";

const Index = () => (
    <div style= {{ verticalAlign: "middle", textAlign: "center"}}>
      <CountDownForm onSubmit={({email, firstName, firstName2, date}) => {
        console.log(email, firstName, firstName2, date)
      }}/>
     </div>
  );
export default Index;


  
