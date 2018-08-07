const isBrowser=()=>{
    try {return this===window;}
    catch(e){ return false;};
}

export { isBrowser }