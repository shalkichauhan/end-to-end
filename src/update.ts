import {UserData} from "./type";

export function updatData(mongoObj:UserData){
    for(let item in mongoObj){
        mongoObj[item].properties.profile.name.first='shalki'
    }

console.log(mongoObj[0].properties.profile.name)
}