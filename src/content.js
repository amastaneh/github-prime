document.addEventListener('DOMContentLoaded', function () {
	alert("hello")
	console.log("GitHub Prime: DOMContentLoaded")
	const urlParts = window.location.pathname.split('/');
	const isCommitPage = urlParts && urlParts.length >= 4 && urlParts[2] === 'commit';
	console.log("GitHub Prime: urlParts", urlParts)
	if (isCommitPage) {
		const browseAtTimeLink = document.getElementById('browse-at-time-link');
		if (browseAtTimeLink) {
			const newButton = browseAtTimeLink.cloneNode(true);
			newButton.id = 'commit-details-link';
			newButton.href = `${browseAtTimeLink.href}.patch`;
			newButton.textContent = 'Commit Details';
			browseAtTimeLink.parentNode.insertBefore(newButton, browseAtTimeLink.nextSibling);
		}
	}
});
