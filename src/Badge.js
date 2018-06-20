import React from 'react'

class Badge extends React.Component {

    state = {
        name: ""
        
    }

    render() {

        return (
            <div>

                <ul>
                    <li>
                        <span>Hello</span>My Name is&hellip;
                    </li>
                    <li className="name">
                        <div>
                            <input type="text"

                                   placeholder="name"
                                   value={this.state.name}
                                   onChange={event => this.setState({name: event.target.value})}
                            />
                        </div>

                    </li>
                    <li><a href="https://twitter.com/sulcalibur"
                           title='You should follow me on Twitter'>
                    </a> | <a href="http://suljam.com"
                              title='My Pro site'>suljam.com</a> | <a
                        href="http://sulcalibur.com" title='My Personal Site'> sulcalibur.com</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Badge