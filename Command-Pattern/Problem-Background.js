/**
 * 解耦操作和接收者：命令模式将操作封装成对象，使得发送者和接收者之间解耦，可以独立变化
 * 
 * 
 */


//我们定义本系统系统只支持3个命令：



function setCommand(button, command) {
    button.onclick = function () {
        command()
    }
}

function refreshMenuBarCommand(receiver) {
    return () => {
        receiver.refresh()
    }
}
function addSubMenuCommand(receiver) {
    return () => {
        receiver.add()
    }
}
function delSubMenuBarCommand(receiver) {
    return () => {
        receiver.del()
    }
}



//----------------------





const MenuBar = {
    refresh: function () {
        console.log("refresh");
    }
}
const SubMenu = {
    add: function () {
        console.log("add");
    },
    del: function () {
        console.log("del");
    },
}

const command1 = refreshMenuBarCommand(MenuBar)

setCommand(button1, command1)








/**
 * 接下来是思考下在前端的应用场景
 * 

 */

