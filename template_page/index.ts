/**
* page interface
*/
interface IndexPageData {
	user: object,
	phone: string
}
/**
* 定义 page 类
*/
class TemplatePage {
	public data:IndexPageData = {
		user: {},
		phone: '94533'
	}
	/**
   * 跳转到主页
   */
	public toAccountManagement ():void {
		wx.redirectTo({
			url: 'main'
		})
	}
}

Page(new TemplatePage())
