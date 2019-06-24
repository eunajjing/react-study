export interface INotification {
  id: number;
  type: "error" | "warning" | "info";
  msg: string;
  show: boolean;
  timestamp: number;
}

export interface ITimelineItem {
  time: string;
  count: number;
}

export interface IAuthentication {
  name: string;
  picture: string;
  token: string;
}

export interface IShop {
  id: number;
  shopName: string;
  ownerName: string;
  coupon: string;
  category: string;
  geoLocation: [];
  phone: string;
  address: string;
  createDate: string;
}

export interface IStoreState {
  authentication: IAuthentication | null;
  monitoring: boolean;
  shopList: IShop[];
  openNotificationCenter: boolean;
  showTimeline: boolean;
  duration: number;
  notifications: INotification[];
  success: number;
  failure: number;
  successTimeline: ITimelineItem[];
  failureTimeline: ITimelineItem[];
}
