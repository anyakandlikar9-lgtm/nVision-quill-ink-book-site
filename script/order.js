const purchaseAgain = document.querySelectorAll('.js-add-to-cart-again');

purchaseAgain.forEach(button => {
  button.addEventListener('click', () => {
    const purchaseMes = button.querySelector('.purchase-again-mes');
    const purchaseIcon = button.querySelector('.purchase-again-I');

    purchaseMes.textContent = 'Added To Cart 📕'
    button.style.backgroundColor = 'rgb(247, 172, 195)';
    
    
    if(purchaseIcon) purchaseIcon.style.display = 'none';

    setTimeout(() => {
      purchaseMes.textContent = 'Re-add To Cart'
      button.style.backgroundColor = 'rgba(235, 161, 183, 0.774';
      
      if(purchaseIcon) purchaseIcon.style.display = 'inline';
    },2000)
  });
});

