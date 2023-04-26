<template>
	<div id="app" class="bg-dark h-100">
		<nav class="navbar navbar-expand-md navbar-dark bg-primary">
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
