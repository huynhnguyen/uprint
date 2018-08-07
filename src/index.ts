import { console_print } from './console_display';
import { web_print } from './windown_display';
import { isBrowser } from './utils';
enum color {

}
enum display_mode {
    'info' = 1,
    'debug' = 1,
    'error' = 1
}
const uprint = (data:any, mode:display_mode, element?:string)=>{
    const display_function = isBrowser()?web_print:console_print; 
    display_function(data);
}

export { uprint };