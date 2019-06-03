import * as React from "react";
import { Button } from "antd";

interface PlayButtonProps {
  monitoring: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = props => {
  const [isPlay, togglePlay] = React.useState(props.monitoring);
  // 배열을 리턴하는데, 첫 요소로는 전달한 인자가 돌아오고, 두 번째 요소로는 그 인자를 바꿀 수 있는 함수가 돌아온다.
  const renderIcon = isPlay ? "pause" : "caret-right";

  return (
    <Button
      style={{ marginTop: 20 }}
      shape="circle"
      icon={renderIcon}
      onClick={() => {
        if (isPlay) {
          props.onPause && props.onPause();
        } else {
          props.onPlay && props.onPlay();
        }

        togglePlay(!isPlay);
      }}
    />
  );
};
