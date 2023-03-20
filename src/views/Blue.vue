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
		uBlueWave: {
			value: number;
		};
		uRatio: {
			value: number;
		};
	};
}

const material = inject<Material>('mat')!;
const duration = inject<number>('duration')!;

gsap.to(material.uniforms.uColor.value, { r: 0, g: 0, b: 1.0, duration: duration });
gsap.to(material.uniforms.uBlueWave, { value: 0.1, duration: duration * 0.5, delay: duration * 0.3 });
gsap
	.timeline()
	.to(material.uniforms.uRatio, { value: 0.5, duration: duration * 0.5 })
	.to(material.uniforms.uRatio, { value: 0, duration: duration * 0.5 });

onBeforeRouteLeave((to, from) => {
	gsap.to(material.uniforms.uBlueWave, { value: 0, duration: duration * 0.5 });
});
</script>
<template>
	<p class="text">Blue</p>
</template>
