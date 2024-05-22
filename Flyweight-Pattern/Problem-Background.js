/**
 * 一个场景
 * 模特拍照  
 * 男模特需要拍 50套不同的服装  
 * 女模特需要拍 100套不同的服装 
 */




//这种写法 会重复创建Modal实例 150个
class Modal {
    constructor(sex, cloth) {
        this.sex = sex
        this.cloth = cloth
    }
    takePhoto() {
        console.log(`sex:${this.sex} cloth:${this.cloth}`);
    }
}


for (let i = 1; i <= 50; i++) {
    const modal = new Modal('male', "cloth" + i)
    modal.takePhoto()
}

for (let i = 1; i <= 100; i++) {
    const modal = new Modal('famale', "cloth" + i)
    modal.takePhoto()
}



/**
 * 享元模式：
 * 共享状态放在内部
 * 创建共享对象
 * 内部状态不变
 * 外部状态更具不同场景 变化
 */

//这种写法 创建Modal实例 2个
class Modal2 {
    constructor(sex) {
        this.sex = sex
    }
    takePhoto() {
        console.log(`sex:${this.sex} cloth:${this.cloth}`);
    }
}

const male = new Modal2('male')
const famale = new Modal2('famale')


for (let i = 1; i <= 50; i++) {
    male.cloth = "cloth" + i
    male.takePhoto()
}

for (let i = 1; i <= 100; i++) {
    famale.cloth = "cloth" + i
    famale.takePhoto()
}









/**
 * 接下来是思考下在前端的应用场景
 * 
 */

