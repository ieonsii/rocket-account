import PropTypes from 'prop-types';

import { makeStyles, Card, Grid } from '@material-ui/core';
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

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        {editMode && (
          <a href="#" onClick={(e) => handleClick(e, editMode)}>
            <ArrowBackIosIcon />
          </a>
        )}

        <h1 xs={6}>My Account</h1>

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
    </Card>
  );
};

Header.propTypes = {
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default Header;
