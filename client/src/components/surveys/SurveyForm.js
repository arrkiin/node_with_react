// SurveyForm shows Form for Userinput
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title', required: true },
    { label: 'Subject Line', name: 'subject', required: true },
    { label: 'Email Body', name: 'body', required: true },
    { label: 'Recipient List', name: 'emails', required: true },
];

class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map(({ label, name }, i) => (
            <Field
                key={i}
                type="text"
                name={name}
                label={label}
                component={SurveyField}
            />
        ));
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        console.log(values)
                    )}
                >
                    {this.renderFields()}
                    <Link
                        to="/surveys"
                        className="red btn-flat left white-text"
                    >
                        Cancel
                    </Link>
                    <button
                        className="teal btn-flat right white-text"
                        type="submit"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

SurveyForm.propTypes = {
    ...reduxForm.propTypes,
};

const validate = values => {
    const errors = {};
    errors.emails = validateEmails(values.emails || '');
    FIELDS.forEach(({ name, label, required }) => {
        if (required && !values[name]) {
            errors[name] = `You must provide ${label}`;
        }
    });
    return errors;
};

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
})(SurveyForm);
