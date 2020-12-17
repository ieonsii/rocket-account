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
          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  ref={register}
                  label="Last Name"
                />
              }
              control={control}
              name="lastName"
              defaultValue={account.lastName}
              rules={{
                required: <span>Last name is required.</span>,
              }}
            />
            <ErrorMessage errors={errors} name="lastName" />
          </Grid>

          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  ref={register}
                  label="Email"
                />
              }
              control={control}
              name="email"
              defaultValue={account.email}
              rules={{
                required: <span>Email is required.</span>,
              }}
            />
            <ErrorMessage errors={errors} name="email" />
          </Grid>

          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="text"
                  ref={register}
                  label="Phone"
                />
              }
              control={control}
              name="phone"
              defaultValue={account.phone}
              rules={{
                required: <span>Phone is required.</span>,
              }}
            />
            <ErrorMessage errors={errors} name="phone" />
          </Grid>

          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  type="date"
                  ref={register}
                  label="Birthday"
                />
              }
              control={control}
              name="dob"
              defaultValue={account.dob}
              rules={{
                required: <span>Birthday is required.</span>,
              }}
            />
            <ErrorMessage errors={errors} name="dob" />
          </Grid>

          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  className={classes.container}
                  id="standard-basic"
                  fullWidth
                  multiline
                  variant="outlined"
                  rowsMax={20}
                  type="text"
                  ref={register}
                  label="Bio"
                />
              }
              control={control}
              name="bio"
              defaultValue={account.bio}
              rules={{
                required: <span>Bio is required.</span>,
              }}
            />
            <ErrorMessage errors={errors} name="bio" />
          </Grid>
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
