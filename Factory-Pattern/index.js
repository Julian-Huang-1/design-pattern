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