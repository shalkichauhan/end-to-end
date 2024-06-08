import {ObjCreation, UserData} from "./type";

export function dataProcessor(data:UserData) {
    //iterate
    let objectOfInfo:ObjCreation
    let arr = []

    for (let item in data) {
        objectOfInfo = {
            firstName: data[item].properties.profile.name.first,
            middleName: data[item].properties.profile.name.middle,
            role: data[item].roles.join(',')
        }
        arr.push(objectOfInfo)
    }
}