import {findDataMongodb} from "./mongoQuery";
import {ObjCreation, UserData} from "./type";
import {dataProcessor} from "./dataProcessor";


export async function requestHandler(value:{userData:string}):Promise<ObjCreation[] | string>{
    const data = value.userData
    data.trim()
    const arrayOfData=data.split(',')
    const userData:UserData|string = await findDataMongodb(arrayOfData)
    if(Array.isArray(userData)){
       return dataProcessor(userData)
    } return userData



}