export default function fetchBitcoin(numberClass){
    fetch('https://blockchain.info/ticker')
.then(res => res.json())
.then(res=>{
    document.querySelector(numberClass).innerText = (100/res.BRL.last).toFixed(6);
    //console.log(res.BRL.last);
})
.catch(error=>{
    console.log(error);
});
}


