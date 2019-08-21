# React DPlayer

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
