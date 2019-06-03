import { TmgPage } from "./../../page";
/**
* page interface
*/
interface IndexPageData{
  user: object;
  phone: string;
}
/**
* 定义 page 类
*/
const com = global['__Component']
@com()
class TemplatePage extends TmgPage{
  public data: IndexPageData = {
    user: {},
    phone: '94533'
  }
  /**
   * 跳转到主页
   */
  public toAccountManagement (): void {
    wx.redirectTo({
      url: 'main'
    })
  }
}
