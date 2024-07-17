import { features } from "process"

function storeCarinfo (make : string, modelName: string, ...extraOption :{[key : string]: any} []) 
: object {

    const carInfo = {

        make,
        modelName,
        ...Object.assign({}, ...extraOption )
    }

    return carInfo
        }

let answer = storeCarinfo('Honda', 'civic', {color : 'black'}, {features: ['navigation', 'power window']})
console.log(answer)