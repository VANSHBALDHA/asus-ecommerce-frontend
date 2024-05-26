import React from 'react';
import Rating from '~/components/elements/Rating';

export default function ModuleStoreInformation({ store }) {
    if (store) {
        return (
            <div className="ps-block--vendor">
                <div className="ps-block__thumbnail">
                    <img
                        src="/static/img/vendor/vendor-store.jpg"
                        alt="martfury"
                    />
                </div>
                <div className="ps-block__container">
                    <div className="ps-block__header">
                        <h4>GLOBAL OFFICE</h4>
                        <Rating />
                        <p>
                            <strong>85% Positive</strong> (562 rating)
                        </p>
                    </div>
                    <div className="ps-block__divider"></div>
                    <div className="ps-block__content">
                        <p>
                            <strong>Digiworld US</strong>, New York’s no.1
                            online retailer was established in May 2012 with the
                            aim and vision to become the one-stop shop for
                            retail in New York with implementation of best
                            practices both online
                        </p>
                        <span className="ps-block__divider"></span>
                        <p>
                            <strong>325 Orchard Str, New York, United States (US)</strong> hello
                        </p>
                        <figure>
                            <figcaption>Foloow us on social</figcaption>
                            <ul className="ps-list--social-color">
                                <li>
                                    <a className="facebook" href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a className="linkedin" href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a className="feed" href="#">
                                        <i className="fa fa-feed" />
                                    </a>
                                </li>
                            </ul>
                        </figure>
                    </div>
                    <div className="ps-block__footer">
                        <p>
                            Call us directly
                            <strong>(+053) 77-637-3300</strong>
                        </p>
                        <p>or Or if you have any question</p>
                        <a
                            className="ps-btn ps-btn--fullwidth"
                            href="#"
                            onClick={(e) => e.preventDefault()}>
                            Contact Seller
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
