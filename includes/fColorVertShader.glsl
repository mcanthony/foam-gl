attribute vec3 aVertexPosition;
attribute vec4 aVertexColor;
attribute vec2 aVertexTexCoord;

varying vec4 vVertexColor;
varying vec2 vVertexTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uPointSize;

void main(void)
{
    vVertexColor    = aVertexColor;
    vVertexTexCoord = aVertexTexCoord;

    gl_Position  = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition,1.0);
    gl_PointSize = uPointSize;
}