const client = document.querySelector('#client');
client.addEventListener('submit', async function(e) {
    //e.preventDefault();
    console.log(tcaID)
    console.log(client.elements.firstName)
    //axios.put(`/tcas/${tcaID}`, client.elements);
})


const cc1 = document.querySelector('#cc1');
cc1.addEventListener('click', () => {
    document.getElementById('closingCosts1').style.display = 'block';
    document.getElementById('monthlyCosts1').style.display = 'none';
    document.getElementById('product1').style.display = 'none';
    document.getElementById('client').style.display = 'none';
})

const mc1 = document.querySelector('#mc1');
mc1.addEventListener('click', () => {
    document.getElementById('monthlyCosts1').style.display = 'block';
    document.getElementById('closingCosts1').style.display = 'none';
    document.getElementById('product1').style.display = 'none';
    document.getElementById('client').style.display = 'none';
})

const p1 = document.querySelector('#p1');
p1.addEventListener('click', () => {
    document.getElementById('monthlyCosts1').style.display = 'none';
    document.getElementById('closingCosts1').style.display = 'none';
    document.getElementById('product1').style.display = 'block';
    document.getElementById('client').style.display = 'none';
})