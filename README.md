<h1 align="center">React DPlayer</h1>

<div align="center">

[![Alita](https://img.shields.io/badge/alitajs-react%20dplayer-blue.svg)](https://github.com/alitajs/react-dplayer)
[![NPM version](https://img.shields.io/npm/v/@alitajs/react-dplayer.svg?style=flat)](https://npmjs.org/package/@alitajs/react-dplayer)
[![NPM downloads](http://img.shields.io/npm/dm/@alitajs/react-dplayer.svg?style=flat)](https://npmjs.org/package/@alitajs/react-dplayer)

</div>

> 官方提供的封装[react-dplayer](https://github.com/MoePlayer/react-dplayer)

## 特性

- 💡 TypeScript: 应用程序级 JavaScript 的语言，提供完整的类型定义
- 🚀 完全支持DPlayer：只是在DPlayer封装了一层，支持DPlayer的所有功能

## 安装

```
// npm
npm install --save @alitajs/react-dplayer dplayer

// yarn
yarn add @alitajs/react-dplayer dplayer
```

## 使用

```
import Player from '@alitajs/react-dplayer';

class Example extends React.Component {
  render() {
    return (
      <Player 
        options={{
          video:{
            url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'
          }
        }} 
      />
    )
  }
}
```
