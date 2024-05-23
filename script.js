document.getElementById('surpriseBtn').addEventListener('click', function() {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.style.display = 'block';
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartsContainer.appendChild(heart);
    }
    
    // Mudar o texto do botão para "Te amo"
    this.textContent = 'Te Amo';
});



document.getElementById('videoBtn').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=gP-HXBKgU-0', '_blank');
});


document.getElementById('photoBtn').addEventListener('click', function() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.style.display = 'flex'; // Mostra as miniaturas ao clicar
});

document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const modal = document.getElementById('photoModal');
        const modalImg = document.getElementById('photo');
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('photoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};