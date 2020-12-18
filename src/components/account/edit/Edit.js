import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { makeStyles, Container, Grid } from '@material-ui/core';

import Input from '../../ui/form/Input.js';
import TextArea from '../../ui/form/TextArea.js';

const Edit = (props) => {
  const { account, setAccount, setEditMode } = props;

  const { handleSubmit, register, control, errors } = useForm();

  const save = (data) => {
    setAccount(data);
    setEditMode(false);
  };

  const useStyles = makeStyles((theme) => ({
    formContainer: {
      padding: theme.spacing(2),
      textAlign: 'center',
      display: 'flex',
      height: '100%',
      overflowY: 'hidden',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      '& div': {
        '& span': {
          color: 'red',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'right',
          textAlign: 'right',
          fontSize: '0.66em',
          padding: '0.33rem 0',
        },
      },
    },
  }));

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <form
          className={classes.formContainer}
          id="hook-form"
          onSubmit={handleSubmit(save)}
        >
          <Input
            register={register}
            control={control}
            errors={errors}
            type="text"
            formLabel="First Name"
            formName="firstName"
            formValue={account.firstName}
            rules={{
              required: <span>First Name is required.</span>,
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
              required: <span>Last Name is required.</span>,
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
                message: <span>Entered value does not match email format</span>,
              },
            }}
          />

          <Input
            register={register}
            control={control}
            errors={errors}
            type="text"
            formLabel="Phone"
            formName="phone"
            formValue={account.phone}
            rules={{
              required: <span>Phone is required.</span>,
              pattern: {
                value: /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,
                message: (
                  <span>
                    Entered value does not match australian phone formats
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
            formLabel="Birthday"
            formName="dob"
            formValue={account.dob}
            rules={{
              required: <span>Birthday is required.</span>,
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
              required: <span>Bio is required.</span>,
            }}
          />
        </form>
      </Grid>
    </Container>
  );
};

Edit.propTypes = {
  account: PropTypes.object.isRequired,
  setAccount: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default Edit;
