import React, { useState } from 'react';
import { Button, Spin, message } from 'antd';
import dynamic from 'next/dynamic';
const OTPInput = dynamic(() => import('otp-input-react'), { ssr: false });

const GstCompanyLogin = () => {
    const [input, setInput] = useState({
        gstNo: '',
        phoneNo: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const [otp, setOtp] = useState('');
    const [otpErrors, setOtpErrors] = useState({});
    const [showOtpLoader, setShowOtpLoader] = useState(false);

    const [showOtpWindow, setShowOtpWindow] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    // For  input change and function
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setInput((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        let errors = { ...formErrors };
        if (name === 'gstNo') {
            if (!value.trim()) {
                errors.gstNo = 'GST number is required!';
            } else if (
                !/^([0-9]{2})([A-Za-z]{5})([0-9]{4})([A-Za-z]{1})([1-9]{1})(Z|z)([0-9]{1})$/.test(
                    value
                )
            ) {
                errors.gstNo = 'Invalid GST number format!';
            } else {
                delete errors.gstNo;
            }
        }
        if (name === 'phoneNo') {
            if (!value.trim()) {
                errors.phoneNo = 'Phone number is required!';
            } else if (!/^\d{10}$/.test(value)) {
                errors.phoneNo = 'Invalid phone number format!';
            } else {
                delete errors.phoneNo;
            }
        }
        setFormErrors(errors);
    };

    const handleLoginClick = () => {
        const errors = {};
        if (!input.gstNo.trim()) {
            errors.gstNo = 'GST number is required!';
        } else if (
            !/^([0-9]{2})([A-Za-z]{5})([0-9]{4})([A-Za-z]{1})([1-9]{1})(Z|z)([0-9]{1})$/.test(
                input.gstNo
            )
        ) {
            errors.gstNo = 'Invalid GST number format!';
        }
        if (!input.phoneNo.trim()) {
            errors.phoneNo = 'Phone number is required!';
        } else if (!/^\d{10}$/.test(input.phoneNo)) {
            errors.phoneNo = 'Invalid phone number format!';
        }

        if (Object.keys(errors).length === 0) {
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false);
                setShowOtpWindow(true);
            }, 3000);
        } else {
            setFormErrors(errors);
        }
    };

    // For OTP input change and function
    const handleOtpChange = (value) => {
        setOtp(value);
        let errors = { ...otpErrors };
        if (!value.trim()) {
            errors.otp = 'OTP is required!';
        } else if (!/^\d{4}$/.test(value)) {
            errors.otp = 'Invalid OTP format!';
        } else {
            delete errors.otp;
        }
        setOtpErrors(errors);
    };

    const handleSubmit = () => {
        const errors = {};
        if (!otp.trim()) {
            errors.otp = 'OTP is required!';
        } else if (!/^\d{4}$/.test(otp)) {
            errors.otp = 'Invalid OTP format!';
        }

        if (Object.keys(errors).length === 0) {
            setShowOtpLoader(true);
            setTimeout(() => {
                setShowOtpLoader(false);
                message.open({
                    type: 'success',
                    content: 'Login Successfully',
                });
            }, 3000);
        } else {
            setOtpErrors(errors);
        }
    };

    return (
        <>
            {/* For Enter Gst and Phone Number Field */}
            {showOtpWindow === false && (
                <div className="gst_register_form">
                    <div className="ps-form--account gst_register_form_field">
                        <div className="ps-tab active" id="register">
                            <div className="gst_register_form_content">
                                <h3 className="text-center mb-4">Login to your account
                                </h3>
                                <label className="form-label" htmlFor="gstNo">
                                    GST number
                                </label>
                                <div className="form-group">
                                    <input
                                        className={`form-control ${formErrors.gstNo ? 'is-invalid' : ''
                                            }`}
                                        name="gstNo"
                                        type="text"
                                        placeholder="Enter GST number"
                                        value={input?.gstNo}
                                        onChange={(e) => handleFieldChange(e)}
                                    />
                                    {formErrors.gstNo && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ fontSize: '14px' }}>
                                            <span>{formErrors.gstNo}</span>
                                        </div>
                                    )}
                                </div>
                                <label className="form-label" htmlFor="phoneNo">
                                    Phone number
                                </label>
                                <div className="form-group">
                                    <input
                                        className={`form-control ${formErrors.phoneNo
                                            ? 'is-invalid'
                                            : ''
                                            }`}
                                        name="phoneNo"
                                        type="tel"
                                        placeholder="Enter phone number"
                                        maxLength={10}
                                        value={input?.phoneNo}
                                        onChange={(e) => handleFieldChange(e)}
                                    />{' '}
                                    {formErrors.phoneNo && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ fontSize: '14px' }}>
                                            <span>{formErrors.phoneNo}</span>
                                        </div>
                                    )}
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
                                <div className="submit">
                                    <Button
                                        className="register_gst_company_btn"
                                        onClick={handleLoginClick}>
                                        {showLoader ? <Spin /> : 'Login'}
                                    </Button>
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
                                    </span><p
                                        style={{
                                            marginLeft: '3px',
                                            color: '#fcb800',
                                        }}>
                                        {input?.phoneNo.substring(0, 2) +
                                            '*'.repeat(
                                                input?.phoneNo.length - 4
                                            ) +
                                            input?.phoneNo.slice(-2)}
                                    </p>
                                </div>
                                <div className="form-group">
                                    <div className="otp_input_box">
                                        <OTPInput
                                            className={`otp-container ${otpErrors.otp
                                                ? 'is-invalid'
                                                : ''
                                                }`}
                                            autoFocus
                                            OTPLength={4}
                                            otpType="number"
                                            placeholder="0000"
                                            value={otp}
                                            onChange={handleOtpChange}
                                        />
                                        {otpErrors.otp && (
                                            <div
                                                className="invalid-feedback"
                                                style={{ fontSize: '14px' }}>
                                                <span>{otpErrors.otp}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="submit">
                                    <Button
                                        className="register_gst_company_btn"
                                        onClick={handleSubmit}>
                                        {showOtpLoader ? <Spin /> : 'Submit'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GstCompanyLogin;
