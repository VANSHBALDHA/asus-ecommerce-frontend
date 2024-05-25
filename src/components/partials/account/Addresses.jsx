import React from 'react';
import Link from 'next/link';

export default function Addresses() {
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
            icon: 'icon-user',
        },
        {
            text: 'Change Password',
            url: '/account/change-password',
            icon: 'icon-user',
        },
        {
            text: 'Manage Users',
            url: '/account/manage-users',
            icon: 'icon-user',
        },
        {
            text: 'Manage Orders',
            url: '/account/manage-orders',
            icon: 'icon-alarm-ringing',
        },
        {
            text: 'Save Cards',
            url: '/account/save-card',
            icon: 'icon-papers',
        },
        {
            text: 'Manage Address',
            url: '/account/addresses',
            icon: 'icon-map-marker',
            active: true,
        }, 
        {
            text: 'Wishlist',
            url: '/account/wishlist',
            icon: 'icon-heart',
        },
        {
            text: 'Manage Cart',
            url: '/account/shopping-cart',
            icon: 'icon-map-marker',
        },
        {
            text: 'Manage Quote',
            url: '/account/manage-quote',
            icon: 'icon-map-marker',
        },
        {
            text: 'Message Ticket',
            url: '/account/message-ticket',
            icon: 'icon-map-marker',
        },

    ];
    return (
        <section className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ps-section__left">
                            <aside className="ps-widget--account-dashboard">
                                <div className="ps-widget__header">
                                    <img src="/static/img/users/3.jpg" />
                                    <figure>
                                        <figcaption>Hello</figcaption>
                                        <p>username@gmail.com</p>
                                    </figure>
                                </div>
                                <div className="ps-widget__content">
                                    <ul>
                                        {accountLinks.map((link) => (
                                            <li
                                                key={link.text}
                                                className={
                                                    link.active ? 'active' : ''
                                                }>
                                                <Link href={link.url}>
                                                    <i className={link.icon} />
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link href="/account/my-account">
                                                <i className="icon-power-switch" />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-section--account-setting">
                            <div className="ps-section__content">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <figure className="ps-block--address">
                                            <figcaption>
                                                Billing address
                                            </figcaption>
                                            <div className="ps-block__content">
                                                <p>
                                                    You Have Not Set Up This
                                                    Type Of Address Yet.
                                                </p>
                                                <Link href="/account/edit-address">
                                                    Edit
                                                </Link>
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <figure className="ps-block--address">
                                            <figcaption>
                                                Shipping address
                                            </figcaption>
                                            <div className="ps-block__content">
                                                <p>
                                                    You Have Not Set Up This
                                                    Type Of Address Yet.
                                                </p>
                                                <Link href="/account/edit-address">
                                                    Edit
                                                </Link>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
