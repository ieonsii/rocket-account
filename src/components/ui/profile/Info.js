import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const Input = (props) => {
  const { label, value } = props;

  const useStyles = makeStyles(() => ({
    infoHeader: {
      color: 'rgb(0,175,149)',
    },
    infoContent: {
      color: 'rgb(0,0,0)',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.infoHeader}>{label}</div>
      <div className={classes.infoContent}>{value}</div>
    </>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
