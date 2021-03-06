import React from "react";
import { View } from "@tarojs/components";
import "./app.scss";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    // 失败后重试
    queries: { retry: 0 },
  },
});
interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
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
