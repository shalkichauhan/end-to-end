import {findDataMongodb} from "./mongoQuery";
import {UserData} from "./type";


export async function requestHandler(value:{userData:string}){
    const data = value.userData
    data.trim()
    const arrayOfData=data.split(',')
    const userData:UserData|string = await findDataMongodb(arrayOfData)

}