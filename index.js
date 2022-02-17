function shadowsUtil(options){
    let images = document.querySelectorAll('.shadowWizard');
    if(options.shadowType === 'hard'){
        options.shadowType = '0px'
    }
    else {
        options.shadowType = '10px'
    }
    images.forEach((image)=>{
        image.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0,0,0,0.12)`;

        if(options.padding) {
            image.style.padding = '10px'
        }
    });
    
}

module.exports.shadowsUtil = shadowsUtil;