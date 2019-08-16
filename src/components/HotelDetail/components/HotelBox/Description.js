import React from 'react';

const Description = () => {
    return (
        <section id="description" className="margin outer-block">
            <h3>Hotel Description</h3>
            <div className="text-justify inner-block height">
                Shwe Htee River View (Yangon) was created for backpackers and budget travelers from around the world who want to visit with comfort at a cheapest price.<br />Shwe Htee is an accommodation for those who want a cozy and comfort stay while enjoying the time in Yangon downtown area.<br />Well-appointed accommodation, delightful decor and friendly services are also perfect for business and leisure travelers with easy access to businesses area and pretty price will make the stay as productive as possible.<br />
            </div>
            <div className="more-less">
                <a className="show-more" href="#"><i className="fa fa-caret-down"></i>show more</a>
                <a className="show-less" href="#"><i className="fa fa-caret-up"></i>show less</a>
            </div>
        </section>
    )
}

export default Description;