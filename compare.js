
const data = require('./resource.js')

let getArr = str => str.split("\n");
let DOption = ["DCountry", "DEngName", "DLanguage"];
let EXLOption = ["exlCountry", "exlEngName", "exlSortName"];

// console.log(getArr(data.DCountry).length)
// console.log(getArr(data.DEngName).length)
// console.log(getArr(data.DLanguage).length)
// console.log(getArr(data.exlCountry).length)
// console.log(getArr(data.exlEngName).length)
// console.log(getArr(data.exlSortName).length)

const generaterJson = (arr1, arr2, arr3, option) => {
    let sourceArr = [];
    arr1.map((item, index) => {
        let obj = {};
        obj[option[0]] = item;
        obj[option[1]] = arr2[index];
        obj[option[2]] = arr3[index];
        sourceArr[index] = obj;
    })
    return sourceArr;
}

let DJsonData = generaterJson(getArr(data.DCountry), getArr(data.DEngName),getArr(data.DLanguage), DOption)
let EXLJsonData = generaterJson(getArr(data.exlCountry), getArr(data.exlEngName),getArr(data.exlSortName), EXLOption)

DJsonData.map(Ditem => {
    let splitArr = Ditem.DLanguage.replace("（","(").replace("）","").replace(")","").replace(/\s*$/,"").split("(")
    let string = splitArr.length == 2 && splitArr[1].substring(0, 3).toLowerCase()
    EXLJsonData.some(EXLitem => {
        if(Ditem.DCountry == EXLitem.exlCountry || Ditem.DEngName == EXLitem.exlEngName) {
            string = `${EXLitem.exlSortName}_${string}`;
            return true;
        }
    })
    // if(string.length != 7){}
    console.log(string)
})









