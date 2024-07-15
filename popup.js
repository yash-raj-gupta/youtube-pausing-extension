document.addEventListener('DOMContentLoaded', function() {
    const statusDiv = document.getElementById('status');
    const toggleButton = document.getElementById('toggleButton');

    let isActive = true;

    function updateUI() {
        statusDiv.textContent = `Status: ${isActive ? 'Active' : 'Inactive'}`;
        toggleButton.textContent = isActive ? 'Disable' : 'Enable';
    }

    toggleButton.addEventListener('click', function() {
        isActive = !isActive;
        updateUI();

        // Send a message to the content script to enable/disable functionality
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { isActive: isActive });
        });
    });

    updateUI();
});
