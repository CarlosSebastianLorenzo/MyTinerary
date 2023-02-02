const toggleDarkMode = ()=>{

    const getRoot = getComputedStyle(document.documentElement);
    const root = document.documentElement;

    let isDark = getRoot.getPropertyValue('--dark-bg-color') === getRoot.getPropertyValue('--bg-color')

    if (isDark) {
        root.style.setProperty('--bg-color', 'var(--light-bg-color)');
        root.style.setProperty('--text-color', 'var(--light-text-color)');
        root.style.setProperty('--primary-color', 'var(--light-primary-color)');
        root.style.setProperty('--secondary-color', 'var(--light-secondary-color)');
        root.style.setProperty('--brightness', 'var(--light-brightness)'); 
    } else {
        root.style.setProperty('--bg-color', 'var(--dark-bg-color)');
        root.style.setProperty('--text-color', 'var(--dark-text-color)');
        root.style.setProperty('--primary-color', 'var(--dark-primary-color)');
        root.style.setProperty('--secondary-color', 'var(--dark-secondary-color)');
        root.style.setProperty('--brightness', 'var(--dark-brightness)');        
    }
}

export default toggleDarkMode