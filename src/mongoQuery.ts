import {ObjectId} from "mongodb";
import {UserData} from "./type";
import {updatData} from "./update";

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017/'
const databaseName = 'user'

export async function findDataMongodb(primaryKey: string[]) {
    let arr:UserData = []
    const updatedName={
        properties:{
            profile:{
                name:{
                    last:'chauhan',
                    end:'Australia'
                },
                school:'Hiltons'
            }
        }
    }
    try {

        const client = await MongoClient.connect(url)
        const db = await client.db(databaseName)
        for (let value of primaryKey) {
            const saveData: UserData = await db.collection('user_details').updateOne({'email':value},{$set: updatedName})
            // const saveData: UserData = await db.collection('user_details').find({'email': value}).toArray()

            if (saveData.length !== 0) {
                arr.push(saveData[0])
            }
        }
    } catch (error) {
        console.log(error)
    }
    if (arr.length !== 0) {
        updatData(arr)
        return arr
    }
    return "data not found"

}



