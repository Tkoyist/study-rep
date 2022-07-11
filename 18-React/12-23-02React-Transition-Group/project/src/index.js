import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 导入antd 的样式
import 'antd/dist/antd.css'

// 导入预定义的包含了所需css类的css文件
import'./transition/CSST.css'
import'./transition/SWTT.css'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);