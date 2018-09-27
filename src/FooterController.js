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



class FooterController extends React.Component {

  handleCancel = () =>{
    alert("Click cancel button");
  }

  render() {
    const { classes } = this.props;
    const allSteps = this.props.allSteps;

    return (
      <div className={classes.root}>
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
        <Grid item xs={3}
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleCancel}
            >
              cancel
            </Button>
        </Grid>
        <Grid item xs={9}
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
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
              {this.props.activeStep === allSteps - 1 ? 'Finish' : 'Next'}
            </Button>
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