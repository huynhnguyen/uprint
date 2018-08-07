import * as R from 'Ramda';
import * as C from 'colors';
const getIndent = (level:number)=>R.repeat(' ',level).join('');

const displayString = (data:any, level:number)=>{
    let indent = getIndent(level);
    console.log(indent + data);
}
const displayObject = (data:any, level:number)=>{
    let indent = getIndent(level);
    for(let k in data){
        console.log(indent + k+':')
        console_print(data[k], level + 1);
    }
}
const displayArray = (data:any, level:number)=>{
    let indent = getIndent(level);
    console.log(indent + '[');
    for(let el of data){
        console.log(indent +' ['+el.join(', ')+']');
    }
    console.log(indent + ']');
}
const displayType:any = {  
    'Object': displayObject,
    'Array': displayArray,
    'ArrayBuffer': displayArray,
}
const console_print = (data:any, level:number=0)=>{
    const type = ''+R.type(data);
    const _display = displayType[type];
    if(_display){
        _display(data,level);
    }
    else{
        displayString(data, level);
    }
}
export { console_print }