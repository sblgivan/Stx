document.addEventListener('DOMContentLoaded', function() {
    // Update last updated date
    const lastUpdated = new Date().toLocaleDateString();
    document.getElementById('lastUpdated').textContent = lastUpdated;

    // Example file size (replace with actual size)
    document.getElementById('fileSize').textContent = '2.5 MB';

    // Add copy button to code examples
    addCopyButtons();
});

function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';
        button.onclick = () => {
            navigator.clipboard.writeText(block.textContent);
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = 'Copy', 2000);
        };
        block.parentNode.insertBefore(button, block);
    });
}
