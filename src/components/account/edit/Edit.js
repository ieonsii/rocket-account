import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { makeStyles, Container, Grid, TextField } from '@material-ui/core';

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
    fieldContainer: {
      margin: theme.spacing(2),
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
          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  ref={register}
                  label="First Name"
                />
              }
              control={control}
              name="firstName"
              defaultValue={account.firstName}
              rules={{
                required: <span>First name is required.</span>,
              }}
            />
            <ErrorMessage errors={errors} name="firstName" />
          </Grid>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            name="lastName"
            defaultValue={account.lastName}
            ref={register}
          />

          <input name="email" defaultValue={account.email} ref={register} />

          <input name="phone" defaultValue={account.phone} ref={register} />

          <input
            name="dob"
            type="date"
            defaultValue={account.dob}
            ref={register}
          />

          <input name="bio" defaultValue={account.bio} ref={register} />
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
