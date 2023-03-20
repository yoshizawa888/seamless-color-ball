<script lang="ts" setup>
import { ref, onMounted, provide } from 'vue';

import { WebGLRenderer, Scene, PerspectiveCamera, Mesh, SphereGeometry, ShaderMaterial, DoubleSide, IUniform, Color, Clock, Vector2 } from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import vertexShader from '../shaders/shader.vert?raw';
import fragmentShader from '../shaders/shader.frag?raw';

const canvas = ref();

// アニメーションの時間
const duration = 2;
provide('duration', duration);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10);
camera.position.set(0, 0, 3);

const scene = new Scene();

const geometry = new SphereGeometry(1, 32, 32);

const uniform: Record<string, IUniform> = {
	uColor: { value: new Color('#000000') },
	uTime: { value: 0 },
	uBlueWave: { value: 0 },
	uGreenWave: { value: 0 },
	uReadWave: { value: 0 },
	uResolution: { value: new Vector2(0, 0) },
	uRatio: { value: 0 },
};

const material = new ShaderMaterial({
	vertexShader: vertexShader,
	fragmentShader: fragmentShader,
	side: DoubleSide,
	uniforms: uniform,
});
provide('mat', material);

const mesh = new Mesh(geometry, material);
scene.add(mesh);

window.addEventListener(
	'resize',
	() => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	},
	false
);

const setControll = () => {
	document.addEventListener(
		'touchmove',
		function (e) {
			e.preventDefault();
		},
		{ passive: false }
	);
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	controls.dampingFactor = 0.5;
};
const clock = new Clock();
const render = () => {
	requestAnimationFrame(() => {
		render();
	});
	renderer.render(scene, camera);
	// controls.value?.update();
	const elapsedTime = clock.getElapsedTime();
	uniform.uTime.value = elapsedTime;
};

onMounted(() => {
	canvas.value.appendChild(renderer.domElement);
	setControll();
	render();
});
</script>
<template>
	<nav class="nav">
		<router-link to="/" class="nav__link">Red</router-link>
		<router-link to="/blue" class="nav__link">Blue</router-link>
		<router-link to="/green" class="nav__link">Green</router-link>
	</nav>
	<div ref="canvas" id="canvas"></div>
	<router-view v-slot="{ Component }">
		<transition>
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
</style>
