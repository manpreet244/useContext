import React,{useContext}from "react";
import {UserContext} from '../UserContext';
 function About() {
  const msg = useContext(UserContext);
  return (<>{msg}</>);
}
export default About;
