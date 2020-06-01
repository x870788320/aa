/**
 * 数据如果week相同，看一下时间是否冲突，找出冲突项
 *  */

const jsonData = [{
        id: 1,
        week: 2,
        time: ['06:00', '11:00']
    },
    {
        id: 2,
        week: 2,
        time: ['09:00', '13:00']
    },
    {
        id: 3,
        week: 4,
        time: ['13:00', '15:00']
    },
    {
        id: 4,
        week: 5,
        time: ['16:00', '17:00']
    },
    {
        id: 5,
        week: 4,
        time: ['10:00', '14:00']
    },
    {
        id: 6,
        week: 2,
        time: ['13:00', '14:00']
    },
    {
        id: 7,
        week: 2,
        time: ['13:00', '16:00']
    },
    {
        id: 8,
        week: 3,
        time: ['08:00', '11:00']
    },
    {
        id: 9,
        week: 2,
        time: ['09:00', '13:00']
    }
]


const clashArr = []
const clashObj = {}
const obj = jsonData.reduce((pre, cur, index) => { //使用reduce排查相同属性的所有元素
        pre[cur.week] ? pre[cur.week].push(index) : pre[cur.week] = [index]
        return pre
    }, {})
    //console.log(obj)  //{ '2': [ 0, 1, 5, 6, 8 ], '3': [ 7 ], '4': [ 2, 4 ], '5': [ 3 ] }
const requireData = Object.keys(obj).filter(key => obj[key].length > 1) //把长度小于1的过滤掉
    //console.log(requireData)  //[ '2', '4' ]
const timeStrToNum = time => parseFloat(time.replace(':', '.') * 100) //把时间字符串变为数字用为比较
    /** 
     * 得到每个时间的num
     * [ [ [ 600, 1100 ],[ 900, 1300 ],[ 1300, 1400 ],..],..]
     * */
const getTimeArr = requireData.map(list => obj[list].map(item => jsonData[item].time.map(time => timeStrToNum(time))))

//递归解决每个的对比问题 并且赋值给clashObj
const getClash = (list, index) => {
    let listClone = JSON.parse(JSON.stringify(list)) //不改原数组 深拷贝
    if (listClone.length < 2) {
        let provisional = JSON.parse(JSON.stringify(clashArr))
        clashArr.length = 0
        clashObj[requireData[index]] = provisional
        return
    }
    let curIndex = listClone.length - 1
    let lastItem = listClone.pop()
    let objPosition = indexPo => obj[requireData[index]][indexPo] + 1
        //最后一个与其余的比较，如果开始时间比其他的结束时间晚或者结束时间比其他的开始时间早 这个不成立取反，然后push到clashArr
        //如果中间不需要时间间隔，将>改为>=  [lastItem, item]   push后面的值+1是id，当前是index
    listClone.map((item, index) => !(item[0] >= lastItem[1] || item[1] <= lastItem[0]) && clashArr.push([objPosition(curIndex), objPosition(index)]))
    getClash(listClone, index)
}
getTimeArr.map((list, index) => getClash(list, index))
console.log(clashObj)
    /**
     * 8,0为index  不是id
     * {
     *  '2': [ [ 8, 0 ], [ 8, 1 ], [ 6, 5 ], [ 1, 0 ] ],
     *  '4': [ [ 4, 2 ] ]
     *  }
     * 
     * 9,1为id
     * { '2': [ [ 9, 1 ], [ 9, 2 ], [ 7, 6 ], [ 2, 1 ] ],
     * '4': [ [ 5, 3 ] ] }
     *  */






//使用async await时遇见的bug测试一下


// const aa = getTimeArr.map(async(list) => {
//         let ff = await

//         function() {
//             // setTimeout(() =>
//             //     console.log('aafsdf'), 10)
//             console.log('aafsdf')
//         }()
//         console.log('ffff')
//         return 'ff'
//     })
// console.log(aa)  //promise....


// const sdf = async(list) => {
//     let ff = await

//     function() {
//         console.log('aafsdf')
//     }()
//     console.log('ffff')
//     return 'ff'
// }

//解决方法
// console.log(sdf().then(aa => console.log(aa)))  //'ff'