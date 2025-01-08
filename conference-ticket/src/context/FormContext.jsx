import { createContext, useContext } from 'react';
import { useForm } from '../hooks/useForm';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const { formData, showForm, handleForm, resetForm } = useForm();
  return (
    <FormContext.Provider value={{ formData, showForm, handleForm, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);