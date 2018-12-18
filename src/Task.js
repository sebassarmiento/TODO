import React, { Component } from 'react'

export default class Task extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="task" >
                <p className="task-number" ># {this.props.number + 1}</p>
                <p className="task-name" >{this.props.taskName}</p>
                <p onClick={() => this.props.delete(this.props.number)} className="task-delete" >X</p>
            </div>
        )
    }
}
