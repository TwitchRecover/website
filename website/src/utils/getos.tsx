export const getOS = () => {
    var OS = "Unkown";
    
    if (navigator.userAgent.indexOf("Window")!= -1) OS="Windows";
    if (window.navigator.userAgent.indexOf("Mac")!= -1) OS="Mac/iOS";
    if (window.navigator.userAgent.indexOf("Linux")!= -1) OS="Linux";

    return OS;
}