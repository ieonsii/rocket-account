import PropTypes from 'prop-types';

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

  return (
    <>
      {editMode && (
        <a href="#" onClick={(e) => handleClick(e, editMode)}>
          Back
        </a>
      )}
      <h1>My Account</h1>
      {!editMode ? (
        <a href="#" onClick={(e) => handleClick(e, editMode)}>
          Edit
        </a>
      ) : (
        <button href="#" type="submit" form="hook-form">
          save
        </button>
      )}
    </>
  );
};

Header.propTypes = {
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default Header;
