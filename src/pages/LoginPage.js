import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { signIn } from '../store/auth/actions'

import LoginComponent from '../components/form/LoginForm'

const LoginPage = ({ signIn }) => <LoginComponent onSubmit={signIn} />

LoginPage.propTypes = {
  signIn: PropTypes.func.isRequired
}

LoginPage.defaultProps = {
  loginValues: undefined
}

const mapStateToProps = () => ({})

const mapDispatchToPros = (dispatch) => bindActionCreators({
  signIn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(LoginPage)
