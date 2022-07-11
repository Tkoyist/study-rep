import React, { PureComponent } from 'react'
import CSST from'./transition/12-24-01CSStransition'
import SWTT from './transition/12-24-02SwitchTransition'
import TG from './transition/12-24-03TransitionGroup'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CSST/>
        <SWTT/>
        <TG/>
      </div>
    )
  }
}
