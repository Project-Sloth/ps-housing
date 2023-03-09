<script lang="ts">
    import { onMount } from "svelte";
  
    const vertexShaders = `
    attribute vec2 a_position;
    attribute vec2 a_texcoord;
    uniform mat3 u_matrix;
    varying vec2 textureCoordinate;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      textureCoordinate = a_texcoord;
    }
      `;
  
    const fragmentShaderSource = `
      varying highp vec2 textureCoordinate;
      uniform sampler2D external_texture;
      void main()
      {
          gl_FragColor = texture2D(external_texture, textureCoordinate);
      }  
      `;
  
    const makeShader = (gl: WebGLRenderingContext, type: number, src: string) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      const infoLog = gl.getShaderInfoLog(shader);
  
      if (infoLog) {
        console.error(infoLog);
      }
  
      return shader;
    };
  
    const createTexture = (gl: WebGLRenderingContext) => {
      const tex = gl.createTexture();
  
      const texPixels = new Uint8Array([0, 0, 255, 255]);
  
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        1,
        1,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        texPixels
      );
  
      gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  
      // Magic hook sequence
      gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
      gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  
      // Reset
      gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  
      return tex;
    };
  
    const createBuffers = (gl: WebGLRenderingContext) => {
      const vertexBuff = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuff);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW
      );
  
      const texBuff = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texBuff);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
        gl.STATIC_DRAW
      );
  
      return { vertexBuff, texBuff };
    };
  
    const createProgram = (gl: WebGLRenderingContext) => {
      const vertexShader = makeShader(gl, gl.VERTEX_SHADER, vertexShaders);
      const fragmentShader = makeShader(
        gl,
        gl.FRAGMENT_SHADER,
        fragmentShaderSource
      );
  
      const program = gl.createProgram();
  
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.useProgram(program);
  
      const vloc = gl.getAttribLocation(program, "a_position");
      const tloc = gl.getAttribLocation(program, "a_texcoord");
  
      return { program, vloc, tloc };
    };
  
    const createGameView = (canvas: HTMLCanvasElement) => {
      console.log(canvas);
      const gl = canvas.getContext("webgl", {
        antialias: false,
        depth: false,
        stencil: false,
        alpha: false,
        desynchronized: true,
        failIfMajorPerformanceCaveat: false,
      }) as WebGLRenderingContext;
  
      let render = () => {};
  
      function createStuff() {
        const tex = createTexture(gl);
        const { program, vloc, tloc } = createProgram(gl);
        const { vertexBuff, texBuff } = createBuffers(gl);
  
        gl.useProgram(program);
  
        gl.bindTexture(gl.TEXTURE_2D, tex);
  
        gl.uniform1i(gl.getUniformLocation(program, "external_texture"), 0);
  
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuff);
        gl.vertexAttribPointer(vloc, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vloc);
  
        gl.bindBuffer(gl.ARRAY_BUFFER, texBuff);
        gl.vertexAttribPointer(tloc, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(tloc);
  
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  
        render();
      }
  
      const gameView = {
        canvas,
        gl,
        animationFrame: void 0,
        resize: (width: number, height: number) => {
          gl.viewport(0, 0, width, height);
          gl.canvas.width = width;
          gl.canvas.height = height;
        },
      };
  
      render = () => {
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        gl.finish();
  
        gameView.animationFrame = requestAnimationFrame(render);
      };
  
      createStuff();
  
      return gameView;
    };
  
    let canvasRef: HTMLCanvasElement;
  
    onMount(() => {
      createGameView(canvasRef);
    });
  </script>
  
  <div>
    <canvas
      bind:this={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  </div>
  
  <style>
    div {
      position: absolute;
      left: 0;
      top: 0;
    }
  </style>