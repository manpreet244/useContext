import React,{useContext} from "react";
import {UserContext} from '../UserContext';
 function Index() {
   const msg = useContext(UserContext);
  return (<>{msg}</>);
}
export default Index;