import {ObjectId} from 'mongodb'

export type Request ={
    body:{
        userData :string
    }
}
type Name={
    first:string,
    middle:string

}
type Profile={
    isComplete:boolean,
    name:Name,
    hasI18nBeenSet:boolean,

}


type Properties={
    platformManaged:boolean,
    profile:Profile,
    _tid:string,
    inviteSource:string

}

export type UserData = {

    _id:ObjectId,
    status:string,
    properties:Properties,
    roles: string[],
    resetTokens?:[],
    email:string,
    _originalEmail:string
}[]

export type ObjCreation=
    {
        firstName:string,
        middleName:string,
        role:string
    }