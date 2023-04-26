<template>
	<section class="modal" tabindex="-1" id="pokeModal">
		<div class="modal-dialog">
			<div class="modal-content bg-dark">
				<div class="modal-header bg-dark">
					<h5 class="modal-title text-light">My Team</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body bg-dark">
					<PokeTeam />
				</div>
				<div class="modal-footer bg-dark">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import PokeTeam from "./PokeTeam.vue";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		PokeTeam,
	},
});
</script>
