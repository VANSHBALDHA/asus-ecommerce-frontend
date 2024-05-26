import React, { useState } from 'react';
import { Button, Spin, message } from 'antd';
import dynamic from 'next/dynamic';
const OTPInput = dynamic(() => import('otp-input-react'), { ssr: false });
import { GrPhone } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';

const NonGstCompanyLogin = () => {
    const [mode, setMode] = useState('phone');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState();
    const [phoneDisable, setPhoneDisable] = useState(true);

    const [email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState();
    const [emailDisable, setEmailDisable] = useState(true);

    const [showOtpWindow, setShowOtpWindow] = useState(false);

    const [showPhoneLoader, setShowPhoneLoader] = useState(false);
    const [showEmailLoader, setShowEmailLoader] = useState(false);

    const [phoneOTP, setPhoneOTP] = useState('');
    const [phoneOtpError, setPhoneOtpError] = useState({});
    const [showPhoneOtpLoader, setShowPhoneOtpLoader] = useState(false);

    const [emailOTP, setEmailOTP] = useState('');
    const [emailOtpError, setEmailOtpError] = useState({});
    const [showEmailOtpLoader, setShowEmailOtpLoader] = useState(false);

    const toggleMode = () => {
        setMode(mode === 'phone' ? 'email' : 'phone');
    };

    const handlePhoneNumberChange = (newPhoneNumber) => {
        let isValid = true;
        if (!newPhoneNumber) {
            setPhoneError('Please enter your mobile number');
            setPhoneDisable(true);
            isValid = false;
        } else if (newPhoneNumber.length !== 10) {
            setPhoneError('Your mobile number should be 10 digits');
            setPhoneDisable(true);
            isValid = false;
        } else {
            setPhoneError('');
            setPhoneDisable(false);
        }
        setPhoneNumber(newPhoneNumber);
        return isValid;
    };

    const handleEmailChange = (newEmail) => {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!newEmail) {
            setEmailError('Please enter your email address');
            setEmailDisable(true);
            isValid = false;
        } else if (!emailRegex.test(newEmail)) {
            setEmailError('Please enter a valid email address');
            setEmailDisable(true);
            isValid = false;
        } else {
            setEmailError('');
            setEmailDisable(false);
        }
        setEmail(newEmail);
        return isValid;
    };

    const handlePhoneLogin = () => {
        if (!phoneNumber) {
            setPhoneError('Please enter your mobile number');
        } else if (phoneNumber?.length !== 10) {
            setPhoneError('Your mobile number should be 10 digits');
        } else {
            setShowPhoneLoader(true);
            setTimeout(() => {
                console.log('Phone Login');
                setShowPhoneLoader(false);
                setShowOtpWindow(true);
            }, 3000);
        }
    };

    const handleEmailLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Please enter your email address');
        } else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setShowEmailLoader(true);
            setTimeout(() => {
                console.log('Email Login');
                setShowEmailLoader(false);
                setShowOtpWindow(true);
            }, 3000);
        }
    };

    const handlePhoneOtpChange = (value) => {
        setPhoneOTP(value);
        let errors = { ...phoneOtpError };
        if (!value.trim()) {
            errors.phoneOTP = 'OTP is required!';
        } else if (!/^\d{4}$/.test(value)) {
            errors.phoneOTP = 'Invalid OTP format!';
        } else {
            delete errors.phoneOTP;
        }
        setPhoneOtpError(errors);
    };

    const handleEmailOtpChange = (value) => {
        setEmailOTP(value);
        let errors = { ...emailOtpError };
        if (!value.trim()) {
            errors.emailOTP = 'OTP is required!';
        } else if (!/^\d{4}$/.test(value)) {
            errors.emailOTP = 'Invalid OTP format!';
        } else {
            delete errors.emailOTP;
        }
        setEmailOtpError(errors);
    };

    const handlePhoneOtpLogin = () => {
        const errors = {};
        if (!phoneOTP.trim()) {
            errors.phoneOTP = 'OTP is required!';
        } else if (!/^\d{4}$/.test(phoneOTP)) {
            errors.phoneOTP = 'Invalid OTP format!';
        }

        if (Object.keys(errors).length === 0) {
            setShowPhoneOtpLoader(true);
            setTimeout(() => {
                setShowPhoneOtpLoader(false);
                message.open({
                    type: 'success',
                    content: 'Login successfully',
                });
            }, 3000);
        } else {
            setPhoneOtpError(errors);
        }
    };

    const handleEmailOtpLogin = () => {
        const errors = {};
        if (!emailOTP.trim()) {
            errors.emailOTP = 'OTP is required!';
        } else if (!/^\d{4}$/.test(emailOTP)) {
            errors.emailOTP = 'Invalid OTP format!';
        }

        if (Object.keys(errors).length === 0) {
            setShowEmailOtpLoader(true);
            setTimeout(() => {
                setShowEmailOtpLoader(false);
                message.open({
                    type: 'success',
                    content: 'Login successfully',
                });
            }, 3000);
        } else {
            setEmailOtpError(errors);
        }
    };

    return (
        <>
            {/* For Enter Email Or Phone Number Field */}
            {showOtpWindow === false && (
                <div className="gst_register_form">
                    <div className="ps-form--account gst_register_form_field">
                        <div className="ps-tab active" id="register">
                            <div className="gst_register_form_content">
                                <h3 className="text-center mb-4">Login to your account
                                </h3>
                                <div>
                                    <p>
                                        Complainer : Kindly provide email or
                                        phone number here. Click on Email or
                                        Phone icon to access the other.
                                    </p>
                                    <label className="form-label" htmlFor={mode === 'phone' ? "phoneNumber" : "Email"}>
                                        {mode === 'phone' ? "Phone" : "Email"}
                                    </label>

                                    <div className="form-group">
                                        <div className="position-relative">
                                            <button
                                                onClick={toggleMode}
                                                className="email_phone_icon_btn">
                                                {mode === 'phone' ? (
                                                    <GrPhone
                                                        style={{
                                                            height: '23px',
                                                            width: '23px',
                                                            marginRight: '8px',
                                                        }}
                                                    />
                                                ) : (
                                                    <MdOutlineMail
                                                        style={{
                                                            height: '23px',
                                                            width: '23px',
                                                            marginRight: '8px',
                                                        }}
                                                    />
                                                )}
                                                <FaChevronDown />
                                            </button>
                                            <input
                                                className="form-control email_phone_input"
                                                maxLength={
                                                    mode === 'phone' ? 10 : ''
                                                }
                                                type={
                                                    mode === 'phone'
                                                        ? 'tel'
                                                        : 'email'
                                                }
                                                placeholder={
                                                    mode === 'phone'
                                                        ? 'Enter phone number'
                                                        : 'Enter email address'
                                                }
                                                value={
                                                    mode === 'phone'
                                                        ? phoneNumber
                                                        : email
                                                }
                                                onChange={
                                                    mode === 'phone'
                                                        ? (e) =>
                                                            handlePhoneNumberChange(
                                                                e.target.value
                                                            )
                                                        : (e) =>
                                                            handleEmailChange(
                                                                e.target.value
                                                            )
                                                }
                                            />
                                        </div>
                                        {mode === 'phone' ? (
                                            <>
                                                {phoneError && (
                                                    <div
                                                        className="text-danger"
                                                        style={{
                                                            fontWeight: '600',
                                                        }}>
                                                        {phoneError}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {EmailError && (
                                                    <div
                                                        className="text-danger"
                                                        style={{
                                                            fontWeight: '600',
                                                        }}>
                                                        {EmailError}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="remember-me"
                                            name="remember-me"
                                        />
                                        <label htmlFor="remember-me">
                                            Rememeber me
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    {mode === 'phone' ? (
                                        <>
                                            <div className="submit">
                                                <Button
                                                    className="register_gst_company_btn"
                                                    disabled={phoneDisable}
                                                    onClick={handlePhoneLogin}>
                                                    {showPhoneLoader ? (
                                                        <Spin />
                                                    ) : (
                                                        'Send OTP'
                                                    )}
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="submit">
                                                <Button
                                                    className="register_gst_company_btn"
                                                    disabled={emailDisable}
                                                    onClick={handleEmailLogin}>
                                                    {showEmailLoader ? (
                                                        <Spin />
                                                    ) : (
                                                        'Send OTP'
                                                    )}
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* For Enter OTP Field */}
            {showOtpWindow === true && (
                <div className="gst_register_form">
                    <div className="ps-form--account gst_register_form_field">
                        <div className="ps-tab active" id="register">
                            <div className="gst_register_form_content">
                                <h4 className="text-center mb-5">
                                    Enter Verification Code
                                </h4>
                                <div className="d-flex">
                                    <span>
                                        We have sent a verification code to
                                    </span>
                                    {mode === 'phone' ? (
                                        <p
                                            style={{
                                                marginLeft: '3px',
                                                color: '#fcb800',
                                            }}>
                                            {phoneNumber.substring(0, 2) +
                                                '*'.repeat(
                                                    phoneNumber.length - 4
                                                ) +
                                                phoneNumber.slice(-2)}
                                        </p>
                                    ) : (
                                        <p
                                            style={{
                                                marginLeft: '3px',
                                                color: '#fcb800',
                                            }}>
                                            {email}
                                        </p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <div className="otp_input_box">
                                        <OTPInput
                                            className="otp-container"
                                            autoFocus
                                            OTPLength={4}
                                            otpType="number"
                                            placeholder="0000"
                                            value={
                                                mode === 'phone'
                                                    ? phoneOTP
                                                    : emailOTP
                                            }
                                            onChange={
                                                mode === 'phone'
                                                    ? handlePhoneOtpChange
                                                    : handleEmailOtpChange
                                            }
                                        />
                                        {mode === 'phone' ? (
                                            <>
                                                {phoneOtpError.phoneOTP && (
                                                    <div
                                                        className="invalid-feedback"
                                                        style={{
                                                            fontSize: '14px',
                                                        }}>
                                                        <span>
                                                            {
                                                                phoneOtpError.phoneOTP
                                                            }
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {emailOtpError.emailOTP && (
                                                    <div
                                                        className="invalid-feedback"
                                                        style={{
                                                            fontSize: '14px',
                                                        }}>
                                                        <span>
                                                            {
                                                                emailOtpError.emailOTP
                                                            }
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    {mode === 'phone' ? (
                                        <>
                                            <div className="submit">
                                                <Button
                                                    className="register_gst_company_btn"
                                                    onClick={
                                                        handlePhoneOtpLogin
                                                    }>
                                                    {showPhoneOtpLoader ? (
                                                        <Spin />
                                                    ) : (
                                                        'Verify OTP'
                                                    )}
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="submit">
                                                <Button
                                                    className="register_gst_company_btn"
                                                    onClick={
                                                        handleEmailOtpLogin
                                                    }>
                                                    {showEmailOtpLoader ? (
                                                        <Spin />
                                                    ) : (
                                                        'Verify OTP'
                                                    )}
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NonGstCompanyLogin;
