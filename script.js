function expandEffect(event) {
    event.preventDefault(); // Prevent the default link behavior

    const appLink = document.getElementById('app-link');
    const expandEffect = appLink.querySelector('.expand-effect');

    // Set initial dimensions and position of expand effect
    expandEffect.style.width = '500px'; // Adjust size as needed
    expandEffect.style.height = '500px'; // Adjust size as needed

    // Trigger the animation
    expandEffect.classList.add('expand');

    // Navigate to the link after a short delay
    setTimeout(() => {
        window.open(appLink.href, '_blank');
    }, 500); // Adjust the delay as needed
}
