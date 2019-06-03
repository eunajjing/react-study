export interface INotification {
  id: number;
  type: string;
  msg: string;
  show: boolean;
  // 노출 되었는지 안 되었는지
  timestamp: number;
}
// 보통 패턴이 있음
// 스토어에 에러 배열을 넣어서
// 꺼낸 다음에 지우는 애를 디스패치 하기도 함

export interface ITimelineItem {
  time: string;
  count: number;
}

export interface StoreState {
  monitoring: boolean;
  showTimeline: boolean;
  duration: number;
  notifications: INotification[];
  // 오류가 나면 쌓았음
  success: number;
  failure: number;
  successTimeline: ITimelineItem[];
  failureTimeline: ITimelineItem[];
}
