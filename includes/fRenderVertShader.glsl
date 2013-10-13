attribute vec4 aVertexPosition;
varying   vec2 vTexCoord;

void main()
{
    gl_Position = aVertexPosition;
    vTexCoord   = aVertexPosition.xy * 0.5 + 0.5;
}