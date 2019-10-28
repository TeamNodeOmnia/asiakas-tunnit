import React from "react";
import { Link } from "react-router-dom";
import Button from './Button.jsx';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  }
}));

const Posts = props => {
  // let {match} = props
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

 
  return (
    <div >
      <ul>
        <li>
          <Link to="/posts/newpost"> 
          <Button> +New Project</Button></Link>
          <Link to="/posts/postdetail"> Project Detail</Link>
        </li>
      </ul>

      <div >
        <div >
          <h1> Project Content</h1>
         
        </div>
      </div>
       <div className={classes.root}>
      <AppBar position="static" color="primary">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                    <Tab label="Project Name" {...a11yProps(0)} />
                    <Tab label="Start Time" {...a11yProps(1)} />
                    <Tab label="ID" {...a11yProps(2)} />
              </Tabs>
      </AppBar>
      <div >
            {props.infos.map((post, i) => {
              return (
                <div key={"id-" + i}>
                  <Link to={`/posts/${post.postId}`}>
                          <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                              >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                <span>Title:{post.title}</span>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                <span> Start Time :{post.startTime}</span>
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                <span> Post ID :{post.postId}</span>
                                </TabPanel>
                        </SwipeableViews>
                  </Link>
                </div>
              );
            })}
          </div>
    </div>
    </div>
  );
};

export default Posts;
