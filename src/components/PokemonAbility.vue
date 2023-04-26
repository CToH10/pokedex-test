<template>
	<li class="ability">
		<h4 class="title">
			{{ moves.move.name }}
		</h4>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

function iMove() {
	return {
		move: {
			name: String,
			url: String,
		},
		version_group_details: String,
	};
}
export default defineComponent({
	props: {
		moves: {
			type: iMove,
			required: true,
		},
	},
});
</script>

<style>
li {
	list-style: none;
}

h4 {
	text-transform: capitalize;
}
</style>
