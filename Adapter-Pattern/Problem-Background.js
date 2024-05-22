/**
 * 一个场景:
 * 我们需要和不同厂商的模型api交互
 * chatgpt、文心一言、字节豆包等等，
 * 但是他们的接口格式都不一致，或者结构格式存在模型升级频繁改动
 * 
 */


//接口一致的情况

const chatgptApi = {
    chat: () => {
        console.log("i am chatgpt");
    }
}
const wenxinApi = {
    chat: () => {
        console.log("i am wenxin");
    }
}
const doubaoApi = {
    chat: () => {
        console.log("i am doubao");
    }
}



function interaction(model) {
    model.chat()
}



interaction(chatgptApi)
interaction(wenxinApi)
interaction(doubaoApi)



//如果又出现了一个新的模型 叫做 chatglm 但是他的接口名字变了

const chatglmApi = {
    get: () => {
        console.log("i am chatglm");
    }
}

//我们不想改变interaction 函数的代码 怎么办？
//我们针对chatglmApi单独写一个适配器做转换
const chatglmApiAdapter = (chatglmApi) => {
    return {
        chat: () => {
            chatglmApi.get()
        }
    }
}

interaction(chatglmApiAdapter(chatglmApi))



/**
 * 第二个场景:
 * 后端频繁改动接口
 */

let Beijing = [
    { name: "chaoyangqu", id: 11 },
    { name: "haidianqu", id: 12 }
]


//访问后端接口获取数据
function getBeijingInfo() {
    return Beijing
}


//前端业务代码
function render(fn) {
    console.log(fn());
}



render(getBeijingInfo)

//此刻后端接口格式变了 

Beijing = [
    { "chaoyangqu": 11 },
    { "haidianqu": 12 }
]

render(getBeijingInfo)



function getBeijingInfoAdapter(getBeijingInfo) {
    return () => {
        const result = getBeijingInfo()
        let arr = result.map((item) => {
            let obj = {}
            const key = Object.keys(item)
            obj['name'] = key[0]
            obj['id'] = item[key[0]]
            return obj
        })
        return arr
    }
}

render(getBeijingInfoAdapter(getBeijingInfo))




/**
 * 接下来是思考下在前端的应用场景
 * 
 * 
 */

