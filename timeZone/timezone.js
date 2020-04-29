// import data from "./timezoneResource"
let data = require("./timezoneResource.js")

let xmlSplit1 = ", please sort by country code value-->"
let xmlSplit2 = "</string-array>\n<string-array"
let xmlSplit3 = "<item>"
let xmlSplit4 = "</item>"
let resourceArr = []
let XmlArr = []
let diffTimeZone = []
let tem = 1

let getArr = str => str.split("\n");

//判断是否是长度符合的数组
// console.log(getArr(data.country).length)
// console.log(getArr(data.timezone).length)
// console.log(getArr(data.city).length)

//三个数组变为一个对象
getArr(data.country).map((item, index) =>{
    let obj = {};
    obj["country"] = item;
    obj["timezone"] = getArr(data.timezone)[index];
    obj["city"] = getArr(data.city)[index].replace("（","(").replace("）","").replace(")","").replace(/\s*$/,"").split("(")[1]
    // resourceArr.push(obj)
    resourceArr[index] = obj
    // resourceArr[resourceArr.length] = obj
})
// console.log(resourceArr)

//截取xml要用的部分生成json数据
data.xmlInfo.split(xmlSplit1).map(item => {
    let has = false
    let equals = true
    let a = 0
    let obj = {}
    let arr = item.substring(item.lastIndexOf("--")+2).split(" ")

    resourceArr.map(item => {
        item.country == arr[1] && (item["id"] = arr[0]) && (has = true)
    })
    !has && (item["id"] = "null")
    // !has && (console.log(arr[1]))
    item.split(xmlSplit2).map(stringArr => {
        (a++ > 1) && console.log(item)
       let StringItemArr  =  stringArr.split(xmlSplit3)
       if(StringItemArr.length == 2){
            let str = StringItemArr[1].split(xmlSplit4)[0]
            a == 1? (obj["timezone"] = str): (obj["city"] = str)
       } else {
            equals = false
       }
    })
    // !equals && console.log(item)
    equals && (obj["id"] = tem) && XmlArr.push(obj)
    tem = arr[0]
})
// console.log(XmlArr)

//对比两个json数据找出timezone不同项，给xml数据添加城市项
resourceArr.map(resItem => {
    let temObj = {}
    XmlArr.map((xmlItem, index) => {
        if(xmlItem["timezone"].indexOf("UTC") != -1 && xmlItem.id == resItem.id) {
            XmlArr[index]["excelCity"] = resItem.city
            let isEquals = xmlItem.timezone.replace(/\s*/g,"") == resItem.timezone.replace(/\s*/g,"")
            if(resItem["timezone"].indexOf("UTC") != -1 && !isEquals){
                temObj["country"] = resItem.country
                temObj["resTimeZone"] = resItem.timezone
                temObj["xmlTimeZone"] = XmlArr[index].timezone
                diffTimeZone.push(temObj)
            }
        }
    })
})
// console.log(diffTimeZone)
// console.log(XmlArr)

//得到city的不同项
let differentCity = XmlArr.filter(xmlItem => xmlItem.excelCity && xmlItem.city.split("/")[1] != xmlItem.excelCity)
// console.log(differentCity)


//重新拼xml文件
let targetXml = data.xmlInfo.split(xmlSplit1).map( oleItem => {
    let newItem = oleItem;
    XmlArr.map(xmlItem => {
        if(oleItem.indexOf(xmlItem.city) != -1 && xmlItem.excelCity){
            newItem = oleItem.split(xmlItem.timezone).join(xmlItem.excelCity);
        }
    })
    return newItem
}).join(xmlSplit1)

// console.log(targetXml)