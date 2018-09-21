import React,{Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Paper from '@material-ui/core/Paper';
import VerticalLinearStepper from './VerticalLinearStepper';
import FooterController from './FooterController';

class App extends Component {
  render() {
    return (
      <div>
      <PrimarySearchAppBar />
      <Grid 
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        >
          <Grid container 
            spacing={18} 
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            >
            <Grid item xs={3}>
              <Paper className='paper'>
                <VerticalLinearStepper />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className='paper'>xs=6</Paper>
            </Grid>
          </Grid>

          <Grid item xs={12}
            className='footer'
          >
            <Paper className='paper'>
              <FooterController />
            </Paper>
          </Grid>
      </Grid>
      
    </div>
    );
  }
}

export default App;
