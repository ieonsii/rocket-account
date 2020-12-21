import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = (props) => {
  const { editMode, setEditMode } = props;

  const handleClick = async (e) => {
    let changeMode = true;
    e.preventDefault();
    if (editMode) {
      changeMode = false;
    }
    setEditMode(changeMode);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    backLink: {
      '& a': {
        textDecoration: 'none',
        color: 'rgb(0,0,0)',
        textAlign: 'right',
        fontSize: '1rem',
      },
    },
    headingText: {
      textAlign: 'left',
      color: 'rgb(0,175,149)',
      fontSize: '2rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
    editLink: {
      '& a': {
        textDecoration: 'none',
        color: 'rgb(22,155,213)',
        textAlign: 'right',
        fontSize: '1rem',
      },
      '& button': {
        outline: 'none',
        background: 'transparent',
        border: '1px solid transparent',
        color: 'rgb(22,155,213)',
        textAlign: 'right',
        fontSize: '1rem',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid className={classes.backLink}>
        {editMode && (
          <a href="#" onClick={(e) => handleClick(e, editMode)}>
            <ArrowBackIosIcon />
          </a>
        )}
      </Grid>
      <Grid item xs={9}>
        <h1 className={classes.headingText}>My Account</h1>
      </Grid>
      <Grid className={classes.editLink}>
        {!editMode ? (
          <a href="#" onClick={(e) => handleClick(e, editMode)}>
            Edit
          </a>
        ) : (
          <button href="#" type="submit" form="hook-form">
            Save
          </button>
        )}
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default Header;
