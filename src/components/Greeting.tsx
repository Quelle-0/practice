import * as React from "react"
import { Head } from "../pages/head/Head"
import { Nav } from "../pages/nav/Nav"

export interface GreetingProps {
  name?: string
  greeting?: string
}

export class Greeting extends React.Component<GreetingProps, {}> {
  render() {
    return (
      <div>
            <p>
                I am {this.props.name}, {this.props.greeting}
            </p>
      </div>
    )
  }
}
