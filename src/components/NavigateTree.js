import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import '../css/components/NavigateTree.css';


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



class NavigateTree extends React.Component {

  handleCancel = () =>{
    alert("Click cancel button");
  }

  render() {
    const { classes } = this.props;
    const allSteps = ["1","2","3"];

    return (
      <ul>
        <li className="completed">
        <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
        <p>step 1</p>
        </li>
        <li className="tree-container expanded">
        <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
        <p>step 2</p>
        </li>
        <li className="">
        <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
        <p>step 3</p>
        </li>
      </ul>
    );
  }
}

NavigateTree.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(NavigateTree);