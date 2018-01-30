// SurveyForm shows Form for Userinput
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return formFields.map(({ label, name }, i) => (
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
                    onSubmit={this.props.handleSubmit(
                        this.props.onSurveySubmit
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

const validate = values => {
    const errors = {};
    errors.emails = validateEmails(values.emails || '');
    formFields.forEach(({ name, label, required }) => {
        if (required && !values[name]) {
            errors[name] = `You must provide ${label}`;
        }
    });
    return errors;
};

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);