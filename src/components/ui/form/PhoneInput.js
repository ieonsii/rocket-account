import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputMask from 'react-input-mask';

import { makeStyles, Grid, TextField } from '@material-ui/core';

const Input = (props) => {
  const { register, control, errors, type, formName, formValue, rules } = props;

  const useStyles = makeStyles((theme) => ({
    fieldContainer: {
      margin: theme.spacing(0.5),
      '& label': {
        marginTop: '15px',
        color: 'rgb(0,175,149)',
        fontWeight: '500',
        fontSize: '1.33rem',
      },
      '& input': {
        marginTop: '15px',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Controller
        as={
          <InputMask
            mask="9999 999 999"
            value={formValue}
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                className={classes.fieldContainer}
                id="standard-basic"
                fullWidth
                type={type}
                ref={register}
                label="Phone"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          </InputMask>
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
  formName: PropTypes.string.isRequired,
  formValue: PropTypes.string.isRequired,
  rules: PropTypes.object.isRequired,
};

export default Input;
