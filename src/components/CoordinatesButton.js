// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  render() {
    return (
      <button
        onClick={(e) => this.props.onReceiveCoordinates([e.pageX, e.pageY])}>
      Coordinate</button>
    )
  }
}
