import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 10,
  },
  actionsContainer: {
    paddingLeft: theme.spacing.unit * 15,
  },
});

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}


class FooterController extends React.Component {

  handleCancel = () =>{
    alert("Click cancel button");
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Grid container spacing={12} 
          direction="row"
          justify="space-between"
          alignItems="center"
        >
        <Grid item xs={1}>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleCancel}
            >
              cancel
            </Button>
          </div>  
        </Grid>
        <Grid item xs={2} className={classes.actionsContainer}>
        <div>
            <Button
              disabled={this.props.activeStep === 0}
              onClick={this.props.handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.handleNext}
              className={classes.button}
            >
              {this.props.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </Grid>
      </Grid>
      </div>
      
    );
  }
}

FooterController.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(FooterController);