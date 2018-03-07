import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import { signIn } from '../../store/auth/actions'

// Components
import LoginComponent from '../../components/auth/login'

const Login = ({ signIn }) => <LoginComponent onSubmit={signIn} />

Login.propTypes = {
  signIn: PropTypes.func.isRequired
}

Login.defaultProps = {
  loginValues: undefined
}

const mapStateToProps = () => ({})

const mapDispatchToPros = (dispatch) => bindActionCreators({
  signIn
}, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(Login)
