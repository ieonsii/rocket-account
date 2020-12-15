import { useForm } from 'react-hook-form';

// import { ErrorMessage } from '@hookform/error-message';

const Edit = () => {
  const { handleSubmit, register } = useForm();

  const save = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(save)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input name="firstName" defaultValue="" ref={register} />

      {/* include validation with required or other standard HTML validation rules */}
      <input name="lastName" ref={register} />

      <input name="email" defaultValue="" ref={register} />

      <input name="phone" defaultValue="" ref={register} />

      <input name="dob" defaultValue="" ref={register} />

      <input name="bio" defaultValue="" ref={register} />

      <input type="submit" />
    </form>
  );
};

export default Edit;
