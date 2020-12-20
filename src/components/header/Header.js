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
    headingText: {
      textAlign: 'center',
      fontSize: '2rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid>
        {editMode && (
          <a href="#" onClick={(e) => handleClick(e, editMode)}>
            <ArrowBackIosIcon />
          </a>
        )}
      </Grid>
      <Grid xs={6}>
        <h1 className={classes.headingText}>My Account</h1>
      </Grid>
      <Grid>
        {!editMode ? (
          <a href="#" onClick={(e) => handleClick(e, editMode)}>
            Edit
          </a>
        ) : (
          <button href="#" type="submit" form="hook-form">
            save
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
