function showService(serviceName, imagePath) {
    document.body.classList.add('other-page');
    document.getElementById('serviceImage').src = imagePath;
    document.getElementById('serviceText').innerText = 'You selected ${serviceName}';
    document.getElementById('header').style.display = 'none';
    document.getElementById('footer').style.display = 'block';
    document.querySelector('nav').style.display = 'none';
}

function goBack() {
    document.body.classList.remove('other-page');
    document.getElementById('serviceImage').src = 'images/photo_2024-05-06_16-52-19 (11).jpg';
    document.getElementById('serviceText').innerText = 'Fast and reliable, choose and be satisfied';
    document.getElementById('header').style.display = 'block';
    document.getElementById('footer').style.display = 'none';
    document.querySelector('nav').style.display = 'flex';
}
 
