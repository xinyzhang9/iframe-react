import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import {getStepInformation,getStepsMap} from './StepInformation';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});


class VerticalLinearStepper extends React.Component {

  getStepsMap = (index) =>{
    var stepMap = getStepsMap();
    if(stepMap[index].indexOf("-") === -1){
      // console.log([stepMap[index]])

      return [stepMap[index]];
    }
    var s = stepMap[index].split('-');
    // console.log(s)
    return s;
  }

  getStepsTitle = (steps) =>{
    var stepsTitle = [];
    for(var i in steps){
      stepsTitle.push(i)
    }
    return stepsTitle;
  }

  handleChild = (key, steps, parentDeep) =>{
    var s = this.getStepsMap(this.props.activeStep);
    if(steps[key].child === null){
      return steps[key].desc;
    }else{  
      // if(steps[key].child.step == s){
        const subSteps = steps[key].child;
        const subStepsTitle = this.getStepsTitle(subSteps);
        return  <Stepper activeStep={parseInt(s[parentDeep+1])} orientation="vertical">
              {subStepsTitle.map((label,index) => {
                  return(
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>
                          {this.handleChild(subStepsTitle[index], subSteps, parentDeep+1)}
                        </Typography>
                      </StepContent>
                    </Step> 
                  )}
                )}                      
          </Stepper>
      // }

    }
  }
  
  render() {
    const { classes } = this.props;
    const steps = getStepInformation();
    const stepsTitle = this.getStepsTitle(steps);
    var s = this.getStepsMap(this.props.activeStep);


    return (
      <div className={classes.root}>
        <Stepper activeStep={parseInt(s[0])} orientation="vertical">
          {stepsTitle.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>
                    <div>
                      {this.handleChild(stepsTitle[index], steps,0)}
                    </div>
                  </Typography>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {/* {this.props.activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
          </Paper>
        )} */}
      </div>
    );
  }
}

// VerticalLinearStepper.propTypes = {
//   classes: PropTypes.object,
// };

export default withStyles(styles)(VerticalLinearStepper);