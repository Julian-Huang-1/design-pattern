/**
 * 一个灯有3种状态 ：弱光、强光、关灯
 * 我们需要一种方式能直观区分3种状态的变化
 * 
 */


const FSM = {
    off: {
        buttonClick: function () {
            console.log("变弱光");
            this.setState(this.weakLightState)
        }
    },
    weakLightState: {
        buttonClick: function () {
            console.log("变强光");
            this.setState(this.StrongLightState)
        }
    },
    StrongLightState: {
        buttonClick: function () {
            console.log("关灯");
            this.setState(this.offState)
        }
    },
} 



function Light() {
    this.offState = FSM.off
    this.weakLightState = FSM.weakLightState
    this.StrongLightState = FSM.StrongLightState

    this.currentState = this.offState
    this.button = document.querySelector("button")
    this.init()
}
Light.prototype.init = function () {
    this.button.onclick = () => {
        this.currentState.buttonClick.call(this)
    }
}

Light.prototype.setState = function (newState) {
    this.currentState = newState
}

const ligth = new Light()







/**
 * 接下来是思考下在前端的应用场景
 * 

 */

