import React, { Component } from 'react'

import RegisterContainer from '../containers/Register'

class RegisterLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div><RegisterContainer /></div>
        )
    }
}

export default RegisterLayout