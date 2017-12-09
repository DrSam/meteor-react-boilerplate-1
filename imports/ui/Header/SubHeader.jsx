import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {ArrowDropDown, LocationOn} from 'material-ui-icons';

import HeaderInput from './HeaderInput';
const styles = {
  paper: {
    padding: 16,
    textAlign: 'center',
  },
  subjectRow: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  priceInput:{
    color: '#fff'
  },
  endPricePadding:{padding: '0 5px'},
  startPriceMonth:{padding: '0 8px'}
};

class SubHeader extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      location: '',
      schoolName:'',
      skillCategory:'',
      experienceLevel:'',
      age: '',
      gender: '',
      chipData: [
        {key: 0, label: 'Acrobatics'},
        {key: 1, label: 'Trapeze'},
      ],
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {gender, skillCategory, experienceLevel} = this.state;
    return (
      <div>
        <div className="subheader-wrapper">
          <Grid container spacing={0} className="grid-bg">
            <form className="subheader-form">
              <Grid container>
                <Grid item xs>
                  <div className="circle-icon">
                    <ArrowDropDown className="dropdown-icon"/>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Grid container spacing={0} className="grids-inner">
                    <Grid item xs={12} sm={4} className="input-box">
                      <HeaderInput
                        id="location"
                        name="location"
                        placeholder="Location"
                        className="subheader-input location"
                      />
                      <LocationOn color="#fff" className="input-icons"/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Select
                        value={skillCategory}
                        onChange={this.handleChange}
                        displayEmpty
                        className="subheader-input gender"
                        name="skillCategory"
                        disableUnderline="true">
                        <MenuItem value="">
                          <span>Skill Category</span>
                        </MenuItem>
                        <MenuItem value={1}>Category1</MenuItem>
                        <MenuItem value={2}>Category2</MenuItem>
                        <MenuItem value={3}>Category3</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Select
                        value={gender}
                        onChange={this.handleChange}
                        displayEmpty
                        className="subheader-input gender"
                        name="gender"
                        disableUnderline="true">
                        <MenuItem value="">
                          <span>Gender: All</span>
                        </MenuItem>
                        <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} sm={5}>
                  <div className="subjects subheader-input">
                    <div style={styles.subjectRow}>
                      <span className="white subject">Subjects: </span>
                      {this.state.chipData.map((data) => {
                        return (<Chip
                          label={data.label}
                          key={data.key}
                          onRequestDelete={this.handleChange}
                          className="chip"
                        />);
                      })}
                    </div>
                  </div>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Grid container spacing={0} className="grids-inner">
                    <Grid item xs={12} sm={4} className="input-box">
                      {/*<Place color="gray" className="search-icon" />*/}
                      <HeaderInput
                        id="schoolName"
                        name="schoolName"
                        placeholder="School Name"
                        className="subheader-input location"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Select
                        value={experienceLevel}
                        onChange={this.handleChange}
                        displayEmpty
                        className="subheader-input gender"
                        name="experienceLevel"
                        disableUnderline="true">
                        <MenuItem value="">
                          <span>Experience Level: All</span>
                        </MenuItem>
                        <MenuItem value={1}>Level1</MenuItem>
                        <MenuItem value={2}>Level2</MenuItem>
                        <MenuItem value={3}>Level3</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <HeaderInput
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Age : 16"
                        className="subheader-input location"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} sm={5}>
                  <div className="price-input">
                    <div style={styles.priceInput}>
                      <Grid container item xs={12} sm={12} spacing={8}>
                        <Grid container spacing={0} className="grids-inner">
                          <Grid item xs sm={3}>
                            <span> Price per class: </span>
                          </Grid>
                          <Grid item xs sm={1}>
                            <HeaderInput
                              id="start-price"
                              name="start-price"
                              value={'1'}
                              type="number"
                              className="start-price price-box"
                            />
                          </Grid>
                          <Grid item xs sm={1}>
                            <span style={styles.endPricePadding}>to</span>
                          </Grid>
                          <Grid item xs sm={1}>
                            <HeaderInput
                              id="end-price"
                              name="end-price"
                              value={'16'}
                              type="number"
                              className="end-price price-box"
                            />
                          </Grid>
                          <Grid item xs sm={3}>
                            <span style={styles.startPriceMonth}> Price per Month: </span>
                          </Grid>
                          <Grid item xs sm={1}>
                            <HeaderInput
                              id="start-price-month"
                              name="start-price-month"
                              value={'1'}
                              type="number"
                              className="start-price price-box"
                            />
                          </Grid>
                          <Grid item xs sm={1}>
                            <span style={styles.endPricePadding}>to</span>
                          </Grid>
                          <Grid item xs sm={1}>
                            <HeaderInput
                              id="end-price-month"
                              name="end-price-month"
                              type="number"
                              value={'250'}
                              className="end-price price-box"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SubHeader;