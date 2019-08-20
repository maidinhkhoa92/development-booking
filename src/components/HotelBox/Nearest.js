import React from 'react';

const Nearest = () => {
    return (
        <section id="nearest" className="margin outer-block">
            <h3>Nearest Essential</h3>
            <div className="inner-block npadding height">
                <div className="row">
                    <div className="essential col-xs-6 col-sm-6 col-md-3">
                        <div className="essential-icon">
                            <img src="https://cdn.owaytrip.com/extranet/landmarks/airport.png" alt="Hotel Amenities" />
                        </div>
                        <div className="essential-name">
                            <span className="full-block">
                                Airport                                                </span>

                            <span className="full-block">
                                16 KM                                                </span>
                            <span className="full-block">
                                Yangon internation airport                                                </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-less">
                <a className="show-more" title="Hotel Nearest Essential"><i className="fa fa-caret-down"></i>show more</a>
                <a className="show-less" title="Hotel Nearest Essential"><i className="fa fa-caret-up"></i>show less</a>
            </div>
        </section>
    )
}
export default Nearest;