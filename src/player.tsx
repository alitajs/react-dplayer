import React from 'react';
import DPlayer, { DPlayerOptions, DPlayerEvents } from 'dplayer';
import { events } from './config/config';
import { capitalizeEventName } from './utils';
import { IEvents } from './interface';
import 'dplayer/dist/DPlayer.min.css';

export interface IOptions extends Omit<DPlayerOptions, 'container'> {}

export interface IPlayerProps extends IEvents {
  className?: string;
  style?: React.CSSProperties;
  options?: IOptions;
  onInit?: (player: DPlayer, container: HTMLElement) => void;
}

const eventsProps = events.map(eventName => ({ eventName, prop: `on${capitalizeEventName(eventName)}` }));

class Player extends React.Component<IPlayerProps> {
  private root: HTMLElement;
  public player: DPlayer;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.createPlayer(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 阻止没必要的渲染
    if (this.props.options !== nextProps.options) {
      this.createPlayer(nextProps);
      return false;
    }
    return true;
  }

  createPlayer = (props: IPlayerProps) => {
    const { options, onInit  } = props;
    // 销毁Player
    this.destroyPlayer();
    // 创建Player
    this.player = new DPlayer({
      ...Object.assign(
        {},
        {
          lang: 'zh-cn',
          contextmenu: []
        },
        options
      ),
      container: this.root
    });

    onInit && onInit(this.player, this.root);

    // 绑定事件
    eventsProps.forEach(({ eventName, prop }) => {
      if (prop in this.props) {
        this.player.on(eventName as DPlayerEvents, this.props[prop]);
      }
    })
  };

  // 销毁播放器
  destroyPlayer() {
    this.player && this.player.destroy();

    this.player = null;
  }

  componentWillUnmount() {
    this.destroyPlayer();
  }

  render() {
    const { className, style }  = this.props;

    return (
      <div
        ref={(node) => this.root = node}
        className={className}
        style={style}
      />
    )
  }
}

export default Player;
