import React, {Component} from 'react';
import Input from 'material-ui/Input';

import './header.css';

class HeaderInput extends Component {
  constructor(props){
    super(props);
    this.state=({
      gender: '',
      chipData: [
        {key: 0, label: 'Acrobatics'},
        {key: 1, label: 'Trapeze'},
      ],
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render(){
    return (
      <Input
        id={this.props.id}
        name={this.props.name}
        type={this.props.type ? 'number' : 'text'}
        placeholder={this.props.placeholder}
        value={!this.state[this.props.name] ? this.props.value : this.state[this.props.name]}
        onChange={this.handleChange}
        disableUnderline="true"
        className={this.props.className}
      />
    );
  }
}

export default HeaderInput;