import { useForm } from 'react-hook-form';

import useOverview from '../overview/useOverview';

// import { ErrorMessage } from '@hookform/error-message';

const Edit = () => {
  const { handleSubmit, register } = useForm();
  const { account, setAccount } = useOverview();

  const save = (data) => {
    console.log(data);
    setAccount(data);
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input name="firstName" defaultValue={account.firstName} ref={register} />

      {/* include validation with required or other standard HTML validation rules */}
      <input name="lastName" defaultValue={account.lastName} ref={register} />

      <input name="email" defaultValue={account.email} ref={register} />

      <input name="phone" defaultValue={account.phone} ref={register} />

      <input name="dob" defaultValue={account.dob} ref={register} />

      <input name="bio" defaultValue={account.bio} ref={register} />

      <input type="submit" />
    </form>
  );
};

export default Edit;
