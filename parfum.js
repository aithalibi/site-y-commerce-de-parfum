// Gestion des filtres
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const parfumCards = document.querySelectorAll('.parfum-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            parfumCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });

    // Gestion de l'aperçu rapide
    const quickViews = document.querySelectorAll('.quick-view');
    
    quickViews.forEach(view => {
        view.addEventListener('click', (e) => {
            const card = e.target.closest('.parfum-card');
            const parfumName = card.querySelector('h3').textContent;
            const parfumImage = card.querySelector('img').src;
            const parfumPrice = card.querySelector('.price').textContent;
            const parfumSize = card.querySelector('.size').textContent;
            
            // Ici vous pouvez ajouter une modale pour l'aperçu rapide
            alert(`Aperçu rapide de ${parfumName}\nPrix: ${parfumPrice}\nTaille: ${parfumSize}`);
            // Dans une version plus complète, vous pourriez créer une modale
            // avec plus de détails sur le parfum
        });
    });
}); 