import React from 'react';
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
import IframeContainer from './IframeContainer';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      height:'100%'
    },
  },
  container: {
    height: '100%',
    backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  iframeContainer:{
    height:'100%'
  }
});

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}


class Layout extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    if(this.state.activeStep === getSteps().length-1) {
      alert("finished!");
      return;
    }
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = getSteps();
    return (
      <div>
        <PrimarySearchAppBar />
        <Grid 
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          className={classes.vertical}
          >
            <Grid container 
              spacing={16} 
              direction="row"
              justify="flex-start"
              alignItems="stretch"
              >
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <VerticalLinearStepper activeStep={activeStep}/>
                </Paper>
              </Grid>
              <Grid item xs={9}>
                <Paper className={classes.paper} style={{height:"80vh"}}>
                  <IframeContainer 
                    step={this.state.activeStep}
                  />
                </Paper>
              </Grid>
            </Grid>
  
            <Grid item xs={12}
              className={classes.footer}
            >
              <Paper className={classes.paper}>
                <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
              </Paper>
            </Grid>
        </Grid>
        
      </div>
    );
  } 
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);