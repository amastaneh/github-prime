const applyPrimeFeatures = () => {
	try {
		applyCommitDetailsInCommitPage();
	}
	catch (e) { }
}

// =============================================================
// Using MutationObserver to detect URL changes in SPA sites
let handleCommitPageTimeout;
const observer = new MutationObserver((mutations) => {
	clearTimeout(handleCommitPageTimeout);
	handleCommitPageTimeout = setTimeout(() => {
		applyPrimeFeatures();
	}, 300);  // Set a timer to reduce continuous execution
});

observer.observe(document, {
	childList: true,
	subtree: true,
	attributes: true
});

// Additionally, we can listen to History API changes
history.pushState = ((f) =>
	function pushState() {
		const ret = f.apply(this, arguments);
		window.dispatchEvent(new Event('pushstate'));
		window.dispatchEvent(new Event('locationchange'));
		return ret;
	})(history.pushState);

history.replaceState = ((f) =>
	function replaceState() {
		const ret = f.apply(this, arguments);
		window.dispatchEvent(new Event('replacestate'));
		window.dispatchEvent(new Event('locationchange'));
		return ret;
	})(history.replaceState);

window.addEventListener('popstate', () => {
	window.dispatchEvent(new Event('locationchange'));
});

window.addEventListener('locationchange', () => {
	applyPrimeFeatures();
});
