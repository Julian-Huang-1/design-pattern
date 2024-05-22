/**
 * 一个根据员工表现计算工资的场景
 * 
 * 可以解决出现多 if else 、switch case 情况
 */


/**
 * 发工资的策略
 */
const strategies = {
    'S': function (salary) {
        return salary * 14
    },
    'A': function (salary) {
        return salary * 13
    },
    'B': function (salary) {
        return salary * 12
    },
}


/**
 * 根据策略计算年薪
 */
function calculateAnnualSalary(base, performance) {
    return strategies[performance](base)
}



const hjxAnnualSalary = calculateAnnualSalary(1000, 'S')
const ylAnnualSalary = calculateAnnualSalary(1000, 'A')
console.log(hjxAnnualSalary);
console.log(ylAnnualSalary);




// 公司突然增加需求：新增表现为c的工资策略 
strategies['C'] = function (salary) {
    return salary * 11
}

const yl2AnnualSalary = calculateAnnualSalary(1000, 'C')
console.log(yl2AnnualSalary);











/**
 * 接下来是思考下在前端的应用场景
 * 
 * 1.表单验证
 * 2.动态组件渲染
 * 3.数据转换和格式化
 * 4.事件处理
 */

