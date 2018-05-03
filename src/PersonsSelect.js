import React from 'react';
import IoAndroidCheckboxOutline from 'react-icons/lib/io/android-checkbox-outline';  
import IoAndroidCheckboxOutlineBlank from 'react-icons/lib/io/android-checkbox-outline-blank';   

const selectors = {
  checked: <IoAndroidCheckboxOutline />,
  unchecked: <IoAndroidCheckboxOutlineBlank />
};
export default class PersonsSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.getSelector = this.getSelector.bind(this);
    this.toggleSelector = this.toggleSelector.bind(this);
    this.handlePersonSelectClick = this.handlePersonSelectClick.bind(this);
  }
  getSelector(index) {
    return (this.state.selected.includes(index))?selectors.checked:selectors.unchecked;
  }
  handlePersonSelectClick() {
    this.toggleSelector(this.props.index);
  }
  toggleSelector(index) {
    if(this.state.selected.includes(index)) {
      // remove the selection
      let newSelected = this.state.selected.filter(s => s != index);
      this.setState({ 
        selected: newSelected 
      });
    } else {
      // add the selection
      let newSelected = this.state.selected;
      newSelected.splice(-1,0,index);
      this.setState({ 
        selected: newSelected 
      });
    }
  }
  render() {
    return <div onClick={this.handlePersonSelectClick} >{this.getSelector(this.props.index)}</div>;
  }
}