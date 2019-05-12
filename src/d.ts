/**
* App interface
*/
export interface MyApp {
  globalData: {
    userInfo?: wx.UserInfo,
    language: number
  }
  onLaunch(params: object):void
  clearOldSession?():void
  userInfoReadyCallBack?(res: wx.UserInfo): void
}
