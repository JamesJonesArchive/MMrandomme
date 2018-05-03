import React from 'react';

export const buildFullName = (firstName,lastName) => {
  return [ firstName, lastName ].map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}
const emailCSS = { 
  color: 'gray' 
};
const NameEmail = (props) => {
  return (
    <div>
      <span style={{ display: 'block' }} >
        {props.fullName}
      </span>
      <span style={ emailCSS } className="small" >
        {props.email}
      </span>
    </div>
  );
}
// buildFullName(props.firstName,props.lastName)
export default NameEmail;
