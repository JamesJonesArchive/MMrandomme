import React from 'react';
// import {BootstrapTable, TableHeaderColumn} from 
import BootstrapTable from 
       'react-bootstrap-table-next';
import filterFactory, { textFilter } from 
        'react-bootstrap-table2-filter';       
import RoundIcon from
      './RoundIcon';    
import NameEmail, { buildFullName } from 
      './NameEmail';  
import * as FontAwesome from 'react-icons/lib/fa';  
import IoAndroidCheckboxOutline from 'react-icons/lib/io/android-checkbox-outline';  
import IoAndroidCheckboxOutlineBlank from 'react-icons/lib/io/android-checkbox-outline-blank';
import PersonsSelect from './PersonsSelect';  
import PersonDropDown from './PersonDropDown'; 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const checkboxFormatter = (cell,row) => {
  return <PersonsSelect index={cell} />;
};
const imageFormatter = (cell,row) => {
  return <RoundIcon src={cell} />;
};
const nameFormatter = (cell,row) => {
  return <NameEmail fullName={cell} email={row.email} />;
};
const personDropDownFormatter = (cell,row) => {
  return <PersonDropDown />;
};
const nameHeaderFormatter = (column,colIndex,components) => {
  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      { components.filterElement }
      { column.text }{ components.sortElement }
    </div>
  );
};
const columns = [{
  dataField: 'index',
  text: '',
  formatter: checkboxFormatter
}, {
  dataField: 'picture.thumbnail',
  text: '',
  formatter: imageFormatter
}, {
  dataField: 'fullName',
  text: 'Name',
  filter: textFilter(),
  formatter: nameFormatter,
  // headerFormatter: nameHeaderFormatter,
  sort: true
}, {
  dataField: 'phone',
  text: 'Phone'
}, {
  dataField: 'location.city',
  text: 'City'
}, {
  dataField: 'location.postcode',
  text: 'PostCode'
}, {
  dataField: 'menuIndex',
  text: '',
  formatter: personDropDownFormatter
}];
const API = 'https://randomuser.me/api/?results=50';
export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.handleFormattedData = this.handleFormattedData.bind(this);
  }
  componentDidMount() {        
    fetch(API,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => this.setState({ people: data.results.map((p,i) => {
      // Add the missing index
      p.index = i;
      p.menuIndex = i;
      return p;
    }) }))
    .catch(error => console.error(error));
  }
  handleFormattedData() {
    return this.state.people.map((p,i) => {
      // Combine the first and last names into a new attribute
      p.fullName = buildFullName(p.name.first,p.name.last);
      return p;
    });
  }
  render() {
    return <BootstrapTable 
              keyField='index' 
              data={ this.handleFormattedData() } 
              columns={ columns } 
              bordered={ false } 
              rowStyle={ { bordeRadius: '10px 10px 10px 10px' } } 
              filter={ filterFactory() }            
              striped
              hover
              condensed />;  
  }
}
