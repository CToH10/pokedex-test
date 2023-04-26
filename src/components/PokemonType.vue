<template>
	<li>
		<p class="text-light text-capitalize">{{ pokeType.type.name }}</p>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

function iPokeType() {
	return {
		type: {
			name: String,
			url: String,
		},
		slot: Number,
	};
}

export default defineComponent({
	props: {
		pokeType: {
			type: Object as typeof iPokeType,
			required: true,
		},
	},
	data() {
		return {
			style: {
				color: "red",
			},
			name: String,
		};
	},
});
</script>
