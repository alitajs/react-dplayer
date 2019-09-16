import React from 'react';
import Player from '@/player';

const BasicExample: React.FC = (props) => {
  let onePlayer = null;

  return (
    <div>
      <Player
        options={{
          video:{
            url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'
          }
        }}
        onInit={(player) => {
          onePlayer = player;
        }}
        onCanplay={() => {
          console.log(onePlayer.video.duration);
        }}
      />
    </div>
  )
};

export default BasicExample;
