import React from 'react';

const circleImage = {
  borderWidth:1,
  borderColor:'rgba(0,0,0,0.2)',
  alignItems:'center',
  justifyContent:'center',
  width:40,
  height:40,
  backgroundColor:'#fff',
  borderRadius:100,
};
const RoundIcon = (props) => {
  return (<img 
            src={props.src} 
            style={circleImage} />);
}
export default RoundIcon;