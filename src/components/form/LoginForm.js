import React from 'react'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'

import {
  container
} from './styles/LoginForm.style'

const LoginForm = ({ handleSubmit, onSubmit }) => (
  <form className={container} onSubmit={handleSubmit(onSubmit)}>
    <div>
      <div>
        <label htmlFor='email'>Email</label>
        <Field name='email' component='input' type='text' />
      </div>
      <label htmlFor='password'>Password</label>
      <Field name='password' component='input' type='password' />
    </div>
    <button type='submit'>Submit</button>
  </form>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login'
})(LoginForm)
