<template>
	<li class="ability">
		<h4 class="text-light text-capitalize">
			{{ move.name }}
		</h4>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

function iMove() {
	return {
		name: String,
		url: String,
	};
}
export default defineComponent({
	props: {
		move: {
			type: Object as typeof iMove,
			required: true,
		},
	},
});
</script>
