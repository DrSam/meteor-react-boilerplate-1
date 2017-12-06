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
                    </header>
				</div>
                <div className="formWrapper">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col l2">
                                    <input id="icon_prefix" type="text" className="validate" />
                                    <label>Location</label>
                                </div>
                                <div className="input-field col l2">
                                    <input id="icon_school" type="tel" className="validate" />
                                    <label>School</label>
                                </div>
                                <div className="input-field col l2">
                                    <select>
                                        <option value="" disabled>Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Materialize Select</label>
                                </div>
                                <div className="input-field col l3">
                                    <div className="range-slider-container">
                                        <div className="range-slider" data-step="1"></div>
                                        <div className="range-slider-value clearfix">
                                            <span>Price: &ensp;</span>
                                            <span id="min" className="min"></span>
                                            <span id="max" className="max"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-field col l3">
                                    <div className="range-slider-container">
                                        <div className="range-slider" data-step="3"></div>
                                        <div className="range-slider-value clearfix">
                                            <span>Price: &ensp;</span>
                                            <span id="min1" className="min"></span>
                                            <span id="max1" className="max"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
				<div className="contentWrapper">
					<div className="row">
                        <div className="col l3">
                            <div className="card card_item">
                                <div className="card-image item_image">
                                    <img src="http://5esd.com/wp-content/uploads/2015/08/Banner3.jpg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Kenyon's Soo Bahk Do</span>
                                    <p>Starting $15/Month</p>
                                </div>
                                <div className="card-action">
                                    <a href="" className="waves-effect waves-light btn">Join class</a>
                                </div>
                            </div>
                        </div>
                        <div className="col l3">
                            <div className="card card_item">
                                <div className="card-image item_image">
                                    <img src="http://sdcombatacademy.com/wp-content/uploads/sites/12/2015/04/xsdca-geo.jpg.pagespeed.ic.6z0kmD1J39.webp" alt=""/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">San Diego Combat Academy</span>
                                    <p>Starting $10/Month</p>
                                </div>
                                <div className="card-action">
                                    <a href="" className="waves-effect waves-light btn">Join class</a>
                                </div>
                            </div>
                        </div>
                        <div className="col l3">
                            <div className="card card_item">
                                <div className="card-image item_image">
                                    <img src="https://www.skillshape.com/images/SkillShape-Whitesmoke.png" alt=""/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Manna's Martial Arts</span>
                                    <p>Starting $12/Month</p>
                                </div>
                                <div className="card-action">
                                    <a href="" className="waves-effect waves-light btn">Join class</a>
                                </div>
                            </div>
                        </div>
                        <div className="col l3">
                            <div className="card card_item">
                                <div className="card-image item_image">
                                    <img src="http://impactkravmaga.com/wp-content/uploads/2015/04/san-diego-krav-maga-class1.jpg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Yoga at Bird Rock Yoga</span>
                                    <p>Starting $135/Month</p>
                                </div>
                                <div className="card-action">
                                    <a href="" className="waves-effect waves-light btn">Join class</a>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;