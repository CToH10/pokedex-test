<template>
	<Fragment class="team">
		<h1
			class="text-light position-absolute start-50 translate-middle bg-dark z-index-2"
			style="top: clamp(60px, 10%, 75px)"
		>
			My Team
		</h1>
		<PokeTeam
			class="position-absolute start-50 translate-middle d-flex justify-content-center flex-wrap"
			style="
				top: clamp(325px, 40vh, 1000px);
				height: 475px;
				overflow: auto;
				width: 80%;
			"
		/>
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
