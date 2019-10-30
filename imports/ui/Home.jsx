import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1>Welcome to Timer Project</h1></Paper>
        </Grid>
       
        <Grid item xs={3}>
          <Paper className={classes.paper}>Visit Projects for detail on Project</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Visit Projects for detail on Project</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Feel free to comment</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> Its time tracker</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
