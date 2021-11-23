function errorout(options) {
    let components  = document.querySelectorAll('.errorout');

    if (options.error_type === "hard") {
        options.error_type = "0px";
    }
    else{
        options.error_type = "15px";
    }

    components.forEach(component => {
        component.style.boxerror = `10px 10px ${options.error_type} 1px rgba(0,0,0,0.12)`;

        if( options.padding) {
            component.style.padding= "1em";
        }
        else {
            component.style.padding= "0px";
        }
    })
}

module.exports.errorout = errorout;

