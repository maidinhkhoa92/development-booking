import React from 'react';
import _ from 'lodash';

class Room extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            age: []
        }
    }
    changeNumber = (type, value) => {
        const number = this.props.params[type] + value
        this.props.setParams({[type]: number})
    }

    checkLimit = (max, min, value, type) => {
        if(value > 0 && this.props.params[type] < max) {
            this.changeNumber(type, value);
            if(type === "ChildCount") {
                this.setState(prevState => ({
                    age: [...prevState.age, 1]
                }),() => {
                    this.props.setParams({ChildAge: this.state.age})
                })
            }
        } else if(value <= 0 && this.props.params[type] > min) {
            this.changeNumber(type, value);
            if(type === "ChildCount") {
                this.setState({
                    age: [...this.state.age.slice(0, -1)]
                }, () => {
                    this.props.setParams({ChildAge: this.state.age})
                });
            }
        }
    }

    defineAge = (i, e) => {
        const value = e.target.value; 
        let params = this.state.age;
        params[i] = value;
        return params
    }

    render() {
        const {setToggle, setParams, params} = this.props;
        return (
            <div className="arrow_box guest-traveler" >
                <div className="type-keyword col-xs-12">
                    <span className="col-xs-11">Add Guest</span>
                    <i onClick={() => setToggle('room', false)} className="fa fa-times drop-down-icon"></i>
                </div>
                <div id="guest-box" className="show">
                    <ul className="traveler-increase-decrease">
                        <li>
                            <span className="room">Room</span>
                            <span className="room-decrease" onClick={() => this.checkLimit(9, 1, -1, 'NoOfRooms')}>-</span>
                            <div className="hotel-room">{params.NoOfRooms}</div>
                            <span className="room-increase" onClick={() => this.checkLimit(9, 1, 1, 'NoOfRooms')}>+</span>
                        </li>
                        <li>
                            <span className="adult">Adult </span>
                            <span className="adult-decrease" onClick={() => this.checkLimit(9, 1, -1, 'AdultCount')}>-</span>
                            <div className="hotel-adult">{params.AdultCount}</div>
                            <span className="adult-increase" onClick={() => this.checkLimit(99, 1, 1, 'AdultCount')}>+</span>
                        </li>
                        <li>
                            <span className="child">Child (0-11)</span>
                            <span className="child-decrease" onClick={() => this.checkLimit(9, 0, -1, 'ChildCount')}>-</span>
                            <div className="hotel-child">{params.ChildCount}</div>
                            <span className="child-increase" onClick={() => this.checkLimit(9, 0, 1, 'ChildCount')}>+</span>
                        </li>
                            <div className="row">
                                <div className="text-center children-age col-md-12 col-sm-12 col-xs-12" >Children's ages</div>
                            </div>
                            <div className="row">
                                {
                                    params.ChildCount > 0
                                    && 
                                    _.map(this.state.age, (item, i) => {
                                        return (
                                            <div key={i} className="col-md-4 col-sm-4 col-xs-6 child-count smargin" >
                                                <select 
                                                    className="form-control" 
                                                    onChange={e => { setParams({ChildAge: this.defineAge(i, e) })}}
                                                >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                </select>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Room;