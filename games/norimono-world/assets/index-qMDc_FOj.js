(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const zl="180",Es={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xd=0,xc=1,_d=2,nu=1,iu=2,si=3,Ci=0,Ye=1,We=2,Ge=0,Ts=1,Va=2,_c=3,yc=4,su=5,bn=100,yd=101,Md=102,wd=103,Sd=104,oo=200,bd=201,Ed=202,Td=203,Ha=204,Ga=205,Wa=206,Ad=207,Xa=208,Cd=209,Rd=210,Pd=211,Id=212,Dd=213,Ld=214,qa=0,ja=1,Ya=2,Rs=3,Za=4,Ka=5,$a=6,Ja=7,Ol=0,Nd=1,Ud=2,Ai=0,ou=1,ru=2,au=3,Pr=4,lu=5,cu=6,hu=7,uu=300,Ps=301,Is=302,Qa=303,tl=304,Ir=306,ui=1e3,Xi=1001,el=1002,Qe=1003,Fd=1004,Ro=1005,An=1006,jr=1007,Ei=1008,Rn=1009,du=1010,fu=1011,mo=1012,Bl=1013,Yi=1014,Hn=1015,di=1016,kl=1017,Vl=1018,Ds=1020,pu=35902,mu=35899,gu=1021,vu=1022,vn=1023,go=1026,Ls=1027,Hl=1028,Gl=1029,xu=1030,Wl=1031,Xl=1033,gr=33776,vr=33777,xr=33778,_r=33779,nl=35840,il=35841,sl=35842,ol=35843,rl=36196,al=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,vl=37816,xl=37817,_l=37818,yl=37819,Ml=37820,wl=37821,Sl=36492,bl=36494,El=36495,Tl=36283,Al=36284,Cl=36285,Rl=36286,zd=3200,Od=3201,Dr=0,Bd=1,bi="",Ve="srgb",Ns="srgb-linear",wr="linear",fe="srgb",Qi=7680,Mc=519,kd=512,Vd=513,Hd=514,_u=515,Gd=516,Wd=517,Xd=518,qd=519,Pl=35044,jd=35048,wc="300 es",Gn=2e3,Sr=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const lo=Math.PI/180,vo=180/Math.PI;function Wn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[o&255]+qe[o>>8&255]+qe[o>>16&255]+qe[o>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function $t(o,t,e){return Math.max(t,Math.min(e,o))}function ql(o,t){return(o%t+t)%t}function Yd(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Zd(o,t,e){return o!==t?(e-o)/(t-o):0}function co(o,t,e){return(1-e)*o+e*t}function Kd(o,t,e,n){return co(o,t,1-Math.exp(-e*n))}function $d(o,t=1){return t-Math.abs(ql(o,t*2)-t)}function Jd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Qd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function tf(o,t){return o+Math.floor(Math.random()*(t-o+1))}function ef(o,t){return o+Math.random()*(t-o)}function nf(o){return o*(.5-Math.random())}function sf(o){o!==void 0&&(Sc=o);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(o){return o*lo}function rf(o){return o*vo}function af(o){return(o&o-1)===0&&o!==0}function lf(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function cf(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function hf(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),h=r((t+n)/2),f=s((t-n)/2),u=r((t-n)/2),d=s((n-t)/2),m=r((n-t)/2);switch(i){case"XYX":o.set(a*h,l*f,l*u,a*c);break;case"YZY":o.set(l*u,a*h,l*f,a*c);break;case"ZXZ":o.set(l*f,l*u,a*h,a*c);break;case"XZX":o.set(a*h,l*m,l*d,a*c);break;case"YXY":o.set(l*d,a*h,l*m,a*c);break;case"ZYZ":o.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function pe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const xn={DEG2RAD:lo,RAD2DEG:vo,generateUUID:Wn,clamp:$t,euclideanModulo:ql,mapLinear:Yd,inverseLerp:Zd,lerp:co,damp:Kd,pingpong:$d,smoothstep:Jd,smootherstep:Qd,randInt:tf,randFloat:ef,randFloatSpread:nf,seededRandom:sf,degToRad:of,radToDeg:rf,isPowerOfTwo:af,ceilPowerOfTwo:lf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:hf,normalize:pe,denormalize:En};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ri=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=s[r+0],d=s[r+1],m=s[r+2],v=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=v;return}if(f!==v||l!==u||c!==d||h!==m){let g=1-a;const p=l*u+c*d+h*m+f*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),b=Math.atan2(w,p*x);g=Math.sin(g*b)/w,a=Math.sin(a*b)/w}const _=a*x;if(l=l*g+u*_,c=c*g+d*_,h=h*g+m*_,f=f*g+v*_,g===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[r],u=s[r+1],d=s[r+2],m=s[r+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-s*i),f=2*(s*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new P,bc=new Ri;class Jt{constructor(t,e,n,i,s,r,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],y=i[4],_=i[7],w=i[2],b=i[5],T=i[8];return s[0]=r*v+a*x+l*w,s[3]=r*g+a*y+l*b,s[6]=r*p+a*_+l*T,s[1]=c*v+h*x+f*w,s[4]=c*g+h*y+f*b,s[7]=c*p+h*_+f*T,s[2]=u*v+d*x+m*w,s[5]=u*g+d*y+m*b,s[8]=u*p+d*_+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*s,d=c*s-r*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*r)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new Jt;function yu(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function br(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uf(){const o=br("canvas");return o.style.display="block",o}const Ec={};function xo(o){o in Ec||(Ec[o]=!0,console.warn(o))}function df(o,t,e){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Tc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){const o={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===fe&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[Ns]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),o}const ae=ff();function li(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function As(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class pf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=br("canvas")),ts.width=t.width,ts.height=t.height;const i=ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=li(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mf=0;class jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Kr(i[r].image)):s.push(Kr(i[r]))}else s=Kr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Kr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pf.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;const $r=new P;class Ze extends Ki{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Xi,i=Xi,s=An,r=Ei,a=vn,l=Rn,c=Ze.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Wn(),this.name="",this.source=new jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=uu;Ze.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(d+1)/2,w=(p+1)/2,b=(h+u)/4,T=(f+v)/4,D=(m+g)/4;return y>_&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=T/n):_>w?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=b/i,s=D/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=D/s),this.set(n,i,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vf extends Ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Ze(i);this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new jl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends vf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mu extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xf extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,yn):yn.fromBufferAttribute(s,r),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Io.subVectors(this.max,Ws),es.subVectors(t.a,Ws),ns.subVectors(t.b,Ws),is.subVectors(t.c,Ws),pi.subVectors(ns,es),mi.subVectors(is,ns),Ni.subVectors(es,is);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!Jr(e,es,ns,is,Io)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,es,ns,is,Io))?!1:(Do.crossVectors(pi,mi),e=[Do.x,Do.y,Do.z],Jr(e,es,ns,is,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zn=[new P,new P,new P,new P,new P,new P,new P,new P],yn=new P,Po=new Pi,es=new P,ns=new P,is=new P,pi=new P,mi=new P,Ni=new P,Ws=new P,Io=new P,Do=new P,Ui=new P;function Jr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Ui.fromArray(o,s);const a=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _f=new Pi,Xs=new P,Qr=new P;let Bs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_f.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Qr)),this.expandByPoint(Xs.copy(t.center).sub(Qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Kn=new P,ta=new P,Lo=new P,gi=new P,ea=new P,No=new P,na=new P;let Yl=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ta.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(ta);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Lo),a=gi.dot(this.direction),l=-gi.dot(Lo),c=gi.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*l-a,u=r*a-l,m=s*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=s,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-r*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(r*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=r>0?-s:s,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ta).addScaledVector(Lo,u),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,i,s){ea.subVectors(e,t),No.subVectors(n,t),na.crossVectors(ea,No);let r=this.direction.dot(na),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;gi.subVectors(this.origin,t);const l=a*this.direction.dot(No.crossVectors(gi,No));if(l<0)return null;const c=a*this.direction.dot(ea.cross(gi));if(c<0||l+c>r)return null;const h=-a*gi.dot(na);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class se{constructor(t,e,n,i,s,r,a,l,c,h,f,u,d,m,v,g){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,h,f,u,d,m,v,g)}set(t,e,n,i,s,r,a,l,c,h,f,u,d,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),r=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=r*h,d=r*f,m=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u+v*a,e[4]=m*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=v+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u-v*a,e[4]=-r*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=v-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,m=a*h,v=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=m*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-v*f}else if(t.order==="XZY"){const u=r*l,d=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=r*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,Mf)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),vi.crossVectors(n,an),vi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),vi.crossVectors(n,an)),vi.normalize(),Uo.crossVectors(an,vi),i[0]=vi.x,i[4]=Uo.x,i[8]=an.x,i[1]=vi.y,i[5]=Uo.y,i[9]=an.y,i[2]=vi.z,i[6]=Uo.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],y=n[7],_=n[11],w=n[15],b=i[0],T=i[4],D=i[8],M=i[12],S=i[1],E=i[5],L=i[9],R=i[13],U=i[2],z=i[6],F=i[10],W=i[14],k=i[3],j=i[7],at=i[11],dt=i[15];return s[0]=r*b+a*S+l*U+c*k,s[4]=r*T+a*E+l*z+c*j,s[8]=r*D+a*L+l*F+c*at,s[12]=r*M+a*R+l*W+c*dt,s[1]=h*b+f*S+u*U+d*k,s[5]=h*T+f*E+u*z+d*j,s[9]=h*D+f*L+u*F+d*at,s[13]=h*M+f*R+u*W+d*dt,s[2]=m*b+v*S+g*U+p*k,s[6]=m*T+v*E+g*z+p*j,s[10]=m*D+v*L+g*F+p*at,s[14]=m*M+v*R+g*W+p*dt,s[3]=x*b+y*S+_*U+w*k,s[7]=x*T+y*E+_*z+w*j,s[11]=x*D+y*L+_*F+w*at,s[15]=x*M+y*R+_*W+w*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+v*(+e*l*d-e*c*u+s*r*u-i*r*d+i*c*h-s*l*h)+g*(+e*c*f-e*a*d-s*r*f+n*r*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*u+i*r*f-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],x=f*g*c-v*u*c+v*l*d-a*g*d-f*l*p+a*u*p,y=m*u*c-h*g*c-m*l*d+r*g*d+h*l*p-r*u*p,_=h*v*c-m*f*c+m*a*d-r*v*d-h*a*p+r*f*p,w=m*f*l-h*v*l-m*a*u+r*v*u+h*a*g-r*f*g,b=e*x+n*y+i*_+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=x*T,t[1]=(v*u*s-f*g*s-v*i*d+n*g*d+f*i*p-n*u*p)*T,t[2]=(a*g*s-v*l*s+v*i*c-n*g*c-a*i*p+n*l*p)*T,t[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*T,t[4]=y*T,t[5]=(h*g*s-m*u*s+m*i*d-e*g*d-h*i*p+e*u*p)*T,t[6]=(m*l*s-r*g*s-m*i*c+e*g*c+r*i*p-e*l*p)*T,t[7]=(r*u*s-h*l*s+h*i*c-e*u*c-r*i*d+e*l*d)*T,t[8]=_*T,t[9]=(m*f*s-h*v*s-m*n*d+e*v*d+h*n*p-e*f*p)*T,t[10]=(r*v*s-m*a*s+m*n*c-e*v*c-r*n*p+e*a*p)*T,t[11]=(h*a*s-r*f*s-h*n*c+e*f*c+r*n*d-e*a*d)*T,t[12]=w*T,t[13]=(h*v*i-m*f*i+m*n*u-e*v*u-h*n*g+e*f*g)*T,t[14]=(m*a*i-r*v*i-m*n*l+e*v*l+r*n*g-e*a*g)*T,t[15]=(r*f*i-h*a*i+h*n*l-e*f*l-r*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,h=r+r,f=a+a,u=s*c,d=s*h,m=s*f,v=r*h,g=r*f,p=a*f,x=l*c,y=l*h,_=l*f,w=n.x,b=n.y,T=n.z;return i[0]=(1-(v+p))*w,i[1]=(d+_)*w,i[2]=(m-y)*w,i[3]=0,i[4]=(d-_)*b,i[5]=(1-(u+p))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(m+y)*T,i[9]=(g-x)*T,i[10]=(1-(u+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const r=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);const c=1/s,h=1/r,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=Gn,l=!1){const c=this.elements,h=2*s/(e-t),f=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,v;if(l)m=s/(r-s),v=r*s/(r-s);else if(a===Gn)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(a===Sr)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=Gn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let m,v;if(l)m=1/(r-s),v=r/(r-s);else if(a===Gn)m=-2/(r-s),v=-(r+s)/(r-s);else if(a===Sr)m=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new P,Mn=new se,yf=new P(0,0,0),Mf=new P(1,1,1),vi=new P,Uo=new P,an=new P,Cc=new se,Rc=new Ri;class In{constructor(t=0,e=0,n=0,i=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wf=0;const Pc=new P,os=new Ri,$n=new se,Fo=new P,qs=new P,Sf=new P,bf=new Ri,Ic=new P(1,0,0),Dc=new P(0,1,0),Lc=new P(0,0,1),Nc={type:"added"},Ef={type:"removed"},rs={type:"childadded",child:null},ia={type:"childremoved",child:null};class Pe extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new P,e=new In,n=new Ri,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Jt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(qs,Fo,this.up):$n.lookAt(Fo,qs,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),os.setFromRotationMatrix($n),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Pe.DEFAULT_UP=new P(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new P,Jn=new P,sa=new P,Qn=new P,as=new P,ls=new P,Uc=new P,oa=new P,ra=new P,aa=new P,la=new ve,ca=new ve,ha=new ve;class mn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wn.subVectors(i,e),Jn.subVectors(n,e),sa.subVectors(t,e);const r=wn.dot(wn),a=wn.dot(Jn),l=wn.dot(sa),c=Jn.dot(Jn),h=Jn.dot(sa),f=r*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(r*h-a*l)*u;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(r,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,r){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(la,s.x),r.addScaledVector(ca,s.y),r.addScaledVector(ha,s.z),r}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),Jn.subVectors(t,e),wn.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;as.subVectors(i,n),ls.subVectors(s,n),oa.subVectors(t,n);const l=as.dot(oa),c=ls.dot(oa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,i);const h=as.dot(ra),f=ls.dot(ra);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(as,r);aa.subVectors(t,s);const d=as.dot(aa),m=ls.dot(aa);if(m>=0&&d<=m)return e.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ls,a);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Uc.subVectors(s,i),a=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(Uc,a);const p=1/(g+v+u);return r=v*p,a=u*p,e.copy(n).addScaledVector(as,r).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function ua(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=ql(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ua(r,s,t+1/3),this.g=ua(r,s,t),this.b=ua(r,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=Ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ae.workingToColorSpace(je.copy(this),t),Math.round($t(je.r*255,0,255))*65536+Math.round($t(je.g*255,0,255))*256+Math.round($t(je.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(je.copy(this),e);const n=je.r,i=je.g,s=je.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ve){ae.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,i=je.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(zo);const n=co(xi.h,zo.h,e),i=co(xi.s,zo.s,e),s=co(xi.l,zo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new jt;jt.NAMES=wu;let Tf=0,Ii=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ts,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class ks extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new P,Oo=new nt;let Af=0;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pl&&(t.usage=this.usage),t}}class Su extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bu extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bt extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cf=0;const fn=new se,da=new Pe,cs=new P,ln=new Pi,js=new Pi,Oe=new P;class _e extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?bu:Su)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(ln.min,js.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,js.max),ln.expandByPoint(Oe)):(ln.expandByPoint(js.min),ln.expandByPoint(js.max))}ln.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(t,c),Oe.add(cs)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,h=new P,f=new P,u=new nt,d=new nt,m=new nt,v=new P,g=new P;function p(D,M,S){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),u.fromBufferAttribute(s,D),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const E=1/(d.x*m.y-m.x*d.y);isFinite(E)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(E),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(E),a[D].add(v),a[M].add(v),a[S].add(v),l[D].add(g),l[M].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,M=x.length;D<M;++D){const S=x[D],E=S.start,L=S.count;for(let R=E,U=E+L;R<U;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const y=new P,_=new P,w=new P,b=new P;function T(D){w.fromBufferAttribute(i,D),b.copy(w);const M=a[D];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(b,M);const E=_.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,E)}for(let D=0,M=x.length;D<M;++D){const S=x[D],E=S.start,L=S.count;for(let R=E,U=E+L;R<U;R+=3)T(t.getX(R+0)),T(t.getX(R+1)),T(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new P,s=new P,r=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new sn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new se,Fi=new Yl,Bo=new Bs,zc=new P,ko=new P,Vo=new P,Ho=new P,fa=new P,Go=new P,Oc=new P,Wo=new P;class Qt extends Pe{constructor(t=new _e,e=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(fa.fromBufferAttribute(f,t),r?Go.addScaledVector(fa,h):Go.addScaledVector(fa.sub(e),h))}e.add(Go)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Fi.copy(t.ray).recast(t.near),!(Bo.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Bo,zc)===null||Fi.origin.distanceToSquared(zc)>(t.far-t.near)**2))&&(Fc.copy(s).invert(),Fi.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,w=y;_<w;_+=3){const b=a.getX(_),T=a.getX(_+1),D=a.getX(_+2);i=Xo(this,p,t,n,c,h,f,b,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);i=Xo(this,r,t,n,c,h,f,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,w=y;_<w;_+=3){const b=_,T=_+1,D=_+2;i=Xo(this,p,t,n,c,h,f,b,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=g,y=g+1,_=g+2;i=Xo(this,r,t,n,c,h,f,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Rf(o,t,e,n,i,s,r,a){let l;if(t.side===Ye?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Ci,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:o}}function Xo(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,ko),o.getVertexPosition(l,Vo),o.getVertexPosition(c,Ho);const h=Rf(o,t,e,n,ko,Vo,Ho,Oc);if(h){const f=new P;mn.getBarycoord(Oc,ko,Vo,Ho,f),i&&(h.uv=mn.getInterpolatedAttribute(i,a,l,c,f,new nt)),s&&(h.uv1=mn.getInterpolatedAttribute(s,a,l,c,f,new nt)),r&&(h.normal=mn.getInterpolatedAttribute(r,a,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};mn.getNormal(ko,Vo,Ho,u.normal),h.face=u,h.barycoord=f}return h}class fi extends _e{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(f,2));function m(v,g,p,x,y,_,w,b,T,D,M){const S=_/T,E=w/D,L=_/2,R=w/2,U=b/2,z=T+1,F=D+1;let W=0,k=0;const j=new P;for(let at=0;at<F;at++){const dt=at*E-R;for(let it=0;it<z;it++){const Ht=it*S-L;j[v]=Ht*x,j[g]=dt*y,j[p]=U,c.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[p]=b>0?1:-1,h.push(j.x,j.y,j.z),f.push(it/T),f.push(1-at/D),W+=1}}for(let at=0;at<D;at++)for(let dt=0;dt<T;dt++){const it=u+dt+z*at,Ht=u+dt+z*(at+1),ee=u+(dt+1)+z*(at+1),Kt=u+(dt+1)+z*at;l.push(it,Ht,Kt),l.push(Ht,ee,Kt),k+=6}a.addGroup(d,k,M),d+=k,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Je(o){const t={};for(let e=0;e<o.length;e++){const n=Us(o[e]);for(const i in n)t[i]=n[i]}return t}function Pf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Eu(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const oi={clone:Us,merge:Je};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tu extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new P,Bc=new nt,kc=new nt;class cn extends Tu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Bc,kc),e.subVectors(kc,Bc)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class Lf extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(hs,us,t,e);i.layers=this.layers,this.add(i);const s=new cn(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new cn(hs,us,t,e);r.layers=this.layers,this.add(r);const a=new cn(hs,us,t,e);a.layers=this.layers,this.add(a);const l=new cn(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new cn(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Au extends Ze{constructor(t=[],e=Ps,n,i,s,r,a,l,c,h){super(t,e,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nf extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Au(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fi(5,5,5),s=new Xe({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Ge});s.uniforms.tEquirect.value=e;const r=new Qt(i,s),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=An),new Lf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}class qt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uf={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new Lr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kl extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ff{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new P;class Er{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $l extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const Ys=new P,fs=new P,ps=new P,ms=new nt,Zs=new nt,Cu=new se,qo=new P,Ks=new P,jo=new P,Vc=new nt,ma=new nt,Hc=new nt;class Ru extends Pe{constructor(t=new $l){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ff(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Er(n,3,0,!1)),ds.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Cu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;Yo(qo.set(-.5,-.5,0),ps,r,fs,i,s),Yo(Ks.set(.5,-.5,0),ps,r,fs,i,s),Yo(jo.set(.5,.5,0),ps,r,fs,i,s),Vc.set(0,0),ma.set(1,0),Hc.set(1,1);let a=t.ray.intersectTriangle(qo,Ks,jo,!1,Ys);if(a===null&&(Yo(Ks.set(-.5,.5,0),ps,r,fs,i,s),ma.set(0,1),a=t.ray.intersectTriangle(qo,jo,Ks,!1,Ys),a===null))return;const l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:mn.getInterpolation(Ys,qo,Ks,jo,Vc,ma,Hc,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yo(o,t,e,n,i,s){ms.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(Zs.x=s*ms.x-i*ms.y,Zs.y=i*ms.x+s*ms.y):Zs.copy(ms),o.copy(t),o.x+=Zs.x,o.y+=Zs.y,o.applyMatrix4(Cu)}const Zo=new P,Gc=new P;class zf extends Pe{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const s=e[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let s;for(s=0;s<i.length&&!(e<i[s].distance);s++);return i.splice(s,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let s=e[n].distance;if(e[n].object.visible&&(s-=s*e[n].hysteresis),t<s)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Zo.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Zo);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Zo.setFromMatrixPosition(t.matrixWorld),Gc.setFromMatrixPosition(this.matrixWorld);const n=Zo.distanceTo(Gc)/t.zoom;e[0].object.visible=!0;let i,s;for(i=1,s=e.length;i<s;i++){let r=e[i].distance;if(e[i].object.visible&&(r-=r*e[i].hysteresis),n>=r)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const r=n[i];e.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return e}}class Nr extends Ze{constructor(t=null,e=1,n=1,i,s,r,a,l,c=Qe,h=Qe,f,u){super(null,r,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wc extends sn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new se,Xc=new se,Ko=[],qc=new Pi,Of=new se,$s=new Qt,Js=new Bs;class Fs extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Of)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),qc.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(qc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Js.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),Xc.multiplyMatrices(n,gs),$s.matrixWorld=Xc,$s.raycast(t,Ko);for(let r=0,a=Ko.length;r<a;r++){const l=Ko[r];l.instanceId=s,l.object=this,e.push(l)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(i*this.count),i,this.count,Hl,Hn));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ga=new P,Bf=new P,kf=new Jt;class Si{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ga.subVectors(n,e).cross(Bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kf.getNormalMatrix(t),i=this.coplanarPoint(ga).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Bs,Vf=new nt(.5,.5),$o=new P;class Jl{constructor(t=new Si,e=new Si,n=new Si,i=new Si,s=new Si,r=new Si){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){const i=this.planes,s=t.elements,r=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],m=s[8],v=s[9],g=s[10],p=s[11],x=s[12],y=s[13],_=s[14],w=s[15];if(i[0].setComponents(c-r,d-h,p-m,w-x).normalize(),i[1].setComponents(c+r,d+h,p+m,w+x).normalize(),i[2].setComponents(c+a,d+f,p+v,w+y).normalize(),i[3].setComponents(c-a,d-f,p-v,w-y).normalize(),n)i[4].setComponents(l,u,g,_).normalize(),i[5].setComponents(c-l,d-u,p-g,w-_).normalize();else if(i[4].setComponents(c-l,d-u,p-g,w-_).normalize(),e===Gn)i[5].setComponents(c+l,d+u,p+g,w+_).normalize();else if(e===Sr)i[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);const e=Vf.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($o.x=i.normal.x>0?t.max.x:t.min.x,$o.y=i.normal.y>0?t.max.y:t.min.y,$o.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $i extends Ze{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ql extends Ze{constructor(t,e,n=Yi,i,s,r,a=Qe,l=Qe,c,h=go,f=1){if(h!==go&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pu extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _o extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new P,h=new nt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _n extends _e{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],u=[],d=[];let m=0;const v=[],g=n/2;let p=0;x(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function x(){const _=new P,w=new P;let b=0;const T=(e-t)/n;for(let D=0;D<=s;D++){const M=[],S=D/s,E=S*(e-t)+t;for(let L=0;L<=i;L++){const R=L/i,U=R*l+a,z=Math.sin(U),F=Math.cos(U);w.x=E*z,w.y=-S*n+g,w.z=E*F,f.push(w.x,w.y,w.z),_.set(z,T,F).normalize(),u.push(_.x,_.y,_.z),d.push(R,1-S),M.push(m++)}v.push(M)}for(let D=0;D<i;D++)for(let M=0;M<s;M++){const S=v[M][D],E=v[M+1][D],L=v[M+1][D+1],R=v[M][D+1];(t>0||M!==0)&&(h.push(S,E,R),b+=3),(e>0||M!==s-1)&&(h.push(E,L,R),b+=3)}c.addGroup(p,b,0),p+=b}function y(_){const w=m,b=new nt,T=new P;let D=0;const M=_===!0?t:e,S=_===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,g*S,0),u.push(0,S,0),d.push(.5,.5),m++;const E=m;for(let L=0;L<=i;L++){const U=L/i*l+a,z=Math.cos(U),F=Math.sin(U);T.x=M*F,T.y=g*S,T.z=M*z,f.push(T.x,T.y,T.z),u.push(0,S,0),b.x=z*.5+.5,b.y=F*.5*S+.5,d.push(b.x,b.y),m++}for(let L=0;L<i;L++){const R=w+L,U=E+L;_===!0?h.push(U,U+1,R):h.push(U+1,U,R),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ur extends _n{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ur(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tc extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];a(i),c(n),h(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new P,_=new P,w=new P;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],_),d(e[b+2],w),l(y,_,w,x)}function l(x,y,_,w){const b=w+1,T=[];for(let D=0;D<=b;D++){T[D]=[];const M=x.clone().lerp(_,D/b),S=y.clone().lerp(_,D/b),E=b-D;for(let L=0;L<=E;L++)L===0&&D===b?T[D][L]=M:T[D][L]=M.clone().lerp(S,L/E)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const S=Math.floor(M/2);M%2===0?(u(T[D][S+1]),u(T[D+1][S]),u(T[D][S])):(u(T[D][S+1]),u(T[D+1][S+1]),u(T[D+1][S]))}}function c(x){const y=new P;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(x),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function h(){const x=new P;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const _=g(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;r.push(_,1-w)}m(),f()}function f(){for(let x=0;x<r.length;x+=6){const y=r[x+0],_=r[x+2],w=r[x+4],b=Math.max(y,_,w),T=Math.min(y,_,w);b>.9&&T<.1&&(y<.2&&(r[x+0]+=1),_<.2&&(r[x+2]+=1),w<.2&&(r[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function d(x,y){const _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){const x=new P,y=new P,_=new P,w=new P,b=new nt,T=new nt,D=new nt;for(let M=0,S=0;M<s.length;M+=9,S+=6){x.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),b.set(r[S+0],r[S+1]),T.set(r[S+2],r[S+3]),D.set(r[S+4],r[S+5]),w.copy(x).add(y).add(_).divideScalar(3);const E=g(w);v(b,S+0,x,E),v(T,S+2,y,E),v(D,S+4,_,E)}}function v(x,y,_,w){w<0&&x.x===1&&(r[y]=x.x-1),_.x===0&&_.z===0&&(r[y]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tc(t.vertices,t.indices,t.radius,t.details)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=e||(r.isVector2?new nt:new P);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],s=[],r=[],a=new P,l=new se;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new P)}s[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos($t(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}r[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos($t(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ec extends jn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hf extends ec{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function nc(){let o=0,t=0,e=0,n=0;function i(s,r,a,l){o=s,t=a,e=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,h,f){let u=(r-s)/c-(a-s)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,i(r,a,u,d)},calc:function(s){const r=s*s,a=r*s;return o+t*s+e*r+n*a}}}const Jo=new P,va=new nc,xa=new nc,_a=new nc;class yo extends jn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Jo.subVectors(i[0],i[1]).add(i[0]),c=Jo);const f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Jo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),va.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,g),xa.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,g),_a.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(va.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),xa.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_a.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(va.calc(l),xa.calc(l),_a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jc(o,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,a=o*o,l=o*a;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*a+s*o+e}function Gf(o,t){const e=1-o;return e*e*t}function Wf(o,t){return 2*(1-o)*o*t}function Xf(o,t){return o*o*t}function ho(o,t,e,n){return Gf(o,t)+Wf(o,e)+Xf(o,n)}function qf(o,t){const e=1-o;return e*e*e*t}function jf(o,t){const e=1-o;return 3*e*e*o*t}function Yf(o,t){return 3*(1-o)*o*o*t}function Zf(o,t){return o*o*o*t}function uo(o,t,e,n,i){return qf(o,t)+jf(o,e)+Yf(o,n)+Zf(o,i)}class Iu extends jn{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(uo(t,i.x,s.x,r.x,a.x),uo(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kf extends jn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(uo(t,i.x,s.x,r.x,a.x),uo(t,i.y,s.y,r.y,a.y),uo(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Du extends jn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends jn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends jn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ho(t,i.x,s.x,r.x),ho(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends jn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ho(t,i.x,s.x,r.x),ho(t,i.y,s.y,r.y),ho(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(jc(a,l.x,c.x,h.x,f.x),jc(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var Tr=Object.freeze({__proto__:null,ArcCurve:Hf,CatmullRomCurve3:yo,CubicBezierCurve:Iu,CubicBezierCurve3:Kf,EllipseCurve:ec,LineCurve:Du,LineCurve3:$f,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:Nu,SplineCurve:Uu});class Jf extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Tr[i.type]().fromJSON(i))}return this}}class Yc extends Jf{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Du(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Lu(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const a=new Iu(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,r,a,l),this}absellipse(t,e,n,i,s,r,a,l){const c=new ec(t,e,n,i,s,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Mo=class extends Yc{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Yc().fromJSON(i))}return this}};function Qf(o,t,e=2){const n=t&&t.length,i=n?t[0]*e:o.length;let s=Fu(o,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c;if(n&&(s=sp(o,t,s,e)),o.length>80*e){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let u=e;u<i;u+=e){const d=o[u],m=o[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return wo(s,r,e,a,l,c,0),r}function Fu(o,t,e,n,i){let s;if(i===mp(o,t,e,n)>0)for(let r=t;r<e;r+=n)s=Zc(r/n|0,o[r],o[r+1],s);else for(let r=e-n;r>=t;r-=n)s=Zc(r/n|0,o[r],o[r+1],s);return s&&zs(s,s.next)&&(bo(s),s=s.next),s}function Zi(o,t){if(!o)return o;t||(t=o);let e=o,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||Ce(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wo(o,t,e,n,i,s,r){if(!o)return;!r&&s&&cp(o,n,i,s);let a=o;for(;o.prev!==o.next;){const l=o.prev,c=o.next;if(s?ep(o,n,i,s):tp(o)){t.push(l.i,o.i,c.i),bo(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=np(Zi(o),t),wo(o,t,e,n,i,s,2)):r===2&&ip(o,t,e,n,i,s):wo(Zi(o),t,e,n,i,s,1);break}}}function tp(o){const t=o.prev,e=o,n=o.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,r),f=Math.min(a,l,c),u=Math.max(i,s,r),d=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&ro(i,a,s,l,r,c,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ep(o,t,e,n){const i=o.prev,s=o,r=o.next;if(Ce(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,h=i.y,f=s.y,u=r.y,d=Math.min(a,l,c),m=Math.min(h,f,u),v=Math.max(a,l,c),g=Math.max(h,f,u),p=Il(d,m,t,e,n),x=Il(v,g,t,e,n);let y=o.prevZ,_=o.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==r&&ro(a,h,l,f,c,u,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&ro(a,h,l,f,c,u,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==r&&ro(a,h,l,f,c,u,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&ro(a,h,l,f,c,u,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function np(o,t){let e=o;do{const n=e.prev,i=e.next.next;!zs(n,i)&&Ou(n,e,e.next,i)&&So(n,i)&&So(i,n)&&(t.push(n.i,e.i,i.i),bo(e),bo(e.next),e=o=i),e=e.next}while(e!==o);return Zi(e)}function ip(o,t,e,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&dp(r,a)){let l=Bu(r,a);r=Zi(r,r.next),l=Zi(l,l.next),wo(r,t,e,n,i,s,0),wo(l,t,e,n,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function sp(o,t,e,n){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s]*n,l=s<r-1?t[s+1]*n:o.length,c=Fu(o,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(up(c))}i.sort(op);for(let s=0;s<i.length;s++)e=rp(i[s],e);return e}function op(o,t){let e=o.x-t.x;if(e===0&&(e=o.y-t.y,e===0)){const n=(o.next.y-o.y)/(o.next.x-o.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function rp(o,t){const e=ap(o,t);if(!e)return t;const n=Bu(e,o);return Zi(n,n.next),Zi(e,e.next)}function ap(o,t){let e=t;const n=o.x,i=o.y;let s=-1/0,r;if(zs(o,e))return e;do{if(zs(o,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zu(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const f=Math.abs(i-e.y)/(n-e.x);So(e,o)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&lp(r,e)))&&(r=e,h=f)}e=e.next}while(e!==a);return r}function lp(o,t){return Ce(o.prev,o,t.prev)<0&&Ce(t.next,o,o.next)<0}function cp(o,t,e,n){let i=o;do i.z===0&&(i.z=Il(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,hp(i)}function hp(o){let t,e=1;do{let n=o,i;o=null;let s=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;n=r}s.nextZ=null,e*=2}while(t>1);return o}function Il(o,t,e,n,i){return o=(o-e)*i|0,t=(t-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function up(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function zu(o,t,e,n,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(i-r)*(n-a)}function ro(o,t,e,n,i,s,r,a){return!(o===r&&t===a)&&zu(o,t,e,n,i,s,r,a)}function dp(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!fp(o,t)&&(So(o,t)&&So(t,o)&&pp(o,t)&&(Ce(o.prev,o,t.prev)||Ce(o,t.prev,t))||zs(o,t)&&Ce(o.prev,o,o.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function zs(o,t){return o.x===t.x&&o.y===t.y}function Ou(o,t,e,n){const i=tr(Ce(o,t,e)),s=tr(Ce(o,t,n)),r=tr(Ce(e,n,o)),a=tr(Ce(e,n,t));return!!(i!==s&&r!==a||i===0&&Qo(o,e,t)||s===0&&Qo(o,n,t)||r===0&&Qo(e,o,n)||a===0&&Qo(e,t,n))}function Qo(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function tr(o){return o>0?1:o<0?-1:0}function fp(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&Ou(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function So(o,t){return Ce(o.prev,o,o.next)<0?Ce(o,t,o.next)>=0&&Ce(o,o.prev,t)>=0:Ce(o,t,o.prev)<0||Ce(o,o.next,t)<0}function pp(o,t){let e=o,n=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==o);return n}function Bu(o,t){const e=Dl(o.i,o.x,o.y),n=Dl(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Zc(o,t,e,n){const i=Dl(o,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bo(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Dl(o,t,e){return{i:o,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mp(o,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class gp{static triangulate(t,e,n=2){return Qf(t,e,n)}}class ws{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return ws.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Kc(t),$c(n,t);let r=t.length;e.forEach(Kc);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,$c(n,e[l]);const a=gp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Kc(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function $c(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}class Eo extends _e{constructor(t=new Mo([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Bt(i,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:vp;let y,_=!1,w,b,T,D;p&&(y=p.getSpacedPoints(h),_=!0,u=!1,w=p.computeFrenetFrames(h,!1),b=new P,T=new P,D=new P),u||(g=0,d=0,m=0,v=0);const M=a.extractPoints(c);let S=M.shape;const E=M.holes;if(!ws.isClockWise(S)){S=S.reverse();for(let rt=0,tt=E.length;rt<tt;rt++){const J=E[rt];ws.isClockWise(J)&&(E[rt]=J.reverse())}}function R(rt){const J=10000000000000001e-36;let $=rt[0];for(let gt=1;gt<=rt.length;gt++){const lt=gt%rt.length,vt=rt[lt],Gt=vt.x-$.x,kt=vt.y-$.y,N=Gt*Gt+kt*kt,A=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs($.x),Math.abs($.y)),G=J*A*A;if(N<=G){rt.splice(lt,1),gt--;continue}$=vt}}R(S),E.forEach(R);const U=E.length,z=S;for(let rt=0;rt<U;rt++){const tt=E[rt];S=S.concat(tt)}function F(rt,tt,J){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(tt,J)}const W=S.length;function k(rt,tt,J){let $,gt,lt;const vt=rt.x-tt.x,Gt=rt.y-tt.y,kt=J.x-rt.x,N=J.y-rt.y,A=vt*vt+Gt*Gt,G=vt*N-Gt*kt;if(Math.abs(G)>Number.EPSILON){const Y=Math.sqrt(A),ot=Math.sqrt(kt*kt+N*N),Z=tt.x-Gt/Y,Tt=tt.y+vt/Y,ft=J.x-N/ot,Et=J.y+kt/ot,Dt=((ft-Z)*N-(Et-Tt)*kt)/(vt*N-Gt*kt);$=Z+vt*Dt-rt.x,gt=Tt+Gt*Dt-rt.y;const ht=$*$+gt*gt;if(ht<=2)return new nt($,gt);lt=Math.sqrt(ht/2)}else{let Y=!1;vt>Number.EPSILON?kt>Number.EPSILON&&(Y=!0):vt<-Number.EPSILON?kt<-Number.EPSILON&&(Y=!0):Math.sign(Gt)===Math.sign(N)&&(Y=!0),Y?($=-Gt,gt=vt,lt=Math.sqrt(A)):($=vt,gt=Gt,lt=Math.sqrt(A/2))}return new nt($/lt,gt/lt)}const j=[];for(let rt=0,tt=z.length,J=tt-1,$=rt+1;rt<tt;rt++,J++,$++)J===tt&&(J=0),$===tt&&($=0),j[rt]=k(z[rt],z[J],z[$]);const at=[];let dt,it=j.concat();for(let rt=0,tt=U;rt<tt;rt++){const J=E[rt];dt=[];for(let $=0,gt=J.length,lt=gt-1,vt=$+1;$<gt;$++,lt++,vt++)lt===gt&&(lt=0),vt===gt&&(vt=0),dt[$]=k(J[$],J[lt],J[vt]);at.push(dt),it=it.concat(dt)}let Ht;if(g===0)Ht=ws.triangulateShape(z,E);else{const rt=[],tt=[];for(let J=0;J<g;J++){const $=J/g,gt=d*Math.cos($*Math.PI/2),lt=m*Math.sin($*Math.PI/2)+v;for(let vt=0,Gt=z.length;vt<Gt;vt++){const kt=F(z[vt],j[vt],lt);Rt(kt.x,kt.y,-gt),$===0&&rt.push(kt)}for(let vt=0,Gt=U;vt<Gt;vt++){const kt=E[vt];dt=at[vt];const N=[];for(let A=0,G=kt.length;A<G;A++){const Y=F(kt[A],dt[A],lt);Rt(Y.x,Y.y,-gt),$===0&&N.push(Y)}$===0&&tt.push(N)}}Ht=ws.triangulateShape(rt,tt)}const ee=Ht.length,Kt=m+v;for(let rt=0;rt<W;rt++){const tt=u?F(S[rt],it[rt],Kt):S[rt];_?(T.copy(w.normals[0]).multiplyScalar(tt.x),b.copy(w.binormals[0]).multiplyScalar(tt.y),D.copy(y[0]).add(T).add(b),Rt(D.x,D.y,D.z)):Rt(tt.x,tt.y,0)}for(let rt=1;rt<=h;rt++)for(let tt=0;tt<W;tt++){const J=u?F(S[tt],it[tt],Kt):S[tt];_?(T.copy(w.normals[rt]).multiplyScalar(J.x),b.copy(w.binormals[rt]).multiplyScalar(J.y),D.copy(y[rt]).add(T).add(b),Rt(D.x,D.y,D.z)):Rt(J.x,J.y,f/h*rt)}for(let rt=g-1;rt>=0;rt--){const tt=rt/g,J=d*Math.cos(tt*Math.PI/2),$=m*Math.sin(tt*Math.PI/2)+v;for(let gt=0,lt=z.length;gt<lt;gt++){const vt=F(z[gt],j[gt],$);Rt(vt.x,vt.y,f+J)}for(let gt=0,lt=E.length;gt<lt;gt++){const vt=E[gt];dt=at[gt];for(let Gt=0,kt=vt.length;Gt<kt;Gt++){const N=F(vt[Gt],dt[Gt],$);_?Rt(N.x,N.y+y[h-1].y,y[h-1].x+J):Rt(N.x,N.y,f+J)}}}K(),et();function K(){const rt=i.length/3;if(u){let tt=0,J=W*tt;for(let $=0;$<ee;$++){const gt=Ht[$];bt(gt[2]+J,gt[1]+J,gt[0]+J)}tt=h+g*2,J=W*tt;for(let $=0;$<ee;$++){const gt=Ht[$];bt(gt[0]+J,gt[1]+J,gt[2]+J)}}else{for(let tt=0;tt<ee;tt++){const J=Ht[tt];bt(J[2],J[1],J[0])}for(let tt=0;tt<ee;tt++){const J=Ht[tt];bt(J[0]+W*h,J[1]+W*h,J[2]+W*h)}}n.addGroup(rt,i.length/3-rt,0)}function et(){const rt=i.length/3;let tt=0;Mt(z,tt),tt+=z.length;for(let J=0,$=E.length;J<$;J++){const gt=E[J];Mt(gt,tt),tt+=gt.length}n.addGroup(rt,i.length/3-rt,1)}function Mt(rt,tt){let J=rt.length;for(;--J>=0;){const $=J;let gt=J-1;gt<0&&(gt=rt.length-1);for(let lt=0,vt=h+g*2;lt<vt;lt++){const Gt=W*lt,kt=W*(lt+1),N=tt+$+Gt,A=tt+gt+Gt,G=tt+gt+kt,Y=tt+$+kt;ne(N,A,G,Y)}}}function Rt(rt,tt,J){l.push(rt),l.push(tt),l.push(J)}function bt(rt,tt,J){ue(rt),ue(tt),ue(J);const $=i.length/3,gt=x.generateTopUV(n,i,$-3,$-2,$-1);O(gt[0]),O(gt[1]),O(gt[2])}function ne(rt,tt,J,$){ue(rt),ue(tt),ue($),ue(tt),ue(J),ue($);const gt=i.length/3,lt=x.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);O(lt[0]),O(lt[1]),O(lt[3]),O(lt[1]),O(lt[2]),O(lt[3])}function ue(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function O(rt){s.push(rt.x),s.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Tr[i.type]().fromJSON(i)),new Eo(n,t.options)}}const vp={generateTopUV:function(o,t,e,n,i){const s=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new nt(s,r),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(o,t,e,n,i,s){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],m=t[i*3+2],v=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new nt(r,1-l),new nt(c,1-f),new nt(u,1-m),new nt(v,1-p)]:[new nt(a,1-l),new nt(h,1-f),new nt(d,1-m),new nt(g,1-p)]}};function xp(o,t,e){if(e.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fr extends tc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fr(t.radius,t.detail)}}class zr extends _e{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=$t(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],h=1/e,f=new P,u=new nt,d=new P,m=new P,v=new P;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let x=0;x<=e;x++){const y=n+x*h*i,_=Math.sin(y),w=Math.cos(y);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*_,f.y=t[b].y,f.z=t[b].x*w,r.push(f.x,f.y,f.z),u.x=x/e,u.y=b/(t.length-1),a.push(u.x,u.y);const T=l[3*b+0]*_,D=l[3*b+1],M=l[3*b+0]*w;c.push(T,D,M)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const _=y+x*t.length,w=_,b=_+t.length,T=_+t.length+1,D=_+1;s.push(w,b,D),s.push(T,D,b)}this.setIndex(s),this.setAttribute("position",new Bt(r,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.points,t.segments,t.phiStart,t.phiLength)}}class Dn extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const x=p*u-r;for(let y=0;y<c;y++){const _=y*f-s;m.push(_,-x,0),v.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),w=x+1+c*(p+1),b=x+1+c*p;d.push(y,_,b),d.push(_,w,b)}this.setIndex(d),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.widthSegments,t.heightSegments)}}class gn extends _e{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new P,u=new P,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&r===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const b=w/e;f.x=-t*Math.cos(i+b*s)*Math.sin(r+y*a),f.y=t*Math.cos(r+y*a),f.z=t*Math.sin(i+b*s)*Math.sin(r+y*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(b+_,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],_=h[p][x],w=h[p+1][x],b=h[p+1][x+1];(p!==0||r>0)&&d.push(y,_,b),(p!==n-1||l<Math.PI)&&d.push(_,w,b)}this.setIndex(d),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xn extends _e{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new P,f=new P,u=new P;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const v=m/i*s,g=d/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),a.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,x=(i+1)*d+m;r.push(v,g,x),r.push(g,p,x)}this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Or extends _e{constructor(t=new Nu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new P,l=new P,c=new nt;let h=new P;const f=[],u=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function v(){for(let y=0;y<e;y++)g(y);g(s===!1?e:0),x(),p()}function g(y){h=t.getPointAt(y/e,h);const _=r.normals[y],w=r.binormals[y];for(let b=0;b<=i;b++){const T=b/i*Math.PI*2,D=Math.sin(T),M=-Math.cos(T);l.x=M*_.x+D*w.x,l.y=M*_.y+D*w.y,l.z=M*_.z+D*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=i;_++){const w=(i+1)*(y-1)+(_-1),b=(i+1)*y+(_-1),T=(i+1)*y+_,D=(i+1)*(y-1)+_;m.push(w,b,D),m.push(b,T,D)}}function x(){for(let y=0;y<=e;y++)for(let _=0;_<=i;_++)c.x=y/e,c.y=_/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Or(new Tr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class _p extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ae extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ci extends Ae{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class yp extends Ii{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Mp extends Ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wp extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sp extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ic extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bp extends ic{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ya=new se,Jc=new P,Qc=new P;class ku{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const th=new se,Qs=new P,Ma=new P;class Ep extends ku{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qs),Ma.copy(n.position),Ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ma),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,n.coordinateSystem,n.reversedDepth)}}class Vu extends ic{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ep}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sc extends Tu{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tp extends ku{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ap extends ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Tp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cp extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const eh=new se;class Rp{constructor(t,e,n=0,i=1/0){this.ray=new Yl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(t,e=!0,n=[]){return Ll(t,this,n,e),n.sort(nh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ll(t[i],this,n,e);return n.sort(nh),n}}function nh(o,t){return o.distance-t.distance}function Ll(o,t,e,n){let i=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)Ll(s[r],t,e,!0)}}class ih{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pp extends Ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function sh(o,t,e,n){const i=Ip(n);switch(e){case gu:return o*t;case Hl:return o*t/i.components*i.byteLength;case Gl:return o*t/i.components*i.byteLength;case xu:return o*t*2/i.components*i.byteLength;case Wl:return o*t*2/i.components*i.byteLength;case vu:return o*t*3/i.components*i.byteLength;case vn:return o*t*4/i.components*i.byteLength;case Xl:return o*t*4/i.components*i.byteLength;case gr:case vr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xr:case _r:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case il:case ol:return Math.max(o,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(o,8)*Math.max(t,8)/2;case rl:case al:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ll:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case yl:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Sl:case bl:case El:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Tl:case Al:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Cl:case Rl:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ip(o){switch(o){case Rn:case du:return{byteLength:1,components:1};case mo:case fu:case di:return{byteLength:2,components:1};case kl:case Vl:return{byteLength:2,components:4};case Yi:case Bl:case Hn:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);function Gu(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Dp(o){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=o.createBuffer();o.bindBuffer(l,u),o.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=o.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=o.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=o.HALF_FLOAT:d=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=o.SHORT;else if(c instanceof Uint32Array)d=o.UNSIGNED_INT;else if(c instanceof Int32Array)d=o.INT;else if(c instanceof Int8Array)d=o.BYTE;else if(c instanceof Uint8Array)d=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(o.bindBuffer(c,a),f.length===0)o.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];o.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}var Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Lp,alphahash_pars_fragment:Np,alphamap_fragment:Up,alphamap_pars_fragment:Fp,alphatest_fragment:zp,alphatest_pars_fragment:Op,aomap_fragment:Bp,aomap_pars_fragment:kp,batching_pars_vertex:Vp,batching_vertex:Hp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:$p,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:om,displacementmap_vertex:rm,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Em,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:vm,fog_fragment:xm,fog_pars_fragment:_m,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Mm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Sm,lights_pars_begin:bm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Cm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Im,lights_fragment_begin:Dm,lights_fragment_maps:Lm,lights_fragment_end:Nm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:km,map_particle_fragment:Vm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:jm,morphtarget_pars_vertex:Ym,morphtarget_vertex:Zm,normal_fragment_begin:Km,normal_fragment_maps:$m,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:t0,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:o0,opaque_fragment:r0,packing:a0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:h0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:v0,skinbase_vertex:x0,skinning_pars_vertex:_0,skinning_vertex:y0,skinnormal_vertex:M0,specularmap_fragment:w0,specularmap_pars_fragment:S0,tonemapping_fragment:b0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:C0,uv_pars_vertex:R0,uv_vertex:P0,worldpos_vertex:I0,background_vert:D0,background_frag:L0,backgroundCube_vert:N0,backgroundCube_frag:U0,cube_vert:F0,cube_frag:z0,depth_vert:O0,depth_frag:B0,distanceRGBA_vert:k0,distanceRGBA_frag:V0,equirect_vert:H0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:j0,meshlambert_vert:Y0,meshlambert_frag:Z0,meshmatcap_vert:K0,meshmatcap_frag:$0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:og,points_vert:rg,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:hg,sprite_frag:ug},yt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},kn={basic:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Je([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Je([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Je([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Je([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Je([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Je([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Je([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Je([yt.lights,yt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};kn.physical={uniforms:Je([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const er={r:0,b:0,g:0},Oi=new In,dg=new se;function fg(o,t,e,n,i,s,r){const a=new jt(0);let l=s===!0?0:1,c,h,f=null,u=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const w=m(y);w===null?p(a,l):w&&w.isColor&&(p(w,1),_=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(y,_){const w=m(_);w&&(w.isCubeTexture||w.mapping===Ir)?(h===void 0&&(h=new Qt(new fi(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Us(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(_.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Oi)),h.material.toneMapped=ae.getTransfer(w.colorSpace)!==fe,(f!==w||u!==w.version||d!==o.toneMapping)&&(h.material.needsUpdate=!0,f=w,u=w.version,d=o.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Qt(new Dn(2,2),new Xe({name:"BackgroundMaterial",uniforms:Us(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ae.getTransfer(w.colorSpace)!==fe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||u!==w.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,f=w,u=w.version,d=o.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(er,Eu(o)),n.buffers.color.setClear(er.r,er.g,er.b,_,r)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:g,dispose:x}}function pg(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,r=!1;function a(S,E,L,R,U){let z=!1;const F=f(R,L,E);s!==F&&(s=F,c(s.object)),z=d(S,R,L,U),z&&m(S,R,L,U),U!==null&&t.update(U,o.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,_(S,E,L,R),U!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return o.createVertexArray()}function c(S){return o.bindVertexArray(S)}function h(S){return o.deleteVertexArray(S)}function f(S,E,L){const R=L.wireframe===!0;let U=n[S.id];U===void 0&&(U={},n[S.id]=U);let z=U[E.id];z===void 0&&(z={},U[E.id]=z);let F=z[R];return F===void 0&&(F=u(l()),z[R]=F),F}function u(S){const E=[],L=[],R=[];for(let U=0;U<e;U++)E[U]=0,L[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:R,object:S,attributes:{},index:null}}function d(S,E,L,R){const U=s.attributes,z=E.attributes;let F=0;const W=L.getAttributes();for(const k in W)if(W[k].location>=0){const at=U[k];let dt=z[k];if(dt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;F++}return s.attributesNum!==F||s.index!==R}function m(S,E,L,R){const U={},z=E.attributes;let F=0;const W=L.getAttributes();for(const k in W)if(W[k].location>=0){let at=z[k];at===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),U[k]=dt,F++}s.attributes=U,s.attributesNum=F,s.index=R}function v(){const S=s.newAttributes;for(let E=0,L=S.length;E<L;E++)S[E]=0}function g(S){p(S,0)}function p(S,E){const L=s.newAttributes,R=s.enabledAttributes,U=s.attributeDivisors;L[S]=1,R[S]===0&&(o.enableVertexAttribArray(S),R[S]=1),U[S]!==E&&(o.vertexAttribDivisor(S,E),U[S]=E)}function x(){const S=s.newAttributes,E=s.enabledAttributes;for(let L=0,R=E.length;L<R;L++)E[L]!==S[L]&&(o.disableVertexAttribArray(L),E[L]=0)}function y(S,E,L,R,U,z,F){F===!0?o.vertexAttribIPointer(S,E,L,U,z):o.vertexAttribPointer(S,E,L,R,U,z)}function _(S,E,L,R){v();const U=R.attributes,z=L.getAttributes(),F=E.defaultAttributeValues;for(const W in z){const k=z[W];if(k.location>=0){let j=U[W];if(j===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const at=j.normalized,dt=j.itemSize,it=t.get(j);if(it===void 0)continue;const Ht=it.buffer,ee=it.type,Kt=it.bytesPerElement,K=ee===o.INT||ee===o.UNSIGNED_INT||j.gpuType===Bl;if(j.isInterleavedBufferAttribute){const et=j.data,Mt=et.stride,Rt=j.offset;if(et.isInstancedInterleavedBuffer){for(let bt=0;bt<k.locationSize;bt++)p(k.location+bt,et.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<k.locationSize;bt++)g(k.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let bt=0;bt<k.locationSize;bt++)y(k.location+bt,dt/k.locationSize,ee,at,Mt*Kt,(Rt+dt/k.locationSize*bt)*Kt,K)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)p(k.location+et,j.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<k.locationSize;et++)g(k.location+et);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let et=0;et<k.locationSize;et++)y(k.location+et,dt/k.locationSize,ee,at,dt*Kt,dt/k.locationSize*et*Kt,K)}}else if(F!==void 0){const at=F[W];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(k.location,at);break;case 3:o.vertexAttrib3fv(k.location,at);break;case 4:o.vertexAttrib4fv(k.location,at);break;default:o.vertexAttrib1fv(k.location,at)}}}}x()}function w(){D();for(const S in n){const E=n[S];for(const L in E){const R=E[L];for(const U in R)h(R[U].object),delete R[U];delete E[L]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const E=n[S.id];for(const L in E){const R=E[L];for(const U in R)h(R[U].object),delete R[U];delete E[L]}delete n[S.id]}function T(S){for(const E in n){const L=n[E];if(L[S.id]===void 0)continue;const R=L[S.id];for(const U in R)h(R[U].object),delete R[U];delete L[S.id]}}function D(){M(),r=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function mg(o,t,e){let n;function i(c){n=c}function s(c,h){o.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,f){f!==0&&(o.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)r(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v]*u[v];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gg(o,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==vn&&n.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Rn&&n.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hn&&!D)}function l(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,b=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:b}}function vg(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Si,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=o.get(f);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const x=s?0:n,y=x*4;let _=p.clippingState||null;l.value=_,_=h(m,u,y,d);for(let w=0;w!==y;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)r.copy(f[y]).applyMatrix4(x,a),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function xg(o){let t=new WeakMap;function e(r,a){return a===Qa?r.mapping=Ps:a===tl&&(r.mapping=Is),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Qa||a===tl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Nf(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ss=4,oh=[.125,.215,.35,.446,.526,.582],Gi=20,wa=new sc,rh=new jt;let Sa=null,ba=0,Ea=0,Ta=!1;const Hi=(1+Math.sqrt(5))/2,vs=1/Hi,ah=[new P(-Hi,vs,0),new P(Hi,vs,0),new P(-vs,0,Hi),new P(vs,0,Hi),new P(0,Hi,-vs),new P(0,Hi,vs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],_g=new P;class Ar{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:r=256,position:a=_g}=s;Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ba,Ea),this._renderer.xr.enabled=Ta,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:di,format:vn,colorSpace:Ns,depthBuffer:!1},i=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(s)),this._blurMaterial=Mg(s,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,i,s){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(rh),f.toneMapping=Ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const v=new ks({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new Qt(new fi,v);let p=!1;const x=t.background;x?x.isColor&&(v.color.copy(x),t.background=null,p=!0):(v.color.copy(rh),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;nr(i,_*w,y>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ps||t.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ah[(i-s-1)%ah.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Qt(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):Gi;g>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const p=[];let x=0;for(let T=0;T<Gi;++T){const D=T/v,M=Math.exp(-D*D/2);p.push(M),T===0?x+=M:T<g&&(x+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const _=this._sizeLods[i],w=3*_*(i>y-Ss?i-y+Ss:0),b=4*(this._cubeSize-_);nr(e,w,b,3*_,2*_),l.setRenderTarget(e),l.render(f,wa)}}function yg(o){const t=[],e=[],n=[];let i=o;const s=o-Ss+1+oh.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Ss?l=oh[r-o+Ss-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*d),y=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let b=0;b<d;b++){const T=b%3*2/3-1,D=b>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];x.set(M,v*m*b),y.set(u,g*m*b);const S=[b,b,b,b,b,b];_.set(S,p*m*b)}const w=new _e;w.setAttribute("position",new sn(x,v)),w.setAttribute("uv",new sn(y,g)),w.setAttribute("faceIndex",new sn(_,p)),t.push(w),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lh(o,t,e){const n=new Pn(o,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Mg(o,t,e){const n=new Float32Array(Gi),i=new P(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ge,depthTest:!1,depthWrite:!1})}function ch(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ge,depthTest:!1,depthWrite:!1})}function hh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ge,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wg(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qa||l===tl,h=l===Ps||l===Is;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ar(o)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Ar(o)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Sg(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bg(o,t,e,n){const i={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete i[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],o.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let y=0,_=x.length;y<_;y+=3){const w=x[y+0],b=x[y+1],T=x[y+2];u.push(w,b,b,T,T,w)}}else if(m!==void 0){const x=m.array;v=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const w=y+0,b=y+1,T=y+2;u.push(w,b,b,T,T,w)}}else return;const g=new(yu(u)?bu:Su)(u,1);g.version=v;const p=s.get(f);p&&t.remove(p),s.set(f,g)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Eg(o,t,e){let n;function i(u){n=u}let s,r;function a(u){s=u.type,r=u.bytesPerElement}function l(u,d){o.drawElements(n,d,s,u*r),e.update(d,n,1)}function c(u,d,m){m!==0&&(o.drawElementsInstanced(n,d,s,u*r,m),e.update(d,n,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function f(u,d,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/r,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*v[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Tg(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ag(o,t,e){const n=new WeakMap,i=new ve;function s(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let w=a.attributes.position.count*_,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*b*4*f),D=new Mu(T,w,b,f);D.type=Hn,D.needsUpdate=!0;const M=_*4;for(let E=0;E<f;E++){const L=p[E],R=x[E],U=y[E],z=w*b*4*E;for(let F=0;F<L.count;F++){const W=F*M;m===!0&&(i.fromBufferAttribute(L,F),T[z+W+0]=i.x,T[z+W+1]=i.y,T[z+W+2]=i.z,T[z+W+3]=0),v===!0&&(i.fromBufferAttribute(R,F),T[z+W+4]=i.x,T[z+W+5]=i.y,T[z+W+6]=i.z,T[z+W+7]=0),g===!0&&(i.fromBufferAttribute(U,F),T[z+W+8]=i.x,T[z+W+9]=i.y,T[z+W+10]=i.z,T[z+W+11]=U.itemSize===4?i.w:1)}}u={count:f,texture:D,size:new nt(w,b)},n.set(a,u),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",u.size)}return{update:s}}function Cg(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const Wu=new Ze,uh=new Ql(1,1),Xu=new Mu,qu=new xf,ju=new Au,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Vs(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=dh[i];if(s===void 0&&(s=new Float32Array(i),dh[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function Fe(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ze(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Br(o,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Rg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Pg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;o.uniform2fv(this.addr,t),ze(e,t)}}function Ig(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;o.uniform3fv(this.addr,t),ze(e,t)}}function Dg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;o.uniform4fv(this.addr,t),ze(e,t)}}function Lg(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;gh.set(n),o.uniformMatrix2fv(this.addr,!1,gh),ze(e,n)}}function Ng(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;mh.set(n),o.uniformMatrix3fv(this.addr,!1,mh),ze(e,n)}}function Ug(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;ph.set(n),o.uniformMatrix4fv(this.addr,!1,ph),ze(e,n)}}function Fg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function zg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;o.uniform2iv(this.addr,t),ze(e,t)}}function Og(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;o.uniform3iv(this.addr,t),ze(e,t)}}function Bg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;o.uniform4iv(this.addr,t),ze(e,t)}}function kg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Vg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;o.uniform2uiv(this.addr,t),ze(e,t)}}function Hg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;o.uniform3uiv(this.addr,t),ze(e,t)}}function Gg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;o.uniform4uiv(this.addr,t),ze(e,t)}}function Wg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(uh.compareFunction=_u,s=uh):s=Wu,e.setTexture2D(t||s,i)}function Xg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qu,i)}function qg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ju,i)}function jg(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xu,i)}function Yg(o){switch(o){case 5126:return Rg;case 35664:return Pg;case 35665:return Ig;case 35666:return Dg;case 35674:return Lg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return zg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return Vg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return jg}}function Zg(o,t){o.uniform1fv(this.addr,t)}function Kg(o,t){const e=Vs(t,this.size,2);o.uniform2fv(this.addr,e)}function $g(o,t){const e=Vs(t,this.size,3);o.uniform3fv(this.addr,e)}function Jg(o,t){const e=Vs(t,this.size,4);o.uniform4fv(this.addr,e)}function Qg(o,t){const e=Vs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function tv(o,t){const e=Vs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function ev(o,t){const e=Vs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function nv(o,t){o.uniform1iv(this.addr,t)}function iv(o,t){o.uniform2iv(this.addr,t)}function sv(o,t){o.uniform3iv(this.addr,t)}function ov(o,t){o.uniform4iv(this.addr,t)}function rv(o,t){o.uniform1uiv(this.addr,t)}function av(o,t){o.uniform2uiv(this.addr,t)}function lv(o,t){o.uniform3uiv(this.addr,t)}function cv(o,t){o.uniform4uiv(this.addr,t)}function hv(o,t,e){const n=this.cache,i=t.length,s=Br(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Wu,s[r])}function uv(o,t,e){const n=this.cache,i=t.length,s=Br(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||qu,s[r])}function dv(o,t,e){const n=this.cache,i=t.length,s=Br(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||ju,s[r])}function fv(o,t,e){const n=this.cache,i=t.length,s=Br(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Xu,s[r])}function pv(o){switch(o){case 5126:return Zg;case 35664:return Kg;case 35665:return $g;case 35666:return Jg;case 35674:return Qg;case 35675:return tv;case 35676:return ev;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return ov;case 5125:return rv;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}class mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}}class gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pv(e.type)}}class vv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function vh(o,t){o.seq.push(t),o.map[t.id]=t}function xv(o,t,e){const n=o.name,i=n.length;for(Aa.lastIndex=0;;){const s=Aa.exec(n),r=Aa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){vh(e,c===void 0?new mv(a,o,t):new gv(a,o,t));break}else{let f=e.map[a];f===void 0&&(f=new vv(a),vh(e,f)),e=f}}}class yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);xv(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function xh(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const _v=37297;let yv=0;function Mv(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const _h=new Jt;function wv(o){ae._getMatrix(_h,ae.workingColorSpace,o);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(o)){case wr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function yh(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),s=(o.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mv(o.getShaderSource(t),a)}else return s}function Sv(o,t){const e=wv(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bv(o,t){let e;switch(t){case ou:e="Linear";break;case ru:e="Reinhard";break;case au:e="Cineon";break;case Pr:e="ACESFilmic";break;case cu:e="AgX";break;case hu:e="Neutral";break;case lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new P;function Ev(){ae.getLuminanceCoefficients(ir);const o=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Av(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cv(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function ao(o){return o!==""}function Mh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(o){return o.replace(Rv,Iv)}const Pv=new Map;function Iv(o,t){let e=te[t];if(e===void 0){const n=Pv.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}const Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(o){return o.replace(Dv,Lv)}function Lv(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bh(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nv(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Uv(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fv(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function zv(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case Nd:t="ENVMAP_BLENDING_MIX";break;case Ud:t="ENVMAP_BLENDING_ADD";break}return t}function Ov(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Bv(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Nv(e),c=Uv(e),h=Fv(e),f=zv(e),u=Ov(e),d=Tv(e),m=Av(s),v=i.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(g=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?te.tonemapping_pars_fragment:"",e.toneMapping!==Ai?bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Sv("linearToOutputTexel",e.outputColorSpace),Ev(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),r=Nl(r),r=Mh(r,e),r=wh(r,e),a=Nl(a),a=Mh(a,e),a=wh(a,e),r=Sh(r),a=Sh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+r,_=x+p+a,w=xh(i,i.VERTEX_SHADER,y),b=xh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,w),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(E){if(o.debug.checkShaderErrors){const L=i.getProgramInfoLog(v)||"",R=i.getShaderInfoLog(w)||"",U=i.getShaderInfoLog(b)||"",z=L.trim(),F=R.trim(),W=U.trim();let k=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,v,w,b);else{const at=yh(i,w,"vertex"),dt=yh(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+at+`
`+dt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(j=!1);j&&(E.diagnostics={runnable:k,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(b),D=new yr(i,v),M=Cv(i,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,_v)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}let kv=0;class Vv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hv(t),e.set(t,n)),n}}class Hv{constructor(t){this.id=kv++,this.code=t,this.usedTimes=0}}function Gv(o,t,e,n,i,s,r){const a=new Zl,l=new Vv,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,E,L,R){const U=L.fog,z=R.geometry,F=M.isMeshStandardMaterial?L.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),k=W&&W.mapping===Ir?W.image.height:null,j=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=at!==void 0?at.length:0;let it=0;z.morphAttributes.position!==void 0&&(it=1),z.morphAttributes.normal!==void 0&&(it=2),z.morphAttributes.color!==void 0&&(it=3);let Ht,ee,Kt,K;if(j){const de=kn[j];Ht=de.vertexShader,ee=de.fragmentShader}else Ht=M.vertexShader,ee=M.fragmentShader,l.update(M),Kt=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const et=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Rt=R.isInstancedMesh===!0,bt=R.isBatchedMesh===!0,ne=!!M.map,ue=!!M.matcap,O=!!W,rt=!!M.aoMap,tt=!!M.lightMap,J=!!M.bumpMap,$=!!M.normalMap,gt=!!M.displacementMap,lt=!!M.emissiveMap,vt=!!M.metalnessMap,Gt=!!M.roughnessMap,kt=M.anisotropy>0,N=M.clearcoat>0,A=M.dispersion>0,G=M.iridescence>0,Y=M.sheen>0,ot=M.transmission>0,Z=kt&&!!M.anisotropyMap,Tt=N&&!!M.clearcoatMap,ft=N&&!!M.clearcoatNormalMap,Et=N&&!!M.clearcoatRoughnessMap,Dt=G&&!!M.iridescenceMap,ht=G&&!!M.iridescenceThicknessMap,wt=Y&&!!M.sheenColorMap,Ot=Y&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,_t=!!M.specularColorMap,Wt=!!M.specularIntensityMap,B=ot&&!!M.transmissionMap,ct=ot&&!!M.thicknessMap,mt=!!M.gradientMap,It=!!M.alphaMap,ut=M.alphaTest>0,st=!!M.alphaHash,Nt=!!M.extensions;let Yt=Ai;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Yt=o.toneMapping);const ye={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Ht,fragmentShader:ee,defines:M.defines,customVertexShaderID:Kt,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:bt,batchingColor:bt&&R._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&R.instanceColor!==null,instancingMorph:Rt&&R.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ns,alphaToCoverage:!!M.alphaToCoverage,map:ne,matcap:ue,envMap:O,envMapMode:O&&W.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:tt,bumpMap:J,normalMap:$,displacementMap:u&&gt,emissiveMap:lt,normalMapObjectSpace:$&&M.normalMapType===Bd,normalMapTangentSpace:$&&M.normalMapType===Dr,metalnessMap:vt,roughnessMap:Gt,anisotropy:kt,anisotropyMap:Z,clearcoat:N,clearcoatMap:Tt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Et,dispersion:A,iridescence:G,iridescenceMap:Dt,iridescenceThicknessMap:ht,sheen:Y,sheenColorMap:wt,sheenRoughnessMap:Ot,specularMap:Ut,specularColorMap:_t,specularIntensityMap:Wt,transmission:ot,transmissionMap:B,thicknessMap:ct,gradientMap:mt,opaque:M.transparent===!1&&M.blending===Ts&&M.alphaToCoverage===!1,alphaMap:It,alphaTest:ut,alphaHash:st,combine:M.combine,mapUv:ne&&v(M.map.channel),aoMapUv:rt&&v(M.aoMap.channel),lightMapUv:tt&&v(M.lightMap.channel),bumpMapUv:J&&v(M.bumpMap.channel),normalMapUv:$&&v(M.normalMap.channel),displacementMapUv:gt&&v(M.displacementMap.channel),emissiveMapUv:lt&&v(M.emissiveMap.channel),metalnessMapUv:vt&&v(M.metalnessMap.channel),roughnessMapUv:Gt&&v(M.roughnessMap.channel),anisotropyMapUv:Z&&v(M.anisotropyMap.channel),clearcoatMapUv:Tt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(M.sheenRoughnessMap.channel),specularMapUv:Ut&&v(M.specularMap.channel),specularColorMapUv:_t&&v(M.specularColorMap.channel),specularIntensityMapUv:Wt&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:ct&&v(M.thicknessMap.channel),alphaMapUv:It&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($||kt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!z.attributes.uv&&(ne||It),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Mt,skinning:R.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:it,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&E.length>0,shadowMapType:o.shadowMap.type,toneMapping:Yt,decodeVideoTexture:ne&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===We,flipSided:M.side===Ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)S.push(E),S.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(o.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const S=m[M.type];let E;if(S){const L=kn[S];E=oi.clone(L.uniforms)}else E=M.uniforms;return E}function w(M,S){let E;for(let L=0,R=h.length;L<R;L++){const U=h[L];if(U.cacheKey===S){E=U,++E.usedTimes;break}}return E===void 0&&(E=new Bv(o,S,M,s),h.push(E)),E}function b(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:D}}function Wv(){let o=new WeakMap;function t(r){return o.has(r)}function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Xv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Eh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Th(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(f,u,d,m,v,g){let p=o[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:v,group:g},o[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=v,p.group=g),t++,p}function a(f,u,d,m,v,g){const p=r(f,u,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,u,d,m,v,g){const p=r(f,u,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||Xv),n.length>1&&n.sort(u||Eh),i.length>1&&i.sort(u||Eh)}function h(){for(let f=t,u=o.length;f<u;f++){const d=o[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function qv(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Th,o.set(n,[r])):i>=s.length?(r=new Th,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function jv(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new jt};break;case"SpotLight":e={position:new P,direction:new P,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new P,halfWidth:new P,halfHeight:new P};break}return o[t.id]=e,e}}}function Yv(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Zv=0;function Kv(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function $v(o){const t=new jv,e=Yv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new se,r=new se;function a(c){let h=0,f=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,x=0,y=0,_=0,w=0,b=0,T=0;c.sort(Kv);for(let M=0,S=c.length;M<S;M++){const E=c[M],L=E.color,R=E.intensity,U=E.distance,z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*R,f+=L.g*R,u+=L.b*R;else if(E.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(E.sh.coefficients[F],R);T++}else if(E.isDirectionalLight){const F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const W=E.shadow,k=e.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=E.shadow.matrix,x++}n.directional[d]=F,d++}else if(E.isSpotLight){const F=t.get(E);F.position.setFromMatrixPosition(E.matrixWorld),F.color.copy(L).multiplyScalar(R),F.distance=U,F.coneCos=Math.cos(E.angle),F.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),F.decay=E.decay,n.spot[v]=F;const W=E.shadow;if(E.map&&(n.spotLightMap[w]=E.map,w++,W.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[v]=W.matrix,E.castShadow){const k=e.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=z,_++}v++}else if(E.isRectAreaLight){const F=t.get(E);F.color.copy(L).multiplyScalar(R),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=F,g++}else if(E.isPointLight){const F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),F.distance=E.distance,F.decay=E.decay,E.castShadow){const W=E.shadow,k=e.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=E.shadow.matrix,y++}n.point[m]=F,m++}else if(E.isHemisphereLight){const F=t.get(E);F.skyColor.copy(E.color).multiplyScalar(R),F.groundColor.copy(E.groundColor).multiplyScalar(R),n.hemi[p]=F,p++}}g>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==x||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,D.directionalLength=d,D.pointLength=m,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=x,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=T,n.version=Zv++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),r.identity(),s.copy(y.matrixWorld),s.premultiply(g),r.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Ah(o){const t=new $v(o),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Jv(o){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Ah(o),t.set(i,[a])):s>=r.length?(a=new Ah(o),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ex(o,t,e){let n=new Jl;const i=new nt,s=new nt,r=new ve,a=new wp({depthPacking:Od}),l=new Sp,c={},h=e.maxTextureSize,f={[Ci]:Ye,[Ye]:Ci,[We]:We},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Qv,fragmentShader:tx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new _e;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let p=this.type;this.render=function(b,T,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const M=o.getRenderTarget(),S=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Ge),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const R=p!==si&&this.type===si,U=p===si&&this.type!==si;for(let z=0,F=b.length;z<F;z++){const W=b[z],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const j=k.getFrameExtents();if(i.multiply(j),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,k.mapSize.y=s.y)),k.map===null||R===!0||U===!0){const dt=this.type!==si?{minFilter:Qe,magFilter:Qe}:{};k.map!==null&&k.map.dispose(),k.map=new Pn(i.x,i.y,dt),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const at=k.getViewportCount();for(let dt=0;dt<at;dt++){const it=k.getViewport(dt);r.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),L.viewport(r),k.updateMatrices(W,dt),n=k.getFrustum(),_(T,D,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===si&&x(k,D),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,o.setRenderTarget(M,S,E)};function x(b,T){const D=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(T,null,D,u,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(T,null,D,d,v,null)}function y(b,T,D,M){let S=null;const E=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)S=E;else if(S=D.isPointLight===!0?l:a,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=S.uuid,R=T.uuid;let U=c[L];U===void 0&&(U={},c[L]=U);let z=U[R];z===void 0&&(z=S.clone(),U[R]=z,T.addEventListener("dispose",w)),S=z}if(S.visible=T.visible,S.wireframe=T.wireframe,M===si?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=o.properties.get(S);L.light=D}return S}function _(b,T,D,M,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===si)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const R=t.update(b),U=b.material;if(Array.isArray(U)){const z=R.groups;for(let F=0,W=z.length;F<W;F++){const k=z[F],j=U[k.materialIndex];if(j&&j.visible){const at=y(b,j,M,S);b.onBeforeShadow(o,b,T,D,R,at,k),o.renderBufferDirect(D,null,R,at,b,k),b.onAfterShadow(o,b,T,D,R,at,k)}}}else if(U.visible){const z=y(b,U,M,S);b.onBeforeShadow(o,b,T,D,R,z,null),o.renderBufferDirect(D,null,R,z,b,null),b.onAfterShadow(o,b,T,D,R,z,null)}}const L=b.children;for(let R=0,U=L.length;R<U;R++)_(L[R],T,D,M,S)}function w(b){b.target.removeEventListener("dispose",w);for(const D in c){const M=c[D],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const nx={[qa]:ja,[Ya]:$a,[Za]:Ja,[Rs]:Ka,[ja]:qa,[$a]:Ya,[Ja]:Za,[Ka]:Rs};function ix(o,t){function e(){let B=!1;const ct=new ve;let mt=null;const It=new ve(0,0,0,0);return{setMask:function(ut){mt!==ut&&!B&&(o.colorMask(ut,ut,ut,ut),mt=ut)},setLocked:function(ut){B=ut},setClear:function(ut,st,Nt,Yt,ye){ye===!0&&(ut*=Yt,st*=Yt,Nt*=Yt),ct.set(ut,st,Nt,Yt),It.equals(ct)===!1&&(o.clearColor(ut,st,Nt,Yt),It.copy(ct))},reset:function(){B=!1,mt=null,It.set(-1,0,0,0)}}}function n(){let B=!1,ct=!1,mt=null,It=null,ut=null;return{setReversed:function(st){if(ct!==st){const Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ct=st;const Yt=ut;ut=null,this.setClear(Yt)}},getReversed:function(){return ct},setTest:function(st){st?et(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(st){mt!==st&&!B&&(o.depthMask(st),mt=st)},setFunc:function(st){if(ct&&(st=nx[st]),It!==st){switch(st){case qa:o.depthFunc(o.NEVER);break;case ja:o.depthFunc(o.ALWAYS);break;case Ya:o.depthFunc(o.LESS);break;case Rs:o.depthFunc(o.LEQUAL);break;case Za:o.depthFunc(o.EQUAL);break;case Ka:o.depthFunc(o.GEQUAL);break;case $a:o.depthFunc(o.GREATER);break;case Ja:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=st}},setLocked:function(st){B=st},setClear:function(st){ut!==st&&(ct&&(st=1-st),o.clearDepth(st),ut=st)},reset:function(){B=!1,mt=null,It=null,ut=null,ct=!1}}}function i(){let B=!1,ct=null,mt=null,It=null,ut=null,st=null,Nt=null,Yt=null,ye=null;return{setTest:function(de){B||(de?et(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(de){ct!==de&&!B&&(o.stencilMask(de),ct=de)},setFunc:function(de,Yn,Ln){(mt!==de||It!==Yn||ut!==Ln)&&(o.stencilFunc(de,Yn,Ln),mt=de,It=Yn,ut=Ln)},setOp:function(de,Yn,Ln){(st!==de||Nt!==Yn||Yt!==Ln)&&(o.stencilOp(de,Yn,Ln),st=de,Nt=Yn,Yt=Ln)},setLocked:function(de){B=de},setClear:function(de){ye!==de&&(o.clearStencil(de),ye=de)},reset:function(){B=!1,ct=null,mt=null,It=null,ut=null,st=null,Nt=null,Yt=null,ye=null}}}const s=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,w=null,b=null,T=new jt(0,0,0),D=0,M=!1,S=null,E=null,L=null,R=null,U=null;const z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=W>=2);let j=null,at={};const dt=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),Ht=new ve().fromArray(dt),ee=new ve().fromArray(it);function Kt(B,ct,mt,It){const ut=new Uint8Array(4),st=o.createTexture();o.bindTexture(B,st),o.texParameteri(B,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(B,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Nt=0;Nt<mt;Nt++)B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY?o.texImage3D(ct,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,ut):o.texImage2D(ct+Nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ut);return st}const K={};K[o.TEXTURE_2D]=Kt(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Kt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Kt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Kt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),et(o.DEPTH_TEST),r.setFunc(Rs),J(!1),$(xc),et(o.CULL_FACE),rt(Ge);function et(B){h[B]!==!0&&(o.enable(B),h[B]=!0)}function Mt(B){h[B]!==!1&&(o.disable(B),h[B]=!1)}function Rt(B,ct){return f[B]!==ct?(o.bindFramebuffer(B,ct),f[B]=ct,B===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=ct),B===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=ct),!0):!1}function bt(B,ct){let mt=d,It=!1;if(B){mt=u.get(ct),mt===void 0&&(mt=[],u.set(ct,mt));const ut=B.textures;if(mt.length!==ut.length||mt[0]!==o.COLOR_ATTACHMENT0){for(let st=0,Nt=ut.length;st<Nt;st++)mt[st]=o.COLOR_ATTACHMENT0+st;mt.length=ut.length,It=!0}}else mt[0]!==o.BACK&&(mt[0]=o.BACK,It=!0);It&&o.drawBuffers(mt)}function ne(B){return m!==B?(o.useProgram(B),m=B,!0):!1}const ue={[bn]:o.FUNC_ADD,[yd]:o.FUNC_SUBTRACT,[Md]:o.FUNC_REVERSE_SUBTRACT};ue[wd]=o.MIN,ue[Sd]=o.MAX;const O={[oo]:o.ZERO,[bd]:o.ONE,[Ed]:o.SRC_COLOR,[Ha]:o.SRC_ALPHA,[Rd]:o.SRC_ALPHA_SATURATE,[Xa]:o.DST_COLOR,[Wa]:o.DST_ALPHA,[Td]:o.ONE_MINUS_SRC_COLOR,[Ga]:o.ONE_MINUS_SRC_ALPHA,[Cd]:o.ONE_MINUS_DST_COLOR,[Ad]:o.ONE_MINUS_DST_ALPHA,[Pd]:o.CONSTANT_COLOR,[Id]:o.ONE_MINUS_CONSTANT_COLOR,[Dd]:o.CONSTANT_ALPHA,[Ld]:o.ONE_MINUS_CONSTANT_ALPHA};function rt(B,ct,mt,It,ut,st,Nt,Yt,ye,de){if(B===Ge){v===!0&&(Mt(o.BLEND),v=!1);return}if(v===!1&&(et(o.BLEND),v=!0),B!==su){if(B!==g||de!==M){if((p!==bn||_!==bn)&&(o.blendEquation(o.FUNC_ADD),p=bn,_=bn),de)switch(B){case Ts:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Va:o.blendFunc(o.ONE,o.ONE);break;case _c:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yc:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ts:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Va:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case _c:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,y=null,w=null,b=null,T.set(0,0,0),D=0,g=B,M=de}return}ut=ut||ct,st=st||mt,Nt=Nt||It,(ct!==p||ut!==_)&&(o.blendEquationSeparate(ue[ct],ue[ut]),p=ct,_=ut),(mt!==x||It!==y||st!==w||Nt!==b)&&(o.blendFuncSeparate(O[mt],O[It],O[st],O[Nt]),x=mt,y=It,w=st,b=Nt),(Yt.equals(T)===!1||ye!==D)&&(o.blendColor(Yt.r,Yt.g,Yt.b,ye),T.copy(Yt),D=ye),g=B,M=!1}function tt(B,ct){B.side===We?Mt(o.CULL_FACE):et(o.CULL_FACE);let mt=B.side===Ye;ct&&(mt=!mt),J(mt),B.blending===Ts&&B.transparent===!1?rt(Ge):rt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const It=B.stencilWrite;a.setTest(It),It&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){S!==B&&(B?o.frontFace(o.CW):o.frontFace(o.CCW),S=B)}function $(B){B!==xd?(et(o.CULL_FACE),B!==E&&(B===xc?o.cullFace(o.BACK):B===_d?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),E=B}function gt(B){B!==L&&(F&&o.lineWidth(B),L=B)}function lt(B,ct,mt){B?(et(o.POLYGON_OFFSET_FILL),(R!==ct||U!==mt)&&(o.polygonOffset(ct,mt),R=ct,U=mt)):Mt(o.POLYGON_OFFSET_FILL)}function vt(B){B?et(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function Gt(B){B===void 0&&(B=o.TEXTURE0+z-1),j!==B&&(o.activeTexture(B),j=B)}function kt(B,ct,mt){mt===void 0&&(j===null?mt=o.TEXTURE0+z-1:mt=j);let It=at[mt];It===void 0&&(It={type:void 0,texture:void 0},at[mt]=It),(It.type!==B||It.texture!==ct)&&(j!==mt&&(o.activeTexture(mt),j=mt),o.bindTexture(B,ct||K[B]),It.type=B,It.texture=ct)}function N(){const B=at[j];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{o.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{o.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{o.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{o.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{o.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{o.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{o.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{o.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{o.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(B){Ht.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),Ht.copy(B))}function Ot(B){ee.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),ee.copy(B))}function Ut(B,ct){let mt=c.get(ct);mt===void 0&&(mt=new WeakMap,c.set(ct,mt));let It=mt.get(B);It===void 0&&(It=o.getUniformBlockIndex(ct,B.name),mt.set(B,It))}function _t(B,ct){const It=c.get(ct).get(B);l.get(ct)!==It&&(o.uniformBlockBinding(ct,It,B.__bindingPointIndex),l.set(ct,It))}function Wt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},j=null,at={},f={},u=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,w=null,b=null,T=new jt(0,0,0),D=0,M=!1,S=null,E=null,L=null,R=null,U=null,Ht.set(0,0,o.canvas.width,o.canvas.height),ee.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:et,disable:Mt,bindFramebuffer:Rt,drawBuffers:bt,useProgram:ne,setBlending:rt,setMaterial:tt,setFlipSided:J,setCullFace:$,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:vt,activeTexture:Gt,bindTexture:kt,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:G,texImage2D:Dt,texImage3D:ht,updateUBOMapping:Ut,uniformBlockBinding:_t,texStorage2D:ft,texStorage3D:Et,texSubImage2D:Y,texSubImage3D:ot,compressedTexSubImage2D:Z,compressedTexSubImage3D:Tt,scissor:wt,viewport:Ot,reset:Wt}}function sx(o,t,e,n,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return d?new OffscreenCanvas(N,A):br("canvas")}function v(N,A,G){let Y=1;const ot=kt(N);if((ot.width>G||ot.height>G)&&(Y=G/Math.max(ot.width,ot.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Z=Math.floor(Y*ot.width),Tt=Math.floor(Y*ot.height);f===void 0&&(f=m(Z,Tt));const ft=A?m(Z,Tt):f;return ft.width=Z,ft.height=Tt,ft.getContext("2d").drawImage(N,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Z+"x"+Tt+")."),ft}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){o.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(N,A,G,Y,ot=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Z=A;if(A===o.RED&&(G===o.FLOAT&&(Z=o.R32F),G===o.HALF_FLOAT&&(Z=o.R16F),G===o.UNSIGNED_BYTE&&(Z=o.R8)),A===o.RED_INTEGER&&(G===o.UNSIGNED_BYTE&&(Z=o.R8UI),G===o.UNSIGNED_SHORT&&(Z=o.R16UI),G===o.UNSIGNED_INT&&(Z=o.R32UI),G===o.BYTE&&(Z=o.R8I),G===o.SHORT&&(Z=o.R16I),G===o.INT&&(Z=o.R32I)),A===o.RG&&(G===o.FLOAT&&(Z=o.RG32F),G===o.HALF_FLOAT&&(Z=o.RG16F),G===o.UNSIGNED_BYTE&&(Z=o.RG8)),A===o.RG_INTEGER&&(G===o.UNSIGNED_BYTE&&(Z=o.RG8UI),G===o.UNSIGNED_SHORT&&(Z=o.RG16UI),G===o.UNSIGNED_INT&&(Z=o.RG32UI),G===o.BYTE&&(Z=o.RG8I),G===o.SHORT&&(Z=o.RG16I),G===o.INT&&(Z=o.RG32I)),A===o.RGB_INTEGER&&(G===o.UNSIGNED_BYTE&&(Z=o.RGB8UI),G===o.UNSIGNED_SHORT&&(Z=o.RGB16UI),G===o.UNSIGNED_INT&&(Z=o.RGB32UI),G===o.BYTE&&(Z=o.RGB8I),G===o.SHORT&&(Z=o.RGB16I),G===o.INT&&(Z=o.RGB32I)),A===o.RGBA_INTEGER&&(G===o.UNSIGNED_BYTE&&(Z=o.RGBA8UI),G===o.UNSIGNED_SHORT&&(Z=o.RGBA16UI),G===o.UNSIGNED_INT&&(Z=o.RGBA32UI),G===o.BYTE&&(Z=o.RGBA8I),G===o.SHORT&&(Z=o.RGBA16I),G===o.INT&&(Z=o.RGBA32I)),A===o.RGB&&(G===o.UNSIGNED_INT_5_9_9_9_REV&&(Z=o.RGB9_E5),G===o.UNSIGNED_INT_10F_11F_11F_REV&&(Z=o.R11F_G11F_B10F)),A===o.RGBA){const Tt=ot?wr:ae.getTransfer(Y);G===o.FLOAT&&(Z=o.RGBA32F),G===o.HALF_FLOAT&&(Z=o.RGBA16F),G===o.UNSIGNED_BYTE&&(Z=Tt===fe?o.SRGB8_ALPHA8:o.RGBA8),G===o.UNSIGNED_SHORT_4_4_4_4&&(Z=o.RGBA4),G===o.UNSIGNED_SHORT_5_5_5_1&&(Z=o.RGB5_A1)}return(Z===o.R16F||Z===o.R32F||Z===o.RG16F||Z===o.RG32F||Z===o.RGBA16F||Z===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(N,A){let G;return N?A===null||A===Yi||A===Ds?G=o.DEPTH24_STENCIL8:A===Hn?G=o.DEPTH32F_STENCIL8:A===mo&&(G=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Yi||A===Ds?G=o.DEPTH_COMPONENT24:A===Hn?G=o.DEPTH_COMPONENT32F:A===mo&&(G=o.DEPTH_COMPONENT16),G}function w(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Qe&&N.minFilter!==An?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function b(N){const A=N.target;A.removeEventListener("dispose",b),D(A),A.isVideoTexture&&h.delete(A)}function T(N){const A=N.target;A.removeEventListener("dispose",T),S(A)}function D(N){const A=n.get(N);if(A.__webglInit===void 0)return;const G=N.source,Y=u.get(G);if(Y){const ot=Y[A.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(N),Object.keys(Y).length===0&&u.delete(G)}n.remove(N)}function M(N){const A=n.get(N);o.deleteTexture(A.__webglTexture);const G=N.source,Y=u.get(G);delete Y[A.__cacheKey],r.memory.textures--}function S(N){const A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let ot=0;ot<A.__webglFramebuffer[Y].length;ot++)o.deleteFramebuffer(A.__webglFramebuffer[Y][ot]);else o.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)o.deleteFramebuffer(A.__webglFramebuffer[Y]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const G=N.textures;for(let Y=0,ot=G.length;Y<ot;Y++){const Z=n.get(G[Y]);Z.__webglTexture&&(o.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(G[Y])}n.remove(N)}let E=0;function L(){E=0}function R(){const N=E;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),E+=1,N}function U(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function z(N,A){const G=n.get(N);if(N.isVideoTexture&&vt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const Y=N.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,N,A);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,G.__webglTexture,o.TEXTURE0+A)}function F(N,A){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){K(G,N,A);return}e.bindTexture(o.TEXTURE_2D_ARRAY,G.__webglTexture,o.TEXTURE0+A)}function W(N,A){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){K(G,N,A);return}e.bindTexture(o.TEXTURE_3D,G.__webglTexture,o.TEXTURE0+A)}function k(N,A){const G=n.get(N);if(N.version>0&&G.__version!==N.version){et(G,N,A);return}e.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+A)}const j={[ui]:o.REPEAT,[Xi]:o.CLAMP_TO_EDGE,[el]:o.MIRRORED_REPEAT},at={[Qe]:o.NEAREST,[Fd]:o.NEAREST_MIPMAP_NEAREST,[Ro]:o.NEAREST_MIPMAP_LINEAR,[An]:o.LINEAR,[jr]:o.LINEAR_MIPMAP_NEAREST,[Ei]:o.LINEAR_MIPMAP_LINEAR},dt={[kd]:o.NEVER,[qd]:o.ALWAYS,[Vd]:o.LESS,[_u]:o.LEQUAL,[Hd]:o.EQUAL,[Xd]:o.GEQUAL,[Gd]:o.GREATER,[Wd]:o.NOTEQUAL};function it(N,A){if(A.type===Hn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===An||A.magFilter===jr||A.magFilter===Ro||A.magFilter===Ei||A.minFilter===An||A.minFilter===jr||A.minFilter===Ro||A.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,j[A.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,j[A.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,j[A.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,at[A.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,at[A.minFilter]),A.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,dt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Qe||A.minFilter!==Ro&&A.minFilter!==Ei||A.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ht(N,A){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",b));const Y=A.source;let ot=u.get(Y);ot===void 0&&(ot={},u.set(Y,ot));const Z=U(A);if(Z!==N.__cacheKey){ot[Z]===void 0&&(ot[Z]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,G=!0),ot[Z].usedTimes++;const Tt=ot[N.__cacheKey];Tt!==void 0&&(ot[N.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(A)),N.__cacheKey=Z,N.__webglTexture=ot[Z].texture}return G}function ee(N,A,G){return Math.floor(Math.floor(N/G)/A)}function Kt(N,A,G,Y){const Z=N.updateRanges;if(Z.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,G,Y,A.data);else{Z.sort((ht,wt)=>ht.start-wt.start);let Tt=0;for(let ht=1;ht<Z.length;ht++){const wt=Z[Tt],Ot=Z[ht],Ut=wt.start+wt.count,_t=ee(Ot.start,A.width,4),Wt=ee(wt.start,A.width,4);Ot.start<=Ut+1&&_t===Wt&&ee(Ot.start+Ot.count-1,A.width,4)===_t?wt.count=Math.max(wt.count,Ot.start+Ot.count-wt.start):(++Tt,Z[Tt]=Ot)}Z.length=Tt+1;const ft=o.getParameter(o.UNPACK_ROW_LENGTH),Et=o.getParameter(o.UNPACK_SKIP_PIXELS),Dt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let ht=0,wt=Z.length;ht<wt;ht++){const Ot=Z[ht],Ut=Math.floor(Ot.start/4),_t=Math.ceil(Ot.count/4),Wt=Ut%A.width,B=Math.floor(Ut/A.width),ct=_t,mt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,B),e.texSubImage2D(o.TEXTURE_2D,0,Wt,B,ct,mt,G,Y,A.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ft),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Et),o.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function K(N,A,G){let Y=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=o.TEXTURE_3D);const ot=Ht(N,A),Z=A.source;e.bindTexture(Y,N.__webglTexture,o.TEXTURE0+G);const Tt=n.get(Z);if(Z.version!==Tt.__version||ot===!0){e.activeTexture(o.TEXTURE0+G);const ft=ae.getPrimaries(ae.workingColorSpace),Et=A.colorSpace===bi?null:ae.getPrimaries(A.colorSpace),Dt=A.colorSpace===bi||ft===Et?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ht=v(A.image,!1,i.maxTextureSize);ht=Gt(A,ht);const wt=s.convert(A.format,A.colorSpace),Ot=s.convert(A.type);let Ut=y(A.internalFormat,wt,Ot,A.colorSpace,A.isVideoTexture);it(Y,A);let _t;const Wt=A.mipmaps,B=A.isVideoTexture!==!0,ct=Tt.__version===void 0||ot===!0,mt=Z.dataReady,It=w(A,ht);if(A.isDepthTexture)Ut=_(A.format===Ls,A.type),ct&&(B?e.texStorage2D(o.TEXTURE_2D,1,Ut,ht.width,ht.height):e.texImage2D(o.TEXTURE_2D,0,Ut,ht.width,ht.height,0,wt,Ot,null));else if(A.isDataTexture)if(Wt.length>0){B&&ct&&e.texStorage2D(o.TEXTURE_2D,It,Ut,Wt[0].width,Wt[0].height);for(let ut=0,st=Wt.length;ut<st;ut++)_t=Wt[ut],B?mt&&e.texSubImage2D(o.TEXTURE_2D,ut,0,0,_t.width,_t.height,wt,Ot,_t.data):e.texImage2D(o.TEXTURE_2D,ut,Ut,_t.width,_t.height,0,wt,Ot,_t.data);A.generateMipmaps=!1}else B?(ct&&e.texStorage2D(o.TEXTURE_2D,It,Ut,ht.width,ht.height),mt&&Kt(A,ht,wt,Ot)):e.texImage2D(o.TEXTURE_2D,0,Ut,ht.width,ht.height,0,wt,Ot,ht.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){B&&ct&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Ut,Wt[0].width,Wt[0].height,ht.depth);for(let ut=0,st=Wt.length;ut<st;ut++)if(_t=Wt[ut],A.format!==vn)if(wt!==null)if(B){if(mt)if(A.layerUpdates.size>0){const Nt=sh(_t.width,_t.height,A.format,A.type);for(const Yt of A.layerUpdates){const ye=_t.data.subarray(Yt*Nt/_t.data.BYTES_PER_ELEMENT,(Yt+1)*Nt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,Yt,_t.width,_t.height,1,wt,ye)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,_t.width,_t.height,ht.depth,wt,_t.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,Ut,_t.width,_t.height,ht.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?mt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,_t.width,_t.height,ht.depth,wt,Ot,_t.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ut,Ut,_t.width,_t.height,ht.depth,0,wt,Ot,_t.data)}else{B&&ct&&e.texStorage2D(o.TEXTURE_2D,It,Ut,Wt[0].width,Wt[0].height);for(let ut=0,st=Wt.length;ut<st;ut++)_t=Wt[ut],A.format!==vn?wt!==null?B?mt&&e.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,_t.width,_t.height,wt,_t.data):e.compressedTexImage2D(o.TEXTURE_2D,ut,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?mt&&e.texSubImage2D(o.TEXTURE_2D,ut,0,0,_t.width,_t.height,wt,Ot,_t.data):e.texImage2D(o.TEXTURE_2D,ut,Ut,_t.width,_t.height,0,wt,Ot,_t.data)}else if(A.isDataArrayTexture)if(B){if(ct&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Ut,ht.width,ht.height,ht.depth),mt)if(A.layerUpdates.size>0){const ut=sh(ht.width,ht.height,A.format,A.type);for(const st of A.layerUpdates){const Nt=ht.data.subarray(st*ut/ht.data.BYTES_PER_ELEMENT,(st+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,wt,Ot,Nt)}A.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,wt,Ot,ht.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Ut,ht.width,ht.height,ht.depth,0,wt,Ot,ht.data);else if(A.isData3DTexture)B?(ct&&e.texStorage3D(o.TEXTURE_3D,It,Ut,ht.width,ht.height,ht.depth),mt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,wt,Ot,ht.data)):e.texImage3D(o.TEXTURE_3D,0,Ut,ht.width,ht.height,ht.depth,0,wt,Ot,ht.data);else if(A.isFramebufferTexture){if(ct)if(B)e.texStorage2D(o.TEXTURE_2D,It,Ut,ht.width,ht.height);else{let ut=ht.width,st=ht.height;for(let Nt=0;Nt<It;Nt++)e.texImage2D(o.TEXTURE_2D,Nt,Ut,ut,st,0,wt,Ot,null),ut>>=1,st>>=1}}else if(Wt.length>0){if(B&&ct){const ut=kt(Wt[0]);e.texStorage2D(o.TEXTURE_2D,It,Ut,ut.width,ut.height)}for(let ut=0,st=Wt.length;ut<st;ut++)_t=Wt[ut],B?mt&&e.texSubImage2D(o.TEXTURE_2D,ut,0,0,wt,Ot,_t):e.texImage2D(o.TEXTURE_2D,ut,Ut,wt,Ot,_t);A.generateMipmaps=!1}else if(B){if(ct){const ut=kt(ht);e.texStorage2D(o.TEXTURE_2D,It,Ut,ut.width,ut.height)}mt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Ot,ht)}else e.texImage2D(o.TEXTURE_2D,0,Ut,wt,Ot,ht);g(A)&&p(Y),Tt.__version=Z.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function et(N,A,G){if(A.image.length!==6)return;const Y=Ht(N,A),ot=A.source;e.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+G);const Z=n.get(ot);if(ot.version!==Z.__version||Y===!0){e.activeTexture(o.TEXTURE0+G);const Tt=ae.getPrimaries(ae.workingColorSpace),ft=A.colorSpace===bi?null:ae.getPrimaries(A.colorSpace),Et=A.colorSpace===bi||Tt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Dt=A.isCompressedTexture||A.image[0].isCompressedTexture,ht=A.image[0]&&A.image[0].isDataTexture,wt=[];for(let st=0;st<6;st++)!Dt&&!ht?wt[st]=v(A.image[st],!0,i.maxCubemapSize):wt[st]=ht?A.image[st].image:A.image[st],wt[st]=Gt(A,wt[st]);const Ot=wt[0],Ut=s.convert(A.format,A.colorSpace),_t=s.convert(A.type),Wt=y(A.internalFormat,Ut,_t,A.colorSpace),B=A.isVideoTexture!==!0,ct=Z.__version===void 0||Y===!0,mt=ot.dataReady;let It=w(A,Ot);it(o.TEXTURE_CUBE_MAP,A);let ut;if(Dt){B&&ct&&e.texStorage2D(o.TEXTURE_CUBE_MAP,It,Wt,Ot.width,Ot.height);for(let st=0;st<6;st++){ut=wt[st].mipmaps;for(let Nt=0;Nt<ut.length;Nt++){const Yt=ut[Nt];A.format!==vn?Ut!==null?B?mt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Yt.width,Yt.height,Ut,Yt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Wt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Yt.width,Yt.height,Ut,_t,Yt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Wt,Yt.width,Yt.height,0,Ut,_t,Yt.data)}}}else{if(ut=A.mipmaps,B&&ct){ut.length>0&&It++;const st=kt(wt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,It,Wt,st.width,st.height)}for(let st=0;st<6;st++)if(ht){B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,wt[st].width,wt[st].height,Ut,_t,wt[st].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,wt[st].width,wt[st].height,0,Ut,_t,wt[st].data);for(let Nt=0;Nt<ut.length;Nt++){const ye=ut[Nt].image[st].image;B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,ye.width,ye.height,Ut,_t,ye.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Wt,ye.width,ye.height,0,Ut,_t,ye.data)}}else{B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,_t,wt[st]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,Ut,_t,wt[st]);for(let Nt=0;Nt<ut.length;Nt++){const Yt=ut[Nt];B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,Ut,_t,Yt.image[st]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Wt,Ut,_t,Yt.image[st])}}}g(A)&&p(o.TEXTURE_CUBE_MAP),Z.__version=ot.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Mt(N,A,G,Y,ot,Z){const Tt=s.convert(G.format,G.colorSpace),ft=s.convert(G.type),Et=y(G.internalFormat,Tt,ft,G.colorSpace),Dt=n.get(A),ht=n.get(G);if(ht.__renderTarget=A,!Dt.__hasExternalTextures){const wt=Math.max(1,A.width>>Z),Ot=Math.max(1,A.height>>Z);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?e.texImage3D(ot,Z,Et,wt,Ot,A.depth,0,Tt,ft,null):e.texImage2D(ot,Z,Et,wt,Ot,0,Tt,ft,null)}e.bindFramebuffer(o.FRAMEBUFFER,N),lt(A)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Y,ot,ht.__webglTexture,0,gt(A)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Y,ot,ht.__webglTexture,Z),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(N,A,G){if(o.bindRenderbuffer(o.RENDERBUFFER,N),A.depthBuffer){const Y=A.depthTexture,ot=Y&&Y.isDepthTexture?Y.type:null,Z=_(A.stencilBuffer,ot),Tt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=gt(A);lt(A)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft,Z,A.width,A.height):G?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,Z,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Z,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,N)}else{const Y=A.textures;for(let ot=0;ot<Y.length;ot++){const Z=Y[ot],Tt=s.convert(Z.format,Z.colorSpace),ft=s.convert(Z.type),Et=y(Z.internalFormat,Tt,ft,Z.colorSpace),Dt=gt(A);G&&lt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Et,A.width,A.height):lt(A)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,Et,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Et,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const ot=Y.__webglTexture,Z=gt(A);if(A.depthTexture.format===go)lt(A)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0,Z):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ot,0);else if(A.depthTexture.format===Ls)lt(A)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0,Z):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function ne(N){const A=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const Y=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){const ot=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",ot)};Y.addEventListener("dispose",ot),A.__depthDisposeCallback=ot}A.__boundDepthTexture=Y}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=N.texture.mipmaps;Y&&Y.length>0?bt(A.__webglFramebuffer[0],N):bt(A.__webglFramebuffer,N)}else if(G){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=o.createRenderbuffer(),Rt(A.__webglDepthbuffer[Y],N,!1);else{const ot=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer[Y];o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,Z)}}else{const Y=N.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Rt(A.__webglDepthbuffer,N,!1);else{const ot=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Z),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,Z)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(N,A,G){const Y=n.get(N);A!==void 0&&Mt(Y.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),G!==void 0&&ne(N)}function O(N){const A=N.texture,G=n.get(N),Y=n.get(A);N.addEventListener("dispose",T);const ot=N.textures,Z=N.isWebGLCubeRenderTarget===!0,Tt=ot.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=o.createTexture()),Y.__version=A.version,r.memory.textures++),Z){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let Et=0;Et<A.mipmaps.length;Et++)G.__webglFramebuffer[ft][Et]=o.createFramebuffer()}else G.__webglFramebuffer[ft]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)G.__webglFramebuffer[ft]=o.createFramebuffer()}else G.__webglFramebuffer=o.createFramebuffer();if(Tt)for(let ft=0,Et=ot.length;ft<Et;ft++){const Dt=n.get(ot[ft]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),r.memory.textures++)}if(N.samples>0&&lt(N)===!1){G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){const Et=ot[ft];G.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const Dt=s.convert(Et.format,Et.colorSpace),ht=s.convert(Et.type),wt=y(Et.internalFormat,Dt,ht,Et.colorSpace,N.isXRRenderTarget===!0),Ot=gt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,wt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(G.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Z){e.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture),it(o.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let Et=0;Et<A.mipmaps.length;Et++)Mt(G.__webglFramebuffer[ft][Et],N,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Et);else Mt(G.__webglFramebuffer[ft],N,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(A)&&p(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,Et=ot.length;ft<Et;ft++){const Dt=ot[ft],ht=n.get(Dt);let wt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(wt,ht.__webglTexture),it(wt,Dt),Mt(G.__webglFramebuffer,N,Dt,o.COLOR_ATTACHMENT0+ft,wt,0),g(Dt)&&p(wt)}e.unbindTexture()}else{let ft=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),it(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let Et=0;Et<A.mipmaps.length;Et++)Mt(G.__webglFramebuffer[Et],N,A,o.COLOR_ATTACHMENT0,ft,Et);else Mt(G.__webglFramebuffer,N,A,o.COLOR_ATTACHMENT0,ft,0);g(A)&&p(ft),e.unbindTexture()}N.depthBuffer&&ne(N)}function rt(N){const A=N.textures;for(let G=0,Y=A.length;G<Y;G++){const ot=A[G];if(g(ot)){const Z=x(N),Tt=n.get(ot).__webglTexture;e.bindTexture(Z,Tt),p(Z),e.unbindTexture()}}}const tt=[],J=[];function $(N){if(N.samples>0){if(lt(N)===!1){const A=N.textures,G=N.width,Y=N.height;let ot=o.COLOR_BUFFER_BIT;const Z=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=n.get(N),ft=A.length>1;if(ft)for(let Dt=0;Dt<A.length;Dt++)e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const Et=N.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Dt=0;Dt<A.length;Dt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ot|=o.STENCIL_BUFFER_BIT)),ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Dt]);const ht=n.get(A[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ht,0)}o.blitFramebuffer(0,0,G,Y,0,0,G,Y,ot,o.NEAREST),l===!0&&(tt.length=0,J.length=0,tt.push(o.COLOR_ATTACHMENT0+Dt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(tt.push(Z),J.push(Z),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,J)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ft)for(let Dt=0;Dt<A.length;Dt++){e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Dt]);const ht=n.get(A[Dt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,ht,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const A=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function gt(N){return Math.min(i.maxSamples,N.samples)}function lt(N){const A=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function vt(N){const A=r.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function Gt(N,A){const G=N.colorSpace,Y=N.format,ot=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Ns&&G!==bi&&(ae.getTransfer(G)===fe?(Y!==vn||ot!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=ue,this.setupRenderTarget=O,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=lt}function ox(o,t){function e(n,i=bi){let s;const r=ae.getTransfer(i);if(n===Rn)return o.UNSIGNED_BYTE;if(n===kl)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return o.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return o.UNSIGNED_INT_10F_11F_11F_REV;if(n===du)return o.BYTE;if(n===fu)return o.SHORT;if(n===mo)return o.UNSIGNED_SHORT;if(n===Bl)return o.INT;if(n===Yi)return o.UNSIGNED_INT;if(n===Hn)return o.FLOAT;if(n===di)return o.HALF_FLOAT;if(n===gu)return o.ALPHA;if(n===vu)return o.RGB;if(n===vn)return o.RGBA;if(n===go)return o.DEPTH_COMPONENT;if(n===Ls)return o.DEPTH_STENCIL;if(n===Hl)return o.RED;if(n===Gl)return o.RED_INTEGER;if(n===xu)return o.RG;if(n===Wl)return o.RG_INTEGER;if(n===Xl)return o.RGBA_INTEGER;if(n===gr||n===vr||n===xr||n===_r)if(r===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ll)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rl||n===al)return r===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ll)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===vl||n===xl||n===_l||n===yl||n===Ml||n===wl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===bl||n===El)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Sl)return r===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Al||n===Cl||n===Rl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Tl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}const rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Pu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:rx,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cx extends Ki{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new lx,p={},x=e.getContextAttributes();let y=null,_=null;const w=[],b=[],T=new nt;let D=null;const M=new cn;M.viewport=new ve;const S=new cn;S.viewport=new ve;const E=[M,S],L=new Cp;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=w[K];return et===void 0&&(et=new pa,w[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=w[K];return et===void 0&&(et=new pa,w[K]=et),et.getGripSpace()},this.getHand=function(K){let et=w[K];return et===void 0&&(et=new pa,w[K]=et),et.getHandSpace()};function z(K){const et=b.indexOf(K.inputSource);if(et===-1)return;const Mt=w[et];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||r),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",W);for(let K=0;K<w.length;K++){const et=b[K];et!==null&&(b[K]=null,w[K].disconnect(et))}R=null,U=null,g.reset();for(const K in p)delete p[K];t.setRenderTarget(y),d=null,u=null,f=null,i=null,_=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",F),i.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?Ls:go,Rt=x.stencil?Ds:Yi);const ne={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(ne),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Pn(u.textureWidth,u.textureHeight,{format:vn,type:Rn,depthTexture:new Ql(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Mt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Pn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(K){for(let et=0;et<K.removed.length;et++){const Mt=K.removed[et],Rt=b.indexOf(Mt);Rt>=0&&(b[Rt]=null,w[Rt].disconnect(Mt))}for(let et=0;et<K.added.length;et++){const Mt=K.added[et];let Rt=b.indexOf(Mt);if(Rt===-1){for(let ne=0;ne<w.length;ne++)if(ne>=b.length){b.push(Mt),Rt=ne;break}else if(b[ne]===null){b[ne]=Mt,Rt=ne;break}if(Rt===-1)break}const bt=w[Rt];bt&&bt.connect(Mt)}}const k=new P,j=new P;function at(K,et,Mt){k.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);const Rt=k.distanceTo(j),bt=et.projectionMatrix.elements,ne=Mt.projectionMatrix.elements,ue=bt[14]/(bt[10]-1),O=bt[14]/(bt[10]+1),rt=(bt[9]+1)/bt[5],tt=(bt[9]-1)/bt[5],J=(bt[8]-1)/bt[0],$=(ne[8]+1)/ne[0],gt=ue*J,lt=ue*$,vt=Rt/(-J+$),Gt=vt*-J;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Gt),K.translateZ(vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),bt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const kt=ue+vt,N=O+vt,A=gt-Gt,G=lt+(Rt-Gt),Y=rt*O/N*kt,ot=tt*O/N*kt;K.projectionMatrix.makePerspective(A,G,Y,ot,kt,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function dt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let et=K.near,Mt=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),L.near=S.near=M.near=et,L.far=S.far=M.far=Mt,(R!==L.near||U!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),R=L.near,U=L.far),L.layers.mask=K.layers.mask|6,M.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const Rt=K.parent,bt=L.cameras;dt(L,Rt);for(let ne=0;ne<bt.length;ne++)dt(bt[ne],Rt);bt.length===2?at(L,M,S):L.projectionMatrix.copy(M.projectionMatrix),it(K,L,Rt)};function it(K,et,Mt){Mt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let Ht=null;function ee(K,et){if(h=et.getViewerPose(c||r),m=et,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Rt=!1;Mt.length!==L.cameras.length&&(L.cameras.length=0,Rt=!0);for(let O=0;O<Mt.length;O++){const rt=Mt[O];let tt=null;if(d!==null)tt=d.getViewport(rt);else{const $=f.getViewSubImage(u,rt);tt=$.viewport,O===0&&(t.setRenderTargetTextures(_,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(_))}let J=E[O];J===void 0&&(J=new cn,J.layers.enable(O),J.viewport=new ve,E[O]=J),J.matrix.fromArray(rt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(rt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(tt.x,tt.y,tt.width,tt.height),O===0&&(L.matrix.copy(J.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Rt===!0&&L.cameras.push(J)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const O=f.getDepthInformation(Mt[0]);O&&O.isValid&&O.texture&&g.init(O,i.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let O=0;O<Mt.length;O++){const rt=Mt[O].camera;if(rt){let tt=p[rt];tt||(tt=new Pu,p[rt]=tt);const J=f.getCameraImage(rt);tt.sourceTexture=J}}}}for(let Mt=0;Mt<w.length;Mt++){const Rt=b[Mt],bt=w[Mt];Rt!==null&&bt!==void 0&&bt.update(Rt,et,c||r)}Ht&&Ht(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const Kt=new Gu;Kt.setAnimationLoop(ee),this.setAnimationLoop=function(K){Ht=K},this.dispose=function(){}}}const Bi=new In,hx=new se;function ux(o,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Eu(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ye&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ye&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,Bi.copy(_),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),g.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Bi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dx(o,t,e,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(x,w);const b=t.render.frame;s[x.id]!==b&&(u(x),s[x.id]=b)}function h(x){const y=f();x.__bindingPointIndex=y;const _=o.createBuffer(),w=x.__size,b=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,w,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,_),_}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],_=x.uniforms,w=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let b=0,T=_.length;b<T;b++){const D=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,S=D.length;M<S;M++){const E=D[M];if(d(E,b,M,w)===!0){const L=E.__offset,R=Array.isArray(E.value)?E.value:[E.value];let U=0;for(let z=0;z<R.length;z++){const F=R[z],W=v(F);typeof F=="number"||typeof F=="boolean"?(E.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,L+U,E.__data)):F.isMatrix3?(E.__data[0]=F.elements[0],E.__data[1]=F.elements[1],E.__data[2]=F.elements[2],E.__data[3]=0,E.__data[4]=F.elements[3],E.__data[5]=F.elements[4],E.__data[6]=F.elements[5],E.__data[7]=0,E.__data[8]=F.elements[6],E.__data[9]=F.elements[7],E.__data[10]=F.elements[8],E.__data[11]=0):(F.toArray(E.__data,U),U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,L,E.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function d(x,y,_,w){const b=x.value,T=y+"_"+_;if(w[T]===void 0)return typeof b=="number"||typeof b=="boolean"?w[T]=b:w[T]=b.clone(),!0;{const D=w[T];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return w[T]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function m(x){const y=x.uniforms;let _=0;const w=16;for(let T=0,D=y.length;T<D;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=M.length;S<E;S++){const L=M[S],R=Array.isArray(L.value)?L.value:[L.value];for(let U=0,z=R.length;U<z;U++){const F=R[U],W=v(F),k=_%w,j=k%W.boundary,at=k+j;_+=j,at!==0&&w-at<W.storage&&(_+=w-at),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=W.storage}}}const b=_%w;return b>0&&(_+=w-b),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class fx{constructor(t={}){const{canvas:e=uf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=Ve;let b=0,T=0,D=null,M=-1,S=null;const E=new ve,L=new ve;let R=null;const U=new jt(0);let z=0,F=e.width,W=e.height,k=1,j=null,at=null;const dt=new ve(0,0,F,W),it=new ve(0,0,F,W);let Ht=!1;const ee=new Jl;let Kt=!1,K=!1;const et=new se,Mt=new P,Rt=new ve,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ue(){return D===null?k:1}let O=n;function rt(I,V){return e.getContext(I,V)}try{const I={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zl}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",ut,!1),O===null){const V="webgl2";if(O=rt(V,I),O===null)throw rt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let tt,J,$,gt,lt,vt,Gt,kt,N,A,G,Y,ot,Z,Tt,ft,Et,Dt,ht,wt,Ot,Ut,_t,Wt;function B(){tt=new Sg(O),tt.init(),Ut=new ox(O,tt),J=new gg(O,tt,t,Ut),$=new ix(O,tt),J.reversedDepthBuffer&&u&&$.buffers.depth.setReversed(!0),gt=new Tg(O),lt=new Wv,vt=new sx(O,tt,$,lt,J,Ut,gt),Gt=new xg(_),kt=new wg(_),N=new Dp(O),_t=new pg(O,N),A=new bg(O,N,gt,_t),G=new Cg(O,A,N,gt),ht=new Ag(O,J,vt),ft=new vg(lt),Y=new Gv(_,Gt,kt,tt,J,_t,ft),ot=new ux(_,lt),Z=new qv,Tt=new Jv(tt),Dt=new fg(_,Gt,kt,$,G,d,l),Et=new ex(_,G,J),Wt=new dx(O,gt,J,$),wt=new mg(O,tt,gt),Ot=new Eg(O,tt,gt),gt.programs=Y.programs,_.capabilities=J,_.extensions=tt,_.properties=lt,_.renderLists=Z,_.shadowMap=Et,_.state=$,_.info=gt}B();const ct=new cx(_,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=tt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=tt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(F,W,!1))},this.getSize=function(I){return I.set(F,W)},this.setSize=function(I,V,X=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,W=V,e.width=Math.floor(I*k),e.height=Math.floor(V*k),X===!0&&(e.style.width=I+"px",e.style.height=V+"px"),this.setViewport(0,0,I,V)},this.getDrawingBufferSize=function(I){return I.set(F*k,W*k).floor()},this.setDrawingBufferSize=function(I,V,X){F=I,W=V,k=X,e.width=Math.floor(I*X),e.height=Math.floor(V*X),this.setViewport(0,0,I,V)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(dt)},this.setViewport=function(I,V,X,q){I.isVector4?dt.set(I.x,I.y,I.z,I.w):dt.set(I,V,X,q),$.viewport(E.copy(dt).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(it)},this.setScissor=function(I,V,X,q){I.isVector4?it.set(I.x,I.y,I.z,I.w):it.set(I,V,X,q),$.scissor(L.copy(it).multiplyScalar(k).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(I){$.setScissorTest(Ht=I)},this.setOpaqueSort=function(I){j=I},this.setTransparentSort=function(I){at=I},this.getClearColor=function(I){return I.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(I=!0,V=!0,X=!0){let q=0;if(I){let H=!1;if(D!==null){const pt=D.texture.format;H=pt===Xl||pt===Wl||pt===Gl}if(H){const pt=D.texture.type,St=pt===Rn||pt===Yi||pt===mo||pt===Ds||pt===kl||pt===Vl,Lt=Dt.getClearColor(),At=Dt.getClearAlpha(),Vt=Lt.r,Xt=Lt.g,Ft=Lt.b;St?(m[0]=Vt,m[1]=Xt,m[2]=Ft,m[3]=At,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Vt,v[1]=Xt,v[2]=Ft,v[3]=At,O.clearBufferiv(O.COLOR,0,v))}else q|=O.COLOR_BUFFER_BIT}V&&(q|=O.DEPTH_BUFFER_BIT),X&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Dt.dispose(),Z.dispose(),Tt.dispose(),lt.dispose(),Gt.dispose(),kt.dispose(),G.dispose(),_t.dispose(),Wt.dispose(),Y.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ln),ct.removeEventListener("sessionend",dc),Di.stop()};function mt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const I=gt.autoReset,V=Et.enabled,X=Et.autoUpdate,q=Et.needsUpdate,H=Et.type;B(),gt.autoReset=I,Et.enabled=V,Et.autoUpdate=X,Et.needsUpdate=q,Et.type=H}function ut(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function st(I){const V=I.target;V.removeEventListener("dispose",st),Nt(V)}function Nt(I){Yt(I),lt.remove(I)}function Yt(I){const V=lt.get(I).programs;V!==void 0&&(V.forEach(function(X){Y.releaseProgram(X)}),I.isShaderMaterial&&Y.releaseShaderCache(I))}this.renderBufferDirect=function(I,V,X,q,H,pt){V===null&&(V=bt);const St=H.isMesh&&H.matrixWorld.determinant()<0,Lt=dd(I,V,X,q,H);$.setMaterial(q,St);let At=X.index,Vt=1;if(q.wireframe===!0){if(At=A.getWireframeAttribute(X),At===void 0)return;Vt=2}const Xt=X.drawRange,Ft=X.attributes.position;let ie=Xt.start*Vt,me=(Xt.start+Xt.count)*Vt;pt!==null&&(ie=Math.max(ie,pt.start*Vt),me=Math.min(me,(pt.start+pt.count)*Vt)),At!==null?(ie=Math.max(ie,0),me=Math.min(me,At.count)):Ft!=null&&(ie=Math.max(ie,0),me=Math.min(me,Ft.count));const Re=me-ie;if(Re<0||Re===1/0)return;_t.setup(H,q,Lt,X,At);let Se,xe=wt;if(At!==null&&(Se=N.get(At),xe=Ot,xe.setIndex(Se)),H.isMesh)q.wireframe===!0?($.setLineWidth(q.wireframeLinewidth*ue()),xe.setMode(O.LINES)):xe.setMode(O.TRIANGLES);else if(H.isLine){let zt=q.linewidth;zt===void 0&&(zt=1),$.setLineWidth(zt*ue()),H.isLineSegments?xe.setMode(O.LINES):H.isLineLoop?xe.setMode(O.LINE_LOOP):xe.setMode(O.LINE_STRIP)}else H.isPoints?xe.setMode(O.POINTS):H.isSprite&&xe.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const zt=H._multiDrawStarts,Ee=H._multiDrawCounts,le=H._multiDrawCount,on=At?N.get(At).bytesPerElement:1,Ji=lt.get(q).currentProgram.getUniforms();for(let rn=0;rn<le;rn++)Ji.setValue(O,"_gl_DrawID",rn),xe.render(zt[rn]/on,Ee[rn])}else if(H.isInstancedMesh)xe.renderInstances(ie,Re,H.count);else if(X.isInstancedBufferGeometry){const zt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,zt);xe.renderInstances(ie,Re,Ee)}else xe.render(ie,Re)};function ye(I,V,X){I.transparent===!0&&I.side===We&&I.forceSinglePass===!1?(I.side=Ye,I.needsUpdate=!0,Co(I,V,X),I.side=Ci,I.needsUpdate=!0,Co(I,V,X),I.side=We):Co(I,V,X)}this.compile=function(I,V,X=null){X===null&&(X=I),p=Tt.get(X),p.init(V),y.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),I!==X&&I.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return I.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pt=H.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){const Lt=pt[St];ye(Lt,X,H),q.add(Lt)}else ye(pt,X,H),q.add(pt)}),p=y.pop(),q},this.compileAsync=function(I,V,X=null){const q=this.compile(I,V,X);return new Promise(H=>{function pt(){if(q.forEach(function(St){lt.get(St).currentProgram.isReady()&&q.delete(St)}),q.size===0){H(I);return}setTimeout(pt,10)}tt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let de=null;function Yn(I){de&&de(I)}function Ln(){Di.stop()}function dc(){Di.start()}const Di=new Gu;Di.setAnimationLoop(Yn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(I){de=I,ct.setAnimationLoop(I),I===null?Di.stop():Di.start()},ct.addEventListener("sessionstart",Ln),ct.addEventListener("sessionend",dc),this.render=function(I,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(V),V=ct.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,V,D),p=Tt.get(I,y.length),p.init(V),y.push(p),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(et,Gn,V.reversedDepth),K=this.localClippingEnabled,Kt=ft.init(this.clippingPlanes,K),g=Z.get(I,x.length),g.init(),x.push(g),ct.enabled===!0&&ct.isPresenting===!0){const pt=_.xr.getDepthSensingMesh();pt!==null&&Xr(pt,V,-1/0,_.sortObjects)}Xr(I,V,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(j,at),ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ne&&Dt.addToRenderList(g,I),this.info.render.frame++,Kt===!0&&ft.beginShadows();const X=p.state.shadowsArray;Et.render(X,I,V),Kt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,H=g.transmissive;if(p.setupLights(),V.isArrayCamera){const pt=V.cameras;if(H.length>0)for(let St=0,Lt=pt.length;St<Lt;St++){const At=pt[St];pc(q,H,I,At)}ne&&Dt.render(I);for(let St=0,Lt=pt.length;St<Lt;St++){const At=pt[St];fc(g,I,At,At.viewport)}}else H.length>0&&pc(q,H,I,V),ne&&Dt.render(I),fc(g,I,V);D!==null&&T===0&&(vt.updateMultisampleRenderTarget(D),vt.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(_,I,V),_t.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Kt===!0&&ft.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Xr(I,V,X,q){if(I.visible===!1)return;if(I.layers.test(V.layers)){if(I.isGroup)X=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(V);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ee.intersectsSprite(I)){q&&Rt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(et);const St=G.update(I),Lt=I.material;Lt.visible&&g.push(I,St,Lt,X,Rt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ee.intersectsObject(I))){const St=G.update(I),Lt=I.material;if(q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Rt.copy(I.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Rt.copy(St.boundingSphere.center)),Rt.applyMatrix4(I.matrixWorld).applyMatrix4(et)),Array.isArray(Lt)){const At=St.groups;for(let Vt=0,Xt=At.length;Vt<Xt;Vt++){const Ft=At[Vt],ie=Lt[Ft.materialIndex];ie&&ie.visible&&g.push(I,St,ie,X,Rt.z,Ft)}}else Lt.visible&&g.push(I,St,Lt,X,Rt.z,null)}}const pt=I.children;for(let St=0,Lt=pt.length;St<Lt;St++)Xr(pt[St],V,X,q)}function fc(I,V,X,q){const H=I.opaque,pt=I.transmissive,St=I.transparent;p.setupLightsView(X),Kt===!0&&ft.setGlobalState(_.clippingPlanes,X),q&&$.viewport(E.copy(q)),H.length>0&&Ao(H,V,X),pt.length>0&&Ao(pt,V,X),St.length>0&&Ao(St,V,X),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function pc(I,V,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Pn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?di:Rn,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const pt=p.state.transmissionRenderTarget[q.id],St=q.viewport||E;pt.setSize(St.z*_.transmissionResolutionScale,St.w*_.transmissionResolutionScale);const Lt=_.getRenderTarget(),At=_.getActiveCubeFace(),Vt=_.getActiveMipmapLevel();_.setRenderTarget(pt),_.getClearColor(U),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),ne&&Dt.render(X);const Xt=_.toneMapping;_.toneMapping=Ai;const Ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Kt===!0&&ft.setGlobalState(_.clippingPlanes,q),Ao(I,X,q),vt.updateMultisampleRenderTarget(pt),vt.updateRenderTargetMipmap(pt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let me=0,Re=V.length;me<Re;me++){const Se=V[me],xe=Se.object,zt=Se.geometry,Ee=Se.material,le=Se.group;if(Ee.side===We&&xe.layers.test(q.layers)){const on=Ee.side;Ee.side=Ye,Ee.needsUpdate=!0,mc(xe,X,q,zt,Ee,le),Ee.side=on,Ee.needsUpdate=!0,ie=!0}}ie===!0&&(vt.updateMultisampleRenderTarget(pt),vt.updateRenderTargetMipmap(pt))}_.setRenderTarget(Lt,At,Vt),_.setClearColor(U,z),Ft!==void 0&&(q.viewport=Ft),_.toneMapping=Xt}function Ao(I,V,X){const q=V.isScene===!0?V.overrideMaterial:null;for(let H=0,pt=I.length;H<pt;H++){const St=I[H],Lt=St.object,At=St.geometry,Vt=St.group;let Xt=St.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),Lt.layers.test(X.layers)&&mc(Lt,V,X,At,Xt,Vt)}}function mc(I,V,X,q,H,pt){I.onBeforeRender(_,V,X,q,H,pt),I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),H.onBeforeRender(_,V,X,q,I,pt),H.transparent===!0&&H.side===We&&H.forceSinglePass===!1?(H.side=Ye,H.needsUpdate=!0,_.renderBufferDirect(X,V,q,H,I,pt),H.side=Ci,H.needsUpdate=!0,_.renderBufferDirect(X,V,q,H,I,pt),H.side=We):_.renderBufferDirect(X,V,q,H,I,pt),I.onAfterRender(_,V,X,q,H,pt)}function Co(I,V,X){V.isScene!==!0&&(V=bt);const q=lt.get(I),H=p.state.lights,pt=p.state.shadowsArray,St=H.state.version,Lt=Y.getParameters(I,H.state,pt,V,X),At=Y.getProgramCacheKey(Lt);let Vt=q.programs;q.environment=I.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(I.isMeshStandardMaterial?kt:Gt).get(I.envMap||q.environment),q.envMapRotation=q.environment!==null&&I.envMap===null?V.environmentRotation:I.envMapRotation,Vt===void 0&&(I.addEventListener("dispose",st),Vt=new Map,q.programs=Vt);let Xt=Vt.get(At);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===St)return vc(I,Lt),Xt}else Lt.uniforms=Y.getUniforms(I),I.onBeforeCompile(Lt,_),Xt=Y.acquireProgram(Lt,At),Vt.set(At,Xt),q.uniforms=Lt.uniforms;const Ft=q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ft.clippingPlanes=ft.uniform),vc(I,Lt),q.needsLights=pd(I),q.lightsStateVersion=St,q.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMap.value=H.state.directionalShadowMap,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotShadowMap.value=H.state.spotShadowMap,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMap.value=H.state.pointShadowMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function gc(I){if(I.uniformsList===null){const V=I.currentProgram.getUniforms();I.uniformsList=yr.seqWithValue(V.seq,I.uniforms)}return I.uniformsList}function vc(I,V){const X=lt.get(I);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function dd(I,V,X,q,H){V.isScene!==!0&&(V=bt),vt.resetTextureUnits();const pt=V.fog,St=q.isMeshStandardMaterial?V.environment:null,Lt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ns,At=(q.isMeshStandardMaterial?kt:Gt).get(q.envMap||St),Vt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ft=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,me=!!X.morphAttributes.color;let Re=Ai;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Re=_.toneMapping);const Se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=Se!==void 0?Se.length:0,zt=lt.get(q),Ee=p.state.lights;if(Kt===!0&&(K===!0||I!==S)){const Ke=I===S&&q.id===M;ft.setState(q,I,Ke)}let le=!1;q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Ee.state.version||zt.outputColorSpace!==Lt||H.isBatchedMesh&&zt.batching===!1||!H.isBatchedMesh&&zt.batching===!0||H.isBatchedMesh&&zt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&zt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&zt.instancing===!1||!H.isInstancedMesh&&zt.instancing===!0||H.isSkinnedMesh&&zt.skinning===!1||!H.isSkinnedMesh&&zt.skinning===!0||H.isInstancedMesh&&zt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&zt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&zt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&zt.instancingMorph===!1&&H.morphTexture!==null||zt.envMap!==At||q.fog===!0&&zt.fog!==pt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ft.numPlanes||zt.numIntersection!==ft.numIntersection)||zt.vertexAlphas!==Vt||zt.vertexTangents!==Xt||zt.morphTargets!==Ft||zt.morphNormals!==ie||zt.morphColors!==me||zt.toneMapping!==Re||zt.morphTargetsCount!==xe)&&(le=!0):(le=!0,zt.__version=q.version);let on=zt.currentProgram;le===!0&&(on=Co(q,V,H));let Ji=!1,rn=!1,Gs=!1;const Te=on.getUniforms(),un=zt.uniforms;if($.useProgram(on.program)&&(Ji=!0,rn=!0,Gs=!0),q.id!==M&&(M=q.id,rn=!0),Ji||S!==I){$.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Te.setValue(O,"projectionMatrix",I.projectionMatrix),Te.setValue(O,"viewMatrix",I.matrixWorldInverse);const tn=Te.map.cameraPosition;tn!==void 0&&tn.setValue(O,Mt.setFromMatrixPosition(I.matrixWorld)),J.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Te.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,rn=!0,Gs=!0)}if(H.isSkinnedMesh){Te.setOptional(O,H,"bindMatrix"),Te.setOptional(O,H,"bindMatrixInverse");const Ke=H.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Te.setValue(O,"boneTexture",Ke.boneTexture,vt))}H.isBatchedMesh&&(Te.setOptional(O,H,"batchingTexture"),Te.setValue(O,"batchingTexture",H._matricesTexture,vt),Te.setOptional(O,H,"batchingIdTexture"),Te.setValue(O,"batchingIdTexture",H._indirectTexture,vt),Te.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Te.setValue(O,"batchingColorTexture",H._colorsTexture,vt));const dn=X.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ht.update(H,X,on),(rn||zt.receiveShadow!==H.receiveShadow)&&(zt.receiveShadow=H.receiveShadow,Te.setValue(O,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(un.envMap.value=At,un.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(un.envMapIntensity.value=V.environmentIntensity),rn&&(Te.setValue(O,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&fd(un,Gs),pt&&q.fog===!0&&ot.refreshFogUniforms(un,pt),ot.refreshMaterialUniforms(un,q,k,W,p.state.transmissionRenderTarget[I.id]),yr.upload(O,gc(zt),un,vt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(yr.upload(O,gc(zt),un,vt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Te.setValue(O,"center",H.center),Te.setValue(O,"modelViewMatrix",H.modelViewMatrix),Te.setValue(O,"normalMatrix",H.normalMatrix),Te.setValue(O,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ke=q.uniformsGroups;for(let tn=0,qr=Ke.length;tn<qr;tn++){const Li=Ke[tn];Wt.update(Li,on),Wt.bind(Li,on)}}return on}function fd(I,V){I.ambientLightColor.needsUpdate=V,I.lightProbe.needsUpdate=V,I.directionalLights.needsUpdate=V,I.directionalLightShadows.needsUpdate=V,I.pointLights.needsUpdate=V,I.pointLightShadows.needsUpdate=V,I.spotLights.needsUpdate=V,I.spotLightShadows.needsUpdate=V,I.rectAreaLights.needsUpdate=V,I.hemisphereLights.needsUpdate=V}function pd(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,V,X){const q=lt.get(I);q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),lt.get(I.texture).__webglTexture=V,lt.get(I.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,V){const X=lt.get(I);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0};const md=O.createFramebuffer();this.setRenderTarget=function(I,V=0,X=0){D=I,b=V,T=X;let q=!0,H=null,pt=!1,St=!1;if(I){const At=lt.get(I);if(At.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)vt.setupRenderTarget(I);else if(At.__hasExternalTextures)vt.rebindTextures(I,lt.get(I.texture).__webglTexture,lt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ft=I.depthTexture;if(At.__boundDepthTexture!==Ft){if(Ft!==null&&lt.has(Ft)&&(I.width!==Ft.image.width||I.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(I)}}const Vt=I.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);const Xt=lt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Xt[V])?H=Xt[V][X]:H=Xt[V],pt=!0):I.samples>0&&vt.useMultisampledRTT(I)===!1?H=lt.get(I).__webglMultisampledFramebuffer:Array.isArray(Xt)?H=Xt[X]:H=Xt,E.copy(I.viewport),L.copy(I.scissor),R=I.scissorTest}else E.copy(dt).multiplyScalar(k).floor(),L.copy(it).multiplyScalar(k).floor(),R=Ht;if(X!==0&&(H=md),$.bindFramebuffer(O.FRAMEBUFFER,H)&&q&&$.drawBuffers(I,H),$.viewport(E),$.scissor(L),$.setScissorTest(R),pt){const At=lt.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,At.__webglTexture,X)}else if(St){const At=V;for(let Vt=0;Vt<I.textures.length;Vt++){const Xt=lt.get(I.textures[Vt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Vt,Xt.__webglTexture,X,At)}}else if(I!==null&&X!==0){const At=lt.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(I,V,X,q,H,pt,St,Lt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){$.bindFramebuffer(O.FRAMEBUFFER,At);try{const Vt=I.textures[Lt],Xt=Vt.format,Ft=Vt.type;if(!J.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=I.width-q&&X>=0&&X<=I.height-H&&(I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Lt),O.readPixels(V,X,q,H,Ut.convert(Xt),Ut.convert(Ft),pt))}finally{const Vt=D!==null?lt.get(D).__webglFramebuffer:null;$.bindFramebuffer(O.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(I,V,X,q,H,pt,St,Lt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At)if(V>=0&&V<=I.width-q&&X>=0&&X<=I.height-H){$.bindFramebuffer(O.FRAMEBUFFER,At);const Vt=I.textures[Lt],Xt=Vt.format,Ft=Vt.type;if(!J.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Lt),O.readPixels(V,X,q,H,Ut.convert(Xt),Ut.convert(Ft),0);const me=D!==null?lt.get(D).__webglFramebuffer:null;$.bindFramebuffer(O.FRAMEBUFFER,me);const Re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await df(O,Re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.deleteBuffer(ie),O.deleteSync(Re),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,V=null,X=0){const q=Math.pow(2,-X),H=Math.floor(I.image.width*q),pt=Math.floor(I.image.height*q),St=V!==null?V.x:0,Lt=V!==null?V.y:0;vt.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,St,Lt,H,pt),$.unbindTexture()};const gd=O.createFramebuffer(),vd=O.createFramebuffer();this.copyTextureToTexture=function(I,V,X=null,q=null,H=0,pt=null){pt===null&&(H!==0?(xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=H,H=0):pt=0);let St,Lt,At,Vt,Xt,Ft,ie,me,Re;const Se=I.isCompressedTexture?I.mipmaps[pt]:I.image;if(X!==null)St=X.max.x-X.min.x,Lt=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,Vt=X.min.x,Xt=X.min.y,Ft=X.isBox3?X.min.z:0;else{const dn=Math.pow(2,-H);St=Math.floor(Se.width*dn),Lt=Math.floor(Se.height*dn),I.isDataArrayTexture?At=Se.depth:I.isData3DTexture?At=Math.floor(Se.depth*dn):At=1,Vt=0,Xt=0,Ft=0}q!==null?(ie=q.x,me=q.y,Re=q.z):(ie=0,me=0,Re=0);const xe=Ut.convert(V.format),zt=Ut.convert(V.type);let Ee;V.isData3DTexture?(vt.setTexture3D(V,0),Ee=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(vt.setTexture2DArray(V,0),Ee=O.TEXTURE_2D_ARRAY):(vt.setTexture2D(V,0),Ee=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const le=O.getParameter(O.UNPACK_ROW_LENGTH),on=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ji=O.getParameter(O.UNPACK_SKIP_PIXELS),rn=O.getParameter(O.UNPACK_SKIP_ROWS),Gs=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Se.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Se.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Vt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ft);const Te=I.isDataArrayTexture||I.isData3DTexture,un=V.isDataArrayTexture||V.isData3DTexture;if(I.isDepthTexture){const dn=lt.get(I),Ke=lt.get(V),tn=lt.get(dn.__renderTarget),qr=lt.get(Ke.__renderTarget);$.bindFramebuffer(O.READ_FRAMEBUFFER,tn.__webglFramebuffer),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let Li=0;Li<At;Li++)Te&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.get(I).__webglTexture,H,Ft+Li),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.get(V).__webglTexture,pt,Re+Li)),O.blitFramebuffer(Vt,Xt,St,Lt,ie,me,St,Lt,O.DEPTH_BUFFER_BIT,O.NEAREST);$.bindFramebuffer(O.READ_FRAMEBUFFER,null),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||I.isRenderTargetTexture||lt.has(I)){const dn=lt.get(I),Ke=lt.get(V);$.bindFramebuffer(O.READ_FRAMEBUFFER,gd),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,vd);for(let tn=0;tn<At;tn++)Te?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dn.__webglTexture,H,Ft+tn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dn.__webglTexture,H),un?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.__webglTexture,pt,Re+tn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ke.__webglTexture,pt),H!==0?O.blitFramebuffer(Vt,Xt,St,Lt,ie,me,St,Lt,O.COLOR_BUFFER_BIT,O.NEAREST):un?O.copyTexSubImage3D(Ee,pt,ie,me,Re+tn,Vt,Xt,St,Lt):O.copyTexSubImage2D(Ee,pt,ie,me,Vt,Xt,St,Lt);$.bindFramebuffer(O.READ_FRAMEBUFFER,null),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else un?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Ee,pt,ie,me,Re,St,Lt,At,xe,zt,Se.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Ee,pt,ie,me,Re,St,Lt,At,xe,Se.data):O.texSubImage3D(Ee,pt,ie,me,Re,St,Lt,At,xe,zt,Se):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,ie,me,St,Lt,xe,zt,Se.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,ie,me,Se.width,Se.height,xe,Se.data):O.texSubImage2D(O.TEXTURE_2D,pt,ie,me,St,Lt,xe,zt,Se);O.pixelStorei(O.UNPACK_ROW_LENGTH,le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,on),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ji),O.pixelStorei(O.UNPACK_SKIP_ROWS,rn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gs),pt===0&&V.generateMipmaps&&O.generateMipmap(Ee),$.unbindTexture()},this.initRenderTarget=function(I){lt.get(I).__webglFramebuffer===void 0&&vt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?vt.setTextureCube(I,0):I.isData3DTexture?vt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?vt.setTexture2DArray(I,0):vt.setTexture2D(I,0),$.unbindTexture()},this.resetState=function(){b=0,T=0,D=null,$.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Ch={type:"change"},rc={type:"start"},Yu={type:"end"},sr=new Yl,Rh=new Si,px=Math.cos(70*xn.DEG2RAD),Ne=new P,en=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class mx extends Pp{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ri,this._lastTargetPosition=new P,this._quat=new Ri().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ih,this._sphericalDelta=new ih,this._scale=1,this._panOffset=new P,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new P,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vx.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=xx.bind(this),this._onContextMenu=Ex.bind(this),this._onMouseWheel=Mx.bind(this),this._onKeyDown=wx.bind(this),this._onTouchStart=Sx.bind(this),this._onTouchMove=bx.bind(this),this._onMouseDown=_x.bind(this),this._onMouseMove=yx.bind(this),this._interceptControlDown=Tx.bind(this),this._interceptControlUp=Ax.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=ge.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),i<-Math.PI?i+=en:i>Math.PI&&(i-=en),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ne.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(sr.origin.copy(this.object.position),sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sr.direction))<px?this.object.lookAt(this.target):(Rh.setFromNormalAndCoplanarPoint(this.object.up,this.target),sr.intersectPlane(Rh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ne.copy(i).sub(this.target);let s=Ne.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function gx(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function vx(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function xx(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yu),this.state=ge.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _x(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ge.DOLLY;break;case Es.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ge.ROTATE}break;case Es.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(rc)}function yx(o){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Mx(o){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(o.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Yu))}function wx(o){this.enabled!==!1&&this._handleKeyDown(o)}function Sx(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ge.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ge.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(rc)}function bx(o){switch(this._trackPointer(o),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ge.NONE}}function Ex(o){this.enabled!==!1&&o.preventDefault()}function Tx(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ax(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Cx{constructor(t){this.game=t,this.active=!1,this.controls=new mx(t.camera,t.renderer.domElement),this.controls.enabled=!1,this.controls.enableDamping=!0,this.controls.minDistance=2,this.controls.maxDistance=350,this.controls.maxPolarAngle=Math.PI*.96,this.controls.panSpeed=1.1,this.controls.zoomSpeed=.8,document.getElementById("photo-close").onclick=()=>this.close(),document.getElementById("photo-shot").onclick=()=>this.capture(),document.getElementById("photo-reset").onclick=()=>this.frame(),document.getElementById("photo-fov").oninput=e=>{t.camera.fov=Number(e.target.value),t.camera.updateProjectionMatrix()}}frame(){const t=this.game,e=t.active.mesh.position,n=t.active.config,i=Math.max(n.length,n.width)*1.25;this.controls.target.copy(e),this.controls.target.y+=n.kind==="air"?1:1.3,t.camera.position.set(e.x+i*.7,e.y+i*.33,e.z-i*.8),this.controls.update()}open(){const t=this.game;t.action("close"),this.active=!0,this.labels=[],t.scene.traverse(e=>{e.isSprite&&e.visible&&(this.labels.push(e),e.visible=!1)}),t.paused=!0,t.input.clear(),this.controls.enabled=!0,document.getElementById("hud").hidden=!0,document.getElementById("photo-panel").hidden=!1,this.frame()}close(){if(!this.active)return;const t=this.game;this.active=!1;for(const e of this.labels||[])e.visible=!0;this.controls.enabled=!1,t.paused=!1,t.input.clear(),t.camera.fov=55,t.camera.updateProjectionMatrix(),document.getElementById("photo-fov").value=55,document.getElementById("hud").hidden=!1,document.getElementById("photo-panel").hidden=!0}async capture(){const t=this.game,e=document.getElementById("photo-shot");e.disabled=!0;try{t.marker.visible=!1,t.graphics.render(0);const n=await new Promise(r=>t.renderer.domElement.toBlob(r,"image/png"));if(!n)throw new Error("画像を保存できませんでした");const i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download=`norimono-${t.active.config.id}-${Date.now()}.png`,s.click(),setTimeout(()=>URL.revokeObjectURL(i),3e4),t.toast("写真を保存したよ！")}catch(n){t.toast(n.message)}finally{e.disabled=!1}}update(){this.active&&this.controls.update()}}class kr extends Qt{constructor(){const t=kr.SkyShader,e=new Xe({name:t.name,uniforms:oi.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ye,depthWrite:!1});super(new fi(1,1,1),e),this.isSky=!0}}kr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rx=new sc(-1,1,1,-1,0,1);class Px extends _e{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const Ix=new Px;class ac{constructor(t){this._mesh=new Qt(Ix,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Rx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Dx extends Hs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=oi.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ac(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ph extends Hs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Lx extends Hs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Nx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dx(Mr),this.copyPass.material.blending=Ge,this.clock=new Hu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ph!==void 0&&(r instanceof Ph?n=!0:r instanceof Lx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ux extends Hs{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new jt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const or={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new se},cameraProjectionMatrixInverse:{value:new se},cameraWorldMatrix:{value:new se},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},rr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ra={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Fx(o=5){const t=Math.floor(o)%2===0?Math.floor(o)+1:Math.floor(o),e=zx(t),n=e.length,i=new Uint8Array(n*4);for(let r=0;r<n;++r){const a=e[r],l=2*Math.PI*a/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();i[r*4]=(c.x*.5+.5)*255,i[r*4+1]=(c.y*.5+.5)*255,i[r*4+2]=127,i[r*4+3]=255}const s=new Nr(i,t,t);return s.wrapS=ui,s.wrapT=ui,s.needsUpdate=!0,s}function zx(o){const t=Math.floor(o)%2===0?Math.floor(o)+1:Math.floor(o),e=t*t,n=Array(e).fill(0);let i=Math.floor(t/2),s=t-1;for(let r=1;r<=e;){if(i===-1&&s===t?(s=t-2,i=0):(s===t&&(s=0),i<0&&(i=t-1)),n[i*t+s]!==0){s-=2,i++;continue}else n[i*t+s]=r++;s++,i--}return n}const ar={defines:{SAMPLES:16,SAMPLE_VECTORS:Zu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraProjectionMatrixInverse:{value:new se},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Zu(o,t,e){const n=Ox(o,t,e);let i="vec3[SAMPLES](";for(let s=0;s<o;s++){const r=n[s];i+=`vec3(${r.x}, ${r.y}, ${r.z})${s<o-1?",":")"}`}return i}function Ox(o,t,e){const n=[];for(let i=0;i<o;i++){const s=2*Math.PI*t*i/o,r=Math.pow(i/(o-1),e);n.push(new P(Math.cos(s),Math.sin(s),r))}return n}class Bx{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,s;const r=.5*(Math.sqrt(3)-1),a=(t+e)*r,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,m=t-u,v=e-d;let g,p;m>v?(g=1,p=0):(g=0,p=1);const x=m-g+h,y=v-p+h,_=m-1+2*h,w=v-1+2*h,b=l&255,T=c&255,D=this.perm[b+this.perm[T]]%12,M=this.perm[b+g+this.perm[T+p]]%12,S=this.perm[b+1+this.perm[T+1]]%12;let E=.5-m*m-v*v;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[D],m,v));let L=.5-x*x-y*y;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[M],x,y));let R=.5-_*_-w*w;return R<0?s=0:(R*=R,s=R*R*this._dot(this.grad3[S],_,w)),70*(n+i+s)}noise3d(t,e,n){let i,s,r,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),f=Math.floor(e+c),u=Math.floor(n+c),d=1/6,m=(h+f+u)*d,v=h-m,g=f-m,p=u-m,x=t-v,y=e-g,_=n-p;let w,b,T,D,M,S;x>=y?y>=_?(w=1,b=0,T=0,D=1,M=1,S=0):x>=_?(w=1,b=0,T=0,D=1,M=0,S=1):(w=0,b=0,T=1,D=1,M=0,S=1):y<_?(w=0,b=0,T=1,D=0,M=1,S=1):x<_?(w=0,b=1,T=0,D=0,M=1,S=1):(w=0,b=1,T=0,D=1,M=1,S=0);const E=x-w+d,L=y-b+d,R=_-T+d,U=x-D+2*d,z=y-M+2*d,F=_-S+2*d,W=x-1+3*d,k=y-1+3*d,j=_-1+3*d,at=h&255,dt=f&255,it=u&255,Ht=this.perm[at+this.perm[dt+this.perm[it]]]%12,ee=this.perm[at+w+this.perm[dt+b+this.perm[it+T]]]%12,Kt=this.perm[at+D+this.perm[dt+M+this.perm[it+S]]]%12,K=this.perm[at+1+this.perm[dt+1+this.perm[it+1]]]%12;let et=.6-x*x-y*y-_*_;et<0?i=0:(et*=et,i=et*et*this._dot3(this.grad3[Ht],x,y,_));let Mt=.6-E*E-L*L-R*R;Mt<0?s=0:(Mt*=Mt,s=Mt*Mt*this._dot3(this.grad3[ee],E,L,R));let Rt=.6-U*U-z*z-F*F;Rt<0?r=0:(Rt*=Rt,r=Rt*Rt*this._dot3(this.grad3[Kt],U,z,F));let bt=.6-W*W-k*k-j*j;return bt<0?a=0:(bt*=bt,a=bt*bt*this._dot3(this.grad3[K],W,k,j)),32*(i+s+r+a)}noise4d(t,e,n,i){const s=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,f,u,d,m;const v=(t+e+n+i)*l,g=Math.floor(t+v),p=Math.floor(e+v),x=Math.floor(n+v),y=Math.floor(i+v),_=(g+p+x+y)*c,w=g-_,b=p-_,T=x-_,D=y-_,M=t-w,S=e-b,E=n-T,L=i-D,R=M>S?32:0,U=M>E?16:0,z=S>E?8:0,F=M>L?4:0,W=S>L?2:0,k=E>L?1:0,j=R+U+z+F+W+k,at=r[j][0]>=3?1:0,dt=r[j][1]>=3?1:0,it=r[j][2]>=3?1:0,Ht=r[j][3]>=3?1:0,ee=r[j][0]>=2?1:0,Kt=r[j][1]>=2?1:0,K=r[j][2]>=2?1:0,et=r[j][3]>=2?1:0,Mt=r[j][0]>=1?1:0,Rt=r[j][1]>=1?1:0,bt=r[j][2]>=1?1:0,ne=r[j][3]>=1?1:0,ue=M-at+c,O=S-dt+c,rt=E-it+c,tt=L-Ht+c,J=M-ee+2*c,$=S-Kt+2*c,gt=E-K+2*c,lt=L-et+2*c,vt=M-Mt+3*c,Gt=S-Rt+3*c,kt=E-bt+3*c,N=L-ne+3*c,A=M-1+4*c,G=S-1+4*c,Y=E-1+4*c,ot=L-1+4*c,Z=g&255,Tt=p&255,ft=x&255,Et=y&255,Dt=a[Z+a[Tt+a[ft+a[Et]]]]%32,ht=a[Z+at+a[Tt+dt+a[ft+it+a[Et+Ht]]]]%32,wt=a[Z+ee+a[Tt+Kt+a[ft+K+a[Et+et]]]]%32,Ot=a[Z+Mt+a[Tt+Rt+a[ft+bt+a[Et+ne]]]]%32,Ut=a[Z+1+a[Tt+1+a[ft+1+a[Et+1]]]]%32;let _t=.6-M*M-S*S-E*E-L*L;_t<0?h=0:(_t*=_t,h=_t*_t*this._dot4(s[Dt],M,S,E,L));let Wt=.6-ue*ue-O*O-rt*rt-tt*tt;Wt<0?f=0:(Wt*=Wt,f=Wt*Wt*this._dot4(s[ht],ue,O,rt,tt));let B=.6-J*J-$*$-gt*gt-lt*lt;B<0?u=0:(B*=B,u=B*B*this._dot4(s[wt],J,$,gt,lt));let ct=.6-vt*vt-Gt*Gt-kt*kt-N*N;ct<0?d=0:(ct*=ct,d=ct*ct*this._dot4(s[Ot],vt,Gt,kt,N));let mt=.6-A*A-G*G-Y*Y-ot*ot;return mt<0?m=0:(mt*=mt,m=mt*mt*this._dot4(s[Ut],A,G,Y,ot)),27*(h+f+u+d+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}}class Bn extends Hs{constructor(t,e,n=512,i=512,s,r,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Fx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Pn(this.width,this.height,{type:di}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Xe({defines:Object.assign({},or.defines),uniforms:oi.clone(or.uniforms),vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,blending:Ge,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new yp,this.normalMaterial.blending=Ge,this.pdMaterial=new Xe({defines:Object.assign({},ar.defines),uniforms:oi.clone(ar.uniforms),vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Xe({defines:Object.assign({},rr.defines),uniforms:oi.clone(rr.uniforms),vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader,blending:Ge}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Xe({uniforms:oi.clone(Mr.uniforms),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xa,blendDst:oo,blendEquation:bn,blendSrcAlpha:Wa,blendDstAlpha:oo,blendEquationAlpha:bn}),this.blendMaterial=new Xe({uniforms:oi.clone(Ra.uniforms),vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:su,blendSrc:Xa,blendDst:oo,blendEquation:bn,blendSrcAlpha:Wa,blendDstAlpha:oo,blendEquationAlpha:bn}),this._fsQuad=new ac(null),this._originalClearColor=new jt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ql,this.depthTexture.format=Ls,this.depthTexture.type=Ds,this.normalRenderTarget=new Pn(this.width,this.height,{minFilter:Qe,magFilter:Qe,type:di,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Zu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Bn.OUTPUT.Off:break;case Bn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ge,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Bn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ge,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Bn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ge,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Bn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case Bn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ge,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Bn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ge,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,s){t.getClearColor(this._originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(r)}_renderOverride(t,e,n,i,s){t.getClearColor(this._originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(r)}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){const e=new Bx,n=t*t*4,i=new Uint8Array(n);for(let r=0;r<t;r++)for(let a=0;a<t;a++){const l=r,c=a;i[(r*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(r*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(r*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(r*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const s=new Nr(i,t,t,vn,Rn);return s.wrapS=ui,s.wrapT=ui,s.needsUpdate=!0,s}}Bn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const lr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class kx extends Hs{constructor(){super(),this.uniforms=oi.clone(lr.uniforms),this.material=new _p({name:lr.name,uniforms:this.uniforms,vertexShader:lr.vertexShader,fragmentShader:lr.fragmentShader}),this._fsQuad=new ac(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ou?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===au?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===lu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Vx(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d"),n=e.createImageData(512,512);let i=543;for(let r=0;r<n.data.length;r+=4){i=Math.imul(i,1664525)+1013904223>>>0;const a=100+(i>>>25)*2.6;n.data[r]=n.data[r+1]=n.data[r+2]=a,n.data[r+3]=255}e.putImageData(n,0,0);const s=new $i(t);return s.wrapS=s.wrapT=ui,s.anisotropy=8,s}const Hx=Vx();function Pa(o,t,e){o.onBeforeCompile=n=>{n.uniforms.surfaceGrain={value:Hx},n.vertexShader=`varying vec3 vDetailWorld;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vDetailWorld=(modelMatrix*vec4(transformed,1.0)).xyz;`),n.fragmentShader=`varying vec3 vDetailWorld;
uniform sampler2D surfaceGrain;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float grain=texture2D(surfaceGrain,vDetailWorld.xz*${t.toFixed(4)}).r;
 float variation=texture2D(surfaceGrain,vDetailWorld.xz*0.009).r;
 diffuseColor.rgb*=mix(${(1-e).toFixed(3)},${(1+e).toFixed(3)},grain)*mix(.86,1.08,variation);`)},o.customProgramCacheKey=()=>`surface-${t}-${e}`,o.needsUpdate=!0}class Gx{constructor(t){this.game=t;const{scene:e,renderer:n,sun:i,camera:s}=t;this.mobile=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<=1024;let r="high";try{r=localStorage.getItem("norimono-quality")||"high"}catch{}this.quality=this.mobile?r==="low"?"low":"balanced":r,this.seconds=0,this.frames=0,n.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1.15:2)),n.toneMapping=Pr,n.toneMappingExposure=.92;for(const d of e.children)d.isHemisphereLight&&(d.intensity=.55,d.color.set(13100799),d.groundColor.set(5721920));i.color.set(16773599),i.intensity=3.3,i.shadow.mapSize.set(this.mobile?1024:2048,this.mobile?1024:2048),Object.assign(i.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260}),i.shadow.bias=-8e-5,i.shadow.normalBias=.045,i.shadow.radius=this.mobile?1:2,i.shadow.camera.updateProjectionMatrix(),this.sky=new kr,this.sky.scale.setScalar(2e4),e.add(this.sky),this.sky.material.fragmentShader=this.sky.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( retColor * vec3(0.24, 0.49, 0.83), 1.0 );");const a=this.sky.material.uniforms;a.turbidity.value=1.6,a.rayleigh.value=3.5,a.mieCoefficient.value=.001,a.mieDirectionalG.value=.78;const l=new P(-.65,1,-.45).normalize();if(a.sunPosition.value.copy(l),e.background=null,e.fog=new Lr(11716298,600,1950),this.mobile)e.environmentIntensity=.72;else{const d=new Kl,m=this.sky.clone();d.add(m);const v=new Qt(new Dn(2e4,2e4),new ks({color:6581336}));v.rotation.x=-Math.PI/2,v.position.y=-10,d.add(v);const g=new Ar(n),p=e.environment;e.environment=g.fromScene(d,.04,.1,3e4).texture,e.environmentIntensity=.85,p?.dispose(),g.dispose(),v.geometry.dispose(),v.material.dispose()}const c=new Set([4279893,5858666,5662314,7042932,7702397]),h=new Set([8233062,8431206,9681026]),f=new Set([14870493,13031647,7839151,9415333,8560302,11387331,8426893]),u=new Set;e.traverse(d=>{if(!d.isMesh)return;const m=Array.isArray(d.material)?d.material:[d.material];for(const v of m){if(!v.color||u.has(v))continue;u.add(v);const g=v.color.getHex();c.has(g)?(v.color.set(3357502),v.roughness=.93,Pa(v,.55,.38)):h.has(g)?(v.color.set(6651206),Pa(v,.22,.32)):f.has(g)&&(v.roughness=.87,Pa(v,.12,.15))}});for(const d of t.world.solids)d.castShadow=!0;if(e.traverse(d=>{d.isMesh&&!d.isInstancedMesh&&d.geometry.boundingSphere?.radius<90&&!d.material.transparent&&(d.castShadow=!0)}),t.world.water.material.color.set(2456978),t.world.water.material.roughness=.12,t.world.water.material.metalness=.25,this.waterTime={value:0},t.world.water.material.onBeforeCompile=d=>{d.uniforms.waveTime=this.waterTime,d.vertexShader=`varying vec3 waterWorld;
`+d.vertexShader,d.vertexShader=d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
waterWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),d.fragmentShader=`varying vec3 waterWorld;
uniform float waveTime;
`+d.fragmentShader,d.fragmentShader=d.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
   float waveX=sin(waterWorld.x*.23+waterWorld.z*.09+waveTime*.8)*.14+sin(waterWorld.x*.91-waveTime)*.06;
   float waveZ=cos(waterWorld.z*.38+waterWorld.x*.1+waveTime*.6)*.13;
   normal=normalize(normal+mat3(viewMatrix)*vec3(waveX,0.,waveZ));`)},this.composer=null,this.ao=null,!this.mobile){const d=new Pn(innerWidth,innerHeight,{type:di,samples:4});this.composer=new Nx(n,d),this.composer.addPass(new Ux(e,s)),this.ao=new Bn(e,s,innerWidth,innerHeight,void 0,{radius:2.2,distanceExponent:1.3,thickness:.8,scale:1,samples:8},{radius:4,lumaPhi:8,depthPhi:2,normalPhi:3}),this.ao.blendIntensity=.65,this.composer.addPass(this.ao),this.composer.addPass(new kx)}this.setQuality(this.quality,!1),this.addControl()}addControl(){const t=document.createElement("button");t.id="quality",t.type="button",t.setAttribute("aria-label","画質を切り替える");const e=()=>this.mobile?this.quality==="low"?"画質：軽量":"画質：標準":this.quality==="high"?"画質：高":"画質：軽量";t.textContent=e(),document.getElementById("top-status").prepend(t),t.addEventListener("click",()=>{this.setQuality(this.mobile?this.quality==="low"?"balanced":"low":this.quality==="high"?"balanced":"high"),t.textContent=e()})}setQuality(t,e=!0){this.quality=t,this.ao&&(this.ao.enabled=t==="high");const n=this.mobile?t==="low"?.85:1.15:t==="high"?2:1.25;if(this.game.renderer.setPixelRatio(Math.min(devicePixelRatio,n)),this.game.renderer.shadowMap.enabled=!(this.mobile&&t==="low"),this.resize(),e)try{localStorage.setItem("norimono-quality",t)}catch{}}resize(){this.composer?.setPixelRatio(this.game.renderer.getPixelRatio()),this.composer?.setSize(innerWidth,innerHeight)}render(t){this.waterTime.value=this.game.time,this.sky.position.copy(this.game.camera.position),this.composer?this.composer.render(t):this.game.renderer.render(this.game.scene,this.game.camera)}}function Wx(o,t=!1){const e=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<o.length;++h){const f=o[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<o.length;++u){const d=o[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=o[u].attributes.position.count}l.setIndex(f)}for(const h in s){const f=Ih(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let v=0;v<r[h].length;++v)d.push(r[h][v][u]);const m=Ih(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Ih(o){let t,e,n,i=-1,s=0;for(let c=0;c<o.length;++c){const h=o[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const r=new t(s),a=new sn(r,e,n);let l=0;for(let c=0;c<o.length;++c){const h=o[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const v=h.getComponent(u,m);a.setComponent(u+f,m,v)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function lc(o,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,i=[new P,new P,new P],s=new P,r=new P,a=new P,l=new P;function c(v){const g=~~(v.x*n),p=~~(v.y*n),x=~~(v.z*n);return`${g},${p},${x}`}const h=o.index?o.toNonIndexed():o,f=h.attributes.position,u={};for(let v=0,g=f.count/3;v<g;v++){const p=3*v,x=i[0].fromBufferAttribute(f,p+0),y=i[1].fromBufferAttribute(f,p+1),_=i[2].fromBufferAttribute(f,p+2);s.subVectors(_,y),r.subVectors(x,y);const w=new P().crossVectors(s,r).normalize();for(let b=0;b<3;b++){const T=i[b],D=c(T);D in u||(u[D]=[]),u[D].push(w)}}const d=new Float32Array(f.count*3),m=new sn(d,3,!1);for(let v=0,g=f.count/3;v<g;v++){const p=3*v,x=i[0].fromBufferAttribute(f,p+0),y=i[1].fromBufferAttribute(f,p+1),_=i[2].fromBufferAttribute(f,p+2);s.subVectors(_,y),r.subVectors(x,y),a.crossVectors(s,r).normalize();for(let w=0;w<3;w++){const b=i[w],T=c(b),D=u[T];l.set(0,0,0);for(let M=0,S=D.length;M<S;M++){const E=D[M];a.dot(E)>e&&l.add(E)}l.normalize(),m.setXYZ(p+w,l.x,l.y,l.z)}}return h.setAttribute("normal",m),h}function fo(o,t=new Set,e=!1){o.updateMatrixWorld(!0);const n=new Map;for(const i of[...o.children]){if(!i.isMesh||i.isInstancedMesh||t.has(i)||!i.visible||Array.isArray(i.material))continue;const s=e?`${Math.floor(i.position.x/180)},${Math.floor(i.position.z/180)}`:"",r=i.material.uuid+s;let a=n.get(r);a||(a={material:i.material,parts:[],originals:[],cast:!1},n.set(r,a));const l=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();l.applyMatrix4(i.matrix),a.parts.push(l),a.originals.push(i),a.cast||=i.castShadow}for(const i of n.values()){if(i.parts.length<2){for(const a of i.parts)a.dispose();continue}const s=Wx(i.parts,!1);for(const a of i.parts)a.dispose();if(!s)continue;const r=new Qt(s,i.material);r.castShadow=i.cast,r.receiveShadow=!0,o.add(r);for(const a of i.originals)o.remove(a)}}function Xx(o){const t=o.userData;fo(t.chassis,new Set([t.damage,...t.lights]));for(const e of t.wheels)fo(e.roll);fo(t.special)}function qx(o){const t=o.world,e=o.gimmicks,n=new Set([o.particles.mesh,o.particles.trackMesh,o.marker,t.water,t.fountain,t.waterfall,t.drawbridge.mesh,...t.signals,...t.brushes,...t.helipads,...t.doors.map(i=>i.mesh),...t.moving.map(i=>i.mesh),...e.platforms.map(i=>i.mesh),...e.fires.map(i=>i.mesh),...e.rings.map(i=>i.mesh),...o.physics.items.map(i=>i.mesh)]);fo(o.scene,n,!0)}class jx extends Kl{constructor(){super();const t=new fi;t.deleteAttribute("uv");const e=new Ae({side:Ye}),n=new Ae,i=new Vu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Qt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new Fs(t,n,6),a=new Pe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),r.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),r.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),r.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),r.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),r.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),r.setMatrixAt(5,a.matrix),this.add(r);const l=new Qt(t,xs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Qt(t,xs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Qt(t,xs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new Qt(t,xs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new Qt(t,xs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new Qt(t,xs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function xs(o){return new Mp({color:0,emissive:16777215,emissiveIntensity:o})}const Ia=new Map,hi=new Map;function Zt(o,t=0,e=.7){const n=[o,t,e].join();return Ia.has(n)||Ia.set(n,new Ae({color:o,metalness:t,roughness:e})),Ia.get(n)}function Q(o,t,e,n,i,s,r,a=16777215,l){const c=`b${t},${e},${n}`;hi.has(c)||hi.set(c,new fi(t,e,n));const h=new Qt(hi.get(c),l||Zt(a));return h.position.set(i,s,r),h.receiveShadow=!0,o.add(h),h}function he(o,t,e,n,i,s,r,a=16777215,l=16,c){const h=`c${t},${e},${n},${l}`;hi.has(h)||hi.set(h,new _n(t,e,n,l));const f=new Qt(hi.get(h),c||Zt(a));return f.position.set(i,s,r),o.add(f),f}function Tn(o,t,e,n,i,s=16777215,r){const a=`s${t}`;hi.has(a)||hi.set(a,new gn(t,32,20));const l=new Qt(hi.get(a),r||Zt(s));return l.position.set(e,n,i),o.add(l),l}function On(o,t,e,n,i,s,r){const a=new Qt(new Xn(t,e,8,40),Zt(r,.3,.35));return a.position.set(n,i,s),o.add(a),a}function Me(o,t,e,n,i,s="#ffffff",r=22){const a=document.createElement("canvas");a.width=512,a.height=128;const l=a.getContext("2d");l.fillStyle="#102a3a",l.beginPath(),l.roundRect(0,0,512,128,22),l.fill(),l.fillStyle=s,l.font="bold 48px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(t,256,65,480);const c=new $i(a);c.colorSpace=Ve;const h=new Ru(new $l({map:c,depthWrite:!1}));return h.position.set(e,n,i),h.scale.set(r,r/4,1),o.add(h),h}function we(o,t,e,n,i){const s=new P().subVectors(e,t),r=he(o,n,n,s.length(),0,0,0,i,8);return r.position.copy(t).add(e).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new P(0,1,0),s.normalize()),r}const Ku=Zt(4279893,0,.96),$u=Zt(6449251,0,.98),Cr=Zt(14474964,0,.9);function qi(o,t,e,n,i=0,s=0,r=null){const a=[],l=[],c=[];let h=0;for(let d=0;d<t.length;d++){const m=t[d],v=t[Math.max(0,d-1)],g=t[Math.min(t.length-1,d+1)],p=g.x-v.x,x=g.z-v.z,y=Math.hypot(p,x)||1;d&&(h+=m.distanceTo(t[d-1]));for(const _ of[-1,1]){const w=i+_*e/2;a.push(m.x+x/y*w,m.y+s,m.z-p/y*w),l.push(_>0?1:0,h/8)}if(d&&(!r||r(t[d-1].clone().lerp(m,.5).add(new P(x/y*i,0,-p/y*i))))){const _=d*2;c.push(_-2,_,_-1,_-1,_,_+1)}}const f=new _e;f.setAttribute("position",new Bt(a,3)),f.setAttribute("uv",new Bt(l,2)),f.setIndex(c),f.computeVertexNormals();const u=new Qt(f,n);return u.receiveShadow=!0,o.add(u),u}function Dh(o,t,e,n,i=!1){let s=t.map(l=>new P(l[0],n,l[1]));i&&s[0].distanceTo(s.at(-1))>.01&&s.push(s[0].clone());const r=qi(o.scene,s,e,Ku);o.roadEdges??=[];for(const l of[-1,1])o.roadEdges.push({pts:s,width:1.4,material:$u,offset:l*(e/2+.7),lift:-.018,owner:r}),o.roadEdges.push({pts:s,width:.18,material:Cr,offset:l*(e/2-.75),lift:.014,owner:r});let a=0;for(let l=1;l<s.length;l++){const c=s[l-1],h=s[l],f=c.distanceTo(h);o.roadSegments.push({a:c,b:h,width:e,owner:r});for(let u=(12-a%12)%12;u<f;u+=12){const d=c.clone().lerp(h,u/f),m=c.clone().lerp(h,Math.min(f,u+4.7)/f);if(d.distanceTo(m)>.3){const v=qi(o.scene,[d,m],.22,Cr,0,.022);o.roadMarks.push({mesh:v,center:d.clone().add(m).multiplyScalar(.5),dir:h.clone().sub(c).normalize(),width:e})}}a+=f}return r}function Yx(o,t,e,n){const i=[new P(...t),new P(...e)];for(const r of i)r.y+=.36;qi(o.scene,i,n,Ku);for(const r of[-1,1])qi(o.scene,i,.2,Cr,r*(n/2-.65),.015),qi(o.scene,i,.55,$u,r*(n/2-.1),.006);const s=i[0].distanceTo(i[1]);for(let r=0;r<s;r+=12)qi(o.scene,[i[0].clone().lerp(i[1],r/s),i[0].clone().lerp(i[1],Math.min(1,(r+4)/s))],.22,Cr,0,.02)}function Zx(o){for(const t of o.roadEdges||[]){const e=[t.pts[0]];for(let n=1;n<t.pts.length;n++){const i=t.pts[n-1],s=t.pts[n],r=Math.ceil(i.distanceTo(s)/3);for(let a=1;a<=r;a++)e.push(i.clone().lerp(s,a/r))}qi(o.scene,e,t.width,t.material,t.offset,t.lift,n=>!o.roadSegments.some(i=>{if(i.owner===t.owner||Math.abs(n.y-i.a.y)>.3)return!1;const s=i.b.x-i.a.x,r=i.b.z-i.a.z,a=s*s+r*r,l=((n.x-i.a.x)*s+(n.z-i.a.z)*r)/a;return l<0||l>1?!1:Math.hypot(n.x-i.a.x-l*s,n.z-i.a.z-l*r)<i.width/2+.1}))}for(const t of o.roadMarks)for(const e of o.roadSegments){if(Math.abs(e.a.y-t.center.y)>.3)continue;const n=e.b.clone().sub(e.a),i=n.length();if(n.normalize(),Math.abs(n.dot(t.dir))>.93)continue;const s=t.center.clone().sub(e.a),r=s.dot(n);if(!(r<0||r>i)&&s.addScaledVector(n,-r).length()<e.width/2+1){t.mesh.removeFromParent(),t.mesh.geometry.dispose();break}}}function Kx(o,t,e,n,i,s){const r=Zt(7766666,.2,.67),a=new ci({color:3427931,metalness:.45,roughness:.16,clearcoat:1,envMapIntensity:1.1}),l=Zt(13159363,.1,.7);for(let c=0;c<Math.floor((s-3)/4.6);c++){const h=5.5+c*4.6;for(const f of[-1,1]){Q(o,n+.2,.18,.3,t,h+1.5,e+f*i*.5,0,l);for(let u=0;u<Math.floor((n-2)/4.5);u++){const d=t-n/2+3+u*4.5;Q(o,2.6,2.3,.13,d,h,e+f*(i*.5+.02),0,r),Q(o,2.3,2,.14,d,h,e+f*(i*.5+.1),0,a),Q(o,.06,2,.15,d,h,e+f*(i*.5+.13),0,l)}}for(const f of[-1,1]){Q(o,.3,.18,i,t+f*n*.5,h+1.5,e,0,l);for(let u=0;u<Math.floor((i-2)/4.5);u++){const d=e-i/2+3+u*4.5;Q(o,.13,2.3,2.6,t+f*(n*.5+.02),h,d,0,r),Q(o,.14,2,2.3,t+f*(n*.5+.1),h,d,0,a)}}}for(const c of[-1,1])Q(o,n+1,.5,.7,t,s+2.8,e+c*i*.5,0,l),Q(o,.7,.5,i+1,t+c*n*.5,s+2.8,e,0,l);Q(o,n*.26,1.2,i*.24,t-n*.18,s+3,e+i*.1,0,r);for(let c=0;c<2;c++)he(o,1.2,1.2,.15,t-n*.18-1.5+c*3,s+3.67,e+i*.1,4345428,24);Q(o,n*.36,.4,2.5,t,5.8,e-i*.5-1,0,l);for(const c of[-1,1])Q(o,1.4,3,.15,t+c*.76,3.65,e-i*.5-.12,0,a)}const $x={switchDistance:22},qn=[{name:"中央タウン",icon:"🏙",x:0,z:0,color:"#48c5ff"},{name:"そらのみなと",icon:"✈",x:-650,z:-600,color:"#ffd657"},{name:"ふじのやま",icon:"🗻",x:600,z:-650,color:"#63dd99"},{name:"こうじげんば",icon:"🚧",x:650,z:0,color:"#ffb64b"},{name:"レースパーク",icon:"🏁",x:600,z:600,color:"#ff6775"},{name:"わくわくひろば",icon:"🎡",x:0,z:730,color:"#c893ff"},{name:"さくらのさと",icon:"⛩",x:-550,z:570,color:"#ff98c2"},{name:"うみのみなと",icon:"⚓",x:-750,z:50,color:"#58e1df"},{name:"どうぶつぼくじょう",icon:"🐑",x:-100,z:-700,color:"#abda79"}];let Jx=class{constructor(t){this.game=t,this.scene=t.scene,this.physics=t.physics,this.solids=[],this.roadSegments=[],this.roadMarks=[],this.signals=[],this.animals=[],this.doors=[],this.moving=[],this.helipads=[],this.build()}solid(t,e,n,i,s,r,a,l=0){const c=Q(this.scene,i,s,r,t,e,n,a);c.rotation.y=l,c.castShadow=s>2&&i<100&&r<100;const h=this.physics.box(t,e,n,i,s,r,0,null,l);return(s<=1.1&&i>=10&&r>=10||i>150&&r>80&&e<0)&&(h.collisionFilterGroup=4,h.drivable=!0),this.solids.push(c),{mesh:c,body:h}}road(t,e,n=22,i=2.08,s=!1){const r=Dh(this,[t,e],n,i);if(s){const a=e[0]-t[0],l=e[1]-t[1],c=this.physics.box((t[0]+e[0])/2,i-.2,(t[1]+e[1])/2,n,.4,Math.hypot(a,l)+.3,0,null,Math.atan2(a,l));c.collisionFilterGroup=4,c.drivable=!0}return r}route(t,e=22,n=2.08,i=!1,s=!1){const r=Dh(this,t,e,n,i);if(s){const a=i?[...t,t[0]]:t;for(let l=1;l<a.length;l++){const c=a[l-1],h=a[l],f=h[0]-c[0],u=h[1]-c[1],d=this.physics.box((c[0]+h[0])/2,n-.2,(c[1]+h[1])/2,e,.4,Math.hypot(f,u)+.3,0,null,Math.atan2(f,u));d.collisionFilterGroup=4,d.drivable=!0}}return r}finishRoads(){Zx(this)}ramp(t,e,n=18,i=5662314){const s=new P(...e).sub(new P(...t)),r=s.length(),a=Q(this.scene,n,.7,r,(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,i);a.rotation.set(-Math.atan2(s.y,Math.hypot(s.x,s.z)),Math.atan2(s.x,s.z),0,"YXZ");const l=this.physics.box(a.position.x,a.position.y,a.position.z,n,.7,r+.4);return l.quaternion.copy(a.quaternion),l.updateAABB(),this.physics.world.broadphase.dirty=!0,l.collisionFilterGroup=4,l.drivable=!0,Yx(this,t,e,n),a.visible=!1,this.solids.push(a),{mesh:a,body:l}}building(t,e,n,i,s,r,a){this.solid(t,2+s/2,e,n,s,i,r),Q(this.scene,n+1,.6,i+1,t,s+2.2,e,14542047),Kx(this.scene,t,e,n,i,s),a&&Me(this.scene,a,t,s+6,e,"#fff",Math.max(22,n))}portal(t,e,n=22,i=15,s=8226184,r=2){this.solid(t-n/2-2,r+i/2,e,4,i,7,s),this.solid(t+n/2+2,r+i/2,e,4,i,7,s),this.solid(t,r+i,e,n+8,4,7,s)}helipad(t,e,n){he(this.scene,11,11,.2,t,e,n,4609626,40),Me(this.scene,"H",t,e+.6,n,"#fff",12);const i=On(this.scene,10,.2,t,e+.2,n,13886042);i.rotation.x=Math.PI/2,this.helipads.push(i)}build(){const t=this.scene;this.solid(90,-1.5,-374,1820,7,1252,8233062),this.solid(-910,-1.5,-557.5,180,7,885,8233062),this.solid(-910,-1.5,248,180,7,6,8233062),this.solid(0,-1.5,675,2e3,7,650,8431206),this.solid(0,-7,300,2e3,2,98,4747103),this.solid(-910,-7,70,180,2,360,4815474),Q(t,180,.22,360,-910,0,65,3776179,Zt(3252152,.35,.25)),this.water=Q(t,2e3,.15,98,0,0,300,3845571,new ci({color:2727609,metalness:.3,roughness:.22,transparent:!0,opacity:.84})),this.solid(260,.3,300,70,1,100,7966315),this.route([[-850,-820],[850,-820],[850,850],[-850,850]],26,2.1,!0,!0),this.route([[-225,-225],[225,-225],[225,225],[-225,225]],24,2.1,!0);for(const a of qn.slice(1)){this.road([0,0],[a.x,a.z],24,2.1,!0),Me(t,a.icon+" "+a.name,a.x,32,a.z,a.color,62);const l=[];for(let c=0;c<17;c++){const h=c/16*Math.PI*2;l.push([a.x+Math.cos(h)*88,a.z+Math.sin(h)*88])}this.route(l,18,2.12)}for(const a of[-120,0,120])this.road([a,-210],[a,220],a===0?30:18);for(const a of[-120,0,120])this.road([-210,a],[210,a],a===0?30:18);Q(t,68,.12,80,0,2.18,35,5858666);for(let a=-2;a<=2;a++)Q(t,.2,.02,18,a*11,2.26,25,13620683),Q(t,10,.02,.2,a*11+5,2.26,34,13620683);for(const a of[-120,0,120])for(const l of[-120,0,120]){he(t,.25,.25,8,a+17,6,l+17,5857895);const c=Tn(t,.8,a+17,10,l+17,4255338);this.signals.push(c);for(let h=0;h<6;h++)Q(t,2,.04,7,a-8+h*3,2.24,l+20,15790302)}this.building(70,-76,32,26,17,14870493,"びょういん"),this.building(109,-78,27,25,13,12412754,"しょうぼうしょ"),this.building(-70,-105,28,22,13,13031647,"けいさつ"),this.building(75,80,36,28,25,7839151,"まちのタワー"),this.building(-80,80,35,32,38,9415333),this.building(165,-165,36,38,60,8560302),this.building(-155,-166,36,38,45,11387331),this.portal(70,-94,16,9,14477532);const e=Q(t,14,7,.5,70,5.5,-94,10472410);this.doors.push({mesh:e,x:70,z:-94,base:5.5,id:"ambulance"}),this.portal(-68,65,24,14,6274505),Me(t,"あらう & なおす",-68,22,65,"#fff",34),this.wash={x:-68,z:65},this.repair={x:-68,z:100},Me(t,"🔧 ピット",-68,8,100,"#ffe278",24);for(const a of[-85,-52])this.solid(a,7,60,2,10,24,6007483);this.brushes=[];for(const a of[-78,-58])this.brushes.push(he(t,3,3,8,a,7,64,5748426,16));this.portal(155,65,30,10,14930090),Me(t,"エネルギー",155,16,65,"#ffe69c",30);for(const a of[143,166])Q(t,2,4,2,a,4,66,15920610);he(t,25,25,.2,70,2.2,155,9681026,40),he(t,9,9,.7,70,2.7,155,12834001,32),this.fountain=he(t,1.4,2,12,70,9,155,8969969),On(t,25,.4,70,10,175,15255426),this.parking(),this.mountain(),this.airport(),this.harbour(),this.heritage(),this.farm(),this.race(),this.bridges(),this.portal(0,-180,25,15),this.portal(0,-210,25,15),this.ramp([-120,2,170],[-120,17,100],22),this.ramp([-120,17,100],[-120,17,-40],22),this.ramp([-120,17,-40],[-120,2,-110],22);for(const a of qn)this.helipad(a.x+45,2.3,a.z+45);this.helipad(70,19.5,-76),this.helipad(165,62.6,-165);const n=new Fs(new Fr(5.4,2).scale(1,1.35,1),Zt(4683610),400),i=new Fs(new _n(.6,.8,6,6),Zt(7824465),400),s=new Pe;let r=0;for(let a=0;a<1100&&r<400;a++){const l=Math.sin(a*63.21)*940,c=Math.sin(a*127.7+1)*940;this.isWater(l,c)||Math.hypot(l,c)<280||qn.some(h=>Math.hypot(h.x-l,h.z-c)<125)||Math.abs(l-c)<35||Math.abs(l+c)<35||Math.abs(l)<30||Math.abs(c)<30||(s.position.set(l,11,c),s.updateMatrix(),n.setMatrixAt(r,s.matrix),s.position.y=5,s.updateMatrix(),i.setMatrixAt(r,s.matrix),r++)}n.count=i.count=r,n.castShadow=!0,i.castShadow=!0,t.add(n,i),this.vegetation=[n,i];for(let a=0;a<18;a++){const l=new qt;for(let c=0;c<3;c++)Tn(l,14+c*3,c*17,0,0,16777215).scale.set(2,.5,1);l.position.set(Math.sin(a*4)*1e3,240+a%3*40,Math.cos(a*4)*1e3),t.add(l)}}parking(){const t=this.scene;for(let n=1;n<=3;n++){this.solid(-185,2+n*11,45,55,.8,65,10594988);for(const i of[-208,-162])for(const s of[18,72])this.solid(i,2+n*5.5,s,1.2,n*11,1.2,7833484);this.ramp([-136,2+n*11,45],[-164,2+n*11,45],13)}const e=[];for(let n=0;n<=96;n++){const i=n/96*Math.PI*6;e.push([-185+Math.cos(i)*49,2+n/96*33,45+Math.sin(i)*49])}for(let n=1;n<e.length;n++)this.ramp(e[n-1],e[n],13);this.ramp([-185,35,13],[-185,44,-10],16,14520924),Me(t,"P ぐるぐるパーキング",-185,45,45,"#fff",45),this.elevator(-153,84,2,36)}elevator(t,e,n,i){const s=this.solid(t,n,e,16,.6,16,14201927);s.body.type=4,this.moving.push({...s,x:t,z:e,low:n,high:i,t:0,mode:"elevator"}),Me(this.scene,"↕",t,n+4,e,"#fff",10)}mountain(){const t=this.scene,e=he(t,35,230,205,600,102,-650,8426893,48);e.geometry=new _n(35,230,205,48,20);const n=e.geometry.index,i=e.geometry.attributes.position,s=[];for(let l=0;l<n.count;l+=3){const c=[n.getX(l),n.getX(l+1),n.getX(l+2)],h=c.reduce((d,m)=>d+i.getX(m),0)/3,f=c.reduce((d,m)=>d+i.getY(m),0)/3,u=c.reduce((d,m)=>d+i.getZ(m),0)/3;Math.abs(h)<65&&f<-65&&u>130||s.push(...c)}e.geometry=e.geometry.clone(),e.geometry.setIndex(s),he(t,34,96,62,600,174,-650,15791599,48);const r=[];for(let l=0;l<=150;l++){const c=l/150,h=c*Math.PI*5,f=243-c*193;r.push([600+Math.cos(h)*f,2+c*204,-650+Math.sin(h)*f])}for(let l=1;l<r.length;l++)this.ramp(r[l-1],r[l],22,l>104?13295585:7042932);this.road([600,-410],[843,-410],24,2.1,!0),this.road([843,-410],[843,-650],24,2.1,!0),this.ramp([550,206,-650],[585,206,-650],22,15397096),this.solid(600,206,-650,88,1,88,15397096),this.ramp([600,206,-610],[590,225,-568],25,11916507),this.helipad(625,207,-655),this.solid(600,23,-486,75,1,78,7900043),this.portal(600,-448,50,22,5468021);const a=Q(t,47,17,1,600,11,-448,4885663);this.doors.push({mesh:a,x:600,z:-448,base:11,id:null}),Me(t,"ひみつきち",600,31,-470,"#b6ffff",42),this.elevator(628,-490,2,206),this.waterfall=Q(t,13,40,1,640,23,-450,8903656,new Ae({color:9230822,transparent:!0,opacity:.58}));for(let l=0;l<8;l++)Tn(t,1.3,580+l*6,4,-467,8454109);this.helipad(575,2.4,-485)}airport(){const t=this.scene;this.road([-665,-800],[-665,-410],38);for(let e=0;e<16;e++)Q(t,1,.12,3,-685,2.3,-790+e*24,8974079),Q(t,1,.12,3,-645,2.3,-790+e*24,8974079);this.building(-747,-595,45,55,28,11846857,"そらのみなと"),this.building(-746,-680,17,17,57,12833748,"TOWER"),Q(t,26,7,26,-746,59,-680,4680828),this.portal(-605,-640,32,16,10271684),this.helipad(-600,2.3,-570)}harbour(){const t=this.scene;Q(t,150,.3,150,-750,2.2,60,10790813);for(let e=0;e<10;e++){const n=-797+e%4*18,i=5+Math.floor(e/4)*17;Q(t,15,7,12,n,5.7,i,[10771522,3702412,12821073][e%3]);for(let s=0;s<7;s++)Q(t,.1,6.5,12.1,n-6+s*2,5.7,i,7108470)}this.building(-755,122,65,30,20,10002846,"うみのみなと"),this.solid(-842,2.5,65,44,1,14,9211519);for(const e of[-820,-780])this.solid(e,24,-18,2,44,2,14463819);we(t,new P(-820,46,-18),new P(-775,46,-18),1,14463819),we(t,new P(-810,45,-18),new P(-810,12,-18),.15,4607567)}heritage(){const t=this.scene;for(let e=0;e<5;e++){Q(t,25-e*3,7,25-e*3,-550,6+e*9,570,9784894);const n=he(t,0,23-e*2.7,6,-550,12+e*9,570,4345424,4);n.rotation.y=Math.PI/4}for(const e of[-582,-548])he(t,1.4,1.6,22,e,13,510,12866365);Q(t,48,2.5,4,-565,23,510,12406584),Q(t,43,1.7,3,-565,19,510,13065282),he(t,30,30,.2,-610,2.2,595,7122865,40),this.ramp([-635,2.5,595],[-610,7,595],12),this.ramp([-610,7,595],[-585,2.5,595],12);for(let e=0;e<8;e++)this.building(-650+e*20,655,15,18,9,11770747),he(t,.4,.6,18,-590+e*5,11,550,7638101,6);this.portal(-530,620,22,14,9917504)}farm(){const t=this.scene;this.building(-110,-760,45,30,18,10839625,"ぼくじょう");const e=he(t,0,30,13,-110,26,-760,6904914,4);e.rotation.y=Math.PI/4;for(let i=0;i<14;i++)for(const s of[-625,-795])Q(t,1,4,1,-200+i*15,4,s,14538168),Q(t,15,.6,.6,-193+i*15,5,s,14538168);this.windmill=new qt,this.windmill.position.set(-40,25,-755),t.add(this.windmill),he(t,2,5,25,-40,14,-755,13158836);for(let i=0;i<4;i++){const s=Q(this.windmill,2,15,.4,Math.sin(i*Math.PI/2)*8,Math.cos(i*Math.PI/2)*8,0,14342601);s.rotation.z=-i*Math.PI/2}const n=[15328725,9134925,15986401,11834740,7437698,14608093,9793353];for(let i=0;i<21;i++){const s=new qt,r=i%7,a=r===5?.5:r===4?.65:1.1;if(Tn(s,a,0,1.7,0,n[r]).scale.set(1,1,1.7),Tn(s,a*.65,0,2.1,-a*1.5,n[r]),r===5)Q(s,4,.15,.6,0,1.5,0,13753558);else for(const c of[-.6,.6])for(const h of[-.8,.8])Q(s,.22,1.4,.22,c,.7,h,n[r]);s.position.set(-180+i%7*20,2,-690-Math.floor(i/7)*25),t.add(s),this.animals.push({mesh:s,home:s.position.clone(),phase:i,kind:r})}}race(){const t=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;t.push([600+Math.cos(n)*165,600+Math.sin(n)*135])}this.route(t,28,2.2),this.road([450,470],[750,470],28),this.portal(600,465,32,16,4479848),Me(this.scene,"RACE PARK",600,22,465,"#ffde70",52),this.ramp([740,2,530],[750,12,575],28),this.ramp([750,12,575],[755,2,630],28);for(let e=0;e<12;e++)Q(this.scene,3,.05,4,585+e%6*6,2.32,468+Math.floor(e/6)*4,e%2?16777215:1979199)}bridges(){for(const t of[-600,0,520]){this.ramp([t,2,219],[t,2.65,239],28),this.ramp([t,2.65,364],[t,2,384],28),this.road([t,238],[t,365],28,3,!0);for(const e of[-1,1])if(we(this.scene,new P(t+e*15,5,240),new P(t+e*15,5,360),.4,12043457),t===0||t===520){for(const n of[250,350])this.solid(t+e*16,18,n,2,32,2,13147243);we(this.scene,new P(t+e*16,34,250),new P(t+e*16,7,300),.2,12237744),we(this.scene,new P(t+e*16,34,350),new P(t+e*16,7,300),.2,12237744)}}this.drawbridge=this.solid(-775,3,300,24,1,100,9280662),this.drawbridge.body.type=4,this.ramp([-775,2,230],[-775,3.15,250],24),this.ramp([-775,3.15,350],[-775,2,370],24)}isWater(t,e){return Math.abs(e-300)<49&&!(t>225&&t<295)||t<-825&&e>-115&&e<245}update(t,e){const n=this.game.active,i=n.body.position;for(let l=0;l<this.signals.length;l++)this.signals[l].material=Zt([4778090,16176451,15291203][Math.floor(e/5+l)%3]);this.fountain.scale.y=.7+Math.sin(e)*.3,this.windmill.rotation.z=e*.3;for(const l of this.brushes)l.rotation.y=e*4;for(const l of this.animals){const c=Math.hypot(l.mesh.position.x-i.x,l.mesh.position.z-i.z);c<18?(l.mesh.position.x+=(l.mesh.position.x-i.x)/Math.max(1,c)*t*9,l.mesh.position.z+=(l.mesh.position.z-i.z)/Math.max(1,c)*t*9):(l.mesh.position.x+=(l.home.x+Math.sin(e*.3+l.phase)*8-l.mesh.position.x)*t*.4,l.mesh.position.z+=(l.home.z+Math.cos(e*.2+l.phase)*8-l.mesh.position.z)*t*.4),l.mesh.position.y=2+(l.kind===5?5+Math.sin(e+l.phase)*2:Math.abs(Math.sin(e*3+l.phase))*.12)}for(const l of this.doors){const c=Math.hypot(i.x-l.x,i.z-l.z)<35&&(!l.id||n.config.id===l.id);l.mesh.position.y=xn.lerp(l.mesh.position.y,l.base+(c?18:0),t*3)}for(const l of this.moving){const c=Math.abs(i.x-l.x)<10&&Math.abs(i.z-l.z)<10;c?l.t+=t:l.t=Math.max(0,l.t-t);const h=l.low+(l.high-l.low)*Math.min(1,l.t/8);l.body.velocity.y=(h-l.body.position.y)/Math.max(t,.001),l.body.position.y=h,l.mesh.position.y=h,c&&Math.abs(i.y-(h+n.ride))<4&&(i.y=h+n.ride+.4,n.body.velocity.y=l.body.velocity.y)}const r=n.config.kind==="water"&&Math.hypot(i.x+775,i.z-300)<90?1:0,a=xn.lerp(this.drawbridge.mesh.rotation.x,r,t*1.5);this.drawbridge.mesh.rotation.x=a,this.drawbridge.body.quaternion.setFromEuler(a,0,0),this.drawbridge.body.aabbNeedsUpdate=!0;for(const l of this.helipads)l.material=Zt(Math.hypot(i.x-l.position.x,i.z-l.position.z)<12?8322984:13886042,.3,.35)}};const to=new P;function pn(o,t,e,n,i,s){const r=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;to.copy(t),to[n]=0,to.normalize();const c=.5*r/(r+a),h=1-to.angleTo(o)/l;return Math.sign(to[e])===1?h*c:a/(r+a)+c+c*(1-h)}class Os extends fi{constructor(t=1,e=1,n=1,i=2,s=.1){const r=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new P,c=new P,h=new P(t,e,n).divideScalar(2).subScalar(s),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,v=new P,g=.5/r;for(let p=0,x=0;p<f.length;p+=3,x+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*s,f[p+1]=h.y*Math.sign(l.y)+c.y*s,f[p+2]=h.z*Math.sign(l.z)+c.z*s,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),d[x+0]=pn(v,c,"z","y",s,n),d[x+1]=1-pn(v,c,"y","z",s,e);break;case 1:v.set(-1,0,0),d[x+0]=1-pn(v,c,"z","y",s,n),d[x+1]=1-pn(v,c,"y","z",s,e);break;case 2:v.set(0,1,0),d[x+0]=1-pn(v,c,"x","z",s,t),d[x+1]=pn(v,c,"z","x",s,n);break;case 3:v.set(0,-1,0),d[x+0]=1-pn(v,c,"x","z",s,t),d[x+1]=1-pn(v,c,"z","x",s,n);break;case 4:v.set(0,0,1),d[x+0]=1-pn(v,c,"x","y",s,t),d[x+1]=1-pn(v,c,"y","x",s,e);break;case 5:v.set(0,0,-1),d[x+0]=pn(v,c,"x","y",s,t),d[x+1]=1-pn(v,c,"y","x",s,e);break}}static fromJSON(t){return new Os(t.width,t.height,t.depth,t.segments,t.radius)}}const Ti=Zt(10135212,.85,.3),zn=Zt(2108209,.5,.48),ri=new ci({color:1587010,roughness:.075,metalness:.2,clearcoat:1,side:We}),Ju=Zt(13752021,.5,.42),Qu=Zt(15133414,.38,.3),Ul=new Ae({color:16777215,emissive:13167359,emissiveIntensity:2});function oe(o,t,e,n,i,s,r,a,l=.1){const c=new Qt(new Os(t,e,n,3,Math.min(l,t/3,e/3,n/3)),a);return c.position.set(i,s,r),c.castShadow=!0,c.receiveShadow=!0,o.add(c),c}function wi(o,t,e,n,i,s,r,a="#eef7ef",l="#163d4a"){const c=document.createElement("canvas");c.width=1024,c.height=256;const h=c.getContext("2d");h.fillStyle=l,h.fillRect(0,0,1024,256),h.fillStyle=a,h.font='bold 68px "Yu Gothic",sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillText(t,512,125,990);const f=new $i(c);f.colorSpace=Ve,f.anisotropy=8;const u=new Ae({map:f,roughness:.6,side:We}),d=new Qt(new Dn(e,n),u);return d.position.set(i,s,r),r<0&&(d.rotation.y=Math.PI),o.add(d),d}function Fl(o,t=[]){const e=[];o.updateMatrixWorld(!0),o.traverse(n=>{n.isMesh&&!t.includes(n)&&e.push(n)});for(const n of e)n.parent!==o&&o.attach(n);fo(o,new Set(t))}function Qx(o,t,e,n){const i=new zf,s=new qt;i.add(s);const r=o?Qu:Zt(12371401,.78,.29),a=Zt(t,.45,.27),l=[],c=e===0||n;if(n&&(s.rotation.y=Math.PI),o&&c){oe(s,4.1,3.5,12.7,0,2.55,2.9,r,.5);const u=[[-15.2,.03,1.1,.03],[-14.5,.45,1.35,.25],[-13,1.1,1.7,.7],[-10.8,1.65,2.15,1.1],[-8.1,1.95,2.48,1.58],[-3.45,2.05,2.55,1.75]],d=[],m=[],v=[],g=48;for(let T=0;T<u.length;T++){const[D,M,S,E]=u[T];for(let L=0;L<=g;L++){const R=L/g*Math.PI*2;d.push(Math.cos(R)*M,S+Math.sin(R)*E,D),m.push(L/g,T/(u.length-1))}if(T)for(let L=0;L<g;L++){const R=(T-1)*(g+1)+L,U=T*(g+1)+L;v.push(R,R+1,U,U,R+1,U+1)}}const p=new _e;p.setAttribute("position",new Bt(d,3)),p.setAttribute("uv",new Bt(m,2)),p.setIndex(v),p.computeVertexNormals();const x=new Qt(p,r);x.castShadow=!0,s.add(x);const y=[],_=[],w=[];for(let T=0;T<=16;T++)for(let D=0;D<=16;D++){const M=-10+T/16*3;let S=u.at(-1);for(let L=1;L<u.length;L++)if(M<=u[L][0]){const R=u[L-1],U=u[L],z=(M-R[0])/(U[0]-R[0]);S=R.map((F,W)=>F+(U[W]-F)*z);break}const E=(D/16-.5)*1.5;if(y.push(E*S[1],S[2]+Math.sqrt(1-E*E)*S[3]+.035,M),_.push(D/16,T/16),T&&D){const L=T*17+D,R=L-17;w.push(R-1,L-1,R,R,L-1,L)}}const b=new _e;b.setAttribute("position",new Bt(y,3)),b.setAttribute("uv",new Bt(_,2)),b.setIndex(w),b.computeVertexNormals(),s.add(new Qt(b,ri));for(const T of[-1,1])oe(s,.6,.1,.18,T*1.07,1.77,-12.7,Ul,.04)}else if(oe(s,4.1,3.5,19,0,2.55,0,r,.45),c){oe(s,3.65,2.05,.13,0,2.96,-9.5,zn,.2),oe(s,3.2,1.2,.08,0,3.07,-9.59,ri,.12),wi(s,e===0?"各駅停車　中央":"のりものライン",2.4,.32,0,4,-9.64,"#f6df6d","#102523");for(const u of[-1,1])oe(s,.45,.16,.14,u*1.4,1.47,-9.62,n?Zt(13182761):Ul,.04),we(s,new P(u*.2,2.55,-9.68),new P(u*1.2,3,-9.68),.023,1515302);oe(s,3.5,.34,.28,0,.86,-9.53,zn,.1)}for(const u of[-1,1]){oe(s,.025,.25,o&&c?12.5:18.8,u*2.058,1.93,o&&c?2.9:0,a,.005);const d=o&&c?-2.4:-7.8,m=8;for(let v=d;v<=m;v+=1.5)!o&&Math.abs(v)<1.2||oe(s,.055,.91,1.02,u*2.057,3.02,v,ri,.16);for(const v of o?[6.9]:[-6.1,0,6.1])for(const g of[-1,1]){const p=new qt;p.position.set(u*2.08,0,v+g*.43),s.add(p),oe(p,.05,2.42,.81,0,2.35,0,r,.025),oe(p,.065,1.06,.56,0,2.97,0,ri,.06),oe(p,.07,.035,.15,0,1.88,-g*.22,zn,.009),l.push({group:p,base:v+g*.43,side:g})}}oe(s,3.5,.45,16,0,.74,0,zn,.13);for(const u of[-3,0,3])oe(s,2.6,.52,1.8,0,.53,u,Ti,.07);for(const u of[-6.6,6.6]){oe(s,3.35,.36,3.1,0,.63,u,zn,.09);for(const d of[-.95,.95]){we(s,new P(-1.55,.38,u+d),new P(1.55,.38,u+d),.14,5859696);for(const m of[-1,1]){const v=he(s,.53,.53,.28,m*1.47,.4,u+d,0,32,zn);v.rotation.z=Math.PI/2;const g=he(s,.36,.36,.035,m*1.63,.4,u+d,0,24,Ti);g.rotation.z=Math.PI/2}}for(const d of[-1,1])for(const m of[-.8,.8])for(let v=0;v<4;v++){const g=new Qt(new Xn(.14,.035,6,16),Ti);g.rotation.x=Math.PI/2,g.position.set(d*1.65,.76+v*.07,u+m),s.add(g)}}for(const u of[-4,4]){oe(s,2.35,.32,2.4,0,4.39,u,Ju,.14);for(let d=0;d<10;d++)Q(s,2.15,.022,.045,0,4.56,u-1+d*.21,0,zn)}if(e===1){for(const u of[-1,1])we(s,new P(u*.8,4.55,0),new P(0,5.55,0),.05,4937821),we(s,new P(0,5.55,0),new P(u*.8,6.4,0),.05,4937821);oe(s,2.2,.08,.32,0,6.43,0,zn,.025)}for(const u of[-9.6,9.6])c&&u<0||(oe(s,1.6,2.55,.2,0,2.35,u,zn,.13),oe(s,.3,.23,.9,0,.73,u,Ti,.03));const h=new Map;for(const u of l){u.instances=[],u.group.updateMatrix();for(const d of[...u.group.children]){d.updateMatrix();const m=d.material.uuid+JSON.stringify(d.geometry.parameters);h.has(m)||h.set(m,[]),h.get(m).push({d:u,part:d,local:d.matrix.clone()})}}for(const u of h.values()){const d=u[0].part,m=new Fs(d.geometry,d.material,u.length);m.castShadow=!0,m.receiveShadow=!0,m.boundingSphere=new Bs(new P(0,2,0),20),s.add(m),u.forEach(({d:v,part:g,local:p},x)=>{m.setMatrixAt(x,new se().multiplyMatrices(v.group.matrix,p)),v.instances.push({mesh:m,index:x,local:p,matrix:new se}),g.removeFromParent()}),m.instanceMatrix.needsUpdate=!0}for(const u of l)u.group.removeFromParent();Fl(s);const f=new qt;f.rotation.y=n?Math.PI:0,oe(f,4.1,3.5,19,0,2.55,0,r,.3);for(const u of[-1,1])Q(f,.03,.9,17,u*2.065,3,0,0,ri),Q(f,.03,.25,18.8,u*2.07,1.93,0,0,a);if(o&&c){const u=new Qt(new Ur(1.95,10,12),r);u.rotation.x=-Math.PI/2,u.position.set(0,2.1,-10),f.add(u)}return Fl(f),i.addLevel(s,0),i.addLevel(f,240),i.userData={doors:l,fast:o,carLength:19},i}function t_(o,t,e,n,i){const s=new qt;o.add(s);const r=t.fast?132:80,a=e*t.length-r+14,l=e*t.length+14;function c(x,y,_){const w=(x+t.length)%t.length,b=t.curve.getPointAt(w/t.length),T=t.curve.getTangentAt(w/t.length),D=new qt;return D.position.set(b.x+T.z*y,b.y+_,b.z-T.x*y),D.rotation.y=Math.atan2(T.x,T.z),s.add(D),D}function h(x,y,_,w){const b=[],T=[],D=[],M=Math.ceil(r/2);for(let L=0;L<=M;L++){const R=a+(l-a)*L/M,U=t.curve.getPointAt((R+t.length)%t.length/t.length),z=t.curve.getTangentAt((R+t.length)%t.length/t.length);for(const F of[-1,1]){const W=x+F*y/2;b.push(U.x+z.z*W,U.y+_,U.z-z.x*W),T.push(F>0?1:0,L)}if(L){const F=L*2;D.push(F-2,F,F-1,F-1,F,F+1)}}const S=new _e;S.setAttribute("position",new Bt(b,3)),S.setAttribute("uv",new Bt(T,2)),S.setIndex(D),S.computeVertexNormals();const E=new Qt(S,w);E.receiveShadow=!0,s.add(E)}for(const x of[-1,1]){h(x*7.2,8,1.3,Zt(12171692)),h(x*3.6,.48,1.315,Zt(15318851)),h(x*3.3,.15,1.32,Qu),h(x*7.3,9.1,6.8,new Ae({color:7835545,metalness:.4,roughness:.4,side:We}));for(let y=a+3;y<l;y+=7){const _=c(y,x*7.3,0);oe(_,.22,5.4,.22,x*2.5,4,0,Ti,.025),Q(_,8.9,.24,.24,0,6.6,0,0,Ti),we(_,new P(x*2.5,5.15,0),new P(-x*1.5,6.55,0),.065,9412002),oe(_,5.1,.06,.17,0,6.5,0,Ul,.01);for(let w=0;w<7;w++)Q(_,7.5,.015,.025,0,1.31,w-3,9607830)}for(let y=a+12;y<l-12;y+=24){const _=c(y,x*8.2,0);oe(_,1.5,.18,4,0,2.05,0,Zt(5470599),.1),oe(_,.2,.8,4,x*.7,2.4,0,Zt(5470599),.08);for(const w of[-1.5,1.5])Q(_,1,.75,.12,0,1.68,w,0,Ti);wi(_,n+"　→",5,.85,0,5,0)}}const f=(a+l)/2,u=c(f,18,0);oe(u,15,5.2,25,0,1.3+2.6,0,Zt(13226962),.25),oe(u,16,.3,27,0,6.65,0,Zt(6323337),.1);for(const x of[-1,1])for(const y of[-10,-6,6,10]){oe(u,.05,3,3.1,x*7.55,3.1,y,ri,.08);for(const _ of[1.6,4.6])Q(u,.08,.08,3.2,x*7.59,_,y,0,Ti)}oe(u,5.5,3.4,.08,0,3.05,-12.55,ri,.08),wi(u,n,11,1.5,0,5.4,-12.72,"#ffffff","#1b5265"),wi(u,"きっぷ ・ 改札　ENTRANCE",6,.65,0,4.45,-12.74);for(const x of[-3,0,3])oe(u,.7,1.3,2.2,x,1.95,-15,Zt(7906983,.5,.35),.13),oe(u,.8,.05,.48,x,2.63,-15.4,zn,.02),wi(u,"IC",.45,.2,x,2.55,-16.12,"#8dffe1");for(const x of[-5.4,5.4])oe(u,1.8,2.3,.85,x,2.45,-13.4,Zt(x<0?4162459:11483954),.12),wi(u,x<0?"きっぷ":"DRINK",1.55,.4,x,3.25,-13.85),oe(u,1.2,.9,.05,x,2.55,-13.85,ri,.04);const m=c(f,8,0);wi(m,i+1+"　"+(t.fast?"新幹線":"のりもの線")+"　まもなく到着",8,.9,0,5.5,2,"#b3f196","#102924");const v=c(f,28,0),g=t.fast?23.3:2.3,p=t.fast?40:5;for(let x=0;x<p;x++){const y=-t.curve.getPointAt(e).y+2+(x+1)*g/p;Q(v,5,g/p,.65,0,y-g/p/2,15-x*.65,12042432)}for(const x of[-1,1])we(v,new P(x*2.6,-t.curve.getPointAt(e).y+3.2,15),new P(x*2.6,2.8,15-p*.65),.055,9017758);return oe(v,3.8,t.fast?24:6,3.8,5,t.fast?-10:2,0,ri,.15),oe(v,4.2,.25,4.2,5,t.fast?2:5.2,0,Ju,.05),wi(v,"EV",1,.55,5,2,-1.94,"#ffffff","#225779"),s.name="station-"+n,s.updateMatrixWorld(!0),s.userData={name:n,platformLength:r,hasGates:!0,hasAccess:!0,photoPosition:u.localToWorld(new P(27,14,-35)),photoTarget:u.localToWorld(new P(0,2,-5))},Fl(s),s}class e_{constructor(t){this.game=t,this.trains=[],this.crossings=[],this.routes=[],this.stations=[],this.createRoute(!1),this.createRoute(!0);for(const e of this.stations){const n=new Pi().setFromObject(e);for(const i of t.world.vegetation||[]){const s=new se,r=new P;for(let a=0;a<i.count;a++)i.getMatrixAt(a,s),r.setFromMatrixPosition(s),r.x>n.min.x-3&&r.x<n.max.x+3&&r.z>n.min.z-3&&r.z<n.max.z+3&&(s.makeScale(0,0,0),i.setMatrixAt(a,s));i.instanceMatrix.needsUpdate=!0}}}createRoute(t){const e=this.game.scene,n=t?22:3,i=t?[[-210,n,-290],[-720,n,-620],[-130,n,-890],[530,n,-855],[810,n,-240],[810,n,590],[430,n,800],[-550,n,790],[-900,n,140],[-610,n,-240]]:[[-150,n,-260],[-620,n,-580],[-750,n,-720],[80,n,-820],[750,n,-430],[900,n,0],[730,n,660],[-500,n,710],[-800,n,200],[-650,n,-180]],s=new yo(i.map(u=>new P(...u)),!0,"catmullrom",.18),r=s.getLength(),a={curve:s,length:r,fast:t,stations:[],trains:[]};this.routes.push(a);for(let u=0;u<350;u++){const d=s.getPointAt(u/350),m=s.getPointAt((u+1)/350),v=d.clone().add(m).multiplyScalar(.5),g=m.clone().sub(d),p=Math.atan2(g.x,g.z),x=Q(e,t?9:8,.6,g.length()+.5,v.x,n-.7,v.z,t?11121583:8288620);x.rotation.y=p,t&&u%7===0&&this.game.world.solid(v.x,11,v.z,2.1,22,2.1,10267303);for(const y of[-1,1]){const _=Q(e,.18,.2,g.length()+.3,v.x+Math.cos(p)*y*1.47,n-.25,v.z-Math.sin(p)*y*1.47,12502724);_.rotation.y=p}if(!t&&u%2===0){const y=Q(e,3.8,.14,.7,v.x,n-.45,v.z,5132620);y.rotation.y=p}if(Math.abs(v.z-300)<55)for(const y of[-1,1]){const _=Q(e,.4,8,g.length(),v.x+Math.cos(p)*y*5,n+3,v.z-Math.sin(p)*y*5,t?13670752:8559771);_.rotation.y=p}}const l=[];for(let u=0;u<=600;u++){const d=s.getPointAt(u/600);d.y+=6.5,l.push(d)}const c=new Qt(new Or(new yo(l),600,.025,4,!1),Zt(4410708,.7,.5));e.add(c);for(let u=0;u<40;u++){const d=s.getPointAt(u/40),m=s.getTangentAt(u/40),v=d.x+m.z*5,g=d.z-m.x*5;we(e,new P(v,d.y-1,g),new P(v,d.y+7.8,g),.1,8229017),we(e,new P(v,d.y+7.5,g),new P(d.x,d.y+6.65,d.z),.06,8229017)}const h=t?["中央新幹線駅","ふじのやま駅","レースパーク駅","さくら新幹線駅"]:["中央駅","そらのみなと駅","ふじのふもと駅","レース駅","さくらのさと駅","みなと駅"];for(let u=0;u<h.length;u++){let d=u/h.length,m=-2;const v=t?132:80;for(const p of[.025,.045,.065,-.025,-.045,0]){const x=(u/h.length+p+1)%1,y=s.getTangentAt((x-v/r+1)%1),_=s.getTangentAt(x),w=s.getTangentAt((x-v/r/2+1)%1),b=Math.min(y.dot(_),y.dot(w),w.dot(_));b>m&&(m=b,d=x)}s.getPointAt(d);const g=s.getTangentAt(d);Math.atan2(g.x,g.z),a.stations.push(d*r),this.stations.push(t_(e,a,d,h[u],u))}const f=t?[3253386,13055305,4684467,2392774]:[4368014,12950872];for(let u=0;u<f.length;u++){const d={route:a,distance:u/f.length*r+60,speed:0,wait:0,meshes:[],color:f[u],fast:t};for(let m=0;m<(t?5:3);m++){const v=Qx(t,f[u],m,m===(t?4:2));e.add(v),d.meshes.push(v)}this.trains.push(d),a.trains.push(d)}if(!t)for(let u=0;u<6;u++){const d=(u+.35)/6,m=s.getPointAt(d);this.game.world.road([m.x-35,m.z],[m.x+35,m.z],20,3,!0);const v=new qt;v.position.set(m.x+7,4,m.z+9),e.add(v),Q(v,1,6,1,0,0,0,15251264);const g=new qt;g.position.y=2,v.add(g),Q(g,16,.5,.5,-8,0,0,15518019);for(let x=0;x<8;x++)Q(g,.6,.52,.52,-1-x*2,0,0,3159610);const p=Tn(v,.7,0,4,0,15153462);this.crossings.push({distance:d*r,route:a,arm:g,light:p,closed:!1,x:m.x,z:m.z})}if(t){this.game.world.road([835,-250],[835,550],28,2.12);for(let u=0;u<5;u++){const d=s.getPointAt(.08+u*.19);Q(e,28,.15,28,d.x+30,2.2,d.z,7702397),Me(e,"🚄 みえるよ",d.x+30,8,d.z,"#ffe59c",22)}for(let u=0;u<9;u++){const d=.31+u*.002,m=s.getPointAt(d),v=s.getTangentAt(d),g=Math.atan2(v.x,v.z);this.game.world.solid(m.x,m.y+10,m.z,17,3,18,8690325,g);for(const p of[-1,1])this.game.world.solid(m.x+Math.cos(g)*p*7.5,m.y+4,m.z-Math.sin(g)*p*7.5,2,10,18,8690325,g)}}}update(t){for(const e of this.trains){const n=e.route;let i=1/0;for(const a of n.stations)i=Math.min(i,(a-e.distance+n.length)%n.length);let s=1/0;for(const a of n.trains)a!==e&&(s=Math.min(s,(a.distance-e.distance+n.length)%n.length));let r=Math.min(n.fast?62:21,Math.sqrt(Math.max(0,i-2)*10));s<130&&(r=0),e.wait>0?(e.wait-=t,r=0,e.wait<=0&&(e.distance=(e.distance+5)%n.length)):i<3&&e.speed<4&&(e.wait=4,r=0),e.speed+=xn.clamp(r-e.speed,-12*t,8*t),e.distance=(e.distance+e.speed*t)%n.length;for(let a=0;a<e.meshes.length;a++){const l=(e.distance-a*(n.fast?21:20.5)+n.length)%n.length,c=l/n.length,h=n.curve.getPointAt(c),f=n.curve.getTangentAt(c);e.meshes[a].position.copy(h),e.meshes[a].rotation.y=Math.atan2(-f.x,-f.z);for(const u of e.meshes[a].userData.doors||[]){u.group.position.z=xn.lerp(u.group.position.z,u.base+(e.wait>0?u.side*.7:0),1-Math.exp(-t*5)),u.group.updateMatrix();for(const d of u.instances||[])d.matrix.multiplyMatrices(u.group.matrix,d.local),d.mesh.setMatrixAt(d.index,d.matrix),d.mesh.instanceMatrix.needsUpdate=!0}}if(!n.fast){const a=this.game.active.body.position;for(const l of e.meshes)l.position.distanceTo(new P(a.x,a.y,a.z))<8&&this.game.active.hitCooldown<=0&&(this.game.active.damage(20),this.game.active.hitCooldown=1,this.game.active.body.velocity.set(15,12,8),this.game.toast("ぽーん！ だいじょうぶ"))}}for(const e of this.crossings)e.closed=e.route.trains.some(n=>{const i=(e.distance-n.distance+e.route.length)%e.route.length;return i<140||i>e.route.length-60}),e.arm.rotation.z=xn.lerp(e.arm.rotation.z,e.closed?0:-Math.PI/2,t*2),e.light.material=Zt(e.closed&&Math.sin(this.game.time*9)>0?16721703:7814458),e.closed&&Math.hypot(this.game.active.body.position.x-e.x,this.game.active.body.position.z-e.z)<90&&Math.floor(this.game.time*2)!==e.beat&&(e.beat=Math.floor(this.game.time*2),this.game.audio.effect("crossing"))}}class Cn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new C);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new C);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Cn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],f=n[5],u=n[6],d=n[7],m=n[8],v=i[0],g=i[1],p=i[2],x=i[3],y=i[4],_=i[5],w=i[6],b=i[7],T=i[8];return s[0]=r*v+a*x+l*w,s[1]=r*g+a*y+l*b,s[2]=r*p+a*_+l*T,s[3]=c*v+h*x+f*w,s[4]=c*g+h*y+f*b,s[5]=c*p+h*_+f*T,s[6]=u*v+d*x+m*w,s[7]=u*g+d*y+m*b,s[8]=u*p+d*_+m*T,e}scale(t,e){e===void 0&&(e=new Cn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new C);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let l=3;const c=l;let h;const f=4;let u;do{if(r=c-l,s[r+i*r]===0){for(a=r+1;a<c;a++)if(s[r+i*a]!==0){h=f;do u=f-h,s[u+i*r]+=s[u+i*a];while(--h);break}}if(s[r+i*r]!==0)for(a=r+1;a<c;a++){const d=s[r+i*a]/s[r+i*r];h=f;do u=f-h,s[u+i*a]=u<=r?0:s[u+i*a]-s[u+i*r]*d;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Cn);const e=3,n=6,i=n_;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let f;do{if(s=l-a,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=h;do f=h-c,i[f+n*s]+=i[f+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const u=i[s+n*r]/i[s+n*s];c=h;do f=h-c,i[f+n*r]=f<=s?0:i[f+n*r]-i[f+n*s]*u;while(--c)}}while(--a);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do f=n-c,i[f+n*r]=i[f+n*r]-i[f+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do f=n-c,i[f+n*s]=i[f+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(f=i[e+r+n*s],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,f)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,a=n+n,l=i+i,c=e*r,h=e*a,f=e*l,u=n*a,d=n*l,m=i*l,v=s*r,g=s*a,p=s*l,x=this.elements;return x[0]=1-(u+m),x[1]=h-p,x[2]=f+g,x[3]=h+p,x[4]=1-(c+m),x[5]=d-v,x[6]=f-g,x[7]=d+v,x[8]=1-(c+u),this}transpose(t){t===void 0&&(t=new Cn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const n_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-r*s,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Cn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new C);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new C);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new C),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new C),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=i_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=s_;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Lh),Lh.almostEquals(t,e)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const i_=new C,s_=new C,Lh=new C;class hn{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Nh),c=Nh),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new hn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Uh,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],f=n[7];this.getCorners(i,s,r,a,l,c,h,f);for(let u=0;u!==8;u++){const d=n[u];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Uh,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],f=n[7];this.getCorners(i,s,r,a,l,c,h,f);for(let u=0;u!==8;u++){const d=n[u];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,f=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,d=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(f,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(f,u));return!(m<0||d>m)}}const Nh=new C,Uh=[new C,new C,new C,new C,new C,new C,new C,new C];class Fh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class td{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Le{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=o_,i=r_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Le);const n=this.x,i=this.y,s=this.z,r=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*a+i*c-s*l,e.y=i*h+r*l+s*a-n*c,e.z=s*h+r*c+n*l-i*a,e.w=r*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new Le);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new Le),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,f=c*i+l*n-r*s,u=c*s+r*i-a*n,d=-r*n-a*i-l*s;return e.x=h*c+d*-r+f*-l-u*-a,e.y=f*c+d*-a+u*-r-h*-l,e.z=u*c+d*-l+h*-a-f*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const f=r*r,u=a*a,d=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*d),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="YXZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="ZXY"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="ZYX"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="YZX"?(this.x=l*r*a+s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a-l*c*h):i==="XZY"&&(this.x=l*r*a-s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a+l*c*h),this}clone(){return new Le(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Le);const i=this.x,s=this.y,r=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,f=t.w,u,d,m,v,g;return d=i*l+s*c+r*h+a*f,d<0&&(d=-d,l=-l,c=-c,h=-h,f=-f),1-d>1e-6?(u=Math.acos(d),m=Math.sin(u),v=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(v=1-e,g=e),n.x=v*i+g*l,n.y=v*s+g*c,n.z=v*r+g*h,n.w=v*a+g*f,n}integrate(t,e,n,i){i===void 0&&(i=new Le);const s=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,f=this.w,u=e*.5;return i.x+=u*(s*f+r*h-a*c),i.y+=u*(r*f+a*l-s*h),i.z+=u*(a*f+s*c-r*l),i.w+=u*(-s*l-r*c-a*h),i}}const o_=new C,r_=new C,a_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Pt{constructor(t){t===void 0&&(t={}),this.id=Pt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Pt.idCounter=0;Pt.types=a_;class ce{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new Le,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ce.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ce.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),n.vsub(t,i),e.conjugate(zh),zh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new C),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new C),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const zh=new Le;class po extends Pt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:Pt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new C;for(let s=0;s!==t.length;s++){const r=t[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(i)||n[f].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new C;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];po.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new C,r=new C;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,a,l,c){const h=new C;let f=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const v=h.dot(r);v>u&&(u=v,f=m)}const d=[];for(let m=0;m<n.faces[f].length;m++){const v=n.vertices[n.faces[f][m]],g=new C;g.copy(v),s.vmult(g,g),i.vadd(g,g),d.push(g)}f>=0&&this.clipFaceAgainstHull(r,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,i,s,r,a,l){const c=new C,h=new C,f=new C,u=new C,d=new C,m=new C;let v=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const x=g.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,r.copy(c))}else{const p=a?a.length:g.faces.length;for(let x=0;x<p;x++){const y=a?a[x]:x;c.copy(g.faceNormals[y]),n.vmult(c,c);const _=g.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const x=g.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,r.copy(h))}else{const p=l?l.length:t.faces.length;for(let x=0;x<p;x++){const y=l?l[x]:x;h.copy(t.faceNormals[y]),s.vmult(h,h);const _=g.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],d),u.cross(d,m),!m.almostZero()){m.normalize();const y=g.testSepAxis(m,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,r.copy(m))}}return i.vsub(e,f),f.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const a=this;po.project(a,t,n,i,Da),po.project(e,t,s,r,La);const l=Da[0],c=Da[1],h=La[0],f=La[1];if(l<f||h<c)return!1;const u=l-f,d=h-c;return u<d?u:d}calculateLocalInertia(t,e){const n=new C,i=new C;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,a){const l=new C,c=new C,h=new C,f=new C,u=new C,d=new C,m=new C,v=new C,g=this,p=[],x=i,y=p;let _=-1,w=Number.MAX_VALUE;for(let S=0;S<g.faces.length;S++){l.copy(g.faceNormals[S]),n.vmult(l,l);const E=l.dot(t);E<w&&(w=E,_=S)}if(_<0)return;const b=g.faces[_];b.connectedFaces=[];for(let S=0;S<g.faces.length;S++)for(let E=0;E<g.faces[S].length;E++)b.indexOf(g.faces[S][E])!==-1&&S!==_&&b.connectedFaces.indexOf(S)===-1&&b.connectedFaces.push(S);const T=b.length;for(let S=0;S<T;S++){const E=g.vertices[b[S]],L=g.vertices[b[(S+1)%T]];E.vsub(L,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),f.copy(this.faceNormals[_]),n.vmult(f,f),e.vadd(f,f),h.cross(f,u),u.negate(u),d.copy(E),n.vmult(d,d),e.vadd(d,d);const R=b.connectedFaces[S];m.copy(this.faceNormals[R]);const U=this.getPlaneConstantOfFace(R);v.copy(m),n.vmult(v,v);const z=U-v.dot(e);for(this.clipFaceAgainstPlane(x,y,v,z);x.length;)x.shift();for(;y.length;)x.push(y.shift())}m.copy(this.faceNormals[_]);const D=this.getPlaneConstantOfFace(_);v.copy(m),n.vmult(v,v);const M=D-v.dot(e);for(let S=0;S<x.length;S++){let E=v.dot(x[S])+M;if(E<=s&&(console.log(`clamped: depth=${E} to minDist=${s}`),E=s),E<=r){const L=x[S];if(E<=1e-6){const R={point:L,normal:v,depth:E};a.push(R)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const f=new C;f.copy(c),e.push(f)}else{const f=new C;l.lerp(c,s/(s-r),f),e.push(f)}else if(r<0){const f=new C;l.lerp(c,s/(s-r),f),e.push(f),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new C);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,a,l,c,h,f,u=new C;for(let d=0;d<s.length;d++){u.copy(s[d]),e.vmult(u,u),t.vadd(u,u);const m=u;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(f===void 0||m.z>f)&&(f=m.z)}n.set(r,a,l),i.set(c,h,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new C;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=e[n[r][0]],c=new C;t.vsub(l,c);const h=a.dot(c),f=new C;s.vsub(l,f);const u=a.dot(f);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,a=l_;let l=0,c=0;const h=c_,f=t.vertices;h.setZero(),ce.vectorToLocalFrame(n,i,e,a),ce.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=f[0].dot(a);for(let d=1;d<r;d++){const m=f[d].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const d=c;c=l,l=d}s[0]=l,s[1]=c}}const Da=[],La=[];new C;const l_=new C,c_=new C;class Vr extends Pt{constructor(t){super({type:Pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=C,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new po({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new C),Vr.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)yi.set(s[r][0],s[r][1],s[r][2]),e.vmult(yi,yi),t.vadd(yi,yi),n(yi.x,yi.y,yi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Nn[0].set(s.x,s.y,s.z),Nn[1].set(-s.x,s.y,s.z),Nn[2].set(-s.x,-s.y,s.z),Nn[3].set(-s.x,-s.y,-s.z),Nn[4].set(s.x,-s.y,-s.z),Nn[5].set(s.x,s.y,-s.z),Nn[6].set(-s.x,s.y,-s.z),Nn[7].set(s.x,-s.y,s.z);const r=Nn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=Nn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,f=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),f>i.z&&(i.z=f),c<n.x&&(n.x=c),h<n.y&&(n.y=h),f<n.z&&(n.z=f)}}}const yi=new C,Nn=[new C,new C,new C,new C,new C,new C,new C,new C],cc={DYNAMIC:1,STATIC:2,KINEMATIC:4},hc={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ct extends td{constructor(t){t===void 0&&(t={}),super(),this.id=Ct.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ct.STATIC:Ct.DYNAMIC,typeof t.type==typeof Ct.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ct.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new Le,this.initQuaternion=new Le,this.previousQuaternion=new Le,this.interpolatedQuaternion=new Le,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Cn,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Cn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new hn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ct.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ct.SLEEPING&&this.dispatchEvent(Ct.wakeupEvent)}sleep(){this.sleepState=Ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Ct.AWAKE&&n<i?(this.sleepState=Ct.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ct.sleepyEvent)):e===Ct.SLEEPY&&n>i?this.wakeUp():e===Ct.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ct.SLEEPING||this.type===Ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new C),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new C),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new C,s=new Le;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const a=e[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=h_,r=u_,a=this.quaternion,l=this.aabb,c=d_;for(let h=0;h!==i;h++){const f=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],r),f.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=f_,i=p_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const n=m_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;const n=g_,i=v_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Ct.DYNAMIC&&(this.sleepState===Ct.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const n=e,i=x_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=__;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;const n=y_,i=M_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=w_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Vr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new C;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ct.DYNAMIC||this.type===Ct.KINEMATIC)||this.sleepState===Ct.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,f=this.invInertiaWorld,u=this.linearFactor,d=h*t;i.x+=a.x*d*u.x,i.y+=a.y*d*u.y,i.z+=a.z*d*u.z;const m=f.elements,v=this.angularFactor,g=l.x*v.x,p=l.y*v.y,x=l.z*v.z;s.x+=t*(m[0]*g+m[1]*p+m[2]*x),s.y+=t*(m[3]*g+m[4]*p+m[5]*x),s.z+=t*(m[6]*g+m[7]*p+m[8]*x),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ct.idCounter=0;Ct.COLLIDE_EVENT_NAME="collide";Ct.DYNAMIC=cc.DYNAMIC;Ct.STATIC=cc.STATIC;Ct.KINEMATIC=cc.KINEMATIC;Ct.AWAKE=hc.AWAKE;Ct.SLEEPY=hc.SLEEPY;Ct.SLEEPING=hc.SLEEPING;Ct.wakeupEvent={type:"wakeup"};Ct.sleepyEvent={type:"sleepy"};Ct.sleepEvent={type:"sleep"};const h_=new C,u_=new Le,d_=new hn,f_=new Cn,p_=new Cn;new Cn;const m_=new C,g_=new C,v_=new C,x_=new C,__=new C,y_=new C,M_=new C,w_=new C;class ed{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ct.STATIC)!==0||t.sleepState===Ct.SLEEPING)&&((e.type&Ct.STATIC)!==0||e.sleepState===Ct.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=S_;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=b_,i=E_,s=T_,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new C;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const S_=new C;new C;new Le;new C;const b_={keys:[]},E_=[],T_=[];new C;new C;new C;class A_ extends ed{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class ji{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let nd,id,sd,od,rd,ad,ld;const uc={CLOSEST:1,ANY:2,ALL:4};nd=Pt.types.SPHERE;id=Pt.types.PLANE;sd=Pt.types.BOX;od=Pt.types.CYLINDER;rd=Pt.types.CONVEXPOLYHEDRON;ad=Pt.types.HEIGHTFIELD;ld=Pt.types.TRIMESH;class De{get[nd](){return this._intersectSphere}get[id](){return this._intersectPlane}get[sd](){return this._intersectBox}get[od](){return this._intersectConvex}get[rd](){return this._intersectConvex}get[ad](){return this._intersectHeightfield}get[ld](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new C),e===void 0&&(e=new C),this.from=t.clone(),this.to=e.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=De.ANY,this.result=new ji,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||De.ANY,this.result=e.result||new ji,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Oh),Na.length=0,t.broadphase.aabbQuery(t,Oh,Na),this.intersectBodies(Na),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=C_,s=R_;for(let r=0,a=t.shapes.length;r<a;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(G_(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new C(0,0,1);e.vmult(c,c);const h=new C;r.vsub(n,h);const f=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(f*u>0||r.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const m=new C,v=new C,g=new C;r.vsub(n,m);const p=-c.dot(m)/d;l.scale(p,v),r.vadd(v,g),this.reportIntersection(c,g,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=P_;r.from.copy(this.from),r.to.copy(this.to),ce.pointToLocalFrame(n,e,r.from,r.from),ce.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=I_;let l,c,h,f;l=c=0,h=f=t.data.length-1;const u=new hn;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<h;d++)for(let m=c;m<f;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,m,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(d,m,!1),ce.pointToWorldFrame(n,e,t.pillarOffset,cr),this._intersectConvex(t.pillarConvex,e,cr,i,s,Bh),this.result.shouldStop)return;t.getConvexTrianglePillar(d,m,!0),ce.pointToWorldFrame(n,e,t.pillarOffset,cr),this._intersectConvex(t.pillarConvex,e,cr,i,s,Bh)}}}_intersectSphere(t,e,n,i,s){const r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),f=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*f,d=D_,m=L_;if(!(u<0))if(u===0)r.lerp(a,u,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(r.lerp(a,v,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const a=N_,l=kh,c=r&&r.faceList||null,h=t.faces,f=t.vertices,u=t.faceNormals,d=this.direction,m=this.from,v=this.to,g=m.distanceTo(v),p=c?c.length:h.length,x=this.result;for(let y=0;!x.shouldStop&&y<p;y++){const _=c?c[y]:y,w=h[_],b=u[_],T=e,D=n;l.copy(f[w[0]]),T.vmult(l,l),l.vadd(D,l),l.vsub(m,l),T.vmult(b,a);const M=d.dot(a);if(Math.abs(M)<this.precision)continue;const S=a.dot(l)/M;if(!(S<0)){d.scale(S,nn),nn.vadd(m,nn),Sn.copy(f[w[0]]),T.vmult(Sn,Sn),D.vadd(Sn,Sn);for(let E=1;!x.shouldStop&&E<w.length-1;E++){Un.copy(f[w[E]]),Fn.copy(f[w[E+1]]),T.vmult(Un,Un),T.vmult(Fn,Fn),D.vadd(Un,Un),D.vadd(Fn,Fn);const L=nn.distanceTo(m);!(De.pointInTriangle(nn,Sn,Un,Fn)||De.pointInTriangle(nn,Un,Sn,Fn))||L>g||this.reportIntersection(a,nn,s,i,_)}}}}_intersectTrimesh(t,e,n,i,s,r){const a=U_,l=V_,c=H_,h=kh,f=F_,u=z_,d=O_,m=k_,v=B_,g=t.indices;t.vertices;const p=this.from,x=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),ce.vectorToLocalFrame(n,e,y,f),ce.pointToLocalFrame(n,e,p,u),ce.pointToLocalFrame(n,e,x,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,d.vsub(u,f),f.normalize();const _=u.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let w=0,b=l.length;!this.result.shouldStop&&w!==b;w++){const T=l[w];t.getNormal(T,a),t.getVertex(g[T*3],Sn),Sn.vsub(u,h);const D=f.dot(a),M=a.dot(h)/D;if(M<0)continue;f.scale(M,nn),nn.vadd(u,nn),t.getVertex(g[T*3+1],Un),t.getVertex(g[T*3+2],Fn);const S=nn.distanceSquared(u);!(De.pointInTriangle(nn,Un,Sn,Fn)||De.pointInTriangle(nn,Sn,Un,Fn))||S>_||(ce.vectorToWorldFrame(e,a,v),ce.pointToWorldFrame(n,e,nn,m),this.reportIntersection(v,m,s,i,T))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case De.ALL:this.hasHit=!0,c.set(r,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case De.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l));break;case De.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Wi),n.vsub(e,eo),t.vsub(e,Ua);const s=Wi.dot(Wi),r=Wi.dot(eo),a=Wi.dot(Ua),l=eo.dot(eo),c=eo.dot(Ua);let h,f;return(h=l*a-r*c)>=0&&(f=s*c-r*a)>=0&&h+f<s*l-r*r}}De.CLOSEST=uc.CLOSEST;De.ANY=uc.ANY;De.ALL=uc.ALL;const Oh=new hn,Na=[],eo=new C,Ua=new C,C_=new C,R_=new Le,nn=new C,Sn=new C,Un=new C,Fn=new C;new C;new ji;const Bh={faceList:[0]},cr=new C,P_=new De,I_=[],D_=new C,L_=new C,N_=new C;new C;new C;const kh=new C,U_=new C,F_=new C,z_=new C,O_=new C,B_=new C,k_=new C;new hn;const V_=[],H_=new ce,Wi=new C,hr=new C;function G_(o,t,e){e.vsub(o,Wi);const n=Wi.dot(t);return t.scale(n,hr),hr.vadd(o,hr),e.distanceTo(hr)}class bs extends ed{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,a=e.boundingRadius,l=i+r;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!bs.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?bs.insertionSortX(t):e===1?bs.insertionSortY(t):e===2&&bs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const a=this.axisList,l=a.length,c=1/l;for(let d=0;d!==l;d++){const m=a[d],v=m.position.x;t+=v,e+=v*v;const g=m.position.y;n+=g,i+=g*g;const p=m.position.z;s+=p,r+=p*p}const h=e-t*t*c,f=i-n*n*c,u=r-s*s*c;h>f?h>u?this.axisIndex=0:this.axisIndex=2:f>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<r.length;a++){const l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class W_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Vh{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class To{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=To.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Vh,this.jacobianElementB=new Vh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Hh),a.scale(h,Gh),n.invInertiaWorldSolve.vmult(r,Wh),i.invInertiaWorldSolve.vmult(l,Xh),t.multiplyVectors(Hh,Wh)+e.multiplyVectors(Gh,Xh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(t.rotational,ur),c+=ur.dot(t.rotational),l.vmult(e.rotational,ur),c+=ur.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=X_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}To.idCounter=0;const Hh=new C,Gh=new C,Wh=new C,Xh=new C,ur=new C,X_=new C;class q_ extends To{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=j_,c=Y_,h=i.velocity,f=i.angularVelocity;i.force,i.torque;const u=s.velocity,d=s.angularVelocity;s.force,s.torque;const m=Z_,v=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(r,m);const x=p.dot(m),y=this.restitution+1,_=y*u.dot(p)-y*h.dot(p)+d.dot(c)-f.dot(l),w=this.computeGiMf();return-x*e-_*n-t*w}getImpactVelocityAlongNormal(){const t=K_,e=$_,n=J_,i=Q_,s=t1;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const j_=new C,Y_=new C,Z_=new C,K_=new C,$_=new C,J_=new C,Q_=new C,t1=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class qh extends To{constructor(t,e,n){super(t,e,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=e1,r=n1,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),f=this.computeGiMf();return-h*e-t*f}}const e1=new C,n1=new C;class Hr{constructor(t,e,n){n=W_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Hr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Hr.idCounter=0;class Gr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Gr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Gr.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new De;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class i1 extends Pt{constructor(t){if(super({type:Pt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new C);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new hn;new C;new hn;new C;new C;new C;new C;new C;new C;new C;new hn;new C;new ce;new hn;class s1{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class o1 extends s1{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,h=t;let f,u,d,m,v,g;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const p=a1,x=l1,y=r1;p.length=a,x.length=a,y.length=a;for(let _=0;_!==a;_++){const w=r[_];y[_]=0,x[_]=w.computeB(h),p[_]=1/w.computeC()}if(a!==0){for(let b=0;b!==c;b++){const T=l[b],D=T.vlambda,M=T.wlambda;D.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let b=0;b!==a;b++){const T=r[b];f=x[b],u=p[b],g=y[b],v=T.computeGWlambda(),d=u*(f-v-T.eps*g),g+d<T.minForce?d=T.minForce-g:g+d>T.maxForce&&(d=T.maxForce-g),y[b]+=d,m+=d>0?d:-d,T.addToWlambda(d)}if(m*m<s)break}for(let b=0;b!==c;b++){const T=l[b],D=T.velocity,M=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),D.vadd(T.vlambda,D),T.wlambda.vmul(T.angularFactor,T.wlambda),M.vadd(T.wlambda,M)}let _=r.length;const w=1/h;for(;_--;)r[_].multiplier=y[_]*w}return n}}const r1=[],a1=[],l1=[];class c1{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class h1 extends c1{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const be={sphereSphere:Pt.types.SPHERE,spherePlane:Pt.types.SPHERE|Pt.types.PLANE,boxBox:Pt.types.BOX|Pt.types.BOX,sphereBox:Pt.types.SPHERE|Pt.types.BOX,planeBox:Pt.types.PLANE|Pt.types.BOX,convexConvex:Pt.types.CONVEXPOLYHEDRON,sphereConvex:Pt.types.SPHERE|Pt.types.CONVEXPOLYHEDRON,planeConvex:Pt.types.PLANE|Pt.types.CONVEXPOLYHEDRON,boxConvex:Pt.types.BOX|Pt.types.CONVEXPOLYHEDRON,sphereHeightfield:Pt.types.SPHERE|Pt.types.HEIGHTFIELD,boxHeightfield:Pt.types.BOX|Pt.types.HEIGHTFIELD,convexHeightfield:Pt.types.CONVEXPOLYHEDRON|Pt.types.HEIGHTFIELD,sphereParticle:Pt.types.PARTICLE|Pt.types.SPHERE,planeParticle:Pt.types.PLANE|Pt.types.PARTICLE,boxParticle:Pt.types.BOX|Pt.types.PARTICLE,convexParticle:Pt.types.PARTICLE|Pt.types.CONVEXPOLYHEDRON,cylinderCylinder:Pt.types.CYLINDER,sphereCylinder:Pt.types.SPHERE|Pt.types.CYLINDER,planeCylinder:Pt.types.PLANE|Pt.types.CYLINDER,boxCylinder:Pt.types.BOX|Pt.types.CYLINDER,convexCylinder:Pt.types.CONVEXPOLYHEDRON|Pt.types.CYLINDER,heightfieldCylinder:Pt.types.HEIGHTFIELD|Pt.types.CYLINDER,particleCylinder:Pt.types.PARTICLE|Pt.types.CYLINDER,sphereTrimesh:Pt.types.SPHERE|Pt.types.TRIMESH,planeTrimesh:Pt.types.PLANE|Pt.types.TRIMESH};class u1{get[be.sphereSphere](){return this.sphereSphere}get[be.spherePlane](){return this.spherePlane}get[be.boxBox](){return this.boxBox}get[be.sphereBox](){return this.sphereBox}get[be.planeBox](){return this.planeBox}get[be.convexConvex](){return this.convexConvex}get[be.sphereConvex](){return this.sphereConvex}get[be.planeConvex](){return this.planeConvex}get[be.boxConvex](){return this.boxConvex}get[be.sphereHeightfield](){return this.sphereHeightfield}get[be.boxHeightfield](){return this.boxHeightfield}get[be.convexHeightfield](){return this.convexHeightfield}get[be.sphereParticle](){return this.sphereParticle}get[be.planeParticle](){return this.planeParticle}get[be.boxParticle](){return this.boxParticle}get[be.convexParticle](){return this.convexParticle}get[be.cylinderCylinder](){return this.convexConvex}get[be.sphereCylinder](){return this.sphereConvex}get[be.planeCylinder](){return this.planeConvex}get[be.boxCylinder](){return this.boxConvex}get[be.convexCylinder](){return this.convexConvex}get[be.heightfieldCylinder](){return this.heightfieldCylinder}get[be.particleCylinder](){return this.particleCylinder}get[be.sphereTrimesh](){return this.sphereTrimesh}get[be.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new h1,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new q_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,f=r.material||i.material;if(h&&f&&h.friction>=0&&f.friction>=0&&(c=h.friction*f.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const m=this.frictionEquationPool,v=m.length?m.pop():new qh(n,i,u*d),g=m.length?m.pop():new qh(n,i,u*d);return v.bi=g.bi=n,v.bj=g.bj=i,v.minForce=g.minForce=-u*d,v.maxForce=g.maxForce=u*d,v.ri.copy(t.ri),v.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(v.t,g.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=g.enabled=t.enabled,e.push(v,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ki.setZero(),_s.setZero(),ys.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(ki.vadd(e.ni,ki),_s.vadd(e.ri,_s),ys.vadd(e.rj,ys)):(ki.vsub(e.ni,ki),_s.vadd(e.rj,_s),ys.vadd(e.ri,ys));const r=1/t;_s.scale(r,n.ri),ys.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ki.normalize(),ki.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=p1,c=m1,h=d1,f=f1;for(let u=0,d=t.length;u!==d;u++){const m=t[u],v=e[u];let g=null;m.material&&v.material&&(g=n.getContactMaterial(m.material,v.material)||null);const p=m.type&Ct.KINEMATIC&&v.type&Ct.STATIC||m.type&Ct.STATIC&&v.type&Ct.KINEMATIC||m.type&Ct.KINEMATIC&&v.type&Ct.KINEMATIC;for(let x=0;x<m.shapes.length;x++){m.quaternion.mult(m.shapeOrientations[x],l),m.quaternion.vmult(m.shapeOffsets[x],h),h.vadd(m.position,h);const y=m.shapes[x];for(let _=0;_<v.shapes.length;_++){v.quaternion.mult(v.shapeOrientations[_],c),v.quaternion.vmult(v.shapeOffsets[_],f),f.vadd(v.position,f);const w=v.shapes[_];if(!(y.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(f)>y.boundingSphereRadius+w.boundingSphereRadius)continue;let b=null;y.material&&w.material&&(b=n.getContactMaterial(y.material,w.material)||null),this.currentContactMaterial=b||g||n.defaultContactMaterial;const T=y.type|w.type,D=this[T];if(D){let M=!1;y.type<w.type?M=D.call(this,y,w,h,f,l,c,m,v,y,w,p):M=D.call(this,w,y,f,h,c,l,v,m,y,w,p),M&&p&&(n.shapeOverlapKeeper.set(y.id,w.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,n,i,s,r,a,l,c,h,f){if(f)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,a,l,c,h,f){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,dr),u.ni.scale(u.ni.dot(dr),jh),dr.vsub(jh,u.rj),-dr.dot(u.ni)<=t.radius){if(f)return!0;const d=u.ri,m=u.rj;d.vadd(n,d),d.vsub(a.position,d),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,a,l,c,h,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,f)}sphereBox(t,e,n,i,s,r,a,l,c,h,f){const u=this.v3pool,d=V1;n.vsub(i,fr),e.getSideNormals(d,r);const m=t.radius;let v=!1;const g=G1,p=W1,x=X1;let y=null,_=0,w=0,b=0,T=null;for(let F=0,W=d.length;F!==W&&v===!1;F++){const k=O1;k.copy(d[F]);const j=k.length();k.normalize();const at=fr.dot(k);if(at<j+m&&at>0){const dt=B1,it=k1;dt.copy(d[(F+1)%3]),it.copy(d[(F+2)%3]);const Ht=dt.length(),ee=it.length();dt.normalize(),it.normalize();const Kt=fr.dot(dt),K=fr.dot(it);if(Kt<Ht&&Kt>-Ht&&K<ee&&K>-ee){const et=Math.abs(at-j-m);if((T===null||et<T)&&(T=et,w=Kt,b=K,y=j,g.copy(k),p.copy(dt),x.copy(it),_++,f))return!0}}}if(_){v=!0;const F=this.createContactEquation(a,l,t,e,c,h);g.scale(-m,F.ri),F.ni.copy(g),F.ni.negate(F.ni),g.scale(y,g),p.scale(w,p),g.vadd(p,g),x.scale(b,x),g.vadd(x,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let D=u.get();const M=H1;for(let F=0;F!==2&&!v;F++)for(let W=0;W!==2&&!v;W++)for(let k=0;k!==2&&!v;k++)if(D.set(0,0,0),F?D.vadd(d[0],D):D.vsub(d[0],D),W?D.vadd(d[1],D):D.vsub(d[1],D),k?D.vadd(d[2],D):D.vsub(d[2],D),i.vadd(D,M),M.vsub(n,M),M.lengthSquared()<m*m){if(f)return!0;v=!0;const j=this.createContactEquation(a,l,t,e,c,h);j.ri.copy(M),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(m,j.ri),j.rj.copy(D),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(D),D=null;const S=u.get(),E=u.get(),L=u.get(),R=u.get(),U=u.get(),z=d.length;for(let F=0;F!==z&&!v;F++)for(let W=0;W!==z&&!v;W++)if(F%3!==W%3){d[W].cross(d[F],S),S.normalize(),d[F].vadd(d[W],E),L.copy(n),L.vsub(E,L),L.vsub(i,L);const k=L.dot(S);S.scale(k,R);let j=0;for(;j===F%3||j===W%3;)j++;U.copy(n),U.vsub(R,U),U.vsub(E,U),U.vsub(i,U);const at=Math.abs(k),dt=U.length();if(at<d[j].length()&&dt<m){if(f)return!0;v=!0;const it=this.createContactEquation(a,l,t,e,c,h);E.vadd(R,it.rj),it.rj.copy(it.rj),U.negate(it.ni),it.ni.normalize(),it.ri.copy(it.rj),it.ri.vadd(i,it.ri),it.ri.vsub(n,it.ri),it.ri.normalize(),it.ri.scale(m,it.ri),it.ri.vadd(n,it.ri),it.ri.vsub(a.position,it.ri),it.rj.vadd(i,it.rj),it.rj.vsub(l.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}}u.release(S,E,L,R,U)}planeBox(t,e,n,i,s,r,a,l,c,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,f)}convexConvex(t,e,n,i,s,r,a,l,c,h,f,u,d){const m=ry;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,m,u,d)){const v=[],g=ay;t.clipAgainstHull(n,s,e,i,r,m,-100,100,v);let p=0;for(let x=0;x!==v.length;x++){if(f)return!0;const y=this.createContactEquation(a,l,t,e,c,h),_=y.ri,w=y.rj;m.negate(y.ni),v[x].normal.negate(g),g.scale(v[x].depth,g),v[x].point.vadd(g,_),w.copy(v[x].point),_.vsub(n,_),w.vsub(i,w),_.vadd(n,_),_.vsub(a.position,_),w.vadd(i,w),w.vsub(l.position,w),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,r,a,l,c,h,f){const u=this.v3pool;n.vsub(i,q1);const d=e.faceNormals,m=e.faces,v=e.vertices,g=t.radius;let p=!1;for(let x=0;x!==v.length;x++){const y=v[x],_=K1;r.vmult(y,_),i.vadd(_,_);const w=Z1;if(_.vsub(n,w),w.lengthSquared()<g*g){if(f)return!0;p=!0;const b=this.createContactEquation(a,l,t,e,c,h);b.ri.copy(w),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(g,b.ri),_.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let x=0,y=m.length;x!==y&&p===!1;x++){const _=d[x],w=m[x],b=$1;r.vmult(_,b);const T=J1;r.vmult(v[w[0]],T),T.vadd(i,T);const D=Q1;b.scale(-g,D),n.vadd(D,D);const M=ty;D.vsub(T,M);const S=M.dot(b),E=ey;if(n.vsub(T,E),S<0&&E.dot(b)>0){const L=[];for(let R=0,U=w.length;R!==U;R++){const z=u.get();r.vmult(v[w[R]],z),i.vadd(z,z),L.push(z)}if(z1(L,b,n)){if(f)return!0;p=!0;const R=this.createContactEquation(a,l,t,e,c,h);b.scale(-g,R.ri),b.negate(R.ni);const U=u.get();b.scale(-S,U);const z=u.get();b.scale(-g,z),n.vsub(i,R.rj),R.rj.vadd(z,R.rj),R.rj.vadd(U,R.rj),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),u.release(U),u.release(z),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);for(let F=0,W=L.length;F!==W;F++)u.release(L[F]);return}else for(let R=0;R!==w.length;R++){const U=u.get(),z=u.get();r.vmult(v[w[(R+1)%w.length]],U),r.vmult(v[w[(R+2)%w.length]],z),i.vadd(U,U),i.vadd(z,z);const F=j1;z.vsub(U,F);const W=Y1;F.unit(W);const k=u.get(),j=u.get();n.vsub(U,j);const at=j.dot(W);W.scale(at,k),k.vadd(U,k);const dt=u.get();if(k.vsub(n,dt),at>0&&at*at<F.lengthSquared()&&dt.lengthSquared()<g*g){if(f)return!0;const it=this.createContactEquation(a,l,t,e,c,h);k.vsub(i,it.rj),k.vsub(n,it.ni),it.ni.normalize(),it.ni.scale(g,it.ri),it.rj.vadd(i,it.rj),it.rj.vsub(l.position,it.rj),it.ri.vadd(n,it.ri),it.ri.vsub(a.position,it.ri),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult);for(let Ht=0,ee=L.length;Ht!==ee;Ht++)u.release(L[Ht]);u.release(U),u.release(z),u.release(k),u.release(dt),u.release(j);return}u.release(U),u.release(z),u.release(k),u.release(dt),u.release(j)}for(let R=0,U=L.length;R!==U;R++)u.release(L[R])}}}planeConvex(t,e,n,i,s,r,a,l,c,h,f){const u=ny,d=iy;d.set(0,0,1),s.vmult(d,d);let m=0;const v=sy;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,v),d.dot(v)<=0){if(f)return!0;const x=this.createContactEquation(a,l,t,e,c,h),y=oy;d.scale(d.dot(v),y),u.vsub(y,y),y.vsub(n,x.ri),x.ni.copy(d),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,r,a,l,c,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,f)}sphereHeightfield(t,e,n,i,s,r,a,l,c,h,f){const u=e.data,d=t.radius,m=e.elementSize,v=_y,g=xy;ce.pointToLocalFrame(i,r,n,g);let p=Math.floor((g.x-d)/m)-1,x=Math.ceil((g.x+d)/m)+1,y=Math.floor((g.y-d)/m)-1,_=Math.ceil((g.y+d)/m)+1;if(x<0||_<0||p>u.length||y>u[0].length)return;p<0&&(p=0),x<0&&(x=0),y<0&&(y=0),_<0&&(_=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),_>=u[0].length&&(_=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const w=[];e.getRectMinMax(p,y,x,_,w);const b=w[0],T=w[1];if(g.z-d>T||g.z+d<b)return;const D=this.result;for(let M=p;M<x;M++)for(let S=y;S<_;S++){const E=D.length;let L=!1;if(e.getConvexTrianglePillar(M,S,!1),ce.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,f)),f&&L||(e.getConvexTrianglePillar(M,S,!0),ce.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,f)),f&&L))return!0;if(D.length-E>2)return}}boxHeightfield(t,e,n,i,s,r,a,l,c,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,f)}convexHeightfield(t,e,n,i,s,r,a,l,c,h,f){const u=e.data,d=e.elementSize,m=t.boundingSphereRadius,v=gy,g=vy,p=my;ce.pointToLocalFrame(i,r,n,p);let x=Math.floor((p.x-m)/d)-1,y=Math.ceil((p.x+m)/d)+1,_=Math.floor((p.y-m)/d)-1,w=Math.ceil((p.y+m)/d)+1;if(y<0||w<0||x>u.length||_>u[0].length)return;x<0&&(x=0),y<0&&(y=0),_<0&&(_=0),w<0&&(w=0),x>=u.length&&(x=u.length-1),y>=u.length&&(y=u.length-1),w>=u[0].length&&(w=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const b=[];e.getRectMinMax(x,_,y,w,b);const T=b[0],D=b[1];if(!(p.z-m>D||p.z+m<T))for(let M=x;M<y;M++)for(let S=_;S<w;S++){let E=!1;if(e.getConvexTrianglePillar(M,S,!1),ce.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(E=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,f,g,null)),f&&E||(e.getConvexTrianglePillar(M,S,!0),ce.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(E=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,f,g,null)),f&&E))return!0}}sphereParticle(t,e,n,i,s,r,a,l,c,h,f){const u=uy;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(f)return!0;const m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,r,a,l,c,h,f){const u=ly;u.set(0,0,1),a.quaternion.vmult(u,u);const d=cy;if(i.vsub(a.position,d),u.dot(d)<=0){if(f)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const g=hy;u.scale(u.dot(i),g),i.vsub(g,g),v.rj.copy(g),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,r,a,l,c,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,f)}convexParticle(t,e,n,i,s,r,a,l,c,h,f){let u=-1;const d=fy,m=py;let v=null;const g=dy;if(g.copy(i),g.vsub(n,g),s.conjugate(Yh),Yh.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,x=t.faces.length;p!==x;p++){const y=[t.worldVertices[t.faces[p][0]]],_=t.worldFaceNormals[p];i.vsub(y[0],Zh);const w=-_.dot(Zh);if(v===null||Math.abs(w)<Math.abs(v)){if(f)return!0;v=w,u=p,d.copy(_)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);d.scale(v,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),d.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,y=p.rj;x.vadd(i,x),x.vsub(l.position,x),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,a,l,c,h,f){return this.convexHeightfield(e,t,i,n,r,s,l,a,c,h,f)}particleCylinder(t,e,n,i,s,r,a,l,c,h,f){return this.convexParticle(e,t,i,n,r,s,l,a,c,h,f)}sphereTrimesh(t,e,n,i,s,r,a,l,c,h,f){const u=S1,d=b1,m=E1,v=T1,g=A1,p=C1,x=D1,y=w1,_=y1,w=L1;ce.pointToLocalFrame(i,r,n,g);const b=t.radius;x.lowerBound.set(g.x-b,g.y-b,g.z-b),x.upperBound.set(g.x+b,g.y+b,g.z+b),e.getTrianglesInAABB(x,w);const T=M1,D=t.radius*t.radius;for(let R=0;R<w.length;R++)for(let U=0;U<3;U++)if(e.getVertex(e.indices[w[R]*3+U],T),T.vsub(g,_),_.lengthSquared()<=D){if(y.copy(T),ce.pointToWorldFrame(i,r,y,T),T.vsub(n,_),f)return!0;let z=this.createContactEquation(a,l,t,e,c,h);z.ni.copy(_),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(T),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let R=0;R<w.length;R++)for(let U=0;U<3;U++){e.getVertex(e.indices[w[R]*3+U],u),e.getVertex(e.indices[w[R]*3+(U+1)%3],d),d.vsub(u,m),g.vsub(d,p);const z=p.dot(m);g.vsub(u,p);let F=p.dot(m);if(F>0&&z<0&&(g.vsub(u,p),v.copy(m),v.normalize(),F=p.dot(v),v.scale(F,p),p.vadd(u,p),p.distanceTo(g)<t.radius)){if(f)return!0;const k=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),ce.pointToWorldFrame(i,r,p,p),p.vsub(l.position,k.rj),ce.vectorToWorldFrame(r,k.ni,k.ni),ce.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const M=R1,S=P1,E=I1,L=_1;for(let R=0,U=w.length;R!==U;R++){e.getTriangleVertices(w[R],M,S,E),e.getNormal(w[R],L),g.vsub(M,p);let z=p.dot(L);if(L.scale(z,p),g.vsub(p,p),z=p.distanceTo(g),De.pointInTriangle(p,M,S,E)&&z<t.radius){if(f)return!0;let F=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),ce.pointToWorldFrame(i,r,p,p),p.vsub(l.position,F.rj),ce.vectorToWorldFrame(r,F.ni,F.ni),ce.vectorToWorldFrame(r,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}w.length=0}planeTrimesh(t,e,n,i,s,r,a,l,c,h,f){const u=new C,d=g1;d.set(0,0,1),s.vmult(d,d);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const v=new C;v.copy(u),ce.pointToWorldFrame(i,r,v,u);const g=v1;if(u.vsub(n,g),d.dot(g)<=0){if(f)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(d);const y=x1;d.scale(g.dot(d),y),u.vsub(y,y),x.ri.copy(y),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const ki=new C,_s=new C,ys=new C,d1=new C,f1=new C,p1=new Le,m1=new Le,g1=new C,v1=new C,x1=new C,_1=new C,y1=new C;new C;const M1=new C,w1=new C,S1=new C,b1=new C,E1=new C,T1=new C,A1=new C,C1=new C,R1=new C,P1=new C,I1=new C,D1=new hn,L1=[],dr=new C,jh=new C,N1=new C,U1=new C,F1=new C;function z1(o,t,e){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=N1;o[(s+1)%i].vsub(r,a);const l=U1;a.cross(t,l);const c=F1;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const fr=new C,O1=new C,B1=new C,k1=new C,V1=[new C,new C,new C,new C,new C,new C],H1=new C,G1=new C,W1=new C,X1=new C,q1=new C,j1=new C,Y1=new C,Z1=new C,K1=new C,$1=new C,J1=new C,Q1=new C,ty=new C,ey=new C;new C;new C;const ny=new C,iy=new C,sy=new C,oy=new C,ry=new C,ay=new C,ly=new C,cy=new C,hy=new C,uy=new C,Yh=new Le,dy=new C;new C;const fy=new C,Zh=new C,py=new C,my=new C,gy=new C,vy=[0],xy=new C,_y=new C;class Kh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||$h(t,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||$h(e,h)}}}function $h(o,t){o.push((t&4294901760)>>16,t&65535)}const Fa=(o,t)=>o<t?`${o}-${t}`:`${t}-${o}`;class yy{constructor(){this.data={keys:[]}}get(t,e){const n=Fa(t,e);return this.data[n]}set(t,e,n){const i=Fa(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Fa(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class My extends td{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new A_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new o1,this.constraints=[],this.narrowphase=new u1(this),this.collisionMatrix=new Fh,this.collisionMatrixPrevious=new Fh,this.bodyOverlapKeeper=new Kh,this.shapeOverlapKeeper=new Kh,this.contactmaterials=[],this.contactMaterialTable=new yy,this.defaultMaterial=new Gr("default"),this.defaultContactMaterial=new Hr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ji?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=De.ALL,n.from=t,n.to=e,n.callback=i,za.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=De.ANY,n.from=t,n.to=e,n.result=i,za.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=De.CLOSEST,n.from=t,n.to=e,n.result=i,za.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ct&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ue.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ue.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ue.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Ty,i=Ay,s=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,f=Ct.DYNAMIC;let u=-1/0;const d=this.constraints,m=Ey;l.length();const v=l.x,g=l.y,p=l.z;let x=0;for(c&&(u=Ue.now()),x=0;x!==s;x++){const R=r[x];if(R.type===f){const U=R.force,z=R.mass;U.x+=z*v,U.y+=z*g,U.z+=z*p}}for(let R=0,U=this.subsystems.length;R!==U;R++)this.subsystems[R].update();c&&(u=Ue.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Ue.now()-u);let y=d.length;for(x=0;x!==y;x++){const R=d[x];if(!R.collideConnected)for(let U=n.length-1;U>=0;U-=1)(R.bodyA===n[U]&&R.bodyB===i[U]||R.bodyB===n[U]&&R.bodyA===i[U])&&(n.splice(U,1),i.splice(U,1))}this.collisionMatrixTick(),c&&(u=Ue.now());const _=by,w=e.length;for(x=0;x!==w;x++)_.push(e[x]);e.length=0;const b=this.frictionEquations.length;for(x=0;x!==b;x++)m.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,_,this.frictionEquations,m),c&&(h.narrowphase=Ue.now()-u),c&&(u=Ue.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const T=e.length;for(let R=0;R!==T;R++){const U=e[R],z=U.bi,F=U.bj,W=U.si,k=U.sj;let j;if(z.material&&F.material?j=this.getContactMaterial(z.material,F.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,z.material&&F.material&&(z.material.friction>=0&&F.material.friction>=0&&z.material.friction*F.material.friction,z.material.restitution>=0&&F.material.restitution>=0&&(U.restitution=z.material.restitution*F.material.restitution)),a.addEquation(U),z.allowSleep&&z.type===Ct.DYNAMIC&&z.sleepState===Ct.SLEEPING&&F.sleepState===Ct.AWAKE&&F.type!==Ct.STATIC){const at=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),dt=F.sleepSpeedLimit**2;at>=dt*2&&(z.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===Ct.DYNAMIC&&F.sleepState===Ct.SLEEPING&&z.sleepState===Ct.AWAKE&&z.type!==Ct.STATIC){const at=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),dt=z.sleepSpeedLimit**2;at>=dt*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,F,!0),this.collisionMatrixPrevious.get(z,F)||(no.body=F,no.contact=U,z.dispatchEvent(no),no.body=z,F.dispatchEvent(no)),this.bodyOverlapKeeper.set(z.id,F.id),this.shapeOverlapKeeper.set(W.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ue.now()-u,u=Ue.now()),x=0;x!==s;x++){const R=r[x];R.wakeUpAfterNarrowphase&&(R.wakeUp(),R.wakeUpAfterNarrowphase=!1)}for(y=d.length,x=0;x!==y;x++){const R=d[x];R.update();for(let U=0,z=R.equations.length;U!==z;U++){const F=R.equations[U];a.addEquation(F)}}a.solve(t,this),c&&(h.solve=Ue.now()-u),a.removeAllEquations();const D=Math.pow;for(x=0;x!==s;x++){const R=r[x];if(R.type&f){const U=D(1-R.linearDamping,t),z=R.velocity;z.scale(U,z);const F=R.angularVelocity;if(F){const W=D(1-R.angularDamping,t);F.scale(W,F)}}}this.dispatchEvent(Sy),c&&(u=Ue.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,E=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(t,S,E);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ue.now()-u),this.stepnumber+=1,this.dispatchEvent(wy);let L=!0;if(this.allowSleep)for(L=!1,x=0;x!==s;x++){const R=r[x];R.sleepTick(this.time),R.sleepState!==Ct.SLEEPING&&(L=!0)}this.hasActiveBodies=L}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ti,ei),t){for(let s=0,r=ti.length;s<r;s+=2)io.bodyA=this.getBodyById(ti[s]),io.bodyB=this.getBodyById(ti[s+1]),this.dispatchEvent(io);io.bodyA=io.bodyB=null}if(e){for(let s=0,r=ei.length;s<r;s+=2)so.bodyA=this.getBodyById(ei[s]),so.bodyB=this.getBodyById(ei[s+1]),this.dispatchEvent(so);so.bodyA=so.bodyB=null}ti.length=ei.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ti,ei),n){for(let s=0,r=ti.length;s<r;s+=2){const a=this.getShapeById(ti[s]),l=this.getShapeById(ti[s+1]);ni.shapeA=a,ni.shapeB=l,a&&(ni.bodyA=a.body),l&&(ni.bodyB=l.body),this.dispatchEvent(ni)}ni.bodyA=ni.bodyB=ni.shapeA=ni.shapeB=null}if(i){for(let s=0,r=ei.length;s<r;s+=2){const a=this.getShapeById(ei[s]),l=this.getShapeById(ei[s+1]);ii.shapeA=a,ii.shapeB=l,a&&(ii.bodyA=a.body),l&&(ii.bodyB=l.body),this.dispatchEvent(ii)}ii.bodyA=ii.bodyB=ii.shapeA=ii.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new hn;const za=new De,Ue=globalThis.performance||{};if(!Ue.now){let o=Date.now();Ue.timing&&Ue.timing.navigationStart&&(o=Ue.timing.navigationStart),Ue.now=()=>Date.now()-o}new C;const wy={type:"postStep"},Sy={type:"preStep"},no={type:Ct.COLLIDE_EVENT_NAME,body:null,contact:null},by=[],Ey=[],Ty=[],Ay=[],ti=[],ei=[],io={type:"beginContact",bodyA:null,bodyB:null},so={type:"endContact",bodyA:null,bodyB:null},ni={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ii={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Cy{constructor(){this.world=new My({gravity:new C(0,-24,0)}),this.world.broadphase=new bs(this.world),this.world.allowSleep=!0,this.world.solver.iterations=7,this.world.defaultContactMaterial.friction=.35,this.world.defaultContactMaterial.restitution=.12,this.items=[]}box(t,e,n,i,s,r,a=0,l=null,c=0){const h=new Ct({mass:a,shape:new Vr(new C(i/2,s/2,r/2)),position:new C(t,e,n),linearDamping:.12,angularDamping:.25,sleepTimeLimit:2});return h.quaternion.setFromEuler(0,c,0),h.updateAABB(),this.world.addBody(h),l&&this.items.push({body:h,mesh:l,home:h.position.clone(),homeQ:h.quaternion.clone(),age:0}),h}ball(t,e,n,i,s,r){const a=new Ct({mass:s,shape:new i1(i),position:new C(t,e,n),linearDamping:.08,angularDamping:.08});return this.world.addBody(a),this.items.push({body:a,mesh:r,home:a.position.clone(),homeQ:a.quaternion.clone(),age:0}),a}step(t){this.world.step(1/60,t,4);for(const e of this.items){e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion),e.age+=t;const n=e.body.position;(n.y<-20||Math.abs(n.x)>1020||Math.abs(n.z)>1020||e.resetAfter&&e.age>e.resetAfter)&&this.reset(e)}}reset(t){t.body.position.copy(t.home),t.body.quaternion.copy(t.homeQ),t.body.velocity.setZero(),t.body.angularVelocity.setZero(),t.body.wakeUp(),t.age=0}}class Ry{constructor(t){this.items=[],this.mesh=new Fs(new Fr(.3,0),Zt(16777215),180),this.mesh.instanceMatrix.setUsage(jd),this.mesh.count=0,t.add(this.mesh),this.dummy=new Pe,this.tracks=[],this.trackMesh=new Fs(new Dn(.7,2),new ks({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}),180),t.add(this.trackMesh),this.trackMesh.count=0}emit(t,e,n=10,i=4,s="spark"){for(let r=0;r<n;r++)this.items.length>=180&&this.items.shift(),this.items.push({p:new P(t.x,t.y+1,t.z),v:new P((Math.random()-.5)*i,Math.random()*i+2,(Math.random()-.5)*i),life:s==="smoke"?2:1.3,max:s==="smoke"?2:1.3,color:new jt(e),kind:s})}track(t,e,n,i){for(const s of[-1,1])this.tracks.length>=180&&this.tracks.shift(),this.tracks.push({x:t.x+Math.cos(e)*i*.5*s,y:t.y,z:t.z-Math.sin(e)*i*.5*s,yaw:e,color:new jt(n),life:12})}update(t){this.items=this.items.filter(e=>e.life>0);for(let e=0;e<this.items.length;e++){const n=this.items[e];n.life-=t,n.v.y-=n.kind==="smoke"?-t:t*8,n.p.addScaledVector(n.v,t),this.dummy.position.copy(n.p),this.dummy.scale.setScalar(n.kind==="smoke"?(n.max-n.life)*2+.2:n.life/n.max),this.dummy.rotation.set(n.life*2,n.life,0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),this.mesh.setColorAt(e,n.color)}this.mesh.count=this.items.length,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.mesh.computeBoundingSphere(),this.tracks=this.tracks.filter(e=>e.life>0);for(let e=0;e<this.tracks.length;e++){const n=this.tracks[e];n.life-=t,this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(-Math.PI/2,0,n.yaw),this.dummy.scale.setScalar(Math.min(1,n.life/3)),this.dummy.updateMatrix(),this.trackMesh.setMatrixAt(e,this.dummy.matrix),this.trackMesh.setColorAt(e,n.color)}this.trackMesh.count=this.tracks.length,this.trackMesh.instanceMatrix.needsUpdate=!0,this.trackMesh.instanceColor&&(this.trackMesh.instanceColor.needsUpdate=!0),this.trackMesh.computeBoundingSphere()}}class Py{constructor(){this.enabled=!0,this.ctx=null;try{this.volume=Number(localStorage.getItem("norimono-volume")??.85)}catch{this.volume=.85}}async start(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume*.75,this.compressor=e.createDynamicsCompressor(),this.compressor.threshold.value=-15,this.compressor.knee.value=18,this.compressor.ratio.value=4,this.master.connect(this.compressor).connect(e.destination),this.engine=e.createOscillator(),this.engine.type="sawtooth",this.engineGain=e.createGain(),this.engineGain.gain.value=.11;const n=e.createBiquadFilter();n.frequency.value=750,this.engine.connect(n).connect(this.engineGain).connect(this.master),this.engine.start(),this.rail=e.createOscillator(),this.rail.type="triangle",this.railGain=e.createGain(),this.railGain.gain.value=0,this.rail.connect(this.railGain).connect(this.master),this.rail.start(),this.sirenGain=e.createGain(),this.sirenGain.gain.value=0,this.sirenGain.connect(this.master),this.sirens=[0,1].map(i=>{const s=e.createOscillator();return s.type=i?"sine":"triangle",s.connect(this.sirenGain),s.start(),s})}try{await this.ctx.resume()}catch{}}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem("norimono-volume",this.volume)}catch{}}effect(t){if(!this.ctx||!this.enabled)return;const e={hit:65,jump:360,paint:220,mud:100,water:450,wash:580,warp:750,boost:320,repair:880,success:660,goal:990,strike:740,ball:140,crossing:640}[t]||440,n=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;n.type=["hit","mud","ball"].includes(t)?"triangle":"sine",n.frequency.setValueAtTime(e,s),n.frequency.exponentialRampToValueAtTime(e*(t==="hit"?.5:1.6),s+.23),i.gain.setValueAtTime(.2,s),i.gain.exponentialRampToValueAtTime(.001,s+.35),n.connect(i).connect(this.master),n.start(s),n.stop(s+.36)}update(t,e,n){if(!this.ctx)return;const i=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.enabled?this.volume*.75:0,i,.08),this.engine.frequency.setTargetAtTime(45+Math.abs(t.speed)*4,i,.08),this.engineGain.gain.setTargetAtTime(.075+Math.min(.085,Math.abs(t.speed)*.002),i,.1);const s=t.specialOn&&["police","ambulance","fire"].includes(t.config.id);this.sirenGain.gain.setTargetAtTime(s?.15:0,i,.035);const r=t.config.id==="ambulance"?Math.floor(n*1.5)%2?780:960:620+(Math.sin(n*4)+1)*260;this.sirens[0].frequency.setTargetAtTime(r,i,.025),this.sirens[1].frequency.setTargetAtTime(r*1.005,i,.025);let a=0,l=90;for(const c of e){const h=c.meshes[0].position.distanceTo(t.mesh.position),f=Math.max(0,1-h/180)*.13;f>a&&(a=f,l=70+c.speed*5)}this.railGain.gain.setTargetAtTime(a,i,.2),this.rail.frequency.setTargetAtTime(l,i,.2)}}class Iy{constructor(){try{this.data=JSON.parse(localStorage.getItem("norimono-save-v1"))||{}}catch{this.data={}}this.data.discovered=Array.isArray(this.data.discovered)?this.data.discovered:[]}save(t,e){this.data.lastVehicle=t.config.id,this.data.discovered.includes(t.config.id)||this.data.discovered.push(t.config.id),this.data.settings=e;try{localStorage.setItem("norimono-save-v1",JSON.stringify(this.data))}catch{}}}class Dy{constructor(){this.standalone=matchMedia("(display-mode: standalone)").matches||!!navigator.standalone,this.prompt=null,window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.prompt=t,document.querySelector("#install")?.removeAttribute("hidden")}),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(t=>t.update()).catch(t=>console.warn("オフライン準備を再試行できます",t.message)),document.addEventListener("visibilitychange",()=>{!document.hidden&&this.started?this.wake():this.lock?.release().catch(()=>{})})}async start(){this.started=!0,this.wake()}async wake(){try{navigator.wakeLock&&(this.lock=await navigator.wakeLock.request("screen"))}catch{}}async install(){if(this.prompt)await this.prompt.prompt(),this.prompt=null;else return"iPhoneは共有ボタン → ホーム画面に追加。Androidはブラウザのメニュー → アプリをインストール。"}}let Oa;function Ly(o,t){if(!["police","ambulance","fire"].includes(t.id))return;if(!Oa){const i=document.createElement("canvas");i.width=i.height=64;const s=i.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#ffffffff"),r.addColorStop(.18,"#ffffffba"),r.addColorStop(.55,"#ffffff35"),r.addColorStop(1,"#ffffff00"),s.fillStyle=r,s.fillRect(0,0,64,64),Oa=new $i(i)}const e=o.userData;for(const i of e.lights){const s=new Ru(new $l({map:Oa,color:i.material.color,blending:Va,transparent:!0,opacity:0,depthWrite:!1}));s.scale.set(1.7,1.7,1),s.position.y=.08,i.add(s),i.userData.flare=s}const n=new Vu(16721731,0,12,2);n.position.set(0,4.1,0),e.chassis.add(n),e.emergencyLight=n}const Cs=new Map;function Ny(){const t=new Uint8Array(262144);let e=91237;for(let i=0;i<t.length;i+=4){e=Math.imul(e,1664525)+1013904223>>>0;const s=180+(e>>>25);t[i]=t[i+1]=t[i+2]=s,t[i+3]=255}const n=new Nr(t,256,256);return n.wrapS=n.wrapT=ui,n.magFilter=An,n.minFilter=Ei,n.generateMipmaps=!0,n.repeat.set(6,6),n.needsUpdate=!0,n}const Jh=Ny();function Wr(o){if(Cs.has(o))return Cs.get(o);const t={paint:new ci({color:o,metalness:.72,roughness:.23,clearcoat:1,clearcoatRoughness:.095,roughnessMap:Jh,envMapIntensity:1.15}),glass:new ci({color:1319980,metalness:.12,roughness:.055,clearcoat:1,clearcoatRoughness:.025,ior:1.52,envMapIntensity:1.7,side:We}),chrome:new Ae({color:12240077,metalness:1,roughness:.2,envMapIntensity:1.1}),alloy:new Ae({color:9213598,metalness:.92,roughness:.31}),dark:new Ae({color:1514528,metalness:.55,roughness:.38}),rubber:new Ae({color:1382169,roughness:.95,roughnessMap:Jh}),trim:new Ae({color:2435114,roughness:.7}),seat:new Ae({color:2436400,roughness:.88}),red:new Ae({color:12069924,metalness:.4,roughness:.35}),led:new Ae({color:15858175,emissive:13232127,emissiveIntensity:1.7,roughness:.18}),tail:new ci({color:9243658,emissive:16720400,emissiveIntensity:.45,roughness:.2,clearcoat:1})};return Cs.set(o,t),t}function Uy(o){const t=o?"letter-offroad":"letter-road";if(Cs.has(t))return Cs.get(t);const e=document.createElement("canvas");e.width=e.height=512;const n=e.getContext("2d");n.translate(256,256),n.fillStyle="#777b7d",n.font="600 23px Arial";const i=(a,l,c)=>{for(let h=0;h<a.length;h++){const f=c+h*.087;n.save(),n.rotate(f),n.fillText(a[h],-7,-210),n.restore()}};i(o?"NWM • ALL TERRAIN":"NWM • PERFORMANCE",210,-.78),i(o?"38 × 15.5 R20":"SPORT RADIAL",210,2.55);const s=new $i(e);s.colorSpace=Ve;const r=new ks({map:s,transparent:!0,depthWrite:!1,side:We});return Cs.set(t,r),r}function cd(o,t,e){const n=t.width,i=t.length,s=["sport","race","rare-sport"].includes(t.id),r=["suv","secret-suv"].includes(t.id),a=90,l=24,c=[],h=[],f=[];function u(v){const g=Math.sin(Math.min(1,v/.16)*Math.PI/2),p=Math.sin(Math.min(1,(1-v)/.14)*Math.PI/2);return{width:n*(.34+.1*Math.min(g,p)),top:(s?.73:r?1.2:.98)-(1-g)*.27-(1-p)*.16}}for(let v=0;v<=a;v++){const g=v/a,p=(g-.5)*i*1.06,{width:x,top:y}=u(g);for(let _=0;_<=l;_++){const w=_/l*Math.PI,b=-Math.cos(w)*x,T=.16+Math.pow(Math.sin(w),.22)*(y-.16);c.push(b,T,p),h.push(_/l,g)}}for(let v=0;v<a;v++)for(let g=0;g<l;g++){const p=v*(l+1)+g,x=p+l+1,y=((v+.5)/a-.5)*i*1.06,_=(c[p*3+1]+c[(p+1)*3+1])*.5;Math.abs((c[p*3]+c[(p+1)*3])*.5),[-i*.32,i*.32].some(w=>(y-w)**2+(_+.15)**2<(t.wheel*1.08)**2),f.push(p,x,p+1,x,x+1,p+1)}for(const v of[0,a]){const g=c.length/3,p=(v/a-.5)*i*1.06;c.push(0,.16,p),h.push(.5,.5);for(let x=0;x<l;x++){const y=v*(l+1)+x;v===0?f.push(g,y,y+1):f.push(g,y+1,y)}}for(let v=0;v<a;v++){const g=v*(l+1),p=(v+1)*(l+1);f.push(g,g+l,p,p,g+l,p+l)}const d=new _e;d.setAttribute("position",new Bt(c,3)),d.setAttribute("uv",new Bt(h,2)),d.setIndex(f),d.computeVertexNormals();const m=new Qt(d,e);return m.name="sealed-body-shell",m.userData.closedShell=!0,m.castShadow=!0,m.receiveShadow=!0,o.add(m),m}function He(o,t,e,n=0,i=0,s=0){const r=new Qt(t,e);return r.position.set(n,i,s),r.castShadow=!0,r.receiveShadow=!0,o.add(r),r}function xt(o,t,e,n,i,s,r,a,l=.04){return He(o,new Os(t,e,n,2,Math.min(l,t/3,e/3,n/3)),a,i,s,r)}function Vn(o,t,e,n,i,s,r,a=24){return He(o,new _n(t,t,e,a),r,n,i,s)}function re(o,t,e,n,i){const s=new P(...t),r=new P(...e),a=r.clone().sub(s),l=Vn(o,n,a.length(),0,0,0,i,12);return l.position.copy(s.add(r).multiplyScalar(.5)),l.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),l}function ai(o,t,e){const n=new _e;return n.setAttribute("position",new Bt(t.flat(),3)),n.setAttribute("uv",new Bt([0,0,1,0,1,1,0,1],2)),n.setIndex([0,1,2,0,2,3]),n.computeVertexNormals(),He(o,lc(n,.55),e)}function Qh(o,t,e,n,i=.045){const s=new Eo(t,{depth:e,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:3,curveSegments:24,steps:1});return s.rotateY(-Math.PI/2),s.translate(e/2,0,0),He(o,lc(s,.55),n)}function Rr(o,t,e,n,i,s,r,a=Math.PI*2){const l=He(o,new Xn(t,e,8,64,a),r,n,i,s);return l.rotation.y=Math.PI/2,l}function hd(o,t,e,n,i,s){const r=t.wheel,a=r*(s?.88:.72),l=new qt,c=new qt;l.position.set(n*(t.width*.47+a*.28),-.15,i),l.add(c),o.add(l);const h=[[.56,-.46],[.75,-.51],[.93,-.45],[1,-.32],[1,.32],[.93,.45],[.75,.51],[.56,.46],[.56,-.46]].map(([p,x])=>new nt(p*r,x*a)),f=new zr(h,64);f.rotateZ(Math.PI/2),He(c,f,e.rubber);const u=s?3:2,d=s?40:48;for(let p=0;p<u;p++)for(let x=0;x<d;x++){const y=(x+p%2*.45)*Math.PI*2/d;xt(c,a/(u+.1),r*(s?.075:.022),r*(s?.115:.065),(p-(u-1)/2)*a/u,Math.cos(y)*r,Math.sin(y)*r,e.rubber,.018).rotation.set(y,p%2?.24:-.24,0)}const m=n*a*.51,v=Vn(c,r*.58,a*.85,0,0,0,e.dark,48);v.rotation.z=Math.PI/2;for(const p of[m,-m]){Rr(c,r*.58,r*.037,p,0,0,e.chrome);const x=Vn(c,r*.49,.065,p*.78,0,0,e.alloy,48);x.rotation.z=Math.PI/2;for(let _=0;_<20;_++){const w=_*Math.PI/10,b=Vn(c,r*.022,.072,p*.81,Math.cos(w)*r*.4,Math.sin(w)*r*.4,e.dark,8);b.rotation.z=Math.PI/2}for(let _=0;_<(s?8:10);_++){const w=_*Math.PI*2/(s?8:10),b=xt(c,.08,r*.45,r*.083,p,Math.cos(w)*r*.34,Math.sin(w)*r*.34,e.chrome,.025);b.rotation.x=w+(s?0:.18)}const y=Vn(c,r*.17,.1,p,0,0,e.alloy,24);y.rotation.z=Math.PI/2;for(let _=0;_<6;_++){const w=_*Math.PI/3,b=Vn(c,r*.033,.13,p+Math.sign(p)*.02,Math.cos(w)*r*.12,Math.sin(w)*r*.12,e.chrome,6);b.rotation.z=Math.PI/2}}const g=He(c,new Dn(r*1.91,r*1.91),Uy(s),m+n*.017,0,0);return g.rotation.y=n*Math.PI/2,g.castShadow=!1,xt(l,.17,r*.4,r*.2,m*.75,r*.19,-r*.39,e.red,.04),{pivot:l,roll:c,front:i<0}}function Fy(o,t,{width:e,bottom:n,roof:i,front:s,rear:r,frontTop:a,rearTop:l}){const c=e*.5,h=e*.43,f=[[-c,n,s],[c,n,s],[h,i,a],[-h,i,a]],u=[[c,n,r],[-c,n,r],[-h,i,l],[h,i,l]];ai(o,f,t.glass),ai(o,u,t.glass);for(const d of[-1,1]){const m=[d*c,n,s],v=[d*h,i,a],g=[d*c,n,r],p=[d*h,i,l];ai(o,[m,g,p,v],t.glass),re(o,m,v,.072,t.paint),re(o,g,p,.09,t.paint),re(o,m,g,.055,t.trim),re(o,v,p,.05,t.chrome);const x=(s+r)*.5;re(o,[d*c,n,x],[d*h,i,x],.07,t.trim),xt(o,.07,.07,.34,d*(c+.015),n-.23,x+.25,t.chrome,.02);const y=s+.1;re(o,[d*c,n+.15,y],[d*(c+.35),n+.15,y],.045,t.dark),xt(o,.34,.23,.46,d*(c+.4),n+.2,y,t.paint,.09),xt(o,.025,.17,.32,d*(c+.59),n+.22,y,t.chrome,.035)}xt(o,e*.88,.15,l-a+.18,0,i+.03,(a+l)/2,t.paint,.065);for(const d of[-e*.22,e*.22])xt(o,e*.26,.5,.3,d,n-.2,(s+r)/2,t.seat,.08),xt(o,e*.26,.16,.55,d,n-.5,(s+r)/2-.2,t.seat,.04);re(o,[-c,n+.008,s-.01],[c,n+.008,s-.01],.043,t.trim);for(const d of[-1,1])re(o,[d*c*.75,n+.035,s-.025],[d*c*.15,n+.18,a*.2+s*.8-.04],.022,t.dark)}function ud(o,t,e,n,i){const s=t.wheel*1.1,r=new Mo;r.absarc(0,-.15,s,0,Math.PI,!1),r.absarc(0,-.15,s-.12,Math.PI,0,!0),r.closePath();const a=new Eo(r,{depth:t.wheel*.48,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1,curveSegments:28});a.rotateY(Math.PI/2),He(o,lc(a,.55),e.paint,n>0?t.width*.4:-t.width*.4-t.wheel*.48,0,i),Rr(o,s-.02,.027,n*(t.width*.4+t.wheel*.49),-.15,i,e.trim,Math.PI)}function zy(o){const t=new qt,e=new qt,n=new qt,i=new qt,s=[],r=[];t.add(e),e.add(n,i);const a=Wr(o.color),l=o.width,c=o.length,h=o.wheel,f=o.id==="monster",u=["sport","race","rare-sport"].includes(o.id),d=["fire","ambulance","tow","dump","bus"].includes(o.id),m=["dozer","excavator"].includes(o.id),v=f||m||["suv","tractor","secret-suv"].includes(o.id),g=["car","police","sport","race","rare-sport","suv","secret-suv"].includes(o.id),p=f?1.72:u?.79:d?1.27:g?1.02:1.23,x=c*.53,y=h*1.055,_=-c*.32,w=c*.32,b=new Mo;b.moveTo(-x,.25),b.lineTo(-x,p-.32),b.quadraticCurveTo(-x+.25,p,-x+.65,p),b.lineTo(x-.35,p),b.quadraticCurveTo(x,p,x,p-.25),b.lineTo(x,.2);for(const E of[w,_])b.lineTo(Math.min(x,E+y),.2),b.absarc(E,-.15,y,0,Math.PI,!1);b.lineTo(-x,.25),b.closePath(),g?cd(e,o,a.paint):Qh(e,b,l*.85,a.paint),xt(e,l*.83,.25,c*.96,0,-.3,0,a.dark,.06),xt(e,l*.79,.4,c*.72,0,.3,0,a.trim,.08);for(const E of[-1,1])xt(e,.18,.28,c*.88,E*l*.26,-.28,0,a.dark,.03),xt(e,.16,.2,c*.55,E*l*.53,.1,0,a.trim,.03);const T=d?-c*.3:f?-1.2:-c*.2,D=-x+.18;ai(e,[[-l*.41,p-.15,D],[l*.41,p-.15,D],[l*.38,p+.09,T],[-l*.38,p+.09,T]],a.paint);for(const E of[-1,1])re(e,[E*l*.3,p-.1,D+.25],[E*l*.25,p+.105,T],.022,a.paint);if(f||u){xt(e,l*.32,.1,c*.11,0,p+.11,T-.55,a.trim,.03);for(let E=0;E<6;E++)xt(e,l*.28,.012,.018,0,p+.167,T-.8+E*.09,a.alloy,.005)}const M=d?{width:l*.91,bottom:p+.5,roof:3.65,front:-c*.47,rear:-c*.08,frontTop:-c*.42,rearTop:-c*.12}:m?{width:l*.58,bottom:1.9,roof:3.9,front:-.6,rear:2.1,frontTop:-.4,rearTop:1.8}:f?{width:l*.84,bottom:1.85,roof:3.23,front:-1.35,rear:1.52,frontTop:-.75,rearTop:1.14}:{width:l*.86,bottom:p+.19,roof:u?1.58:v?2.25:1.95,front:-c*.23,rear:c*.29,frontTop:-c*.07,rearTop:c*.12};o.id==="race"&&(M.width=l*.62,M.front=-c*.24,M.rear=c*.23,M.roof=1.58,M.frontTop=-c*.02,M.rearTop=c*.12),o.id==="tractor"&&(M.width=l*.7,M.front=-.5,M.frontTop=-.4,M.roof=3.15,M.rear=2,M.rearTop=1.8),Fy(e,a,M);for(const E of[-1,1]){const L=new Mo;L.moveTo(M.front,p*.6),L.lineTo(M.front,M.bottom),L.lineTo(M.rear,M.bottom),L.lineTo(M.rear,p*.6),L.closePath();const R=Qh(e,L,.06,a.paint,.015);R.position.x=E*l*.425,re(e,[E*l*.438,p*.55,M.front+.06],[E*l*.438,M.bottom-.05,M.front+.06],.013,a.dark),re(e,[E*l*.438,p*.55,M.rear-.04],[E*l*.438,M.bottom-.05,M.rear-.04],.013,a.dark)}if(f||o.id==="tow"){const E=M.rear+.05,L=x-.2;xt(e,l*.75,.14,L-E,0,.75,(E+L)/2,a.trim,.025);for(let R=0;R<9;R++)xt(e,.04,.04,L-E,(-.34+R*.085)*l,.85,(E+L)/2,a.dark,.01);for(const R of[-1,1])xt(e,.12,.14,L-E,R*l*.42,p+.08,(E+L)/2,a.trim,.04);xt(e,l*.85,.88,.15,0,1.1,x-.1,a.paint,.06),xt(e,.7,.055,.07,0,1.4,x+.01,a.chrome,.015)}if(d&&!["tow","dump"].includes(o.id)){const E=c*.53;xt(e,l*.96,2.7,E,0,2,c*.22,a.paint,.12),xt(e,l*.965,.08,E,0,2.3,c*.22,o.id==="ambulance"?a.red:a.chrome,.02);for(const L of[-1,1])if(o.id==="bus")for(let R=0;R<6;R++)xt(e,.035,1.15,.85,L*l*.487,2.85,-.2+R*.9,a.glass,.04);else for(let R=0;R<3;R++){xt(e,.03,1.8,E/3-.18,L*l*.488,1.98,c*.22-E*.34+R*E/3,a.alloy,.025);for(let U=0;U<12;U++)xt(e,.04,.016,E/3-.2,L*l*.5,1.18+U*.12,c*.22-E*.34+R*E/3,a.chrome,.003)}for(const L of[-1,1])xt(e,l*.44,2.3,.025,L*l*.235,2.1,c*.489,a.paint,.025),xt(e,.06,.4,.05,L*.2,1.8,c*.51,a.chrome,.015)}for(const E of[_,w])for(const L of[-1,1])if(s.push(hd(e,o,a,L,E,v)),m||ud(e,o,a,L,E),re(e,[L*l*.18,.1,E],[L*l*.47,-.15,E],.08,a.alloy),re(e,[L*l*.25,.9,E+.2],[L*l*.47,-.12,E-.15],f?.09:.05,a.chrome),f||v){const R=[];for(let U=0;U<=72;U++){const z=U/72*Math.PI*14;R.push(new P(L*l*.34+Math.cos(z)*.13,.08+U/72*.83,E+Math.sin(z)*.13))}He(e,new Or(new yo(R),90,.035,6,!1),a.red)}for(const E of[_,w])re(e,[-l*.46,-.13,E],[l*.46,-.13,E],.13,a.dark),He(e,new gn(.3,20,12),a.dark,0,-.13,E).scale.set(1.2,1,1);re(e,[0,-.28,_],[0,-.28,w],.09,a.chrome),xt(e,l*.57,u?.3:.6,.17,0,p-.43,-x-.055,a.dark,.05);for(let E=0;E<11;E++)xt(e,.055,.47,.035,-l*.25+E*l*.05,p-.43,-x-.155,a.alloy,.009);for(const E of[-1,1]){const L=E*l*.345;xt(e,l*.23,u?.23:.5,.2,L,p-.32,-x-.04,a.trim,.06);for(let R=0;R<2;R++){const U=Vn(e,u?.065:.115,.07,L+(R-.5)*l*.085,p-.31,-x-.16,a.chrome,32);U.rotation.x=Math.PI/2;const z=Vn(e,u?.045:.079,.075,L+(R-.5)*l*.085,p-.31,-x-.18,a.led,24);z.rotation.x=Math.PI/2}xt(e,l*.215,.033,.03,L,p-.085,-x-.165,a.led,.01),xt(e,.05,.3,.035,E*l*.46,p-.29,-x-.15,a.led,.01),xt(e,.19,.58,.12,E*l*.395,p-.25,x+.07,a.tail,.04);for(let R=0;R<4;R++)xt(e,.17,.025,.014,E*l*.395,p-.44+R*.11,x+.137,a.tail,.008)}for(const E of[-x-.15,x+.17]){xt(e,l*.95,.28,.3,0,.25,E,a.dark,.08),xt(e,l*.49,.2,.32,0,.04,E,a.alloy,.045);for(const L of[-1,1])xt(e,l*.15,.22,.36,L*l*.38,.4,E,a.chrome,.04)}xt(e,.65,.19,.025,0,.36,x+.33,a.trim,.01);for(const E of[-1,1]){const L=Vn(e,.13,.75,E*l*.3,.03,x+.07,a.chrome,24);L.rotation.x=Math.PI/2;const R=Vn(e,.095,.012,E*l*.3,.03,x+.46,a.dark,24);R.rotation.x=Math.PI/2}if(f){for(const E of[-1,1])re(e,[E*1.6,p,1.75],[E*1.6,3.03,1.75],.1,a.dark),re(e,[E*1.6,3.03,1.75],[E*1.6,p,3.15],.1,a.dark);re(e,[-1.6,3.03,1.75],[1.6,3.03,1.75],.1,a.dark),xt(e,3.25,.15,.25,0,3.38,-.55,a.dark,.05);for(let E=0;E<16;E++)xt(e,.13,.08,.04,-1.45+E*.19,3.38,-.7,a.led,.02);for(const E of[-1,1])Rr(e,.13,.035,E*.9,.15,-x-.32,a.red)}if(u){for(const E of[-1,1])xt(e,.09,.58,.35,E*l*.31,o.id==="race"?1.8:1.39,x-.6,a.dark,.02);xt(e,l*1.03,.09,.64,0,o.id==="race"?2.1:1.7,x-.6,a.dark,.035),xt(e,l*.97,.07,.5,0,.04,-x,a.dark,.025);for(let E=0;E<6;E++)xt(e,.06,.27,.7,-l*.32+E*l*.128,.07,x-.08,a.dark,.015)}if(["police","ambulance","fire"].includes(o.id)){xt(e,l*.63,.1,.48,0,M.roof+.18,(M.frontTop+M.rearTop)/2,a.dark,.025);for(const E of[-1,1]){const L=new ci({color:E<0?13178406:482240,emissive:E<0?16717093:555519,emissiveIntensity:.2,clearcoat:1,roughness:.15});r.push(xt(e,l*.26,.15,.4,E*l*.17,M.roof+.3,(M.frontTop+M.rearTop)/2,L,.05))}if(o.id==="police")for(const E of[-1,1])xt(e,.035,.24,c*.58,E*l*.448,p*.73,0,a.dark,.01)}if(m)for(const E of[-1,1]){xt(e,1.2,1.15,c*.86,E*l*.5,-.1,0,a.dark,.25);for(let L=0;L<26;L++)for(const R of[-.64,.51])xt(e,1.24,.09,.2,E*l*.5,R,-c*.4+L*c*.8/25,a.alloy,.018)}if(o.id==="dozer"){n.position.set(0,.6,-c*.46),xt(n,l*1.35,1.8,.4,0,0,-1,a.paint,.13),xt(n,l*1.38,.18,.45,0,-.84,-1,a.alloy,.02);for(const E of[-1,1])re(n,[E*l*.32,-.4,1],[E*l*.4,-.4,-1],.14,a.dark)}if(o.id==="excavator"){n.position.set(0,1,-1),re(n,[0,0,0],[0,4,-3],.35,a.paint),re(n,[0,4,-3],[0,1,-6],.25,a.paint),re(n,[.34,1,-1],[.34,3.2,-2.8],.07,a.chrome),xt(n,2,1.4,1.4,0,.8,-6,a.dark,.16);for(let E=0;E<5;E++)xt(n,.2,.25,.5,-.8+E*.4,.13,-6.7,a.alloy,.02)}if(o.id==="dump"){n.position.set(0,1,c*.44),xt(n,l*.95,.25,c*.58,0,0,-c*.26,a.alloy,.04);for(const E of[-1,1]){xt(n,.18,1.3,c*.58,E*l*.47,.65,-c*.26,a.paint,.05);for(let L=0;L<6;L++)xt(n,.1,1.2,.1,E*l*.5,.65,-c*.5+L*c*.095,a.alloy,.012)}xt(n,l,1.3,.18,0,.65,-c*.55,a.paint,.05)}if(o.id==="tow"&&(re(n,[0,1,1],[0,4,3],.24,a.paint),re(n,[0,4,3],[0,1,4.7],.04,a.chrome),Rr(n,.32,.06,0,.9,4.7,a.alloy,Math.PI*1.5)),o.id==="fire"){xt(e,1,.22,c*.7,0,3.45,1,a.dark,.04);for(const E of[-1,1])re(e,[E*.55,3.6,-c*.23],[E*.55,3.6,c*.44],.07,a.chrome);for(let E=0;E<12;E++)xt(e,1.15,.07,.07,0,3.6,-c*.23+E*c*.06,a.chrome,.01);n.position.set(0,3.75,-2),re(n,[0,0,0],[0,.3,-1.4],.11,a.chrome)}for(let E=0;E<18;E++){const L=E%2?1:-1,R=new Ae({color:16724889,roughness:.9,transparent:!0,opacity:.9}),U=He(i,new gn(.24,12,8),R,L*l*.441,.35+E%3*.18,-c*.4+(E/2|0)*c*.1);U.scale.set(.09,1,.9),U.visible=!1,U.castShadow=!1}const S=xt(e,l*.72,.015,c*.21,0,p+.11,T-.4,a.dark,.002);return S.visible=!1,t.userData={chassis:e,wheels:s,special:n,paint:a.paint,lights:r,stains:i,damage:S},t}function Oy(o){const t=new qt,e=new qt,n=new qt,i=new qt,s=[],r=[];t.add(e),e.add(n,i);const a=Wr(o.color),l=o.width,c=o.length,h=c*.53,f=["sport","race","rare-sport"].includes(o.id),u=o.id==="race",d=["suv","secret-suv"].includes(o.id),m=f?1.32:d?2.05:1.62,v=f?.74:d?1.18:.92;cd(e,o,a.paint);for(const R of[-1,1]){const U=-c*.21,z=c*.34,F=[[R*l*.438,.18,U],[R*l*.438,.18,z],[R*l*.395,v,z],[R*l*.395,v,U]];R>0&&F.reverse(),ai(e,F,a.paint);for(const W of[-c*.32,c*.32]){const k=He(e,new _n(o.wheel*1.04,o.wheel*1.04,.1,48),a.trim,R*l*.445,-.15,W);k.rotation.z=Math.PI/2}}xt(e,l*.79,.15,c*.86,0,-.27,0,a.dark,.05);const g=-c*.21,p=c*.34,x=-c*.035,y=c*.16,_=l*.395,w=l*(u?.29:.32);ai(e,[[-_,v,g],[_,v,g],[w,m,x],[-w,m,x]],a.glass),ai(e,[[_,v,p],[-_,v,p],[-w,m,y],[w,m,y]],a.glass);const b=[];for(let R=0;R<=16;R++){const U=R/16;b.push(new P(0,m+.045+Math.sin(U*Math.PI)*.065,x+(y-x)*U))}for(let R=1;R<b.length;R++){const U=b[R-1],z=b[R];ai(e,[[-w,U.y,U.z],[-w,z.y,z.z],[w,z.y,z.z],[w,U.y,U.z]],a.paint)}for(const R of[-1,1]){const U=[R*_,v,g],z=[R*w,m,x],F=[R*_,v,p],W=[R*w,m,y];ai(e,[U,F,W,z],a.glass),re(e,U,z,.037,a.paint),re(e,F,W,.05,a.paint),re(e,U,F,.026,a.trim),re(e,z,W,.035,a.paint);const k=c*.09;re(e,[R*_,v,k],[R*w,m,k],.048,a.trim);for(const it of[g+.15,p-.18])re(e,[R*l*.438,.25,it],[R*_,v-.04,it],.009,a.trim);xt(e,.035,.045,.25,R*l*.439,v-.1,c*.055,a.chrome,.012),xt(e,.13,.13,c*.57,R*l*.445,.12,0,a.dark,.035),re(e,[R*_,v+.07,g+.1],[R*(_+.25),v+.05,g+.02],.022,a.dark),xt(e,.26,.14,.36,R*(_+.29),v+.09,g,a.paint,.055),xt(e,.02,.09,.23,R*(_+.43),v+.095,g+.04,a.chrome,.02);const j=R*l*.27,at=f?.41:.64;xt(e,l*.23,.18,.14,j,at,-h+.06,a.dark,.05),xt(e,l*.205,.021,.021,j,at+.061,-h-.012,a.led,.008);for(let it=0;it<3;it++){const Ht=He(e,new gn(.048,20,12),a.led,j+(it-1)*l*.057,at-.015,-h-.009);Ht.scale.z=.25}xt(e,l*.24,.13,.09,R*l*.31,v-.14,h-.04,a.tail,.04),xt(e,l*.215,.025,.015,R*l*.31,v-.095,h+.012,a.tail,.005);for(const it of[-c*.32,c*.32])s.push(hd(e,o,a,R,it,d)),ud(e,o,a,R,it),re(e,[R*l*.18,0,it],[R*l*.46,-.15,it],.055,a.alloy);const dt=He(e,new _n(.095,.095,.42,24),a.chrome,R*l*.28,.015,h-.1);dt.rotation.x=Math.PI/2,He(e,new _o(.073,24),a.dark,R*l*.28,.015,h+.12)}xt(e,l*.77,.38,.45,0,.27,-h+.17,a.paint,.11),xt(e,l*.54,.21,.1,0,.25,-h-.08,a.dark,.04);for(let R=0;R<13;R++)xt(e,.018,.18,.018,-l*.24+R*l*.04,.25,-h-.14,a.alloy,.004);xt(e,l*.88,.085,.3,0,.05,-h+.06,a.dark,.025),xt(e,l*.83,.15,.22,0,.08,h-.03,a.dark,.04);for(let R=0;R<5;R++)xt(e,.03,.15,.36,(R-2)*l*.12,.05,h-.1,a.dark,.01);const T=He(e,new _o(.055,24),a.chrome,0,f?.7:.89,-h-.01);if(T.rotation.x=-.18,f){const R=u?1.36:.99;for(const U of[-1,1])xt(e,.065,.35,.16,U*l*.29,R-.18,c*.43,a.dark,.015);if(xt(e,l*(u?1:.83),.055,.42,0,R,c*.43,a.dark,.02),u)for(const U of[-1,1])xt(e,.045,.22,.45,U*l*.5,R+.07,c*.43,a.dark,.018)}if(o.id==="police")for(const R of[-1,1]){xt(e,.021,.17,c*.47,R*l*.44,.48,0,a.dark,.005);const U=new ci({color:R<0?12390440:547016,emissive:R<0?16717611:1475583,emissiveIntensity:.2,roughness:.18,clearcoat:1});r.push(xt(e,l*.24,.12,.32,R*l*.15,m+.16,0,U,.03))}const D=document.createElement("canvas");D.width=256,D.height=96;const M=D.getContext("2d");M.fillStyle="#e0e7df",M.fillRect(0,0,256,96),M.fillStyle="#245343",M.font="bold 42px Arial",M.textAlign="center",M.fillText(u?"NW • 300":"NW • 200",128,65);const S=new $i(D);S.colorSpace=Ve;const E=new Ae({map:S,roughness:.6});He(e,new Dn(.58,.22),E,0,.36,h+.089);for(let R=0;R<14;R++){const U=He(i,new gn(.2,12,8),new Ae({color:16724889,transparent:!0,opacity:0}),(R%2?1:-1)*l*.443,.3+R%3*.15,-c*.36+Math.floor(R/2)*c*.1);U.scale.set(.05,1,1),U.visible=!1}const L=xt(e,l*.45,.012,c*.12,0,v-.015,-c*.35,a.dark,.002);return L.visible=!1,t.userData={chassis:e,wheels:s,special:n,stains:i,lights:r,damage:L,paint:a.paint},t}function ke(o,t,e,n=0,i=0,s=0){const r=new Qt(t,e);return r.position.set(n,i,s),r.castShadow=!0,r.receiveShadow=!0,o.add(r),r}function Be(o,t,e,n,i){const s=new P(...t),r=new P(...e),a=r.clone().sub(s),l=ke(o,new _n(n,n,a.length(),16),i);return l.position.copy(s.add(r).multiplyScalar(.5)),l.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),l}function Vi(o,t,e,n=0){const i=new zr(t.map(([s,r])=>new nt(r,s)),80);return i.rotateX(Math.PI/2),ke(o,i,e,0,n)}function pr(o,t,e){const n=new _e;return n.setAttribute("position",new Bt(t.flat(),3)),n.setAttribute("uv",new Bt([0,0,1,0,1,1,0,1],2)),n.setIndex([0,1,2,0,2,3]),n.computeVertexNormals(),ke(o,n,e)}function Mi(o,t,e,n=1){const i=[],s=[],r=[];for(let c=0;c<t.length;c++){const[h,f,u,d,m]=t[c];for(let v=0;v<=64;v++){const g=v<=32?v/32:2-v/32,p=5*m*(.2969*Math.sqrt(g)-.126*g-.3516*g*g+.2843*g**3-.1036*g**4);i.push(h*n,f+p*(v<=32?1:-1),u+g*d),r.push(g,c/(t.length-1))}if(c)for(let v=0;v<64;v++){const g=(c-1)*65+v,p=c*65+v;s.push(g,p,g+1,p,p+1,g+1)}}const l=new _e;return l.setAttribute("position",new Bt(i,3)),l.setAttribute("uv",new Bt(r,2)),l.setIndex(s),l.computeVertexNormals(),e.side=We,ke(o,l,e)}function tu(o,t="#174f78"){const e=document.createElement("canvas");e.width=1024,e.height=128;const n=e.getContext("2d");n.font="600 65px Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle=t,n.fillText(o,512,64);const i=new $i(e);return i.colorSpace=Ve,i.anisotropy=8,new Ae({map:i,transparent:!0,roughness:.4,depthWrite:!1,side:We})}function eu(o,t,e,n,i,s,r){const a=[],l=[],c=[],h=[[-11.8,.27],[-11.3,.61],[-10.6,.94],[-9.5,1.2],[-8,1.32]];for(let u=0;u<=8;u++)for(let d=0;d<=8;d++){const m=n+(i-n)*u/8,v=s+(r-s)*d/8;let g=1.32;for(let p=1;p<h.length;p++)if(m<=h[p][0]){const x=h[p-1],y=h[p];g=x[1]+(y[1]-x[1])*(m-x[0])/(y[0]-x[0]);break}if(g+=.027,a.push(e*Math.sin(v)*g,1.6+Math.cos(v)*g,m),l.push(u/8,d/8),u&&d){const p=u*9+d,x=p-9;c.push(x-1,p-1,x,x,p-1,p)}}const f=new _e;f.setAttribute("position",new Bt(a,3)),f.setAttribute("uv",new Bt(l,2)),f.setIndex(c),f.computeVertexNormals(),ke(o,f,t)}function By(o){const t=new qt,e=new qt,n=new qt,i=new qt,s=[],r=[],a=[];t.add(e),e.add(n,i);const l=Wr(o.color),c=new ci({color:1195109,metalness:.55,roughness:.23,clearcoat:1,side:We}),h=l.alloy;if(o.kind==="air"){Vi(e,[[-12,0],[-11.8,.27],[-11.3,.61],[-10.6,.94],[-9.5,1.2],[-8,1.32],[5.8,1.32],[7.5,1.17],[9,.91],[10.5,.56],[11.8,.12],[12,0]],l.paint,1.6),Vi(e,[[-10.3,.99],[-9.5,1.205],[-8,1.325],[5.8,1.325],[7.5,1.175],[9,.915]],c,1.6).scale.y=.62;for(const d of[-1,1]){eu(e,l.glass,d,-10.8,-9.8,.075,.66),eu(e,l.glass,d,-10.42,-9.08,.71,1.18),pr(e,[[d*.06,2.51,-10.08],[d*.68,2.4,-9.99],[d*.86,2.06,-10.29],[d*.06,2.13,-10.65]],l.glass),pr(e,[[d*.73,2.4,-9.95],[d*1.14,2.26,-9.25],[d*1.17,1.97,-9.45],[d*.91,2.06,-10.23]],l.glass);for(let y=0;y<22;y++){const _=-7.2+y*.56,w=_<5.8?1.32:1.3-(_-5.8)*.11;ke(e,new gn(1,20,12),l.glass,d*(w*.952+.017),2.03,_).scale.set(.035,.195,.128);const T=ke(e,new Xn(.17,.018,6,24),h,d*(w*.959+.019),2.03,_);T.rotation.y=Math.PI/2,T.scale.set(.8,1.15,1)}for(const y of[-8.3,6.1])Be(e,[d*1.296,.93,y-.23],[d*1.296,2.33,y-.23],.012,l.trim),Be(e,[d*1.296,.93,y+.23],[d*1.296,2.33,y+.23],.012,l.trim),Be(e,[d*1.296,2.33,y-.23],[d*1.296,2.33,y+.23],.012,l.trim),Be(e,[d*1.32,1.54,y-.08],[d*1.32,1.54,y+.09],.026,h);const m=ke(e,new Dn(7,.72),tu("NORIMONO AIR"),d*1.283,2.42,-2.1);m.rotation.y=d*Math.PI/2,Mi(e,[[.9,1.1,-3,6.1,.58],[3,1.18,-2.7,5,.43],[7,1.5,-.7,3.1,.27],[12.7,2,2.1,1.25,.11]],l.paint,d),Mi(e,[[12.6,2,2.1,1.25,.11],[13.1,3.2,2.45,.75,.07],[13.15,3.65,2.65,.25,.04]],c,d),Mi(e,[[.3,2.12,7.4,3.8,.23],[2.8,2.32,8.6,2.3,.15],[5,2.6,10.1,.8,.07]],l.paint,d),Be(e,[d*1.6,1.15,-2.92],[d*7,1.51,-.67],.035,h),Be(e,[d*7,1.51,-.67],[d*12.65,2.02,2.1],.024,h);for(const y of[3.1,4.8,6.5,8.2]){const _=-2.7+(y-3)*.41;Be(e,[d*y,1.31+(y-3)*.08,_+2],[d*(y+1.25),1.41+(y-3)*.08,_+2.4],.012,l.trim),ke(e,new gn(1,24,16),l.paint,d*y,.99+(y-3)*.08,_+3).scale.set(.14,.16,.9)}const v=new qt;v.position.set(d*4.1,.36,-1.6),e.add(v),Vi(v,[[-1.72,.78],[-1.78,.88],[-1.58,1.01],[-1.1,1.02],[.6,.88],[1.55,.67],[1.6,.53],[.9,.54],[-1.25,.72],[-1.72,.78]],l.paint),ke(v,new Xn(.82,.085,12,64),l.chrome,0,0,-1.69),Vi(v,[[-1.6,.735],[-.65,.64]],l.dark);const g=new qt;g.position.z=-1.36,v.add(g),a.push(g);for(let y=0;y<24;y++){const _=y*Math.PI/12,w=pr(g,[[.18,0,0],[.7,.045,.1],[.69,.18,.15],[.17,.07,0]],h);w.rotation.z=_}const p=ke(v,new Ur(.19,.49,32),l.chrome,0,0,-1.57);p.rotation.x=-Math.PI/2,Vi(v,[[.9,.47],[1.65,.33],[1.88,.16]],l.dark),Be(e,[d*4.1,1.45,-.2],[d*4.1,.9,-.1],.2,h);const x=ke(e,new gn(.08,16,12),new Ae({color:d<0?15016498:3604377,emissive:d<0?15016498:3604377,emissiveIntensity:2}),d*13.1,2.5,2.7);r.push(x)}const u=new qt;e.add(u),Mi(u,[[0,0,7,4.5,.3],[2.7,0,8.5,2.7,.2],[5.1,0,10.5,.95,.08]],c),u.rotation.z=Math.PI/2,u.position.y=2.35;for(const d of[-1,1]){const m=ke(e,new Dn(1.8,1.1),tu("NW","#ffffff"),d*.12,5.65,10.7);m.rotation.y=d*Math.PI/2}for(const[d,m]of[[0,-7.9],[-1.5,1.3],[1.5,1.3]]){Be(e,[d,.8,m],[d,-.12,m],.095,l.chrome),Be(e,[d,.7,m+.5],[d,-.12,m],.045,h);const v=new qt,g=new qt;v.position.set(d,-.15,m),v.add(g),e.add(v);for(const p of[-1,1]){const x=ke(g,new Xn(.44,.14,12,40),l.rubber,p*.22,0,0);x.rotation.y=Math.PI/2;const y=ke(g,new _n(.25,.25,.11,28),h,p*.28,0,0);y.rotation.z=Math.PI/2}s.push({pivot:v,roll:g,front:m<0})}}else{Vi(e,[[-4.9,0],[-4.6,.65],[-3.5,1.35],[-1.5,1.6],[.4,1.5],[2,1.12],[3,.7],[3.5,.25]],l.paint,1.7),ke(e,new gn(1,48,32),l.glass,0,2,-3.2).scale.set(1.27,1.09,1.55),Be(e,[0,1.3,-4.67],[0,2.95,-3.52],.045,l.paint);for(const v of[-1,1]){pr(e,[[v*1.32,1.7,-2.45],[v*1.49,1.7,-.2],[v*1.39,2.65,-.2],[v*1.19,2.85,-2.3]],l.glass),Be(e,[v*1.49,1.55,-.1],[v*1.37,2.8,-.1],.035,l.trim),Be(e,[v*1.5,1.4,.1],[v*1.5,1.4,.45],.045,l.chrome),Be(e,[v*1.7,-.53,-3.4],[v*1.7,-.53,2.4],.12,h),Be(e,[v*1.7,-.53,-3.4],[v*1.7,-.25,-4],.12,h);for(const g of[-2,1.5])Be(e,[v*.85,.5,g],[v*1.7,-.53,g],.09,h)}Vi(e,[[2.4,.65],[4.5,.43],[7,.27],[9,.15]],l.paint,1.8);const d=new qt;e.add(d),Mi(d,[[0,0,7.4,1.6,.13],[2.8,0,8.5,.9,.09]],c),d.rotation.z=Math.PI/2,d.position.y=1.8;for(const v of[-1,1])Mi(e,[[0,1.8,6.7,1.6,.15],[2.1,1.8,7.3,.65,.05]],l.paint,v);const m=new qt;m.position.set(.28,2.4,8.5),m.rotation.z=Math.PI/2,e.add(m),a.push(m),m.userData.axis="y";for(let v=0;v<4;v++){const g=new qt;g.rotation.y=v*Math.PI/2,m.add(g),Mi(g,[[.08,0,0,.2,.03],[1.2,0,.08,.22,.025]],l.dark)}n.position.set(0,3.85,-.25),Be(e,[0,2.7,-.25],[0,4.2,-.25],.14,h);for(let v=0;v<4;v++){const g=new qt;g.rotation.y=v*Math.PI/2,n.add(g),Mi(g,[[.35,0,0,.3,.055],[2,.05,-.1,.5,.05],[8.2,.13,.1,.4,.025],[8.6,.15,.35,.22,.015]],l.dark),Be(n,[0,-.3,0],[Math.cos(v*Math.PI/2)*.7,0,Math.sin(v*Math.PI/2)*.7],.055,h)}for(const v of[-1,1]){const g=ke(e,new _n(.22,.28,.9,32),h,v*.56,3.11,1.35);g.rotation.x=Math.PI/2}}const f=ke(e,new gn(.35,12,8),l.dark,0,2,-2);return f.visible=!1,t.userData={chassis:e,wheels:s,special:n,paint:l.paint,lights:r,stains:i,damage:f,fanRotors:a},t}function ky(o){if(o.kind==="air"||o.kind==="heli")return By(o);if(["car","police","sport","race","rare-sport","suv","secret-suv"].includes(o.id))return Oy(o);if(o.kind==="ground")return zy(o);const t=new qt,e=new qt;t.add(e);const n=[],i=new qt;e.add(i);const s=Wr(o.color),r=s.paint,a=Zt(9477026,.85,.28),l=Zt(1515559,.7,.38),c=Zt(1513754,0,.92),h=s.glass,f=o.width,u=o.length,d=o.wheel,m=o.id==="monster",v=["fire","ambulance","tow","dump","bus"].includes(o.id),g=["dozer","excavator"].includes(o.id),p=Q(e,f,.85,u,0,.7,0,o.color,r);if(p.geometry=new Os(f,.85,u,2,.2),p.castShadow=!0,Q(e,f*.78,.35,u*.9,0,-.05,0,0,l),o.kind==="water"){p.scale.set(.92,.65,.8),he(e,1,.6,2,0,-.4,0,o.color,8,r).scale.set(f/2,1,u/2),Q(e,f*.72,.3,u*.55,0,1,1,0,Zt(15129012)),Q(e,f*.65,1.2,2.5,0,1.4,0,0,h);for(const b of[-1,1])we(e,new P(b*f*.43,.9,-u*.3),new P(b*f*.43,.9,u*.35),.07,13160660);Q(e,1,1.8,.9,0,0,u*.45,0,l)}else if(o.kind==="air"||o.kind==="heli")if(p.scale.set(.65,.9,.8),Tn(e,1,0,1,0,o.color,r).scale.set(f*.52,1.5,u*.44),Tn(e,1,0,1.8,-2,0,h).scale.set(f*.46,1.15,2.3),o.kind==="air"){const T=Q(e,19,.22,2.2,0,.9,.3,0,r);T.rotation.z=.015,Q(e,7,.18,1.7,0,1.6,u*.38,0,r),Q(e,.2,2.8,2,0,2.4,u*.36,0,r),i.position.set(0,1,-u*.45),Q(i,.18,4.2,.15,0,0,0,0,l)}else{Q(e,.7,.65,8,0,1,6,0,r),Q(e,.2,2.5,1.3,0,2,9,0,r),i.position.set(0,3,0),he(i,.2,.2,1.2,0,.2,0,0,8,a),Q(i,17,.12,.45,0,.8,0,0,l),Q(i,.45,.12,17,0,.8,0,0,l);for(const T of[-1,1])we(e,new P(T*1.6,-.6,-3),new P(T*1.6,-.6,3),.14,11384249),we(e,new P(T*1.6,-.6,-2),new P(T*.7,.5,-2),.1,11384249)}else{const w=v?-u*.23:g?u*.12:-.25,b=v?u*.28:u*.44,T=m?2.1:v?2.6:1.55,D=Q(e,f*.84,T,b,0,1.2+T/2,w,0,r);D.geometry=new Os(f*.84,T,b,2,.2),Q(e,f*.77,T*.65,.08,0,1.4+T*.6,w-b/2-.045,0,h),Q(e,f*.76,T*.6,.08,0,1.5+T*.5,w+b/2+.05,0,h);for(const M of[-1,1])Q(e,.07,T*.62,b*.75,M*f*.425,1.4+T*.55,w,0,h),Q(e,.09,.045,b*.92,M*f*.43,1.32,w,0,l),Q(e,.13,.09,.42,M*f*.435,1.55,w+.6,0,a),we(e,new P(M*f*.43,2,w-b*.42),new P(M*f*.61,2,w-b*.48),.055,7502464),Q(e,.25,.4,.6,M*f*.62,2,w-b*.48,0,a),Q(e,.25,.3,u*.8,M*f*.52,.25,0,0,a),he(e,.14,.14,1.8,M*f*.35,.3,u*.46,0,10,a).rotation.x=Math.PI/2;if(v&&o.id!=="tow"&&o.id!=="dump"&&(Q(e,f*.94,2.4,u*.52,0,1.8,u*.2,0,r),o.id==="bus"))for(let M=0;M<5;M++)for(const S of[-1,1])Q(e,.07,1.3,1.2,S*f*.48,2.5,-1+M*1.6,0,h);for(const M of[-u*.32,u*.32])for(const S of[-1,1]){const E=new qt;E.position.set(S*(f*.5+.15),-.15,M),e.add(E);const L=new qt;E.add(L);const R=he(L,d,d,d*.85,0,0,0,0,24,c);R.rotation.z=Math.PI/2,R.castShadow=!0;for(let F=0;F<(m?20:12);F++){const W=F*Math.PI*2/(m?20:12),k=Q(L,d*.84,.1,d*.19,0,Math.sin(W)*d,Math.cos(W)*d,0,c);k.rotation.x=-W}const U=he(L,d*.56,d*.56,.12,S*d*.46,0,0,0,16,a);U.rotation.z=Math.PI/2;const z=he(L,d*.32,d*.32,.14,S*d*.53,0,0,0,12,l);z.rotation.z=Math.PI/2;for(let F=0;F<6;F++){const W=F*Math.PI/3,k=Q(L,.15,d*.62,.12,S*d*.54,Math.sin(W)*d*.23,Math.cos(W)*d*.23,0,a);k.rotation.x=-W}if(Q(e,.5,.25,d*2.45,S*f*.51,d*.75,M,0,r),we(e,new P(S*f*.28,.4,M),new P(S*f*.52,-.2,M),m?.15:.08,12437195),m){const F=new Qt(new Xn(.22,.065,5,10),a);for(let W=0;W<6;W++){const k=F.clone();k.rotation.x=Math.PI/2,k.position.set(S*f*.4,.2+W*.16,M),e.add(k)}}n.push({pivot:E,roll:L,front:M<0})}if(g)for(const M of[-1,1]){Q(e,1.3,1.3,u*.85,M*f*.5,-.2,0,0,c);for(let S=0;S<12;S++)Q(e,1.35,.14,.25,M*f*.5,.5,-u*.39+S*u*.071,0,a)}}for(const w of[-1,1])Q(e,f*.19,.28,.12,w*f*.31,1,-u/2-.07,0,Zt(15071231,.2,.15)),Q(e,f*.19,.24,.12,w*f*.34,.95,u/2+.07,0,Zt(16720932));for(let w=0;w<6;w++)Q(e,f*.4,.045,.13,0,.54+w*.1,-u/2-.1,0,a);for(const w of[-u/2-.15,u/2+.15])Q(e,f*1.03,.3,.32,0,.22,w,0,a);const x=[];if(["police","ambulance","fire"].includes(o.id)){for(const w of[-1,1]){const b=new Ae({color:w<0?16721721:1477887,emissive:w<0?16715808:415231,emissiveIntensity:.3});x.push(Q(e,1,.25,.55,w*.65,3.9,-1,0,b))}o.id==="ambulance"&&(Q(e,.08,.3,1.6,f*.48,2,2,14558510),Q(e,.08,1.4,.3,f*.48,2,2,14558510))}if(m){for(let w=-2;w<=2;w++)Q(e,.5,.24,.25,w*.72,3.5,-1.8,0,Zt(16318463));for(const w of[-1,1])we(e,new P(w*1.65,1.2,1.7),new P(w*1.65,3.4,1.7),.13,2699834);Q(e,3.4,.18,.2,0,3.4,1.7,0,l),Q(e,2.5,.4,.65,0,-.2,-u*.4,0,a)}if(["race","sport"].includes(o.id)){Q(e,f*1.2,.15,1,0,2,u*.42,0,l);for(const w of[-1,1])Q(e,.15,.8,.25,w*f*.32,1.6,u*.42,0,l);Q(e,f*1.1,.13,.6,0,.15,-u*.5,0,l)}if(o.id==="dozer"&&(i.position.set(0,.6,-u*.46),Q(i,f*1.35,1.8,.4,0,0,-1,0,r)),o.id==="excavator"&&(i.position.set(0,1,-1),we(i,new P(0,0,0),new P(0,4,-3),.4,o.color),we(i,new P(0,4,-3),new P(0,1,-6),.3,o.color),Q(i,2,1.4,1.4,0,.8,-6,0,a)),o.id==="dump"){i.position.set(0,1,u*.44),Q(i,f*.95,.25,u*.58,0,0,-u*.26,0,r);for(const w of[-1,1])Q(i,.18,1.3,u*.58,w*f*.47,.65,-u*.26,0,r);Q(i,f,1.3,.18,0,.65,-u*.55,0,r)}if(o.id==="tow"&&(we(i,new P(0,1,1),new P(0,4,3),.3,o.color),we(i,new P(0,4,3),new P(0,1,4.7),.08,3423040)),o.id==="fire"){Q(e,1,.35,u*.7,0,3.3,1,0,a);for(let w=0;w<9;w++)Q(e,1.4,.1,.13,0,3.55,-2+w*.7,0,a);i.position.set(0,3.6,-2),he(i,.15,.2,2,0,.1,-.6,0,12,a).rotation.x=Math.PI/2}const y=new qt;e.add(y);for(let w=0;w<14;w++){const b=w%2?1:-1,T=Tn(y,.3,b*f*.51,.35+w%3*.22,-u*.4+(w/2|0)*u*.12,16724889,new Ae({color:16724889,roughness:.95,transparent:!0,opacity:.9}));T.scale.set(.15,1,.9),T.visible=!1}const _=Q(e,f*.85,.015,u*.64,0,1.14,0,4340015);return _.visible=!1,t.userData={chassis:e,wheels:n,special:i,paint:r,lights:x,stains:y,damage:_},t}const mr=(o,t,e)=>Math.max(t,Math.min(e,o));class Ba{constructor(t,e,n=e.x,i=e.z,s=2){if(this.game=t,this.config=e,this.mesh=ky(e),Ly(this.mesh,e),t.scene.add(this.mesh),this.ride=e.kind==="water"?1:e.wheel+.25,this.body=t.physics.box(n,s+this.ride,i,e.width,.9,e.length,e.mass),this.body.collisionFilterGroup=2,this.body.collisionFilterMask=-13,this.body.fixedRotation=!0,this.body.updateMassProperties(),this.body.linearDamping=0,this.accessories=[],["dozer","excavator","dump"].includes(e.id)){const r=e.id==="dozer"?[[0,0,-1,e.width*1.35,1.8,.4]]:e.id==="excavator"?[[0,.8,-6,2,1.4,1.4]]:[[0,0,-e.length*.26,e.width,.25,e.length*.58],[-e.width*.47,.65,-e.length*.26,.18,1.3,e.length*.58],[e.width*.47,.65,-e.length*.26,.18,1.3,e.length*.58],[0,.65,-e.length*.55,e.width,1.3,.18]];for(const[a,l,c,h,f,u]of r){const d=t.physics.box(n,s,i,h,f,u);d.type=Ct.KINEMATIC,d.collisionFilterGroup=8,d.collisionFilterMask=5,this.accessories.push({body:d,local:new P(a,l,c)})}}this.hp=100,this.yaw=0,this.speed=0,this.boost=0,this.park=!1,this.parking=!1,this.specialOn=["police","ambulance","fire"].includes(e.id),this.lastSpecial=!1,this.lastJump=!1,this.surfacePitch=0,this.grounded=!1,this.safe=new P(n,s+this.ride,i),this.waterTime=0,this.flipTime=0,this.hitCooldown=0,this.dirty=0,this.paintColor=0,this.paintTime=0,this.washTime=0,this.ray=new ji,this.body.addEventListener("collide",r=>{const a=Math.abs(r.contact.getImpactVelocityAlongNormal());a>8&&this.hitCooldown<=0&&this===t.active&&(this.damage((a-7)*1.8),this.hitCooldown=.7,t.audio.effect("hit"))}),this.sync(0,{})}update(t,e,n){const i=this.body,s=this.config;this.megaBoost=Math.max(0,(this.megaBoost||0)-t),this.megaFlight&&(this.megaFlight.elapsed+=t),this.jumpTime=Math.max(0,(this.jumpTime||0)-t),this.hitCooldown-=t,this.boost=Math.max(0,this.boost-t);const r=i.position;if(this.speed=-i.velocity.x*Math.sin(this.yaw)-i.velocity.z*Math.cos(this.yaw),!n){this.ray.reset(),this.game.physics.world.raycastClosest(new C(r.x,r.y+1.4,r.z),new C(r.x,r.y-this.ride-2,r.z),{collisionFilterMask:5,skipBackfaces:!0},this.ray),this.ray.hasHit&&(r.y=this.ray.hitPointWorld.y+this.ride,i.velocity.y=0,i.force.y+=s.mass*24),s.kind==="water"&&this.game.world.isWater(r.x,r.z)&&(r.y=.8,i.velocity.y=0,i.force.y=s.mass*24),i.velocity.x*=.94,i.velocity.z*=.94,this.sync(t,{});return}(e.accel||e.brake||e.special||e.down||e.steer||e.jump)&&this.body.wakeUp();let a=e.accel||0,l=e.brake||0,c=e.steer||0;const h=!!e.special;if(this.megaFlight&&(a=1),e.jump&&!this.lastJump&&this.grounded&&this.hp>0&&(i.velocity.y=13,this.jumpTime=.4,this.grounded=!1,this.game.audio.effect("jump")),this.lastJump=!!e.jump,h&&!this.lastSpecial&&this.activate(),this.lastSpecial=h,this.hp<=0&&(a=0,l=1),this.parking&&(a=0,l=1,Math.abs(this.speed)<.6&&(this.parking=!1,this.park=!0,this.parkPosition=i.position.clone())),this.park){i.velocity.setZero(),i.angularVelocity.setZero(),this.parkPosition&&i.position.copy(this.parkPosition),this.sync(t,e);return}this.ray.reset(),this.game.physics.world.raycastClosest(new C(r.x,r.y+1.4,r.z),new C(r.x,r.y-this.ride-2,r.z),{collisionFilterMask:5,skipBackfaces:!0},this.ray);const f=this.game.world.isWater(r.x,r.z),u=s.kind==="water";s.kind==="air"||s.kind;let d=this.ray.hasHit?this.ray.hitPointWorld.y:-20;if(u&&f&&(d=0),this.grounded=r.y<=d+this.ride+.85&&i.velocity.y-(this.ray.hasHit&&this.ray.hitNormalWorld.y>.4?(this.ray.hitNormalWorld.x*Math.sin(this.yaw)+this.ray.hitNormalWorld.z*Math.cos(this.yaw))*this.speed/this.ray.hitNormalWorld.y:0)<7,this.megaFlight&&this.megaFlight.elapsed<this.megaFlight.duration-.08?this.grounded=!1:this.megaFlight&&this.grounded&&(this.megaFlight=null,this.megaBoost=0),s.kind==="air"&&a&&!l&&this.speed>12&&(this.grounded=!1),s.kind==="heli"&&h&&(this.grounded=!1),this.grounded){const b=d+this.ride;r.y=b,i.force.y+=s.mass*24;const T=this.ray.hitNormalWorld;i.velocity.y=T.y>.4?(T.x*Math.sin(this.yaw)+T.z*Math.cos(this.yaw))*this.speed/T.y:0;const D=new ji,M=new ji,S=s.length*.29;for(const[E,L]of[[D,1],[M,-1]]){const R=r.x-Math.sin(this.yaw)*S*L,U=r.z-Math.cos(this.yaw)*S*L;this.game.physics.world.raycastClosest(new C(R,r.y+2,U),new C(R,r.y-this.ride-3,U),{collisionFilterMask:5,skipBackfaces:!0},E)}D.hasHit&&M.hasHit&&Math.abs(D.hitPointWorld.y-M.hitPointWorld.y)<S*1.5?this.surfacePitch=Math.atan2(D.hitPointWorld.y-M.hitPointWorld.y,S*2):this.surfacePitch=Math.atan2(T.x*Math.sin(this.yaw)+T.z*Math.cos(this.yaw),T.y)}else this.surfacePitch*=Math.exp(-t*3);u&&f&&this.jumpTime<=0&&r.y<1.7&&(i.velocity.y=(.8+Math.sin(this.game.time*2)*.12-r.y)*5,this.grounded=!0);let m=s.max/3.6*Math.max(this.boost>0?1.65:1,this.megaBoost>0?3:1);f&&!u&&r.y<4&&(m*=s.id==="monster"?.65:.18),u&&!f&&(m=1.5),this.hp<15&&(m*=.4);let v=l?this.speed>1?0:-m*.36:a?m:0;const g=l&&this.speed>0?32:a?m*.6:9;let p=this.speed+mr(v-this.speed,-g*t,g*t);(this.hp<=0||this.parking&&this.speed<=1)&&(p=0),this.yaw-=c*mr(Math.abs(p)/5,0,1)*(1.65/(1+Math.abs(p)*.045))*t*(p<0?-1:1);const x=this.grounded?1-Math.exp(-t*(r.y>130?4:10)):.07,y=-Math.sin(this.yaw)*p,_=-Math.cos(this.yaw)*p,w=(i.velocity.x*Math.cos(this.yaw)-i.velocity.z*Math.sin(this.yaw))*(1-x);if(i.velocity.x=y+Math.cos(this.yaw)*w,i.velocity.z=_-Math.sin(this.yaw)*w,s.kind==="air"&&!this.megaFlight&&Math.abs(p)>10){const b=e.down||l?-9:a?mr((p-10)*.65,0,13):-3;i.force.y+=s.mass*24,i.velocity.y+=(b-i.velocity.y)*t*2}if(s.kind==="heli"&&!this.megaFlight){const b=e.down?-8:h?10:r.y>5?0:-2;i.force.y+=s.mass*24,i.velocity.y+=(b-i.velocity.y)*t*4}if(this.megaFlight&&!this.grounded&&(i.force.y+=s.mass*(24-this.megaFlight.gravity)),r.y>300&&!this.megaFlight&&(i.velocity.y=Math.min(i.velocity.y,-3)),i.quaternion.setFromEuler(this.surfacePitch,this.yaw,0,"YXZ"),i.angularVelocity.setZero(),f&&!u&&r.y<1.4?(this.waterTime+=t,this.clean(t*.15),this.waterTime>3&&this.respawn()):this.waterTime=0,!f&&this.grounded&&d<80&&this.game.time%1<t&&this.safe.set(r.x,r.y,r.z),(Math.abs(r.x)>1e3||Math.abs(r.z)>1e3||r.y<-12)&&this.respawn(),this.towed){this.towed.body.wakeUp();const b=this.towed.body.position,T=new C(r.x+Math.sin(this.yaw)*12,r.y,r.z+Math.cos(this.yaw)*12);this.towed.body.velocity.x=(T.x-b.x)*3,this.towed.body.velocity.z=(T.z-b.z)*3,this.towed.yaw=this.yaw}s.id==="fire"&&h&&this.game.gimmicks.water(this,t),this.dirty=Math.max(0,this.dirty-t*5e-4),this.paintTime=Math.max(0,this.paintTime-t),this.sync(t,e)}sync(t,e){this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion);const n=this.mesh.userData,i=(e.steer||0)*Math.min(Math.abs(this.speed)*.009,.13);n.chassis.rotation.z=xn.lerp(n.chassis.rotation.z,i,.12),n.chassis.rotation.x=xn.lerp(n.chassis.rotation.x,e.brake?.07:e.accel?-.045:0,.1);for(const s of n.wheels)s.roll.rotation.x-=this.speed*t/this.config.wheel,s.front&&(s.pivot.rotation.y=-(e.steer||0)*.5),s.pivot.position.y=xn.lerp(s.pivot.position.y,this.grounded?-.15:-.45,.15);for(const s of n.fanRotors||[])s.rotation[s.userData.axis||"z"]+=t*(this===this.game.active?38:1);this.config.kind==="heli"&&(n.special.rotation.y+=t*(this===this.game.active?32:1)),["dozer","excavator","dump"].includes(this.config.id)&&(n.special.rotation.x=xn.lerp(n.special.rotation.x,this.specialOn?-.7:0,.05));for(let s=0;s<n.lights.length;s++){const r=this.specialOn&&Math.sin(this.game.time*15+s*Math.PI)>.1;n.lights[s].material.emissiveIntensity=r?9:.12,n.lights[s].userData.flare&&(n.lights[s].userData.flare.material.opacity=r?.85:0)}n.emergencyLight&&(n.emergencyLight.intensity=this===this.game.active&&this.specialOn?Math.sin(this.game.time*15)>0?18:2:0),n.damage.visible=this.hp<70,n.chassis.scale.y=this.hp<40?.95:1,this.mesh.updateMatrixWorld(!0);for(const s of this.accessories){const r=s.local.clone().applyMatrix4(n.special.matrixWorld),a=new Ri;n.special.getWorldQuaternion(a),s.body.position.copy(r),s.body.quaternion.copy(a),s.body.velocity.copy(this.body.velocity),s.body.aabbNeedsUpdate=!0}this.hp<40&&this===this.game.active&&Math.random()<t*14&&this.game.particles.emit(this.body.position,5593179,1,2,"smoke")}activate(){const t=this.config.id;["police","ambulance","dozer","excavator","dump"].includes(t)?(this.specialOn=!this.specialOn,this.game.audio.effect("success")):t==="tow"?(this.towed?this.towed=null:this.towed=this.game.vehicles.find(e=>e!==this&&e.body.position.distanceTo(this.body.position)<25),this.game.toast(this.towed?"フック！ ひっぱろう":"フックを はなしたよ")):this.config.kind==="ground"&&t!=="fire"&&this.grounded&&(this.body.velocity.y=12,this.game.audio.effect("jump"))}togglePark(){this.park||this.parking?(this.park=!1,this.parking=!1):this.parking=!0}damage(t){this.hp=mr(this.hp-t,0,100)}repair(){this.hp=100,this.game.particles.emit(this.body.position,16772746,35,8),this.game.audio.effect("repair"),this.game.toast("ピカピカ！ なおったよ")}stain(t,e=!1){this.paintColor=t,this.paintTime=18,this.dirty=Math.min(1,this.dirty+.4);for(const n of this.mesh.userData.stains.children)n.material.color.set(t),n.material.opacity=this.dirty,n.visible=!0;this.game.particles.emit(this.body.position,t,24,6),this.game.audio.effect(e?"mud":"paint")}clean(t=1){this.dirty=Math.max(0,this.dirty-t);for(const e of this.mesh.userData.stains.children)e.material.opacity=this.dirty,e.visible=this.dirty>.02;this.dirty<=.02&&(this.paintTime=0)}respawn(){this.megaFlight=null,this.megaBoost=0,this.body.position.copy(this.safe),this.body.position.y+=2,this.body.velocity.setZero(),this.body.angularVelocity.setZero(),this.body.quaternion.setFromEuler(0,this.yaw,0),this.waterTime=0,this.park=!1,this.parking=!1,this.game.toast("だいじょうぶ！ もういちど")}}const ka=[["monster","モンスタートラック",65,15299617,4.8,7.8,1.65,9,"ground",0,22],["police","パトカー",90,15857144,2.65,6.1,.64,5,"ground",14,12],["ambulance","きゅうきゅうしゃ",65,16118761,3.8,8,.9,7,"ground",70,-118],["fire","しょうぼうしゃ",55,14232871,4,10,1,10,"ground",100,-112],["tow","レッカーしゃ",55,15248678,3.8,8.5,1,9,"ground",625,18],["dozer","ブルドーザー",25,15316268,5,7,1.1,15,"ground",646,24],["excavator","ショベルカー",28,15903786,4.8,7,1.1,12,"ground",667,24],["dump","ダンプカー",50,14652974,4.4,9,1.2,12,"ground",688,24],["bus","バス",60,4893633,3.8,12,.9,8,"ground",-70,-75],["car","じょうようしゃ",80,4230826,2.5,5.6,.61,5,"ground",-15,12],["sport","スポーツカー",100,13977385,2.9,6.4,.63,4,"ground",580,560],["race","レーシングカー",120,2652360,3.15,7.1,.7,4,"ground",600,560],["suv","オフロードSUV",75,6848065,3.8,7.5,1.1,8,"ground",560,-455],["tractor","トラクター",30,3768652,3.5,5.5,1.15,8,"ground",-100,-680],["plane","ひこうき",140,15067113,3.8,24,.65,5,"air",-640,-570],["heli","ヘリコプター",85,14923819,3.4,14,.65,5,"heli",-600,-570],["boat","ボート",65,16115918,4,9,.5,5,"water",-860,65],["powerboat","パワーボート",100,15028795,4.4,12,.5,5,"water",-880,85]].map(([o,t,e,n,i,s,r,a,l,c,h])=>({id:o,name:t,max:o==="race"?300:200,color:n,width:i,length:s,wheel:r,mass:a*130,kind:l,x:c,z:h}));class Vy{constructor(t){this.game=t,this.x=600,this.startZ=100,this.endZ=-280,this.height=110,this.landingZ=-930,this.launches=0;const e=t.world,n=t.scene;let i=[this.x,2,this.startZ];for(let s=1;s<=72;s++){const r=s/72,a=2+this.height*r**4,l=this.startZ+(this.endZ-this.startZ)*r,c=[this.x,a,l];e.ramp(i,c,44);for(const h of[-1,1])we(n,new P(this.x+h*23,i[1]+1.5,i[2]),new P(this.x+h*23,a+1.5,l),.24,16760117),s%8===0&&a>5&&e.solid(this.x+h*19,a/2,l,2.3,a-2,2.3,4415601);if(s%6===0){const h=new qt;h.position.set(this.x,a+.4,l),h.rotation.x=Math.atan(4*this.height*r**3/380),n.add(h);for(const f of[-1,1]){const u=Q(h,10,.06,1,f*4.2,0,0,6810077,Zt(6810077,.25,.35));u.rotation.y=f*.55}}i=c}e.road([600,155],[600,95],44,2.1,!0),Me(n,"山越え SUPER JUMP",600,21,120,"#ffe586",65),Me(n,"×3 TURBO",600,9,70,"#8cffff",34),Me(n,"TAKE OFF",600,126,-278,"#ffe586",38),e.road([575,-930],[625,-930],36,2.12),Me(n,"LANDING",600,9,-948,"#a6ffe8",34);for(const s of[-1,1])for(let r=0;r<9;r++)Q(n,2,.08,2,600+s*22,2.2,-900-r*6,14729576)}travel(){const t=this.game,e=t.active;t.action("close"),e.megaFlight=null,e.megaBoost=0,e.body.position.set(600,2+e.ride,145),e.body.velocity.setZero(),e.body.quaternion.setFromEuler(0,0,0),e.body.wakeUp(),e.yaw=0,e.park=!1,e.parking=!1,e.safe.set(600,2+e.ride,145),e.body.aabbNeedsUpdate=!0,t.input.clear(),t.cameraController.first=void 0,t.toast("まっすぐ進むと ×3加速！ 山をこえよう！",4e3)}update(){const t=this.game,e=t.active,n=e.body.position;if(e.hp<=0)return;const i=Math.abs(n.x-this.x)<22&&n.z<115&&n.z>this.endZ-5&&n.y<125;if(i&&!e.megaFlight&&(e.megaBoost>0||(t.audio.effect("boost"),t.toast("×3 ターボ！",2500)),e.megaBoost=5),i&&!e.megaFlight&&n.z<this.endZ+5&&n.y>100&&e.body.velocity.z<-30){const s=e.config.max/3.6*3,r=n.z-this.landingZ,a=270,l=r/s,c=(4*a-(n.y-(2+e.ride)))/l,h=8*a/(l*l);e.yaw=0,e.body.velocity.set(0,c,-s),e.grounded=!1,e.megaBoost=l+1,e.megaFlight={elapsed:0,duration:l,gravity:h,speed:s},this.launches++,t.audio.effect("jump"),t.particles.emit(n,16767333,80,28),t.toast("山をこえる！",3e3)}}}class Hy{constructor(t){this.game=t,this.zones=[],this.platforms=[],this.domino=[],this.pins=[],this.fires=[],this.rings=[],this.cooldown=0,this.warpCooldown=0,this.trackTick=0,this.wash=0,this.cannonTimer=0,this.goalTimer=0,this.pinTimer=0,this.dominoTimer=0,this.build(),this.megaJump=new Vy(t)}zone(t,e,n,i=10,s=16777215,r=2.3,a={}){const l=he(this.game.scene,i,i,.15,e,r,n,s,32,Zt(s,.25,.4)),c={type:t,x:e,z:n,y:r,r:i,color:s,mesh:l,cool:0,...a};return this.zones.push(c),c}object(t,e,n,i=3,s=14527334,r=2,a=20){const l=this.game.scene,c=this.game.physics;let h;if(["ball","soccer","balloon"].includes(t)){if(h=Tn(l,i,e,r+i,n,s),c.ball(e,r+i,n,i,a,h),t==="soccer")for(let u=0;u<12;u++){const d=u*2.399,m=Math.acos(1-2*(u+.5)/12),v=new Qt(new _o(i*.23,5),Zt(2637384));v.position.set(Math.sin(m)*Math.cos(d)*i*1.005,Math.cos(m)*i*1.005,Math.sin(m)*Math.sin(d)*i*1.005),v.lookAt(v.position.clone().multiplyScalar(2)),h.add(v)}}else h=t==="cone"?he(l,.15,i*.5,i*1.7,e,r+i*.85,n,s,8):Q(l,i,i*1.5,i,e,r+i*.75,n,s),c.box(h.position.x,h.position.y,h.position.z,i,i*1.5,i,a,h);const f=c.items.at(-1);return f.type=t,["box","cone","wall"].includes(t)&&(f.resetAfter=50),f}build(){const t=this.game,e=t.scene,n=t.world,i=[15749732,3313641,16108352,5356145,15365039,10314452,5692620];for(let h=0;h<7;h++)this.zone("paint",-42+h*14,-45,6,i[h],2.32,{rainbow:h===6}),this.zone("paint",-90+h*30,635,10,i[h],2.3,{rainbow:h===6});this.zone("mud",660,-45,28,7229493),this.zone("mud",-130,-655,18,7494976);for(let h=0;h<28;h++){const f=qn[h%qn.length],u=f.x+Math.sin(h*8)*65,d=f.z+Math.cos(h*8)*65;this.zone("water",u,d,5+h%5,6603218),h%3===0&&this.object("box",u+14,d,2.5,12031850)}for(const[h,f]of[[0,-80],[0,450],[600,470],[680,470],[740,660],[-450,-450],[100,710]])this.zone("boost",h,f,9,16109662),Me(e,"» » »",h,3,f,"#ffffff",15);const s=[4758778,16737142,7460258,16765265,12220397,5625573],r=[0,4,2,1,5,7];for(let h=0;h<6;h++){const f=qn[r[h]],u=-90+h*35,d=190,m=On(e,9,1,u,11,d,s[h]);this.zones.push({type:"warp",x:u,z:d,y:3,r:8,mesh:m,dest:r[h],color:s[h],cool:0}),Me(e,f.icon+" "+f.name,u,24,d,"#fff",27);const v=On(e,9,1,f.x+60,11,f.z+60,4758778);this.zones.push({type:"warp",x:f.x+60,z:f.z+60,y:3,r:8,mesh:v,dest:0,color:4758778,cool:0})}for(const[h,f,u,d]of[[35,-145,9,26],[100,550,22,55],[580,680,18,48],[-700,180,10,28],[520,230,25,55],[635,-565,32,50],[-120,850,35,65],[170,680,13,35]])n.ramp([h,2,f],[h,u,f-d],20,14264153),Me(e,"↗",h,u+5,f-d,"#fff",12),this.zones.push({type:"jump",x:h,z:f-d,y:u,r:12,power:u>20?25:16,cool:0});this.soccer=this.object("soccer",-100,740,6,16052956,2,70);for(const h of[-135,-65])n.solid(h,13,822,1.3,22,1.3,15986910);Q(e,71,1.3,1.3,-100,24,822,15986910);for(let h=0;h<9;h++)Q(e,.1,20,.1,-132+h*8,13,826,13227987);Me(e,"GOAL",-100,30,822,"#fff",32),this.object("ball",30,725,8,15376196,2,100),this.object("ball",630,-30,7,7714764,2,90),this.object("ball",220,-200,6,13148888,2,60);for(let h=0;h<4;h++)for(let f=0;f<=h;f++){const u=125+(f-h/2)*7,d=820+h*8,m=this.object("pin",u,d,3,15658717,2,18),v=he(e,1,1.4,3,0,0,0,15156807);m.mesh.add(v),v.position.set(0,2.4,0),this.pins.push(m)}Me(e,"ボウリング",125,16,855,"#fff",35);const a=new yo([[-210,650],[-100,650],[-85,661],[-100,672],[-210,672],[-225,683],[-210,694],[-100,694],[-85,705],[-100,716],[-210,716]].map(([h,f])=>new P(h,5.5,f)),!1,"catmullrom",.1);for(let h=0;h<100;h++){const f=a.getPointAt(h/99),u=a.getTangentAt(h/99),d=f.x,m=f.z,v=Math.atan2(-u.z,u.x),g=Q(e,1.05,7,4,d,5.5,m,i[h%7]);g.rotation.y=v,t.physics.box(d,5.5,m,1.05,7,4,10,g,v);const p=t.physics.items.at(-1);p.type="domino",this.domino.push(p)}Me(e,"100 ドミノ！",-155,15,638,"#fff",45),this.zone("trampoline",0,790,17,5880002,2.4,{power:23}),this.zone("trampoline",40,850,21,10581973,2.4,{power:39});for(const[h,f,u,d]of[["rotate",70,700,.45],["rotate",140,740,2.8],["seesaw",-230,795,1],["vertical",220,800,1],["horizontal",240,690,1],["depth",230,610,1]]){const m=n.solid(f,3,u,26,1.2,26,h==="seesaw"?14004857:6524840);m.body.type=4,m.mesh.userData.dynamic=!0,this.platforms.push({...m,mode:h,x:f,z:u,speed:d}),Me(e,h==="seesaw"?"↔":"↕",f,8,u,"#fff",12)}this.fan=new qt,this.fan.position.set(-250,17,750),e.add(this.fan),On(this.fan,12,.7,0,0,0,5667720);for(let h=0;h<4;h++){const f=Q(this.fan,4,14,.5,Math.sin(h*Math.PI/2)*6,Math.cos(h*Math.PI/2)*6,0,8894917);f.rotation.z=-h*Math.PI/2}n.solid(-250,7,750,4,12,4,6126981),Me(e,"かぜ！",-250,34,750,"#fff",22);const l=he(e,9,12,17,280,14,740,11639414,20);l.rotation.z=Math.PI/2,On(e,8,1,267,14,740,5005933).rotation.y=Math.PI/2,Me(e,"すって ポン！",280,31,740,"#fff",30),this.hammer=new qt,this.hammer.position.set(180,32,870),e.add(this.hammer),Q(this.hammer,1.2,23,1.2,0,-11,0,6715258),Q(this.hammer,16,7,7,0,-25,0,14721379);const c=he(e,5,6,22,-30,10,875,6979474,20);c.rotation.x=.95,this.zone("cannon",-30,875,9,14857042),Me(e,"3・2・1！",-30,25,875,"#fff",24),this.loops=[];for(const[h,f]of[[75,900],[700,720]]){const u=On(e,24,2,h,26,f,13805163);u.rotation.y=Math.PI/2,this.loops.push({x:h,z:f,mesh:u}),Me(e,"ぐるりん！",h,55,f,"#fff",27)}for(let h=0;h<24;h++)this.object("wall",-10+h%6*4,690+Math.floor(h/6)*4,3.5,15329496,2,6),this.object("box",690+h%6*5,-75+Math.floor(h/6)*5,3,12227173),h<12&&this.object("cone",610+h*7,62,2,15569489,2,4);for(let h=0;h<8;h++){const f=this.object("balloon",-15+h*8,760,3,i[h%7],8,1.3);if(f.body.linearDamping=.4,h>=6){const u=new Mo;if(h===6)for(let m=0;m<10;m++){const v=m*Math.PI/5,g=m%2?1.5:3;(m?u.lineTo.bind(u):u.moveTo.bind(u))(Math.sin(v)*g,Math.cos(v)*g)}else u.moveTo(0,-3),u.bezierCurveTo(-6,1,-3,5,0,2),u.bezierCurveTo(3,5,6,1,0,-3);const d=new Eo(u,{depth:.8,bevelEnabled:!0,bevelThickness:.4,bevelSize:.3,bevelSegments:2,steps:1});d.center(),f.mesh.geometry=d}}for(const[h,f]of[[106,-135],[690,-110],[-600,635]]){const u=he(e,.4,3,7,h,5.5,f,15967560,8);this.fires.push({mesh:u,x:h,z:f,life:1,reset:0})}for(let h=0;h<10;h++){const f=-665+h*90,u=-750+Math.sin(h)*90,d=35+h*13,m=On(e,13,.7,f,d,u,16766574);this.rings.push({mesh:m,x:f,y:d,z:u,hit:!1,water:!1})}for(let h=0;h<6;h++){const f=-700+h*230;this.rings.push({mesh:On(e,9,.8,f,8,300,5954533),x:f,y:8,z:300,hit:!1,water:!0}),Tn(e,2,f+20,1,305,16103750)}for(let h=0;h<8;h++){const f=this.object("box",-185+h*13,-740,4,13022062);f.resetAfter=60}this.wheel=new qt,this.wheel.position.set(0,52,960),e.add(this.wheel),On(this.wheel,43,1,0,0,0,14337440);for(let h=0;h<12;h++){const f=h*Math.PI/6;we(this.wheel,new P,new P(Math.sin(f)*43,Math.cos(f)*43,0),.25,7836825),Q(this.wheel,6,5,5,Math.sin(f)*43,Math.cos(f)*43,0,i[h%7])}for(const h of[-1,1])we(e,new P(h*18,2,965),new P(0,52,960),1,8493461)}update(t){this.megaJump.update();const e=this.game,n=e.active,i=n.body.position,s=e.time;this.warpCooldown=Math.max(0,this.warpCooldown-t),this.cooldown=Math.max(0,this.cooldown-t),this.trackTick+=t;for(const l of this.zones)if(l.cool=Math.max(0,(l.cool||0)-t),!(Math.hypot(i.x-l.x,i.z-l.z)>l.r||Math.abs(i.y-l.y)>12)){if(l.type==="warp"&&this.warpCooldown<=0){e.travel(l.dest),this.warpCooldown=4,e.audio.effect("warp");break}l.type==="boost"&&(n.boost=3,l.cool<=0&&(l.cool=2,e.audio.effect("boost"),e.toast("ビューン！"))),(l.type==="paint"||l.type==="mud")&&l.cool<=0&&(n.stain(l.rainbow?new jt().setHSL(s%1,1,.6):l.color,l.type==="mud"),l.cool=2),l.type==="water"&&Math.abs(n.speed)>2&&l.cool<=0&&(e.particles.emit(i,11266803,16,Math.abs(n.speed)*.4),n.clean(.04),l.cool=.6,e.audio.effect("water")),["trampoline","jump"].includes(l.type)&&l.cool<=0&&n.body.velocity.y<8&&(n.body.velocity.y=l.power,l.cool=1.3,e.audio.effect("jump"),e.particles.emit(i,l.color||16766077,20,8)),l.type==="cannon"&&this.cooldown<=0&&this.cannonTimer<=0&&(this.cannonTimer=3,this.cannonVehicle=n,this.cooldown=8)}if(this.cannonTimer>0){this.cannonTimer-=t;const l=this.cannonVehicle;l.body.velocity.setZero(),e.toast(String(Math.ceil(this.cannonTimer))+" …"),this.cannonTimer<=0&&(l.body.velocity.set(0,45,-45),l.boost=4,e.toast("はっしゃー！"),e.audio.effect("jump"))}if(n.paintTime>0&&this.trackTick>.1&&n.grounded&&Math.abs(n.speed)>1&&(e.particles.track({x:i.x,y:i.y-n.ride+.06,z:i.z},n.yaw,n.paintColor,n.config.width),this.trackTick=0),i.y>140&&n.grounded&&this.trackTick>.16&&Math.abs(n.speed)>1&&(e.particles.track({x:i.x,y:i.y-n.ride+.06,z:i.z},n.yaw,15792127,n.config.width),e.particles.emit(i,16777215,3,2),this.trackTick=0),Math.abs(i.x+68)<12&&Math.abs(i.z-65)<16){this.wash+=t;const l=["みず！","あわあわ！","ブラシ！","すすぎ！","かわかすよ！","ピカピカ！"];e.toast(l[Math.min(5,Math.floor(this.wash))]),Math.random()<t*20&&e.particles.emit(i,this.wash<2?14087679:16777215,8,4),this.wash>=5&&(n.clean(1),n.hp<100&&n.repair(),this.wash<5+t&&e.audio.effect("wash"))}else this.wash=0;Math.hypot(i.x+68,i.z-100)<15&&n.hp<100&&n.repair();for(const l of this.platforms){const c=l.body.position.clone();if(l.mode==="rotate"&&(l.mesh.rotation.y=s*l.speed,l.body.quaternion.copy(l.mesh.quaternion)),l.mode==="seesaw"){const d=Math.abs(i.x-l.x)<15&&Math.abs(i.z-l.z)<15;l.mesh.rotation.z=xn.lerp(l.mesh.rotation.z,d?xn.clamp(-(i.x-l.x)*n.config.mass*25e-6,-.4,.4):0,t*2),l.body.quaternion.copy(l.mesh.quaternion)}l.mode==="vertical"&&(l.body.position.y=4+(Math.sin(s*.5)+1)*9),l.mode==="horizontal"&&(l.body.position.x=l.x+Math.sin(s*.5)*30),l.mode==="depth"&&(l.body.position.z=l.z+Math.sin(s*.5)*30),l.mesh.position.copy(l.body.position);const h=l.body.position.x-c.x,f=l.body.position.y-c.y,u=l.body.position.z-c.z;if(Math.abs(i.x-l.body.position.x)<13&&Math.abs(i.z-l.body.position.z)<13&&Math.abs(i.y-l.body.position.y-n.ride)<4&&(i.x+=h,i.y+=f,i.z+=u,l.mode==="rotate")){const d=l.speed*t,m=i.x-l.x,v=i.z-l.z;i.x=l.x+m*Math.cos(d)+v*Math.sin(d),i.z=l.z+v*Math.cos(d)-m*Math.sin(d),n.yaw+=d}}this.fan.rotation.z=s*8,this.wheel.rotation.z=s*.06,this.hammer.rotation.z=Math.sin(s*1.4)*.75,new P(0,-25,0).applyMatrix4(this.hammer.matrixWorld).distanceTo(n.mesh.position)<11&&this.cooldown<=0&&(n.body.velocity.set(20,18,-12),n.damage(8),this.cooldown=1);for(const l of e.physics.items){const c=l.body.position;l.type==="balloon"&&(l.body.force.y+=l.body.mass*24+(10-c.y)*l.body.mass*2),Math.hypot(c.x+250,c.z-780)<50&&(l.body.force.z+=l.body.mass*(l.type==="balloon"?50:14),l.body.wakeUp());const f=Math.hypot(c.x-270,c.z-740);f<40&&(l.body.force.x+=(270-c.x)*l.body.mass*2,l.body.force.z+=(740-c.z)*l.body.mass*2,l.body.wakeUp(),f<8&&(l.body.position.x=300,l.body.velocity.set(24,15,(Math.random()-.5)*10)))}if(Math.hypot(i.x+250,i.z-780)<45&&(n.body.velocity.z+=t*5),Math.hypot(i.x-270,i.z-740)<40&&(n.body.velocity.x+=(270-i.x)*t*.15),this.goalTimer>0?(this.goalTimer-=t,this.goalTimer<=0&&e.physics.reset(this.soccer)):Math.abs(this.soccer.body.position.x+100)<35&&this.soccer.body.position.z>817&&(this.goalTimer=4,e.toast("GOAL! やったー！"),e.audio.effect("goal"),e.particles.emit(this.soccer.body.position,16767054,80,20)),this.pins.every(l=>Math.abs(l.body.quaternion.x)+Math.abs(l.body.quaternion.z)>.25||l.body.position.distanceTo(l.home)>4)&&this.pinTimer<=0&&(this.pinTimer=5,e.toast("STRIKE!"),e.audio.effect("strike"),e.particles.emit(i,16766283,70,15)),this.pinTimer>0&&(this.pinTimer-=t,this.pinTimer<=0))for(const l of this.pins)e.physics.reset(l);if(this.domino.some(l=>Math.abs(l.body.quaternion.z)>.2||Math.abs(l.body.quaternion.x)>.2)&&(this.dominoTimer+=t),this.dominoTimer>24){for(const l of this.domino)e.physics.reset(l);this.dominoTimer=0}for(const l of this.fires)l.life<=0&&(l.reset-=t,l.reset<=0&&(l.life=1)),l.mesh.visible=l.life>0,l.mesh.scale.set(1,l.life*(.9+Math.sin(s*7)*.1),1);for(const l of this.rings)l.mesh.rotation.z=s*.25,!l.hit&&Math.hypot(i.x-l.x,i.y-l.y,i.z-l.z)<12&&(l.water?n.config.kind==="water":["air","heli"].includes(n.config.kind))&&(l.hit=!0,l.mesh.material=Zt(7143333,.3,.3),e.particles.emit(i,16768883,40,12),e.audio.effect("success"),e.toast("リング！ キラキラ！"));if(!this.loopRide){for(const l of this.loops)if(Math.hypot(i.x-l.x,i.z-l.z)<12&&i.y<9&&Math.abs(n.speed)>6){this.loopRide={loop:l,t:0,vehicle:n};break}}if(this.loopRide){const l=this.loopRide;l.t+=t;const c=l.t*2.4;l.vehicle.body.position.set(l.loop.x,26-Math.cos(c)*24+l.vehicle.ride,l.loop.z-Math.sin(c)*24),l.vehicle.body.velocity.setZero(),l.vehicle.body.quaternion.setFromEuler(c,0,0),c>=Math.PI*2&&(l.vehicle.body.velocity.set(0,10,-18),this.loopRide=null)}}water(t,e){const n=t.body.position,i=new P(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),s=new P(n.x,n.y+2,n.z).addScaledVector(i,8);Math.random()<e*40&&this.game.particles.emit(s,10675697,5,5);for(const r of this.fires){const a=new P(r.x-n.x,0,r.z-n.z);a.length()<38&&a.normalize().dot(i)>.6&&r.life>0&&(r.life-=e*.65,r.life<=0&&(r.reset=25,this.game.audio.effect("success"),this.game.toast("けせたよ！ ★"),this.game.particles.emit(r.mesh.position,16770460,40,10)))}for(const r of this.game.vehicles)r!==t&&r.mesh.position.distanceTo(s)<22&&r.clean(e*.3);for(const r of this.game.physics.items)r.mesh.position.distanceTo(s)<20&&(r.body.velocity.x+=i.x*e*5,r.body.velocity.z+=i.z*e*5,r.body.wakeUp())}}class Gy{constructor(t,e){this.pointers=new Map,this.keys=new Set,this.root=t,this.onAction=e,this.bind()}bind(){for(const e of this.root.querySelectorAll("[data-control]")){e.addEventListener("pointerdown",n=>{n.preventDefault();try{e.setPointerCapture(n.pointerId)}catch{}this.pointers.set(n.pointerId,{control:e.dataset.control,value:e.dataset.control==="dpad"?this.direction(n,e):1}),e.classList.add("held")}),e.addEventListener("pointermove",n=>{const i=this.pointers.get(n.pointerId);i?.control==="dpad"&&(i.value=this.direction(n,e))});for(const n of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(n,i=>{this.pointers.delete(i.pointerId),[...this.pointers.values()].some(s=>s.control===e.dataset.control)||e.classList.remove("held")})}const t={KeyE:"switch",KeyR:"respawn",KeyC:"photo",KeyV:"vehicles",KeyM:"map",Escape:"close"};window.addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),t[e.code]&&!e.repeat&&this.onAction(t[e.code])}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clear()});for(const e of["contextmenu","dragstart","gesturestart","gesturechange","gestureend","dblclick","touchmove"])document.getElementById("app").addEventListener(e,n=>{e==="touchmove"&&n.target.closest?.(".vehicle-grid")||n.preventDefault()},{passive:!1})}direction(t,e){const n=e.getBoundingClientRect(),i=(t.clientX-n.left-n.width/2)/(n.width*.32),s=(t.clientY-n.top-n.height/2)/(n.height*.32);if(Math.hypot(i,s)<.23)return{accel:0,brake:0,steer:0};const r=Math.abs(i)>.3?Math.max(-1,Math.min(1,i)):0,a=s>.35;return{accel:a?0:1,brake:a?1:0,steer:r}}get state(){const t={accel:0,brake:0,steer:0,special:0,down:0,jump:0};for(const n of this.pointers.values())n.control==="dpad"?(t.accel=Math.max(t.accel,n.value.accel),t.brake=Math.max(t.brake,n.value.brake),Math.abs(n.value.steer)>Math.abs(t.steer)&&(t.steer=n.value.steer)):t[n.control]=n.value;const e=this.keys;return(e.has("KeyW")||e.has("ArrowUp"))&&(t.accel=1),(e.has("KeyS")||e.has("ArrowDown"))&&(t.brake=1),(e.has("KeyA")||e.has("ArrowLeft"))&&(t.steer=-1),(e.has("KeyD")||e.has("ArrowRight"))&&(t.steer=1),t.steer&&!t.brake&&(t.accel=1),e.has("Space")&&(t.jump=1),e.has("KeyF")&&(t.special=1),(e.has("ShiftLeft")||e.has("KeyQ"))&&(t.down=1),t}clear(){this.pointers.clear(),this.keys.clear(),this.root.querySelectorAll(".held").forEach(t=>t.classList.remove("held"))}}class Wy{constructor(t){this.game=t,this.look=new P,this.ray=new Rp,this.position=new P}update(t,e=!1){const n=this.game,i=n.active,s=i.mesh.position;if(!e&&(this.followVehicle!==i||this.first===void 0)&&this.look.set(s.x-Math.sin(i.yaw)*8,s.y+2,s.z-Math.cos(i.yaw)*8),!e&&this.followVehicle===i&&this.followPosition&&this.first!==void 0){const a=s.clone().sub(this.followPosition);n.camera.position.add(a),this.look.add(a)}this.followVehicle=i,this.followPosition=s.clone();let r;if(e){const a=n.time*.04;r=new P(s.x+15*Math.cos(a),s.y+5.7,s.z-17),this.look.set(s.x-6,s.y+1.3,s.z)}else{const a=Math.max(17,i.config.length*1.5);r=new P(s.x+Math.sin(i.yaw)*a,s.y+8,s.z+Math.cos(i.yaw)*a),this.look.lerp(new P(s.x-Math.sin(i.yaw)*8,s.y+2,s.z-Math.cos(i.yaw)*8),1-Math.exp(-t*7));const l=r.clone().sub(this.look),c=l.length();this.ray.set(this.look,l.normalize()),this.ray.far=c;const h=this.ray.intersectObjects(n.world.solids,!1)[0];h&&h.distance<c&&(r=this.look.clone().addScaledVector(l,Math.max(5,h.distance-1))),r.y=Math.max(5,r.y)}!Number.isFinite(n.camera.position.x)||this.first===void 0?(n.camera.position.copy(r),this.first=!0):n.camera.position.lerp(r,1-Math.exp(-t*5)),n.camera.lookAt(this.look)}}class Xy{constructor(t){this.game=t,this.root=document.getElementById("ui"),this.root.innerHTML=`<div id="title"><div class="title-copy"><div class="eyebrow">きょうは、どこへいこう？</div><h1>のりもの<br><em>ワールド！</em></h1><p>はしる。とぶ。あそぶ。<br>ぜんぶ、きみのじゆう。</p><button id="start">スタート！ <span>➜</span></button><div class="title-foot">18 のりもの ・ 9 エリア ・ あそびはむげん</div><button id="install" class="text-button">ホーム画面に追加</button></div><div class="title-badge">MONSTER / 01<br><b>どこまでも、いこう。</b></div></div><div id="hud" hidden><button id="respawn" class="utility" aria-label="復帰">↻</button><div id="location"><small>のりものワールド！</small><strong id="area">中央タウン</strong></div><div id="top-status"><button id="sound" aria-label="音">♫</button><button id="map-open">🗺 マップ</button><button id="vehicles-open">🚘 乗り物</button></div><button id="photo" class="utility" aria-label="撮影モード">📷</button><div id="dashboard"><span id="vehicle-name">モンスタートラック</span><div><b id="speed">0</b><small>km/h</small><span id="health">🔧 100</span></div></div><button id="dpad" data-control="dpad" aria-label="十字キー：上で前進、下で後退、左右で曲がる"><span class="dpad-up">▲</span><span class="dpad-left">◀</span><span class="dpad-center">●</span><span class="dpad-right">▶</span><span class="dpad-down">▼</span></button><button id="jump" data-control="jump" aria-label="ジャンプ"><strong>↟</strong><small>ジャンプ</small></button><button id="special" data-control="special" aria-label="特殊能力">★<small>ジャンプ</small></button><button id="down" data-control="down" aria-label="下降" hidden>↘<small>おりる</small></button><button id="switch" hidden><span>🚘</span>のる！<small id="switch-name"></small></button><button id="repair" hidden>🔧<br>なおす！</button><div id="hint">↑ ↓ ← → うんてん　SPACE ジャンプ　F とくしゅ　C 撮影</div><canvas id="minimap" width="170" height="170"></canvas></div><div id="toast" role="status"></div><div id="map-panel" hidden><header><div><small>つぎはどこへ？</small><h2>ワールドマップ</h2></div><button id="map-close">✕</button></header><div class="destinations">${qn.map((n,i)=>`<button data-travel="${i}" style="--accent:${n.color}"><span>${n.icon}</span><b>${n.name}</b><small>ワープする ➜</small></button>`).join("")}</div><footer><button id="mega-travel">🚀 山越えジャンプ ×3</button><label class="volume-control">音量 <input id="volume" aria-label="音量" type="range" min="0" max="1" step="0.05" value="0.85"></label></footer></div>`,this.root.insertAdjacentHTML("beforeend",`<div id="vehicles-panel" class="picker-panel" hidden><header><div><small>すきな乗り物をえらぼう</small><h2>乗り物ガレージ</h2></div><button id="vehicles-close">✕</button></header><div class="vehicle-grid">${t.vehicles.map((n,i)=>`<button data-vehicle="${i}"><span class="vehicle-swatch" style="--paint:#${n.config.color.toString(16).padStart(6,"0")}">${{ground:"🚘",air:"✈",heli:"🚁",water:"🚤"}[n.config.kind]}</span><b>${n.config.name}</b><small>${n.config.max} km/h ・ この乗り物へ</small></button>`).join("")}</div></div><div id="photo-panel" hidden><div class="photo-top"><b>PHOTO MODE</b><button id="photo-reset">車両を中心に</button><button id="photo-close">運転に戻る ✕</button></div><div class="photo-bottom"><p>ドラッグ：回転 ／ 右ドラッグ・2本指：移動 ／ ホイール・ピンチ：ズーム</p><label>画角 <input id="photo-fov" type="range" min="25" max="90" value="55"></label><button id="photo-shot">📷 写真を保存</button></div></div>`);const e=(n,i)=>document.getElementById(n).addEventListener("click",i);e("start",()=>t.start()),e("mega-travel",()=>t.gimmicks.megaJump.travel()),document.getElementById("volume").value=t.audio.volume,document.getElementById("volume").addEventListener("input",n=>t.audio.setVolume(Number(n.target.value))),e("respawn",()=>t.action("respawn")),e("photo",()=>t.action("photo")),e("vehicles-open",()=>t.action("vehicles")),e("vehicles-close",()=>t.action("close"));for(const n of this.root.querySelectorAll("[data-vehicle]"))n.addEventListener("click",()=>t.selectVehicle(Number(n.dataset.vehicle)));e("switch",()=>t.action("switch")),e("repair",()=>t.active.repair()),e("map-open",()=>t.action("map")),e("map-close",()=>t.action("close")),e("sound",()=>{t.audio.enabled=!t.audio.enabled,document.getElementById("sound").textContent=t.audio.enabled?"♫":"♪̸",t.saveState()}),e("install",async()=>{const n=await t.pwa.install();n&&t.toast(n,8e3)});for(const n of this.root.querySelectorAll("[data-travel]"))n.addEventListener("click",()=>{t.travel(Number(n.dataset.travel)),t.action("close")});this.map=document.getElementById("minimap").getContext("2d"),this.toastUntil=0}toast(t,e=2200){const n=document.getElementById("toast");n.textContent!==t&&(n.textContent=t),n.classList.add("show"),this.toastUntil=performance.now()+e}update(){const t=this.game,e=t.active,n=e.body.position,i=qn.reduce((a,l)=>Math.hypot(n.x-l.x,n.z-l.z)<Math.hypot(n.x-a.x,n.z-a.z)?l:a);document.getElementById("area").textContent=i.icon+" "+i.name,document.getElementById("vehicle-name").textContent=e.config.name,document.getElementById("speed").textContent=Math.round(Math.abs(e.speed)*3.6),document.getElementById("health").textContent="🔧 "+Math.round(e.hp),document.getElementById("health").style.color=e.hp<40?"#ffa585":"#b1e6d0",document.getElementById("repair").hidden=e.hp>0;const s=document.getElementById("switch");s.hidden=!t.nearest||e.hp<=0,document.getElementById("switch-name").textContent=t.nearest?.config.name||"",document.getElementById("down").hidden=!["air","heli"].includes(e.config.kind);const r={fire:"みず！",tow:"フック",dozer:"ブレード",excavator:"アーム",dump:"にだい",police:"サイレン",ambulance:"サイレン",heli:"あがる",plane:"とぶ"};document.querySelector("#special small").textContent=r[e.config.id]||"アクション",document.getElementById("special").hidden=!r[e.config.id],document.getElementById("dpad").dataset.direction=t.input.state.brake?"back":t.input.state.accel?"forward":"",performance.now()>this.toastUntil&&document.getElementById("toast").classList.remove("show"),this.drawMap()}drawMap(){const t=this.map,e=this.game;t.clearRect(0,0,170,170),t.fillStyle="#163743d9",t.fillRect(0,0,170,170),t.strokeStyle="#71938d",t.lineWidth=1,t.strokeRect(15,15,140,140),t.strokeStyle="#60b4ca",t.lineWidth=6,t.beginPath(),t.moveTo(0,109),t.lineTo(170,109),t.stroke();for(const i of qn){const s=85+i.x*.077,r=85+i.z*.077;t.strokeStyle="#72939b",t.lineWidth=1,t.beginPath(),t.moveTo(85,85),t.lineTo(s,r),t.stroke(),t.fillStyle=i.color,t.beginPath(),t.arc(s,r,3,0,7),t.fill()}t.fillStyle="#fff";for(const i of e.railway.trains){const s=i.meshes[0].position;t.fillRect(85+s.x*.077,85+s.z*.077,2,2)}const n=e.active.body.position;t.save(),t.translate(85+n.x*.077,85+n.z*.077),t.rotate(-e.active.yaw),t.fillStyle="#ffdd64",t.beginPath(),t.moveTo(0,-6),t.lineTo(-4,5),t.lineTo(4,5),t.fill(),t.restore()}}class qy{constructor(){this.scene=new Kl,this.scene.background=new jt(11524583),this.scene.fog=new Lr(11524583,450,1600),this.camera=new cn(55,innerWidth/innerHeight,.3,2300),this.renderer=new fx({canvas:document.getElementById("game"),antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=Ve,this.renderer.toneMapping=Pr,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=iu,this.scene.add(new bp(14808319,6583651,1.1)),this.sun=new Ap(16771532,2.2),this.sun.position.set(100,180,60),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:300}),this.sun.shadow.bias=-.001,this.scene.add(this.sun,this.sun.target);const t=new Ar(this.renderer),e=new jx;this.scene.environment=t.fromScene(e,.04).texture,e.dispose(),t.dispose(),this.physics=new Cy,this.audio=new Py,this.save=new Iy,this.particles=new Ry(this.scene),this.time=0,this.started=!1,this.paused=!1,this.world=new Jx(this),this.vehicles=ka.map(i=>new Ba(this,i)),this.vehicles.push(new Ba(this,{...ka[10],id:"rare-sport",name:"おうごんのスポーツカー",color:13874027},-185,45,35)),this.vehicles.push(new Ba(this,{...ka[12],id:"secret-suv",name:"ひみつのSUV",color:5467272},580,-475,2)),this.active=this.vehicles[0],this.railway=new e_(this),this.gimmicks=new Hy(this),this.world.finishRoads(),this.ui=new Xy(this),this.input=new Gy(this.ui.root,i=>this.action(i)),this.pwa=new Dy,this.cameraController=new Wy(this),this.photo=new Cx(this),this.clock=new Hu,this.nearest=null,this.frameCount=0,this.lastUi=0,this.audio.enabled=this.save.data.settings?.sound!==!1,this.marker=new Qt(new Xn(5,.16,6,40),new ks({color:16771994})),this.marker.rotation.x=-Math.PI/2,this.scene.add(this.marker);for(const i of this.vehicles)Xx(i.mesh);qx(this),this.graphics=new Gx(this);const n=()=>this.resize();window.addEventListener("resize",n),window.visualViewport?.addEventListener("resize",n),window.addEventListener("orientationchange",()=>{this.input.clear(),this.resize(),requestAnimationFrame(n),setTimeout(n,250)}),document.addEventListener("visibilitychange",()=>{this.input.clear(),this.clock.getDelta(),document.hidden||this.resize()}),this.resize(),this.tick()}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.graphics?.resize();const n=matchMedia("(orientation: landscape)").matches||t>e;this.portrait=!n&&t<=1e3,this.portrait&&this.input?.clear()}async start(){this.resize();const t=matchMedia("(orientation: landscape)").matches||innerWidth>innerHeight;if(this.portrait&&!t)return;this.portrait=!1,this.input.clear();const e=this.vehicles.find(n=>n.config.id===this.save.data.lastVehicle);e&&(this.active=e,e.body.wakeUp()),this.started=!0,document.getElementById("title").hidden=!0,document.getElementById("hud").hidden=!1,this.audio.start(),this.pwa.start(),this.saveState()}action(t){if(!(!this.started||this.portrait)){if(t==="photo"){this.photo.active?this.photo.close():this.photo.open();return}if(t==="vehicles"){this.action("close"),this.paused=!0,document.getElementById("vehicles-panel").hidden=!1,this.input.clear();return}t==="map"&&(this.action("close"),this.paused=!0,document.getElementById("map-panel").hidden=!this.paused,this.input.clear()),t==="close"&&(this.photo?.close(),document.getElementById("vehicles-panel").hidden=!0,this.paused=!1,document.getElementById("map-panel").hidden=!0,this.input.clear()),!this.paused&&(t==="respawn"&&this.active.respawn(),t==="switch"&&this.nearest&&(this.active.park=!0,this.active.parkPosition=this.active.body.position.clone(),this.active.body.velocity.setZero(),this.active=this.nearest,this.active.park=!1,this.active.parking=!1,this.active.body.wakeUp(),this.input.clear(),this.nearest=null,this.audio.effect("success"),this.toast(this.active.config.name+" に のったよ！"),this.saveState(),this.ui.update()))}}selectVehicle(t){const e=this.vehicles[t];e&&(this.action("close"),this.active.body.velocity.setZero(),this.active=e,e.park=!1,e.parking=!1,e.body.wakeUp(),this.nearest=null,this.input.clear(),this.cameraController.first=void 0,this.toast(e.config.name+" に のったよ！"),this.saveState(),this.ui.update())}travel(t){const e=qn[t],n=this.active;let i=e.x,s=e.z+22,r=2+n.ride;t===2&&(i=600,s=-410),t===7&&n.config.kind==="water"&&(i=-860,s=70,r=1),n.body.position.set(i,r+2,s),n.safe.set(i,r,s),n.body.velocity.setZero(),n.yaw=0,n.park=!1,n.parking=!1,n.waterTime=0,this.gimmicks.warpCooldown=4,this.particles.emit(n.body.position,11135743,50,12),this.toast(e.icon+" "+e.name+" へ！"),this.input.clear()}toast(t,e){this.ui?.toast(t,e)}saveState(){this.save.save(this.active,{sound:this.audio.enabled})}tick(){if(requestAnimationFrame(()=>this.tick()),this.testManual)return;const t=Math.min(.05,this.clock.getDelta());if(document.hidden)return;this.time+=t;const e=this.started&&!this.paused&&!this.portrait;if(e){const n=this.input.state;for(const s of this.vehicles)s.update(t,n,s===this.active);this.world.update(t,this.time),this.railway.update(t),this.gimmicks.update(t),this.physics.step(t);for(const s of this.vehicles)s.mesh.position.copy(s.body.position),s.mesh.quaternion.copy(s.body.quaternion);this.particles.update(t),this.nearest=null;let i=$x.switchDistance;for(const s of this.vehicles)if(s!==this.active){const r=s.body.position.distanceTo(this.active.body.position);r<i&&(i=r,this.nearest=s)}this.audio.update(this.active,this.railway.trains,this.time)}else this.started||(this.active.sync(t,{}),this.railway.update(t));this.marker.visible=!!this.nearest&&e,this.nearest&&this.marker.position.set(this.nearest.body.position.x,this.nearest.body.position.y-this.nearest.ride+.2,this.nearest.body.position.z),this.photo.active?this.photo.update():this.cameraController.update(t,!this.started),this.sun.position.set(this.active.body.position.x-65,this.active.body.position.y+100,this.active.body.position.z-45),this.sun.target.position.copy(this.active.mesh.position),this.time-this.lastUi>.1&&(this.ui.update(),this.lastUi=this.time),this.graphics.render(t),this.frameCount++}}try{const o=new qy;new URLSearchParams(location.search).has("test")&&(window.__game=o)}catch(o){console.error(o),document.getElementById("ui").innerHTML='<div style="padding:40px;background:#163746;pointer-events:auto">起動できませんでした。ページを再読み込みしてください。<br>WebGLが使えるブラウザで開いてください。</div>'}
