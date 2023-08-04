<template>
	<div class="header__container container">
		<nav class="nav">
			<ul class="nav__list">
				<router-link to="/"
					><img
						src="@/assets/mappa-logo.png"
						alt="Mappa Imperium"
						class="nav__logo"
				/></router-link>
				<div class="nav__list--center">
					<router-link to="/"><li class="nav__item">About</li></router-link>
					<router-link to="/play"><li class="nav__item">Play</li></router-link>

					<li class="nav__item">
						<a href="https://nookrium.itch.io/mappa-imperium" target="_blank"
							>Download&nbsp;Rulebook&nbsp;<i
								class="fa-solid fa-up-right-from-square"
							></i
						></a>
					</li>
				</div>
				<div class="nav__language-box">&nbsp;</div>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
