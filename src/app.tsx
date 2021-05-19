import React from "react";
import { View } from "@tarojs/components";
import "./app.scss";

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return <>{props.children}</>;
};

// export default App
// import { Component } from 'react'

// class App extends Component {

//   componentDidMount () {
//     console.log('app launch')
//   }

//   componentDidShow () {
//     console.log('app show')
//   }

//   componentDidHide () {
//     console.log('app hide')
//   }

//   componentDidCatchError () {}

//   // this.props.children 是将要会渲染的页面
//   render () {
//     return this.props.children
//   }
// }

export default App;
