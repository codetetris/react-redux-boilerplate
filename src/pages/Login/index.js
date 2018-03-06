import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginComponent from 'components/auth/login'
import { signin } from 'store/auth/service'

class Login extends Component {
  render () {
    return <LoginComponent handleSubmit={this.handleSubmit} />
  }

  handleSubmit = (values) => {

  }
}

const mapStateToProps = () => ({

})

const mapDispatchToPros = () => (
  bindActionCreators({
  })
)

export default connect(mapStateToProps, mapDispatchToPros)(Login)
