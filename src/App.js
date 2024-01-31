import FormBuilder from "./Components/FormBuilder"; 
import { FormProvider } from './FormContext';



function App() {
  return (
    <>
    <FormProvider>
      <FormBuilder />
    </FormProvider>
    </>
  );
}

export default App;


  





