import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import OTPInput from 'otp-input-react';

import { Button, Spin, message } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'
const OTPInput = dynamic(() => import('otp-input-react'), { ssr: false });

const GstCompanyRegister = (props) => {
    const [passShow, setPassShow] = useState(false);
    const [gstNumber, setGstNumber] = useState('');
    const [gstNumberError, setGstNumberError] = useState('');

    const [phoneNoerrors, setPhoneNoErrors] = useState({});

    const [emailErrors, setEmailErrors] = useState({});
    const [emailOtpErrors, setEmailOtpErrors] = useState({});

    const [showCompanyName, setShowCompanyName] = useState('');

    const [gstSpinner, setGstSpinner] = useState(false);
    const [isGSTVerified, setIsGSTVerified] = useState(false);
    const [companyNameNot, setCompanyNameNot] = useState('');

    const [phoneSpinner, setPhoneSpinner] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [phoneVerifySpinner, setPhoneVerifySpinner] = useState(false);
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [phoneDisable, setPhoneDisable] = useState(false);
    const [phoneOtp, setPhoneOtp] = useState('');
    const [successOtp, setSuccessOtp] = useState(false);
    const [phoneOtpError, setPhoneOtpError] = useState('');

    const [emailSpinner, setEmailSpinner] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [emailDisable, setEmailDisable] = useState(false);
    const [showOtpEmail, setShowOtpEmail] = useState(false);
    const [emailVerifySpinner, setEmailVerifySpinner] = useState(false);
    const [emailOtp, setEmailOtp] = useState('');
    const [successEmailOtp, setSuccessEmailOtp] = useState(false);
    const [emailOtpError, setEmailOtpError] = useState('');

    const [secondbtn, setSecondBtn] = useState(false);

    const [data, setData] = useState({
        name: '',
        email: '',
        designation: '',
        phone: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleGSTChange = (newGstNumber) => {
        let isValid = true;
        const gstRegex =
            /^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{1}[Z]{1}[0-9A-Za-z]{1}$/;
        if (!newGstNumber) {
            setGstNumberError('Please enter your GST number');
            isValid = false;
        } else if (!gstRegex.test(newGstNumber)) {
            setGstNumberError('Please enter a valid GST number');
            isValid = false;
        } else {
            setGstNumberError('');
        }
        setGstNumber(newGstNumber);
        return isValid;
    };

    const handleFocus = () => {
        setCompanyNameNot('');
    };

    const handleVerifyGstNumber = () => {
        const gstRegex =
            /^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{1}[Z]{1}[0-9A-Za-z]{1}$/;
        if (!gstNumber) {
            setGstNumberError('Please enter your GST number');
        } else if (!gstRegex.test(gstNumber)) {
            setGstNumberError('Please enter a valid GST number');
        } else {
            setGstSpinner(true);
            axios
                .get(
                    `https://sheet.gstincheck.co.in/check/96cae1a28964dad22bb0e2aeb8df0d6e/${gstNumber}`
                )
                .then((res) => {
                    if (res?.data?.flag === true) {
                        setShowCompanyName(res?.data?.data?.tradeNam);
                        setIsGSTVerified(true);
                        setGstSpinner(false);
                    } else {
                        setCompanyNameNot(res?.data?.message);
                        setIsGSTVerified(true);
                        setGstSpinner(false);
                    }
                })
                .catch((err) => console.log('Error:', err));
        }
    };

    const handleNext = () => {
        setPassShow(true);
    };

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        let errors = { ...formErrors };
        if (name === 'name' && !value.trim()) {
            errors.name = 'Name is required!';
        } else {
            delete errors.name;
        }
        if (name === 'designation' && !value.trim()) {
            errors.designation = 'Designation is required!';
        } else {
            delete errors.designation;
        }
        setFormErrors(errors);
    };

    const PhoneNoValidation = (phone) => {
        let errors = {};
        let isValid = true;

        if (!phone) {
            isValid = false;
            errors['phone'] = 'Phone number is required!';
        } else if (!/^[0-9]{10}$/.test(phone)) {
            errors['phone'] = 'Invalid phone number format';
            isValid = false;
        }

        setPhoneNoErrors((prevErrors) => ({ ...prevErrors, ...errors }));
        return isValid;
    };

    const handlePhoneChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (phoneNoerrors[name]) {
            setPhoneNoErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleSendPhoneOtp = () => {
        if (PhoneNoValidation(data.phone)) {
            setPhoneSpinner(true);
            setTimeout(() => {
                setPhoneSpinner(false);
                setShowOtpInput(true);
            }, 3000);
        }
    };

    const handleVerifyOTP = () => {
        const isValidOTP = phoneOtp.length === 4;
        if (isValidOTP) {
            console.log('otp', phoneOtp);
            setPhoneVerifySpinner(true);
            setTimeout(() => {
                setPhoneVerifySpinner(false);
                setShowOtpInput(false);
                setIsPhoneVerified(true);
                setPhoneDisable(true);
                setSuccessOtp(true);
            }, 3000);
        } else if (!isValidOTP) {
            setPhoneOtpError('Please Enter Valid OTP');
        }
    };

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (emailErrors[name]) {
            setEmailErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const EmailOtpValidation = () => {
        let errors = {};
        let isValid = true;

        if (!data['email']) {
            isValid = false;
            errors['email'] = 'Email is required!';
        } else if (!/^\S+@\S+\.\S+$/.test(data['email'])) {
            errors['email'] = 'Invalid email format';
            isValid = false;
        }

        setEmailErrors((prevErrors) => ({ ...prevErrors, ...errors }));
        return isValid;
    };

    const handleSendEmailOtp = () => {
        if (EmailOtpValidation()) {
            setEmailSpinner(true);
            setTimeout(() => {
                setEmailSpinner(false);
                setShowOtpEmail(true);
            }, 3000);
        }
    };

    const handleVerifyOTPEmail = () => {
        const isValidOTP = emailOtp.length === 4;
        if (isValidOTP) {
            setEmailVerifySpinner(true);
            setTimeout(() => {
                setEmailVerifySpinner(false);
                setShowOtpEmail(false);
                setIsEmailVerified(true);
                setEmailDisable(true);
                setSecondBtn(true);
                setSuccessEmailOtp(true);
            }, 3000);
        } else if (!isValidOTP) {
            setEmailOtpError('Please Enter Valid OTP');
        }
    };

    const handleVerifyForm = () => {
        message.open({
            type: 'success',
            content: 'Registration process has been completed.',
        });
        setData({
            name: '',
            email: '',
            designation: '',
            phone: '',
        });
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

    useEffect(() => {
        // Reset phone number when the form is closed
        return () => {
            setGstNumber('');
            setIsGSTVerified(false);
            setGstNumberError('');
            setCompanyNameNot('');
        };
    }, [passShow]);

    return (
        <>
            {passShow === false && (
                <div className="gst_register_form">
                    <div className="ps-form--account gst_register_form_field">
                        <div className="ps-tab active" id="register">
                            <div className="gst_register_form_content">
                                <h5>Register to your account</h5>
                                <label className="form-label" htmlFor="gstNumber">
                                    GST number
                                </label>
                                <div
                                    className={`form-group position-relative ${showCompanyName || companyNameNot
                                        ? 'm-0'
                                        : ''
                                        }`}>
                                    <input
                                        className={`form-control ${gstNumberError && 'is-invalid'
                                            }`}
                                        name="gstNumber"
                                        type="text"
                                        placeholder="Enter GST number"
                                        value={gstNumber}
                                        onChange={(e) =>
                                            handleGSTChange(e.target.value)
                                        }
                                        onFocus={handleFocus}
                                    />

                                    {gstNumberError && (
                                        <div
                                            className="text-danger position-absolute"
                                            style={{
                                                fontWeight: '600',
                                            }}>
                                            {gstNumberError}
                                        </div>
                                    )}
                                    <button
                                        className="send_no_otp_btn"
                                        onClick={() => handleVerifyGstNumber()}>
                                        {gstSpinner ? (
                                            <Spin />
                                        ) : isGSTVerified ? (
                                            <CheckOutlined />
                                        ) : (
                                            'Verify'
                                        )}
                                    </button>
                                </div>

                                {companyNameNot && (
                                    <div>
                                        <span className="company_name">
                                            <b>{companyNameNot}</b>
                                        </span>
                                    </div>
                                )}

                                {showCompanyName && (
                                    <div>
                                        <span className="company_name">
                                            Company Name : &nbsp;
                                            <b>{showCompanyName}</b>
                                        </span>
                                    </div>
                                )}

                                <div className="submit">
                                    <Button
                                        onClick={handleNext}
                                        disabled={!companyNameNot}
                                        className="register_gst_company_btn">
                                        {companyNameNot ? 'Next' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {passShow === true && (
                <div className="gst_register_form">
                    <div className="ps-form--account gst_register_form_field">
                        <div className="ps-tab active" id="register">
                            <div className="gst_register_form_content">
                                <h5>Provide your details here</h5>
                                <label className="form-label" htmlFor="name">
                                    Full name
                                </label>
                                <div className="form-group">
                                    <input
                                        className={`form-control ${formErrors.name ? 'is-invalid' : ''
                                            }`}
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={(e) => handleNameChange(e)}
                                    />
                                    {formErrors.name && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ fontSize: '14px' }}>
                                            <span>{formErrors.name}</span>
                                        </div>
                                    )}
                                </div>
                                <label className="form-label" htmlFor="designation">
                                    Designation
                                </label>
                                <div className="form-group">
                                    <input
                                        className={`form-control ${formErrors.designation
                                            ? 'is-invalid'
                                            : ''
                                            }`}
                                        name="designation"
                                        type="text"
                                        placeholder="Enter your designation"
                                        onChange={(e) => handleNameChange(e)}
                                    />
                                    {formErrors.designation && (
                                        <div
                                            className="invalid-feedback"
                                            style={{ fontSize: '14px' }}>
                                            <span>
                                                {formErrors.designation}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <label className="form-label" htmlFor="phone">
                                    Phone
                                </label>
                                <div className="form-group">
                                    <div className="position-relative">
                                        <input
                                            className={`form-control ${phoneNoerrors.phone &&
                                                'is-invalid'
                                                }`}
                                            type="number"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            disabled={phoneDisable}
                                            onChange={(e) =>
                                                handlePhoneChange(e)
                                            }
                                        />
                                        {/* <PhoneInput
                                            country={'in'}
                                            disableDropdown={true}
                                            disableCountryCode={true}
                                            value={data?.phone}
                                            onChange={(e) =>
                                                handlePhoneChange(e)
                                            }
                                        /> */}

                                        {showOtpInput == false && (
                                            <>
                                                <button
                                                    className="send_no_otp_btn"
                                                    onClick={() =>
                                                        handleSendPhoneOtp()
                                                    }>
                                                    {phoneSpinner ? (
                                                        <Spin />
                                                    ) : isPhoneVerified ? (
                                                        <CheckOutlined />
                                                    ) : (
                                                        'Get OTP'
                                                    )}
                                                </button>
                                            </>
                                        )}
                                        {showOtpInput == true && (
                                            <>
                                                <button
                                                    className="send_no_otp_btn"
                                                    onClick={handleVerifyOTP}>
                                                    {phoneVerifySpinner ? (
                                                        <Spin />
                                                    ) : (
                                                        'Verify'
                                                    )}
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {showOtpInput ? (
                                        <p
                                            style={{
                                                textAlign: 'end',
                                                margin: '0',
                                            }}>
                                            Resend otp?
                                        </p>
                                    ) : (
                                        ''
                                    )}
                                    {phoneNoerrors.phone && (
                                        <div
                                            className="text-danger position-absolute"
                                            style={{ fontSize: '14px' }}>
                                            {phoneNoerrors.phone}
                                        </div>
                                    )}
                                </div>
                                {showOtpInput && (
                                    <>
                                        <div className="form-group">
                                            <div className="otp_input_box">
                                                <OTPInput
                                                    className={`otp-container ${phoneOtpError
                                                        ? 'is-invalid'
                                                        : ''
                                                        }`}
                                                    autoFocus
                                                    OTPLength={4}
                                                    otpType="number"
                                                    disabled={false}
                                                    placeholder="0000"
                                                    value={phoneOtp}
                                                    onChange={(otp) => {
                                                        setPhoneOtp(otp);
                                                        setPhoneOtpError('');
                                                    }}
                                                />
                                                {phoneOtpError && (
                                                    <div
                                                        className="invalid-feedback "
                                                        style={{
                                                            fontSize: '14px',
                                                        }}>
                                                        {phoneOtpError}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                                <div className="form-group ">
                                    <div className="position-relative">
                                        <input
                                            className={`form-control ${emailErrors.email
                                                ? 'is-invalid'
                                                : ''
                                                }`}
                                            name="email"
                                            type="email"
                                            placeholder="Enter email address"
                                            disabled={emailDisable}
                                            onChange={(e) =>
                                                handleEmailChange(e)
                                            }
                                        />
                                        {showOtpEmail == false && (
                                            <>
                                                <button
                                                    className="send_no_otp_btn"
                                                    onClick={() =>
                                                        handleSendEmailOtp()
                                                    }>
                                                    {emailSpinner ? (
                                                        <Spin />
                                                    ) : isEmailVerified ? (
                                                        <CheckOutlined />
                                                    ) : (
                                                        'Get OTP'
                                                    )}
                                                </button>
                                            </>
                                        )}
                                        {showOtpEmail == true && (
                                            <>
                                                <button
                                                    className="send_no_otp_btn"
                                                    onClick={() =>
                                                        handleVerifyOTPEmail()
                                                    }>
                                                    {emailVerifySpinner ? (
                                                        <Spin />
                                                    ) : (
                                                        'Verify'
                                                    )}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    {emailErrors.email && (
                                        <div
                                            className="text-danger position-absolute"
                                            style={{
                                                fontSize: '14px',
                                            }}>
                                            {emailErrors.email}
                                        </div>
                                    )}
                                    {showOtpEmail ? (
                                        <p
                                            style={{
                                                textAlign: 'end',
                                                margin: '0',
                                            }}>
                                            Resend otp?
                                        </p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                {showOtpEmail && (
                                    <>
                                        <div className="form-group">
                                            <div className="otp_input_box">
                                                <OTPInput
                                                    className={`otp-container ${emailOtpError
                                                        ? 'is-invalid'
                                                        : ''
                                                        }`}
                                                    autoFocus
                                                    OTPLength={4}
                                                    otpType="number"
                                                    disabled={false}
                                                    placeholder="0000"
                                                    value={emailOtp}
                                                    onChange={(otp) => {
                                                        setEmailOtp(otp);
                                                        setEmailOtpError('');
                                                    }}
                                                />
                                                {emailOtpError && (
                                                    <div
                                                        className="invalid-feedback "
                                                        style={{
                                                            fontSize: '14px',
                                                        }}>
                                                        {emailOtpError}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
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
                                        disabled={
                                            !data?.name ||
                                            !data?.designation ||
                                            !successEmailOtp ||
                                            !successOtp
                                        }
                                        className="register_gst_company_btn"
                                        onClick={handleVerifyForm}>
                                        Register Now
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

export default GstCompanyRegister;
