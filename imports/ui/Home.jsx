import React from 'react';

const style = {
    page: {
        overflow: 'hidden',
    }
};
   
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.changeFilterOption();
        this.state = {
            filterLocation: "",
            filterSchool: "",
            filterOption: "",
            selectValue:'Radish',
            schools: [
              {id: 1, location: 'North Carolina', school: "Combat New High School Teacher Burnout", option:"option 1",price:"100"},
              {id: 2, location: 'Fort Collins', school: "Help Teens Juggle Jobs, College Apps", option:"option 2",price:"300" },
              {id: 3, location: 'Chicago', school: "High School Freshman GPAs Matter", option:"option 1",price:"1000"},
              {id: 4, location: 'Minnesota', school: "Reel Teens Into the Classroom With Filmmaking", option:"option 2",price:"10"},
              {id: 5, location: 'New York', school: "Survive High School Without Counselors" , option:"option 1",price:"420"},
              {id: 6, location: 'California', school: "Don't Overlook LGBTQ History in High School", option:"option 3",price:"15000"}
            ]
        };
    }
     changeFilterLocation = (e) => {
        this.setState({filterLocation: e.target.value});
      }
      
      changeFilterSchool = (e) => {
        this.setState({filterSchool: e.target.value});
      }

      changeFilterOption = (e) => {
        console.log(3333);
        jQuery(".test").css({'border':"1px solid red!important"})
        jQuery(".test input").on('change',function(){
            console.log(1111);
        })
      }
	render(){
        let schools = this.state.schools.slice();
        if(this.state.filterLocation) {

          schools = schools.filter(item => item.location.toLowerCase().indexOf(this.state.filterLocation.toLowerCase()) !== -1);
        }
        if(this.state.filterSchool) {
           schools = schools.filter(item => item.school.toLowerCase().indexOf(this.state.filterSchool) !==-1);
        }
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
                                    <input id="icon_location" ref='location_val' type="text" className="validate" onChange={this.changeFilterLocation} />
                                    <label>Location</label>
                                </div>
                                <div className="input-field col l3 m6 s12">
                                    <input id="icon_school" type="tel" ref='icon_school' className="validate" onChange={this.changeFilterSchool} />
                                    <label>School</label>
                                </div>
                                <div className="input-field col l3 m6 s12">
                                      <select className='test'>
                                          <option value="0" disabled>Choose your option</option>
                                          <option value="1">Option 1</option>
                                          <option value="2">Option 2</option>
                                          <option value="3">Option 3</option>
                                      </select>
                                </div>
                                <div className="input-field col l3 m6 s12">
                                    <div className="range-slider-container center-align">
                                        <span>Price &ensp;</span>
                                        <div className="range-slider" data-step="1"></div>
                                        <div className="range-slider-value clearfix">
                                            <span id="min" className="min"></span> - 
                                            <span id="max" className="max"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="tableWrapper">
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>School</th>
                                <th>Option</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                schools.map(function(item){
                                    return(
                                        <tr key={item.id}>
                                            <th>{item.location}</th>
                                            <th>{item.school}</th>
                                            <th>{item.option}</th>
                                            <th>{item.price}</th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
                <div className='imageWrapper'>
                    <div className="row">
                        <img src='https://www.resolutets.com/wp-content/uploads/2013/06/Dark-Modern-Office-Background1.png'/>
                    </div>
                </div>
                <div className="contentWrapper">
                    <div className="row">
                        <div className="col s12 m6 l4 chief_card">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://materializecss.com/images/sample-1.jpg" className='first_image' />
                                </div>
                                 <div className="card-image-second">
                                    <img src="https://cdn.decoist.com/wp-content/uploads/2016/06/Greenery-outside-becomes-a-part-of-the-home-office.jpg" className='second_image' />
                                </div>
                                <div className="card-image-three">
                                    
                                </div>
                                <div className="card-content center-align">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4 chief_card">
                            <div className="card">
                                <div className="card-image">
                                    <img src="https://i.pinimg.com/736x/4e/65/a9/4e65a9a36859704a832c13291fe52be9--reading-room-love-reading.jpg" className='first_image' />
                                </div>
                                 <div className="card-image-second">
                                    <img src="https://media.istockphoto.com/photos/sunrise-on-yosemite-valley-picture-id505872990?k=6&m=505872990&s=612x612&w=0&h=XcdHhkC9PF9-saYT6n_GQD-0Hf8dbI_Q4wfYlZZGpNk=" className='second_image' />
                                </div>
                                <div className="card-image-three">
                                    
                                </div>
                                <div className="card-content center-align">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>


                        <div className="col s12 m6 l4 chief_card">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://blogs.kqed.org/pressroom/files/2017/03/1007.jpg" className='first_image' />
                                </div>
                                 <div className="card-image-second">
                                    <img src="https://mindfuldesignconsulting.com/wp-content/uploads/2014/08/office-interior-design-connected-to-nature.jpg" className='second_image' />
                                </div>
                                <div className="card-image-three">
                                    
                                </div>
                                <div className="card-content center-align">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>



                        <div className="col s12 m6 l4 chief_card">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://officesnapshots.com/wp-content/uploads/2013/11/TSF_HTFIsrael_LSC_print3.jpg" className='first_image' />
                                </div>
                                 <div className="card-image-second">
                                    <img src="https://i.ytimg.com/vi/YrddaP6ml1M/maxresdefault.jpg" className='second_image' />
                                </div>
                                <div className="card-image-three">
                                    
                                </div>
                                <div className="card-content center-align">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4 chief_card">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://www.artinnaturephotography.com/images/xl/prusik-peak-enchantments-larches-20111013_0735.jpg" className='first_image' />
                                </div>
                                 <div className="card-image-second">
                                    <img src="https://www.domusweb.it/en/architecture/2017/06/26/office_solo_house/_jcr_content/image-preview.img.rmedium.jpg/1498466682400.jpg" className='second_image' />
                                </div>
                                <div className="card-image-three">
                                    
                                </div>
                                <div className="card-content center-align">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6 l4 chief_card">
                            <div className="card">
                                <div className="card-image">
                                    <img src="http://i2.cdn.turner.com/cnn/dam/assets/140122152451-google-offices-tel-aviv-2-horizontal-gallery.jpg" className='first_image' />
                                </div>
                                 <div className="card-image-second">
                                    <img src="http://www.bahai.org/chrome/img/beliefs/nature-feature-img.jpg?f0550045" className='second_image' />
                                </div>
                                <div className="card-image-three">
                                    
                                </div>
                                <div className="card-content center-align">
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