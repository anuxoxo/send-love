document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter' && !event.shiftKey) {
        event.preventDefault()
        document.querySelector('.btn').click();
    }
})