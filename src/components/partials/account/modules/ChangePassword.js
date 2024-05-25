import React from 'react';

const ChangePassword = () => {

    const handlePasssowrdSet = (e) => {
        e.preventDefault()
    }

    return (
        <form className="ps-form--account-setting" onSubmit={handlePasssowrdSet}>
            <div className="ps-form__content">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Password"
                            />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Confirm Password"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group submit">
                    <button className="ps-btn">Update password</button>
                </div>
            </div>
        </form>
    );
};

export default ChangePassword;
