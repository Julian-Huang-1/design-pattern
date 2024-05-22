/**
 * 一个场景 公司不同高管职责不同 
 *总经理：管人事：入职，换岗
 *财务：管 发工资
 *部门领导：管请假   
 *
 * 员工由于工作繁忙不想去了解高管的职责怎么办
 */


function zongjingli(req) {
    if (req.type === "入职" || req.type === "换岗") {
        req.result = `总经理 批准 ${req.type}`
        return req //处理了 直接return
    } else {
        return "nextSuccessor"; //无法处理转给下一个
    }
}
function caiwu(req) {
    if (req.type === "发工资") {
        req.result = `财务 批准 ${req.type}`
        return req
    } else {
        return "nextSuccessor";
    }
}
function bumenlingdao(req) {
    if (req.type === "请假") {
        req.result = `部门领导 批准 ${req.type}`
    }
    return req
}





class Chain {
    successor = null;
    constructor(fn) {
        this.fn = fn;
    }
    setNextSuccessor(successor) {
        this.successor = successor;
    }
    passRequest() {
        const res = this.fn.apply(this, arguments);
        if (res === "nextSuccessor") {
            return (
                this.successor &&
                this.successor.passRequest.apply(this.successor, arguments)
            );
        }
        return res
    };

}



const chain1 = new Chain(zongjingli)
const chain2 = new Chain(caiwu)
const chain3 = new Chain(bumenlingdao)
chain1.setNextSuccessor(chain2)
chain2.setNextSuccessor(chain3)
console.log(chain1.passRequest({ type: "请假", result: null }));
console.log(chain1.passRequest({ type: "发工资", result: null }));
console.log(chain1.passRequest({ type: "入职", result: null }));
console.log(chain1.passRequest({ type: "换岗", result: null }));





//express 的中间件 在此基础上改良  称为中间件模式 也叫做中介者模式
//改良版如下



class Middleware {
    constructor() {
        this.$cache = []
        this.$middlewares = []
    }

    // 注册中间件
    use() {
        [...arguments].forEach(item => {
            if (typeof item === 'function') {
                this.$cache.push(item)
            }
        })
        return this
    }

    /**
     * 每个中间件只有两个形参 第一是传进来的参数 第二个是调用下一个中间件的函数
     * 中间件的执行顺序是根据你注册中间件的顺序来去调用的 
     */
    next(params) {
        while (this.$middlewares.length) {
            const ware = this.$middlewares.shift()
            ware.call(this, params, this.next.bind(this))
        }
    }

    execute(params) {
        this.$middlewares = this.$cache.map(fn => {  // 复制一份
            return fn;
        });
        this.next(params)
    }

}



const middleware = new Middleware()

function transform(options, next) {
    console.log('before', options.data);
    options.data.age = Number(options.data.age)
    next(options); // 通过验证
}

function validate(options, next) {
    console.log('validate', options.data);
    next(options); // 通过验证
}

function send(options, next) {
    setTimeout(function () { // 模拟异步
        console.log('send', options.data);
        next();
    }, 100);
}

middleware.use(transform).use(validate).use(send)
middleware.execute({ data: { name: 'cookie', age: '20' } });



/**
 * 接下来是思考下在前端的应用场景
 *

 */
