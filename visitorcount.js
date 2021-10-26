const countEl = document.getElementById('VisitorCount');

updateVisitorCount();

function updateVisitorCount(){
    fetch('https://api.countapi.xyz/update/d2coogfoy12yjk.cloudfront.net/VisitorCount/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value;
    });
}