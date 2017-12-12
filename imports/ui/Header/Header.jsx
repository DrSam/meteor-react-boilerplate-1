import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Search, Menu, Input as InputIcon} from 'material-ui-icons';
import Button from 'material-ui/Button';
import {FormControl} from 'material-ui/Form';
import Input from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Drawer from 'material-ui/Drawer';


import './header.css';
import SubHeader from "./SubHeader";

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
            open: false,
        });
    }

    handleChange = (event, value) => {
        this.setState({[event.target.name]: value});
    };

    handleMenuBar = () => {
      this.setState({open: !this.state.open});
    };

    render() {
        const { search } = this.state;
      const drawer = (
        <Drawer
          anchor="right"
          open={this.state.open}
          onRequestClose={this.handleMenuBar}
          className="mob-drawer"
        >
            <div
              tabIndex={0}
              role="button"
            >
                <Button className="signinBtn" raised>
                    <InputIcon className="signinIcon" />
                    Sign In
                </Button>
            </div>
        </Drawer>
      );
        return (
            <div>
                <Paper style={style} elevation={1}>
                    <div className="main-header desktop-view">
                        <div className="left-alignedLogo">
                            <img src="./header-logo.png" alt="Logo" height='25' />
                        </div>
                        <div className="center-text">
                            <h3 className="text-center amber website-name">
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
                                    Sign In
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="main-header mobile-view">
                        <div className="mob-header">
                            <Grid container className="mob-header-container">
                                <Grid item xs={2}>
                            <div className="left-alignedLogo">
                                <img src="./header-logo.png" alt="Logo" height='25' />
                            </div>
                                </Grid>
                                <Grid item xs={9}>
                                    <div className="mob-search">
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
                                </form>
                            </div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div className="rightMenu" onClick={this.handleMenuBar}>
                                        <Menu />
                                      {drawer}
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div> {/*Mobile*/}
                    <div className="main-header tab-view">
                        <div className="tab-header">
                            <Grid container className="tab-header-container">
                                <Grid item xs={1}>
                                    <div className="left-alignedLogo">
                                        <img src="./header-logo.png" alt="Logo" height='25' />
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div className="center-text">
                                        <h3 className="text-center amber website-name">
                                            <span className="blue"> Skill</span>
                                            Shape
                                        </h3>
                                    </div>
                                </Grid>
                                <Grid item xs={5}>
                                    <div className="mob-search">
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
                                        </form>
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button className="signinBtn" raised>
                                        <InputIcon className="signinIcon" />
                                        Sign In
                                    </Button>
                                </Grid>
                                <Grid item xs={1}>
                                    <div className="rightMenu" onClick={this.handleMenuBar}>
                                        <Menu />
                                      {drawer}
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div> {/*Tab*/}
                </Paper>
                <SubHeader/>
            </div>
        );
    }
}

export default Header;