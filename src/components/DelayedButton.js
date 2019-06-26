// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {


  render() {
    return (
      <button
        onClick={(event) => {
          event.persist();
          setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
        }}>
      Delay</button>
    )
  }
}
