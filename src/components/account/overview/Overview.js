import PropTypes from 'prop-types';

const Overview = (props) => {
  const account = props.account;
  return (
    <>
      <div> {account.firstName}</div>
      <div> {account.lastName}</div>
      <div> {account.email}</div>
      <div> {account.phone}</div>
      <div> {account.dob}</div>
      <div> {account.bio}</div>
    </>
  );
};

Overview.propTypes = {
  account: PropTypes.object.isRequired,
};

export default Overview;
