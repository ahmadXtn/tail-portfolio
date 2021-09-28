import '../css/main.css';


const themes = [
	"dark", "light", "cupcake",
	"bumblebee", "emerald", "corporate",
	"synthwave", "retro", "cyberpunk",
	"valentine", "halloween", "garden",
	"forest", "aqua", "lofi",
	"pastel", "fantasy", "wireframe",
	"black", "luxury", "dracula"
]


const themeWrapper = document.getElementById('theme_wrapper');

themes.forEach(elm => {
	themeWrapper.insertAdjacentHTML("beforeend", themeSectionView(elm));
});


function themeSectionView(themeName) {
	return `<section class="theme" data-theme="${themeName}">
			<div>
			<strong>${themeName}</strong><br>
			<button class="btn">
			   Version 2.7.0
			<div class="badge ml-2">new</div>
			</button>
			<button class="btn btn-primary">
			    Inbox
			    <div class="badge ml-2 badge-outline">3</div>
			</button>
			<button class="btn btn-secondary btn-outline">
			    Notifications
			    <div class="badge ml-2 badge-outline">+999</div>
			</button>
			<button class="btn btn-accent">
			    accent
			    <div class="badge ml-2 badge-outline">new</div>
			</button>
			</div>	
			</section>`;
}
