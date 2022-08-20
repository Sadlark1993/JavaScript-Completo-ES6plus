function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements);

    function hide(){
        elements.forEach((item)=>{
            item.style.display = 'none';
        });
        return this;
    }

    function show(){
        elements.forEach((item)=>{
            item.style.display = 'initial';
        });
        return this;
    }

    function on(onEvent, callback){
        elements.forEach(item=>{
            item.addEventListener(onEvent, callback);
        });
        return this;
    }

    return {
        elements,
        hide,
        show,
        on,
    }
}

const btns = $$('button');


console.log(btns.hide().elements);
btns.show();

const handleClick = function(event){
    console.log(event.target);
}

btns.on('click', handleClick);