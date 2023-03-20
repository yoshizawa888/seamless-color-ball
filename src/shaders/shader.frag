uniform vec3 uColor;
uniform float uTime;
uniform float uRatio;
uniform vec2 uResolution;

varying float vElevation;
varying float vElevation2;
varying vec3 vNormal;
varying vec3 vPosition;

// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

float random(in vec2 st) {
  return fract(sin(dot(st.xy,
  vec2(12.9898,78.233)))
  * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f*f*(3.0-2.0*f);
  return mix( mix( random( i + vec2(0.0,0.0) ),
  random( i + vec2(1.0,0.0) ), u.x),
  mix( random( i + vec2(0.0,1.0) ),
  random( i + vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float angle){
  return mat2(cos(angle),-sin(angle),
  sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
  float scale = 10.0;
  pos *= scale;
  return smoothstep(0.0,
  .5+b*.5,
  abs((sin(pos.x*3.1415)+b*2.0))*.5);
}

void main() {
  vec3 color;
  vec3 beforeColor;
  vec3 afterColor;

  beforeColor = uColor;

  // blue
  float mixStrengthColor = (vElevation * 1.5) * 7.0;
  vec3 blue = mix(vec3(0.2, 0.4, 1.0), uColor.rgb * 0.9, mixStrengthColor);
  if(uColor.b >= 0.00001) {
    afterColor = blue;
  }
  if(uColor.b >= 0.5) {
    afterColor = beforeColor;
    beforeColor = blue;
  }

  // red
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st.y *= uResolution.y / uResolution.x;
  vec2 pos = st.yx * vec2(10.,3.0);
  pos = rotate2d( noise(pos) ) * pos + uTime * 0.3;
  float pattern = lines(pos,.5);
  vec3 red = vec3(max(pattern, uColor.r), max(pattern, uColor.g), max(pattern, uColor.b));
  if(uColor.b >= 0.00001) {
    afterColor = red;
  }
  if(uColor.r >= 0.5) {
    afterColor = beforeColor;
    beforeColor = red;
  }

  // green
  if(uColor.g > uColor.r && uColor.g > uColor.b) {}
  float mixStrengthColor2 = (vElevation2 * 1.0) * 11.0;
  vec3 green = mix(vec3(0.4, 1.0, 0.2), uColor.rgb * 0.9, mixStrengthColor2);
  if(uColor.g >= 0.00001) {
    afterColor = green;
  }
  if(uColor.g >= 0.5) {
    afterColor = beforeColor;
    beforeColor = green;
  }

  color = mix(beforeColor, afterColor, uRatio);
  gl_FragColor = vec4(color,1.0);
}