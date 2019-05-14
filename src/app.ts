import '@/utils/extend'
import '@/utils/prevload'
import { MyApp } from './d'

App<MyApp>({
	async onLaunch (options: object) {
		console.log(options)
	},
	globalData: {
		userInfo: undefined,
		language: 1 // 1为中文 2为英文 默认为中文
	}
})
