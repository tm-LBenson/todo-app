import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../Components/auth/context';

const useForm = (callback, defaultValues={}) => {
  const { user } = useContext(LoginContext);
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
   user.capabilities.includes('delete') && callback({ ...values });
  };

  const handleChange = (event) => {
    let name, value;
    if(typeof(event) === 'object'){
      name = event.target.name;
      value = event.target.value;
    } else {
      console.log('event from slider', event)
      // hard coded for Mantine slider functionality 
      // change "difficulty" language if desired
      // change name dynamically if doing stretch goal!
      name = 'difficulty';
      value = event;
    }

    if (parseInt(value)) {
      value = parseInt(value);
    }

    setValues(values => ({ ...values, [name]: value }));
  };

  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
