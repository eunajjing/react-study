export interface INotification {
  id: number;
  type: string;
  msg: string;
}

export interface ITimelineItem {
  time: string;
  count: number;
}

export interface StoreState {
  monitoring: boolean;
  showTimeline: boolean;
  // on/off 여부
  duration: number;
  notifications: INotification[];
  success: number;
  failure: number;
  successTimeline: ITimelineItem[];
  failureTimeline: ITimelineItem[];
}
