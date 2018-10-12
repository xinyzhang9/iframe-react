import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
  state = {
    activeDeep: 0,
  };

  handleCancel = () =>{
    alert("Click cancel button");
  }

  getKeys = (json) => {
    var keys = [];
    for(let key in json){
      keys.push(key);
    }
    return keys;
  }

  getClassname = (json,key) => {
    let classname = "";
    if(json[key].child === null){
      if(json[key].step === this.props.activeStep){
        console.log("active")
        classname += "active";
      }
      if(json[key].step < this.props.activeStep){
        classname += "completed";
      }
    }else{
      if(json[key].step <= this.props.activeStep){
        classname += "tree-container expanded";
      }
      
    }
    return classname;
  }

  handleChild = (json,key) => {
    if(json[key].child !== null && json[key].step <= this.props.activeStep){
      console.log(json[key].deep > this.props.activeDeep)
      // this.setState(state => ({
      //   activeDeep: state.activeDeep + 1,
      // }));
      return this.drawTree(json[key].child);
    }else{
      return null;
    }
  }

  drawTree = (json) => {
    return(
      <ul>
        {
          this.getKeys(json).map((item,index) => {
            // console.log((json[item].child !== null && this.props.activeStep === json[item].step))
          return(
              // <li key={index} className={json[item].child === null?"":"tree-container expanded"}>
              <li key={index} className={this.getClassname(json,item)}>
                <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
                <p>{item}</p>
                {/* {(json[item].child !== null && this.state.activeDeep < json[item].deep)? this.drawTree(json[item].child) : null} */}
                {this.handleChild(json,item)}
              </li>
            )
          })
        }     
      </ul>
    )

    }
    
  

  render() {
    const steps = {
      'Welcome':{'step':0,'deep':0,'child':null},
      'Suite':{'step':1,'deep':0,'child':{
          'Database':{'step':2,'deep':1,'child':null},
          'Connection':{'step':3,'deep':1,'child':{
              'Server Connection':{'step':4,'deep':2,'child':null},
              'Browser Connection':{'step':5,'deep':2,'child':null},
          }},
          'Login':{'step':6,'deep':1,'child':null},
      },   
      },
      'Summary':{'step':7,'deep':0,'child':null},
  }

    return (
      <div>{this.drawTree(steps)}</div>
      // <ul>
      //   <li className="completed">
      //   <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
      //   <p>step 1</p>
      //   </li>
      //   <li className="tree-container expanded">
      //   <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
      //   <p>step 2</p>
      //   <ul>
      //     <li className="completed">
      //     <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
      //     <p>step 1</p>
      //     </li>
      //     <li className="tree-container expanded">
      //     <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
      //     <p>step 2</p>
      //     </li>
      //     <li className="">
      //     <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
      //     <p>step 3</p>
      //     </li>
      //   </ul>
      //   </li>
      //   <li className="">
      //   <i className="tree-icon-left"></i><i className="tree-icon-right"></i>
      //   <p>step 3</p>
      //   </li>
      // </ul>
      
    );
  }
}

NavigateTree.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(NavigateTree);