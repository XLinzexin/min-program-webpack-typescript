import '@/utils/extend'
import '@/utils/prevload'
import { MyApp } from './d'
// import { Component, View } from "./lib/class-component/page";

// Object.assign(global, { __Component: Component })

App<MyApp>({
	async onLaunch (options: object) {
		console.log(options)
	},
	globalData: {
		userInfo: undefined,
		language: 1 // 1为中文 2为英文 默认为中文
	}
})
