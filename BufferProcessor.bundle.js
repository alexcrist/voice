(()=>{class e extends AudioWorkletProcessor{_buffer;_bufferIndex;_bufferSize;constructor(e){super(),this.port.onmessage=this.handleMessage.bind(this),this._bufferSize=e.parameterData.bufferSize,this._buffer=new Float32Array(this._bufferSize),this.reset()}handleMessage(e){const{type:s}=e.data;"reset"===s&&this.reset()}reset(){this._bufferIndex=0}process(e){const s=e[0][0];if(s)for(let e=0;e<s.length;e++)this._buffer[this._bufferIndex]=s[e],this._bufferIndex++,this._bufferIndex===this._bufferSize&&this.flushBuffer();return!0}flushBuffer(){this._bufferIndex=0,this.port.postMessage(new Float32Array(this._buffer))}}registerProcessor("buffer-processor",e)})();