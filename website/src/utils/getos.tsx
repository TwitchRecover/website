export const getOS = () => {
    var OS:String = "Unkown";
    
    if (navigator.userAgent.indexOf("Window")!== -1) OS="Windows";
    if (navigator.userAgent.indexOf("Mac")!== -1) OS="Mac";
    if (navigator.userAgent.indexOf("Linux")!== -1) OS="Linux";

    return OS;
}