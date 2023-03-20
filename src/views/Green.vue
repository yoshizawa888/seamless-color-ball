<script lang="ts" setup>
import { inject } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { gsap } from 'gsap';

interface Material {
	uniforms: {
		uColor: {
			value: {
				r: number;
				g: number;
				b: number;
			};
		};
		uGreenWave: {
			value: number;
		};
		uRatio: {
			value: number;
		};
	};
}

const material = inject<Material>('mat')!;
const duration = inject<number>('duration')!;

gsap.to(material.uniforms.uColor.value, { r: 0, g: 1.0, b: 0, duration: duration });
gsap.to(material.uniforms.uGreenWave, { value: 0.3, duration: duration * 0.5, delay: duration * 0.3 });
gsap
	.timeline()
	.to(material.uniforms.uRatio, { value: 0.5, duration: duration * 0.5 })
	.to(material.uniforms.uRatio, { value: 0, duration: duration * 0.5 });

onBeforeRouteLeave((to, from) => {
	gsap.to(material.uniforms.uGreenWave, { value: 0, duration: duration * 0.5 });
});
</script>
<template>
	<p class="text">Green</p>
</template>
