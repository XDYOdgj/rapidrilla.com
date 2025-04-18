// 判断是否是开发环境
const getEnvironment = () => {
	return (window.location.hostname.indexOf("127.0.0.1") != -1) ? true : false
}

//====================服务配置===================//
//线下域名
const devDomain = "192.3.177.131";
//线上域名（php注入）
const prodDomain = "rapidrilla.com"


//判断访问环境  127.0.0.1 本地
let domainName = getEnvironment() ? devDomain : prodDomain


export default {
	// 接口文档  http://162.14.70.83:99/api.html
	domain: `https://${domainName}`, //请求接口地址
	cookie: domainName, //头部校验信息
	apiUrl: "/api", //请求代理地址
	storageKey: "mb_0001_storageData", //storage存储key
	mapKey: "8cbbff001e2540c5bf2d1284670e835c", //地图kry
	mapAddressSearch: "https://api.geoapify.com/v1/geocode/autocomplete", //地址搜索
	mapAddressCheck: "https://api.geoapify.com/v1/geocode/search", //地址校验
}

