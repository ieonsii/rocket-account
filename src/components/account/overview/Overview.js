import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import Info from '../../ui/profile/Info.js';

const Overview = (props) => {
  const account = props.account;
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="left">
        <Grid xs={6}>
          <Info label="First Name" value={account.firstName} />
        </Grid>
        <Grid xs={6}>
          <Info label="Last Name" value={account.lastName} />
        </Grid>
      </Grid>
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
