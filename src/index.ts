import * as R from 'Ramda';
const isBrowser=()=>{
    try {return this===window;}
    catch(e){ return false;};
}
enum color {

}
enum display_mode {
    'info' = 1,
    'debug' = 1,
    'error' = 1
}
const uprint = (data:any, mode:display_mode, element?:string)=>{
    const console_print = (d:any)=>{
        console.log('sdfad');
    }
    const web_print = (d: any)=>{
        console.log('windown');
    }
    const display_function = isBrowser()?web_print:console_print; 
    display_function(data);
}

export { uprint };