// SurveyField contains logic to render a single label and user input
import React from 'react';
import { reduxForm } from 'redux-form';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};

SurveyField.propTypes = {
    ...reduxForm.propTypes,
};

export default SurveyField;
