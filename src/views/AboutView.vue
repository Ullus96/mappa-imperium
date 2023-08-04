<template>
	<header class="header">
		<div class="header__content container">
			<img src="@/assets/wind-rose.png" alt="#" class="header__background" />
			<h1 class="header__title">
				Unleash your world-building skills.<br />Discover <br />Mappa Imperium.
			</h1>
		</div>
	</header>
	<section class="welcome">
		<div class="welcome__container container">
			<div class="welcome__image-container">
				<img src="@/assets/welc-1.jpg" alt="#" class="welcome__image" />
				<img src="@/assets/welc-2.jpg" alt="#" class="welcome__image" />
				<img src="@/assets/welc-3.jpg" alt="#" class="welcome__image" />
				<img src="@/assets/welc-4.jpg" alt="#" class="welcome__image" />
			</div>

			<h2 class="welcome__title">Welcome to Mappa Imperium</h2>
			<div class="welcome__text-container">
				<p class="welcome__text">
					Mappa Imperium is an immersive print & play World Building game
					designed for unleashing your wildest imagination. Be it solo or with
					your friends, together you will conquer a world of untold mysteries
					and wonders.
				</p>
				<p class="welcome__text">
					Dividing the map equally among players, you will create awe-inspiring
					landmasses, geography, and resources. Step up as a mighty faction
					leader and turn your struggling settlements into legendary empires or
					risk being forgotten in the annals of history.
				</p>
			</div>
		</div>
	</section>
	<section class="how">
		<div class="how__container container">
			<h3 class="how__title">How It Works</h3>
			<div class="how__grid">
				<div class="how__steps">
					<div class="how__step">
						<h4 class="how__title">Roll the Dice</h4>
						<p class="how__desc">
							Let chance decide various aspects of your empire
						</p>
					</div>
					<div class="how__step">
						<h4 class="how__title">Create Your Story</h4>
						<p class="how__desc">
							Design an epic storyline and unique features
						</p>
					</div>
					<div class="how__step">
						<h4 class="how__title">Build Your World</h4>
						<p class="how__desc">
							Forge landscapes and resources for your realm
						</p>
					</div>
				</div>
				<img src="@/assets/map.jpg" alt="#" class="how__img" />
			</div>
		</div>
	</section>
	<section class="yt">
		<div class="yt__container container">
			<h3 class="yt__title">Watch a Full Playthrough Video</h3>
			<div class="yt__video">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/UM7tcjazp5k"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</section>
	<section class="cta">
		<div class="cta__container container">
			<img src="@/assets/wind-rose.png" alt="#" class="cta__img" />
			<h3 class="cta__title">Ready?</h3>
			<p class="cta__text">
				Experience the excitement of Mappa Imperium now and embark on a
				fantastic journey of world-building. Are you prepared to create your
				legendary empire?
			</p>
			<button class="cta__btn btn">
				<router-link to="/play">Begin Your Adventure</router-link>
			</button>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style></style>
