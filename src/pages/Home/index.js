import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background_menu: {
    height: '100vh',
    width: 270.23,
    backgroundColor: '#83DEA3',
  },
  background_titulo: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    fontSize: '15px',
    letterSpacing: '0.2em',
    lineHeight: '21px',
    textAlign: 'left',
    color: '#fff',
    paddingLeft: '10px',
    paddingTop: '20px',

  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Typography component="div" style={{ backgroundColor: '#f2f8f4', height: '100vh', widht: '50vh' }}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.background_menu}>
                <grid item xs={12} className={classes.background_titulo}>
                  Menu

                  <Paper className={classes.root}>
                    <MenuList>
                      <MenuItem>
                        <ListItemIcon>
                          <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Home</Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <PriorityHighIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Meu Cartão</Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>Pessoas</Typography>
                      </MenuItem>
                    </MenuList>
                  </Paper>

                </grid>
              </Paper>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </>
  );
}
