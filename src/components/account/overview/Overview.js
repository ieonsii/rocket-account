import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Grid } from '@material-ui/core';

import Info from '../../ui/profile/Info.js';

const Overview = (props) => {
  const account = props.account;
  return (
    <>
      <Grid container direction="row" justify="center">
        <Grid item xs={6}>
          <Info label="First Name" value={account.firstName} />
        </Grid>
        <Grid item xs={6}>
          <Info label="Last Name" value={account.lastName} />
        </Grid>
      </Grid>
      <Info
        label="Email"
        value={<a href={`mailto:${account.email}`}>{account.email}</a>}
      />
      <Info label="Phone" value={account.phone} />
      <Info
        label="Date of Birth"
        value={dayjs(account.dob).format('DD MMM YYYY')}
      />
      <Info label="Bio" value={account.bio} />
    </>
  );
};

Overview.propTypes = {
  account: PropTypes.object.isRequired,
};

export default Overview;
