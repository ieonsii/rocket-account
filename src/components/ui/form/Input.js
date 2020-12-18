import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { makeStyles, Grid, TextField } from '@material-ui/core';

const Input = (props) => {
  const {
    register,
    control,
    errors,
    type,
    formLabel,
    formName,
    formValue,
    rules,
  } = props;

  const useStyles = makeStyles((theme) => ({
    fieldContainer: {
      margin: theme.spacing(0.5),
    },
  }));

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Controller
        as={
          <TextField
            className={classes.fieldContainer}
            id="standard-basic"
            fullWidth
            type={type}
            ref={register}
            label={formLabel}
          />
        }
        control={control}
        name={formName}
        defaultValue={formValue}
        rules={rules}
      />
      <ErrorMessage errors={errors} name={formName} />
    </Grid>
  );
};
Input.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  formLabel: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  formValue: PropTypes.string.isRequired,
  rules: PropTypes.object.isRequired,
};

export default Input;
