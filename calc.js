var interest=[
{
    "type":"himvan",
    "percentage":5
},
{
    "type":"shivank",
    "percentage":10
},

{
    "type":"charu",
    "percentage":30
},
{
    "type":"kellton",
    "percentage":50
},
{
    "type":"banu",
    "percentage":20
}];

function Calculate(typ="singh",amount=0)
{
    
    var obj;
    var ded_amt=0;
    var net_amt;
    for(var i=0;i<interest.length;i++)
    {
        if(interest[i].type==typ)
        {
         ded_amt = (amount*interest[i].percentage)/100;
         net_amt=amount-ded_amt;
         obj={"type":typ,
           "amount":amount,
           "percentage":interest[i].percentage,
            "Deducted Amount":ded_amt,
            "Net Amount":net_amt
            };
            break;
        }
        else{
            obj={"type":typ,
           "amount":amount,
           "percentage":ded_amt,
            "Deducted Amount":ded_amt,
            "Net Amount":amount
            };
        }
        
    }
    return obj;

    
}

var arr2=Calculate("him",110);
console.log(arr2);
