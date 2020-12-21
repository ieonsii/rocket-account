import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const Info = (props) => {
  const { label, value } = props;

  const useStyles = makeStyles(() => ({
    infoHeader: {
      marginTop: '10px',
      color: 'rgb(0,175,149)',
      fontWeight: '500',
      lineHeight: '1.66rem',
    },
    infoContent: {
      color: 'rgb(0,0,0)',
      fontWeight: '500',
      lineHeight: '1.33rem',
      '& a': {
        color: 'rgb(0,0,0)',
      },
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
Info.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};

export default Info;
