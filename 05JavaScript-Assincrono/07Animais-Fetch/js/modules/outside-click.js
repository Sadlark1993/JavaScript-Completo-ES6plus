
export default function outsideClick(element, events, callBack){
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)){
    events.forEach((userEvent)=>{
      setTimeout(()=>html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(event){
    //event.target: onde o click ocorreu
    //event.currentTarget: this
    if(!element.contains(event.target)){
      callBack();
      events.forEach((userEvent)=>{
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      element.removeAttribute(outside);
    }
  }
}