import React, { PureComponent } from 'react'
import appstyle from'./app.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appstyle.title}>app标题</h2>
      </div>
    )
  }
}
