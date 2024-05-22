/**
 * 一个场景
 * 
 */


//简单工厂模式
function Worker(name, age, work, career) {
    this.age = age
    this.name = name
    this.work = work
    this.career = career
}


function Factory(name, age, career) {
    let work
    switch (career) {
        case "老板":
            work = ["喝茶", "看报"]
            break
        case "员工":
            work = ["工作", "996"]
            break
    }
    return new Worker(name, age, work, career)
}


//抽象工厂模式

class ETFactory {
    createStore() {
        throw new Error("需要重写")
    }
    createWorker() {
        throw new Error("需要重写")
    }
}



class AchieveFactory extends ETFactory {
    createStore() {
        return new WandaStore()
    }
    createWorker() {
        return new WandaWorker2()
    }
}


class Store {
    getAddress() {
        throw new Error("需要重写")
    }
}

class WandaStore extends Store {
    getAddress() {
        console.log("北京万达");
    }
}



class Worker2 {
    getSkill() {
        throw new Error("需要重写")
    }
}
class WandaWorker2 extends Worker2 {
    getSkill() {
        console.log("工作", "996");
    }
}


const mywanda = new AchieveFactory()
const mystore = mywanda.createStore()
const myworker = mywanda.createWorker()
mystore.getAddress()
myworker.getSkill()

/**
 * 接下来是思考下在前端的应用场景
 * 
 */

