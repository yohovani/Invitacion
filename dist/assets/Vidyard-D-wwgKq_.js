import{g as m,r as v,u as b,p as O}from"./index-Bi5uMO5p.js";function V(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in t)){const n=Object.getOwnPropertyDescriptor(s,a);n&&Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var D=Object.create,i=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,S=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty,A=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,E=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},h=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of w(e))!M.call(t,a)&&a!==r&&i(t,a,{get:()=>e[a],enumerable:!(s=j(e,a))||s.enumerable});return t},L=(t,e,r)=>(r=t!=null?D(S(t)):{},h(!t||!t.__esModule?i(r,"default",{value:t,enumerable:!0}):r,t)),R=t=>h(i({},"__esModule",{value:!0}),t),o=(t,e,r)=>(A(t,typeof e!="symbol"?e+"":e,r),r),_={};E(_,{default:()=>y});var f=R(_),c=L(v),d=b,P=O;const x="https://play.vidyard.com/embed/v4.js",C="VidyardV4",N="onVidyardAPI";class y extends c.Component{constructor(){super(...arguments),o(this,"callPlayer",d.callPlayer),o(this,"mute",()=>{this.setVolume(0)}),o(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),o(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:r,config:s,onError:a,onDuration:n}=this.props,l=e&&e.match(P.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,d.getSDK)(x,C,N).then(p=>{this.container&&(p.api.addReadyListener((u,g)=>{this.player||(this.player=g,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},l),p.api.renderPlayer({uuid:l,container:this.container,autoplay:r?1:0,...s.options}),p.api.getPlayerMetadata(l).then(u=>{this.duration=u.length_in_seconds,n(u.length_in_seconds)}))},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:r},c.default.createElement("div",{ref:this.ref}))}}o(y,"displayName","Vidyard");o(y,"canPlay",P.canPlay.vidyard);const T=m(f),K=V({__proto__:null,default:T},[f]);export{K as V};
