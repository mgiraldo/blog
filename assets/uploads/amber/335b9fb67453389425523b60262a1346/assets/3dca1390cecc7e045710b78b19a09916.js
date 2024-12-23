function toggleNavbar() {
	var navbarDiv = document.getElementById('navbar')

	if (!navbarDiv) {
		return;
	}

	if (navbarDiv.style.display === 'none' || navbarDiv.style.display === '') {
		navbarDiv.style.display = 'block';
	} else {
		navbarDiv.style.display = 'none';
	}
}
