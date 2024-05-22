class Middleware {
    constructor() {
        this.cache = []
        this.middlewares = []
    }

    use() {
        [...arguments].forEach((fn) => {
            this.cache.push(fn);
        });
        return this;
    }

    next(params) {
        while (this.middlewares.length !== 0) {
            const ware = this.middlewares.shift();
            ware.call(this, params, this.next.bind(this));
        }
    }
    
    execute(params) {
        this.middlewares = this.cache.map((fn) => {
            return fn
        })
        this.next(params);
    }
}

const middleware = new Middleware();

function transform(options, next) {
    console.log("before", options.data);
    options.data.age = Number(options.data.age);
    next(options); // 通过验证
}

function validate(options, next) {
    console.log("validate", options.data);
    next(options); // 通过验证
}

function send(options, next) {
    setTimeout(function () {
        // 模拟异步
        console.log("send", options.data);
        next();
    }, 100);
}

middleware.use(transform).use(validate).use(send);
middleware.execute({ data: { name: "cookie", age: "20" } });
middleware.execute({ data: { name: "cookie", age: "20" } });
