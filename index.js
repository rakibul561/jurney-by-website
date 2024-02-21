
const allbtn = document.getElementsByClassName('add-btn');
console.log(allbtn);
let count = 0;

for (const btn of allbtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;

        const placeName = e.target.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selecContsiner = document.getElementById('selected-place-container');

        const li = document.createElement("li");

        const p = document.createElement('p');
        p.innerText = placeName;

        const p2 = document.createElement('p')
        p2.innerText = price


        e.target.parentNode.parentNode.style.background = "green"


        li.appendChild(p);
        li.appendChild(p2);
        const budget = document.getElementById('budget').innerText;
        const convertedbudget = parseInt(budget);

        if (convertedbudget - parseInt(price) < 0) {
            alert('low budget please earn more')
            return;

        }




        document.getElementById('budget').innerText = convertedbudget - parseInt(price);





        selecContsiner.appendChild(li);


        totalcostElement('total-cost', parseInt(price));
        grandtotalcost('grand-total', parseInt(price));

        setInnerText('cart-count', count);
    })
}

function totalcostElement(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedtolalcost = parseInt(totalCost);
    const sum = convertedtolalcost + parseInt(value);
    setInnerText("total-cost", sum)

}
function grandtotalcost(cat) {
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedtolalcost = parseInt(totalCost);
    setInnerText('grand-total', convertedtolalcost);


    if (cat === "bus") {
        setInnerText('grand-total', convertedtolalcost + 100);
    }
    else if (cat === "train") {
        setInnerText('grand-total', convertedtolalcost - 200);
    }
    else if (cat === "flight") {
        setInnerText('grand-total', convertedtolalcost + 500);
    }
    else {
        setInnerText('grand-total', convertedtolalcost);
    }
}




function setInnerText(id, value) {
    document.getElementById(id).innerText = value;



}