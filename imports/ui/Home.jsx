import React from 'react';

const style = {
    page: {
        overflow: 'hidden',
    }
};
class Home extends React.Component {

	render(){
		return (
			<div className="pageWrapper" style = {style.page}>
				<div className="header">
                    <header>
                        <div className="navbar-fixed">
                            <nav>
                                <div className="nav-wrapper">
                                    <a href="#" className="brand-logo">
                                        <img src="https://www.skillshape.com/images/logo-location.png" alt=""/>
                                    </a>
                                    <a href="#" data-activates="mobile-demo" className="button-collapse">
                                        <i className="mdi mdi-menu"></i>
                                    </a>
                                    <ul className="right hide-on-med-and-down">
                                        <li><a href=""><i className="mdi mdi-home"></i>Home</a></li>
                                        <li><a href=""><i className="mdi mdi-account-plus"></i>Student signup</a></li>
                                        <li><a href=""><i className="mdi mdi-school"></i>Register a school</a></li>
                                        <li><a href=""><i className="mdi mdi-checkbox-marked-outline"></i>Claim a school</a></li>
                                        <li><a href=""><i className="mdi mdi-email"></i>Contact us</a></li>
                                        <li><a href=""><i className="mdi mdi-information"></i>About us</a></li>
                                        <li><a href=""><i className="mdi mdi-fingerprint"></i>Login</a></li>
                                    </ul>
                                    <ul className="side-nav" id="mobile-demo">
                                        <li><a href=""><i className="mdi mdi-home"></i>Home</a></li>
                                        <li><a href=""><i className="mdi mdi-account-plus"></i>Student signup</a></li>
                                        <li><a href=""><i className="mdi mdi-school"></i>Register a school</a></li>
                                        <li><a href=""><i className="mdi mdi-checkbox-marked-outline"></i>Claim a school</a></li>
                                        <li><a href=""><i className="mdi mdi-email"></i>Contact us</a></li>
                                        <li><a href=""><i className="mdi mdi-information"></i>About us</a></li>
                                        <li><a href=""><i className="mdi mdi-fingerprint"></i>Login</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
				</div>
                <div className="formWrapper">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col l3 m6 s12">
                                    <input id="icon_prefix" type="text" className="validate" />
                                    <label>Location</label>
                                </div>
                                <div className="input-field col l3 m6 s12">
                                    <input id="icon_school" type="tel" className="validate" />
                                    <label>School</label>
                                </div>
                                <div className="input-field col l3 m6 s12">
                                    <select>
                                        <option value="" disabled>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Materialize Select</label>
                                </div>
                                <div className="input-field col l3 m6 s12">
                                    <div className="range-slider-container">
                                        <div className="range-slider" data-step="1"></div>
                                        <div className="range-slider-value clearfix">
                                            <span>Price: &ensp;</span>
                                            <span id="min" className="min"></span>
                                            <span id="max" className="max"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
				<div className="contentWrapper">
					<div className="row">
                        <div className="col s12 m6 l3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://materializecss.com/images/sample-1.jpg" />
                                        <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://materializecss.com/images/office.jpg" />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://materializecss.com/images/sample-1.jpg" />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://materializecss.com/images/office.jpg" />
                                    <span className="card-title">Card Title</span>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
                <footer className="page-footer">
                    <div className="footer-copyright">
                        <div className="container">
                            <p className="center-align">
                                © 2017 Copyright Text
                            </p>
                        </div>
                    </div>
                </footer>
			</div>
		);
	}
}

export default Home;