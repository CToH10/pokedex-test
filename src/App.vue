<template>
	<div id="app">
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<router-link class="nav-link text-light navbar-toggler" to="/">
				Home
			</router-link>
			<router-link class="nav-link text-light navbar-toggler" to="/myTeam">
				My Team
			</router-link>
		</nav>
		<router-view />
	</div>
</template>
