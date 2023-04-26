<template>
	<Fragment class="team">
		<h1>My Team</h1>
		<PokeTeam />
	</Fragment>
</template>

<script lang="ts">
import PokeTeam from "@/components/PokeTeam.vue";
import { Component, Vue } from "vue-property-decorator";
import { Fragment } from "vue-fragment";
@Component({
	components: {
		PokeTeam,
		Fragment,
	},
})
export default class MyTeamView extends Vue {}
</script>
