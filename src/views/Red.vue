<script lang="ts" setup>
import { inject } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { gsap } from 'gsap';
import { Vector2 } from 'three';

interface Material {
	uniforms: {
		uColor: {
			value: {
				r: number;
				g: number;
				b: number;
			};
		};
		uResolution: {
			value: Vector2;
		};
		uReadWave: {
			value: number;
		};
		uRatio: {
			value: number;
		};
	};
}

const material = inject<Material>('mat')!;
const duration = inject<number>('duration')!;

gsap.to(material.uniforms.uColor.value, { r: 1.0, g: 0, b: 0, duration: duration });
gsap.to(material.uniforms.uResolution.value, { x: 350, y: 200, duration: duration });
gsap.to(material.uniforms.uReadWave, { value: 0.2, duration: duration * 0.5, delay: duration * 0.3 });
gsap
	.timeline()
	.to(material.uniforms.uRatio, { value: 0.5, duration: duration * 0.5 })
	.to(material.uniforms.uRatio, { value: 0, duration: duration * 0.5 });

onBeforeRouteLeave((to, from) => {
	gsap.to(material.uniforms.uResolution.value, { x: 0, y: 0, delay: duration });
	gsap.to(material.uniforms.uReadWave, { value: 0, duration: duration * 0.5 });
});
</script>
<template>
	<p class="text">Red</p>
</template>
