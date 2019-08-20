import React from 'react';
import Item from './Item';
import _ from 'lodash';

const ListHotel = ({list, onClick}) => {
    return (
        <div className="hotel-tab">
            <div className="active tab-pane">
                {
                    _.map(list, (item, key) => {
                        return (
                            <Item item={item} key={key} onClick={onClick} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListHotel;