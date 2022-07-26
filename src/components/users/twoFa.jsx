import React from 'react';
import Joi from 'joi-browser';
import users from '../../services/userService';
import Form from '../common/form';

class TwoFa extends Form {
  state = { data: { twfa: '' }, emaild: '', errors: {} };
  schema = {
    twfa: Joi.string()
      .required()
      .label('TwoFa')
  };
  doSubmit = async () => {
    try {
      const valid = await users.valTfa(
        this.props.data.email,
        this.state.data.twfa
      );
      if (!valid.error) {
        window.location = '/dashboard';
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.twfa = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <form id='twofa' class='card-body' onSubmit={this.handleSubmit}>
        <h3 class='pb-2'>TwoFa Auth</h3>
        {this.renderInput('twfa', 'TwoFa')}
        {this.renderButton('Submit')}
      </form>
    );
  }
}

export default TwoFa;
