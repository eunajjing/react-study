import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StoreState, INotification } from "../types";
import { showedNotification } from "../actions";
import { notification } from "antd";

interface IProps {
  notifications: INotification[];
  showedNotification(id: number): void;
}

const mapStateToProps = (state: StoreState) => {
  return {
    notifications: state.notifications.filter(n => !n.show)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showedNotification: id => dispatch(showedNotification(id))
});

class Notification extends React.PureComponent<IProps> {
  componentDidUpdate(prevProps) {
    if (prevProps.notifications.length !== this.props.notifications.length) {
      // 개수가 같은지 여부 판단
      // 근데 사실 이렇게 하면 안됨, 추가된 것과 삭제한 것이 같을 수도 있고
      this.props.notifications.forEach(noti => {
        notification.error({
          message: noti.type,
          description: noti.msg
        });
        // 제공해주는 것, 규약에 맞춰서 뭐 보여줄 것인지

        this.props.showedNotification(noti.id);
        // 디스패치
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div />
      </React.Fragment>
    );
  }
}

export const NotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
