export default function initFetchBitcoin(){

}

fetch('https://blockchain.info/ticker')
.then(res => res.json())
.then(res=>{
    document.querySelector('.btc-preco').innerText = (100/res.BRL.last).toFixed(6);
    //console.log(res.BRL.last);
})
.catch(error=>{
    console.log(error);
});
