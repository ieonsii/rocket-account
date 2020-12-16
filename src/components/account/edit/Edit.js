import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// import { ErrorMessage } from '@hookform/error-message';

const Edit = (props) => {
  const { account, setAccount, setEditMode } = props;

  const { handleSubmit, register } = useForm();

  const save = (data) => {
    setAccount(data);
    setEditMode(false);
  };

  return (
    <form id="hook-form" onSubmit={handleSubmit(save)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input name="firstName" defaultValue={account.firstName} ref={register} />

      {/* include validation with required or other standard HTML validation rules */}
      <input name="lastName" defaultValue={account.lastName} ref={register} />

      <input name="email" defaultValue={account.email} ref={register} />

      <input name="phone" defaultValue={account.phone} ref={register} />

      <input name="dob" type="date" defaultValue={account.dob} ref={register} />

      <input name="bio" defaultValue={account.bio} ref={register} />
    </form>
  );
};

Edit.propTypes = {
  account: PropTypes.object.isRequired,
  setAccount: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default Edit;
