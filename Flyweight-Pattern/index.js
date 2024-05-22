
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


