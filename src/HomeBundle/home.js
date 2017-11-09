import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default function Home() {
    return function(Child) {
      return class extends Component {
         constructor(props) {
           super(props);
         }
         render() {
         console.log(Child);
           return (
             <div>
               <h2>Hello this is the navigation bar</h2>
               <Child />
             </div>
           )
        }
     }
 }
}