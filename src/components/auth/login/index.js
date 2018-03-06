import React from 'react'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'

const Login = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <div>
        <label htmlFor='email'>Email</label>
        <Field name='email' component='input' type='email' />
      </div>
      <label htmlFor='password'>Password</label>
      <Field name='password' component='input' type='password' />
    </div>
    <button type='submit'>Submit</button>
  </form>
)

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login'
})(Login)
