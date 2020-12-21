import { useState } from 'react';

import { makeStyles, Container, Grid, Paper } from '@material-ui/core';

import Header from './components/header/Header';
import Overview from './components/account/overview';
import Edit from './components/account/edit';

function App() {
  const [editMode, setEditMode] = useState(false);
  const [account, setAccount] = useState({
    firstName: 'Bruce',
    lastName: 'Banner',
    email: 'bruce.banner@avengers.com',
    phone: '0400 000 000',
    dob: '1970-05-31',
    bio:
      'Dr. Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise initially portrayed by Edward Norton and subsequently by Mark Ruffalo—based on the Marvel Comics character of the same name—known commonly by his alter ego, the Hulk. In the films, Banner is a renowned physicist who subjected himself to a gamma radiation experiment designed to replicate a World War II-era "super soldier" program.',
  });

  const useStyles = makeStyles((theme) => ({
    bodyContainer: {
      padding: theme.spacing(2),
      display: 'flex',
      height: '100%',
      overflowY: 'hidden',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      '& div': {
        '& span': {
          color: 'red',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'right',
          textAlign: 'right',
          fontSize: '0.66em',
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xs">
        <Header editMode={editMode} setEditMode={setEditMode} />
        <Grid container spacing={3}>
          <Paper className={classes.bodyContainer}>
            {!editMode && <Overview account={account} />}
            {editMode && (
              <Edit
                account={account}
                setAccount={setAccount}
                setEditMode={setEditMode}
              />
            )}
          </Paper>
        </Grid>
      </Container>
    </>
  );
}

export default App;
