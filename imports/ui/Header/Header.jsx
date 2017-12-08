import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Search, Input as InputIcon} from 'material-ui-icons';
import Button from 'material-ui/Button';
import {FormControl} from 'material-ui/Form';
import Input from 'material-ui/Input';

import './header.css';

const style = {
    height: 60,
    width: '100%',
    button: {
        margin: 12,
        marginTop: 12,
        color: '#3e8eff',
    },

    searchColor: {
        color: 'rgb(152, 152, 152)'
    }
};

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            search: '',
        });
    }

    handleChange = (event, value) => {
        this.setState({[event.target.name]: value});
    };

    render() {
        const {search} = this.state;
        return (
            <div>
                <Paper style={style} elevation={1}>
                    <div className="main-header">
                        <div className="left-alignedLogo">
                            <img src="./header-logo.png" alt="Logo" height='25' />
                        </div>
                        <div className="center-text">
                            <h3 className="text-center amber">
                                <span className="blue"> Skill</span>
                                Shape
                            </h3>
                        </div>
                        <div className="right-alignedBtn">
                            <form className="search-form">
                                <div className="searchbox-wrapper">
                                    <FormControl className="search-box">
                                        <Search color="gray" className="search-icon" />
                                        <Input
                                            id="search"
                                            name="search"
                                            placeholder="Search"
                                            value={search}
                                            onChange={this.handleChange}
                                            disableUnderline="true"
                                        />
                                    </FormControl>
                                </div>
                                <Button className="signinBtn" raised>
                                    <InputIcon className="signinIcon" />
                                    SignIn
                                </Button>
                            </form>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Header;