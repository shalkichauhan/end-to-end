import {findDataMongodb} from "./mongoQuery";
import {UserData} from "./type";
import {dataProcessor} from "./dataProcessor";


export async function requestHandler(value:{userData:string}){
    const data = value.userData
    data.trim()
    const arrayOfData=data.split(',')
    const userData:UserData|string = await findDataMongodb(arrayOfData)
    if(Array.isArray(userData)){dataProcessor(userData)}



}