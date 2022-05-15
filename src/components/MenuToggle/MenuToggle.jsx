import * as React from "react";
import { Component } from "react";
import { motion } from "framer-motion";

import './MenuToggle.scss';

const UpPath = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    variants={upPathVariants}
    initial = "closed"
    transition={{duration: 0.1}}
    {...props}

  />
);

const MiddlePath = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    variants={middlePathVariants}
    initial = "closed"
    transition={{duration: 0.1}}
    {...props}

  />
);

const DownPath = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    variants={downPathVariants}
    initial = "closed"
    transition={{duration: 0.1}}
    {...props}

  />
);

const upPathVariants = {
  closed: { d: "M 2 2.5 L 20 2.5" },
  open: { d: "M 3 16.5 L 17 2.5" }
}

const downPathVariants = {
  closed: { d: "M 2 16.346 L 20 16.346" },
  open: { d: "M 3 2.5 L 17 16.346" }
}

const middlePathVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 }
}

class MenuToggle extends Component{

  render(){
      return(
        <button className="app__header-menutoggle" onClick={this.props.toggle}>
          <svg width="25" height="25" viewBox="0 -3 22 22">
            {console.log('openstate is ' + this.props.openState)}
            <UpPath
              animate = {this.props.openState? "open" : "closed "}   
            />
            <MiddlePath
              d="M 2 9.423 L 20 9.423"
              animate = {this.props.openState? "open" : "closed "}   
            />
            <DownPath
              animate = {this.props.openState? "open" : "closed "}   
            />
          </svg>
        </button>
      )
    }
  }

  export default MenuToggle;

