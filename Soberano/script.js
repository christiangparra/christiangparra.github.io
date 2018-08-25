document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = (lbs*100000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById('oldOutput').innerHTML = (lbs*100000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
});
