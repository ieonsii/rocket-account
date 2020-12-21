import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../ui/form/Input.js';
import TextArea from '../../ui/form/TextArea.js';

const Edit = (props) => {
  const { account, setAccount, setEditMode } = props;

  const { handleSubmit, register, control, errors } = useForm();

  const save = (data) => {
    setAccount(data);
    setEditMode(false);
  };
  return (
    <form id="hook-form" onSubmit={handleSubmit(save)}>
      <Input
        register={register}
        control={control}
        errors={errors}
        type="text"
        formLabel="First Name"
        formName="firstName"
        formValue={account.firstName}
        rules={{
          required: <span>Your first name is required</span>,
        }}
      />

      <Input
        register={register}
        control={control}
        errors={errors}
        type="text"
        formLabel="Last Name"
        formName="lastName"
        formValue={account.lastName}
        rules={{
          required: <span>Your last name is required</span>,
        }}
      />

      <Input
        register={register}
        control={control}
        errors={errors}
        type="text"
        formLabel="Email"
        formName="email"
        formValue={account.email}
        rules={{
          required: <span>Email is required.</span>,
          pattern: {
            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
            message: <span>Your email is not a valid email</span>,
          },
        }}
      />

      <Input
        register={register}
        control={control}
        errors={errors}
        type="text"
        pattern="\d*"
        formLabel="Phone"
        formName="phone"
        formValue={account.phone}
        rules={{
          required: <span>Phone is required.</span>,
          pattern: {
            value: /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,
            message: (
              <span>
                Your phone number is not a valid australian phone number
              </span>
            ),
          },
        }}
      />

      <Input
        register={register}
        control={control}
        errors={errors}
        type="date"
        formLabel="Date of Birth"
        formName="dob"
        formValue={account.dob}
        rules={{
          required: <span>Your date of birth is required</span>,
        }}
      />

      <TextArea
        register={register}
        control={control}
        errors={errors}
        type="date"
        formLabel="Bio"
        formName="bio"
        formValue={account.bio}
        rules={{
          required: <span>Please provide a bio</span>,
        }}
      />
    </form>
  );
};

Edit.propTypes = {
  account: PropTypes.object.isRequired,
  setAccount: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default Edit;
