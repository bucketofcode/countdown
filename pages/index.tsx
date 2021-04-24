import { CountDownForm } from "./CountDownForm";

const Index = () => (
    <div style= {{ verticalAlign: "middle", textAlign: "center"}}>
      {/* <p>Ready to countdown to your big day using React and Next.js!</p> */}
      <CountDownForm onSubmit={({email, firstName, firstName2, date}) => {
        console.log(email, firstName, firstName2, date)
      }}/>
     </div>
  );
export default Index;


  
