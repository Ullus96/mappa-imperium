<template>
	<div class="turn__container">
		<div class="turn__item">
			<p class="turn__title">Turn</p>
			<div class="turn__counters">
				<p class="turn__current">{{ $store.state.counters.turnCurrent }}</p>
				<p class="turn__total">{{ $store.state.counters.turnsTotal }}</p>
			</div>
		</div>
		<div class="turn__item">
			<p class="turn__title">Player</p>
			<div class="turn__counters">
				<p class="turn__current">{{ $store.state.counters.playerCurrent }}</p>
				<p class="turn__total">{{ $store.state.gameSettings.playersTotal }}</p>
			</div>
		</div>
		<div class="turn__item">
			<p class="turn__title">Debug</p>
			<div class="turn__counters">
				<p class="turn__current">{{ $store.state.counters.currentStage }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
