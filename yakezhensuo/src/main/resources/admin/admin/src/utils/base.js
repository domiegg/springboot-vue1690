const base = {
    get() {
        return {
            url : "http://localhost:8080/yakezhensuo/",
            name: "yakezhensuo",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yakezhensuo/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "牙科诊所管理系统"
        } 
    }
}
export default base
