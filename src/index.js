import element from 'js/element'
import './styles/element'
import axios from "axios"
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from "@/vue/App"

const foo = (regs) => {
    console.log("我是 es6 语法");
    console.log("再替换一次吧")

}
foo()

module.hot.accept(
    console.log(`模块替换了`),
)

axios.get("/api").then((res)=>{console.log("请求的数据:");console.log(res);})

createApp(App).mount("#app")
