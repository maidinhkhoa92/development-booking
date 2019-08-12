import React from 'react';
const Room = () => {
    return (
        <div className="arrow_box guest-traveler" >
            <div className="type-keyword col-xs-12">
                <span className="col-xs-11">Add Guest</span>
                
            </div>
            <div id="guest-box" className="show">
                <ul className="traveler-increase-decrease">
                    <li>
                        <span className="room">Room</span>
                        <span className="room-decrease">-</span>
                        <div className="hotel-room">1</div>
                        <span className="room-increase">+</span>
                    </li>
                    <li>
                        <span className="adult">Adult </span>
                        <span className="adult-decrease">-</span>
                        <div className="hotel-adult">2</div>
                        <span className="adult-increase">+</span>
                    </li>
                    <li>
                        <span className="child">Child (0-11)</span>
                        <span className="child-decrease">-</span>
                        <div className="hotel-child">0</div>
                        <span className="child-increase">+</span>
                    </li>
                    <div className="text-center children-age col-md-12 col-sm-12 col-xs-12" >Children's ages</div>
                    <div className="col-md-4 col-sm-4 col-xs-6 child-count smargin" >
                        <select className="form-control">
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
                </ul>
            </div>
        </div>
    )
}
export default Room;