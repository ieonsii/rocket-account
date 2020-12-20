import PropTypes from 'prop-types';

import Info from '../../ui/profile/Info.js';

const Overview = (props) => {
  const account = props.account;
  return (
    <>
      <Info label="First Name" value={account.firstName} />
      <Info label="Last Name" value={account.lastName} />
      <Info label="Email" value={account.email} />
      <Info label="Phone" value={account.phone} />
      <Info label="Date of Birth" value={account.dob} />
      <Info label="Bio" value={account.bio} />
    </>
  );
};

Overview.propTypes = {
  account: PropTypes.object.isRequired,
};

export default Overview;
