const inp=document.querySelector(".total-input-rupee");

const tp=document.querySelector(".number-of-people");

const gb=document.querySelector(".generate-bill-btn");

const ct=document.querySelector(".custom-tip");
//tipcontainer
const tipsContainer=document.querySelector(".tip-container");

const epb=document.querySelector(".each-person-bill span");

const t=document.querySelector(".total span");

const ta=document.querySelector(".tip-amount span");

const resetBtn=document.querySelector(".reset-btn");
let TipsPercentage;
gb.addEventListener("click", ()=>{

        const inputRupee= parseInt(inp.value);
        const totaPeople= parseInt(tp.value);
        const customTip=parseInt(ct.value);
        
        const tipAmount=inputRupee * (TipsPercentage/100);
        const totalBill=inputRupee + tipAmount;
        epb.innerText=totalBill/totaPeople;

        ta.innerText=tipAmount;
        // const finalBill=inputRupee +customTip;
        t.innerText=totalBill;
});

tipsContainer.addEventListener("click", (evt)=>{
    // console.log(evt.target , tipsContainer);
    if(evt.target!=tipsContainer)
    {
        // console.log(parseInt(evt.target.innerText));    forEach hamesha array p hi lgta h
        [...tipsContainer.children].forEach((tip)=>{
            tip.classList.remove('selected');
        })
        evt.target.classList.add('selected');
        TipsPercentage=parseInt(evt.target.innerText);
        ct.value="";
    }
});
ct.addEventListener("input",()=>{
    TipsPercentage=parseInt(ct.value);
    [...tipsContainer.children].forEach((tip)=>{
        tip.classList.remove('selected');
    });
})

resetBtn.addEventListener("click", ()=>{
    
        epb.innerText='';

        ta.innerText='';
        // const finalBill=inputRupee +customTip;
        t.innerText='';
        inp.value='';
 tp.value='';

 gb.value='';

 ct.value='';
//tipcontainer
 tipsContainer.value='';
 [...tipsContainer.children].forEach((tip)=>{
    tip.classList.remove('selected');
});
})