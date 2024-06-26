function applyCommitDetailsInCommitPage() {
    const urlParts = window.location.pathname.split('/');

    // Check if the current page is a commit page
    // Example URL: https://github.com/openai/whisper/commit/ba3f3cd54b0e5b8ce1ab3de13e32122d0d5f98ab
    // Example URL: https://github.com/{owner}/{repo}/commit/{commit-hash}
    const isCommitPage = urlParts && urlParts.length === 5 && urlParts[3] === 'commit';
    if (isCommitPage) {
        console.log('GitHub Prime: Applying commit details...');
        const browseAtTimeLink = document.getElementById('browse-at-time-link');

        if (browseAtTimeLink) {
            // بررسی اینکه آیا دکمه‌های ما قبلاً وجود دارند یا خیر
            if (!document.getElementById('commit-details-link') && !document.getElementById('button-container')) {
                // Create a new div to hold both buttons
                const buttonContainer = document.createElement('div');
                buttonContainer.id = 'button-container';
                buttonContainer.style.textAlign = 'right';
                buttonContainer.style.display = 'flex';
                buttonContainer.style.flexWrap = 'wrap';
                buttonContainer.style.alignContent = 'flex-start';
                buttonContainer.style.justifyContent = 'flex-end';
                buttonContainer.style.alignItems = 'flex-start';
                buttonContainer.style.flexDirection = 'row';
                buttonContainer.style.gap = '4px';

                // Create the new button
                const newButton = document.createElement('a');
                newButton.target = '_blank';
                newButton.id = 'commit-details-link';
                newButton.href = `${window.location.href}.patch`;
                newButton.textContent = 'Commit Details';
                newButton.className = browseAtTimeLink.className + ' prime-btn';

                // Insert the new button and the original browseAtTimeLink into the new div
                buttonContainer.appendChild(newButton);
                buttonContainer.appendChild(browseAtTimeLink.cloneNode(true));

                // Replace the original browseAtTimeLink with the new div
                browseAtTimeLink.parentNode.replaceChild(buttonContainer, browseAtTimeLink);
            }
        }

        // Convert span elements with class "sha user-select-contain" to links
        const shaElements = document.querySelectorAll('span.sha.user-select-contain');
        shaElements.forEach(function (shaElement) {
            if (!shaElement.getAttribute('data-converted')) {
                const shaText = shaElement.textContent;
                const shaLink = document.createElement('a');
                shaLink.target = '_blank';
                shaLink.href = `${window.location.href}.patch`;
                shaLink.textContent = shaText;
                shaLink.className = shaElement.className + ' prime-btn';
                shaLink.setAttribute('data-converted', 'true');

                shaElement.parentNode.replaceChild(shaLink, shaElement);
            }
        });
    }
}
