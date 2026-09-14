(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Kl="180",Is={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bd=0,Ic=1,kd=2,yu=1,Mu=2,oi=3,Pi=0,Ze=1,Xe=2,We=0,Ds=1,tl=2,Dc=3,Lc=4,wu=5,An=100,Vd=101,Hd=102,Gd=103,Wd=104,ho=200,Xd=201,qd=202,jd=203,el=204,nl=205,il=206,Yd=207,sl=208,Zd=209,$d=210,Kd=211,Jd=212,Qd=213,tf=214,ol=0,rl=1,al=2,Us=3,ll=4,cl=5,hl=6,ul=7,Jl=0,ef=1,nf=2,Ri=0,bu=1,Su=2,Eu=3,kr=4,Tu=5,Au=6,Cu=7,Ru=300,Fs=301,zs=302,dl=303,fl=304,Vr=306,di=1e3,Yi=1001,pl=1002,tn=1003,sf=1004,zo=1005,Rn=1006,na=1007,Ti=1008,In=1009,Pu=1010,Iu=1011,Mo=1012,Ql=1013,Ji=1014,Gn=1015,fi=1016,tc=1017,ec=1018,Os=1020,Du=35902,Lu=35899,Nu=1021,Uu=1022,_n=1023,wo=1026,Bs=1027,nc=1028,ic=1029,Fu=1030,sc=1031,oc=1033,Er=33776,Tr=33777,Ar=33778,Cr=33779,ml=35840,gl=35841,vl=35842,xl=35843,_l=36196,yl=37492,Ml=37496,wl=37808,bl=37809,Sl=37810,El=37811,Tl=37812,Al=37813,Cl=37814,Rl=37815,Pl=37816,Il=37817,Dl=37818,Ll=37819,Nl=37820,Ul=37821,Fl=36492,zl=36494,Ol=36495,Bl=36283,kl=36284,Vl=36285,Hl=36286,of=3200,rf=3201,Hr=0,af=1,Ei="",He="srgb",ks="srgb-linear",Ir="linear",pe="srgb",ss=7680,Nc=519,lf=512,cf=513,hf=514,zu=515,uf=516,df=517,ff=518,pf=519,Gl=35044,mf=35048,Uc="300 es",Wn=2e3,Dr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fc=1234567;const po=Math.PI/180,bo=180/Math.PI;function Xn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[o&255]+je[o>>8&255]+je[o>>16&255]+je[o>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Qt(o,t,e){return Math.max(t,Math.min(e,o))}function rc(o,t){return(o%t+t)%t}function gf(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function vf(o,t,e){return o!==t?(e-o)/(t-o):0}function mo(o,t,e){return(1-e)*o+e*t}function xf(o,t,e,n){return mo(o,t,1-Math.exp(-e*n))}function _f(o,t=1){return t-Math.abs(rc(o,t*2)-t)}function yf(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Mf(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function wf(o,t){return o+Math.floor(Math.random()*(t-o+1))}function bf(o,t){return o+Math.random()*(t-o)}function Sf(o){return o*(.5-Math.random())}function Ef(o){o!==void 0&&(Fc=o);let t=Fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tf(o){return o*po}function Af(o){return o*bo}function Cf(o){return(o&o-1)===0&&o!==0}function Rf(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Pf(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function If(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),d=r((t+n)/2),u=s((t-n)/2),h=r((t-n)/2),f=s((n-t)/2),m=r((n-t)/2);switch(i){case"XYX":o.set(a*d,l*u,l*h,a*c);break;case"YZY":o.set(l*h,a*d,l*u,a*c);break;case"ZXZ":o.set(l*u,l*h,a*d,a*c);break;case"XZX":o.set(a*d,l*m,l*f,a*c);break;case"YXY":o.set(l*f,a*d,l*m,a*c);break;case"ZYZ":o.set(l*m,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function me(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const yn={DEG2RAD:po,RAD2DEG:bo,generateUUID:Xn,clamp:Qt,euclideanModulo:rc,mapLinear:gf,inverseLerp:vf,lerp:mo,damp:xf,pingpong:_f,smoothstep:yf,smootherstep:Mf,randInt:wf,randFloat:bf,randFloatSpread:Sf,seededRandom:Ef,degToRad:Tf,radToDeg:Af,isPowerOfTwo:Cf,ceilPowerOfTwo:Rf,floorPowerOfTwo:Pf,setQuaternionFromProperEuler:If,normalize:me,denormalize:Cn};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ii=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==h||c!==f||d!==m){let g=1-a;const p=l*h+c*f+d*m+u*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),w=Math.atan2(S,p*x);g=Math.sin(g*w)/S,a=Math.sin(a*w)/S}const _=a*x;if(l=l*g+h*_,c=c*g+f*_,d=d*g+m*_,u=u*g+v*_,g===1-a){const S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=s[r],h=s[r+1],f=s[r+2],m=s[r+3];return t[e]=a*m+d*u+l*f-c*h,t[e+1]=l*m+d*h+c*u-a*f,t[e+2]=c*m+d*f+a*h-l*u,t[e+3]=d*m-a*u-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(s/2),h=l(n/2),f=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"YZX":this._x=h*d*u+c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u-h*f*m;break;case"XZY":this._x=h*d*u-c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+r*a+i*c-s*l,this._y=i*d+r*l+s*a-n*c,this._z=s*d+r*c+n*l-i*a,this._w=r*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=r*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),d=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+l*c+r*u-a*d,this.y=n+l*d+a*c-s*u,this.z=i+l*u+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new R,zc=new Ii;class te{constructor(t,e,n,i,s,r,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],y=i[4],_=i[7],S=i[2],w=i[5],E=i[8];return s[0]=r*v+a*x+l*S,s[3]=r*g+a*y+l*w,s[6]=r*p+a*_+l*E,s[1]=c*v+d*x+u*S,s[4]=c*g+d*y+u*w,s[7]=c*p+d*_+u*E,s[2]=h*v+f*x+m*S,s[5]=h*g+f*y+m*w,s[8]=h*p+f*_+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*r*d-e*a*c-n*s*d+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*r-a*c,h=a*l-d*s,f=c*s-r*l,m=e*u+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(i*c-d*n)*v,t[2]=(a*n-i*r)*v,t[3]=h*v,t[4]=(d*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new te;function Ou(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Lr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Df(){const o=Lr("canvas");return o.style.display="block",o}const Oc={};function So(o){o in Oc||(Oc[o]=!0,console.warn(o))}function Lf(o,t,e){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Bc=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nf(){const o={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===pe&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?Ir:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return So("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return So("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[ks]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:Bc,fromXYZ:kc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Bc,fromXYZ:kc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),o}const le=Nf();function ci(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ls(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class Uf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=Lr("canvas")),os.width=t.width,os.height=t.height;const i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ci(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ff=0;class ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(oa(i[r].image)):s.push(oa(i[r]))}else s=oa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function oa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Uf.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zf=0;const ra=new R;class $e extends ns{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=Yi,i=Yi,s=Rn,r=Ti,a=_n,l=In,c=$e.DEFAULT_ANISOTROPY,d=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Xn(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Ru;$e.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(f+1)/2,S=(p+1)/2,w=(d+h)/4,E=(u+v)/4,P=(m+g)/4;return y>_&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=E/n):_>S?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=P/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=P/s),this.set(n,i,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(h-d)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Of extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new $e(i);this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ac(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bu extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bf extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,bn):bn.fromBufferAttribute(s,r),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(t.matrixWorld),this.union(Oo)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Bo.subVectors(this.max,Zs),rs.subVectors(t.a,Zs),as.subVectors(t.b,Zs),ls.subVectors(t.c,Zs),mi.subVectors(as,rs),gi.subVectors(ls,as),zi.subVectors(rs,ls);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-zi.z,zi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,zi.z,0,-zi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-zi.y,zi.x,0];return!aa(e,rs,as,ls,Bo)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,rs,as,ls,Bo))?!1:(ko.crossVectors(mi,gi),e=[ko.x,ko.y,ko.z],aa(e,rs,as,ls,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,Oo=new Di,rs=new R,as=new R,ls=new R,mi=new R,gi=new R,zi=new R,Zs=new R,Bo=new R,ko=new R,Oi=new R;function aa(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Oi.fromArray(o,s);const a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),d=n.dot(Oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const kf=new Di,$s=new R,la=new R;let Xs=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(la)),this.expandByPoint($s.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Kn=new R,ca=new R,Vo=new R,vi=new R,ha=new R,Ho=new R,ua=new R;let lc=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ca.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(ca);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Vo),a=vi.dot(this.direction),l=-vi.dot(Vo),c=vi.lengthSq(),d=Math.abs(1-r*r);let u,h,f,m;if(d>0)if(u=r*l-a,h=r*a-l,m=s*d,u>=0)if(h>=-m)if(h<=m){const v=1/d;u*=v,h*=v,f=u*(u+r*h+2*a)+h*(r*u+h+2*l)+c}else h=s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-r*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(r*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=r>0?-s:s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ca).addScaledVector(Vo,h),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),d>=0?(s=(t.min.y-h.y)*d,r=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,r=(t.min.y-h.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,i,s){ha.subVectors(e,t),Ho.subVectors(n,t),ua.crossVectors(ha,Ho);let r=this.direction.dot(ua),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;vi.subVectors(this.origin,t);const l=a*this.direction.dot(Ho.crossVectors(vi,Ho));if(l<0)return null;const c=a*this.direction.dot(ha.cross(vi));if(c<0||l+c>r)return null;const d=-a*vi.dot(ua);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class oe{constructor(t,e,n,i,s,r,a,l,c,d,u,h,f,m,v,g){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,d,u,h,f,m,v,g)}set(t,e,n,i,s,r,a,l,c,d,u,h,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),s=1/cs.setFromMatrixColumn(t,1).length(),r=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=r*d,f=r*u,m=a*d,v=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*d,f=l*u,m=c*d,v=c*u;e[0]=h+v*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*d,e[9]=-a,e[2]=f*a-m,e[6]=v+h*a,e[10]=r*l}else if(t.order==="ZXY"){const h=l*d,f=l*u,m=c*d,v=c*u;e[0]=h-v*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*d,e[9]=v-h*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const h=r*d,f=r*u,m=a*d,v=a*u;e[0]=l*d,e[4]=m*c-f,e[8]=h*c+v,e[1]=l*u,e[5]=v*c+h,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,f=r*c,m=a*l,v=a*c;e[0]=l*d,e[4]=v-h*u,e[8]=m*u+f,e[1]=u,e[5]=r*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*u+m,e[10]=h-v*u}else if(t.order==="XZY"){const h=r*l,f=r*c,m=a*l,v=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+v,e[5]=r*d,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Hf)}lookAt(t,e,n){const i=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),xi.crossVectors(n,cn),xi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),xi.crossVectors(n,cn)),xi.normalize(),Go.crossVectors(cn,xi),i[0]=xi.x,i[4]=Go.x,i[8]=cn.x,i[1]=xi.y,i[5]=Go.y,i[9]=cn.y,i[2]=xi.z,i[6]=Go.z,i[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],y=n[7],_=n[11],S=n[15],w=i[0],E=i[4],P=i[8],b=i[12],M=i[1],L=i[5],A=i[9],D=i[13],z=i[2],N=i[6],F=i[10],G=i[14],k=i[3],q=i[7],at=i[11],ut=i[15];return s[0]=r*w+a*M+l*z+c*k,s[4]=r*E+a*L+l*N+c*q,s[8]=r*P+a*A+l*F+c*at,s[12]=r*b+a*D+l*G+c*ut,s[1]=d*w+u*M+h*z+f*k,s[5]=d*E+u*L+h*N+f*q,s[9]=d*P+u*A+h*F+f*at,s[13]=d*b+u*D+h*G+f*ut,s[2]=m*w+v*M+g*z+p*k,s[6]=m*E+v*L+g*N+p*q,s[10]=m*P+v*A+g*F+p*at,s[14]=m*b+v*D+g*G+p*ut,s[3]=x*w+y*M+_*z+S*k,s[7]=x*E+y*L+_*N+S*q,s[11]=x*P+y*A+_*F+S*at,s[15]=x*b+y*D+_*G+S*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+s*l*u-i*c*u-s*a*h+n*c*h+i*a*f-n*l*f)+v*(+e*l*f-e*c*h+s*r*h-i*r*f+i*c*d-s*l*d)+g*(+e*c*u-e*a*f-s*r*u+n*r*f+s*a*d-n*c*d)+p*(-i*a*d-e*l*u+e*a*h+i*r*u-n*r*h+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],x=u*g*c-v*h*c+v*l*f-a*g*f-u*l*p+a*h*p,y=m*h*c-d*g*c-m*l*f+r*g*f+d*l*p-r*h*p,_=d*v*c-m*u*c+m*a*f-r*v*f-d*a*p+r*u*p,S=m*u*l-d*v*l-m*a*h+r*v*h+d*a*g-r*u*g,w=e*x+n*y+i*_+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=x*E,t[1]=(v*h*s-u*g*s-v*i*f+n*g*f+u*i*p-n*h*p)*E,t[2]=(a*g*s-v*l*s+v*i*c-n*g*c-a*i*p+n*l*p)*E,t[3]=(u*l*s-a*h*s-u*i*c+n*h*c+a*i*f-n*l*f)*E,t[4]=y*E,t[5]=(d*g*s-m*h*s+m*i*f-e*g*f-d*i*p+e*h*p)*E,t[6]=(m*l*s-r*g*s-m*i*c+e*g*c+r*i*p-e*l*p)*E,t[7]=(r*h*s-d*l*s+d*i*c-e*h*c-r*i*f+e*l*f)*E,t[8]=_*E,t[9]=(m*u*s-d*v*s-m*n*f+e*v*f+d*n*p-e*u*p)*E,t[10]=(r*v*s-m*a*s+m*n*c-e*v*c-r*n*p+e*a*p)*E,t[11]=(d*a*s-r*u*s-d*n*c+e*u*c+r*n*f-e*a*f)*E,t[12]=S*E,t[13]=(d*v*i-m*u*i+m*n*h-e*v*h-d*n*g+e*u*g)*E,t[14]=(m*a*i-r*v*i-m*n*l+e*v*l+r*n*g-e*a*g)*E,t[15]=(r*u*i-d*a*i+d*n*l-e*u*l-r*n*h+e*a*h)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,d=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*r,0,c*l-i*a,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,d=r+r,u=a+a,h=s*c,f=s*d,m=s*u,v=r*d,g=r*u,p=a*u,x=l*c,y=l*d,_=l*u,S=n.x,w=n.y,E=n.z;return i[0]=(1-(v+p))*S,i[1]=(f+_)*S,i[2]=(m-y)*S,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(h+p))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+y)*E,i[9]=(g-x)*E,i[10]=(1-(h+v))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=cs.set(i[0],i[1],i[2]).length();const r=cs.set(i[4],i[5],i[6]).length(),a=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const c=1/s,d=1/r,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=Wn,l=!1){const c=this.elements,d=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let m,v;if(l)m=s/(r-s),v=r*s/(r-s);else if(a===Wn)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(a===Dr)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=Wn,l=!1){const c=this.elements,d=2/(e-t),u=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,v;if(l)m=1/(r-s),v=r/(r-s);else if(a===Wn)m=-2/(r-s),v=-(r+s)/(r-s);else if(a===Dr)m=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new R,Sn=new oe,Vf=new R(0,0,0),Hf=new R(1,1,1),xi=new R,Go=new R,cn=new R,Vc=new oe,Hc=new Ii;class Ln{constructor(t=0,e=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gf=0;const Gc=new R,hs=new Ii,Jn=new oe,Wo=new R,Ks=new R,Wf=new R,Xf=new Ii,Wc=new R(1,0,0),Xc=new R(0,1,0),qc=new R(0,0,1),jc={type:"added"},qf={type:"removed"},us={type:"childadded",child:null},da={type:"childremoved",child:null};class Ie extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new R,e=new Ln,n=new Ii,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new te}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ks,Wo,this.up):Jn.lookAt(Wo,Ks,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Jn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),u=r(t.shapes),h=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ie.DEFAULT_UP=new R(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new R,Qn=new R,fa=new R,ti=new R,ds=new R,fs=new R,Yc=new R,pa=new R,ma=new R,ga=new R,va=new xe,xa=new xe,_a=new xe;class vn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){En.subVectors(i,e),Qn.subVectors(n,e),fa.subVectors(t,e);const r=En.dot(En),a=En.dot(Qn),l=En.dot(fa),c=Qn.dot(Qn),d=Qn.dot(fa),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,m=(r*d-a*l)*h;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(r,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,n,i,s,r){return va.setScalar(0),xa.setScalar(0),_a.setScalar(0),va.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(va,s.x),r.addScaledVector(xa,s.y),r.addScaledVector(_a,s.z),r}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),Qn.subVectors(t,e),En.cross(Qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;ds.subVectors(i,n),fs.subVectors(s,n),pa.subVectors(t,n);const l=ds.dot(pa),c=fs.dot(pa);if(l<=0&&c<=0)return e.copy(n);ma.subVectors(t,i);const d=ds.dot(ma),u=fs.dot(ma);if(d>=0&&u<=d)return e.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return r=l/(l-d),e.copy(n).addScaledVector(ds,r);ga.subVectors(t,s);const f=ds.dot(ga),m=fs.dot(ga);if(m>=0&&f<=m)return e.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(fs,a);const g=d*m-f*u;if(g<=0&&u-d>=0&&f-m>=0)return Yc.subVectors(s,i),a=(u-d)/(u-d+(f-m)),e.copy(i).addScaledVector(Yc,a);const p=1/(g+v+h);return r=v*p,a=h*p,e.copy(n).addScaledVector(ds,r).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function ya(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=rc(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ya(r,s,t+1/3),this.g=ya(r,s,t),this.b=ya(r,s,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=He){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return le.workingToColorSpace(Ye.copy(this),t),Math.round(Qt(Ye.r*255,0,255))*65536+Math.round(Qt(Ye.g*255,0,255))*256+Math.round(Qt(Ye.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,i=Ye.g,s=Ye.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=d<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=He){le.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,i=Ye.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Xo);const n=mo(_i.h,Xo.h,e),i=mo(_i.s,Xo.s,e),s=mo(_i.l,Xo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Zt;Zt.NAMES=ku;let jf=0,Li=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Ds,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=nl,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==nl&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Qi extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new R,qo=new nt;let Yf=0;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class Vu extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hu extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zf=0;const mn=new oe,Ma=new Ie,ps=new R,hn=new Di,Js=new Di,Be=new R;class ye extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ou(t)?Hu:Vu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(hn.min,Js.min),hn.expandByPoint(Be),Be.addVectors(hn.max,Js.max),hn.expandByPoint(Be)):(hn.expandByPoint(Js.min),hn.expandByPoint(Js.max))}hn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Be.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),Be.add(ps)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new R,l[P]=new R;const c=new R,d=new R,u=new R,h=new nt,f=new nt,m=new nt,v=new R,g=new R;function p(P,b,M){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),h.fromBufferAttribute(s,P),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),d.sub(c),u.sub(c),f.sub(h),m.sub(h);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(L),a[P].add(v),a[b].add(v),a[M].add(v),l[P].add(g),l[b].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],L=M.start,A=M.count;for(let D=L,z=L+A;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new R,_=new R,S=new R,w=new R;function E(P){S.fromBufferAttribute(i,P),w.copy(S);const b=a[P];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),_.crossVectors(w,b);const L=_.dot(l[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,b=x.length;P<b;++P){const M=x[P],L=M.start,A=M.count;for(let D=L,z=L+A;D<z;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new R,s=new R,r=new R,a=new R,l=new R,c=new R,d=new R,u=new R;if(t)for(let h=0,f=t.count;h<f;h+=3){const m=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),d.subVectors(r,s),u.subVectors(i,s),d.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),d.subVectors(r,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let p=0;p<d;p++)h[m++]=c[f++]}return new rn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new oe,Bi=new lc,jo=new Xs,$c=new R,Yo=new R,Zo=new R,$o=new R,wa=new R,Ko=new R,Kc=new R,Jo=new R;class Kt extends Ie{constructor(t=new ye,e=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],u=s[l];d!==0&&(wa.fromBufferAttribute(u,t),r?Ko.addScaledVector(wa,d):Ko.addScaledVector(wa.sub(e),d))}e.add(Ko)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),Bi.copy(t.ray).recast(t.near),!(jo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(jo,$c)===null||Bi.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Zc.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){const w=a.getX(_),E=a.getX(_+1),P=a.getX(_+2);i=Qo(this,p,t,n,c,d,u,w,E,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);i=Qo(this,r,t,n,c,d,u,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,S=y;_<S;_+=3){const w=_,E=_+1,P=_+2;i=Qo(this,p,t,n,c,d,u,w,E,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=g,y=g+1,_=g+2;i=Qo(this,r,t,n,c,d,u,x,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function $f(o,t,e,n,i,s,r,a){let l;if(t.side===Ze?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Pi,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Jo);return c<e.near||c>e.far?null:{distance:c,point:Jo.clone(),object:o}}function Qo(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,Yo),o.getVertexPosition(l,Zo),o.getVertexPosition(c,$o);const d=$f(o,t,e,n,Yo,Zo,$o,Kc);if(d){const u=new R;vn.getBarycoord(Kc,Yo,Zo,$o,u),i&&(d.uv=vn.getInterpolatedAttribute(i,a,l,c,u,new nt)),s&&(d.uv1=vn.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(d.normal=vn.getInterpolatedAttribute(r,a,l,c,u,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new R,materialIndex:0};vn.getNormal(Yo,Zo,$o,h.normal),d.face=h,d.barycoord=u}return d}class pi extends ye{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],u=[];let h=0,f=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(u,2));function m(v,g,p,x,y,_,S,w,E,P,b){const M=_/E,L=S/P,A=_/2,D=S/2,z=w/2,N=E+1,F=P+1;let G=0,k=0;const q=new R;for(let at=0;at<F;at++){const ut=at*L-D;for(let rt=0;rt<N;rt++){const Xt=rt*M-A;q[v]=Xt*x,q[g]=ut*y,q[p]=z,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[p]=w>0?1:-1,d.push(q.x,q.y,q.z),u.push(rt/E),u.push(1-at/P),G+=1}}for(let at=0;at<P;at++)for(let ut=0;ut<E;ut++){const rt=h+ut+N*at,Xt=h+ut+N*(at+1),Bt=h+(ut+1)+N*(at+1),$t=h+(ut+1)+N*at;l.push(rt,Xt,$t),l.push(Xt,Bt,$t),k+=6}a.addGroup(f,k,b),f+=k,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(o){const t={};for(let e=0;e<o.length;e++){const n=Vs(o[e]);for(const i in n)t[i]=n[i]}return t}function Kf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Gu(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const ri={clone:Vs,merge:Qe};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new R,Jc=new nt,Qc=new nt;class un extends Wu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,Qc),e.subVectors(Qc,Jc)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,gs=1;class tp extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(ms,gs,t,e);i.layers=this.layers,this.add(i);const s=new un(ms,gs,t,e);s.layers=this.layers,this.add(s);const r=new un(ms,gs,t,e);r.layers=this.layers,this.add(r);const a=new un(ms,gs,t,e);a.layers=this.layers,this.add(a);const l=new un(ms,gs,t,e);l.layers=this.layers,this.add(l);const c=new un(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xu extends $e{constructor(t=[],e=Fs,n,i,s,r,a,l,c,d){super(t,e,n,i,s,r,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ep extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pi(5,5,5),s=new qe({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:We});s.uniforms.tEquirect.value=e;const r=new Kt(i,s),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Rn),new tp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}class zt extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const np={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(np)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Eo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Eo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hc extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ip{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new R;class Nr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uc extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const Qs=new R,xs=new R,_s=new R,ys=new nt,to=new nt,qu=new oe,tr=new R,eo=new R,er=new R,th=new nt,Sa=new nt,eh=new nt;class ju extends Ie{constructor(t=new uc){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ip(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Nr(n,3,0,!1)),vs.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;nr(tr.set(-.5,-.5,0),_s,r,xs,i,s),nr(eo.set(.5,-.5,0),_s,r,xs,i,s),nr(er.set(.5,.5,0),_s,r,xs,i,s),th.set(0,0),Sa.set(1,0),eh.set(1,1);let a=t.ray.intersectTriangle(tr,eo,er,!1,Qs);if(a===null&&(nr(eo.set(-.5,.5,0),_s,r,xs,i,s),Sa.set(0,1),a=t.ray.intersectTriangle(tr,er,eo,!1,Qs),a===null))return;const l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:vn.getInterpolation(Qs,tr,eo,er,th,Sa,eh,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(o,t,e,n,i,s){ys.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(to.x=s*ys.x-i*ys.y,to.y=i*ys.x+s*ys.y):to.copy(ys),o.copy(t),o.x+=to.x,o.y+=to.y,o.applyMatrix4(qu)}const ir=new R,nh=new R;class sp extends Ie{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const s=e[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let s;for(s=0;s<i.length&&!(e<i[s].distance);s++);return i.splice(s,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let s=e[n].distance;if(e[n].object.visible&&(s-=s*e[n].hysteresis),t<s)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ir.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(ir);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){ir.setFromMatrixPosition(t.matrixWorld),nh.setFromMatrixPosition(this.matrixWorld);const n=ir.distanceTo(nh)/t.zoom;e[0].object.visible=!0;let i,s;for(i=1,s=e.length;i<s;i++){let r=e[i].distance;if(e[i].object.visible&&(r-=r*e[i].hysteresis),n>=r)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const r=n[i];e.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return e}}class Gr extends $e{constructor(t=null,e=1,n=1,i,s,r,a,l,c=tn,d=tn,u,h){super(null,r,a,l,c,d,i,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends rn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new oe,sh=new oe,sr=[],oh=new Di,op=new oe,no=new Kt,io=new Xs;class Hs extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ih(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,op)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),oh.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(oh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),io.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(io)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),t.ray.intersectsSphere(io)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),sh.multiplyMatrices(n,Ms),no.matrixWorld=sh,no.raycast(t,sr);for(let r=0,a=sr.length;r<a;r++){const l=sr[r];l.instanceId=s,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ih(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(i*this.count),i,this.count,nc,Gn));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ea=new R,rp=new R,ap=new te;class Si{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ea.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ap.getNormalMatrix(t),i=this.coplanarPoint(Ea).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Xs,lp=new nt(.5,.5),or=new R;class dc{constructor(t=new Si,e=new Si,n=new Si,i=new Si,s=new Si,r=new Si){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const i=this.planes,s=t.elements,r=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],f=s[7],m=s[8],v=s[9],g=s[10],p=s[11],x=s[12],y=s[13],_=s[14],S=s[15];if(i[0].setComponents(c-r,f-d,p-m,S-x).normalize(),i[1].setComponents(c+r,f+d,p+m,S+x).normalize(),i[2].setComponents(c+a,f+u,p+v,S+y).normalize(),i[3].setComponents(c-a,f-u,p-v,S-y).normalize(),n)i[4].setComponents(l,h,g,_).normalize(),i[5].setComponents(c-l,f-h,p-g,S-_).normalize();else if(i[4].setComponents(c-l,f-h,p-g,S-_).normalize(),e===Wn)i[5].setComponents(c+l,f+h,p+g,S+_).normalize();else if(e===Dr)i[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);const e=lp.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(or.x=i.normal.x>0?t.max.x:t.min.x,or.y=i.normal.y>0?t.max.y:t.min.y,or.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ni extends $e{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fc extends $e{constructor(t,e,n=Ji,i,s,r,a=tn,l=tn,c,d=wo,u=1){if(d!==wo&&d!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,i,s,r,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yu extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class To extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new R,d=new nt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(r[h]/t+1)/2,d.y=(r[h+1]/t+1)/2,l.push(d.x,d.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mn extends ye{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],u=[],h=[],f=[];let m=0;const v=[],g=n/2;let p=0;x(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(f,2));function x(){const _=new R,S=new R;let w=0;const E=(e-t)/n;for(let P=0;P<=s;P++){const b=[],M=P/s,L=M*(e-t)+t;for(let A=0;A<=i;A++){const D=A/i,z=D*l+a,N=Math.sin(z),F=Math.cos(z);S.x=L*N,S.y=-M*n+g,S.z=L*F,u.push(S.x,S.y,S.z),_.set(N,E,F).normalize(),h.push(_.x,_.y,_.z),f.push(D,1-M),b.push(m++)}v.push(b)}for(let P=0;P<i;P++)for(let b=0;b<s;b++){const M=v[b][P],L=v[b+1][P],A=v[b+1][P+1],D=v[b][P+1];(t>0||b!==0)&&(d.push(M,L,D),w+=3),(e>0||b!==s-1)&&(d.push(L,A,D),w+=3)}c.addGroup(p,w,0),p+=w}function y(_){const S=m,w=new nt,E=new R;let P=0;const b=_===!0?t:e,M=_===!0?1:-1;for(let A=1;A<=i;A++)u.push(0,g*M,0),h.push(0,M,0),f.push(.5,.5),m++;const L=m;for(let A=0;A<=i;A++){const z=A/i*l+a,N=Math.cos(z),F=Math.sin(z);E.x=b*F,E.y=g*M,E.z=b*N,u.push(E.x,E.y,E.z),h.push(0,M,0),w.x=N*.5+.5,w.y=F*.5*M+.5,f.push(w.x,w.y),m++}for(let A=0;A<i;A++){const D=S+A,z=L+A;_===!0?d.push(z,z+1,D):d.push(z+1,z,D),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends Mn{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Do(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pc extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];a(i),c(n),d(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new R,_=new R,S=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],_),f(e[w+2],S),l(y,_,S,x)}function l(x,y,_,S){const w=S+1,E=[];for(let P=0;P<=w;P++){E[P]=[];const b=x.clone().lerp(_,P/w),M=y.clone().lerp(_,P/w),L=w-P;for(let A=0;A<=L;A++)A===0&&P===w?E[P][A]=b:E[P][A]=b.clone().lerp(M,A/L)}for(let P=0;P<w;P++)for(let b=0;b<2*(w-P)-1;b++){const M=Math.floor(b/2);b%2===0?(h(E[P][M+1]),h(E[P+1][M]),h(E[P][M])):(h(E[P][M+1]),h(E[P+1][M+1]),h(E[P+1][M]))}}function c(x){const y=new R;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(x),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function d(){const x=new R;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const _=g(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;r.push(_,1-S)}m(),u()}function u(){for(let x=0;x<r.length;x+=6){const y=r[x+0],_=r[x+2],S=r[x+4],w=Math.max(y,_,S),E=Math.min(y,_,S);w>.9&&E<.1&&(y<.2&&(r[x+0]+=1),_<.2&&(r[x+2]+=1),S<.2&&(r[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function f(x,y){const _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){const x=new R,y=new R,_=new R,S=new R,w=new nt,E=new nt,P=new nt;for(let b=0,M=0;b<s.length;b+=9,M+=6){x.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),w.set(r[M+0],r[M+1]),E.set(r[M+2],r[M+3]),P.set(r[M+4],r[M+5]),S.copy(x).add(y).add(_).divideScalar(3);const L=g(S);v(w,M+0,x,L),v(E,M+2,y,L),v(P,M+4,_,L)}}function v(x,y,_,S){S<0&&x.x===1&&(r[y]=x.x-1),_.x===0&&_.z===0&&(r[y]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.vertices,t.indices,t.radius,t.details)}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const d=n[i],h=n[i+1]-d,f=(r-d)/h;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=e||(r.isVector2?new nt:new R);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,i=[],s=[],r=[],a=new R,l=new oe;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new R)}s[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Qt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}r[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Qt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mc extends Yn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cp extends mc{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let o=0,t=0,e=0,n=0;function i(s,r,a,l){o=s,t=a,e=-3*s+3*r-2*a-l,n=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,d,u){let h=(r-s)/c-(a-s)/(c+d)+(a-r)/d,f=(a-r)/d-(l-r)/(d+u)+(l-a)/u;h*=d,f*=d,i(r,a,h,f)},calc:function(s){const r=s*s,a=r*s;return o+t*s+e*r+n*a}}}const rr=new R,Ta=new gc,Aa=new gc,Ca=new gc;class Ao extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=i[(a-1)%s]:(rr.subVectors(i[0],i[1]).add(i[0]),c=rr);const u=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?d=i[(a+2)%s]:(rr.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=rr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ta.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,m,v,g),Aa.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,m,v,g),Ca.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,m,v,g)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Aa.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),Ca.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(Ta.calc(l),Aa.calc(l),Ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rh(o,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,a=o*o,l=o*a;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*a+s*o+e}function hp(o,t){const e=1-o;return e*e*t}function up(o,t){return 2*(1-o)*o*t}function dp(o,t){return o*o*t}function go(o,t,e,n){return hp(o,t)+up(o,e)+dp(o,n)}function fp(o,t){const e=1-o;return e*e*e*t}function pp(o,t){const e=1-o;return 3*e*e*o*t}function mp(o,t){return 3*(1-o)*o*o*t}function gp(o,t){return o*o*o*t}function vo(o,t,e,n,i){return fp(o,t)+pp(o,e)+mp(o,n)+gp(o,i)}class Zu extends Yn{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(vo(t,i.x,s.x,r.x,a.x),vo(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vp extends Yn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(vo(t,i.x,s.x,r.x,a.x),vo(t,i.y,s.y,r.y,a.y),vo(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $u extends Yn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xp extends Yn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ku extends Yn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(go(t,i.x,s.x,r.x),go(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends Yn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(go(t,i.x,s.x,r.x),go(t,i.y,s.y,r.y),go(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qu extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],d=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(rh(a,l.x,c.x,d.x,u.x),rh(a,l.y,c.y,d.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var Ur=Object.freeze({__proto__:null,ArcCurve:cp,CatmullRomCurve3:Ao,CubicBezierCurve:Zu,CubicBezierCurve3:vp,EllipseCurve:mc,LineCurve:$u,LineCurve3:xp,QuadraticBezierCurve:Ku,QuadraticBezierCurve3:Ju,SplineCurve:Qu});class _p extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ur[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ur[i.type]().fromJSON(i))}return this}}class ah extends _p{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new $u(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Ku(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const a=new Zu(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,n,i,s,r,a,l),this}absellipse(t,e,n,i,s,r,a,l){const c=new mc(t,e,n,i,s,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Co=class extends ah{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ah().fromJSON(i))}return this}};function yp(o,t,e=2){const n=t&&t.length,i=n?t[0]*e:o.length;let s=td(o,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c;if(n&&(s=Ep(o,t,s,e)),o.length>80*e){a=1/0,l=1/0;let d=-1/0,u=-1/0;for(let h=e;h<i;h+=e){const f=o[h],m=o[h+1];f<a&&(a=f),m<l&&(l=m),f>d&&(d=f),m>u&&(u=m)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return Ro(s,r,e,a,l,c,0),r}function td(o,t,e,n,i){let s;if(i===Fp(o,t,e,n)>0)for(let r=t;r<e;r+=n)s=lh(r/n|0,o[r],o[r+1],s);else for(let r=e-n;r>=t;r-=n)s=lh(r/n|0,o[r],o[r+1],s);return s&&Gs(s,s.next)&&(Io(s),s=s.next),s}function ts(o,t){if(!o)return o;t||(t=o);let e=o,n;do if(n=!1,!e.steiner&&(Gs(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ro(o,t,e,n,i,s,r){if(!o)return;!r&&s&&Pp(o,n,i,s);let a=o;for(;o.prev!==o.next;){const l=o.prev,c=o.next;if(s?wp(o,n,i,s):Mp(o)){t.push(l.i,o.i,c.i),Io(o),o=c.next,a=c.next;continue}if(o=c,o===a){r?r===1?(o=bp(ts(o),t),Ro(o,t,e,n,i,s,2)):r===2&&Sp(o,t,e,n,i,s):Ro(ts(o),t,e,n,i,s,1);break}}}function Mp(o){const t=o.prev,e=o,n=o.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,a=t.y,l=e.y,c=n.y,d=Math.min(i,s,r),u=Math.min(a,l,c),h=Math.max(i,s,r),f=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=f&&uo(i,a,s,l,r,c,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wp(o,t,e,n){const i=o.prev,s=o,r=o.next;if(Ce(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,d=i.y,u=s.y,h=r.y,f=Math.min(a,l,c),m=Math.min(d,u,h),v=Math.max(a,l,c),g=Math.max(d,u,h),p=Wl(f,m,t,e,n),x=Wl(v,g,t,e,n);let y=o.prevZ,_=o.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==r&&uo(a,d,l,u,c,h,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&uo(a,d,l,u,c,h,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==r&&uo(a,d,l,u,c,h,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==r&&uo(a,d,l,u,c,h,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bp(o,t){let e=o;do{const n=e.prev,i=e.next.next;!Gs(n,i)&&nd(n,e,e.next,i)&&Po(n,i)&&Po(i,n)&&(t.push(n.i,e.i,i.i),Io(e),Io(e.next),e=o=i),e=e.next}while(e!==o);return ts(e)}function Sp(o,t,e,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Lp(r,a)){let l=id(r,a);r=ts(r,r.next),l=ts(l,l.next),Ro(r,t,e,n,i,s,0),Ro(l,t,e,n,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function Ep(o,t,e,n){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s]*n,l=s<r-1?t[s+1]*n:o.length,c=td(o,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Dp(c))}i.sort(Tp);for(let s=0;s<i.length;s++)e=Ap(i[s],e);return e}function Tp(o,t){let e=o.x-t.x;if(e===0&&(e=o.y-t.y,e===0)){const n=(o.next.y-o.y)/(o.next.x-o.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Ap(o,t){const e=Cp(o,t);if(!e)return t;const n=id(e,o);return ts(n,n.next),ts(e,e.next)}function Cp(o,t){let e=t;const n=o.x,i=o.y;let s=-1/0,r;if(Gs(o,e))return e;do{if(Gs(o,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let d=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ed(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Po(e,o)&&(u<d||u===d&&(e.x>r.x||e.x===r.x&&Rp(r,e)))&&(r=e,d=u)}e=e.next}while(e!==a);return r}function Rp(o,t){return Ce(o.prev,o,t.prev)<0&&Ce(t.next,o,o.next)<0}function Pp(o,t,e,n){let i=o;do i.z===0&&(i.z=Wl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,Ip(i)}function Ip(o){let t,e=1;do{let n=o,i;o=null;let s=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;n=r}s.nextZ=null,e*=2}while(t>1);return o}function Wl(o,t,e,n,i){return o=(o-e)*i|0,t=(t-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Dp(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function ed(o,t,e,n,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(i-r)*(n-a)}function uo(o,t,e,n,i,s,r,a){return!(o===r&&t===a)&&ed(o,t,e,n,i,s,r,a)}function Lp(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Np(o,t)&&(Po(o,t)&&Po(t,o)&&Up(o,t)&&(Ce(o.prev,o,t.prev)||Ce(o,t.prev,t))||Gs(o,t)&&Ce(o.prev,o,o.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function Gs(o,t){return o.x===t.x&&o.y===t.y}function nd(o,t,e,n){const i=lr(Ce(o,t,e)),s=lr(Ce(o,t,n)),r=lr(Ce(e,n,o)),a=lr(Ce(e,n,t));return!!(i!==s&&r!==a||i===0&&ar(o,e,t)||s===0&&ar(o,n,t)||r===0&&ar(e,o,n)||a===0&&ar(e,t,n))}function ar(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function lr(o){return o>0?1:o<0?-1:0}function Np(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&nd(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function Po(o,t){return Ce(o.prev,o,o.next)<0?Ce(o,t,o.next)>=0&&Ce(o,o.prev,t)>=0:Ce(o,t,o.prev)<0||Ce(o,o.next,t)<0}function Up(o,t){let e=o,n=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==o);return n}function id(o,t){const e=Xl(o.i,o.x,o.y),n=Xl(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function lh(o,t,e,n){const i=Xl(o,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Io(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Xl(o,t,e){return{i:o,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fp(o,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class zp{static triangulate(t,e,n=2){return yp(t,e,n)}}class As{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return As.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ch(t),hh(n,t);let r=t.length;e.forEach(ch);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,hh(n,e[l]);const a=zp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ch(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function hh(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}class Lo extends ye{constructor(t=new Co([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Ht(i,3)),this.setAttribute("uv",new Ht(s,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Op;let y,_=!1,S,w,E,P;p&&(y=p.getSpacedPoints(d),_=!0,h=!1,S=p.computeFrenetFrames(d,!1),w=new R,E=new R,P=new R),h||(g=0,f=0,m=0,v=0);const b=a.extractPoints(c);let M=b.shape;const L=b.holes;if(!As.isClockWise(M)){M=M.reverse();for(let ot=0,tt=L.length;ot<tt;ot++){const Q=L[ot];As.isClockWise(Q)&&(L[ot]=Q.reverse())}}function D(ot){const Q=10000000000000001e-36;let J=ot[0];for(let gt=1;gt<=ot.length;gt++){const lt=gt%ot.length,vt=ot[lt],qt=vt.x-J.x,Gt=vt.y-J.y,U=qt*qt+Gt*Gt,T=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(J.x),Math.abs(J.y)),W=Q*T*T;if(U<=W){ot.splice(lt,1),gt--;continue}J=vt}}D(M),L.forEach(D);const z=L.length,N=M;for(let ot=0;ot<z;ot++){const tt=L[ot];M=M.concat(tt)}function F(ot,tt,Q){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(tt,Q)}const G=M.length;function k(ot,tt,Q){let J,gt,lt;const vt=ot.x-tt.x,qt=ot.y-tt.y,Gt=Q.x-ot.x,U=Q.y-ot.y,T=vt*vt+qt*qt,W=vt*U-qt*Gt;if(Math.abs(W)>Number.EPSILON){const Z=Math.sqrt(T),st=Math.sqrt(Gt*Gt+U*U),$=tt.x-qt/Z,Tt=tt.y+vt/Z,ft=Q.x-U/st,Et=Q.y+Gt/st,Dt=((ft-$)*U-(Et-Tt)*Gt)/(vt*U-qt*Gt);J=$+vt*Dt-ot.x,gt=Tt+qt*Dt-ot.y;const ht=J*J+gt*gt;if(ht<=2)return new nt(J,gt);lt=Math.sqrt(ht/2)}else{let Z=!1;vt>Number.EPSILON?Gt>Number.EPSILON&&(Z=!0):vt<-Number.EPSILON?Gt<-Number.EPSILON&&(Z=!0):Math.sign(qt)===Math.sign(U)&&(Z=!0),Z?(J=-qt,gt=vt,lt=Math.sqrt(T)):(J=vt,gt=qt,lt=Math.sqrt(T/2))}return new nt(J/lt,gt/lt)}const q=[];for(let ot=0,tt=N.length,Q=tt-1,J=ot+1;ot<tt;ot++,Q++,J++)Q===tt&&(Q=0),J===tt&&(J=0),q[ot]=k(N[ot],N[Q],N[J]);const at=[];let ut,rt=q.concat();for(let ot=0,tt=z;ot<tt;ot++){const Q=L[ot];ut=[];for(let J=0,gt=Q.length,lt=gt-1,vt=J+1;J<gt;J++,lt++,vt++)lt===gt&&(lt=0),vt===gt&&(vt=0),ut[J]=k(Q[J],Q[lt],Q[vt]);at.push(ut),rt=rt.concat(ut)}let Xt;if(g===0)Xt=As.triangulateShape(N,L);else{const ot=[],tt=[];for(let Q=0;Q<g;Q++){const J=Q/g,gt=f*Math.cos(J*Math.PI/2),lt=m*Math.sin(J*Math.PI/2)+v;for(let vt=0,qt=N.length;vt<qt;vt++){const Gt=F(N[vt],q[vt],lt);Rt(Gt.x,Gt.y,-gt),J===0&&ot.push(Gt)}for(let vt=0,qt=z;vt<qt;vt++){const Gt=L[vt];ut=at[vt];const U=[];for(let T=0,W=Gt.length;T<W;T++){const Z=F(Gt[T],ut[T],lt);Rt(Z.x,Z.y,-gt),J===0&&U.push(Z)}J===0&&tt.push(U)}}Xt=As.triangulateShape(ot,tt)}const Bt=Xt.length,$t=m+v;for(let ot=0;ot<G;ot++){const tt=h?F(M[ot],rt[ot],$t):M[ot];_?(E.copy(S.normals[0]).multiplyScalar(tt.x),w.copy(S.binormals[0]).multiplyScalar(tt.y),P.copy(y[0]).add(E).add(w),Rt(P.x,P.y,P.z)):Rt(tt.x,tt.y,0)}for(let ot=1;ot<=d;ot++)for(let tt=0;tt<G;tt++){const Q=h?F(M[tt],rt[tt],$t):M[tt];_?(E.copy(S.normals[ot]).multiplyScalar(Q.x),w.copy(S.binormals[ot]).multiplyScalar(Q.y),P.copy(y[ot]).add(E).add(w),Rt(P.x,P.y,P.z)):Rt(Q.x,Q.y,u/d*ot)}for(let ot=g-1;ot>=0;ot--){const tt=ot/g,Q=f*Math.cos(tt*Math.PI/2),J=m*Math.sin(tt*Math.PI/2)+v;for(let gt=0,lt=N.length;gt<lt;gt++){const vt=F(N[gt],q[gt],J);Rt(vt.x,vt.y,u+Q)}for(let gt=0,lt=L.length;gt<lt;gt++){const vt=L[gt];ut=at[gt];for(let qt=0,Gt=vt.length;qt<Gt;qt++){const U=F(vt[qt],ut[qt],J);_?Rt(U.x,U.y+y[d-1].y,y[d-1].x+Q):Rt(U.x,U.y,u+Q)}}}K(),et();function K(){const ot=i.length/3;if(h){let tt=0,Q=G*tt;for(let J=0;J<Bt;J++){const gt=Xt[J];St(gt[2]+Q,gt[1]+Q,gt[0]+Q)}tt=d+g*2,Q=G*tt;for(let J=0;J<Bt;J++){const gt=Xt[J];St(gt[0]+Q,gt[1]+Q,gt[2]+Q)}}else{for(let tt=0;tt<Bt;tt++){const Q=Xt[tt];St(Q[2],Q[1],Q[0])}for(let tt=0;tt<Bt;tt++){const Q=Xt[tt];St(Q[0]+G*d,Q[1]+G*d,Q[2]+G*d)}}n.addGroup(ot,i.length/3-ot,0)}function et(){const ot=i.length/3;let tt=0;Mt(N,tt),tt+=N.length;for(let Q=0,J=L.length;Q<J;Q++){const gt=L[Q];Mt(gt,tt),tt+=gt.length}n.addGroup(ot,i.length/3-ot,1)}function Mt(ot,tt){let Q=ot.length;for(;--Q>=0;){const J=Q;let gt=Q-1;gt<0&&(gt=ot.length-1);for(let lt=0,vt=d+g*2;lt<vt;lt++){const qt=G*lt,Gt=G*(lt+1),U=tt+J+qt,T=tt+gt+qt,W=tt+gt+Gt,Z=tt+J+Gt;ne(U,T,W,Z)}}}function Rt(ot,tt,Q){l.push(ot),l.push(tt),l.push(Q)}function St(ot,tt,Q){de(ot),de(tt),de(Q);const J=i.length/3,gt=x.generateTopUV(n,i,J-3,J-2,J-1);O(gt[0]),O(gt[1]),O(gt[2])}function ne(ot,tt,Q,J){de(ot),de(tt),de(J),de(tt),de(Q),de(J);const gt=i.length/3,lt=x.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);O(lt[0]),O(lt[1]),O(lt[3]),O(lt[1]),O(lt[2]),O(lt[3])}function de(ot){i.push(l[ot*3+0]),i.push(l[ot*3+1]),i.push(l[ot*3+2])}function O(ot){s.push(ot.x),s.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bp(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ur[i.type]().fromJSON(i)),new Lo(n,t.options)}}const Op={generateTopUV:function(o,t,e,n,i){const s=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],d=t[i*3+1];return[new nt(s,r),new nt(a,l),new nt(c,d)]},generateSideWallUV:function(o,t,e,n,i,s){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],d=t[n*3+1],u=t[n*3+2],h=t[i*3],f=t[i*3+1],m=t[i*3+2],v=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-d)<Math.abs(r-c)?[new nt(r,1-l),new nt(c,1-u),new nt(h,1-m),new nt(v,1-p)]:[new nt(a,1-l),new nt(d,1-u),new nt(f,1-m),new nt(g,1-p)]}};function Bp(o,t,e){if(e.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wr extends pc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wr(t.radius,t.detail)}}class Xr extends ye{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qt(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],d=1/e,u=new R,h=new nt,f=new R,m=new R,v=new R;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=e;x++){const y=n+x*d*i,_=Math.sin(y),S=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*S,r.push(u.x,u.y,u.z),h.x=x/e,h.y=w/(t.length-1),a.push(h.x,h.y);const E=l[3*w+0]*_,P=l[3*w+1],b=l[3*w+0]*S;c.push(E,P,b)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const _=y+x*t.length,S=_,w=_+t.length,E=_+t.length+1,P=_+1;s.push(S,w,P),s.push(E,P,w)}this.setIndex(s),this.setAttribute("position",new Ht(r,3)),this.setAttribute("uv",new Ht(a,2)),this.setAttribute("normal",new Ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.points,t.segments,t.phiStart,t.phiLength)}}class wn extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=t/a,h=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<d;p++){const x=p*h-r;for(let y=0;y<c;y++){const _=y*u-s;m.push(_,-x,0),v.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,_=x+c*(p+1),S=x+1+c*(p+1),w=x+1+c*p;f.push(y,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.widthSegments,t.heightSegments)}}class xn extends ye{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const d=[],u=new R,h=new R,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&r===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const w=S/e;u.x=-t*Math.cos(i+w*s)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(i+w*s)*Math.sin(r+y*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),g.push(w+_,1-y),x.push(c++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=d[p][x+1],_=d[p][x],S=d[p+1][x],w=d[p+1][x+1];(p!==0||r>0)&&f.push(y,_,w),(p!==n-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qn extends ye{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],d=new R,u=new R,h=new R;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*s,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;r.push(v,g,x),r.push(g,p,x)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qr extends ye{constructor(t=new Ju(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new R,l=new R,c=new nt;let d=new R;const u=[],h=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(f,2));function v(){for(let y=0;y<e;y++)g(y);g(s===!1?e:0),x(),p()}function g(y){d=t.getPointAt(y/e,d);const _=r.normals[y],S=r.binormals[y];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,P=Math.sin(E),b=-Math.cos(E);l.x=b*_.x+P*S.x,l.y=b*_.y+P*S.y,l.z=b*_.z+P*S.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=i;_++){const S=(i+1)*(y-1)+(_-1),w=(i+1)*y+(_-1),E=(i+1)*y+_,P=(i+1)*(y-1)+_;m.push(S,w,P),m.push(w,E,P)}}function x(){for(let y=0;y<=e;y++)for(let _=0;_<=i;_++)c.x=y/e,c.y=_/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new qr(new Ur[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class kp extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ee extends Li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hi extends Ee{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Vp extends Li{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Hp extends Li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gp extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wp extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jr extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xp extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ra=new oe,uh=new R,dh=new R;class sd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fh=new oe,so=new R,Pa=new R;class qp extends sd{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),so.setFromMatrixPosition(t.matrixWorld),n.position.copy(so),Pa.copy(n.position),Pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pa),n.updateMatrixWorld(),i.makeTranslation(-so.x,-so.y,-so.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh,n.coordinateSystem,n.reversedDepth)}}class od extends jr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vc extends Wu{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jp extends sd{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yp extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new jp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zp extends jr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $p extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class rd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const ph=new oe;class Kp{constructor(t,e,n=0,i=1/0){this.ray=new lc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(t,e=!0,n=[]){return ql(t,this,n,e),n.sort(mh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ql(t[i],this,n,e);return n.sort(mh),n}}function mh(o,t){return o.distance-t.distance}function ql(o,t,e,n){let i=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)ql(s[r],t,e,!0)}}class gh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jp extends ns{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vh(o,t,e,n){const i=Qp(n);switch(e){case Nu:return o*t;case nc:return o*t/i.components*i.byteLength;case ic:return o*t/i.components*i.byteLength;case Fu:return o*t*2/i.components*i.byteLength;case sc:return o*t*2/i.components*i.byteLength;case Uu:return o*t*3/i.components*i.byteLength;case _n:return o*t*4/i.components*i.byteLength;case oc:return o*t*4/i.components*i.byteLength;case Er:case Tr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Cr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gl:case xl:return Math.max(o,16)*Math.max(t,8)/4;case ml:case vl:return Math.max(o,8)*Math.max(t,8)/2;case _l:case yl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Fl:case zl:case Ol:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Bl:case kl:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vl:case Hl:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qp(o){switch(o){case In:case Pu:return{byteLength:1,components:1};case Mo:case Iu:case fi:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Ji:case Ql:case Gn:return{byteLength:4,components:1};case Du:case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);function ad(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function tm(o){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=o.createBuffer();o.bindBuffer(l,h),o.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=o.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){const m=u[h],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];o.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,Qm=`struct PhysicalMaterial {
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
}`,t0=`
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,vg=`#define LAMBERT
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
}`,xg=`#define MATCAP
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
}`,_g=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,bg=`#define PHONG
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
}`,Sg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Ig=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:em,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:om,alphatest_pars_fragment:rm,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:um,beginnormal_vertex:dm,bsdfs:fm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:xm,clipping_planes_vertex:_m,color_fragment:ym,color_pars_fragment:Mm,color_pars_vertex:wm,color_vertex:bm,common:Sm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Cm,emissivemap_fragment:Rm,emissivemap_pars_fragment:Pm,colorspace_fragment:Im,colorspace_pars_fragment:Dm,envmap_fragment:Lm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:jm,envmap_vertex:zm,fog_vertex:Om,fog_pars_vertex:Bm,fog_fragment:km,fog_pars_fragment:Vm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:Ym,lights_toon_pars_fragment:Zm,lights_phong_fragment:$m,lights_phong_pars_fragment:Km,lights_physical_fragment:Jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:r0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:v0,normal_fragment_begin:x0,normal_fragment_maps:_0,normal_pars_fragment:y0,normal_pars_vertex:M0,normal_vertex:w0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:C0,packing:R0,premultiplied_alpha_fragment:P0,project_vertex:I0,dithering_fragment:D0,dithering_pars_fragment:L0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:z0,shadowmap_vertex:O0,shadowmask_pars_fragment:B0,skinbase_vertex:k0,skinning_pars_vertex:V0,skinning_vertex:H0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:j0,transmission_fragment:Y0,transmission_pars_fragment:Z0,uv_pars_fragment:$0,uv_pars_vertex:K0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:og,depth_vert:rg,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:dg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:vg,meshmatcap_vert:xg,meshmatcap_frag:_g,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:wg,meshphong_frag:bg,meshphysical_vert:Sg,meshphysical_frag:Eg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Cg,points_frag:Rg,shadow_vert:Pg,shadow_frag:Ig,sprite_vert:Dg,sprite_frag:Lg},yt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Vn={basic:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Qe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Qe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Qe([yt.points,yt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Qe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Qe([yt.common,yt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Qe([yt.sprite,yt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Qe([yt.common,yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Qe([yt.lights,yt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Vn.physical={uniforms:Qe([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const cr={r:0,b:0,g:0},Vi=new Ln,Ng=new oe;function Ug(o,t,e,n,i,s,r){const a=new Zt(0);let l=s===!0?0:1,c,d,u=null,h=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const S=m(y);S===null?p(a,l):S&&S.isColor&&(p(S,1),_=!0);const w=o.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(y,_){const S=m(_);S&&(S.isCubeTexture||S.mapping===Vr)?(d===void 0&&(d=new Kt(new pi(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Vs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Vi.copy(_.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(Vi)),d.material.toneMapped=le.getTransfer(S.colorSpace)!==pe,(u!==S||h!==S.version||f!==o.toneMapping)&&(d.material.needsUpdate=!0,u=S,h=S.version,f=o.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Kt(new wn(2,2),new qe({name:"BackgroundMaterial",uniforms:Vs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=le.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=o.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(cr,Gu(o)),n.buffers.color.setClear(cr.r,cr.g,cr.b,_,r)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:g,dispose:x}}function Fg(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,r=!1;function a(M,L,A,D,z){let N=!1;const F=u(D,A,L);s!==F&&(s=F,c(s.object)),N=f(M,D,A,z),N&&m(M,D,A,z),z!==null&&t.update(z,o.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,_(M,L,A,D),z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return o.createVertexArray()}function c(M){return o.bindVertexArray(M)}function d(M){return o.deleteVertexArray(M)}function u(M,L,A){const D=A.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let N=z[L.id];N===void 0&&(N={},z[L.id]=N);let F=N[D];return F===void 0&&(F=h(l()),N[D]=F),F}function h(M){const L=[],A=[],D=[];for(let z=0;z<e;z++)L[z]=0,A[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:A,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,L,A,D){const z=s.attributes,N=L.attributes;let F=0;const G=A.getAttributes();for(const k in G)if(G[k].location>=0){const at=z[k];let ut=N[k];if(ut===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),at===void 0||at.attribute!==ut||ut&&at.data!==ut.data)return!0;F++}return s.attributesNum!==F||s.index!==D}function m(M,L,A,D){const z={},N=L.attributes;let F=0;const G=A.getAttributes();for(const k in G)if(G[k].location>=0){let at=N[k];at===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const ut={};ut.attribute=at,at&&at.data&&(ut.data=at.data),z[k]=ut,F++}s.attributes=z,s.attributesNum=F,s.index=D}function v(){const M=s.newAttributes;for(let L=0,A=M.length;L<A;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){const A=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;A[M]=1,D[M]===0&&(o.enableVertexAttribArray(M),D[M]=1),z[M]!==L&&(o.vertexAttribDivisor(M,L),z[M]=L)}function x(){const M=s.newAttributes,L=s.enabledAttributes;for(let A=0,D=L.length;A<D;A++)L[A]!==M[A]&&(o.disableVertexAttribArray(A),L[A]=0)}function y(M,L,A,D,z,N,F){F===!0?o.vertexAttribIPointer(M,L,A,z,N):o.vertexAttribPointer(M,L,A,D,z,N)}function _(M,L,A,D){v();const z=D.attributes,N=A.getAttributes(),F=L.defaultAttributeValues;for(const G in N){const k=N[G];if(k.location>=0){let q=z[G];if(q===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const at=q.normalized,ut=q.itemSize,rt=t.get(q);if(rt===void 0)continue;const Xt=rt.buffer,Bt=rt.type,$t=rt.bytesPerElement,K=Bt===o.INT||Bt===o.UNSIGNED_INT||q.gpuType===Ql;if(q.isInterleavedBufferAttribute){const et=q.data,Mt=et.stride,Rt=q.offset;if(et.isInstancedInterleavedBuffer){for(let St=0;St<k.locationSize;St++)p(k.location+St,et.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<k.locationSize;St++)g(k.location+St);o.bindBuffer(o.ARRAY_BUFFER,Xt);for(let St=0;St<k.locationSize;St++)y(k.location+St,ut/k.locationSize,Bt,at,Mt*$t,(Rt+ut/k.locationSize*St)*$t,K)}else{if(q.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)p(k.location+et,q.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let et=0;et<k.locationSize;et++)g(k.location+et);o.bindBuffer(o.ARRAY_BUFFER,Xt);for(let et=0;et<k.locationSize;et++)y(k.location+et,ut/k.locationSize,Bt,at,ut*$t,ut/k.locationSize*et*$t,K)}}else if(F!==void 0){const at=F[G];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(k.location,at);break;case 3:o.vertexAttrib3fv(k.location,at);break;case 4:o.vertexAttrib4fv(k.location,at);break;default:o.vertexAttrib1fv(k.location,at)}}}}x()}function S(){P();for(const M in n){const L=n[M];for(const A in L){const D=L[A];for(const z in D)d(D[z].object),delete D[z];delete L[A]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const A in L){const D=L[A];for(const z in D)d(D[z].object),delete D[z];delete L[A]}delete n[M.id]}function E(M){for(const L in n){const A=n[L];if(A[M.id]===void 0)continue;const D=A[M.id];for(const z in D)d(D[z].object),delete D[z];delete A[M.id]}}function P(){b(),r=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function zg(o,t,e){let n;function i(c){n=c}function s(c,d){o.drawArrays(n,c,d),e.update(d,n,1)}function r(c,d,u){u!==0&&(o.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function a(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];e.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=d[v]*h[v];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Og(o,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==_n&&n.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==In&&n.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Gn&&!P)}function l(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,w=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:w}}function Bg(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Si,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=o.get(u);if(!i||m===null||m.length===0||s&&!g)s?d(null):c();else{const x=s?0:n,y=x*4;let _=p.clippingState||null;l.value=_,_=d(m,h,y,f);for(let S=0;S!==y;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)r.copy(u[y]).applyMatrix4(x,a),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function kg(o){let t=new WeakMap;function e(r,a){return a===dl?r.mapping=Fs:a===fl&&(r.mapping=zs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===dl||a===fl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ep(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Cs=4,xh=[.125,.215,.35,.446,.526,.582],qi=20,Ia=new vc,_h=new Zt;let Da=null,La=0,Na=0,Ua=!1;const Xi=(1+Math.sqrt(5))/2,ws=1/Xi,yh=[new R(-Xi,ws,0),new R(Xi,ws,0),new R(-ws,0,Xi),new R(ws,0,Xi),new R(0,Xi,-ws),new R(0,Xi,ws),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Vg=new R;class Fr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:r=256,position:a=Vg}=s;Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,La,Na),this._renderer.xr.enabled=Ua,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:fi,format:_n,colorSpace:ks,depthBuffer:!1},i=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(s)),this._blurMaterial=Gg(s,t,e)}return i}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,i,s){const l=new un(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_h),u.toneMapping=Ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new Qi({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Kt(new pi,v);let p=!1;const x=t.background;x?x.isColor&&(v.color.copy(x),t.background=null,p=!0):(v.color.copy(_h),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const S=this._cubeSize;hr(i,_*S,y>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fs||t.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yh[(i-s-1)%yh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Kt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*qi-1),v=s/m,g=isFinite(s)?1+Math.floor(d*v):qi;g>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);const p=[];let x=0;for(let E=0;E<qi;++E){const P=E/v,b=Math.exp(-P*P/2);p.push(b),E===0?x+=b:E<g&&(x+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const _=this._sizeLods[i],S=3*_*(i>y-Cs?i-y+Cs:0),w=4*(this._cubeSize-_);hr(e,S,w,3*_,2*_),l.setRenderTarget(e),l.render(u,Ia)}}function Hg(o){const t=[],e=[],n=[];let i=o;const s=o-Cs+1+xh.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Cs?l=xh[r-o+Cs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,P=w>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(b,v*m*w),y.set(h,g*m*w);const M=[w,w,w,w,w,w];_.set(M,p*m*w)}const S=new ye;S.setAttribute("position",new rn(x,v)),S.setAttribute("uv",new rn(y,g)),S.setAttribute("faceIndex",new rn(_,p)),t.push(S),i>Cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mh(o,t,e){const n=new Dn(o,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Gg(o,t,e){const n=new Float32Array(qi),i=new R(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function wh(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function bh(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:We,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function Wg(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===dl||l===fl,d=l===Fs||l===zs;if(c||d){let u=t.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Fr(o)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&i(f)?(e===null&&(e=new Fr(o)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Xg(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qg(o,t,e,n){const i={},s=new WeakMap;function r(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",r),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)t.update(h[f],o.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let y=0,_=x.length;y<_;y+=3){const S=x[y+0],w=x[y+1],E=x[y+2];h.push(S,w,w,E,E,S)}}else if(m!==void 0){const x=m.array;v=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const S=y+0,w=y+1,E=y+2;h.push(S,w,w,E,E,S)}}else return;const g=new(Ou(h)?Hu:Vu)(h,1);g.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function jg(o,t,e){let n;function i(h){n=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function l(h,f){o.drawElements(n,f,s,h*r),e.update(f,n,1)}function c(h,f,m){m!==0&&(o.drawElementsInstanced(n,f,s,h*r,m),e.update(f,n,m))}function d(h,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(h,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/r,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Yg(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zg(o,t,e){const n=new WeakMap,i=new xe;function s(r,a,l){const c=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let S=a.attributes.position.count*_,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*w*4*u),P=new Bu(E,S,w,u);P.type=Gn,P.needsUpdate=!0;const b=_*4;for(let L=0;L<u;L++){const A=p[L],D=x[L],z=y[L],N=S*w*4*L;for(let F=0;F<A.count;F++){const G=F*b;m===!0&&(i.fromBufferAttribute(A,F),E[N+G+0]=i.x,E[N+G+1]=i.y,E[N+G+2]=i.z,E[N+G+3]=0),v===!0&&(i.fromBufferAttribute(D,F),E[N+G+4]=i.x,E[N+G+5]=i.y,E[N+G+6]=i.z,E[N+G+7]=0),g===!0&&(i.fromBufferAttribute(z,F),E[N+G+8]=i.x,E[N+G+9]=i.y,E[N+G+10]=i.z,E[N+G+11]=z.itemSize===4?i.w:1)}}h={count:u,texture:P,size:new nt(S,w)},n.set(a,h),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:s}}function $g(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=t.get(l,d);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const ld=new $e,Sh=new fc(1,1),cd=new Bu,hd=new Bf,ud=new Xu,Eh=[],Th=[],Ah=new Float32Array(16),Ch=new Float32Array(9),Rh=new Float32Array(4);function qs(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=Eh[i];if(s===void 0&&(s=new Float32Array(i),Eh[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function ze(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Oe(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Yr(o,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Kg(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Jg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2fv(this.addr,t),Oe(e,t)}}function Qg(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;o.uniform3fv(this.addr,t),Oe(e,t)}}function tv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4fv(this.addr,t),Oe(e,t)}}function ev(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;Rh.set(n),o.uniformMatrix2fv(this.addr,!1,Rh),Oe(e,n)}}function nv(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;Ch.set(n),o.uniformMatrix3fv(this.addr,!1,Ch),Oe(e,n)}}function iv(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,n))return;Ah.set(n),o.uniformMatrix4fv(this.addr,!1,Ah),Oe(e,n)}}function sv(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function ov(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2iv(this.addr,t),Oe(e,t)}}function rv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3iv(this.addr,t),Oe(e,t)}}function av(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4iv(this.addr,t),Oe(e,t)}}function lv(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function cv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2uiv(this.addr,t),Oe(e,t)}}function hv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3uiv(this.addr,t),Oe(e,t)}}function uv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4uiv(this.addr,t),Oe(e,t)}}function dv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Sh.compareFunction=zu,s=Sh):s=ld,e.setTexture2D(t||s,i)}function fv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hd,i)}function pv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ud,i)}function mv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cd,i)}function gv(o){switch(o){case 5126:return Kg;case 35664:return Jg;case 35665:return Qg;case 35666:return tv;case 35674:return ev;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return ov;case 35668:case 35672:return rv;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function vv(o,t){o.uniform1fv(this.addr,t)}function xv(o,t){const e=qs(t,this.size,2);o.uniform2fv(this.addr,e)}function _v(o,t){const e=qs(t,this.size,3);o.uniform3fv(this.addr,e)}function yv(o,t){const e=qs(t,this.size,4);o.uniform4fv(this.addr,e)}function Mv(o,t){const e=qs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function wv(o,t){const e=qs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function bv(o,t){const e=qs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Sv(o,t){o.uniform1iv(this.addr,t)}function Ev(o,t){o.uniform2iv(this.addr,t)}function Tv(o,t){o.uniform3iv(this.addr,t)}function Av(o,t){o.uniform4iv(this.addr,t)}function Cv(o,t){o.uniform1uiv(this.addr,t)}function Rv(o,t){o.uniform2uiv(this.addr,t)}function Pv(o,t){o.uniform3uiv(this.addr,t)}function Iv(o,t){o.uniform4uiv(this.addr,t)}function Dv(o,t,e){const n=this.cache,i=t.length,s=Yr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Oe(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||ld,s[r])}function Lv(o,t,e){const n=this.cache,i=t.length,s=Yr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Oe(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||hd,s[r])}function Nv(o,t,e){const n=this.cache,i=t.length,s=Yr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Oe(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||ud,s[r])}function Uv(o,t,e){const n=this.cache,i=t.length,s=Yr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Oe(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||cd,s[r])}function Fv(o){switch(o){case 5126:return vv;case 35664:return xv;case 35665:return _v;case 35666:return yv;case 35674:return Mv;case 35675:return wv;case 35676:return bv;case 5124:case 35670:return Sv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Cv;case 36294:return Rv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Uv}}class zv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gv(e.type)}}class Ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fv(e.type)}}class Bv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Ph(o,t){o.seq.push(t),o.map[t.id]=t}function kv(o,t,e){const n=o.name,i=n.length;for(Fa.lastIndex=0;;){const s=Fa.exec(n),r=Fa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Ph(e,c===void 0?new zv(a,o,t):new Ov(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new Bv(a),Ph(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);kv(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ih(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const Vv=37297;let Hv=0;function Gv(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Dh=new te;function Wv(o){le._getMatrix(Dh,le.workingColorSpace,o);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(o)){case Ir:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Lh(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),s=(o.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gv(o.getShaderSource(t),a)}else return s}function Xv(o,t){const e=Wv(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qv(o,t){let e;switch(t){case bu:e="Linear";break;case Su:e="Reinhard";break;case Eu:e="Cineon";break;case kr:e="ACESFilmic";break;case Au:e="AgX";break;case Cu:e="Neutral";break;case Tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ur=new R;function jv(){le.getLuminanceCoefficients(ur);const o=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function Zv(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $v(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function fo(o){return o!==""}function Nh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(o){return o.replace(Kv,Qv)}const Jv=new Map;function Qv(o,t){let e=ee[t];if(e===void 0){const n=Jv.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(o){return o.replace(tx,ex)}function ex(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zh(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function nx(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function ix(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Fs:case zs:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sx(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===zs&&(t="ENVMAP_MODE_REFRACTION"),t}function ox(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case ef:t="ENVMAP_BLENDING_MIX";break;case nf:t="ENVMAP_BLENDING_ADD";break}return t}function rx(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ax(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=nx(e),c=ix(e),d=sx(e),u=ox(e),h=rx(e),f=Yv(e),m=Zv(s),v=i.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(g=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ri?qv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Xv("linearToOutputTexel",e.outputColorSpace),jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fo).join(`
`)),r=jl(r),r=Nh(r,e),r=Uh(r,e),a=jl(a),a=Nh(a,e),a=Uh(a,e),r=Fh(r),a=Fh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+r,_=x+p+a,S=Ih(i,i.VERTEX_SHADER,y),w=Ih(i,i.FRAGMENT_SHADER,_);i.attachShader(v,S),i.attachShader(v,w),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(L){if(o.debug.checkShaderErrors){const A=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(S)||"",z=i.getShaderInfoLog(w)||"",N=A.trim(),F=D.trim(),G=z.trim();let k=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,v,S,w);else{const at=Lh(i,S,"vertex"),ut=Lh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+at+`
`+ut)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||G==="")&&(q=!1);q&&(L.diagnostics={runnable:k,programLog:N,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:p}})}i.deleteShader(S),i.deleteShader(w),P=new Rr(i,v),b=$v(i,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,Vv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let lx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hx(t),e.set(t,n)),n}}class hx{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}}function ux(o,t,e,n,i,s,r){const a=new cc,l=new cx,c=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,L,A,D){const z=A.fog,N=D.geometry,F=b.isMeshStandardMaterial?A.environment:null,G=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),k=G&&G.mapping===Vr?G.image.height:null,q=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const at=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ut=at!==void 0?at.length:0;let rt=0;N.morphAttributes.position!==void 0&&(rt=1),N.morphAttributes.normal!==void 0&&(rt=2),N.morphAttributes.color!==void 0&&(rt=3);let Xt,Bt,$t,K;if(q){const fe=Vn[q];Xt=fe.vertexShader,Bt=fe.fragmentShader}else Xt=b.vertexShader,Bt=b.fragmentShader,l.update(b),$t=l.getVertexShaderID(b),K=l.getFragmentShaderID(b);const et=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Rt=D.isInstancedMesh===!0,St=D.isBatchedMesh===!0,ne=!!b.map,de=!!b.matcap,O=!!G,ot=!!b.aoMap,tt=!!b.lightMap,Q=!!b.bumpMap,J=!!b.normalMap,gt=!!b.displacementMap,lt=!!b.emissiveMap,vt=!!b.metalnessMap,qt=!!b.roughnessMap,Gt=b.anisotropy>0,U=b.clearcoat>0,T=b.dispersion>0,W=b.iridescence>0,Z=b.sheen>0,st=b.transmission>0,$=Gt&&!!b.anisotropyMap,Tt=U&&!!b.clearcoatMap,ft=U&&!!b.clearcoatNormalMap,Et=U&&!!b.clearcoatRoughnessMap,Dt=W&&!!b.iridescenceMap,ht=W&&!!b.iridescenceThicknessMap,wt=Z&&!!b.sheenColorMap,Vt=Z&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,_t=!!b.specularColorMap,jt=!!b.specularIntensityMap,B=st&&!!b.transmissionMap,ct=st&&!!b.thicknessMap,mt=!!b.gradientMap,It=!!b.alphaMap,dt=b.alphaTest>0,it=!!b.alphaHash,Ut=!!b.extensions;let Jt=Ri;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Me={shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:Xt,fragmentShader:Bt,defines:b.defines,customVertexShaderID:$t,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:St,batchingColor:St&&D._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&D.instanceColor!==null,instancingMorph:Rt&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ks,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:de,envMap:O,envMapMode:O&&G.mapping,envMapCubeUVHeight:k,aoMap:ot,lightMap:tt,bumpMap:Q,normalMap:J,displacementMap:h&&gt,emissiveMap:lt,normalMapObjectSpace:J&&b.normalMapType===af,normalMapTangentSpace:J&&b.normalMapType===Hr,metalnessMap:vt,roughnessMap:qt,anisotropy:Gt,anisotropyMap:$,clearcoat:U,clearcoatMap:Tt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Et,dispersion:T,iridescence:W,iridescenceMap:Dt,iridescenceThicknessMap:ht,sheen:Z,sheenColorMap:wt,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:_t,specularIntensityMap:jt,transmission:st,transmissionMap:B,thicknessMap:ct,gradientMap:mt,opaque:b.transparent===!1&&b.blending===Ds&&b.alphaToCoverage===!1,alphaMap:It,alphaTest:dt,alphaHash:it,combine:b.combine,mapUv:ne&&v(b.map.channel),aoMapUv:ot&&v(b.aoMap.channel),lightMapUv:tt&&v(b.lightMap.channel),bumpMapUv:Q&&v(b.bumpMap.channel),normalMapUv:J&&v(b.normalMap.channel),displacementMapUv:gt&&v(b.displacementMap.channel),emissiveMapUv:lt&&v(b.emissiveMap.channel),metalnessMapUv:vt&&v(b.metalnessMap.channel),roughnessMapUv:qt&&v(b.roughnessMap.channel),anisotropyMapUv:$&&v(b.anisotropyMap.channel),clearcoatMapUv:Tt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&v(b.sheenRoughnessMap.channel),specularMapUv:Ft&&v(b.specularMap.channel),specularColorMapUv:_t&&v(b.specularColorMap.channel),specularIntensityMapUv:jt&&v(b.specularIntensityMap.channel),transmissionMapUv:B&&v(b.transmissionMap.channel),thicknessMapUv:ct&&v(b.thicknessMap.channel),alphaMapUv:It&&v(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(J||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(ne||It),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:lt&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xe,flipSided:b.side===Ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(o.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=m[b.type];let L;if(M){const A=Vn[M];L=ri.clone(A.uniforms)}else L=b.uniforms;return L}function S(b,M){let L;for(let A=0,D=d.length;A<D;A++){const z=d[A];if(z.cacheKey===M){L=z,++L.usedTimes;break}}return L===void 0&&(L=new ax(o,M,b,s),d.push(L)),L}function w(b){if(--b.usedTimes===0){const M=d.indexOf(b);d[M]=d[d.length-1],d.pop(),b.destroy()}}function E(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:d,dispose:P}}function dx(){let o=new WeakMap;function t(r){return o.has(r)}function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function fx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Oh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Bh(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,h,f,m,v,g){let p=o[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},o[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,h,f,m,v,g){const p=r(u,h,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,h,f,m,v,g){const p=r(u,h,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,h){e.length>1&&e.sort(u||fx),n.length>1&&n.sort(h||Oh),i.length>1&&i.sort(h||Oh)}function d(){for(let u=t,h=o.length;u<h;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function px(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Bh,o.set(n,[r])):i>=s.length?(r=new Bh,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function mx(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Zt};break;case"SpotLight":e={position:new R,direction:new R,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new R,halfWidth:new R,halfHeight:new R};break}return o[t.id]=e,e}}}function gx(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let vx=0;function xx(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _x(o){const t=new mx,e=gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,s=new oe,r=new oe;function a(c){let d=0,u=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,x=0,y=0,_=0,S=0,w=0,E=0;c.sort(xx);for(let b=0,M=c.length;b<M;b++){const L=c[b],A=L.color,D=L.intensity,z=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=A.r*D,u+=A.g*D,h+=A.b*D;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],D);E++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,k=e.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=F,f++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(A).multiplyScalar(D),F.distance=z,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[v]=F;const G=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,G.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[v]=G.matrix,L.castShadow){const k=e.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=N,_++}v++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(A).multiplyScalar(D),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=F,g++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const G=L.shadow,k=e.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(D),F.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=F,p++}}g>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==S||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=S,P.numLightProbes=E,n.version=vx++)}function l(c,d){let u=0,h=0,f=0,m=0,v=0;const g=d.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),r.identity(),s.copy(y.matrixWorld),s.premultiply(g),r.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function kh(o){const t=new _x(o),e=[],n=[];function i(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function r(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function yx(o){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new kh(o),t.set(i,[a])):s>=r.length?(a=new kh(o),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function bx(o,t,e){let n=new dc;const i=new nt,s=new nt,r=new xe,a=new Gp({depthPacking:rf}),l=new Wp,c={},d=e.maxTextureSize,u={[Pi]:Ze,[Ze]:Pi,[Xe]:Xe},h=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Mx,fragmentShader:wx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new ye;m.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let p=this.type;this.render=function(w,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const b=o.getRenderTarget(),M=o.getActiveCubeFace(),L=o.getActiveMipmapLevel(),A=o.state;A.setBlending(We),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const D=p!==oi&&this.type===oi,z=p===oi&&this.type!==oi;for(let N=0,F=w.length;N<F;N++){const G=w[N],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const q=k.getFrameExtents();if(i.multiply(q),s.copy(k.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/q.x),i.x=s.x*q.x,k.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/q.y),i.y=s.y*q.y,k.mapSize.y=s.y)),k.map===null||D===!0||z===!0){const ut=this.type!==oi?{minFilter:tn,magFilter:tn}:{};k.map!==null&&k.map.dispose(),k.map=new Dn(i.x,i.y,ut),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const at=k.getViewportCount();for(let ut=0;ut<at;ut++){const rt=k.getViewport(ut);r.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),A.viewport(r),k.updateMatrices(G,ut),n=k.getFrustum(),_(E,P,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===oi&&x(k,P),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,o.setRenderTarget(b,M,L)};function x(w,E){const P=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(E,null,P,h,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(E,null,P,f,v,null)}function y(w,E,P,b){let M=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const A=M.uuid,D=E.uuid;let z=c[A];z===void 0&&(z={},c[A]=z);let N=z[D];N===void 0&&(N=M.clone(),z[D]=N,E.addEventListener("dispose",S)),M=N}if(M.visible=E.visible,M.wireframe=E.wireframe,b===oi?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const A=o.properties.get(M);A.light=P}return M}function _(w,E,P,b,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const D=t.update(w),z=w.material;if(Array.isArray(z)){const N=D.groups;for(let F=0,G=N.length;F<G;F++){const k=N[F],q=z[k.materialIndex];if(q&&q.visible){const at=y(w,q,b,M);w.onBeforeShadow(o,w,E,P,D,at,k),o.renderBufferDirect(P,null,D,at,w,k),w.onAfterShadow(o,w,E,P,D,at,k)}}}else if(z.visible){const N=y(w,z,b,M);w.onBeforeShadow(o,w,E,P,D,N,null),o.renderBufferDirect(P,null,D,N,w,null),w.onAfterShadow(o,w,E,P,D,N,null)}}const A=w.children;for(let D=0,z=A.length;D<z;D++)_(A[D],E,P,b,M)}function S(w){w.target.removeEventListener("dispose",S);for(const P in c){const b=c[P],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Sx={[ol]:rl,[al]:hl,[ll]:ul,[Us]:cl,[rl]:ol,[hl]:al,[ul]:ll,[cl]:Us};function Ex(o,t){function e(){let B=!1;const ct=new xe;let mt=null;const It=new xe(0,0,0,0);return{setMask:function(dt){mt!==dt&&!B&&(o.colorMask(dt,dt,dt,dt),mt=dt)},setLocked:function(dt){B=dt},setClear:function(dt,it,Ut,Jt,Me){Me===!0&&(dt*=Jt,it*=Jt,Ut*=Jt),ct.set(dt,it,Ut,Jt),It.equals(ct)===!1&&(o.clearColor(dt,it,Ut,Jt),It.copy(ct))},reset:function(){B=!1,mt=null,It.set(-1,0,0,0)}}}function n(){let B=!1,ct=!1,mt=null,It=null,dt=null;return{setReversed:function(it){if(ct!==it){const Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ct=it;const Jt=dt;dt=null,this.setClear(Jt)}},getReversed:function(){return ct},setTest:function(it){it?et(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(it){mt!==it&&!B&&(o.depthMask(it),mt=it)},setFunc:function(it){if(ct&&(it=Sx[it]),It!==it){switch(it){case ol:o.depthFunc(o.NEVER);break;case rl:o.depthFunc(o.ALWAYS);break;case al:o.depthFunc(o.LESS);break;case Us:o.depthFunc(o.LEQUAL);break;case ll:o.depthFunc(o.EQUAL);break;case cl:o.depthFunc(o.GEQUAL);break;case hl:o.depthFunc(o.GREATER);break;case ul:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=it}},setLocked:function(it){B=it},setClear:function(it){dt!==it&&(ct&&(it=1-it),o.clearDepth(it),dt=it)},reset:function(){B=!1,mt=null,It=null,dt=null,ct=!1}}}function i(){let B=!1,ct=null,mt=null,It=null,dt=null,it=null,Ut=null,Jt=null,Me=null;return{setTest:function(fe){B||(fe?et(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(fe){ct!==fe&&!B&&(o.stencilMask(fe),ct=fe)},setFunc:function(fe,Zn,Nn){(mt!==fe||It!==Zn||dt!==Nn)&&(o.stencilFunc(fe,Zn,Nn),mt=fe,It=Zn,dt=Nn)},setOp:function(fe,Zn,Nn){(it!==fe||Ut!==Zn||Jt!==Nn)&&(o.stencilOp(fe,Zn,Nn),it=fe,Ut=Zn,Jt=Nn)},setLocked:function(fe){B=fe},setClear:function(fe){Me!==fe&&(o.clearStencil(fe),Me=fe)},reset:function(){B=!1,ct=null,mt=null,It=null,dt=null,it=null,Ut=null,Jt=null,Me=null}}}const s=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,S=null,w=null,E=new Zt(0,0,0),P=0,b=!1,M=null,L=null,A=null,D=null,z=null;const N=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=G>=2);let q=null,at={};const ut=o.getParameter(o.SCISSOR_BOX),rt=o.getParameter(o.VIEWPORT),Xt=new xe().fromArray(ut),Bt=new xe().fromArray(rt);function $t(B,ct,mt,It){const dt=new Uint8Array(4),it=o.createTexture();o.bindTexture(B,it),o.texParameteri(B,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(B,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ut=0;Ut<mt;Ut++)B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY?o.texImage3D(ct,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,dt):o.texImage2D(ct+Ut,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,dt);return it}const K={};K[o.TEXTURE_2D]=$t(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=$t(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=$t(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=$t(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),et(o.DEPTH_TEST),r.setFunc(Us),Q(!1),J(Ic),et(o.CULL_FACE),ot(We);function et(B){d[B]!==!0&&(o.enable(B),d[B]=!0)}function Mt(B){d[B]!==!1&&(o.disable(B),d[B]=!1)}function Rt(B,ct){return u[B]!==ct?(o.bindFramebuffer(B,ct),u[B]=ct,B===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=ct),B===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=ct),!0):!1}function St(B,ct){let mt=f,It=!1;if(B){mt=h.get(ct),mt===void 0&&(mt=[],h.set(ct,mt));const dt=B.textures;if(mt.length!==dt.length||mt[0]!==o.COLOR_ATTACHMENT0){for(let it=0,Ut=dt.length;it<Ut;it++)mt[it]=o.COLOR_ATTACHMENT0+it;mt.length=dt.length,It=!0}}else mt[0]!==o.BACK&&(mt[0]=o.BACK,It=!0);It&&o.drawBuffers(mt)}function ne(B){return m!==B?(o.useProgram(B),m=B,!0):!1}const de={[An]:o.FUNC_ADD,[Vd]:o.FUNC_SUBTRACT,[Hd]:o.FUNC_REVERSE_SUBTRACT};de[Gd]=o.MIN,de[Wd]=o.MAX;const O={[ho]:o.ZERO,[Xd]:o.ONE,[qd]:o.SRC_COLOR,[el]:o.SRC_ALPHA,[$d]:o.SRC_ALPHA_SATURATE,[sl]:o.DST_COLOR,[il]:o.DST_ALPHA,[jd]:o.ONE_MINUS_SRC_COLOR,[nl]:o.ONE_MINUS_SRC_ALPHA,[Zd]:o.ONE_MINUS_DST_COLOR,[Yd]:o.ONE_MINUS_DST_ALPHA,[Kd]:o.CONSTANT_COLOR,[Jd]:o.ONE_MINUS_CONSTANT_COLOR,[Qd]:o.CONSTANT_ALPHA,[tf]:o.ONE_MINUS_CONSTANT_ALPHA};function ot(B,ct,mt,It,dt,it,Ut,Jt,Me,fe){if(B===We){v===!0&&(Mt(o.BLEND),v=!1);return}if(v===!1&&(et(o.BLEND),v=!0),B!==wu){if(B!==g||fe!==b){if((p!==An||_!==An)&&(o.blendEquation(o.FUNC_ADD),p=An,_=An),fe)switch(B){case Ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tl:o.blendFunc(o.ONE,o.ONE);break;case Dc:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lc:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,y=null,S=null,w=null,E.set(0,0,0),P=0,g=B,b=fe}return}dt=dt||ct,it=it||mt,Ut=Ut||It,(ct!==p||dt!==_)&&(o.blendEquationSeparate(de[ct],de[dt]),p=ct,_=dt),(mt!==x||It!==y||it!==S||Ut!==w)&&(o.blendFuncSeparate(O[mt],O[It],O[it],O[Ut]),x=mt,y=It,S=it,w=Ut),(Jt.equals(E)===!1||Me!==P)&&(o.blendColor(Jt.r,Jt.g,Jt.b,Me),E.copy(Jt),P=Me),g=B,b=!1}function tt(B,ct){B.side===Xe?Mt(o.CULL_FACE):et(o.CULL_FACE);let mt=B.side===Ze;ct&&(mt=!mt),Q(mt),B.blending===Ds&&B.transparent===!1?ot(We):ot(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const It=B.stencilWrite;a.setTest(It),It&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Q(B){M!==B&&(B?o.frontFace(o.CW):o.frontFace(o.CCW),M=B)}function J(B){B!==Bd?(et(o.CULL_FACE),B!==L&&(B===Ic?o.cullFace(o.BACK):B===kd?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),L=B}function gt(B){B!==A&&(F&&o.lineWidth(B),A=B)}function lt(B,ct,mt){B?(et(o.POLYGON_OFFSET_FILL),(D!==ct||z!==mt)&&(o.polygonOffset(ct,mt),D=ct,z=mt)):Mt(o.POLYGON_OFFSET_FILL)}function vt(B){B?et(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function qt(B){B===void 0&&(B=o.TEXTURE0+N-1),q!==B&&(o.activeTexture(B),q=B)}function Gt(B,ct,mt){mt===void 0&&(q===null?mt=o.TEXTURE0+N-1:mt=q);let It=at[mt];It===void 0&&(It={type:void 0,texture:void 0},at[mt]=It),(It.type!==B||It.texture!==ct)&&(q!==mt&&(o.activeTexture(mt),q=mt),o.bindTexture(B,ct||K[B]),It.type=B,It.texture=ct)}function U(){const B=at[q];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{o.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{o.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{o.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{o.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{o.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{o.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{o.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{o.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(B){Xt.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),Xt.copy(B))}function Vt(B){Bt.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),Bt.copy(B))}function Ft(B,ct){let mt=c.get(ct);mt===void 0&&(mt=new WeakMap,c.set(ct,mt));let It=mt.get(B);It===void 0&&(It=o.getUniformBlockIndex(ct,B.name),mt.set(B,It))}function _t(B,ct){const It=c.get(ct).get(B);l.get(ct)!==It&&(o.uniformBlockBinding(ct,It,B.__bindingPointIndex),l.set(ct,It))}function jt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},q=null,at={},u={},h=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,y=null,_=null,S=null,w=null,E=new Zt(0,0,0),P=0,b=!1,M=null,L=null,A=null,D=null,z=null,Xt.set(0,0,o.canvas.width,o.canvas.height),Bt.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:et,disable:Mt,bindFramebuffer:Rt,drawBuffers:St,useProgram:ne,setBlending:ot,setMaterial:tt,setFlipSided:Q,setCullFace:J,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:vt,activeTexture:qt,bindTexture:Gt,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Dt,texImage3D:ht,updateUBOMapping:Ft,uniformBlockBinding:_t,texStorage2D:ft,texStorage3D:Et,texSubImage2D:Z,texSubImage3D:st,compressedTexSubImage2D:$,compressedTexSubImage3D:Tt,scissor:wt,viewport:Vt,reset:jt}}function Tx(o,t,e,n,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(U,T){return f?new OffscreenCanvas(U,T):Lr("canvas")}function v(U,T,W){let Z=1;const st=Gt(U);if((st.width>W||st.height>W)&&(Z=W/Math.max(st.width,st.height)),Z<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const $=Math.floor(Z*st.width),Tt=Math.floor(Z*st.height);u===void 0&&(u=m($,Tt));const ft=T?m($,Tt):u;return ft.width=$,ft.height=Tt,ft.getContext("2d").drawImage(U,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+$+"x"+Tt+")."),ft}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),U;return U}function g(U){return U.generateMipmaps}function p(U){o.generateMipmap(U)}function x(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(U,T,W,Z,st=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let $=T;if(T===o.RED&&(W===o.FLOAT&&($=o.R32F),W===o.HALF_FLOAT&&($=o.R16F),W===o.UNSIGNED_BYTE&&($=o.R8)),T===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&($=o.R8UI),W===o.UNSIGNED_SHORT&&($=o.R16UI),W===o.UNSIGNED_INT&&($=o.R32UI),W===o.BYTE&&($=o.R8I),W===o.SHORT&&($=o.R16I),W===o.INT&&($=o.R32I)),T===o.RG&&(W===o.FLOAT&&($=o.RG32F),W===o.HALF_FLOAT&&($=o.RG16F),W===o.UNSIGNED_BYTE&&($=o.RG8)),T===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&($=o.RG8UI),W===o.UNSIGNED_SHORT&&($=o.RG16UI),W===o.UNSIGNED_INT&&($=o.RG32UI),W===o.BYTE&&($=o.RG8I),W===o.SHORT&&($=o.RG16I),W===o.INT&&($=o.RG32I)),T===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&($=o.RGB8UI),W===o.UNSIGNED_SHORT&&($=o.RGB16UI),W===o.UNSIGNED_INT&&($=o.RGB32UI),W===o.BYTE&&($=o.RGB8I),W===o.SHORT&&($=o.RGB16I),W===o.INT&&($=o.RGB32I)),T===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&($=o.RGBA8UI),W===o.UNSIGNED_SHORT&&($=o.RGBA16UI),W===o.UNSIGNED_INT&&($=o.RGBA32UI),W===o.BYTE&&($=o.RGBA8I),W===o.SHORT&&($=o.RGBA16I),W===o.INT&&($=o.RGBA32I)),T===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&($=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&($=o.R11F_G11F_B10F)),T===o.RGBA){const Tt=st?Ir:le.getTransfer(Z);W===o.FLOAT&&($=o.RGBA32F),W===o.HALF_FLOAT&&($=o.RGBA16F),W===o.UNSIGNED_BYTE&&($=Tt===pe?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&($=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&($=o.RGB5_A1)}return($===o.R16F||$===o.R32F||$===o.RG16F||$===o.RG32F||$===o.RGBA16F||$===o.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(U,T){let W;return U?T===null||T===Ji||T===Os?W=o.DEPTH24_STENCIL8:T===Gn?W=o.DEPTH32F_STENCIL8:T===Mo&&(W=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===Os?W=o.DEPTH_COMPONENT24:T===Gn?W=o.DEPTH_COMPONENT32F:T===Mo&&(W=o.DEPTH_COMPONENT16),W}function S(U,T){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==tn&&U.minFilter!==Rn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function w(U){const T=U.target;T.removeEventListener("dispose",w),P(T),T.isVideoTexture&&d.delete(T)}function E(U){const T=U.target;T.removeEventListener("dispose",E),M(T)}function P(U){const T=n.get(U);if(T.__webglInit===void 0)return;const W=U.source,Z=h.get(W);if(Z){const st=Z[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(U),Object.keys(Z).length===0&&h.delete(W)}n.remove(U)}function b(U){const T=n.get(U);o.deleteTexture(T.__webglTexture);const W=U.source,Z=h.get(W);delete Z[T.__cacheKey],r.memory.textures--}function M(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let st=0;st<T.__webglFramebuffer[Z].length;st++)o.deleteFramebuffer(T.__webglFramebuffer[Z][st]);else o.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)o.deleteFramebuffer(T.__webglFramebuffer[Z]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=U.textures;for(let Z=0,st=W.length;Z<st;Z++){const $=n.get(W[Z]);$.__webglTexture&&(o.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(W[Z])}n.remove(U)}let L=0;function A(){L=0}function D(){const U=L;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),L+=1,U}function z(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function N(U,T){const W=n.get(U);if(U.isVideoTexture&&vt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const Z=U.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,U,T);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+T)}function F(U,T){const W=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){K(W,U,T);return}e.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+T)}function G(U,T){const W=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){K(W,U,T);return}e.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+T)}function k(U,T){const W=n.get(U);if(U.version>0&&W.__version!==U.version){et(W,U,T);return}e.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+T)}const q={[di]:o.REPEAT,[Yi]:o.CLAMP_TO_EDGE,[pl]:o.MIRRORED_REPEAT},at={[tn]:o.NEAREST,[sf]:o.NEAREST_MIPMAP_NEAREST,[zo]:o.NEAREST_MIPMAP_LINEAR,[Rn]:o.LINEAR,[na]:o.LINEAR_MIPMAP_NEAREST,[Ti]:o.LINEAR_MIPMAP_LINEAR},ut={[lf]:o.NEVER,[pf]:o.ALWAYS,[cf]:o.LESS,[zu]:o.LEQUAL,[hf]:o.EQUAL,[ff]:o.GEQUAL,[uf]:o.GREATER,[df]:o.NOTEQUAL};function rt(U,T){if(T.type===Gn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Rn||T.magFilter===na||T.magFilter===zo||T.magFilter===Ti||T.minFilter===Rn||T.minFilter===na||T.minFilter===zo||T.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,q[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,q[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,q[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,at[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,at[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===tn||T.minFilter!==zo&&T.minFilter!==Ti||T.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Xt(U,T){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",w));const Z=T.source;let st=h.get(Z);st===void 0&&(st={},h.set(Z,st));const $=z(T);if($!==U.__cacheKey){st[$]===void 0&&(st[$]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,W=!0),st[$].usedTimes++;const Tt=st[U.__cacheKey];Tt!==void 0&&(st[U.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(T)),U.__cacheKey=$,U.__webglTexture=st[$].texture}return W}function Bt(U,T,W){return Math.floor(Math.floor(U/W)/T)}function $t(U,T,W,Z){const $=U.updateRanges;if($.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,W,Z,T.data);else{$.sort((ht,wt)=>ht.start-wt.start);let Tt=0;for(let ht=1;ht<$.length;ht++){const wt=$[Tt],Vt=$[ht],Ft=wt.start+wt.count,_t=Bt(Vt.start,T.width,4),jt=Bt(wt.start,T.width,4);Vt.start<=Ft+1&&_t===jt&&Bt(Vt.start+Vt.count-1,T.width,4)===_t?wt.count=Math.max(wt.count,Vt.start+Vt.count-wt.start):(++Tt,$[Tt]=Vt)}$.length=Tt+1;const ft=o.getParameter(o.UNPACK_ROW_LENGTH),Et=o.getParameter(o.UNPACK_SKIP_PIXELS),Dt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ht=0,wt=$.length;ht<wt;ht++){const Vt=$[ht],Ft=Math.floor(Vt.start/4),_t=Math.ceil(Vt.count/4),jt=Ft%T.width,B=Math.floor(Ft/T.width),ct=_t,mt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,B),e.texSubImage2D(o.TEXTURE_2D,0,jt,B,ct,mt,W,Z,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ft),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Et),o.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function K(U,T,W){let Z=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=o.TEXTURE_3D);const st=Xt(U,T),$=T.source;e.bindTexture(Z,U.__webglTexture,o.TEXTURE0+W);const Tt=n.get($);if($.version!==Tt.__version||st===!0){e.activeTexture(o.TEXTURE0+W);const ft=le.getPrimaries(le.workingColorSpace),Et=T.colorSpace===Ei?null:le.getPrimaries(T.colorSpace),Dt=T.colorSpace===Ei||ft===Et?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ht=v(T.image,!1,i.maxTextureSize);ht=qt(T,ht);const wt=s.convert(T.format,T.colorSpace),Vt=s.convert(T.type);let Ft=y(T.internalFormat,wt,Vt,T.colorSpace,T.isVideoTexture);rt(Z,T);let _t;const jt=T.mipmaps,B=T.isVideoTexture!==!0,ct=Tt.__version===void 0||st===!0,mt=$.dataReady,It=S(T,ht);if(T.isDepthTexture)Ft=_(T.format===Bs,T.type),ct&&(B?e.texStorage2D(o.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(o.TEXTURE_2D,0,Ft,ht.width,ht.height,0,wt,Vt,null));else if(T.isDataTexture)if(jt.length>0){B&&ct&&e.texStorage2D(o.TEXTURE_2D,It,Ft,jt[0].width,jt[0].height);for(let dt=0,it=jt.length;dt<it;dt++)_t=jt[dt],B?mt&&e.texSubImage2D(o.TEXTURE_2D,dt,0,0,_t.width,_t.height,wt,Vt,_t.data):e.texImage2D(o.TEXTURE_2D,dt,Ft,_t.width,_t.height,0,wt,Vt,_t.data);T.generateMipmaps=!1}else B?(ct&&e.texStorage2D(o.TEXTURE_2D,It,Ft,ht.width,ht.height),mt&&$t(T,ht,wt,Vt)):e.texImage2D(o.TEXTURE_2D,0,Ft,ht.width,ht.height,0,wt,Vt,ht.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){B&&ct&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Ft,jt[0].width,jt[0].height,ht.depth);for(let dt=0,it=jt.length;dt<it;dt++)if(_t=jt[dt],T.format!==_n)if(wt!==null)if(B){if(mt)if(T.layerUpdates.size>0){const Ut=vh(_t.width,_t.height,T.format,T.type);for(const Jt of T.layerUpdates){const Me=_t.data.subarray(Jt*Ut/_t.data.BYTES_PER_ELEMENT,(Jt+1)*Ut/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,Jt,_t.width,_t.height,1,wt,Me)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,_t.width,_t.height,ht.depth,wt,_t.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,Ft,_t.width,_t.height,ht.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?mt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,_t.width,_t.height,ht.depth,wt,Vt,_t.data):e.texImage3D(o.TEXTURE_2D_ARRAY,dt,Ft,_t.width,_t.height,ht.depth,0,wt,Vt,_t.data)}else{B&&ct&&e.texStorage2D(o.TEXTURE_2D,It,Ft,jt[0].width,jt[0].height);for(let dt=0,it=jt.length;dt<it;dt++)_t=jt[dt],T.format!==_n?wt!==null?B?mt&&e.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,_t.width,_t.height,wt,_t.data):e.compressedTexImage2D(o.TEXTURE_2D,dt,Ft,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?mt&&e.texSubImage2D(o.TEXTURE_2D,dt,0,0,_t.width,_t.height,wt,Vt,_t.data):e.texImage2D(o.TEXTURE_2D,dt,Ft,_t.width,_t.height,0,wt,Vt,_t.data)}else if(T.isDataArrayTexture)if(B){if(ct&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Ft,ht.width,ht.height,ht.depth),mt)if(T.layerUpdates.size>0){const dt=vh(ht.width,ht.height,T.format,T.type);for(const it of T.layerUpdates){const Ut=ht.data.subarray(it*dt/ht.data.BYTES_PER_ELEMENT,(it+1)*dt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,it,ht.width,ht.height,1,wt,Vt,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,wt,Vt,ht.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,wt,Vt,ht.data);else if(T.isData3DTexture)B?(ct&&e.texStorage3D(o.TEXTURE_3D,It,Ft,ht.width,ht.height,ht.depth),mt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,wt,Vt,ht.data)):e.texImage3D(o.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,wt,Vt,ht.data);else if(T.isFramebufferTexture){if(ct)if(B)e.texStorage2D(o.TEXTURE_2D,It,Ft,ht.width,ht.height);else{let dt=ht.width,it=ht.height;for(let Ut=0;Ut<It;Ut++)e.texImage2D(o.TEXTURE_2D,Ut,Ft,dt,it,0,wt,Vt,null),dt>>=1,it>>=1}}else if(jt.length>0){if(B&&ct){const dt=Gt(jt[0]);e.texStorage2D(o.TEXTURE_2D,It,Ft,dt.width,dt.height)}for(let dt=0,it=jt.length;dt<it;dt++)_t=jt[dt],B?mt&&e.texSubImage2D(o.TEXTURE_2D,dt,0,0,wt,Vt,_t):e.texImage2D(o.TEXTURE_2D,dt,Ft,wt,Vt,_t);T.generateMipmaps=!1}else if(B){if(ct){const dt=Gt(ht);e.texStorage2D(o.TEXTURE_2D,It,Ft,dt.width,dt.height)}mt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Vt,ht)}else e.texImage2D(o.TEXTURE_2D,0,Ft,wt,Vt,ht);g(T)&&p(Z),Tt.__version=$.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function et(U,T,W){if(T.image.length!==6)return;const Z=Xt(U,T),st=T.source;e.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+W);const $=n.get(st);if(st.version!==$.__version||Z===!0){e.activeTexture(o.TEXTURE0+W);const Tt=le.getPrimaries(le.workingColorSpace),ft=T.colorSpace===Ei?null:le.getPrimaries(T.colorSpace),Et=T.colorSpace===Ei||Tt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Dt=T.isCompressedTexture||T.image[0].isCompressedTexture,ht=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let it=0;it<6;it++)!Dt&&!ht?wt[it]=v(T.image[it],!0,i.maxCubemapSize):wt[it]=ht?T.image[it].image:T.image[it],wt[it]=qt(T,wt[it]);const Vt=wt[0],Ft=s.convert(T.format,T.colorSpace),_t=s.convert(T.type),jt=y(T.internalFormat,Ft,_t,T.colorSpace),B=T.isVideoTexture!==!0,ct=$.__version===void 0||Z===!0,mt=st.dataReady;let It=S(T,Vt);rt(o.TEXTURE_CUBE_MAP,T);let dt;if(Dt){B&&ct&&e.texStorage2D(o.TEXTURE_CUBE_MAP,It,jt,Vt.width,Vt.height);for(let it=0;it<6;it++){dt=wt[it].mipmaps;for(let Ut=0;Ut<dt.length;Ut++){const Jt=dt[Ut];T.format!==_n?Ft!==null?B?mt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Jt.width,Jt.height,Ft,Jt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,jt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Jt.width,Jt.height,Ft,_t,Jt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,jt,Jt.width,Jt.height,0,Ft,_t,Jt.data)}}}else{if(dt=T.mipmaps,B&&ct){dt.length>0&&It++;const it=Gt(wt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,It,jt,it.width,it.height)}for(let it=0;it<6;it++)if(ht){B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt[it].width,wt[it].height,Ft,_t,wt[it].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,jt,wt[it].width,wt[it].height,0,Ft,_t,wt[it].data);for(let Ut=0;Ut<dt.length;Ut++){const Me=dt[Ut].image[it].image;B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Me.width,Me.height,Ft,_t,Me.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,jt,Me.width,Me.height,0,Ft,_t,Me.data)}}else{B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,_t,wt[it]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,jt,Ft,_t,wt[it]);for(let Ut=0;Ut<dt.length;Ut++){const Jt=dt[Ut];B?mt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Ft,_t,Jt.image[it]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,jt,Ft,_t,Jt.image[it])}}}g(T)&&p(o.TEXTURE_CUBE_MAP),$.__version=st.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,W,Z,st,$){const Tt=s.convert(W.format,W.colorSpace),ft=s.convert(W.type),Et=y(W.internalFormat,Tt,ft,W.colorSpace),Dt=n.get(T),ht=n.get(W);if(ht.__renderTarget=T,!Dt.__hasExternalTextures){const wt=Math.max(1,T.width>>$),Vt=Math.max(1,T.height>>$);st===o.TEXTURE_3D||st===o.TEXTURE_2D_ARRAY?e.texImage3D(st,$,Et,wt,Vt,T.depth,0,Tt,ft,null):e.texImage2D(st,$,Et,wt,Vt,0,Tt,ft,null)}e.bindFramebuffer(o.FRAMEBUFFER,U),lt(T)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,st,ht.__webglTexture,0,gt(T)):(st===o.TEXTURE_2D||st>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,st,ht.__webglTexture,$),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(U,T,W){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const Z=T.depthTexture,st=Z&&Z.isDepthTexture?Z.type:null,$=_(T.stencilBuffer,st),Tt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=gt(T);lt(T)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft,$,T.width,T.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,$,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,$,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,U)}else{const Z=T.textures;for(let st=0;st<Z.length;st++){const $=Z[st],Tt=s.convert($.format,$.colorSpace),ft=s.convert($.type),Et=y($.internalFormat,Tt,ft,$.colorSpace),Dt=gt(T);W&&lt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Et,T.width,T.height):lt(T)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,Et,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Et,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function St(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N(T.depthTexture,0);const st=Z.__webglTexture,$=gt(T);if(T.depthTexture.format===wo)lt(T)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0,$):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0);else if(T.depthTexture.format===Bs)lt(T)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0,$):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function ne(U){const T=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const Z=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",st)};Z.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=Z}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Z=U.texture.mipmaps;Z&&Z.length>0?St(T.__webglFramebuffer[0],U):St(T.__webglFramebuffer,U)}else if(W){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=o.createRenderbuffer(),Rt(T.__webglDepthbuffer[Z],U,!1);else{const st=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,$),o.framebufferRenderbuffer(o.FRAMEBUFFER,st,o.RENDERBUFFER,$)}}else{const Z=U.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Rt(T.__webglDepthbuffer,U,!1);else{const st=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,$),o.framebufferRenderbuffer(o.FRAMEBUFFER,st,o.RENDERBUFFER,$)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function de(U,T,W){const Z=n.get(U);T!==void 0&&Mt(Z.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&ne(U)}function O(U){const T=U.texture,W=n.get(U),Z=n.get(T);U.addEventListener("dispose",E);const st=U.textures,$=U.isWebGLCubeRenderTarget===!0,Tt=st.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=T.version,r.memory.textures++),$){W.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ft]=[];for(let Et=0;Et<T.mipmaps.length;Et++)W.__webglFramebuffer[ft][Et]=o.createFramebuffer()}else W.__webglFramebuffer[ft]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)W.__webglFramebuffer[ft]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Tt)for(let ft=0,Et=st.length;ft<Et;ft++){const Dt=n.get(st[ft]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),r.memory.textures++)}if(U.samples>0&&lt(U)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const Et=st[ft];W.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[ft]);const Dt=s.convert(Et.format,Et.colorSpace),ht=s.convert(Et.type),wt=y(Et.internalFormat,Dt,ht,Et.colorSpace,U.isXRRenderTarget===!0),Vt=gt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,wt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,W.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(W.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if($){e.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),rt(o.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)Mt(W.__webglFramebuffer[ft][Et],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Et);else Mt(W.__webglFramebuffer[ft],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(T)&&p(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,Et=st.length;ft<Et;ft++){const Dt=st[ft],ht=n.get(Dt);let wt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(wt,ht.__webglTexture),rt(wt,Dt),Mt(W.__webglFramebuffer,U,Dt,o.COLOR_ATTACHMENT0+ft,wt,0),g(Dt)&&p(wt)}e.unbindTexture()}else{let ft=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ft=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),rt(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)Mt(W.__webglFramebuffer[Et],U,T,o.COLOR_ATTACHMENT0,ft,Et);else Mt(W.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,ft,0);g(T)&&p(ft),e.unbindTexture()}U.depthBuffer&&ne(U)}function ot(U){const T=U.textures;for(let W=0,Z=T.length;W<Z;W++){const st=T[W];if(g(st)){const $=x(U),Tt=n.get(st).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}const tt=[],Q=[];function J(U){if(U.samples>0){if(lt(U)===!1){const T=U.textures,W=U.width,Z=U.height;let st=o.COLOR_BUFFER_BIT;const $=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=n.get(U),ft=T.length>1;if(ft)for(let Dt=0;Dt<T.length;Dt++)e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const Et=U.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Dt=0;Dt<T.length;Dt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(st|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(st|=o.STENCIL_BUFFER_BIT)),ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Dt]);const ht=n.get(T[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ht,0)}o.blitFramebuffer(0,0,W,Z,0,0,W,Z,st,o.NEAREST),l===!0&&(tt.length=0,Q.length=0,tt.push(o.COLOR_ATTACHMENT0+Dt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tt.push($),Q.push($),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Q)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ft)for(let Dt=0;Dt<T.length;Dt++){e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Tt.__webglColorRenderbuffer[Dt]);const ht=n.get(T[Dt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,ht,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function gt(U){return Math.min(i.maxSamples,U.samples)}function lt(U){const T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(U){const T=r.render.frame;d.get(U)!==T&&(d.set(U,T),U.update())}function qt(U,T){const W=U.colorSpace,Z=U.format,st=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==ks&&W!==Ei&&(le.getTransfer(W)===pe?(Z!==_n||st!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Gt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=A,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=k,this.rebindTextures=de,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=lt}function Ax(o,t){function e(n,i=Ei){let s;const r=le.getTransfer(i);if(n===In)return o.UNSIGNED_BYTE;if(n===tc)return o.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return o.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return o.BYTE;if(n===Iu)return o.SHORT;if(n===Mo)return o.UNSIGNED_SHORT;if(n===Ql)return o.INT;if(n===Ji)return o.UNSIGNED_INT;if(n===Gn)return o.FLOAT;if(n===fi)return o.HALF_FLOAT;if(n===Nu)return o.ALPHA;if(n===Uu)return o.RGB;if(n===_n)return o.RGBA;if(n===wo)return o.DEPTH_COMPONENT;if(n===Bs)return o.DEPTH_STENCIL;if(n===nc)return o.RED;if(n===ic)return o.RED_INTEGER;if(n===Fu)return o.RG;if(n===sc)return o.RG_INTEGER;if(n===oc)return o.RGBA_INTEGER;if(n===Er||n===Tr||n===Ar||n===Cr)if(r===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===vl||n===xl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===yl||n===Ml)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_l||n===yl)return r===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ml)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===bl||n===Sl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Dl||n===Ll||n===Nl||n===Ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fl||n===zl||n===Ol)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Fl)return r===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===kl||n===Vl||n===Hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}const Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`;class Px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Yu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:Cx,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ix extends ns{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Px,p={},x=e.getContextAttributes();let y=null,_=null;const S=[],w=[],E=new nt;let P=null;const b=new un;b.viewport=new xe;const M=new un;M.viewport=new xe;const L=[b,M],A=new $p;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=S[K];return et===void 0&&(et=new ba,S[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=S[K];return et===void 0&&(et=new ba,S[K]=et),et.getGripSpace()},this.getHand=function(K){let et=S[K];return et===void 0&&(et=new ba,S[K]=et),et.getHandSpace()};function N(K){const et=w.indexOf(K.inputSource);if(et===-1)return;const Mt=S[et];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||r),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let K=0;K<S.length;K++){const et=w[K];et!==null&&(w[K]=null,S[K].disconnect(et))}D=null,z=null,g.reset();for(const K in p)delete p[K];t.setRenderTarget(y),f=null,h=null,u=null,i=null,_=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?Bs:wo,Rt=x.stencil?Os:Ji);const ne={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(ne),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Dn(h.textureWidth,h.textureHeight,{format:_n,type:In,depthTexture:new fc(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Mt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Dn(f.framebufferWidth,f.framebufferHeight,{format:_n,type:In,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let et=0;et<K.removed.length;et++){const Mt=K.removed[et],Rt=w.indexOf(Mt);Rt>=0&&(w[Rt]=null,S[Rt].disconnect(Mt))}for(let et=0;et<K.added.length;et++){const Mt=K.added[et];let Rt=w.indexOf(Mt);if(Rt===-1){for(let ne=0;ne<S.length;ne++)if(ne>=w.length){w.push(Mt),Rt=ne;break}else if(w[ne]===null){w[ne]=Mt,Rt=ne;break}if(Rt===-1)break}const St=S[Rt];St&&St.connect(Mt)}}const k=new R,q=new R;function at(K,et,Mt){k.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const Rt=k.distanceTo(q),St=et.projectionMatrix.elements,ne=Mt.projectionMatrix.elements,de=St[14]/(St[10]-1),O=St[14]/(St[10]+1),ot=(St[9]+1)/St[5],tt=(St[9]-1)/St[5],Q=(St[8]-1)/St[0],J=(ne[8]+1)/ne[0],gt=de*Q,lt=de*J,vt=Rt/(-Q+J),qt=vt*-Q;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qt),K.translateZ(vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),St[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Gt=de+vt,U=O+vt,T=gt-qt,W=lt+(Rt-qt),Z=ot*O/U*Gt,st=tt*O/U*Gt;K.projectionMatrix.makePerspective(T,W,Z,st,Gt,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ut(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let et=K.near,Mt=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),A.near=M.near=b.near=et,A.far=M.far=b.far=Mt,(D!==A.near||z!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,z=A.far),A.layers.mask=K.layers.mask|6,b.layers.mask=A.layers.mask&3,M.layers.mask=A.layers.mask&5;const Rt=K.parent,St=A.cameras;ut(A,Rt);for(let ne=0;ne<St.length;ne++)ut(St[ne],Rt);St.length===2?at(A,b,M):A.projectionMatrix.copy(b.projectionMatrix),rt(K,A,Rt)};function rt(K,et,Mt){Mt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=bo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)},this.getCameraTexture=function(K){return p[K]};let Xt=null;function Bt(K,et){if(d=et.getViewerPose(c||r),m=et,d!==null){const Mt=d.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Rt=!1;Mt.length!==A.cameras.length&&(A.cameras.length=0,Rt=!0);for(let O=0;O<Mt.length;O++){const ot=Mt[O];let tt=null;if(f!==null)tt=f.getViewport(ot);else{const J=u.getViewSubImage(h,ot);tt=J.viewport,O===0&&(t.setRenderTargetTextures(_,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(_))}let Q=L[O];Q===void 0&&(Q=new un,Q.layers.enable(O),Q.viewport=new xe,L[O]=Q),Q.matrix.fromArray(ot.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ot.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(tt.x,tt.y,tt.width,tt.height),O===0&&(A.matrix.copy(Q.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Rt===!0&&A.cameras.push(Q)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const O=u.getDepthInformation(Mt[0]);O&&O.isValid&&O.texture&&g.init(O,i.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let O=0;O<Mt.length;O++){const ot=Mt[O].camera;if(ot){let tt=p[ot];tt||(tt=new Yu,p[ot]=tt);const Q=u.getCameraImage(ot);tt.sourceTexture=Q}}}}for(let Mt=0;Mt<S.length;Mt++){const Rt=w[Mt],St=S[Mt];Rt!==null&&St!==void 0&&St.update(Rt,et,c||r)}Xt&&Xt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const $t=new ad;$t.setAnimationLoop(Bt),this.setAnimationLoop=function(K){Xt=K},this.dispose=function(){}}}const Hi=new Ln,Dx=new oe;function Lx(o,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gu(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,Hi.copy(_),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),g.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Hi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nx(o,t,e,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=i[x.id];_===void 0&&(m(x),_=d(x),i[x.id]=_,x.addEventListener("dispose",g));const S=y.program;n.updateUBOMapping(x,S);const w=t.render.frame;s[x.id]!==w&&(h(x),s[x.id]=w)}function d(x){const y=u();x.__bindingPointIndex=y;const _=o.createBuffer(),S=x.__size,w=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,S,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,_),_}function u(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=i[x.id],_=x.uniforms,S=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let w=0,E=_.length;w<E;w++){const P=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,M=P.length;b<M;b++){const L=P[b];if(f(L,w,b,S)===!0){const A=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let N=0;N<D.length;N++){const F=D[N],G=v(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,A+z,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,A,L.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(x,y,_,S){const w=x.value,E=y+"_"+_;if(S[E]===void 0)return typeof w=="number"||typeof w=="boolean"?S[E]=w:S[E]=w.clone(),!0;{const P=S[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return S[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(x){const y=x.uniforms;let _=0;const S=16;for(let E=0,P=y.length;E<P;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,L=b.length;M<L;M++){const A=b[M],D=Array.isArray(A.value)?A.value:[A.value];for(let z=0,N=D.length;z<N;z++){const F=D[z],G=v(F),k=_%S,q=k%G.boundary,at=k+q;_+=q,at!==0&&S-at<G.storage&&(_+=S-at),A.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,_+=G.storage}}}const w=_%S;return w>0&&(_+=S-w),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ux{constructor(t={}){const{canvas:e=Df(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=He;let w=0,E=0,P=null,b=-1,M=null;const L=new xe,A=new xe;let D=null;const z=new Zt(0);let N=0,F=e.width,G=e.height,k=1,q=null,at=null;const ut=new xe(0,0,F,G),rt=new xe(0,0,F,G);let Xt=!1;const Bt=new dc;let $t=!1,K=!1;const et=new oe,Mt=new R,Rt=new xe,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function de(){return P===null?k:1}let O=n;function ot(I,V){return e.getContext(I,V)}try{const I={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",dt,!1),O===null){const V="webgl2";if(O=ot(V,I),O===null)throw ot(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let tt,Q,J,gt,lt,vt,qt,Gt,U,T,W,Z,st,$,Tt,ft,Et,Dt,ht,wt,Vt,Ft,_t,jt;function B(){tt=new Xg(O),tt.init(),Ft=new Ax(O,tt),Q=new Og(O,tt,t,Ft),J=new Ex(O,tt),Q.reversedDepthBuffer&&h&&J.buffers.depth.setReversed(!0),gt=new Yg(O),lt=new dx,vt=new Tx(O,tt,J,lt,Q,Ft,gt),qt=new kg(_),Gt=new Wg(_),U=new tm(O),_t=new Fg(O,U),T=new qg(O,U,gt,_t),W=new $g(O,T,U,gt),ht=new Zg(O,Q,vt),ft=new Bg(lt),Z=new ux(_,qt,Gt,tt,Q,_t,ft),st=new Lx(_,lt),$=new px,Tt=new yx(tt),Dt=new Ug(_,qt,Gt,J,W,f,l),Et=new bx(_,W,Q),jt=new Nx(O,gt,Q,J),wt=new zg(O,tt,gt),Vt=new jg(O,tt,gt),gt.programs=Z.programs,_.capabilities=Q,_.extensions=tt,_.properties=lt,_.renderLists=$,_.shadowMap=Et,_.state=J,_.info=gt}B();const ct=new Ix(_,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=tt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=tt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(F,G,!1))},this.getSize=function(I){return I.set(F,G)},this.setSize=function(I,V,j=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,G=V,e.width=Math.floor(I*k),e.height=Math.floor(V*k),j===!0&&(e.style.width=I+"px",e.style.height=V+"px"),this.setViewport(0,0,I,V)},this.getDrawingBufferSize=function(I){return I.set(F*k,G*k).floor()},this.setDrawingBufferSize=function(I,V,j){F=I,G=V,k=j,e.width=Math.floor(I*j),e.height=Math.floor(V*j),this.setViewport(0,0,I,V)},this.getCurrentViewport=function(I){return I.copy(L)},this.getViewport=function(I){return I.copy(ut)},this.setViewport=function(I,V,j,Y){I.isVector4?ut.set(I.x,I.y,I.z,I.w):ut.set(I,V,j,Y),J.viewport(L.copy(ut).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(rt)},this.setScissor=function(I,V,j,Y){I.isVector4?rt.set(I.x,I.y,I.z,I.w):rt.set(I,V,j,Y),J.scissor(A.copy(rt).multiplyScalar(k).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(I){J.setScissorTest(Xt=I)},this.setOpaqueSort=function(I){q=I},this.setTransparentSort=function(I){at=I},this.getClearColor=function(I){return I.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(I=!0,V=!0,j=!0){let Y=0;if(I){let H=!1;if(P!==null){const pt=P.texture.format;H=pt===oc||pt===sc||pt===ic}if(H){const pt=P.texture.type,bt=pt===In||pt===Ji||pt===Mo||pt===Os||pt===tc||pt===ec,Nt=Dt.getClearColor(),At=Dt.getClearAlpha(),Wt=Nt.r,Yt=Nt.g,Ot=Nt.b;bt?(m[0]=Wt,m[1]=Yt,m[2]=Ot,m[3]=At,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Wt,v[1]=Yt,v[2]=Ot,v[3]=At,O.clearBufferiv(O.COLOR,0,v))}else Y|=O.COLOR_BUFFER_BIT}V&&(Y|=O.DEPTH_BUFFER_BIT),j&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Dt.dispose(),$.dispose(),Tt.dispose(),lt.dispose(),qt.dispose(),Gt.dispose(),W.dispose(),_t.dispose(),jt.dispose(),Z.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Nn),ct.removeEventListener("sessionend",Ec),Ui.stop()};function mt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const I=gt.autoReset,V=Et.enabled,j=Et.autoUpdate,Y=Et.needsUpdate,H=Et.type;B(),gt.autoReset=I,Et.enabled=V,Et.autoUpdate=j,Et.needsUpdate=Y,Et.type=H}function dt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function it(I){const V=I.target;V.removeEventListener("dispose",it),Ut(V)}function Ut(I){Jt(I),lt.remove(I)}function Jt(I){const V=lt.get(I).programs;V!==void 0&&(V.forEach(function(j){Z.releaseProgram(j)}),I.isShaderMaterial&&Z.releaseShaderCache(I))}this.renderBufferDirect=function(I,V,j,Y,H,pt){V===null&&(V=St);const bt=H.isMesh&&H.matrixWorld.determinant()<0,Nt=Ld(I,V,j,Y,H);J.setMaterial(Y,bt);let At=j.index,Wt=1;if(Y.wireframe===!0){if(At=T.getWireframeAttribute(j),At===void 0)return;Wt=2}const Yt=j.drawRange,Ot=j.attributes.position;let se=Yt.start*Wt,ge=(Yt.start+Yt.count)*Wt;pt!==null&&(se=Math.max(se,pt.start*Wt),ge=Math.min(ge,(pt.start+pt.count)*Wt)),At!==null?(se=Math.max(se,0),ge=Math.min(ge,At.count)):Ot!=null&&(se=Math.max(se,0),ge=Math.min(ge,Ot.count));const Re=ge-se;if(Re<0||Re===1/0)return;_t.setup(H,Y,Nt,j,At);let be,_e=wt;if(At!==null&&(be=U.get(At),_e=Vt,_e.setIndex(be)),H.isMesh)Y.wireframe===!0?(J.setLineWidth(Y.wireframeLinewidth*de()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(H.isLine){let kt=Y.linewidth;kt===void 0&&(kt=1),J.setLineWidth(kt*de()),H.isLineSegments?_e.setMode(O.LINES):H.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else H.isPoints?_e.setMode(O.POINTS):H.isSprite&&_e.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)So("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const kt=H._multiDrawStarts,Te=H._multiDrawCounts,ce=H._multiDrawCount,an=At?U.get(At).bytesPerElement:1,is=lt.get(Y).currentProgram.getUniforms();for(let ln=0;ln<ce;ln++)is.setValue(O,"_gl_DrawID",ln),_e.render(kt[ln]/an,Te[ln])}else if(H.isInstancedMesh)_e.renderInstances(se,Re,H.count);else if(j.isInstancedBufferGeometry){const kt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Te=Math.min(j.instanceCount,kt);_e.renderInstances(se,Re,Te)}else _e.render(se,Re)};function Me(I,V,j){I.transparent===!0&&I.side===Xe&&I.forceSinglePass===!1?(I.side=Ze,I.needsUpdate=!0,Fo(I,V,j),I.side=Pi,I.needsUpdate=!0,Fo(I,V,j),I.side=Xe):Fo(I,V,j)}this.compile=function(I,V,j=null){j===null&&(j=I),p=Tt.get(j),p.init(V),y.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),I!==j&&I.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return I.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pt=H.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Nt=pt[bt];Me(Nt,j,H),Y.add(Nt)}else Me(pt,j,H),Y.add(pt)}),p=y.pop(),Y},this.compileAsync=function(I,V,j=null){const Y=this.compile(I,V,j);return new Promise(H=>{function pt(){if(Y.forEach(function(bt){lt.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){H(I);return}setTimeout(pt,10)}tt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let fe=null;function Zn(I){fe&&fe(I)}function Nn(){Ui.stop()}function Ec(){Ui.start()}const Ui=new ad;Ui.setAnimationLoop(Zn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(I){fe=I,ct.setAnimationLoop(I),I===null?Ui.stop():Ui.start()},ct.addEventListener("sessionstart",Nn),ct.addEventListener("sessionend",Ec),this.render=function(I,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(V),V=ct.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,V,P),p=Tt.get(I,y.length),p.init(V),y.push(p),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Bt.setFromProjectionMatrix(et,Wn,V.reversedDepth),K=this.localClippingEnabled,$t=ft.init(this.clippingPlanes,K),g=$.get(I,x.length),g.init(),x.push(g),ct.enabled===!0&&ct.isPresenting===!0){const pt=_.xr.getDepthSensingMesh();pt!==null&&ta(pt,V,-1/0,_.sortObjects)}ta(I,V,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(q,at),ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ne&&Dt.addToRenderList(g,I),this.info.render.frame++,$t===!0&&ft.beginShadows();const j=p.state.shadowsArray;Et.render(j,I,V),$t===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,H=g.transmissive;if(p.setupLights(),V.isArrayCamera){const pt=V.cameras;if(H.length>0)for(let bt=0,Nt=pt.length;bt<Nt;bt++){const At=pt[bt];Ac(Y,H,I,At)}ne&&Dt.render(I);for(let bt=0,Nt=pt.length;bt<Nt;bt++){const At=pt[bt];Tc(g,I,At,At.viewport)}}else H.length>0&&Ac(Y,H,I,V),ne&&Dt.render(I),Tc(g,I,V);P!==null&&E===0&&(vt.updateMultisampleRenderTarget(P),vt.updateRenderTargetMipmap(P)),I.isScene===!0&&I.onAfterRender(_,I,V),_t.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],$t===!0&&ft.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function ta(I,V,j,Y){if(I.visible===!1)return;if(I.layers.test(V.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(V);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Bt.intersectsSprite(I)){Y&&Rt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(et);const bt=W.update(I),Nt=I.material;Nt.visible&&g.push(I,bt,Nt,j,Rt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Bt.intersectsObject(I))){const bt=W.update(I),Nt=I.material;if(Y&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Rt.copy(I.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Rt.copy(bt.boundingSphere.center)),Rt.applyMatrix4(I.matrixWorld).applyMatrix4(et)),Array.isArray(Nt)){const At=bt.groups;for(let Wt=0,Yt=At.length;Wt<Yt;Wt++){const Ot=At[Wt],se=Nt[Ot.materialIndex];se&&se.visible&&g.push(I,bt,se,j,Rt.z,Ot)}}else Nt.visible&&g.push(I,bt,Nt,j,Rt.z,null)}}const pt=I.children;for(let bt=0,Nt=pt.length;bt<Nt;bt++)ta(pt[bt],V,j,Y)}function Tc(I,V,j,Y){const H=I.opaque,pt=I.transmissive,bt=I.transparent;p.setupLightsView(j),$t===!0&&ft.setGlobalState(_.clippingPlanes,j),Y&&J.viewport(L.copy(Y)),H.length>0&&Uo(H,V,j),pt.length>0&&Uo(pt,V,j),bt.length>0&&Uo(bt,V,j),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ac(I,V,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Dn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?fi:In,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const pt=p.state.transmissionRenderTarget[Y.id],bt=Y.viewport||L;pt.setSize(bt.z*_.transmissionResolutionScale,bt.w*_.transmissionResolutionScale);const Nt=_.getRenderTarget(),At=_.getActiveCubeFace(),Wt=_.getActiveMipmapLevel();_.setRenderTarget(pt),_.getClearColor(z),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),ne&&Dt.render(j);const Yt=_.toneMapping;_.toneMapping=Ri;const Ot=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),$t===!0&&ft.setGlobalState(_.clippingPlanes,Y),Uo(I,j,Y),vt.updateMultisampleRenderTarget(pt),vt.updateRenderTargetMipmap(pt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ge=0,Re=V.length;ge<Re;ge++){const be=V[ge],_e=be.object,kt=be.geometry,Te=be.material,ce=be.group;if(Te.side===Xe&&_e.layers.test(Y.layers)){const an=Te.side;Te.side=Ze,Te.needsUpdate=!0,Cc(_e,j,Y,kt,Te,ce),Te.side=an,Te.needsUpdate=!0,se=!0}}se===!0&&(vt.updateMultisampleRenderTarget(pt),vt.updateRenderTargetMipmap(pt))}_.setRenderTarget(Nt,At,Wt),_.setClearColor(z,N),Ot!==void 0&&(Y.viewport=Ot),_.toneMapping=Yt}function Uo(I,V,j){const Y=V.isScene===!0?V.overrideMaterial:null;for(let H=0,pt=I.length;H<pt;H++){const bt=I[H],Nt=bt.object,At=bt.geometry,Wt=bt.group;let Yt=bt.material;Yt.allowOverride===!0&&Y!==null&&(Yt=Y),Nt.layers.test(j.layers)&&Cc(Nt,V,j,At,Yt,Wt)}}function Cc(I,V,j,Y,H,pt){I.onBeforeRender(_,V,j,Y,H,pt),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),H.onBeforeRender(_,V,j,Y,I,pt),H.transparent===!0&&H.side===Xe&&H.forceSinglePass===!1?(H.side=Ze,H.needsUpdate=!0,_.renderBufferDirect(j,V,Y,H,I,pt),H.side=Pi,H.needsUpdate=!0,_.renderBufferDirect(j,V,Y,H,I,pt),H.side=Xe):_.renderBufferDirect(j,V,Y,H,I,pt),I.onAfterRender(_,V,j,Y,H,pt)}function Fo(I,V,j){V.isScene!==!0&&(V=St);const Y=lt.get(I),H=p.state.lights,pt=p.state.shadowsArray,bt=H.state.version,Nt=Z.getParameters(I,H.state,pt,V,j),At=Z.getProgramCacheKey(Nt);let Wt=Y.programs;Y.environment=I.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(I.isMeshStandardMaterial?Gt:qt).get(I.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&I.envMap===null?V.environmentRotation:I.envMapRotation,Wt===void 0&&(I.addEventListener("dispose",it),Wt=new Map,Y.programs=Wt);let Yt=Wt.get(At);if(Yt!==void 0){if(Y.currentProgram===Yt&&Y.lightsStateVersion===bt)return Pc(I,Nt),Yt}else Nt.uniforms=Z.getUniforms(I),I.onBeforeCompile(Nt,_),Yt=Z.acquireProgram(Nt,At),Wt.set(At,Yt),Y.uniforms=Nt.uniforms;const Ot=Y.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ot.clippingPlanes=ft.uniform),Pc(I,Nt),Y.needsLights=Ud(I),Y.lightsStateVersion=bt,Y.needsLights&&(Ot.ambientLightColor.value=H.state.ambient,Ot.lightProbe.value=H.state.probe,Ot.directionalLights.value=H.state.directional,Ot.directionalLightShadows.value=H.state.directionalShadow,Ot.spotLights.value=H.state.spot,Ot.spotLightShadows.value=H.state.spotShadow,Ot.rectAreaLights.value=H.state.rectArea,Ot.ltc_1.value=H.state.rectAreaLTC1,Ot.ltc_2.value=H.state.rectAreaLTC2,Ot.pointLights.value=H.state.point,Ot.pointLightShadows.value=H.state.pointShadow,Ot.hemisphereLights.value=H.state.hemi,Ot.directionalShadowMap.value=H.state.directionalShadowMap,Ot.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ot.spotShadowMap.value=H.state.spotShadowMap,Ot.spotLightMatrix.value=H.state.spotLightMatrix,Ot.spotLightMap.value=H.state.spotLightMap,Ot.pointShadowMap.value=H.state.pointShadowMap,Ot.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Yt,Y.uniformsList=null,Yt}function Rc(I){if(I.uniformsList===null){const V=I.currentProgram.getUniforms();I.uniformsList=Rr.seqWithValue(V.seq,I.uniforms)}return I.uniformsList}function Pc(I,V){const j=lt.get(I);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Ld(I,V,j,Y,H){V.isScene!==!0&&(V=St),vt.resetTextureUnits();const pt=V.fog,bt=Y.isMeshStandardMaterial?V.environment:null,Nt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ks,At=(Y.isMeshStandardMaterial?Gt:qt).get(Y.envMap||bt),Wt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Yt=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!j.morphAttributes.position,se=!!j.morphAttributes.normal,ge=!!j.morphAttributes.color;let Re=Ri;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Re=_.toneMapping);const be=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=be!==void 0?be.length:0,kt=lt.get(Y),Te=p.state.lights;if($t===!0&&(K===!0||I!==M)){const Ke=I===M&&Y.id===b;ft.setState(Y,I,Ke)}let ce=!1;Y.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Te.state.version||kt.outputColorSpace!==Nt||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isBatchedMesh&&kt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&kt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==At||Y.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ft.numPlanes||kt.numIntersection!==ft.numIntersection)||kt.vertexAlphas!==Wt||kt.vertexTangents!==Yt||kt.morphTargets!==Ot||kt.morphNormals!==se||kt.morphColors!==ge||kt.toneMapping!==Re||kt.morphTargetsCount!==_e)&&(ce=!0):(ce=!0,kt.__version=Y.version);let an=kt.currentProgram;ce===!0&&(an=Fo(Y,V,H));let is=!1,ln=!1,Ys=!1;const Ae=an.getUniforms(),fn=kt.uniforms;if(J.useProgram(an.program)&&(is=!0,ln=!0,Ys=!0),Y.id!==b&&(b=Y.id,ln=!0),is||M!==I){J.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ae.setValue(O,"projectionMatrix",I.projectionMatrix),Ae.setValue(O,"viewMatrix",I.matrixWorldInverse);const en=Ae.map.cameraPosition;en!==void 0&&en.setValue(O,Mt.setFromMatrixPosition(I.matrixWorld)),Q.logarithmicDepthBuffer&&Ae.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ae.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,ln=!0,Ys=!0)}if(H.isSkinnedMesh){Ae.setOptional(O,H,"bindMatrix"),Ae.setOptional(O,H,"bindMatrixInverse");const Ke=H.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ae.setValue(O,"boneTexture",Ke.boneTexture,vt))}H.isBatchedMesh&&(Ae.setOptional(O,H,"batchingTexture"),Ae.setValue(O,"batchingTexture",H._matricesTexture,vt),Ae.setOptional(O,H,"batchingIdTexture"),Ae.setValue(O,"batchingIdTexture",H._indirectTexture,vt),Ae.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Ae.setValue(O,"batchingColorTexture",H._colorsTexture,vt));const pn=j.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ht.update(H,j,an),(ln||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,Ae.setValue(O,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(fn.envMap.value=At,fn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(fn.envMapIntensity.value=V.environmentIntensity),ln&&(Ae.setValue(O,"toneMappingExposure",_.toneMappingExposure),kt.needsLights&&Nd(fn,Ys),pt&&Y.fog===!0&&st.refreshFogUniforms(fn,pt),st.refreshMaterialUniforms(fn,Y,k,G,p.state.transmissionRenderTarget[I.id]),Rr.upload(O,Rc(kt),fn,vt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rr.upload(O,Rc(kt),fn,vt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ae.setValue(O,"center",H.center),Ae.setValue(O,"modelViewMatrix",H.modelViewMatrix),Ae.setValue(O,"normalMatrix",H.normalMatrix),Ae.setValue(O,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ke=Y.uniformsGroups;for(let en=0,ea=Ke.length;en<ea;en++){const Fi=Ke[en];jt.update(Fi,an),jt.bind(Fi,an)}}return an}function Nd(I,V){I.ambientLightColor.needsUpdate=V,I.lightProbe.needsUpdate=V,I.directionalLights.needsUpdate=V,I.directionalLightShadows.needsUpdate=V,I.pointLights.needsUpdate=V,I.pointLightShadows.needsUpdate=V,I.spotLights.needsUpdate=V,I.spotLightShadows.needsUpdate=V,I.rectAreaLights.needsUpdate=V,I.hemisphereLights.needsUpdate=V}function Ud(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(I,V,j){const Y=lt.get(I);Y.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),lt.get(I.texture).__webglTexture=V,lt.get(I.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,V){const j=lt.get(I);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0};const Fd=O.createFramebuffer();this.setRenderTarget=function(I,V=0,j=0){P=I,w=V,E=j;let Y=!0,H=null,pt=!1,bt=!1;if(I){const At=lt.get(I);if(At.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)vt.setupRenderTarget(I);else if(At.__hasExternalTextures)vt.rebindTextures(I,lt.get(I.texture).__webglTexture,lt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ot=I.depthTexture;if(At.__boundDepthTexture!==Ot){if(Ot!==null&&lt.has(Ot)&&(I.width!==Ot.image.width||I.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(I)}}const Wt=I.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(bt=!0);const Yt=lt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Yt[V])?H=Yt[V][j]:H=Yt[V],pt=!0):I.samples>0&&vt.useMultisampledRTT(I)===!1?H=lt.get(I).__webglMultisampledFramebuffer:Array.isArray(Yt)?H=Yt[j]:H=Yt,L.copy(I.viewport),A.copy(I.scissor),D=I.scissorTest}else L.copy(ut).multiplyScalar(k).floor(),A.copy(rt).multiplyScalar(k).floor(),D=Xt;if(j!==0&&(H=Fd),J.bindFramebuffer(O.FRAMEBUFFER,H)&&Y&&J.drawBuffers(I,H),J.viewport(L),J.scissor(A),J.setScissorTest(D),pt){const At=lt.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,At.__webglTexture,j)}else if(bt){const At=V;for(let Wt=0;Wt<I.textures.length;Wt++){const Yt=lt.get(I.textures[Wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Wt,Yt.__webglTexture,j,At)}}else if(I!==null&&j!==0){const At=lt.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,j)}b=-1},this.readRenderTargetPixels=function(I,V,j,Y,H,pt,bt,Nt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){J.bindFramebuffer(O.FRAMEBUFFER,At);try{const Wt=I.textures[Nt],Yt=Wt.format,Ot=Wt.type;if(!Q.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=I.width-Y&&j>=0&&j<=I.height-H&&(I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Nt),O.readPixels(V,j,Y,H,Ft.convert(Yt),Ft.convert(Ot),pt))}finally{const Wt=P!==null?lt.get(P).__webglFramebuffer:null;J.bindFramebuffer(O.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(I,V,j,Y,H,pt,bt,Nt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At)if(V>=0&&V<=I.width-Y&&j>=0&&j<=I.height-H){J.bindFramebuffer(O.FRAMEBUFFER,At);const Wt=I.textures[Nt],Yt=Wt.format,Ot=Wt.type;if(!Q.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),I.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Nt),O.readPixels(V,j,Y,H,Ft.convert(Yt),Ft.convert(Ot),0);const ge=P!==null?lt.get(P).__webglFramebuffer:null;J.bindFramebuffer(O.FRAMEBUFFER,ge);const Re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Lf(O,Re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,se),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.deleteBuffer(se),O.deleteSync(Re),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,V=null,j=0){const Y=Math.pow(2,-j),H=Math.floor(I.image.width*Y),pt=Math.floor(I.image.height*Y),bt=V!==null?V.x:0,Nt=V!==null?V.y:0;vt.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,bt,Nt,H,pt),J.unbindTexture()};const zd=O.createFramebuffer(),Od=O.createFramebuffer();this.copyTextureToTexture=function(I,V,j=null,Y=null,H=0,pt=null){pt===null&&(H!==0?(So("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=H,H=0):pt=0);let bt,Nt,At,Wt,Yt,Ot,se,ge,Re;const be=I.isCompressedTexture?I.mipmaps[pt]:I.image;if(j!==null)bt=j.max.x-j.min.x,Nt=j.max.y-j.min.y,At=j.isBox3?j.max.z-j.min.z:1,Wt=j.min.x,Yt=j.min.y,Ot=j.isBox3?j.min.z:0;else{const pn=Math.pow(2,-H);bt=Math.floor(be.width*pn),Nt=Math.floor(be.height*pn),I.isDataArrayTexture?At=be.depth:I.isData3DTexture?At=Math.floor(be.depth*pn):At=1,Wt=0,Yt=0,Ot=0}Y!==null?(se=Y.x,ge=Y.y,Re=Y.z):(se=0,ge=0,Re=0);const _e=Ft.convert(V.format),kt=Ft.convert(V.type);let Te;V.isData3DTexture?(vt.setTexture3D(V,0),Te=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(vt.setTexture2DArray(V,0),Te=O.TEXTURE_2D_ARRAY):(vt.setTexture2D(V,0),Te=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const ce=O.getParameter(O.UNPACK_ROW_LENGTH),an=O.getParameter(O.UNPACK_IMAGE_HEIGHT),is=O.getParameter(O.UNPACK_SKIP_PIXELS),ln=O.getParameter(O.UNPACK_SKIP_ROWS),Ys=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,be.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ot);const Ae=I.isDataArrayTexture||I.isData3DTexture,fn=V.isDataArrayTexture||V.isData3DTexture;if(I.isDepthTexture){const pn=lt.get(I),Ke=lt.get(V),en=lt.get(pn.__renderTarget),ea=lt.get(Ke.__renderTarget);J.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),J.bindFramebuffer(O.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let Fi=0;Fi<At;Fi++)Ae&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.get(I).__webglTexture,H,Ot+Fi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.get(V).__webglTexture,pt,Re+Fi)),O.blitFramebuffer(Wt,Yt,bt,Nt,se,ge,bt,Nt,O.DEPTH_BUFFER_BIT,O.NEAREST);J.bindFramebuffer(O.READ_FRAMEBUFFER,null),J.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||I.isRenderTargetTexture||lt.has(I)){const pn=lt.get(I),Ke=lt.get(V);J.bindFramebuffer(O.READ_FRAMEBUFFER,zd),J.bindFramebuffer(O.DRAW_FRAMEBUFFER,Od);for(let en=0;en<At;en++)Ae?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,pn.__webglTexture,H,Ot+en):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pn.__webglTexture,H),fn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.__webglTexture,pt,Re+en):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ke.__webglTexture,pt),H!==0?O.blitFramebuffer(Wt,Yt,bt,Nt,se,ge,bt,Nt,O.COLOR_BUFFER_BIT,O.NEAREST):fn?O.copyTexSubImage3D(Te,pt,se,ge,Re+en,Wt,Yt,bt,Nt):O.copyTexSubImage2D(Te,pt,se,ge,Wt,Yt,bt,Nt);J.bindFramebuffer(O.READ_FRAMEBUFFER,null),J.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fn?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Te,pt,se,ge,Re,bt,Nt,At,_e,kt,be.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,pt,se,ge,Re,bt,Nt,At,_e,be.data):O.texSubImage3D(Te,pt,se,ge,Re,bt,Nt,At,_e,kt,be):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,se,ge,bt,Nt,_e,kt,be.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,se,ge,be.width,be.height,_e,be.data):O.texSubImage2D(O.TEXTURE_2D,pt,se,ge,bt,Nt,_e,kt,be);O.pixelStorei(O.UNPACK_ROW_LENGTH,ce),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,an),O.pixelStorei(O.UNPACK_SKIP_PIXELS,is),O.pixelStorei(O.UNPACK_SKIP_ROWS,ln),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ys),pt===0&&V.generateMipmaps&&O.generateMipmap(Te),J.unbindTexture()},this.initRenderTarget=function(I){lt.get(I).__webglFramebuffer===void 0&&vt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?vt.setTextureCube(I,0):I.isData3DTexture?vt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?vt.setTexture2DArray(I,0):vt.setTexture2D(I,0),J.unbindTexture()},this.resetState=function(){w=0,E=0,P=null,J.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const Vh={type:"change"},_c={type:"start"},dd={type:"end"},dr=new lc,Hh=new Si,Fx=Math.cos(70*yn.DEG2RAD),Ue=new R,nn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},za=1e-6;class zx extends Jp{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ii,this._lastTargetPosition=new R,this._quat=new Ii().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gh,this._sphericalDelta=new gh,this._scale=1,this._panOffset=new R,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new R,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bx.bind(this),this._onPointerDown=Ox.bind(this),this._onPointerUp=kx.bind(this),this._onContextMenu=jx.bind(this),this._onMouseWheel=Gx.bind(this),this._onKeyDown=Wx.bind(this),this._onTouchStart=Xx.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=Vx.bind(this),this._onMouseMove=Hx.bind(this),this._interceptControlDown=Yx.bind(this),this._interceptControlUp=Zx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vh),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ue.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(dr.origin.copy(this.object.position),dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dr.direction))<Fx?this.object.lookAt(this.target):(Hh.setFromNormalAndCoplanarPoint(this.object.up,this.target),dr.intersectPlane(Hh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>za||this._lastTargetPosition.distanceToSquared(this.target)>za?(this.dispatchEvent(Vh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ue.copy(i).sub(this.target);let s=Ue.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ox(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function Bx(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function kx(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dd),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vx(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ve.DOLLY;break;case Is.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ve.ROTATE}break;case Is.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(_c)}function Hx(o){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Gx(o){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(o.preventDefault(),this.dispatchEvent(_c),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(dd))}function Wx(o){this.enabled!==!1&&this._handleKeyDown(o)}function Xx(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ve.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ve.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(_c)}function qx(o){switch(this._trackPointer(o),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ve.NONE}}function jx(o){this.enabled!==!1&&o.preventDefault()}function Yx(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zx(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let fd=0,Gh=!1;function $x(){Gh||(Gh=!0,document.addEventListener("click",o=>{performance.now()<fd&&(o.preventDefault(),o.stopImmediatePropagation())},!0))}function $i(o,t){$x();let e=null,n=-1/0;return o.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"){e={id:i.pointerId,x:i.clientX,y:i.clientY};try{o.setPointerCapture(i.pointerId)}catch{}}}),o.addEventListener("pointercancel",()=>{e=null}),o.addEventListener("pointerup",i=>{if(!e||e.id!==i.pointerId)return;const s=Math.hypot(i.clientX-e.x,i.clientY-e.y);e=null,!(s>18)&&(i.preventDefault(),i.stopPropagation(),n=performance.now(),fd=n+800,t(i))}),o.addEventListener("click",i=>{if(performance.now()-n<800){i.preventDefault();return}t(i)}),o}class Kx{constructor(t){this.game=t,this.active=!1,this.controls=new zx(t.camera,t.renderer.domElement),this.controls.enabled=!1,this.controls.enableDamping=!0,this.controls.minDistance=2,this.controls.maxDistance=350,this.controls.maxPolarAngle=Math.PI*.96,this.controls.panSpeed=1.1,this.controls.zoomSpeed=.8,$i(document.getElementById("photo-close"),()=>this.close()),$i(document.getElementById("photo-shot"),()=>this.capture()),$i(document.getElementById("photo-reset"),()=>this.frame()),document.getElementById("photo-fov").oninput=e=>{t.camera.fov=Number(e.target.value),t.camera.updateProjectionMatrix()}}frame(){const t=this.game,e=t.active.mesh.position,n=t.active.config,i=Math.max(n.length,n.width)*1.25;this.controls.target.copy(e),this.controls.target.y+=n.kind==="air"?1:1.3,t.camera.position.set(e.x+i*.7,e.y+i*.33,e.z-i*.8),this.controls.update()}open(){const t=this.game;t.action("close"),this.active=!0,this.labels=[],t.scene.traverse(e=>{e.isSprite&&e.visible&&(this.labels.push(e),e.visible=!1)}),t.paused=!0,t.input.clear(),this.controls.enabled=!0,document.getElementById("hud").hidden=!0,document.getElementById("photo-panel").hidden=!1,this.frame()}close(){if(!this.active)return;const t=this.game;this.active=!1;for(const e of this.labels||[])e.visible=!0;this.controls.enabled=!1,t.paused=!1,t.input.clear(),t.camera.fov=55,t.camera.updateProjectionMatrix(),document.getElementById("photo-fov").value=55,document.getElementById("hud").hidden=!1,document.getElementById("photo-panel").hidden=!0}async capture(){const t=this.game,e=document.getElementById("photo-shot");e.disabled=!0;try{t.marker.visible=!1,t.graphics.render(0);const n=await new Promise(r=>t.renderer.domElement.toBlob(r,"image/png"));if(!n)throw new Error("画像を保存できませんでした");const i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download=`norimono-${t.active.config.id}-${Date.now()}.png`,s.click(),setTimeout(()=>URL.revokeObjectURL(i),3e4),t.toast("写真を保存したよ！")}catch(n){t.toast(n.message)}finally{e.disabled=!1}}update(){this.active&&this.controls.update()}}class Zr extends Kt{constructor(){const t=Zr.SkyShader,e=new qe({name:t.name,uniforms:ri.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ze,depthWrite:!1});super(new pi(1,1,1),e),this.isSky=!0}}Zr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
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

		}`};const Pr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jx=new vc(-1,1,1,-1,0,1);class Qx extends ye{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const t_=new Qx;class yc{constructor(t){this._mesh=new Kt(t_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Jx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class e_ extends js{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ri.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new yc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wh extends js{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class n_ extends js{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class i_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new e_(Pr),this.copyPass.material.blending=We,this.clock=new rd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wh!==void 0&&(r instanceof Wh?n=!0:r instanceof n_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class s_ extends js{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Zt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const fr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new oe},cameraProjectionMatrixInverse:{value:new oe},cameraWorldMatrix:{value:new oe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},pr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Oa={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function o_(o=5){const t=Math.floor(o)%2===0?Math.floor(o)+1:Math.floor(o),e=r_(t),n=e.length,i=new Uint8Array(n*4);for(let r=0;r<n;++r){const a=e[r],l=2*Math.PI*a/n,c=new R(Math.cos(l),Math.sin(l),0).normalize();i[r*4]=(c.x*.5+.5)*255,i[r*4+1]=(c.y*.5+.5)*255,i[r*4+2]=127,i[r*4+3]=255}const s=new Gr(i,t,t);return s.wrapS=di,s.wrapT=di,s.needsUpdate=!0,s}function r_(o){const t=Math.floor(o)%2===0?Math.floor(o)+1:Math.floor(o),e=t*t,n=Array(e).fill(0);let i=Math.floor(t/2),s=t-1;for(let r=1;r<=e;){if(i===-1&&s===t?(s=t-2,i=0):(s===t&&(s=0),i<0&&(i=t-1)),n[i*t+s]!==0){s-=2,i++;continue}else n[i*t+s]=r++;s++,i--}return n}const mr={defines:{SAMPLES:16,SAMPLE_VECTORS:pd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraProjectionMatrixInverse:{value:new oe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function pd(o,t,e){const n=a_(o,t,e);let i="vec3[SAMPLES](";for(let s=0;s<o;s++){const r=n[s];i+=`vec3(${r.x}, ${r.y}, ${r.z})${s<o-1?",":")"}`}return i}function a_(o,t,e){const n=[];for(let i=0;i<o;i++){const s=2*Math.PI*t*i/o,r=Math.pow(i/(o-1),e);n.push(new R(Math.cos(s),Math.sin(s),r))}return n}class l_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,s;const r=.5*(Math.sqrt(3)-1),a=(t+e)*r,l=Math.floor(t+a),c=Math.floor(e+a),d=(3-Math.sqrt(3))/6,u=(l+c)*d,h=l-u,f=c-u,m=t-h,v=e-f;let g,p;m>v?(g=1,p=0):(g=0,p=1);const x=m-g+d,y=v-p+d,_=m-1+2*d,S=v-1+2*d,w=l&255,E=c&255,P=this.perm[w+this.perm[E]]%12,b=this.perm[w+g+this.perm[E+p]]%12,M=this.perm[w+1+this.perm[E+1]]%12;let L=.5-m*m-v*v;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[P],m,v));let A=.5-x*x-y*y;A<0?i=0:(A*=A,i=A*A*this._dot(this.grad3[b],x,y));let D=.5-_*_-S*S;return D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[M],_,S)),70*(n+i+s)}noise3d(t,e,n){let i,s,r,a;const c=(t+e+n)*.3333333333333333,d=Math.floor(t+c),u=Math.floor(e+c),h=Math.floor(n+c),f=1/6,m=(d+u+h)*f,v=d-m,g=u-m,p=h-m,x=t-v,y=e-g,_=n-p;let S,w,E,P,b,M;x>=y?y>=_?(S=1,w=0,E=0,P=1,b=1,M=0):x>=_?(S=1,w=0,E=0,P=1,b=0,M=1):(S=0,w=0,E=1,P=1,b=0,M=1):y<_?(S=0,w=0,E=1,P=0,b=1,M=1):x<_?(S=0,w=1,E=0,P=0,b=1,M=1):(S=0,w=1,E=0,P=1,b=1,M=0);const L=x-S+f,A=y-w+f,D=_-E+f,z=x-P+2*f,N=y-b+2*f,F=_-M+2*f,G=x-1+3*f,k=y-1+3*f,q=_-1+3*f,at=d&255,ut=u&255,rt=h&255,Xt=this.perm[at+this.perm[ut+this.perm[rt]]]%12,Bt=this.perm[at+S+this.perm[ut+w+this.perm[rt+E]]]%12,$t=this.perm[at+P+this.perm[ut+b+this.perm[rt+M]]]%12,K=this.perm[at+1+this.perm[ut+1+this.perm[rt+1]]]%12;let et=.6-x*x-y*y-_*_;et<0?i=0:(et*=et,i=et*et*this._dot3(this.grad3[Xt],x,y,_));let Mt=.6-L*L-A*A-D*D;Mt<0?s=0:(Mt*=Mt,s=Mt*Mt*this._dot3(this.grad3[Bt],L,A,D));let Rt=.6-z*z-N*N-F*F;Rt<0?r=0:(Rt*=Rt,r=Rt*Rt*this._dot3(this.grad3[$t],z,N,F));let St=.6-G*G-k*k-q*q;return St<0?a=0:(St*=St,a=St*St*this._dot3(this.grad3[K],G,k,q)),32*(i+s+r+a)}noise4d(t,e,n,i){const s=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let d,u,h,f,m;const v=(t+e+n+i)*l,g=Math.floor(t+v),p=Math.floor(e+v),x=Math.floor(n+v),y=Math.floor(i+v),_=(g+p+x+y)*c,S=g-_,w=p-_,E=x-_,P=y-_,b=t-S,M=e-w,L=n-E,A=i-P,D=b>M?32:0,z=b>L?16:0,N=M>L?8:0,F=b>A?4:0,G=M>A?2:0,k=L>A?1:0,q=D+z+N+F+G+k,at=r[q][0]>=3?1:0,ut=r[q][1]>=3?1:0,rt=r[q][2]>=3?1:0,Xt=r[q][3]>=3?1:0,Bt=r[q][0]>=2?1:0,$t=r[q][1]>=2?1:0,K=r[q][2]>=2?1:0,et=r[q][3]>=2?1:0,Mt=r[q][0]>=1?1:0,Rt=r[q][1]>=1?1:0,St=r[q][2]>=1?1:0,ne=r[q][3]>=1?1:0,de=b-at+c,O=M-ut+c,ot=L-rt+c,tt=A-Xt+c,Q=b-Bt+2*c,J=M-$t+2*c,gt=L-K+2*c,lt=A-et+2*c,vt=b-Mt+3*c,qt=M-Rt+3*c,Gt=L-St+3*c,U=A-ne+3*c,T=b-1+4*c,W=M-1+4*c,Z=L-1+4*c,st=A-1+4*c,$=g&255,Tt=p&255,ft=x&255,Et=y&255,Dt=a[$+a[Tt+a[ft+a[Et]]]]%32,ht=a[$+at+a[Tt+ut+a[ft+rt+a[Et+Xt]]]]%32,wt=a[$+Bt+a[Tt+$t+a[ft+K+a[Et+et]]]]%32,Vt=a[$+Mt+a[Tt+Rt+a[ft+St+a[Et+ne]]]]%32,Ft=a[$+1+a[Tt+1+a[ft+1+a[Et+1]]]]%32;let _t=.6-b*b-M*M-L*L-A*A;_t<0?d=0:(_t*=_t,d=_t*_t*this._dot4(s[Dt],b,M,L,A));let jt=.6-de*de-O*O-ot*ot-tt*tt;jt<0?u=0:(jt*=jt,u=jt*jt*this._dot4(s[ht],de,O,ot,tt));let B=.6-Q*Q-J*J-gt*gt-lt*lt;B<0?h=0:(B*=B,h=B*B*this._dot4(s[wt],Q,J,gt,lt));let ct=.6-vt*vt-qt*qt-Gt*Gt-U*U;ct<0?f=0:(ct*=ct,f=ct*ct*this._dot4(s[Vt],vt,qt,Gt,U));let mt=.6-T*T-W*W-Z*Z-st*st;return mt<0?m=0:(mt*=mt,m=mt*mt*this._dot4(s[Ft],T,W,Z,st)),27*(d+u+h+f+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}}class kn extends js{constructor(t,e,n=512,i=512,s,r,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=o_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Dn(this.width,this.height,{type:fi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new qe({defines:Object.assign({},fr.defines),uniforms:ri.clone(fr.uniforms),vertexShader:fr.vertexShader,fragmentShader:fr.fragmentShader,blending:We,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Vp,this.normalMaterial.blending=We,this.pdMaterial=new qe({defines:Object.assign({},mr.defines),uniforms:ri.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new qe({defines:Object.assign({},pr.defines),uniforms:ri.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:We}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new qe({uniforms:ri.clone(Pr.uniforms),vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:sl,blendDst:ho,blendEquation:An,blendSrcAlpha:il,blendDstAlpha:ho,blendEquationAlpha:An}),this.blendMaterial=new qe({uniforms:ri.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:wu,blendSrc:sl,blendDst:ho,blendEquation:An,blendSrcAlpha:il,blendDstAlpha:ho,blendEquationAlpha:An}),this._fsQuad=new yc(null),this._originalClearColor=new Zt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new fc,this.depthTexture.format=Bs,this.depthTexture.type=Os,this.normalRenderTarget=new Dn(this.width,this.height,{minFilter:tn,magFilter:tn,type:fi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case kn.OUTPUT.Off:break;case kn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,s){t.getClearColor(this._originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(r)}_renderOverride(t,e,n,i,s){t.getClearColor(this._originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(r)}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){const e=new l_,n=t*t*4,i=new Uint8Array(n);for(let r=0;r<t;r++)for(let a=0;a<t;a++){const l=r,c=a;i[(r*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(r*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(r*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(r*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const s=new Gr(i,t,t,_n,In);return s.wrapS=di,s.wrapT=di,s.needsUpdate=!0,s}}kn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const gr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class c_ extends js{constructor(){super(),this.uniforms=ri.clone(gr.uniforms),this.material=new kp({name:gr.name,uniforms:this.uniforms,vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader}),this._fsQuad=new yc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Eu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Tu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function h_(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d"),n=e.createImageData(512,512);let i=543;for(let r=0;r<n.data.length;r+=4){i=Math.imul(i,1664525)+1013904223>>>0;const a=100+(i>>>25)*2.6;n.data[r]=n.data[r+1]=n.data[r+2]=a,n.data[r+3]=255}e.putImageData(n,0,0);const s=new Ni(t);return s.wrapS=s.wrapT=di,s.anisotropy=8,s}const u_=h_();function Ba(o,t,e){o.onBeforeCompile=n=>{n.uniforms.surfaceGrain={value:u_},n.vertexShader=`varying vec3 vDetailWorld;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vDetailWorld=(modelMatrix*vec4(transformed,1.0)).xyz;`),n.fragmentShader=`varying vec3 vDetailWorld;
uniform sampler2D surfaceGrain;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float grain=texture2D(surfaceGrain,vDetailWorld.xz*${t.toFixed(4)}).r;
 float variation=texture2D(surfaceGrain,vDetailWorld.xz*0.009).r;
 diffuseColor.rgb*=mix(${(1-e).toFixed(3)},${(1+e).toFixed(3)},grain)*mix(.86,1.08,variation);`)},o.customProgramCacheKey=()=>`surface-${t}-${e}`,o.needsUpdate=!0}class d_{constructor(t){this.game=t;const{scene:e,renderer:n,sun:i,camera:s}=t;this.mobile=t.mobile;let r="high";try{r=localStorage.getItem("norimono-quality")||"high"}catch{}this.quality=this.mobile?r==="low"?"low":"balanced":r,this.seconds=0,this.frames=0,n.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1:2)),n.toneMapping=kr,n.toneMappingExposure=this.mobile?1.18:.92;for(const f of e.children)f.isHemisphereLight&&(f.intensity=this.mobile?1.02:.55,f.color.set(14282751),f.groundColor.set(this.mobile?9146487:5721920));this.mobile&&e.add(new Zp(15135487,.56)),i.color.set(16773599),i.intensity=this.mobile?3.75:3.3,i.shadow.mapSize.set(this.mobile?512:2048,this.mobile?512:2048),Object.assign(i.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260}),i.shadow.bias=-8e-5,i.shadow.normalBias=.045,i.shadow.radius=this.mobile?1:2,i.shadow.camera.updateProjectionMatrix(),this.sky=new Zr,this.sky.scale.setScalar(2e4),e.add(this.sky),this.sky.material.fragmentShader=this.sky.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( retColor * vec3(0.24, 0.49, 0.83), 1.0 );");const a=this.sky.material.uniforms;a.turbidity.value=1.6,a.rayleigh.value=3.5,a.mieCoefficient.value=.001,a.mieDirectionalG.value=.78;const l=new R(-.65,1,-.45).normalize();if(a.sunPosition.value.copy(l),e.background=null,this.mobile?(s.far=430,s.updateProjectionMatrix(),e.fog=new Eo(11716298,250,420)):e.fog=new Eo(11716298,600,1950),this.mobile)e.environmentIntensity=.72;else{const f=new hc,m=this.sky.clone();f.add(m);const v=new Kt(new wn(2e4,2e4),new Qi({color:6581336}));v.rotation.x=-Math.PI/2,v.position.y=-10,f.add(v);const g=new Fr(n),p=e.environment;e.environment=g.fromScene(f,.04,.1,3e4).texture,e.environmentIntensity=.85,p?.dispose(),g.dispose(),v.geometry.dispose(),v.material.dispose()}const c=new Set([4279893,5858666,5662314,7042932,7702397]),d=new Set([8233062,8431206,9681026]),u=new Set([14870493,13031647,7839151,9415333,8560302,11387331,8426893]),h=new Set;if(e.traverse(f=>{if(!f.isMesh)return;const m=Array.isArray(f.material)?f.material:[f.material];for(const v of m){if(!v.color||h.has(v))continue;h.add(v);const g=v.color.getHex();c.has(g)?(v.color.set(3357502),v.roughness=.93,this.mobile||Ba(v,.55,.38)):d.has(g)?(v.color.set(6651206),this.mobile||Ba(v,.22,.32)):u.has(g)&&(v.roughness=.87,this.mobile||Ba(v,.12,.15))}}),this.mobile){n.shadowMap.enabled=!1,e.traverse(p=>{p.isMesh&&(p.castShadow=!1)});const f=document.createElement("canvas");f.width=f.height=64;const m=f.getContext("2d"),v=m.createRadialGradient(32,32,4,32,32,31);v.addColorStop(0,"rgba(20,36,38,.36)"),v.addColorStop(.55,"rgba(20,36,38,.2)"),v.addColorStop(1,"rgba(20,36,38,0)"),m.fillStyle=v,m.fillRect(0,0,64,64);const g=new Ni(f);this.vehicleShadow=new Kt(new wn(1,1),new Qi({map:g,transparent:!0,depthWrite:!1,toneMapped:!1})),this.vehicleShadow.rotation.x=-Math.PI/2,this.vehicleShadow.renderOrder=1,e.add(this.vehicleShadow)}else{for(const f of t.world.solids)f.castShadow=!0;e.traverse(f=>{f.isMesh&&!f.isInstancedMesh&&f.geometry.boundingSphere?.radius<90&&!f.material.transparent&&(f.castShadow=!0)})}if(t.world.water.material.color.set(2456978),t.world.water.material.roughness=.12,t.world.water.material.metalness=.25,this.waterTime={value:0},this.mobile||(t.world.water.material.onBeforeCompile=f=>{f.uniforms.waveTime=this.waterTime,f.vertexShader=`varying vec3 waterWorld;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
waterWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),f.fragmentShader=`varying vec3 waterWorld;
uniform float waveTime;
`+f.fragmentShader,f.fragmentShader=f.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
   float waveX=sin(waterWorld.x*.23+waterWorld.z*.09+waveTime*.8)*.14+sin(waterWorld.x*.91-waveTime)*.06;
   float waveZ=cos(waterWorld.z*.38+waterWorld.x*.1+waveTime*.6)*.13;
   normal=normalize(normal+mat3(viewMatrix)*vec3(waveX,0.,waveZ));`)}),this.composer=null,this.ao=null,!this.mobile){const f=new Dn(innerWidth,innerHeight,{type:fi,samples:4});this.composer=new i_(n,f),this.composer.addPass(new s_(e,s)),this.ao=new kn(e,s,innerWidth,innerHeight,void 0,{radius:2.2,distanceExponent:1.3,thickness:.8,scale:1,samples:8},{radius:4,lumaPhi:8,depthPhi:2,normalPhi:3}),this.ao.blendIntensity=.65,this.composer.addPass(this.ao),this.composer.addPass(new c_)}this.mobileSprites=[],this.mobile&&e.traverse(f=>{f.isSprite&&this.mobileSprites.push(f)}),this.setQuality(this.quality,!1),this.addControl()}addControl(){const t=document.createElement("button");t.id="quality",t.type="button",t.setAttribute("aria-label","画質を切り替える");const e=()=>this.mobile?this.quality==="low"?"画質：軽量":"画質：標準":this.quality==="high"?"画質：高":"画質：軽量";t.textContent=e(),document.getElementById("top-status").prepend(t),$i(t,()=>{this.setQuality(this.mobile?this.quality==="low"?"balanced":"low":this.quality==="high"?"balanced":"high"),t.textContent=e()})}setQuality(t,e=!0){this.quality=t,this.ao&&(this.ao.enabled=t==="high");const n=this.mobile?t==="low"?.8:1.25:t==="high"?2:1.25;if(this.game.renderer.setPixelRatio(Math.min(devicePixelRatio,n)),this.game.renderer.shadowMap.enabled=!this.mobile,this.resize(),e)try{localStorage.setItem("norimono-quality",t)}catch{}}resize(){this.composer?.setPixelRatio(this.game.renderer.getPixelRatio()),this.composer?.setSize(innerWidth,innerHeight)}updateMobileVisibility(){if(!this.mobile||this.game.frameCount%8)return;const t=this.game,e=t.active.body.position,n=300*300,i=470*470,s=520*520,r=new R;for(const a of this.mobileSprites)a.getWorldPosition(r),a.visible=r.distanceToSquared(e)<n;for(const a of t.vehicles)a.mesh.visible=a===t.active||a.body.position.distanceSquared(e)<i;for(const a of t.railway.trains)for(const l of a.meshes)l.visible=l.position.distanceToSquared(e)<s}render(t){if(this.updateMobileVisibility(),this.waterTime.value=this.game.time,this.sky.position.copy(this.game.camera.position),this.vehicleShadow){const e=this.game.active,n=e.body.position,i=e.config;this.vehicleShadow.position.set(n.x,Math.max(.04,n.y-e.ride+.06),n.z),this.vehicleShadow.rotation.z=-e.yaw,this.vehicleShadow.scale.set(i.width*2.15,i.length*1.7,1),this.vehicleShadow.visible=n.y-e.ride<7}this.composer?this.composer.render(t):this.game.renderer.render(this.game.scene,this.game.camera)}}function f_(o,t=!1){const e=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),s={},r={},a=o[0].morphTargetsRelative,l=new ye;let c=0;for(let d=0;d<o.length;++d){const u=o[d];let h=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(e){let d=0;const u=[];for(let h=0;h<o.length;++h){const f=o[h].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+d);d+=o[h].attributes.position.count}l.setIndex(u)}for(const d in s){const u=Xh(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in r){const u=r[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){const f=[];for(let v=0;v<r[d].length;++v)f.push(r[d][v][h]);const m=Xh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function Xh(o){let t,e,n,i=-1,s=0;for(let c=0;c<o.length;++c){const d=o[c];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*e}const r=new t(s),a=new rn(r,e,n);let l=0;for(let c=0;c<o.length;++c){const d=o[c];if(d.isInterleavedBufferAttribute){const u=l/e;for(let h=0,f=d.count;h<f;h++)for(let m=0;m<e;m++){const v=d.getComponent(h,m);a.setComponent(h+u,m,v)}}else r.set(d.array,l);l+=d.count*e}return i!==void 0&&(a.gpuType=i),a}function Mc(o,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,i=[new R,new R,new R],s=new R,r=new R,a=new R,l=new R;function c(v){const g=~~(v.x*n),p=~~(v.y*n),x=~~(v.z*n);return`${g},${p},${x}`}const d=o.index?o.toNonIndexed():o,u=d.attributes.position,h={};for(let v=0,g=u.count/3;v<g;v++){const p=3*v,x=i[0].fromBufferAttribute(u,p+0),y=i[1].fromBufferAttribute(u,p+1),_=i[2].fromBufferAttribute(u,p+2);s.subVectors(_,y),r.subVectors(x,y);const S=new R().crossVectors(s,r).normalize();for(let w=0;w<3;w++){const E=i[w],P=c(E);P in h||(h[P]=[]),h[P].push(S)}}const f=new Float32Array(u.count*3),m=new rn(f,3,!1);for(let v=0,g=u.count/3;v<g;v++){const p=3*v,x=i[0].fromBufferAttribute(u,p+0),y=i[1].fromBufferAttribute(u,p+1),_=i[2].fromBufferAttribute(u,p+2);s.subVectors(_,y),r.subVectors(x,y),a.crossVectors(s,r).normalize();for(let S=0;S<3;S++){const w=i[S],E=c(w),P=h[E];l.set(0,0,0);for(let b=0,M=P.length;b<M;b++){const L=P[b];a.dot(L)>e&&l.add(L)}l.normalize(),m.setXYZ(p+S,l.x,l.y,l.z)}}return d.setAttribute("normal",m),d}function xo(o,t=new Set,e=!1){o.updateMatrixWorld(!0);const n=new Map;for(const i of[...o.children]){if(!i.isMesh||i.isInstancedMesh||t.has(i)||!i.visible||Array.isArray(i.material))continue;const s=e?`${Math.floor(i.position.x/180)},${Math.floor(i.position.z/180)}`:"",r=i.material.uuid+s;let a=n.get(r);a||(a={material:i.material,parts:[],originals:[],cast:!1,indexed:!!i.geometry.index},n.set(r,a)),a.indexed&&!i.geometry.index&&(a.parts=a.parts.map(c=>{const d=c.toNonIndexed();return c.dispose(),d}),a.indexed=!1);const l=a.indexed?i.geometry.clone():i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();l.applyMatrix4(i.matrix),a.parts.push(l),a.originals.push(i),a.cast||=i.castShadow}for(const i of n.values()){if(i.parts.length<2){for(const a of i.parts)a.dispose();continue}const s=f_(i.parts,!1);for(const a of i.parts)a.dispose();if(!s)continue;const r=new Kt(s,i.material);r.castShadow=i.cast,r.receiveShadow=!0,o.add(r);for(const a of i.originals)o.remove(a)}}function md(o){const t=o.userData;xo(t.chassis,new Set([t.damage,...t.lights]));for(const e of t.wheels)xo(e.roll);xo(t.special)}function p_(o){const t=o.world,e=o.gimmicks,n=new Set([o.particles.mesh,o.particles.trackMesh,o.marker,t.water,t.fountain,t.waterfall,t.drawbridge.mesh,...t.signals,...t.brushes,...t.helipads,...t.doors.map(i=>i.mesh),...t.moving.map(i=>i.mesh),...e.platforms.map(i=>i.mesh),...e.fires.map(i=>i.mesh),...e.rings.map(i=>i.mesh),...o.physics.items.map(i=>i.mesh)]);xo(o.scene,n,!0)}class m_ extends hc{constructor(){super();const t=new pi;t.deleteAttribute("uv");const e=new Ee({side:Ze}),n=new Ee,i=new od(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Kt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const r=new Hs(t,n,6),a=new Ie;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),r.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),r.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),r.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),r.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),r.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),r.setMatrixAt(5,a.matrix),this.add(r);const l=new Kt(t,bs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Kt(t,bs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new Kt(t,bs(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const u=new Kt(t,bs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const h=new Kt(t,bs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new Kt(t,bs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function bs(o){return new Hp({color:0,emissive:16777215,emissiveIntensity:o})}const ka=new Map,ui=new Map,Va=new Map,Ws=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<=1024;function Lt(o,t=0,e=.7){const n=[o,t,e].join();return ka.has(n)||ka.set(n,new Ee({color:o,metalness:t,roughness:e})),ka.get(n)}function X(o,t,e,n,i,s,r,a=16777215,l){const c=`b${t},${e},${n}`;ui.has(c)||ui.set(c,new pi(t,e,n));const d=new Kt(ui.get(c),l||Lt(a));return d.position.set(i,s,r),d.receiveShadow=!0,o.add(d),d}function ie(o,t,e,n,i,s,r,a=16777215,l=16,c){const d=`c${t},${e},${n},${l}`;ui.has(d)||ui.set(d,new Mn(t,e,n,l));const u=new Kt(ui.get(d),c||Lt(a));return u.position.set(i,s,r),o.add(u),u}function on(o,t,e,n,i,s=16777215,r){const a=`s${t}`;ui.has(a)||ui.set(a,new xn(t,Ws?20:32,Ws?12:20));const l=new Kt(ui.get(a),r||Lt(s));return l.position.set(e,n,i),o.add(l),l}function Bn(o,t,e,n,i,s,r){const a=new Kt(new qn(t,e,Ws?6:8,Ws?24:40),Lt(r,.3,.35));return a.position.set(n,i,s),o.add(a),a}function g_(o,t){const e=`${o}|${t}`;if(Va.has(e))return Va.get(e);const n=document.createElement("canvas"),i=Ws?.5:1;n.width=512*i,n.height=128*i;const s=n.getContext("2d");s.scale(i,i),s.fillStyle="#102a3a",s.beginPath(),s.roundRect(0,0,512,128,22),s.fill(),s.fillStyle=t,s.font="bold 48px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(o,256,65,480);const r=new Ni(n);return r.colorSpace=He,r.anisotropy=Ws?2:8,Va.set(e,r),r}function we(o,t,e,n,i,s="#ffffff",r=22){const a=g_(t,s),l=new ju(new uc({map:a,depthWrite:!1}));return l.position.set(e,n,i),l.scale.set(r,r/4,1),o.add(l),l}function ue(o,t,e,n,i){const s=new R().subVectors(e,t),r=ie(o,n,n,s.length(),0,0,0,i,8);return r.position.copy(t).add(e).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new R(0,1,0),s.normalize()),r}const gd=Lt(4279893,0,.96),vd=Lt(6449251,0,.98),zr=Lt(14474964,0,.9);function Zi(o,t,e,n,i=0,s=0,r=null){const a=[],l=[],c=[];let d=0;for(let f=0;f<t.length;f++){const m=t[f],v=t[Math.max(0,f-1)],g=t[Math.min(t.length-1,f+1)],p=g.x-v.x,x=g.z-v.z,y=Math.hypot(p,x)||1;f&&(d+=m.distanceTo(t[f-1]));for(const _ of[-1,1]){const S=i+_*e/2;a.push(m.x+x/y*S,m.y+s,m.z-p/y*S),l.push(_>0?1:0,d/8)}if(f&&(!r||r(t[f-1].clone().lerp(m,.5).add(new R(x/y*i,0,-p/y*i))))){const _=f*2;c.push(_-2,_,_-1,_-1,_,_+1)}}const u=new ye;u.setAttribute("position",new Ht(a,3)),u.setAttribute("uv",new Ht(l,2)),u.setIndex(c),u.computeVertexNormals();const h=new Kt(u,n);return h.receiveShadow=!0,o.add(h),h}function qh(o,t,e,n,i=!1){let s=t.map(l=>new R(l[0],n,l[1]));i&&s[0].distanceTo(s.at(-1))>.01&&s.push(s[0].clone());const r=Zi(o.scene,s,e,gd);o.roadEdges??=[];for(const l of[-1,1])o.roadEdges.push({pts:s,width:1.4,material:vd,offset:l*(e/2+.7),lift:-.018,owner:r}),o.roadEdges.push({pts:s,width:.18,material:zr,offset:l*(e/2-.75),lift:.014,owner:r});let a=0;for(let l=1;l<s.length;l++){const c=s[l-1],d=s[l],u=c.distanceTo(d);o.roadSegments.push({a:c,b:d,width:e,owner:r});for(let h=(12-a%12)%12;h<u;h+=12){const f=c.clone().lerp(d,h/u),m=c.clone().lerp(d,Math.min(u,h+4.7)/u);if(f.distanceTo(m)>.3){const v=Zi(o.scene,[f,m],.22,zr,0,.022);o.roadMarks.push({mesh:v,center:f.clone().add(m).multiplyScalar(.5),dir:d.clone().sub(c).normalize(),width:e})}}a+=u}return r}function v_(o,t,e,n){const i=[new R(...t),new R(...e)];for(const r of i)r.y+=.36;Zi(o.scene,i,n,gd);for(const r of[-1,1])Zi(o.scene,i,.2,zr,r*(n/2-.65),.015),Zi(o.scene,i,.55,vd,r*(n/2-.1),.006);const s=i[0].distanceTo(i[1]);for(let r=0;r<s;r+=12)Zi(o.scene,[i[0].clone().lerp(i[1],r/s),i[0].clone().lerp(i[1],Math.min(1,(r+4)/s))],.22,zr,0,.02)}function x_(o){for(const t of o.roadEdges||[]){const e=[t.pts[0]];for(let n=1;n<t.pts.length;n++){const i=t.pts[n-1],s=t.pts[n],r=Math.ceil(i.distanceTo(s)/3);for(let a=1;a<=r;a++)e.push(i.clone().lerp(s,a/r))}Zi(o.scene,e,t.width,t.material,t.offset,t.lift,n=>!o.roadSegments.some(i=>{if(i.owner===t.owner||Math.abs(n.y-i.a.y)>.3)return!1;const s=i.b.x-i.a.x,r=i.b.z-i.a.z,a=s*s+r*r,l=((n.x-i.a.x)*s+(n.z-i.a.z)*r)/a;return l<0||l>1?!1:Math.hypot(n.x-i.a.x-l*s,n.z-i.a.z-l*r)<i.width/2+.1}))}for(const t of o.roadMarks)for(const e of o.roadSegments){if(Math.abs(e.a.y-t.center.y)>.3)continue;const n=e.b.clone().sub(e.a),i=n.length();if(n.normalize(),Math.abs(n.dot(t.dir))>.93)continue;const s=t.center.clone().sub(e.a),r=s.dot(n);if(!(r<0||r>i)&&s.addScaledVector(n,-r).length()<e.width/2+1){t.mesh.removeFromParent(),t.mesh.geometry.dispose();break}}}function __(o,t,e,n,i,s){const r=Lt(7766666,.2,.67),a=new hi({color:3427931,metalness:.45,roughness:.16,clearcoat:1,envMapIntensity:1.1}),l=Lt(13159363,.1,.7);for(let c=0;c<Math.floor((s-3)/4.6);c++){const d=5.5+c*4.6;for(const u of[-1,1]){X(o,n+.2,.18,.3,t,d+1.5,e+u*i*.5,0,l);for(let h=0;h<Math.floor((n-2)/4.5);h++){const f=t-n/2+3+h*4.5;X(o,2.6,2.3,.13,f,d,e+u*(i*.5+.02),0,r),X(o,2.3,2,.14,f,d,e+u*(i*.5+.1),0,a),X(o,.06,2,.15,f,d,e+u*(i*.5+.13),0,l)}}for(const u of[-1,1]){X(o,.3,.18,i,t+u*n*.5,d+1.5,e,0,l);for(let h=0;h<Math.floor((i-2)/4.5);h++){const f=e-i/2+3+h*4.5;X(o,.13,2.3,2.6,t+u*(n*.5+.02),d,f,0,r),X(o,.14,2,2.3,t+u*(n*.5+.1),d,f,0,a)}}}for(const c of[-1,1])X(o,n+1,.5,.7,t,s+2.8,e+c*i*.5,0,l),X(o,.7,.5,i+1,t+c*n*.5,s+2.8,e,0,l);X(o,n*.26,1.2,i*.24,t-n*.18,s+3,e+i*.1,0,r);for(let c=0;c<2;c++)ie(o,1.2,1.2,.15,t-n*.18-1.5+c*3,s+3.67,e+i*.1,4345428,24);X(o,n*.36,.4,2.5,t,5.8,e-i*.5-1,0,l);for(const c of[-1,1])X(o,1.4,3,.15,t+c*.76,3.65,e-i*.5-.12,0,a)}const y_={switchDistance:22},jn=[{name:"中央タウン",icon:"🏙",x:0,z:0,color:"#48c5ff"},{name:"そらのみなと",icon:"✈",x:-650,z:-600,color:"#ffd657"},{name:"ふじのやま",icon:"🗻",x:600,z:-650,color:"#63dd99"},{name:"こうじげんば",icon:"🚧",x:650,z:0,color:"#ffb64b"},{name:"レースパーク",icon:"🏁",x:600,z:600,color:"#ff6775"},{name:"わくわくひろば",icon:"🎡",x:0,z:730,color:"#c893ff"},{name:"さくらのさと",icon:"⛩",x:-550,z:570,color:"#ff98c2"},{name:"うみのみなと",icon:"⚓",x:-750,z:50,color:"#58e1df"},{name:"どうぶつぼくじょう",icon:"🐑",x:-100,z:-700,color:"#abda79"}];let M_=class{constructor(t){this.game=t,this.scene=t.scene,this.physics=t.physics,this.solids=[],this.roadSegments=[],this.roadMarks=[],this.signals=[],this.animals=[],this.doors=[],this.moving=[],this.helipads=[],this.build()}solid(t,e,n,i,s,r,a,l=0){const c=X(this.scene,i,s,r,t,e,n,a);c.rotation.y=l,c.castShadow=s>2&&i<100&&r<100;const d=this.physics.box(t,e,n,i,s,r,0,null,l);return(s<=1.1&&i>=10&&r>=10||i>150&&r>80&&e<0)&&(d.collisionFilterGroup=4,d.drivable=!0),this.solids.push(c),{mesh:c,body:d}}road(t,e,n=22,i=2.08,s=!1){const r=qh(this,[t,e],n,i);if(s){const a=e[0]-t[0],l=e[1]-t[1],c=this.physics.box((t[0]+e[0])/2,i-.2,(t[1]+e[1])/2,n,.4,Math.hypot(a,l)+.3,0,null,Math.atan2(a,l));c.collisionFilterGroup=4,c.drivable=!0}return r}route(t,e=22,n=2.08,i=!1,s=!1){const r=qh(this,t,e,n,i);if(s){const a=i?[...t,t[0]]:t;for(let l=1;l<a.length;l++){const c=a[l-1],d=a[l],u=d[0]-c[0],h=d[1]-c[1],f=this.physics.box((c[0]+d[0])/2,n-.2,(c[1]+d[1])/2,e,.4,Math.hypot(u,h)+.3,0,null,Math.atan2(u,h));f.collisionFilterGroup=4,f.drivable=!0}}return r}finishRoads(){x_(this)}ramp(t,e,n=18,i=5662314){const s=new R(...e).sub(new R(...t)),r=s.length(),a=X(this.scene,n,.7,r,(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2,i);a.rotation.set(-Math.atan2(s.y,Math.hypot(s.x,s.z)),Math.atan2(s.x,s.z),0,"YXZ");const l=this.physics.box(a.position.x,a.position.y,a.position.z,n,.7,r+.4);return l.quaternion.copy(a.quaternion),l.updateAABB(),this.physics.world.broadphase.dirty=!0,l.collisionFilterGroup=4,l.drivable=!0,v_(this,t,e,n),a.visible=!1,this.solids.push(a),{mesh:a,body:l}}building(t,e,n,i,s,r,a){this.solid(t,2+s/2,e,n,s,i,r),X(this.scene,n+1,.6,i+1,t,s+2.2,e,14542047),__(this.scene,t,e,n,i,s),a&&we(this.scene,a,t,s+6,e,"#fff",Math.max(22,n))}portal(t,e,n=22,i=15,s=8226184,r=2){this.solid(t-n/2-2,r+i/2,e,4,i,7,s),this.solid(t+n/2+2,r+i/2,e,4,i,7,s),this.solid(t,r+i,e,n+8,4,7,s)}helipad(t,e,n){ie(this.scene,11,11,.2,t,e,n,4609626,40),we(this.scene,"H",t,e+.6,n,"#fff",12);const i=Bn(this.scene,10,.2,t,e+.2,n,13886042);i.rotation.x=Math.PI/2,this.helipads.push(i)}build(){const t=this.scene;this.solid(90,-1.5,-374,1820,7,1252,8233062),this.solid(-910,-1.5,-557.5,180,7,885,8233062),this.solid(-910,-1.5,248,180,7,6,8233062),this.solid(0,-1.5,675,2e3,7,650,8431206),this.solid(0,-7,300,2e3,2,98,4747103),this.solid(-910,-7,70,180,2,360,4815474),X(t,180,.22,360,-910,0,65,3776179,Lt(3252152,.35,.25)),this.water=X(t,2e3,.15,98,0,0,300,3845571,new hi({color:2727609,metalness:.3,roughness:.22,transparent:!0,opacity:.84})),this.solid(260,.3,300,70,1,100,7966315),this.route([[-850,-820],[850,-820],[850,850],[-850,850]],26,2.1,!0,!0),this.route([[-225,-225],[225,-225],[225,225],[-225,225]],24,2.1,!0);for(const a of jn.slice(1)){this.road([0,0],[a.x,a.z],24,2.1,!0),we(t,a.icon+" "+a.name,a.x,32,a.z,a.color,62);const l=[];for(let c=0;c<17;c++){const d=c/16*Math.PI*2;l.push([a.x+Math.cos(d)*88,a.z+Math.sin(d)*88])}this.route(l,18,2.12)}for(const a of[-120,0,120])this.road([a,-210],[a,220],a===0?30:18);for(const a of[-120,0,120])this.road([-210,a],[210,a],a===0?30:18);X(t,68,.12,80,0,2.18,35,5858666);for(let a=-2;a<=2;a++)X(t,.2,.02,18,a*11,2.26,25,13620683),X(t,10,.02,.2,a*11+5,2.26,34,13620683);for(const a of[-120,0,120])for(const l of[-120,0,120]){ie(t,.25,.25,8,a+17,6,l+17,5857895);const c=on(t,.8,a+17,10,l+17,4255338);this.signals.push(c);for(let d=0;d<6;d++)X(t,2,.04,7,a-8+d*3,2.24,l+20,15790302)}this.building(70,-76,32,26,17,14870493,"びょういん"),this.building(109,-78,27,25,13,12412754,"しょうぼうしょ"),this.building(-70,-105,28,22,13,13031647,"けいさつ"),this.building(75,80,36,28,25,7839151,"まちのタワー"),this.building(-80,80,35,32,38,9415333),this.building(165,-165,36,38,60,8560302),this.building(-155,-166,36,38,45,11387331),this.portal(70,-94,16,9,14477532);const e=X(t,14,7,.5,70,5.5,-94,10472410);this.doors.push({mesh:e,x:70,z:-94,base:5.5,id:"ambulance"}),this.portal(-68,65,24,14,6274505),we(t,"あらう & なおす",-68,22,65,"#fff",34),this.wash={x:-68,z:65},this.repair={x:-68,z:100},we(t,"🔧 ピット",-68,8,100,"#ffe278",24);for(const a of[-85,-52])this.solid(a,7,60,2,10,24,6007483);this.brushes=[];for(const a of[-78,-58])this.brushes.push(ie(t,3,3,8,a,7,64,5748426,16));this.portal(155,65,30,10,14930090),we(t,"エネルギー",155,16,65,"#ffe69c",30);for(const a of[143,166])X(t,2,4,2,a,4,66,15920610);ie(t,25,25,.2,70,2.2,155,9681026,40),ie(t,9,9,.7,70,2.7,155,12834001,32),this.fountain=ie(t,1.4,2,12,70,9,155,8969969),Bn(t,25,.4,70,10,175,15255426),this.parking(),this.mountain(),this.airport(),this.harbour(),this.heritage(),this.farm(),this.race(),this.bridges(),this.portal(0,-180,25,15),this.portal(0,-210,25,15),this.ramp([-120,2,170],[-120,17,100],22),this.ramp([-120,17,100],[-120,17,-40],22),this.ramp([-120,17,-40],[-120,2,-110],22);for(const a of jn)this.helipad(a.x+45,2.3,a.z+45);this.helipad(70,19.5,-76),this.helipad(165,62.6,-165);const n=new Hs(new Wr(5.4,2).scale(1,1.35,1),Lt(4683610),400),i=new Hs(new Mn(.6,.8,6,6),Lt(7824465),400),s=new Ie;let r=0;for(let a=0;a<1100&&r<400;a++){const l=Math.sin(a*63.21)*940,c=Math.sin(a*127.7+1)*940;this.isWater(l,c)||Math.hypot(l,c)<280||jn.some(d=>Math.hypot(d.x-l,d.z-c)<125)||Math.abs(l-c)<35||Math.abs(l+c)<35||Math.abs(l)<30||Math.abs(c)<30||(s.position.set(l,11,c),s.updateMatrix(),n.setMatrixAt(r,s.matrix),s.position.y=5,s.updateMatrix(),i.setMatrixAt(r,s.matrix),r++)}n.count=i.count=r,n.castShadow=!0,i.castShadow=!0,t.add(n,i),this.vegetation=[n,i];for(let a=0;a<18;a++){const l=new zt;for(let c=0;c<3;c++)on(l,14+c*3,c*17,0,0,16777215).scale.set(2,.5,1);l.position.set(Math.sin(a*4)*1e3,240+a%3*40,Math.cos(a*4)*1e3),t.add(l)}}parking(){const t=this.scene;for(let n=1;n<=3;n++){this.solid(-185,2+n*11,45,55,.8,65,10594988);for(const i of[-208,-162])for(const s of[18,72])this.solid(i,2+n*5.5,s,1.2,n*11,1.2,7833484);this.ramp([-136,2+n*11,45],[-164,2+n*11,45],13)}const e=[];for(let n=0;n<=96;n++){const i=n/96*Math.PI*6;e.push([-185+Math.cos(i)*49,2+n/96*33,45+Math.sin(i)*49])}for(let n=1;n<e.length;n++)this.ramp(e[n-1],e[n],13);this.ramp([-185,35,13],[-185,44,-10],16,14520924),we(t,"P ぐるぐるパーキング",-185,45,45,"#fff",45),this.elevator(-153,84,2,36)}elevator(t,e,n,i){const s=this.solid(t,n,e,16,.6,16,14201927);s.body.type=4,this.moving.push({...s,x:t,z:e,low:n,high:i,t:0,mode:"elevator"}),we(this.scene,"↕",t,n+4,e,"#fff",10)}mountain(){const t=this.scene,e=ie(t,35,230,205,600,102,-650,8426893,48);e.geometry=new Mn(35,230,205,48,20);const n=e.geometry.index,i=e.geometry.attributes.position,s=[];for(let l=0;l<n.count;l+=3){const c=[n.getX(l),n.getX(l+1),n.getX(l+2)],d=c.reduce((f,m)=>f+i.getX(m),0)/3,u=c.reduce((f,m)=>f+i.getY(m),0)/3,h=c.reduce((f,m)=>f+i.getZ(m),0)/3;Math.abs(d)<65&&u<-65&&h>130||s.push(...c)}e.geometry=e.geometry.clone(),e.geometry.setIndex(s),ie(t,34,96,62,600,174,-650,15791599,48);const r=[];for(let l=0;l<=150;l++){const c=l/150,d=c*Math.PI*5,u=243-c*193;r.push([600+Math.cos(d)*u,2+c*204,-650+Math.sin(d)*u])}for(let l=1;l<r.length;l++)this.ramp(r[l-1],r[l],22,l>104?13295585:7042932);this.road([600,-410],[843,-410],24,2.1,!0),this.road([843,-410],[843,-650],24,2.1,!0),this.ramp([550,206,-650],[585,206,-650],22,15397096),this.solid(600,206,-650,88,1,88,15397096),this.ramp([600,206,-610],[590,225,-568],25,11916507),this.helipad(625,207,-655),this.solid(600,23,-486,75,1,78,7900043),this.portal(600,-448,50,22,5468021);const a=X(t,47,17,1,600,11,-448,4885663);this.doors.push({mesh:a,x:600,z:-448,base:11,id:null}),we(t,"ひみつきち",600,31,-470,"#b6ffff",42),this.elevator(628,-490,2,206),this.waterfall=X(t,13,40,1,640,23,-450,8903656,new Ee({color:9230822,transparent:!0,opacity:.58}));for(let l=0;l<8;l++)on(t,1.3,580+l*6,4,-467,8454109);this.helipad(575,2.4,-485)}airport(){const t=this.scene;this.road([-665,-800],[-665,-410],38);for(let e=0;e<16;e++)X(t,1,.12,3,-685,2.3,-790+e*24,8974079),X(t,1,.12,3,-645,2.3,-790+e*24,8974079);this.building(-747,-595,45,55,28,11846857,"そらのみなと"),this.building(-746,-680,17,17,57,12833748,"TOWER"),X(t,26,7,26,-746,59,-680,4680828),this.portal(-605,-640,32,16,10271684),this.helipad(-600,2.3,-570)}harbour(){const t=this.scene;X(t,150,.3,150,-750,2.2,60,10790813);for(let e=0;e<10;e++){const n=-797+e%4*18,i=5+Math.floor(e/4)*17;X(t,15,7,12,n,5.7,i,[10771522,3702412,12821073][e%3]);for(let s=0;s<7;s++)X(t,.1,6.5,12.1,n-6+s*2,5.7,i,7108470)}this.building(-755,122,65,30,20,10002846,"うみのみなと"),this.solid(-842,2.5,65,44,1,14,9211519);for(const e of[-820,-780])this.solid(e,24,-18,2,44,2,14463819);ue(t,new R(-820,46,-18),new R(-775,46,-18),1,14463819),ue(t,new R(-810,45,-18),new R(-810,12,-18),.15,4607567)}heritage(){const t=this.scene;for(let e=0;e<5;e++){X(t,25-e*3,7,25-e*3,-550,6+e*9,570,9784894);const n=ie(t,0,23-e*2.7,6,-550,12+e*9,570,4345424,4);n.rotation.y=Math.PI/4}for(const e of[-582,-548])ie(t,1.4,1.6,22,e,13,510,12866365);X(t,48,2.5,4,-565,23,510,12406584),X(t,43,1.7,3,-565,19,510,13065282),ie(t,30,30,.2,-610,2.2,595,7122865,40),this.ramp([-635,2.5,595],[-610,7,595],12),this.ramp([-610,7,595],[-585,2.5,595],12);for(let e=0;e<8;e++)this.building(-650+e*20,655,15,18,9,11770747),ie(t,.4,.6,18,-590+e*5,11,550,7638101,6);this.portal(-530,620,22,14,9917504)}farm(){const t=this.scene;this.building(-110,-760,45,30,18,10839625,"ぼくじょう");const e=ie(t,0,30,13,-110,26,-760,6904914,4);e.rotation.y=Math.PI/4;for(let i=0;i<14;i++)for(const s of[-625,-795])X(t,1,4,1,-200+i*15,4,s,14538168),X(t,15,.6,.6,-193+i*15,5,s,14538168);this.windmill=new zt,this.windmill.position.set(-40,25,-755),t.add(this.windmill),ie(t,2,5,25,-40,14,-755,13158836);for(let i=0;i<4;i++){const s=X(this.windmill,2,15,.4,Math.sin(i*Math.PI/2)*8,Math.cos(i*Math.PI/2)*8,0,14342601);s.rotation.z=-i*Math.PI/2}const n=[15328725,9134925,15986401,11834740,7437698,14608093,9793353];for(let i=0;i<21;i++){const s=new zt,r=i%7,a=r===5?.5:r===4?.65:1.1;if(on(s,a,0,1.7,0,n[r]).scale.set(1,1,1.7),on(s,a*.65,0,2.1,-a*1.5,n[r]),r===5)X(s,4,.15,.6,0,1.5,0,13753558);else for(const c of[-.6,.6])for(const d of[-.8,.8])X(s,.22,1.4,.22,c,.7,d,n[r]);s.position.set(-180+i%7*20,2,-690-Math.floor(i/7)*25),t.add(s),this.animals.push({mesh:s,home:s.position.clone(),phase:i,kind:r})}}race(){const t=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;t.push([600+Math.cos(n)*165,600+Math.sin(n)*135])}this.route(t,28,2.2),this.road([450,470],[750,470],28),this.portal(600,465,32,16,4479848),we(this.scene,"RACE PARK",600,22,465,"#ffde70",52),this.ramp([740,2,530],[750,12,575],28),this.ramp([750,12,575],[755,2,630],28);for(let e=0;e<12;e++)X(this.scene,3,.05,4,585+e%6*6,2.32,468+Math.floor(e/6)*4,e%2?16777215:1979199)}bridges(){for(const t of[-600,0,520]){this.ramp([t,2,219],[t,2.65,239],28),this.ramp([t,2.65,364],[t,2,384],28),this.road([t,238],[t,365],28,3,!0);for(const e of[-1,1])if(ue(this.scene,new R(t+e*15,5,240),new R(t+e*15,5,360),.4,12043457),t===0||t===520){for(const n of[250,350])this.solid(t+e*16,18,n,2,32,2,13147243);ue(this.scene,new R(t+e*16,34,250),new R(t+e*16,7,300),.2,12237744),ue(this.scene,new R(t+e*16,34,350),new R(t+e*16,7,300),.2,12237744)}}this.drawbridge=this.solid(-775,3,300,24,1,100,9280662),this.drawbridge.body.type=4,this.ramp([-775,2,230],[-775,3.15,250],24),this.ramp([-775,3.15,350],[-775,2,370],24)}isWater(t,e){return Math.abs(e-300)<49&&!(t>225&&t<295)||t<-825&&e>-115&&e<245}update(t,e){const n=this.game.active,i=n.body.position;for(let l=0;l<this.signals.length;l++)this.signals[l].material=Lt([4778090,16176451,15291203][Math.floor(e/5+l)%3]);this.fountain.scale.y=.7+Math.sin(e)*.3,this.windmill.rotation.z=e*.3;for(const l of this.brushes)l.rotation.y=e*4;for(const l of this.animals){const c=Math.hypot(l.mesh.position.x-i.x,l.mesh.position.z-i.z);c<18?(l.mesh.position.x+=(l.mesh.position.x-i.x)/Math.max(1,c)*t*9,l.mesh.position.z+=(l.mesh.position.z-i.z)/Math.max(1,c)*t*9):(l.mesh.position.x+=(l.home.x+Math.sin(e*.3+l.phase)*8-l.mesh.position.x)*t*.4,l.mesh.position.z+=(l.home.z+Math.cos(e*.2+l.phase)*8-l.mesh.position.z)*t*.4),l.mesh.position.y=2+(l.kind===5?5+Math.sin(e+l.phase)*2:Math.abs(Math.sin(e*3+l.phase))*.12)}for(const l of this.doors){const c=Math.hypot(i.x-l.x,i.z-l.z)<35&&(!l.id||n.config.id===l.id);l.mesh.position.y=yn.lerp(l.mesh.position.y,l.base+(c?18:0),t*3)}for(const l of this.moving){const c=Math.abs(i.x-l.x)<10&&Math.abs(i.z-l.z)<10;c?l.t+=t:l.t=Math.max(0,l.t-t);const d=l.low+(l.high-l.low)*Math.min(1,l.t/8);l.body.velocity.y=(d-l.body.position.y)/Math.max(t,.001),l.body.position.y=d,l.mesh.position.y=d,c&&Math.abs(i.y-(d+n.ride))<4&&(i.y=d+n.ride+.4,n.body.velocity.y=l.body.velocity.y)}const r=n.config.kind==="water"&&Math.hypot(i.x+775,i.z-300)<90?1:0,a=yn.lerp(this.drawbridge.mesh.rotation.x,r,t*1.5);this.drawbridge.mesh.rotation.x=a,this.drawbridge.body.quaternion.setFromEuler(a,0,0),this.drawbridge.body.aabbNeedsUpdate=!0;for(const l of this.helipads)l.material=Lt(Math.hypot(i.x-l.position.x,i.z-l.position.z)<12?8322984:13886042,.3,.35)}};const oo=new R;function gn(o,t,e,n,i,s){const r=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;oo.copy(t),oo[n]=0,oo.normalize();const c=.5*r/(r+a),d=1-oo.angleTo(o)/l;return Math.sign(oo[e])===1?d*c:a/(r+a)+c+c*(1-d)}class es extends pi{constructor(t=1,e=1,n=1,i=2,s=.1){const r=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new R,c=new R,d=new R(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,v=new R,g=.5/r;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=d.x*Math.sign(l.x)+c.x*s,u[p+1]=d.y*Math.sign(l.y)+c.y*s,u[p+2]=d.z*Math.sign(l.z)+c.z*s,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),f[x+0]=gn(v,c,"z","y",s,n),f[x+1]=1-gn(v,c,"y","z",s,e);break;case 1:v.set(-1,0,0),f[x+0]=1-gn(v,c,"z","y",s,n),f[x+1]=1-gn(v,c,"y","z",s,e);break;case 2:v.set(0,1,0),f[x+0]=1-gn(v,c,"x","z",s,t),f[x+1]=gn(v,c,"z","x",s,n);break;case 3:v.set(0,-1,0),f[x+0]=1-gn(v,c,"x","z",s,t),f[x+1]=1-gn(v,c,"z","x",s,n);break;case 4:v.set(0,0,1),f[x+0]=1-gn(v,c,"x","y",s,t),f[x+1]=1-gn(v,c,"y","x",s,e);break;case 5:v.set(0,0,-1),f[x+0]=gn(v,c,"x","y",s,t),f[x+1]=1-gn(v,c,"y","x",s,e);break}}static fromJSON(t){return new es(t.width,t.height,t.depth,t.segments,t.radius)}}const w_=Lt(2108209,.5,.48),b_=Lt(10003882,.8,.3),Yl=Lt(2378843,.18,.3),S_=Lt(15133414,.38,.3),E_=Lt(12171692),jh=Lt(7835545,.4,.42);function T_(o,t,e,n){const i=new zt,s=o?S_:Lt(12371401,.72,.35),r=Lt(t,.35,.35),a=e===0||n;if(n&&(i.rotation.y=Math.PI),X(i,4.1,3.35,o&&a?17:19,0,2.45,0,0,s),o&&a){const l=new Kt(new Do(1.92,7,8),s);l.rotation.x=-Math.PI/2,l.position.set(0,2.3,-11.6),i.add(l)}for(const l of[-1,1]){X(i,.04,.24,17.8,l*2.07,1.9,0,0,r);for(let c=-6.8;c<=6.8;c+=2.3)X(i,.045,.82,1.45,l*2.075,2.85,c,0,Yl)}for(const l of[-6,6])for(const c of[-1,1]){const d=ie(i,.48,.48,.25,c*1.55,.45,l,0,10,w_);d.rotation.z=Math.PI/2}return a&&X(i,3.2,1.05,.08,0,2.9,-9.53,0,Yl),i.userData={doors:[],fast:o,carLength:19},i}function A_(o,t,e,n,i){const s=new zt,r=t.curve.getPointAt(e),a=t.curve.getTangentAt(e),l=t.fast?132:80;s.position.copy(r),s.rotation.y=Math.atan2(a.x,a.z),o.add(s);for(const c of[-1,1]){X(s,7.5,.55,l,c*7.2,.6,-l*.34,0,E_),X(s,.45,.08,l*.92,c*3.7,.92,-l*.34,0,Lt(15318851));for(let d=-l*.72;d<l*.04;d+=16)X(s,.25,5,.25,c*7.2,3.3,d,0,b_),X(s,8,.22,5,c*7.2,5.75,d,0,jh)}return X(s,14,5,19,18,3,-l*.34,0,Lt(13226962)),X(s,15,.28,20,18,5.65,-l*.34,0,jh),X(s,8,1,.12,18,4.15,-l*.34-9.56,0,Lt(1790565)),X(s,5,3,.1,18,2.2,-l*.34-9.63,0,Yl),s.name="station-"+n,s.updateMatrixWorld(!0),s.userData={name:n,platformLength:l,hasGates:!0,hasAccess:!0,photoPosition:new R(27,14,-35).applyMatrix4(s.matrixWorld),photoTarget:new R(18,2,-l*.34).applyMatrix4(s.matrixWorld)},s}const Ai=Lt(10135212,.85,.3),On=Lt(2108209,.5,.48),ai=new hi({color:1587010,roughness:.075,metalness:.2,clearcoat:1,side:Xe}),xd=Lt(13752021,.5,.42),_d=Lt(15133414,.38,.3),Zl=new Ee({color:16777215,emissive:13167359,emissiveIntensity:2}),Or=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<=1024,Yh=new Map,Ha=new Map;function re(o,t,e,n,i,s,r,a,l=.1){const c=new Kt(new es(t,e,n,3,Math.min(l,t/3,e/3,n/3)),a);return c.position.set(i,s,r),c.castShadow=!0,c.receiveShadow=!0,o.add(c),c}function bi(o,t,e,n,i,s,r,a="#eef7ef",l="#163d4a"){const c=`${t}|${a}|${l}`;let d=Yh.get(c);if(!d){const f=Or?.5:1,m=document.createElement("canvas");m.width=1024*f,m.height=256*f;const v=m.getContext("2d");v.scale(f,f),v.fillStyle=l,v.fillRect(0,0,1024,256),v.fillStyle=a,v.font='bold 68px "Yu Gothic",sans-serif',v.textAlign="center",v.textBaseline="middle",v.fillText(t,512,125,990);const g=new Ni(m);g.colorSpace=He,g.anisotropy=Or?2:8,d=new Ee({map:g,roughness:.6,side:Xe}),Yh.set(c,d)}const u=`${e}|${n}`;Ha.has(u)||Ha.set(u,new wn(e,n));const h=new Kt(Ha.get(u),d);return h.position.set(i,s,r),r<0&&(h.rotation.y=Math.PI),o.add(h),h}function $l(o,t=[]){const e=[];o.updateMatrixWorld(!0),o.traverse(n=>{n.isMesh&&!t.includes(n)&&e.push(n)});for(const n of e)n.parent!==o&&o.attach(n);xo(o,new Set(t))}function C_(o,t,e,n){if(Or)return T_(o,t,e,n);const i=new sp,s=new zt;i.add(s);const r=o?_d:Lt(12371401,.78,.29),a=Lt(t,.45,.27),l=[],c=e===0||n;if(n&&(s.rotation.y=Math.PI),o&&c){re(s,4.1,3.5,12.7,0,2.55,2.9,r,.5);const h=[[-15.2,.03,1.1,.03],[-14.5,.45,1.35,.25],[-13,1.1,1.7,.7],[-10.8,1.65,2.15,1.1],[-8.1,1.95,2.48,1.58],[-3.45,2.05,2.55,1.75]],f=[],m=[],v=[],g=48;for(let E=0;E<h.length;E++){const[P,b,M,L]=h[E];for(let A=0;A<=g;A++){const D=A/g*Math.PI*2;f.push(Math.cos(D)*b,M+Math.sin(D)*L,P),m.push(A/g,E/(h.length-1))}if(E)for(let A=0;A<g;A++){const D=(E-1)*(g+1)+A,z=E*(g+1)+A;v.push(D,D+1,z,z,D+1,z+1)}}const p=new ye;p.setAttribute("position",new Ht(f,3)),p.setAttribute("uv",new Ht(m,2)),p.setIndex(v),p.computeVertexNormals();const x=new Kt(p,r);x.castShadow=!0,s.add(x);const y=[],_=[],S=[];for(let E=0;E<=16;E++)for(let P=0;P<=16;P++){const b=-10+E/16*3;let M=h.at(-1);for(let A=1;A<h.length;A++)if(b<=h[A][0]){const D=h[A-1],z=h[A],N=(b-D[0])/(z[0]-D[0]);M=D.map((F,G)=>F+(z[G]-F)*N);break}const L=(P/16-.5)*1.5;if(y.push(L*M[1],M[2]+Math.sqrt(1-L*L)*M[3]+.035,b),_.push(P/16,E/16),E&&P){const A=E*17+P,D=A-17;S.push(D-1,A-1,D,D,A-1,A)}}const w=new ye;w.setAttribute("position",new Ht(y,3)),w.setAttribute("uv",new Ht(_,2)),w.setIndex(S),w.computeVertexNormals(),s.add(new Kt(w,ai));for(const E of[-1,1])re(s,.6,.1,.18,E*1.07,1.77,-12.7,Zl,.04)}else if(re(s,4.1,3.5,19,0,2.55,0,r,.45),c){re(s,3.65,2.05,.13,0,2.96,-9.5,On,.2),re(s,3.2,1.2,.08,0,3.07,-9.59,ai,.12),bi(s,e===0?"各駅停車　中央":"のりものライン",2.4,.32,0,4,-9.64,"#f6df6d","#102523");for(const h of[-1,1])re(s,.45,.16,.14,h*1.4,1.47,-9.62,n?Lt(13182761):Zl,.04),ue(s,new R(h*.2,2.55,-9.68),new R(h*1.2,3,-9.68),.023,1515302);re(s,3.5,.34,.28,0,.86,-9.53,On,.1)}for(const h of[-1,1]){re(s,.025,.25,o&&c?12.5:18.8,h*2.058,1.93,o&&c?2.9:0,a,.005);const f=o&&c?-2.4:-7.8,m=8;for(let v=f;v<=m;v+=1.5)!o&&Math.abs(v)<1.2||re(s,.055,.91,1.02,h*2.057,3.02,v,ai,.16);for(const v of o?[6.9]:[-6.1,0,6.1])for(const g of[-1,1]){const p=new zt;p.position.set(h*2.08,0,v+g*.43),s.add(p),re(p,.05,2.42,.81,0,2.35,0,r,.025),re(p,.065,1.06,.56,0,2.97,0,ai,.06),re(p,.07,.035,.15,0,1.88,-g*.22,On,.009),l.push({group:p,base:v+g*.43,side:g})}}re(s,3.5,.45,16,0,.74,0,On,.13);for(const h of[-3,0,3])re(s,2.6,.52,1.8,0,.53,h,Ai,.07);for(const h of[-6.6,6.6]){re(s,3.35,.36,3.1,0,.63,h,On,.09);for(const f of[-.95,.95]){ue(s,new R(-1.55,.38,h+f),new R(1.55,.38,h+f),.14,5859696);for(const m of[-1,1]){const v=ie(s,.53,.53,.28,m*1.47,.4,h+f,0,32,On);v.rotation.z=Math.PI/2;const g=ie(s,.36,.36,.035,m*1.63,.4,h+f,0,24,Ai);g.rotation.z=Math.PI/2}}for(const f of[-1,1])for(const m of[-.8,.8])for(let v=0;v<4;v++){const g=new Kt(new qn(.14,.035,6,16),Ai);g.rotation.x=Math.PI/2,g.position.set(f*1.65,.76+v*.07,h+m),s.add(g)}}for(const h of[-4,4]){re(s,2.35,.32,2.4,0,4.39,h,xd,.14);for(let f=0;f<10;f++)X(s,2.15,.022,.045,0,4.56,h-1+f*.21,0,On)}if(e===1){for(const h of[-1,1])ue(s,new R(h*.8,4.55,0),new R(0,5.55,0),.05,4937821),ue(s,new R(0,5.55,0),new R(h*.8,6.4,0),.05,4937821);re(s,2.2,.08,.32,0,6.43,0,On,.025)}for(const h of[-9.6,9.6])c&&h<0||(re(s,1.6,2.55,.2,0,2.35,h,On,.13),re(s,.3,.23,.9,0,.73,h,Ai,.03));const d=new Map;for(const h of l){h.instances=[],h.group.updateMatrix();for(const f of[...h.group.children]){f.updateMatrix();const m=f.material.uuid+JSON.stringify(f.geometry.parameters);d.has(m)||d.set(m,[]),d.get(m).push({d:h,part:f,local:f.matrix.clone()})}}for(const h of d.values()){const f=h[0].part,m=new Hs(f.geometry,f.material,h.length);m.castShadow=!0,m.receiveShadow=!0,m.boundingSphere=new Xs(new R(0,2,0),20),s.add(m),h.forEach(({d:v,part:g,local:p},x)=>{m.setMatrixAt(x,new oe().multiplyMatrices(v.group.matrix,p)),v.instances.push({mesh:m,index:x,local:p,matrix:new oe}),g.removeFromParent()}),m.instanceMatrix.needsUpdate=!0}for(const h of l)h.group.removeFromParent();$l(s);const u=new zt;u.rotation.y=n?Math.PI:0,re(u,4.1,3.5,19,0,2.55,0,r,.3);for(const h of[-1,1])X(u,.03,.9,17,h*2.065,3,0,0,ai),X(u,.03,.25,18.8,h*2.07,1.93,0,0,a);if(o&&c){const h=new Kt(new Do(1.95,10,12),r);h.rotation.x=-Math.PI/2,h.position.set(0,2.1,-10),u.add(h)}return $l(u),i.addLevel(s,0),i.addLevel(u,240),i.userData={doors:l,fast:o,carLength:19},i}function R_(o,t,e,n,i){if(Or)return A_(o,t,e,n);const s=new zt;o.add(s);const r=t.fast?132:80,a=e*t.length-r+14,l=e*t.length+14;function c(x,y,_){const S=(x+t.length)%t.length,w=t.curve.getPointAt(S/t.length),E=t.curve.getTangentAt(S/t.length),P=new zt;return P.position.set(w.x+E.z*y,w.y+_,w.z-E.x*y),P.rotation.y=Math.atan2(E.x,E.z),s.add(P),P}function d(x,y,_,S){const w=[],E=[],P=[],b=Math.ceil(r/2);for(let A=0;A<=b;A++){const D=a+(l-a)*A/b,z=t.curve.getPointAt((D+t.length)%t.length/t.length),N=t.curve.getTangentAt((D+t.length)%t.length/t.length);for(const F of[-1,1]){const G=x+F*y/2;w.push(z.x+N.z*G,z.y+_,z.z-N.x*G),E.push(F>0?1:0,A)}if(A){const F=A*2;P.push(F-2,F,F-1,F-1,F,F+1)}}const M=new ye;M.setAttribute("position",new Ht(w,3)),M.setAttribute("uv",new Ht(E,2)),M.setIndex(P),M.computeVertexNormals();const L=new Kt(M,S);L.receiveShadow=!0,s.add(L)}for(const x of[-1,1]){d(x*7.2,8,1.3,Lt(12171692)),d(x*3.6,.48,1.315,Lt(15318851)),d(x*3.3,.15,1.32,_d),d(x*7.3,9.1,6.8,new Ee({color:7835545,metalness:.4,roughness:.4,side:Xe}));for(let y=a+3;y<l;y+=7){const _=c(y,x*7.3,0);re(_,.22,5.4,.22,x*2.5,4,0,Ai,.025),X(_,8.9,.24,.24,0,6.6,0,0,Ai),ue(_,new R(x*2.5,5.15,0),new R(-x*1.5,6.55,0),.065,9412002),re(_,5.1,.06,.17,0,6.5,0,Zl,.01);for(let S=0;S<7;S++)X(_,7.5,.015,.025,0,1.31,S-3,9607830)}for(let y=a+12;y<l-12;y+=24){const _=c(y,x*8.2,0);re(_,1.5,.18,4,0,2.05,0,Lt(5470599),.1),re(_,.2,.8,4,x*.7,2.4,0,Lt(5470599),.08);for(const S of[-1.5,1.5])X(_,1,.75,.12,0,1.68,S,0,Ai);bi(_,n+"　→",5,.85,0,5,0)}}const u=(a+l)/2,h=c(u,18,0);re(h,15,5.2,25,0,1.3+2.6,0,Lt(13226962),.25),re(h,16,.3,27,0,6.65,0,Lt(6323337),.1);for(const x of[-1,1])for(const y of[-10,-6,6,10]){re(h,.05,3,3.1,x*7.55,3.1,y,ai,.08);for(const _ of[1.6,4.6])X(h,.08,.08,3.2,x*7.59,_,y,0,Ai)}re(h,5.5,3.4,.08,0,3.05,-12.55,ai,.08),bi(h,n,11,1.5,0,5.4,-12.72,"#ffffff","#1b5265"),bi(h,"きっぷ ・ 改札　ENTRANCE",6,.65,0,4.45,-12.74);for(const x of[-3,0,3])re(h,.7,1.3,2.2,x,1.95,-15,Lt(7906983,.5,.35),.13),re(h,.8,.05,.48,x,2.63,-15.4,On,.02),bi(h,"IC",.45,.2,x,2.55,-16.12,"#8dffe1");for(const x of[-5.4,5.4])re(h,1.8,2.3,.85,x,2.45,-13.4,Lt(x<0?4162459:11483954),.12),bi(h,x<0?"きっぷ":"DRINK",1.55,.4,x,3.25,-13.85),re(h,1.2,.9,.05,x,2.55,-13.85,ai,.04);const m=c(u,8,0);bi(m,i+1+"　"+(t.fast?"新幹線":"のりもの線")+"　まもなく到着",8,.9,0,5.5,2,"#b3f196","#102924");const v=c(u,28,0),g=t.fast?23.3:2.3,p=t.fast?40:5;for(let x=0;x<p;x++){const y=-t.curve.getPointAt(e).y+2+(x+1)*g/p;X(v,5,g/p,.65,0,y-g/p/2,15-x*.65,12042432)}for(const x of[-1,1])ue(v,new R(x*2.6,-t.curve.getPointAt(e).y+3.2,15),new R(x*2.6,2.8,15-p*.65),.055,9017758);return re(v,3.8,t.fast?24:6,3.8,5,t.fast?-10:2,0,ai,.15),re(v,4.2,.25,4.2,5,t.fast?2:5.2,0,xd,.05),bi(v,"EV",1,.55,5,2,-1.94,"#ffffff","#225779"),s.name="station-"+n,s.updateMatrixWorld(!0),s.userData={name:n,platformLength:r,hasGates:!0,hasAccess:!0,photoPosition:h.localToWorld(new R(27,14,-35)),photoTarget:h.localToWorld(new R(0,2,-5))},$l(s),s}class P_{constructor(t){this.game=t,this.trains=[],this.crossings=[],this.routes=[],this.stations=[],this.createRoute(!1),this.createRoute(!0);for(const e of this.stations){const n=new Di().setFromObject(e);for(const i of t.world.vegetation||[]){const s=new oe,r=new R;for(let a=0;a<i.count;a++)i.getMatrixAt(a,s),r.setFromMatrixPosition(s),r.x>n.min.x-3&&r.x<n.max.x+3&&r.z>n.min.z-3&&r.z<n.max.z+3&&(s.makeScale(0,0,0),i.setMatrixAt(a,s));i.instanceMatrix.needsUpdate=!0}}}createRoute(t){const e=this.game.scene,n=t?22:3,i=t?[[-210,n,-290],[-720,n,-620],[-130,n,-890],[530,n,-855],[810,n,-240],[810,n,590],[430,n,800],[-550,n,790],[-900,n,140],[-610,n,-240]]:[[-150,n,-260],[-620,n,-580],[-750,n,-720],[80,n,-820],[750,n,-430],[900,n,0],[730,n,660],[-500,n,710],[-800,n,200],[-650,n,-180]],s=new Ao(i.map(h=>new R(...h)),!0,"catmullrom",.18),r=s.getLength(),a={curve:s,length:r,fast:t,stations:[],trains:[]};this.routes.push(a);for(let h=0;h<350;h++){const f=s.getPointAt(h/350),m=s.getPointAt((h+1)/350),v=f.clone().add(m).multiplyScalar(.5),g=m.clone().sub(f),p=Math.atan2(g.x,g.z),x=X(e,t?9:8,.6,g.length()+.5,v.x,n-.7,v.z,t?11121583:8288620);x.rotation.y=p,t&&h%7===0&&this.game.world.solid(v.x,11,v.z,2.1,22,2.1,10267303);for(const y of[-1,1]){const _=X(e,.18,.2,g.length()+.3,v.x+Math.cos(p)*y*1.47,n-.25,v.z-Math.sin(p)*y*1.47,12502724);_.rotation.y=p}if(!t&&h%2===0){const y=X(e,3.8,.14,.7,v.x,n-.45,v.z,5132620);y.rotation.y=p}if(Math.abs(v.z-300)<55)for(const y of[-1,1]){const _=X(e,.4,8,g.length(),v.x+Math.cos(p)*y*5,n+3,v.z-Math.sin(p)*y*5,t?13670752:8559771);_.rotation.y=p}}const l=[];for(let h=0;h<=600;h++){const f=s.getPointAt(h/600);f.y+=6.5,l.push(f)}const c=new Kt(new qr(new Ao(l),600,.025,4,!1),Lt(4410708,.7,.5));e.add(c);for(let h=0;h<40;h++){const f=s.getPointAt(h/40),m=s.getTangentAt(h/40),v=f.x+m.z*5,g=f.z-m.x*5;ue(e,new R(v,f.y-1,g),new R(v,f.y+7.8,g),.1,8229017),ue(e,new R(v,f.y+7.5,g),new R(f.x,f.y+6.65,f.z),.06,8229017)}const d=t?["中央新幹線駅","ふじのやま駅","レースパーク駅","さくら新幹線駅"]:["中央駅","そらのみなと駅","ふじのふもと駅","レース駅","さくらのさと駅","みなと駅"];for(let h=0;h<d.length;h++){let f=h/d.length,m=-2;const v=t?132:80;for(const p of[.025,.045,.065,-.025,-.045,0]){const x=(h/d.length+p+1)%1,y=s.getTangentAt((x-v/r+1)%1),_=s.getTangentAt(x),S=s.getTangentAt((x-v/r/2+1)%1),w=Math.min(y.dot(_),y.dot(S),S.dot(_));w>m&&(m=w,f=x)}s.getPointAt(f);const g=s.getTangentAt(f);Math.atan2(g.x,g.z),a.stations.push(f*r),this.stations.push(R_(e,a,f,d[h],h))}const u=t?[3253386,13055305,4684467,2392774]:[4368014,12950872];for(let h=0;h<u.length;h++){const f={route:a,distance:h/u.length*r+60,speed:0,wait:0,meshes:[],color:u[h],fast:t};for(let m=0;m<(t?5:3);m++){const v=C_(t,u[h],m,m===(t?4:2));e.add(v),f.meshes.push(v)}this.trains.push(f),a.trains.push(f)}if(!t)for(let h=0;h<6;h++){const f=(h+.35)/6,m=s.getPointAt(f);this.game.world.road([m.x-35,m.z],[m.x+35,m.z],20,3,!0);const v=new zt;v.position.set(m.x+7,4,m.z+9),e.add(v),X(v,1,6,1,0,0,0,15251264);const g=new zt;g.position.y=2,v.add(g),X(g,16,.5,.5,-8,0,0,15518019);for(let x=0;x<8;x++)X(g,.6,.52,.52,-1-x*2,0,0,3159610);const p=on(v,.7,0,4,0,15153462);this.crossings.push({distance:f*r,route:a,arm:g,light:p,closed:!1,x:m.x,z:m.z})}if(t){this.game.world.road([835,-250],[835,550],28,2.12);for(let h=0;h<5;h++){const f=s.getPointAt(.08+h*.19);X(e,28,.15,28,f.x+30,2.2,f.z,7702397),we(e,"🚄 みえるよ",f.x+30,8,f.z,"#ffe59c",22)}for(let h=0;h<9;h++){const f=.31+h*.002,m=s.getPointAt(f),v=s.getTangentAt(f),g=Math.atan2(v.x,v.z);this.game.world.solid(m.x,m.y+10,m.z,17,3,18,8690325,g);for(const p of[-1,1])this.game.world.solid(m.x+Math.cos(g)*p*7.5,m.y+4,m.z-Math.sin(g)*p*7.5,2,10,18,8690325,g)}}}update(t){for(const e of this.trains){const n=e.route;let i=1/0;for(const a of n.stations)i=Math.min(i,(a-e.distance+n.length)%n.length);let s=1/0;for(const a of n.trains)a!==e&&(s=Math.min(s,(a.distance-e.distance+n.length)%n.length));let r=Math.min(n.fast?62:21,Math.sqrt(Math.max(0,i-2)*10));s<130&&(r=0),e.wait>0?(e.wait-=t,r=0,e.wait<=0&&(e.distance=(e.distance+5)%n.length)):i<3&&e.speed<4&&(e.wait=4,r=0),e.speed+=yn.clamp(r-e.speed,-12*t,8*t),e.distance=(e.distance+e.speed*t)%n.length;for(let a=0;a<e.meshes.length;a++){const l=(e.distance-a*(n.fast?21:20.5)+n.length)%n.length,c=l/n.length,d=n.curve.getPointAt(c),u=n.curve.getTangentAt(c);e.meshes[a].position.copy(d),e.meshes[a].rotation.y=Math.atan2(-u.x,-u.z);for(const h of e.meshes[a].userData.doors||[]){h.group.position.z=yn.lerp(h.group.position.z,h.base+(e.wait>0?h.side*.7:0),1-Math.exp(-t*5)),h.group.updateMatrix();for(const f of h.instances||[])f.matrix.multiplyMatrices(h.group.matrix,f.local),f.mesh.setMatrixAt(f.index,f.matrix),f.mesh.instanceMatrix.needsUpdate=!0}}if(!n.fast){const a=this.game.active.body.position;for(const l of e.meshes)l.position.distanceTo(new R(a.x,a.y,a.z))<8&&this.game.active.hitCooldown<=0&&(this.game.active.damage(20),this.game.active.hitCooldown=1,this.game.active.body.velocity.set(15,12,8),this.game.toast("ぽーん！ だいじょうぶ"))}}for(const e of this.crossings)e.closed=e.route.trains.some(n=>{const i=(e.distance-n.distance+e.route.length)%e.route.length;return i<140||i>e.route.length-60}),e.arm.rotation.z=yn.lerp(e.arm.rotation.z,e.closed?0:-Math.PI/2,t*2),e.light.material=Lt(e.closed&&Math.sin(this.game.time*9)>0?16721703:7814458),e.closed&&Math.hypot(this.game.active.body.position.x-e.x,this.game.active.body.position.z-e.z)<90&&Math.floor(this.game.time*2)!==e.beat&&(e.beat=Math.floor(this.game.time*2),this.game.audio.effect("crossing"))}}class Pn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new C);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new C);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Pn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],d=n[4],u=n[5],h=n[6],f=n[7],m=n[8],v=i[0],g=i[1],p=i[2],x=i[3],y=i[4],_=i[5],S=i[6],w=i[7],E=i[8];return s[0]=r*v+a*x+l*S,s[1]=r*g+a*y+l*w,s[2]=r*p+a*_+l*E,s[3]=c*v+d*x+u*S,s[4]=c*g+d*y+u*w,s[5]=c*p+d*_+u*E,s[6]=h*v+f*x+m*S,s[7]=h*g+f*y+m*w,s[8]=h*p+f*_+m*E,e}scale(t,e){e===void 0&&(e=new Pn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new C);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let l=3;const c=l;let d;const u=4;let h;do{if(r=c-l,s[r+i*r]===0){for(a=r+1;a<c;a++)if(s[r+i*a]!==0){d=u;do h=u-d,s[h+i*r]+=s[h+i*a];while(--d);break}}if(s[r+i*r]!==0)for(a=r+1;a<c;a++){const f=s[r+i*a]/s[r+i*r];d=u;do h=u-d,s[h+i*a]=h<=r?0:s[h+i*a]-s[h+i*r]*f;while(--d)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Pn);const e=3,n=6,i=I_;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const d=n;let u;do{if(s=l-a,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=d;do u=d-c,i[u+n*s]+=i[u+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const h=i[s+n*r]/i[s+n*s];c=d;do u=d-c,i[u+n*r]=u<=s?0:i[u+n*r]-i[u+n*s]*h;while(--c)}}while(--a);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];c=n;do u=n-c,i[u+n*r]=i[u+n*r]-i[u+n*s]*h;while(--c)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*h;while(--c)}while(s--);s=2;do{r=2;do{if(u=i[e+r+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,u)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,a=n+n,l=i+i,c=e*r,d=e*a,u=e*l,h=n*a,f=n*l,m=i*l,v=s*r,g=s*a,p=s*l,x=this.elements;return x[0]=1-(h+m),x[1]=d-p,x[2]=u+g,x[3]=d+p,x[4]=1-(c+m),x[5]=f-v,x[6]=u-g,x[7]=f+v,x[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new Pn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const I_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-r*s,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Pn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new C);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new C);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new C),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new C),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=D_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=L_;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Zh),Zh.almostEquals(t,e)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const D_=new C,L_=new C,Zh=new C;class dn{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,$h),c=$h),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new dn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,a,l){const c=this.lowerBound,d=this.upperBound;t.copy(c),e.set(d.x,c.y,c.z),n.set(d.x,d.y,c.z),i.set(c.x,d.y,d.z),s.set(d.x,c.y,d.z),r.set(c.x,d.y,c.z),a.set(c.x,c.y,d.z),l.copy(d)}toLocalFrame(t,e){const n=Kh,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7];this.getCorners(i,s,r,a,l,c,d,u);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Kh,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7];this.getCorners(i,s,r,a,l,c,d,u);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,d=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,d)),Math.min(u,h)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,d)),Math.max(u,h));return!(m<0||f>m)}}const $h=new C,Kh=[new C,new C,new C,new C,new C,new C,new C,new C];class Jh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class yd{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Ne{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=N_,i=U_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ne);const n=this.x,i=this.y,s=this.z,r=this.w,a=t.x,l=t.y,c=t.z,d=t.w;return e.x=n*d+r*a+i*c-s*l,e.y=i*d+r*l+s*a-n*c,e.z=s*d+r*c+n*l-i*a,e.w=r*d-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new Ne);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new Ne),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z,c=this.w,d=c*n+a*s-l*i,u=c*i+l*n-r*s,h=c*s+r*i-a*n,f=-r*n-a*i-l*s;return e.x=d*c+f*-r+u*-l-h*-a,e.y=u*c+f*-a+h*-r-d*-l,e.z=h*c+f*-l+d*-a-u*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const d=r*a+l*c;if(d>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),d<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const u=r*r,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*h-2*f),i=Math.asin(2*d),s=Math.atan2(2*r*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),d=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*d,this.y=s*c*a-l*r*d,this.z=s*r*d+l*c*a,this.w=s*r*a-l*c*d):i==="YXZ"?(this.x=l*r*a+s*c*d,this.y=s*c*a-l*r*d,this.z=s*r*d-l*c*a,this.w=s*r*a+l*c*d):i==="ZXY"?(this.x=l*r*a-s*c*d,this.y=s*c*a+l*r*d,this.z=s*r*d+l*c*a,this.w=s*r*a-l*c*d):i==="ZYX"?(this.x=l*r*a-s*c*d,this.y=s*c*a+l*r*d,this.z=s*r*d-l*c*a,this.w=s*r*a+l*c*d):i==="YZX"?(this.x=l*r*a+s*c*d,this.y=s*c*a+l*r*d,this.z=s*r*d-l*c*a,this.w=s*r*a-l*c*d):i==="XZY"&&(this.x=l*r*a-s*c*d,this.y=s*c*a-l*r*d,this.z=s*r*d+l*c*a,this.w=s*r*a+l*c*d),this}clone(){return new Ne(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ne);const i=this.x,s=this.y,r=this.z,a=this.w;let l=t.x,c=t.y,d=t.z,u=t.w,h,f,m,v,g;return f=i*l+s*c+r*d+a*u,f<0&&(f=-f,l=-l,c=-c,d=-d,u=-u),1-f>1e-6?(h=Math.acos(f),m=Math.sin(h),v=Math.sin((1-e)*h)/m,g=Math.sin(e*h)/m):(v=1-e,g=e),n.x=v*i+g*l,n.y=v*s+g*c,n.z=v*r+g*d,n.w=v*a+g*u,n}integrate(t,e,n,i){i===void 0&&(i=new Ne);const s=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,d=this.z,u=this.w,h=e*.5;return i.x+=h*(s*u+r*d-a*c),i.y+=h*(r*u+a*l-s*d),i.z+=h*(a*u+s*c-r*l),i.w+=h*(-s*l-r*c-a*d),i}}const N_=new C,U_=new C,F_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Pt{constructor(t){t===void 0&&(t={}),this.id=Pt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Pt.idCounter=0;Pt.types=F_;class he{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new Ne,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return he.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return he.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),n.vsub(t,i),e.conjugate(Qh),Qh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new C),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new C),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Qh=new Ne;class _o extends Pt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:Pt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new C;for(let s=0;s!==t.length;s++){const r=t[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[r[l]].vsub(e[r[c]],i),i.normalize();let d=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){d=!0;break}d||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new C;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];_o.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new C,r=new C;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,a,l,c){const d=new C;let u=-1,h=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){d.copy(n.faceNormals[m]),s.vmult(d,d);const v=d.dot(r);v>h&&(h=v,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const v=n.vertices[n.faces[u][m]],g=new C;g.copy(v),s.vmult(g,g),i.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,r,a,l){const c=new C,d=new C,u=new C,h=new C,f=new C,m=new C;let v=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const x=g.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,r.copy(c))}else{const p=a?a.length:g.faces.length;for(let x=0;x<p;x++){const y=a?a[x]:x;c.copy(g.faceNormals[y]),n.vmult(c,c);const _=g.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],d);const x=g.testSepAxis(d,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,r.copy(d))}else{const p=l?l.length:t.faces.length;for(let x=0;x<p;x++){const y=l?l[x]:x;d.copy(t.faceNormals[y]),s.vmult(d,d);const _=g.testSepAxis(d,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(d))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],f),h.cross(f,m),!m.almostZero()){m.normalize();const y=g.testSepAxis(m,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,r.copy(m))}}return i.vsub(e,u),u.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const a=this;_o.project(a,t,n,i,Ga),_o.project(e,t,s,r,Wa);const l=Ga[0],c=Ga[1],d=Wa[0],u=Wa[1];if(l<u||d<c)return!1;const h=l-u,f=d-c;return h<f?h:f}calculateLocalInertia(t,e){const n=new C,i=new C;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,a){const l=new C,c=new C,d=new C,u=new C,h=new C,f=new C,m=new C,v=new C,g=this,p=[],x=i,y=p;let _=-1,S=Number.MAX_VALUE;for(let M=0;M<g.faces.length;M++){l.copy(g.faceNormals[M]),n.vmult(l,l);const L=l.dot(t);L<S&&(S=L,_=M)}if(_<0)return;const w=g.faces[_];w.connectedFaces=[];for(let M=0;M<g.faces.length;M++)for(let L=0;L<g.faces[M].length;L++)w.indexOf(g.faces[M][L])!==-1&&M!==_&&w.connectedFaces.indexOf(M)===-1&&w.connectedFaces.push(M);const E=w.length;for(let M=0;M<E;M++){const L=g.vertices[w[M]],A=g.vertices[w[(M+1)%E]];L.vsub(A,c),d.copy(c),n.vmult(d,d),e.vadd(d,d),u.copy(this.faceNormals[_]),n.vmult(u,u),e.vadd(u,u),d.cross(u,h),h.negate(h),f.copy(L),n.vmult(f,f),e.vadd(f,f);const D=w.connectedFaces[M];m.copy(this.faceNormals[D]);const z=this.getPlaneConstantOfFace(D);v.copy(m),n.vmult(v,v);const N=z-v.dot(e);for(this.clipFaceAgainstPlane(x,y,v,N);x.length;)x.shift();for(;y.length;)x.push(y.shift())}m.copy(this.faceNormals[_]);const P=this.getPlaneConstantOfFace(_);v.copy(m),n.vmult(v,v);const b=P-v.dot(e);for(let M=0;M<x.length;M++){let L=v.dot(x[M])+b;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=r){const A=x[M];if(L<=1e-6){const D={point:A,normal:v,depth:L};a.push(D)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let d=0;d<a;d++){if(c=t[d],r=n.dot(c)+i,s<0)if(r<0){const u=new C;u.copy(c),e.push(u)}else{const u=new C;l.lerp(c,s/(s-r),u),e.push(u)}else if(r<0){const u=new C;l.lerp(c,s/(s-r),u),e.push(u),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new C);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,a,l,c,d,u,h=new C;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const m=h;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(d===void 0||m.y>d)&&(d=m.y),(l===void 0||m.z<l)&&(l=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(r,a,l),i.set(c,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new C;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=e[n[r][0]],c=new C;t.vsub(l,c);const d=a.dot(c),u=new C;s.vsub(l,u);const h=a.dot(u);if(d<0&&h>0||d>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,a=z_;let l=0,c=0;const d=O_,u=t.vertices;d.setZero(),he.vectorToLocalFrame(n,i,e,a),he.pointToLocalFrame(n,i,d,d);const h=d.dot(a);c=l=u[0].dot(a);for(let f=1;f<r;f++){const m=u[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Ga=[],Wa=[];new C;const z_=new C,O_=new C;class $r extends Pt{constructor(t){super({type:Pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=C,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new _o({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new C),$r.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Mi.set(s[r][0],s[r][1],s[r][2]),e.vmult(Mi,Mi),t.vadd(Mi,Mi),n(Mi.x,Mi.y,Mi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Un[0].set(s.x,s.y,s.z),Un[1].set(-s.x,s.y,s.z),Un[2].set(-s.x,-s.y,s.z),Un[3].set(-s.x,-s.y,-s.z),Un[4].set(s.x,-s.y,-s.z),Un[5].set(s.x,s.y,-s.z),Un[6].set(-s.x,s.y,-s.z),Un[7].set(s.x,-s.y,s.z);const r=Un[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=Un[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,d=l.y,u=l.z;c>i.x&&(i.x=c),d>i.y&&(i.y=d),u>i.z&&(i.z=u),c<n.x&&(n.x=c),d<n.y&&(n.y=d),u<n.z&&(n.z=u)}}}const Mi=new C,Un=[new C,new C,new C,new C,new C,new C,new C,new C],wc={DYNAMIC:1,STATIC:2,KINEMATIC:4},bc={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ct extends yd{constructor(t){t===void 0&&(t={}),super(),this.id=Ct.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ct.STATIC:Ct.DYNAMIC,typeof t.type==typeof Ct.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ct.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new Ne,this.initQuaternion=new Ne,this.previousQuaternion=new Ne,this.interpolatedQuaternion=new Ne,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Pn,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Pn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ct.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ct.SLEEPING&&this.dispatchEvent(Ct.wakeupEvent)}sleep(){this.sleepState=Ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Ct.AWAKE&&n<i?(this.sleepState=Ct.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ct.sleepyEvent)):e===Ct.SLEEPY&&n>i?this.wakeUp():e===Ct.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ct.SLEEPING||this.type===Ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new C),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new C),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new C,s=new Ne;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const a=e[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=B_,r=k_,a=this.quaternion,l=this.aabb,c=V_;for(let d=0;d!==i;d++){const u=t[d];a.vmult(e[d],s),s.vadd(this.position,s),a.mult(n[d],r),u.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),d===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=H_,i=G_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const n=W_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;const n=X_,i=q_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Ct.DYNAMIC&&(this.sleepState===Ct.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const n=e,i=j_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Y_;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new C),this.type!==Ct.DYNAMIC)return;const n=Z_,i=$_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=K_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),$r.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new C;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ct.DYNAMIC||this.type===Ct.KINEMATIC)||this.sleepState===Ct.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,d=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,f=d*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const m=u.elements,v=this.angularFactor,g=l.x*v.x,p=l.y*v.y,x=l.z*v.z;s.x+=t*(m[0]*g+m[1]*p+m[2]*x),s.y+=t*(m[3]*g+m[4]*p+m[5]*x),s.z+=t*(m[6]*g+m[7]*p+m[8]*x),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ct.idCounter=0;Ct.COLLIDE_EVENT_NAME="collide";Ct.DYNAMIC=wc.DYNAMIC;Ct.STATIC=wc.STATIC;Ct.KINEMATIC=wc.KINEMATIC;Ct.AWAKE=bc.AWAKE;Ct.SLEEPY=bc.SLEEPY;Ct.SLEEPING=bc.SLEEPING;Ct.wakeupEvent={type:"wakeup"};Ct.sleepyEvent={type:"sleepy"};Ct.sleepEvent={type:"sleep"};const B_=new C,k_=new Ne,V_=new dn,H_=new Pn,G_=new Pn;new Pn;const W_=new C,X_=new C,q_=new C,j_=new C,Y_=new C,Z_=new C,$_=new C,K_=new C;class Md{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ct.STATIC)!==0||t.sleepState===Ct.SLEEPING)&&((e.type&Ct.STATIC)!==0||e.sleepState===Ct.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=J_;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Q_,i=t1,s=e1,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,d=l<c?`${l},${c}`:`${c},${l}`;n[d]=a,n.keys.push(d)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new C;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const J_=new C;new C;new Ne;new C;const Q_={keys:[]},t1=[],e1=[];new C;new C;new C;class n1 extends Md{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Ki{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let wd,bd,Sd,Ed,Td,Ad,Cd;const Sc={CLOSEST:1,ANY:2,ALL:4};wd=Pt.types.SPHERE;bd=Pt.types.PLANE;Sd=Pt.types.BOX;Ed=Pt.types.CYLINDER;Td=Pt.types.CONVEXPOLYHEDRON;Ad=Pt.types.HEIGHTFIELD;Cd=Pt.types.TRIMESH;class Le{get[wd](){return this._intersectSphere}get[bd](){return this._intersectPlane}get[Sd](){return this._intersectBox}get[Ed](){return this._intersectConvex}get[Td](){return this._intersectConvex}get[Ad](){return this._intersectHeightfield}get[Cd](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new C),e===void 0&&(e=new C),this.from=t.clone(),this.to=e.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Le.ANY,this.result=new Ki,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Le.ANY,this.result=e.result||new Ki,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(tu),Xa.length=0,t.broadphase.aabbQuery(t,tu,Xa),this.intersectBodies(Xa),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=i1,s=s1;for(let r=0,a=t.shapes.length;r<a;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(x1(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new C(0,0,1);e.vmult(c,c);const d=new C;r.vsub(n,d);const u=d.dot(c);a.vsub(n,d);const h=d.dot(c);if(u*h>0||r.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new C,v=new C,g=new C;r.vsub(n,m);const p=-c.dot(m)/f;l.scale(p,v),r.vadd(v,g),this.reportIntersection(c,g,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=o1;r.from.copy(this.from),r.to.copy(this.to),he.pointToLocalFrame(n,e,r.from,r.from),he.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=r1;let l,c,d,u;l=c=0,d=u=t.data.length-1;const h=new dn;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),d=Math.min(d,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<d;f++)for(let m=c;m<u;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(f,m,!1),he.pointToWorldFrame(n,e,t.pillarOffset,vr),this._intersectConvex(t.pillarConvex,e,vr,i,s,eu),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),he.pointToWorldFrame(n,e,t.pillarOffset,vr),this._intersectConvex(t.pillarConvex,e,vr,i,s,eu)}}}_intersectSphere(t,e,n,i,s){const r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,d=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),u=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,h=d**2-4*c*u,f=a1,m=l1;if(!(h<0))if(h===0)r.lerp(a,h,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const v=(-d-Math.sqrt(h))/(2*c),g=(-d+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(r.lerp(a,v,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const a=c1,l=nu,c=r&&r.faceList||null,d=t.faces,u=t.vertices,h=t.faceNormals,f=this.direction,m=this.from,v=this.to,g=m.distanceTo(v),p=c?c.length:d.length,x=this.result;for(let y=0;!x.shouldStop&&y<p;y++){const _=c?c[y]:y,S=d[_],w=h[_],E=e,P=n;l.copy(u[S[0]]),E.vmult(l,l),l.vadd(P,l),l.vsub(m,l),E.vmult(w,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const M=a.dot(l)/b;if(!(M<0)){f.scale(M,sn),sn.vadd(m,sn),Tn.copy(u[S[0]]),E.vmult(Tn,Tn),P.vadd(Tn,Tn);for(let L=1;!x.shouldStop&&L<S.length-1;L++){Fn.copy(u[S[L]]),zn.copy(u[S[L+1]]),E.vmult(Fn,Fn),E.vmult(zn,zn),P.vadd(Fn,Fn),P.vadd(zn,zn);const A=sn.distanceTo(m);!(Le.pointInTriangle(sn,Tn,Fn,zn)||Le.pointInTriangle(sn,Fn,Tn,zn))||A>g||this.reportIntersection(a,sn,s,i,_)}}}}_intersectTrimesh(t,e,n,i,s,r){const a=h1,l=g1,c=v1,d=nu,u=u1,h=d1,f=f1,m=m1,v=p1,g=t.indices;t.vertices;const p=this.from,x=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),he.vectorToLocalFrame(n,e,y,u),he.pointToLocalFrame(n,e,p,h),he.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,u),u.normalize();const _=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let S=0,w=l.length;!this.result.shouldStop&&S!==w;S++){const E=l[S];t.getNormal(E,a),t.getVertex(g[E*3],Tn),Tn.vsub(h,d);const P=u.dot(a),b=a.dot(d)/P;if(b<0)continue;u.scale(b,sn),sn.vadd(h,sn),t.getVertex(g[E*3+1],Fn),t.getVertex(g[E*3+2],zn);const M=sn.distanceSquared(h);!(Le.pointInTriangle(sn,Fn,Tn,zn)||Le.pointInTriangle(sn,Tn,Fn,zn))||M>_||(he.vectorToWorldFrame(e,a,v),he.pointToWorldFrame(n,e,sn,m),this.reportIntersection(v,m,s,i,E))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Le.ALL:this.hasHit=!0,c.set(r,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Le.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l));break;case Le.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ji),n.vsub(e,ro),t.vsub(e,qa);const s=ji.dot(ji),r=ji.dot(ro),a=ji.dot(qa),l=ro.dot(ro),c=ro.dot(qa);let d,u;return(d=l*a-r*c)>=0&&(u=s*c-r*a)>=0&&d+u<s*l-r*r}}Le.CLOSEST=Sc.CLOSEST;Le.ANY=Sc.ANY;Le.ALL=Sc.ALL;const tu=new dn,Xa=[],ro=new C,qa=new C,i1=new C,s1=new Ne,sn=new C,Tn=new C,Fn=new C,zn=new C;new C;new Ki;const eu={faceList:[0]},vr=new C,o1=new Le,r1=[],a1=new C,l1=new C,c1=new C;new C;new C;const nu=new C,h1=new C,u1=new C,d1=new C,f1=new C,p1=new C,m1=new C;new dn;const g1=[],v1=new he,ji=new C,xr=new C;function x1(o,t,e){e.vsub(o,ji);const n=ji.dot(t);return t.scale(n,xr),xr.vadd(o,xr),e.distanceTo(xr)}class Rs extends Md{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,a=e.boundingRadius,l=i+r;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const d=i[l];if(this.needBroadphaseCollision(c,d)){if(!Rs.checkBounds(c,d,r))break;this.intersectionTest(c,d,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Rs.insertionSortX(t):e===1?Rs.insertionSortY(t):e===2&&Rs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const m=a[f],v=m.position.x;t+=v,e+=v*v;const g=m.position.y;n+=g,i+=g*g;const p=m.position.z;s+=p,r+=p*p}const d=e-t*t*c,u=i-n*n*c,h=r-s*s*c;d>u?d>h?this.axisIndex=0:this.axisIndex=2:u>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<r.length;a++){const l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class _1{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class iu{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class No{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=No.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new iu,this.jacobianElementB=new iu,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,d=i.invMassSolve;return s.scale(c,su),a.scale(d,ou),n.invInertiaWorldSolve.vmult(r,ru),i.invInertiaWorldSolve.vmult(l,au),t.multiplyVectors(su,ru)+e.multiplyVectors(ou,au)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(t.rotational,_r),c+=_r.dot(t.rotational),l.vmult(e.rotational,_r),c+=_r.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=y1;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}No.idCounter=0;const su=new C,ou=new C,ru=new C,au=new C,_r=new C,y1=new C;class M1 extends No{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=w1,c=b1,d=i.velocity,u=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=S1,v=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(r,m);const x=p.dot(m),y=this.restitution+1,_=y*h.dot(p)-y*d.dot(p)+f.dot(c)-u.dot(l),S=this.computeGiMf();return-x*e-_*n-t*S}getImpactVelocityAlongNormal(){const t=E1,e=T1,n=A1,i=C1,s=R1;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const w1=new C,b1=new C,S1=new C,E1=new C,T1=new C,A1=new C,C1=new C,R1=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class lu extends No{constructor(t,e,n){super(t,e,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=P1,r=I1,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const d=this.computeGW(),u=this.computeGiMf();return-d*e-t*u}}const P1=new C,I1=new C;class Kr{constructor(t,e,n){n=_1.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Kr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Kr.idCounter=0;class Jr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Jr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Jr.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new Le;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class D1 extends Pt{constructor(t){if(super({type:Pt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new C);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new dn;new C;new dn;new C;new C;new C;new C;new C;new C;new C;new dn;new C;new he;new dn;class L1{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class N1 extends L1{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,d=t;let u,h,f,m,v,g;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const p=F1,x=z1,y=U1;p.length=a,x.length=a,y.length=a;for(let _=0;_!==a;_++){const S=r[_];y[_]=0,x[_]=S.computeB(d),p[_]=1/S.computeC()}if(a!==0){for(let w=0;w!==c;w++){const E=l[w],P=E.vlambda,b=E.wlambda;P.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let w=0;w!==a;w++){const E=r[w];u=x[w],h=p[w],g=y[w],v=E.computeGWlambda(),f=h*(u-v-E.eps*g),g+f<E.minForce?f=E.minForce-g:g+f>E.maxForce&&(f=E.maxForce-g),y[w]+=f,m+=f>0?f:-f,E.addToWlambda(f)}if(m*m<s)break}for(let w=0;w!==c;w++){const E=l[w],P=E.velocity,b=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),P.vadd(E.vlambda,P),E.wlambda.vmul(E.angularFactor,E.wlambda),b.vadd(E.wlambda,b)}let _=r.length;const S=1/d;for(;_--;)r[_].multiplier=y[_]*S}return n}}const U1=[],F1=[],z1=[];class O1{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class B1 extends O1{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const Se={sphereSphere:Pt.types.SPHERE,spherePlane:Pt.types.SPHERE|Pt.types.PLANE,boxBox:Pt.types.BOX|Pt.types.BOX,sphereBox:Pt.types.SPHERE|Pt.types.BOX,planeBox:Pt.types.PLANE|Pt.types.BOX,convexConvex:Pt.types.CONVEXPOLYHEDRON,sphereConvex:Pt.types.SPHERE|Pt.types.CONVEXPOLYHEDRON,planeConvex:Pt.types.PLANE|Pt.types.CONVEXPOLYHEDRON,boxConvex:Pt.types.BOX|Pt.types.CONVEXPOLYHEDRON,sphereHeightfield:Pt.types.SPHERE|Pt.types.HEIGHTFIELD,boxHeightfield:Pt.types.BOX|Pt.types.HEIGHTFIELD,convexHeightfield:Pt.types.CONVEXPOLYHEDRON|Pt.types.HEIGHTFIELD,sphereParticle:Pt.types.PARTICLE|Pt.types.SPHERE,planeParticle:Pt.types.PLANE|Pt.types.PARTICLE,boxParticle:Pt.types.BOX|Pt.types.PARTICLE,convexParticle:Pt.types.PARTICLE|Pt.types.CONVEXPOLYHEDRON,cylinderCylinder:Pt.types.CYLINDER,sphereCylinder:Pt.types.SPHERE|Pt.types.CYLINDER,planeCylinder:Pt.types.PLANE|Pt.types.CYLINDER,boxCylinder:Pt.types.BOX|Pt.types.CYLINDER,convexCylinder:Pt.types.CONVEXPOLYHEDRON|Pt.types.CYLINDER,heightfieldCylinder:Pt.types.HEIGHTFIELD|Pt.types.CYLINDER,particleCylinder:Pt.types.PARTICLE|Pt.types.CYLINDER,sphereTrimesh:Pt.types.SPHERE|Pt.types.TRIMESH,planeTrimesh:Pt.types.PLANE|Pt.types.TRIMESH};class k1{get[Se.sphereSphere](){return this.sphereSphere}get[Se.spherePlane](){return this.spherePlane}get[Se.boxBox](){return this.boxBox}get[Se.sphereBox](){return this.sphereBox}get[Se.planeBox](){return this.planeBox}get[Se.convexConvex](){return this.convexConvex}get[Se.sphereConvex](){return this.sphereConvex}get[Se.planeConvex](){return this.planeConvex}get[Se.boxConvex](){return this.boxConvex}get[Se.sphereHeightfield](){return this.sphereHeightfield}get[Se.boxHeightfield](){return this.boxHeightfield}get[Se.convexHeightfield](){return this.convexHeightfield}get[Se.sphereParticle](){return this.sphereParticle}get[Se.planeParticle](){return this.planeParticle}get[Se.boxParticle](){return this.boxParticle}get[Se.convexParticle](){return this.convexParticle}get[Se.cylinderCylinder](){return this.convexConvex}get[Se.sphereCylinder](){return this.sphereConvex}get[Se.planeCylinder](){return this.planeConvex}get[Se.boxCylinder](){return this.boxConvex}get[Se.convexCylinder](){return this.convexConvex}get[Se.heightfieldCylinder](){return this.heightfieldCylinder}get[Se.particleCylinder](){return this.particleCylinder}get[Se.sphereTrimesh](){return this.sphereTrimesh}get[Se.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new B1,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new M1(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,d=i.material||e.material;return c&&d&&c.restitution>=0&&d.restitution>=0&&(a.restitution=c.restitution*d.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const d=s.material||n.material,u=r.material||i.material;if(d&&u&&d.friction>=0&&u.friction>=0&&(c=d.friction*u.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,v=m.length?m.pop():new lu(n,i,h*f),g=m.length?m.pop():new lu(n,i,h*f);return v.bi=g.bi=n,v.bj=g.bj=i,v.minForce=g.minForce=-h*f,v.maxForce=g.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(v.t,g.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=g.enabled=t.enabled,e.push(v,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Gi.setZero(),Ss.setZero(),Es.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Gi.vadd(e.ni,Gi),Ss.vadd(e.ri,Ss),Es.vadd(e.rj,Es)):(Gi.vsub(e.ni,Gi),Ss.vadd(e.rj,Ss),Es.vadd(e.ri,Es));const r=1/t;Ss.scale(r,n.ri),Es.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Gi.normalize(),Gi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=G1,c=W1,d=V1,u=H1;for(let h=0,f=t.length;h!==f;h++){const m=t[h],v=e[h];let g=null;m.material&&v.material&&(g=n.getContactMaterial(m.material,v.material)||null);const p=m.type&Ct.KINEMATIC&&v.type&Ct.STATIC||m.type&Ct.STATIC&&v.type&Ct.KINEMATIC||m.type&Ct.KINEMATIC&&v.type&Ct.KINEMATIC;for(let x=0;x<m.shapes.length;x++){m.quaternion.mult(m.shapeOrientations[x],l),m.quaternion.vmult(m.shapeOffsets[x],d),d.vadd(m.position,d);const y=m.shapes[x];for(let _=0;_<v.shapes.length;_++){v.quaternion.mult(v.shapeOrientations[_],c),v.quaternion.vmult(v.shapeOffsets[_],u),u.vadd(v.position,u);const S=v.shapes[_];if(!(y.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&y.collisionFilterGroup)||d.distanceTo(u)>y.boundingSphereRadius+S.boundingSphereRadius)continue;let w=null;y.material&&S.material&&(w=n.getContactMaterial(y.material,S.material)||null),this.currentContactMaterial=w||g||n.defaultContactMaterial;const E=y.type|S.type,P=this[E];if(P){let b=!1;y.type<S.type?b=P.call(this,y,S,d,u,l,c,m,v,y,S,p):b=P.call(this,S,y,u,d,c,l,v,m,y,S,p),b&&p&&(n.shapeOverlapKeeper.set(y.id,S.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,n,i,s,r,a,l,c,d,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,d);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,r,a,l,c,d,u){const h=this.createContactEquation(a,l,t,e,c,d);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,yr),h.ni.scale(h.ni.dot(yr),cu),yr.vsub(cu,h.rj),-yr.dot(h.ni)<=t.radius){if(u)return!0;const f=h.ri,m=h.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,r,a,l,c,d,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,u)}sphereBox(t,e,n,i,s,r,a,l,c,d,u){const h=this.v3pool,f=gy;n.vsub(i,Mr),e.getSideNormals(f,r);const m=t.radius;let v=!1;const g=xy,p=_y,x=yy;let y=null,_=0,S=0,w=0,E=null;for(let F=0,G=f.length;F!==G&&v===!1;F++){const k=fy;k.copy(f[F]);const q=k.length();k.normalize();const at=Mr.dot(k);if(at<q+m&&at>0){const ut=py,rt=my;ut.copy(f[(F+1)%3]),rt.copy(f[(F+2)%3]);const Xt=ut.length(),Bt=rt.length();ut.normalize(),rt.normalize();const $t=Mr.dot(ut),K=Mr.dot(rt);if($t<Xt&&$t>-Xt&&K<Bt&&K>-Bt){const et=Math.abs(at-q-m);if((E===null||et<E)&&(E=et,S=$t,w=K,y=q,g.copy(k),p.copy(ut),x.copy(rt),_++,u))return!0}}}if(_){v=!0;const F=this.createContactEquation(a,l,t,e,c,d);g.scale(-m,F.ri),F.ni.copy(g),F.ni.negate(F.ni),g.scale(y,g),p.scale(S,p),g.vadd(p,g),x.scale(w,x),g.vadd(x,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let P=h.get();const b=vy;for(let F=0;F!==2&&!v;F++)for(let G=0;G!==2&&!v;G++)for(let k=0;k!==2&&!v;k++)if(P.set(0,0,0),F?P.vadd(f[0],P):P.vsub(f[0],P),G?P.vadd(f[1],P):P.vsub(f[1],P),k?P.vadd(f[2],P):P.vsub(f[2],P),i.vadd(P,b),b.vsub(n,b),b.lengthSquared()<m*m){if(u)return!0;v=!0;const q=this.createContactEquation(a,l,t,e,c,d);q.ri.copy(b),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(m,q.ri),q.rj.copy(P),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}h.release(P),P=null;const M=h.get(),L=h.get(),A=h.get(),D=h.get(),z=h.get(),N=f.length;for(let F=0;F!==N&&!v;F++)for(let G=0;G!==N&&!v;G++)if(F%3!==G%3){f[G].cross(f[F],M),M.normalize(),f[F].vadd(f[G],L),A.copy(n),A.vsub(L,A),A.vsub(i,A);const k=A.dot(M);M.scale(k,D);let q=0;for(;q===F%3||q===G%3;)q++;z.copy(n),z.vsub(D,z),z.vsub(L,z),z.vsub(i,z);const at=Math.abs(k),ut=z.length();if(at<f[q].length()&&ut<m){if(u)return!0;v=!0;const rt=this.createContactEquation(a,l,t,e,c,d);L.vadd(D,rt.rj),rt.rj.copy(rt.rj),z.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(m,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(l.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}h.release(M,L,A,D,z)}planeBox(t,e,n,i,s,r,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,u)}convexConvex(t,e,n,i,s,r,a,l,c,d,u,h,f){const m=Uy;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,m,h,f)){const v=[],g=Fy;t.clipAgainstHull(n,s,e,i,r,m,-100,100,v);let p=0;for(let x=0;x!==v.length;x++){if(u)return!0;const y=this.createContactEquation(a,l,t,e,c,d),_=y.ri,S=y.rj;m.negate(y.ni),v[x].normal.negate(g),g.scale(v[x].depth,g),v[x].point.vadd(g,_),S.copy(v[x].point),_.vsub(n,_),S.vsub(i,S),_.vadd(n,_),_.vsub(a.position,_),S.vadd(i,S),S.vsub(l.position,S),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,r,a,l,c,d,u){const h=this.v3pool;n.vsub(i,My);const f=e.faceNormals,m=e.faces,v=e.vertices,g=t.radius;let p=!1;for(let x=0;x!==v.length;x++){const y=v[x],_=Ey;r.vmult(y,_),i.vadd(_,_);const S=Sy;if(_.vsub(n,S),S.lengthSquared()<g*g){if(u)return!0;p=!0;const w=this.createContactEquation(a,l,t,e,c,d);w.ri.copy(S),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(g,w.ri),_.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let x=0,y=m.length;x!==y&&p===!1;x++){const _=f[x],S=m[x],w=Ty;r.vmult(_,w);const E=Ay;r.vmult(v[S[0]],E),E.vadd(i,E);const P=Cy;w.scale(-g,P),n.vadd(P,P);const b=Ry;P.vsub(E,b);const M=b.dot(w),L=Py;if(n.vsub(E,L),M<0&&L.dot(w)>0){const A=[];for(let D=0,z=S.length;D!==z;D++){const N=h.get();r.vmult(v[S[D]],N),i.vadd(N,N),A.push(N)}if(dy(A,w,n)){if(u)return!0;p=!0;const D=this.createContactEquation(a,l,t,e,c,d);w.scale(-g,D.ri),w.negate(D.ni);const z=h.get();w.scale(-M,z);const N=h.get();w.scale(-g,N),n.vsub(i,D.rj),D.rj.vadd(N,D.rj),D.rj.vadd(z,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),h.release(z),h.release(N),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let F=0,G=A.length;F!==G;F++)h.release(A[F]);return}else for(let D=0;D!==S.length;D++){const z=h.get(),N=h.get();r.vmult(v[S[(D+1)%S.length]],z),r.vmult(v[S[(D+2)%S.length]],N),i.vadd(z,z),i.vadd(N,N);const F=wy;N.vsub(z,F);const G=by;F.unit(G);const k=h.get(),q=h.get();n.vsub(z,q);const at=q.dot(G);G.scale(at,k),k.vadd(z,k);const ut=h.get();if(k.vsub(n,ut),at>0&&at*at<F.lengthSquared()&&ut.lengthSquared()<g*g){if(u)return!0;const rt=this.createContactEquation(a,l,t,e,c,d);k.vsub(i,rt.rj),k.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(g,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(l.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let Xt=0,Bt=A.length;Xt!==Bt;Xt++)h.release(A[Xt]);h.release(z),h.release(N),h.release(k),h.release(ut),h.release(q);return}h.release(z),h.release(N),h.release(k),h.release(ut),h.release(q)}for(let D=0,z=A.length;D!==z;D++)h.release(A[D])}}}planeConvex(t,e,n,i,s,r,a,l,c,d,u){const h=Iy,f=Dy;f.set(0,0,1),s.vmult(f,f);let m=0;const v=Ly;for(let g=0;g!==e.vertices.length;g++)if(h.copy(e.vertices[g]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,d),y=Ny;f.scale(f.dot(v),y),h.vsub(y,y),y.vsub(n,x.ri),x.ni.copy(f),h.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,r,a,l,c,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,u)}sphereHeightfield(t,e,n,i,s,r,a,l,c,d,u){const h=e.data,f=t.radius,m=e.elementSize,v=Yy,g=jy;he.pointToLocalFrame(i,r,n,g);let p=Math.floor((g.x-f)/m)-1,x=Math.ceil((g.x+f)/m)+1,y=Math.floor((g.y-f)/m)-1,_=Math.ceil((g.y+f)/m)+1;if(x<0||_<0||p>h.length||y>h[0].length)return;p<0&&(p=0),x<0&&(x=0),y<0&&(y=0),_<0&&(_=0),p>=h.length&&(p=h.length-1),x>=h.length&&(x=h.length-1),_>=h[0].length&&(_=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const S=[];e.getRectMinMax(p,y,x,_,S);const w=S[0],E=S[1];if(g.z-f>E||g.z+f<w)return;const P=this.result;for(let b=p;b<x;b++)for(let M=y;M<_;M++){const L=P.length;let A=!1;if(e.getConvexTrianglePillar(b,M,!1),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(A=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,u)),u&&A||(e.getConvexTrianglePillar(b,M,!0),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(A=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,l,t,e,u)),u&&A))return!0;if(P.length-L>2)return}}boxHeightfield(t,e,n,i,s,r,a,l,c,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,u)}convexHeightfield(t,e,n,i,s,r,a,l,c,d,u){const h=e.data,f=e.elementSize,m=t.boundingSphereRadius,v=Xy,g=qy,p=Wy;he.pointToLocalFrame(i,r,n,p);let x=Math.floor((p.x-m)/f)-1,y=Math.ceil((p.x+m)/f)+1,_=Math.floor((p.y-m)/f)-1,S=Math.ceil((p.y+m)/f)+1;if(y<0||S<0||x>h.length||_>h[0].length)return;x<0&&(x=0),y<0&&(y=0),_<0&&(_=0),S<0&&(S=0),x>=h.length&&(x=h.length-1),y>=h.length&&(y=h.length-1),S>=h[0].length&&(S=h[0].length-1),_>=h[0].length&&(_=h[0].length-1);const w=[];e.getRectMinMax(x,_,y,S,w);const E=w[0],P=w[1];if(!(p.z-m>P||p.z+m<E))for(let b=x;b<y;b++)for(let M=_;M<S;M++){let L=!1;if(e.getConvexTrianglePillar(b,M,!1),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,u,g,null)),u&&L||(e.getConvexTrianglePillar(b,M,!0),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,l,null,null,u,g,null)),u&&L))return!0}}sphereParticle(t,e,n,i,s,r,a,l,c,d,u){const h=ky;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(u)return!0;const m=this.createContactEquation(l,a,e,t,c,d);h.normalize(),m.rj.copy(h),m.rj.scale(t.radius,m.rj),m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,r,a,l,c,d,u){const h=zy;h.set(0,0,1),a.quaternion.vmult(h,h);const f=Oy;if(i.vsub(a.position,f),h.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(l,a,e,t,c,d);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const g=By;h.scale(h.dot(i),g),i.vsub(g,g),v.rj.copy(g),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,r,a,l,c,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,u)}convexParticle(t,e,n,i,s,r,a,l,c,d,u){let h=-1;const f=Hy,m=Gy;let v=null;const g=Vy;if(g.copy(i),g.vsub(n,g),s.conjugate(hu),hu.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,x=t.faces.length;p!==x;p++){const y=[t.worldVertices[t.faces[p][0]]],_=t.worldFaceNormals[p];i.vsub(y[0],uu);const S=-_.dot(uu);if(v===null||Math.abs(S)<Math.abs(v)){if(u)return!0;v=S,h=p,f.copy(_)}}if(h!==-1){const p=this.createContactEquation(l,a,e,t,c,d);f.scale(v,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,y=p.rj;x.vadd(i,x),x.vsub(l.position,x),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,a,l,c,d,u){return this.convexHeightfield(e,t,i,n,r,s,l,a,c,d,u)}particleCylinder(t,e,n,i,s,r,a,l,c,d,u){return this.convexParticle(e,t,i,n,r,s,l,a,c,d,u)}sphereTrimesh(t,e,n,i,s,r,a,l,c,d,u){const h=J1,f=Q1,m=ty,v=ey,g=ny,p=iy,x=ay,y=K1,_=Z1,S=ly;he.pointToLocalFrame(i,r,n,g);const w=t.radius;x.lowerBound.set(g.x-w,g.y-w,g.z-w),x.upperBound.set(g.x+w,g.y+w,g.z+w),e.getTrianglesInAABB(x,S);const E=$1,P=t.radius*t.radius;for(let D=0;D<S.length;D++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[S[D]*3+z],E),E.vsub(g,_),_.lengthSquared()<=P){if(y.copy(E),he.pointToWorldFrame(i,r,y,E),E.vsub(n,_),u)return!0;let N=this.createContactEquation(a,l,t,e,c,d);N.ni.copy(_),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.copy(E),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let D=0;D<S.length;D++)for(let z=0;z<3;z++){e.getVertex(e.indices[S[D]*3+z],h),e.getVertex(e.indices[S[D]*3+(z+1)%3],f),f.vsub(h,m),g.vsub(f,p);const N=p.dot(m);g.vsub(h,p);let F=p.dot(m);if(F>0&&N<0&&(g.vsub(h,p),v.copy(m),v.normalize(),F=p.dot(v),v.scale(F,p),p.vadd(h,p),p.distanceTo(g)<t.radius)){if(u)return!0;const k=this.createContactEquation(a,l,t,e,c,d);p.vsub(g,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),he.pointToWorldFrame(i,r,p,p),p.vsub(l.position,k.rj),he.vectorToWorldFrame(r,k.ni,k.ni),he.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const b=sy,M=oy,L=ry,A=Y1;for(let D=0,z=S.length;D!==z;D++){e.getTriangleVertices(S[D],b,M,L),e.getNormal(S[D],A),g.vsub(b,p);let N=p.dot(A);if(A.scale(N,p),g.vsub(p,p),N=p.distanceTo(g),Le.pointInTriangle(p,b,M,L)&&N<t.radius){if(u)return!0;let F=this.createContactEquation(a,l,t,e,c,d);p.vsub(g,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),he.pointToWorldFrame(i,r,p,p),p.vsub(l.position,F.rj),he.vectorToWorldFrame(r,F.ni,F.ni),he.vectorToWorldFrame(r,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,s,r,a,l,c,d,u){const h=new C,f=X1;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,h);const v=new C;v.copy(h),he.pointToWorldFrame(i,r,v,h);const g=q1;if(h.vsub(n,g),f.dot(g)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,d);x.ni.copy(f);const y=j1;f.scale(g.dot(f),y),h.vsub(y,y),x.ri.copy(y),x.ri.vsub(a.position,x.ri),x.rj.copy(h),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Gi=new C,Ss=new C,Es=new C,V1=new C,H1=new C,G1=new Ne,W1=new Ne,X1=new C,q1=new C,j1=new C,Y1=new C,Z1=new C;new C;const $1=new C,K1=new C,J1=new C,Q1=new C,ty=new C,ey=new C,ny=new C,iy=new C,sy=new C,oy=new C,ry=new C,ay=new dn,ly=[],yr=new C,cu=new C,cy=new C,hy=new C,uy=new C;function dy(o,t,e){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=cy;o[(s+1)%i].vsub(r,a);const l=hy;a.cross(t,l);const c=uy;e.vsub(r,c);const d=l.dot(c);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const Mr=new C,fy=new C,py=new C,my=new C,gy=[new C,new C,new C,new C,new C,new C],vy=new C,xy=new C,_y=new C,yy=new C,My=new C,wy=new C,by=new C,Sy=new C,Ey=new C,Ty=new C,Ay=new C,Cy=new C,Ry=new C,Py=new C;new C;new C;const Iy=new C,Dy=new C,Ly=new C,Ny=new C,Uy=new C,Fy=new C,zy=new C,Oy=new C,By=new C,ky=new C,hu=new Ne,Vy=new C;new C;const Hy=new C,uu=new C,Gy=new C,Wy=new C,Xy=new C,qy=[0],jy=new C,Yy=new C;class du{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const d=n[l];for(;d>i[a];)a++;c=d===i[a],c||fu(t,d)}a=0;for(let l=0;l<r;l++){let c=!1;const d=i[l];for(;d>n[a];)a++;c=n[a]===d,c||fu(e,d)}}}function fu(o,t){o.push((t&4294901760)>>16,t&65535)}const ja=(o,t)=>o<t?`${o}-${t}`:`${t}-${o}`;class Zy{constructor(){this.data={keys:[]}}get(t,e){const n=ja(t,e);return this.data[n]}set(t,e,n){const i=ja(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ja(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class $y extends yd{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new n1,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new N1,this.constraints=[],this.narrowphase=new k1(this),this.collisionMatrix=new Jh,this.collisionMatrixPrevious=new Jh,this.bodyOverlapKeeper=new du,this.shapeOverlapKeeper=new du,this.contactmaterials=[],this.contactMaterialTable=new Zy,this.defaultMaterial=new Jr("default"),this.defaultContactMaterial=new Kr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ki?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Le.ALL,n.from=t,n.to=e,n.callback=i,Ya.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Le.ANY,n.from=t,n.to=e,n.result=i,Ya.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Le.CLOSEST,n.from=t,n.to=e,n.result=i,Ya.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ct&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Fe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Fe.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Fe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=eM,i=nM,s=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,d=this.profile,u=Ct.DYNAMIC;let h=-1/0;const f=this.constraints,m=tM;l.length();const v=l.x,g=l.y,p=l.z;let x=0;for(c&&(h=Fe.now()),x=0;x!==s;x++){const D=r[x];if(D.type===u){const z=D.force,N=D.mass;z.x+=N*v,z.y+=N*g,z.z+=N*p}}for(let D=0,z=this.subsystems.length;D!==z;D++)this.subsystems[D].update();c&&(h=Fe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(d.broadphase=Fe.now()-h);let y=f.length;for(x=0;x!==y;x++){const D=f[x];if(!D.collideConnected)for(let z=n.length-1;z>=0;z-=1)(D.bodyA===n[z]&&D.bodyB===i[z]||D.bodyB===n[z]&&D.bodyA===i[z])&&(n.splice(z,1),i.splice(z,1))}this.collisionMatrixTick(),c&&(h=Fe.now());const _=Qy,S=e.length;for(x=0;x!==S;x++)_.push(e[x]);e.length=0;const w=this.frictionEquations.length;for(x=0;x!==w;x++)m.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,_,this.frictionEquations,m),c&&(d.narrowphase=Fe.now()-h),c&&(h=Fe.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const E=e.length;for(let D=0;D!==E;D++){const z=e[D],N=z.bi,F=z.bj,G=z.si,k=z.sj;let q;if(N.material&&F.material?q=this.getContactMaterial(N.material,F.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,N.material&&F.material&&(N.material.friction>=0&&F.material.friction>=0&&N.material.friction*F.material.friction,N.material.restitution>=0&&F.material.restitution>=0&&(z.restitution=N.material.restitution*F.material.restitution)),a.addEquation(z),N.allowSleep&&N.type===Ct.DYNAMIC&&N.sleepState===Ct.SLEEPING&&F.sleepState===Ct.AWAKE&&F.type!==Ct.STATIC){const at=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),ut=F.sleepSpeedLimit**2;at>=ut*2&&(N.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===Ct.DYNAMIC&&F.sleepState===Ct.SLEEPING&&N.sleepState===Ct.AWAKE&&N.type!==Ct.STATIC){const at=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ut=N.sleepSpeedLimit**2;at>=ut*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,F,!0),this.collisionMatrixPrevious.get(N,F)||(ao.body=F,ao.contact=z,N.dispatchEvent(ao),ao.body=N,F.dispatchEvent(ao)),this.bodyOverlapKeeper.set(N.id,F.id),this.shapeOverlapKeeper.set(G.id,k.id)}for(this.emitContactEvents(),c&&(d.makeContactConstraints=Fe.now()-h,h=Fe.now()),x=0;x!==s;x++){const D=r[x];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(y=f.length,x=0;x!==y;x++){const D=f[x];D.update();for(let z=0,N=D.equations.length;z!==N;z++){const F=D.equations[z];a.addEquation(F)}}a.solve(t,this),c&&(d.solve=Fe.now()-h),a.removeAllEquations();const P=Math.pow;for(x=0;x!==s;x++){const D=r[x];if(D.type&u){const z=P(1-D.linearDamping,t),N=D.velocity;N.scale(z,N);const F=D.angularVelocity;if(F){const G=P(1-D.angularDamping,t);F.scale(G,F)}}}this.dispatchEvent(Jy),c&&(h=Fe.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(t,M,L);this.clearForces(),this.broadphase.dirty=!0,c&&(d.integrate=Fe.now()-h),this.stepnumber+=1,this.dispatchEvent(Ky);let A=!0;if(this.allowSleep)for(A=!1,x=0;x!==s;x++){const D=r[x];D.sleepTick(this.time),D.sleepState!==Ct.SLEEPING&&(A=!0)}this.hasActiveBodies=A}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ei,ni),t){for(let s=0,r=ei.length;s<r;s+=2)lo.bodyA=this.getBodyById(ei[s]),lo.bodyB=this.getBodyById(ei[s+1]),this.dispatchEvent(lo);lo.bodyA=lo.bodyB=null}if(e){for(let s=0,r=ni.length;s<r;s+=2)co.bodyA=this.getBodyById(ni[s]),co.bodyB=this.getBodyById(ni[s+1]),this.dispatchEvent(co);co.bodyA=co.bodyB=null}ei.length=ni.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ei,ni),n){for(let s=0,r=ei.length;s<r;s+=2){const a=this.getShapeById(ei[s]),l=this.getShapeById(ei[s+1]);ii.shapeA=a,ii.shapeB=l,a&&(ii.bodyA=a.body),l&&(ii.bodyB=l.body),this.dispatchEvent(ii)}ii.bodyA=ii.bodyB=ii.shapeA=ii.shapeB=null}if(i){for(let s=0,r=ni.length;s<r;s+=2){const a=this.getShapeById(ni[s]),l=this.getShapeById(ni[s+1]);si.shapeA=a,si.shapeB=l,a&&(si.bodyA=a.body),l&&(si.bodyB=l.body),this.dispatchEvent(si)}si.bodyA=si.bodyB=si.shapeA=si.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new dn;const Ya=new Le,Fe=globalThis.performance||{};if(!Fe.now){let o=Date.now();Fe.timing&&Fe.timing.navigationStart&&(o=Fe.timing.navigationStart),Fe.now=()=>Date.now()-o}new C;const Ky={type:"postStep"},Jy={type:"preStep"},ao={type:Ct.COLLIDE_EVENT_NAME,body:null,contact:null},Qy=[],tM=[],eM=[],nM=[],ei=[],ni=[],lo={type:"beginContact",bodyA:null,bodyB:null},co={type:"endContact",bodyA:null,bodyB:null},ii={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},si={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class iM{constructor(){this.world=new $y({gravity:new C(0,-24,0)}),this.world.broadphase=new Rs(this.world),this.world.allowSleep=!0,this.world.solver.iterations=7,this.world.defaultContactMaterial.friction=.35,this.world.defaultContactMaterial.restitution=.12,this.items=[]}box(t,e,n,i,s,r,a=0,l=null,c=0){const d=new Ct({mass:a,shape:new $r(new C(i/2,s/2,r/2)),position:new C(t,e,n),linearDamping:.12,angularDamping:.25,sleepTimeLimit:2});return d.quaternion.setFromEuler(0,c,0),d.updateAABB(),this.world.addBody(d),l&&this.items.push({body:d,mesh:l,home:d.position.clone(),homeQ:d.quaternion.clone(),age:0}),d}ball(t,e,n,i,s,r){const a=new Ct({mass:s,shape:new D1(i),position:new C(t,e,n),linearDamping:.08,angularDamping:.08});return this.world.addBody(a),this.items.push({body:a,mesh:r,home:a.position.clone(),homeQ:a.quaternion.clone(),age:0}),a}step(t){this.world.step(1/60,t,4);for(const e of this.items){e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion),e.age+=t;const n=e.body.position;(n.y<-20||Math.abs(n.x)>1020||Math.abs(n.z)>1020||e.resetAfter&&e.age>e.resetAfter)&&this.reset(e)}}reset(t){t.body.position.copy(t.home),t.body.quaternion.copy(t.homeQ),t.body.velocity.setZero(),t.body.angularVelocity.setZero(),t.body.wakeUp(),t.age=0}}class sM{constructor(t){this.items=[],this.mesh=new Hs(new Wr(.3,0),Lt(16777215),180),this.mesh.instanceMatrix.setUsage(mf),this.mesh.count=0,this.mesh.frustumCulled=!1,t.add(this.mesh),this.dummy=new Ie,this.tracks=[],this.trackMesh=new Hs(new wn(.7,2),new Qi({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}),180),this.trackMesh.frustumCulled=!1,t.add(this.trackMesh),this.trackMesh.count=0}emit(t,e,n=10,i=4,s="spark"){for(let r=0;r<n;r++)this.items.length>=180&&this.items.shift(),this.items.push({p:new R(t.x,t.y+1,t.z),v:new R((Math.random()-.5)*i,Math.random()*i+2,(Math.random()-.5)*i),life:s==="smoke"?2:1.3,max:s==="smoke"?2:1.3,color:new Zt(e),kind:s})}track(t,e,n,i){for(const s of[-1,1])this.tracks.length>=180&&this.tracks.shift(),this.tracks.push({x:t.x+Math.cos(e)*i*.5*s,y:t.y,z:t.z-Math.sin(e)*i*.5*s,yaw:e,color:new Zt(n),life:12})}update(t){for(let e=this.items.length-1;e>=0;e--)this.items[e].life<=0&&this.items.splice(e,1);for(let e=0;e<this.items.length;e++){const n=this.items[e];n.life-=t,n.v.y-=n.kind==="smoke"?-t:t*8,n.p.addScaledVector(n.v,t),this.dummy.position.copy(n.p),this.dummy.scale.setScalar(n.kind==="smoke"?(n.max-n.life)*2+.2:n.life/n.max),this.dummy.rotation.set(n.life*2,n.life,0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),this.mesh.setColorAt(e,n.color)}this.mesh.count=this.items.length,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);for(let e=this.tracks.length-1;e>=0;e--)this.tracks[e].life<=0&&this.tracks.splice(e,1);for(let e=0;e<this.tracks.length;e++){const n=this.tracks[e];n.life-=t,this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(-Math.PI/2,0,n.yaw),this.dummy.scale.setScalar(Math.min(1,n.life/3)),this.dummy.updateMatrix(),this.trackMesh.setMatrixAt(e,this.dummy.matrix),this.trackMesh.setColorAt(e,n.color)}this.trackMesh.count=this.tracks.length,this.trackMesh.instanceMatrix.needsUpdate=!0,this.trackMesh.instanceColor&&(this.trackMesh.instanceColor.needsUpdate=!0)}}class oM{constructor(){this.enabled=!0,this.ctx=null;try{this.volume=Number(localStorage.getItem("norimono-volume")??.85)}catch{this.volume=.85}}async start(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume*.75,this.compressor=e.createDynamicsCompressor(),this.compressor.threshold.value=-15,this.compressor.knee.value=18,this.compressor.ratio.value=4,this.master.connect(this.compressor).connect(e.destination),this.engine=e.createOscillator(),this.engine.type="sawtooth",this.engineGain=e.createGain(),this.engineGain.gain.value=.11;const n=e.createBiquadFilter();n.frequency.value=750,this.engine.connect(n).connect(this.engineGain).connect(this.master),this.engine.start(),this.rail=e.createOscillator(),this.rail.type="triangle",this.railGain=e.createGain(),this.railGain.gain.value=0,this.rail.connect(this.railGain).connect(this.master),this.rail.start(),this.sirenGain=e.createGain(),this.sirenGain.gain.value=0,this.sirenGain.connect(this.master),this.sirens=[0,1].map(i=>{const s=e.createOscillator();return s.type=i?"sine":"triangle",s.connect(this.sirenGain),s.start(),s})}try{await this.ctx.resume()}catch{}}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem("norimono-volume",this.volume)}catch{}}effect(t){if(!this.ctx||!this.enabled)return;const e={hit:65,jump:360,paint:220,mud:100,water:450,wash:580,warp:750,boost:320,repair:880,success:660,goal:990,strike:740,ball:140,crossing:640}[t]||440,n=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;n.type=["hit","mud","ball"].includes(t)?"triangle":"sine",n.frequency.setValueAtTime(e,s),n.frequency.exponentialRampToValueAtTime(e*(t==="hit"?.5:1.6),s+.23),i.gain.setValueAtTime(.2,s),i.gain.exponentialRampToValueAtTime(.001,s+.35),n.connect(i).connect(this.master),n.start(s),n.stop(s+.36)}update(t,e,n){if(!this.ctx)return;const i=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.enabled?this.volume*.75:0,i,.08),this.engine.frequency.setTargetAtTime(45+Math.abs(t.speed)*4,i,.08),this.engineGain.gain.setTargetAtTime(.075+Math.min(.085,Math.abs(t.speed)*.002),i,.1);const s=t.specialOn&&["police","ambulance","fire"].includes(t.config.id);this.sirenGain.gain.setTargetAtTime(s?.15:0,i,.035);const r=t.config.id==="ambulance"?Math.floor(n*1.5)%2?780:960:620+(Math.sin(n*4)+1)*260;this.sirens[0].frequency.setTargetAtTime(r,i,.025),this.sirens[1].frequency.setTargetAtTime(r*1.005,i,.025);let a=0,l=90;for(const c of e){const d=c.meshes[0].position.distanceTo(t.mesh.position),u=Math.max(0,1-d/180)*.13;u>a&&(a=u,l=70+c.speed*5)}this.railGain.gain.setTargetAtTime(a,i,.2),this.rail.frequency.setTargetAtTime(l,i,.2)}}class rM{constructor(){try{this.data=JSON.parse(localStorage.getItem("norimono-save-v1"))||{}}catch{this.data={}}this.data.discovered=Array.isArray(this.data.discovered)?this.data.discovered:[]}save(t,e){this.data.lastVehicle=t.config.id,this.data.discovered.includes(t.config.id)||this.data.discovered.push(t.config.id),this.data.settings=e;try{localStorage.setItem("norimono-save-v1",JSON.stringify(this.data))}catch{}}}class aM{constructor(){this.standalone=matchMedia("(display-mode: standalone)").matches||!!navigator.standalone,this.prompt=null,window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.prompt=t,document.querySelector("#install")?.removeAttribute("hidden")}),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(async t=>{t.update(),await(await caches.open("norimono-pages")).add(new Request(new URL("./",location.href),{cache:"reload"}))}).catch(t=>console.warn("オフライン準備を再試行できます",t.message)),document.addEventListener("visibilitychange",()=>{!document.hidden&&this.started?this.wake():this.lock?.release().catch(()=>{})})}async start(){this.started=!0,this.wake()}async wake(){try{navigator.wakeLock&&(this.lock=await navigator.wakeLock.request("screen"))}catch{}}async install(){if(this.prompt)await this.prompt.prompt(),this.prompt=null;else return"iPhoneは共有ボタン → ホーム画面に追加。Androidはブラウザのメニュー → アプリをインストール。"}}let Za;function pu(o,t){if(!["police","ambulance","fire"].includes(t.id))return;if(!Za){const i=document.createElement("canvas");i.width=i.height=64;const s=i.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#ffffffff"),r.addColorStop(.18,"#ffffffba"),r.addColorStop(.55,"#ffffff35"),r.addColorStop(1,"#ffffff00"),s.fillStyle=r,s.fillRect(0,0,64,64),Za=new Ni(i)}const e=o.userData;for(const i of e.lights){const s=new ju(new uc({map:Za,color:i.material.color,blending:tl,transparent:!0,opacity:0,depthWrite:!1}));s.scale.set(1.7,1.7,1),s.position.y=.08,i.add(s),i.userData.flare=s}const n=new od(16721731,0,12,2);n.position.set(0,4.1,0),e.chassis.add(n),e.emergencyLight=n}const Ns=new Map;function lM(){const t=new Uint8Array(262144);let e=91237;for(let i=0;i<t.length;i+=4){e=Math.imul(e,1664525)+1013904223>>>0;const s=180+(e>>>25);t[i]=t[i+1]=t[i+2]=s,t[i+3]=255}const n=new Gr(t,256,256);return n.wrapS=n.wrapT=di,n.magFilter=Rn,n.minFilter=Ti,n.generateMipmaps=!0,n.repeat.set(6,6),n.needsUpdate=!0,n}const mu=lM();function Qr(o){if(Ns.has(o))return Ns.get(o);const t={paint:new hi({color:o,metalness:.72,roughness:.23,clearcoat:1,clearcoatRoughness:.095,roughnessMap:mu,envMapIntensity:1.15}),glass:new hi({color:1319980,metalness:.12,roughness:.055,clearcoat:1,clearcoatRoughness:.025,ior:1.52,envMapIntensity:1.7,side:Xe}),chrome:new Ee({color:12240077,metalness:1,roughness:.2,envMapIntensity:1.1}),alloy:new Ee({color:9213598,metalness:.92,roughness:.31}),dark:new Ee({color:1514528,metalness:.55,roughness:.38}),rubber:new Ee({color:1382169,roughness:.95,roughnessMap:mu}),trim:new Ee({color:2435114,roughness:.7}),seat:new Ee({color:2436400,roughness:.88}),red:new Ee({color:12069924,metalness:.4,roughness:.35}),led:new Ee({color:15858175,emissive:13232127,emissiveIntensity:1.7,roughness:.18}),tail:new hi({color:9243658,emissive:16720400,emissiveIntensity:.45,roughness:.2,clearcoat:1})};return Ns.set(o,t),t}function cM(o){const t=o?"letter-offroad":"letter-road";if(Ns.has(t))return Ns.get(t);const e=document.createElement("canvas");e.width=e.height=512;const n=e.getContext("2d");n.translate(256,256),n.fillStyle="#777b7d",n.font="600 23px Arial";const i=(a,l,c)=>{for(let d=0;d<a.length;d++){const u=c+d*.087;n.save(),n.rotate(u),n.fillText(a[d],-7,-210),n.restore()}};i(o?"NWM • ALL TERRAIN":"NWM • PERFORMANCE",210,-.78),i(o?"38 × 15.5 R20":"SPORT RADIAL",210,2.55);const s=new Ni(e);s.colorSpace=He;const r=new Qi({map:s,transparent:!0,depthWrite:!1,side:Xe});return Ns.set(t,r),r}function Rd(o,t,e){const n=t.width,i=t.length,s=["sport","race","rare-sport"].includes(t.id),r=["suv","secret-suv"].includes(t.id),a=90,l=24,c=[],d=[],u=[];function h(v){const g=Math.sin(Math.min(1,v/.16)*Math.PI/2),p=Math.sin(Math.min(1,(1-v)/.14)*Math.PI/2);return{width:n*(.34+.1*Math.min(g,p)),top:(s?.73:r?1.2:.98)-(1-g)*.27-(1-p)*.16}}for(let v=0;v<=a;v++){const g=v/a,p=(g-.5)*i*1.06,{width:x,top:y}=h(g);for(let _=0;_<=l;_++){const S=_/l*Math.PI,w=-Math.cos(S)*x,E=.16+Math.pow(Math.sin(S),.22)*(y-.16);c.push(w,E,p),d.push(_/l,g)}}for(let v=0;v<a;v++)for(let g=0;g<l;g++){const p=v*(l+1)+g,x=p+l+1,y=((v+.5)/a-.5)*i*1.06,_=(c[p*3+1]+c[(p+1)*3+1])*.5;Math.abs((c[p*3]+c[(p+1)*3])*.5),[-i*.32,i*.32].some(S=>(y-S)**2+(_+.15)**2<(t.wheel*1.08)**2),u.push(p,x,p+1,x,x+1,p+1)}for(const v of[0,a]){const g=c.length/3,p=(v/a-.5)*i*1.06;c.push(0,.16,p),d.push(.5,.5);for(let x=0;x<l;x++){const y=v*(l+1)+x;v===0?u.push(g,y,y+1):u.push(g,y+1,y)}}for(let v=0;v<a;v++){const g=v*(l+1),p=(v+1)*(l+1);u.push(g,g+l,p,p,g+l,p+l)}const f=new ye;f.setAttribute("position",new Ht(c,3)),f.setAttribute("uv",new Ht(d,2)),f.setIndex(u),f.computeVertexNormals();const m=new Kt(f,e);return m.name="sealed-body-shell",m.userData.closedShell=!0,m.castShadow=!0,m.receiveShadow=!0,o.add(m),m}const Pe=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<=1024;function Ge(o,t,e,n=0,i=0,s=0){const r=new Kt(t,e);return r.position.set(n,i,s),r.castShadow=!0,r.receiveShadow=!0,o.add(r),r}function xt(o,t,e,n,i,s,r,a,l=.04){return Ge(o,new es(t,e,n,Pe?1:2,Math.min(l,t/3,e/3,n/3)),a,i,s,r)}function Hn(o,t,e,n,i,s,r,a=24){return Ge(o,new Mn(t,t,e,a),r,n,i,s)}function ae(o,t,e,n,i){const s=new R(...t),r=new R(...e),a=r.clone().sub(s),l=Hn(o,n,a.length(),0,0,0,i,12);return l.position.copy(s.add(r).multiplyScalar(.5)),l.quaternion.setFromUnitVectors(new R(0,1,0),a.normalize()),l}function li(o,t,e){const n=new ye;return n.setAttribute("position",new Ht(t.flat(),3)),n.setAttribute("uv",new Ht([0,0,1,0,1,1,0,1],2)),n.setIndex([0,1,2,0,2,3]),n.computeVertexNormals(),Ge(o,Mc(n,.55),e)}function gu(o,t,e,n,i=.045){const s=new Lo(t,{depth:e,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:Pe?1:3,curveSegments:Pe?12:24,steps:1});return s.rotateY(-Math.PI/2),s.translate(e/2,0,0),Ge(o,Mc(s,.55),n)}function Br(o,t,e,n,i,s,r,a=Math.PI*2){const l=Ge(o,new qn(t,e,Pe?5:8,Pe?24:64,a),r,n,i,s);return l.rotation.y=Math.PI/2,l}function Pd(o,t,e,n,i,s){const r=t.wheel,a=r*(s?.88:.72),l=new zt,c=new zt;l.position.set(n*(t.width*.47+a*.28),-.15,i),l.add(c),o.add(l);const d=[[.56,-.46],[.75,-.51],[.93,-.45],[1,-.32],[1,.32],[.93,.45],[.75,.51],[.56,.46],[.56,-.46]].map(([p,x])=>new nt(p*r,x*a)),u=new Xr(d,Pe?24:64);u.rotateZ(Math.PI/2),Ge(c,u,e.rubber);const h=Pe?s?2:1:s?3:2,f=Pe?s?18:20:s?40:48;for(let p=0;p<h;p++)for(let x=0;x<f;x++){const y=(x+p%2*.45)*Math.PI*2/f;xt(c,a/(h+.1),r*(s?.075:.022),r*(s?.115:.065),(p-(h-1)/2)*a/h,Math.cos(y)*r,Math.sin(y)*r,e.rubber,.018).rotation.set(y,p%2?.24:-.24,0)}const m=n*a*.51,v=Hn(c,r*.58,a*.85,0,0,0,e.dark,Pe?24:48);v.rotation.z=Math.PI/2;for(const p of[m,-m]){Br(c,r*.58,r*.037,p,0,0,e.chrome);const x=Hn(c,r*.49,.065,p*.78,0,0,e.alloy,Pe?24:48);x.rotation.z=Math.PI/2;const y=Pe?10:20;for(let E=0;E<y;E++){const P=E*Math.PI*2/y,b=Hn(c,r*.022,.072,p*.81,Math.cos(P)*r*.4,Math.sin(P)*r*.4,e.dark,8);b.rotation.z=Math.PI/2}const _=Pe?6:s?8:10;for(let E=0;E<_;E++){const P=E*Math.PI*2/_,b=xt(c,.08,r*.45,r*.083,p,Math.cos(P)*r*.34,Math.sin(P)*r*.34,e.chrome,.025);b.rotation.x=P+(s?0:.18)}const S=Hn(c,r*.17,.1,p,0,0,e.alloy,Pe?16:24);S.rotation.z=Math.PI/2;const w=Pe?5:6;for(let E=0;E<w;E++){const P=E*Math.PI*2/w,b=Hn(c,r*.033,.13,p+Math.sign(p)*.02,Math.cos(P)*r*.12,Math.sin(P)*r*.12,e.chrome,6);b.rotation.z=Math.PI/2}}const g=Ge(c,new wn(r*1.91,r*1.91),cM(s),m+n*.017,0,0);return g.rotation.y=n*Math.PI/2,g.castShadow=!1,xt(l,.17,r*.4,r*.2,m*.75,r*.19,-r*.39,e.red,.04),{pivot:l,roll:c,front:i<0}}function hM(o,t,{width:e,bottom:n,roof:i,front:s,rear:r,frontTop:a,rearTop:l}){const c=e*.5,d=e*.43,u=[[-c,n,s],[c,n,s],[d,i,a],[-d,i,a]],h=[[c,n,r],[-c,n,r],[-d,i,l],[d,i,l]];li(o,u,t.glass),li(o,h,t.glass);for(const f of[-1,1]){const m=[f*c,n,s],v=[f*d,i,a],g=[f*c,n,r],p=[f*d,i,l];li(o,[m,g,p,v],t.glass),ae(o,m,v,.072,t.paint),ae(o,g,p,.09,t.paint),ae(o,m,g,.055,t.trim),ae(o,v,p,.05,t.chrome);const x=(s+r)*.5;ae(o,[f*c,n,x],[f*d,i,x],.07,t.trim),xt(o,.07,.07,.34,f*(c+.015),n-.23,x+.25,t.chrome,.02);const y=s+.1;ae(o,[f*c,n+.15,y],[f*(c+.35),n+.15,y],.045,t.dark),xt(o,.34,.23,.46,f*(c+.4),n+.2,y,t.paint,.09),xt(o,.025,.17,.32,f*(c+.59),n+.22,y,t.chrome,.035)}xt(o,e*.88,.15,l-a+.18,0,i+.03,(a+l)/2,t.paint,.065);for(const f of[-e*.22,e*.22])xt(o,e*.26,.5,.3,f,n-.2,(s+r)/2,t.seat,.08),xt(o,e*.26,.16,.55,f,n-.5,(s+r)/2-.2,t.seat,.04);ae(o,[-c,n+.008,s-.01],[c,n+.008,s-.01],.043,t.trim);for(const f of[-1,1])ae(o,[f*c*.75,n+.035,s-.025],[f*c*.15,n+.18,a*.2+s*.8-.04],.022,t.dark)}function Id(o,t,e,n,i){const s=t.wheel*1.1,r=new Co;r.absarc(0,-.15,s,0,Math.PI,!1),r.absarc(0,-.15,s-.12,Math.PI,0,!0),r.closePath();const a=new Lo(r,{depth:t.wheel*.48,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:Pe?1:2,steps:1,curveSegments:Pe?12:28});a.rotateY(Math.PI/2),Ge(o,Mc(a,.55),e.paint,n>0?t.width*.4:-t.width*.4-t.wheel*.48,0,i),Br(o,s-.02,.027,n*(t.width*.4+t.wheel*.49),-.15,i,e.trim,Math.PI)}function uM(o){const t=new zt,e=new zt,n=new zt,i=new zt,s=[],r=[];t.add(e),e.add(n,i);const a=Qr(o.color),l=o.width,c=o.length,d=o.wheel,u=o.id==="monster",h=["sport","race","rare-sport"].includes(o.id),f=["fire","ambulance","tow","dump","bus"].includes(o.id),m=["dozer","excavator"].includes(o.id),v=u||m||["suv","tractor","secret-suv"].includes(o.id),g=["car","police","sport","race","rare-sport","suv","secret-suv"].includes(o.id),p=u?1.72:h?.79:f?1.27:g?1.02:1.23,x=c*.53,y=d*1.055,_=-c*.32,S=c*.32,w=new Co;w.moveTo(-x,.25),w.lineTo(-x,p-.32),w.quadraticCurveTo(-x+.25,p,-x+.65,p),w.lineTo(x-.35,p),w.quadraticCurveTo(x,p,x,p-.25),w.lineTo(x,.2);for(const A of[S,_])w.lineTo(Math.min(x,A+y),.2),w.absarc(A,-.15,y,0,Math.PI,!1);w.lineTo(-x,.25),w.closePath(),g?Rd(e,o,a.paint):gu(e,w,l*.85,a.paint),xt(e,l*.83,.25,c*.96,0,-.3,0,a.dark,.06),xt(e,l*.79,.4,c*.72,0,.3,0,a.trim,.08);for(const A of[-1,1])xt(e,.18,.28,c*.88,A*l*.26,-.28,0,a.dark,.03),xt(e,.16,.2,c*.55,A*l*.53,.1,0,a.trim,.03);const E=f?-c*.3:u?-1.2:-c*.2,P=-x+.18;li(e,[[-l*.41,p-.15,P],[l*.41,p-.15,P],[l*.38,p+.09,E],[-l*.38,p+.09,E]],a.paint);for(const A of[-1,1])ae(e,[A*l*.3,p-.1,P+.25],[A*l*.25,p+.105,E],.022,a.paint);if(u||h){xt(e,l*.32,.1,c*.11,0,p+.11,E-.55,a.trim,.03);for(let A=0;A<6;A++)xt(e,l*.28,.012,.018,0,p+.167,E-.8+A*.09,a.alloy,.005)}const b=f?{width:l*.91,bottom:p+.5,roof:3.65,front:-c*.47,rear:-c*.08,frontTop:-c*.42,rearTop:-c*.12}:m?{width:l*.58,bottom:1.9,roof:3.9,front:-.6,rear:2.1,frontTop:-.4,rearTop:1.8}:u?{width:l*.84,bottom:1.85,roof:3.23,front:-1.35,rear:1.52,frontTop:-.75,rearTop:1.14}:{width:l*.86,bottom:p+.19,roof:h?1.58:v?2.25:1.95,front:-c*.23,rear:c*.29,frontTop:-c*.07,rearTop:c*.12};o.id==="race"&&(b.width=l*.62,b.front=-c*.24,b.rear=c*.23,b.roof=1.58,b.frontTop=-c*.02,b.rearTop=c*.12),o.id==="tractor"&&(b.width=l*.7,b.front=-.5,b.frontTop=-.4,b.roof=3.15,b.rear=2,b.rearTop=1.8),hM(e,a,b);for(const A of[-1,1]){const D=new Co;D.moveTo(b.front,p*.6),D.lineTo(b.front,b.bottom),D.lineTo(b.rear,b.bottom),D.lineTo(b.rear,p*.6),D.closePath();const z=gu(e,D,.06,a.paint,.015);z.position.x=A*l*.425,ae(e,[A*l*.438,p*.55,b.front+.06],[A*l*.438,b.bottom-.05,b.front+.06],.013,a.dark),ae(e,[A*l*.438,p*.55,b.rear-.04],[A*l*.438,b.bottom-.05,b.rear-.04],.013,a.dark)}if(u||o.id==="tow"){const A=b.rear+.05,D=x-.2;xt(e,l*.75,.14,D-A,0,.75,(A+D)/2,a.trim,.025);for(let z=0;z<9;z++)xt(e,.04,.04,D-A,(-.34+z*.085)*l,.85,(A+D)/2,a.dark,.01);for(const z of[-1,1])xt(e,.12,.14,D-A,z*l*.42,p+.08,(A+D)/2,a.trim,.04);xt(e,l*.85,.88,.15,0,1.1,x-.1,a.paint,.06),xt(e,.7,.055,.07,0,1.4,x+.01,a.chrome,.015)}if(f&&!["tow","dump"].includes(o.id)){const A=c*.53;xt(e,l*.96,2.7,A,0,2,c*.22,a.paint,.12),xt(e,l*.965,.08,A,0,2.3,c*.22,o.id==="ambulance"?a.red:a.chrome,.02);for(const D of[-1,1])if(o.id==="bus")for(let z=0;z<6;z++)xt(e,.035,1.15,.85,D*l*.487,2.85,-.2+z*.9,a.glass,.04);else for(let z=0;z<3;z++){xt(e,.03,1.8,A/3-.18,D*l*.488,1.98,c*.22-A*.34+z*A/3,a.alloy,.025);for(let N=0;N<12;N++)xt(e,.04,.016,A/3-.2,D*l*.5,1.18+N*.12,c*.22-A*.34+z*A/3,a.chrome,.003)}for(const D of[-1,1])xt(e,l*.44,2.3,.025,D*l*.235,2.1,c*.489,a.paint,.025),xt(e,.06,.4,.05,D*.2,1.8,c*.51,a.chrome,.015)}for(const A of[_,S])for(const D of[-1,1])if(s.push(Pd(e,o,a,D,A,v)),m||Id(e,o,a,D,A),ae(e,[D*l*.18,.1,A],[D*l*.47,-.15,A],.08,a.alloy),ae(e,[D*l*.25,.9,A+.2],[D*l*.47,-.12,A-.15],u?.09:.05,a.chrome),u||v){const z=[],N=Pe?30:72;for(let F=0;F<=N;F++){const G=F/N*Math.PI*14;z.push(new R(D*l*.34+Math.cos(G)*.13,.08+F/N*.83,A+Math.sin(G)*.13))}Ge(e,new qr(new Ao(z),Pe?36:90,.035,Pe?4:6,!1),a.red)}for(const A of[_,S])ae(e,[-l*.46,-.13,A],[l*.46,-.13,A],.13,a.dark),Ge(e,new xn(.3,20,12),a.dark,0,-.13,A).scale.set(1.2,1,1);ae(e,[0,-.28,_],[0,-.28,S],.09,a.chrome),xt(e,l*.57,h?.3:.6,.17,0,p-.43,-x-.055,a.dark,.05);for(let A=0;A<11;A++)xt(e,.055,.47,.035,-l*.25+A*l*.05,p-.43,-x-.155,a.alloy,.009);for(const A of[-1,1]){const D=A*l*.345;xt(e,l*.23,h?.23:.5,.2,D,p-.32,-x-.04,a.trim,.06);for(let z=0;z<2;z++){const N=Hn(e,h?.065:.115,.07,D+(z-.5)*l*.085,p-.31,-x-.16,a.chrome,32);N.rotation.x=Math.PI/2;const F=Hn(e,h?.045:.079,.075,D+(z-.5)*l*.085,p-.31,-x-.18,a.led,24);F.rotation.x=Math.PI/2}xt(e,l*.215,.033,.03,D,p-.085,-x-.165,a.led,.01),xt(e,.05,.3,.035,A*l*.46,p-.29,-x-.15,a.led,.01),xt(e,.19,.58,.12,A*l*.395,p-.25,x+.07,a.tail,.04);for(let z=0;z<4;z++)xt(e,.17,.025,.014,A*l*.395,p-.44+z*.11,x+.137,a.tail,.008)}for(const A of[-x-.15,x+.17]){xt(e,l*.95,.28,.3,0,.25,A,a.dark,.08),xt(e,l*.49,.2,.32,0,.04,A,a.alloy,.045);for(const D of[-1,1])xt(e,l*.15,.22,.36,D*l*.38,.4,A,a.chrome,.04)}xt(e,.65,.19,.025,0,.36,x+.33,a.trim,.01);for(const A of[-1,1]){const D=Hn(e,.13,.75,A*l*.3,.03,x+.07,a.chrome,24);D.rotation.x=Math.PI/2;const z=Hn(e,.095,.012,A*l*.3,.03,x+.46,a.dark,24);z.rotation.x=Math.PI/2}if(u){for(const A of[-1,1])ae(e,[A*1.6,p,1.75],[A*1.6,3.03,1.75],.1,a.dark),ae(e,[A*1.6,3.03,1.75],[A*1.6,p,3.15],.1,a.dark);ae(e,[-1.6,3.03,1.75],[1.6,3.03,1.75],.1,a.dark),xt(e,3.25,.15,.25,0,3.38,-.55,a.dark,.05);for(let A=0;A<16;A++)xt(e,.13,.08,.04,-1.45+A*.19,3.38,-.7,a.led,.02);for(const A of[-1,1])Br(e,.13,.035,A*.9,.15,-x-.32,a.red)}if(h){for(const A of[-1,1])xt(e,.09,.58,.35,A*l*.31,o.id==="race"?1.8:1.39,x-.6,a.dark,.02);xt(e,l*1.03,.09,.64,0,o.id==="race"?2.1:1.7,x-.6,a.dark,.035),xt(e,l*.97,.07,.5,0,.04,-x,a.dark,.025);for(let A=0;A<6;A++)xt(e,.06,.27,.7,-l*.32+A*l*.128,.07,x-.08,a.dark,.015)}if(["police","ambulance","fire"].includes(o.id)){xt(e,l*.63,.1,.48,0,b.roof+.18,(b.frontTop+b.rearTop)/2,a.dark,.025);for(const A of[-1,1]){const D=new hi({color:A<0?13178406:482240,emissive:A<0?16717093:555519,emissiveIntensity:.2,clearcoat:1,roughness:.15});r.push(xt(e,l*.26,.15,.4,A*l*.17,b.roof+.3,(b.frontTop+b.rearTop)/2,D,.05))}if(o.id==="police")for(const A of[-1,1])xt(e,.035,.24,c*.58,A*l*.448,p*.73,0,a.dark,.01)}if(m)for(const A of[-1,1]){xt(e,1.2,1.15,c*.86,A*l*.5,-.1,0,a.dark,.25);const D=Pe?14:26;for(let z=0;z<D;z++)for(const N of[-.64,.51])xt(e,1.24,.09,.2,A*l*.5,N,-c*.4+z*c*.8/(D-1),a.alloy,.018)}if(o.id==="dozer"){n.position.set(0,.6,-c*.46),xt(n,l*1.35,1.8,.4,0,0,-1,a.paint,.13),xt(n,l*1.38,.18,.45,0,-.84,-1,a.alloy,.02);for(const A of[-1,1])ae(n,[A*l*.32,-.4,1],[A*l*.4,-.4,-1],.14,a.dark)}if(o.id==="excavator"){n.position.set(0,1,-1),ae(n,[0,0,0],[0,4,-3],.35,a.paint),ae(n,[0,4,-3],[0,1,-6],.25,a.paint),ae(n,[.34,1,-1],[.34,3.2,-2.8],.07,a.chrome),xt(n,2,1.4,1.4,0,.8,-6,a.dark,.16);for(let A=0;A<5;A++)xt(n,.2,.25,.5,-.8+A*.4,.13,-6.7,a.alloy,.02)}if(o.id==="dump"){n.position.set(0,1,c*.44),xt(n,l*.95,.25,c*.58,0,0,-c*.26,a.alloy,.04);for(const A of[-1,1]){xt(n,.18,1.3,c*.58,A*l*.47,.65,-c*.26,a.paint,.05);for(let D=0;D<6;D++)xt(n,.1,1.2,.1,A*l*.5,.65,-c*.5+D*c*.095,a.alloy,.012)}xt(n,l,1.3,.18,0,.65,-c*.55,a.paint,.05)}if(o.id==="tow"&&(ae(n,[0,1,1],[0,4,3],.24,a.paint),ae(n,[0,4,3],[0,1,4.7],.04,a.chrome),Br(n,.32,.06,0,.9,4.7,a.alloy,Math.PI*1.5)),o.id==="fire"){xt(e,1,.22,c*.7,0,3.45,1,a.dark,.04);for(const A of[-1,1])ae(e,[A*.55,3.6,-c*.23],[A*.55,3.6,c*.44],.07,a.chrome);for(let A=0;A<12;A++)xt(e,1.15,.07,.07,0,3.6,-c*.23+A*c*.06,a.chrome,.01);n.position.set(0,3.75,-2),ae(n,[0,0,0],[0,.3,-1.4],.11,a.chrome)}const M=new Ee({color:16724889,roughness:.9,transparent:!0,opacity:.9});for(let A=0;A<18;A++){const D=A%2?1:-1,z=Ge(i,new xn(.24,Pe?8:12,Pe?6:8),M,D*l*.441,.35+A%3*.18,-c*.4+(A/2|0)*c*.1);z.scale.set(.09,1,.9),z.visible=!1,z.castShadow=!1}const L=xt(e,l*.72,.015,c*.21,0,p+.11,E-.4,a.dark,.002);return L.visible=!1,t.userData={chassis:e,wheels:s,special:n,paint:a.paint,lights:r,stains:i,damage:L},t}const $a=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<=1024;function dM(o){const t=new zt,e=new zt,n=new zt,i=new zt,s=[],r=[];t.add(e),e.add(n,i);const a=Qr(o.color),l=o.width,c=o.length,d=c*.53,u=["sport","race","rare-sport"].includes(o.id),h=o.id==="race",f=["suv","secret-suv"].includes(o.id),m=u?1.32:f?2.05:1.62,v=u?.74:f?1.18:.92;Rd(e,o,a.paint);for(const N of[-1,1]){const F=-c*.21,G=c*.34,k=[[N*l*.438,.18,F],[N*l*.438,.18,G],[N*l*.395,v,G],[N*l*.395,v,F]];N>0&&k.reverse(),li(e,k,a.paint);for(const q of[-c*.32,c*.32]){const at=Ge(e,new Mn(o.wheel*1.04,o.wheel*1.04,.1,48),a.trim,N*l*.445,-.15,q);at.rotation.z=Math.PI/2}}xt(e,l*.79,.15,c*.86,0,-.27,0,a.dark,.05);const g=-c*.21,p=c*.34,x=-c*.035,y=c*.16,_=l*.395,S=l*(h?.29:.32);li(e,[[-_,v,g],[_,v,g],[S,m,x],[-S,m,x]],a.glass),li(e,[[_,v,p],[-_,v,p],[-S,m,y],[S,m,y]],a.glass);const w=[],E=$a?10:16;for(let N=0;N<=E;N++){const F=N/E;w.push(new R(0,m+.045+Math.sin(F*Math.PI)*.065,x+(y-x)*F))}for(let N=1;N<w.length;N++){const F=w[N-1],G=w[N];li(e,[[-S,F.y,F.z],[-S,G.y,G.z],[S,G.y,G.z],[S,F.y,F.z]],a.paint)}for(const N of[-1,1]){const F=[N*_,v,g],G=[N*S,m,x],k=[N*_,v,p],q=[N*S,m,y];li(e,[F,k,q,G],a.glass),ae(e,F,G,.037,a.paint),ae(e,k,q,.05,a.paint),ae(e,F,k,.026,a.trim),ae(e,G,q,.035,a.paint);const at=c*.09;ae(e,[N*_,v,at],[N*S,m,at],.048,a.trim);for(const Bt of[g+.15,p-.18])ae(e,[N*l*.438,.25,Bt],[N*_,v-.04,Bt],.009,a.trim);xt(e,.035,.045,.25,N*l*.439,v-.1,c*.055,a.chrome,.012),xt(e,.13,.13,c*.57,N*l*.445,.12,0,a.dark,.035),ae(e,[N*_,v+.07,g+.1],[N*(_+.25),v+.05,g+.02],.022,a.dark),xt(e,.26,.14,.36,N*(_+.29),v+.09,g,a.paint,.055),xt(e,.02,.09,.23,N*(_+.43),v+.095,g+.04,a.chrome,.02);const ut=N*l*.27,rt=u?.41:.64;xt(e,l*.23,.18,.14,ut,rt,-d+.06,a.dark,.05),xt(e,l*.205,.021,.021,ut,rt+.061,-d-.012,a.led,.008);for(let Bt=0;Bt<3;Bt++){const $t=Ge(e,new xn(.048,20,12),a.led,ut+(Bt-1)*l*.057,rt-.015,-d-.009);$t.scale.z=.25}xt(e,l*.24,.13,.09,N*l*.31,v-.14,d-.04,a.tail,.04),xt(e,l*.215,.025,.015,N*l*.31,v-.095,d+.012,a.tail,.005);for(const Bt of[-c*.32,c*.32])s.push(Pd(e,o,a,N,Bt,f)),Id(e,o,a,N,Bt),ae(e,[N*l*.18,0,Bt],[N*l*.46,-.15,Bt],.055,a.alloy);const Xt=Ge(e,new Mn(.095,.095,.42,24),a.chrome,N*l*.28,.015,d-.1);Xt.rotation.x=Math.PI/2,Ge(e,new To(.073,24),a.dark,N*l*.28,.015,d+.12)}xt(e,l*.77,.38,.45,0,.27,-d+.17,a.paint,.11),xt(e,l*.54,.21,.1,0,.25,-d-.08,a.dark,.04);for(let N=0;N<13;N++)xt(e,.018,.18,.018,-l*.24+N*l*.04,.25,-d-.14,a.alloy,.004);xt(e,l*.88,.085,.3,0,.05,-d+.06,a.dark,.025),xt(e,l*.83,.15,.22,0,.08,d-.03,a.dark,.04);for(let N=0;N<5;N++)xt(e,.03,.15,.36,(N-2)*l*.12,.05,d-.1,a.dark,.01);const P=Ge(e,new To(.055,24),a.chrome,0,u?.7:.89,-d-.01);if(P.rotation.x=-.18,u){const N=h?1.36:.99;for(const F of[-1,1])xt(e,.065,.35,.16,F*l*.29,N-.18,c*.43,a.dark,.015);if(xt(e,l*(h?1:.83),.055,.42,0,N,c*.43,a.dark,.02),h)for(const F of[-1,1])xt(e,.045,.22,.45,F*l*.5,N+.07,c*.43,a.dark,.018)}if(o.id==="police")for(const N of[-1,1]){xt(e,.021,.17,c*.47,N*l*.44,.48,0,a.dark,.005);const F=new hi({color:N<0?12390440:547016,emissive:N<0?16717611:1475583,emissiveIntensity:.2,roughness:.18,clearcoat:1});r.push(xt(e,l*.24,.12,.32,N*l*.15,m+.16,0,F,.03))}const b=document.createElement("canvas");b.width=256,b.height=96;const M=b.getContext("2d");M.fillStyle="#e0e7df",M.fillRect(0,0,256,96),M.fillStyle="#245343",M.font="bold 42px Arial",M.textAlign="center",M.fillText(h?"NW • 300":"NW • 200",128,65);const L=new Ni(b);L.colorSpace=He;const A=new Ee({map:L,roughness:.6});Ge(e,new wn(.58,.22),A,0,.36,d+.089);const D=new Ee({color:16724889,transparent:!0,opacity:0});for(let N=0;N<14;N++){const F=Ge(i,new xn(.2,$a?8:12,$a?6:8),D,(N%2?1:-1)*l*.443,.3+N%3*.15,-c*.36+Math.floor(N/2)*c*.1);F.scale.set(.05,1,1),F.visible=!1}const z=xt(e,l*.45,.012,c*.12,0,v-.015,-c*.35,a.dark,.002);return z.visible=!1,t.userData={chassis:e,wheels:s,special:n,stains:i,lights:r,damage:z,paint:a.paint},t}function Ve(o,t,e,n=0,i=0,s=0){const r=new Kt(t,e);return r.position.set(n,i,s),r.castShadow=!0,r.receiveShadow=!0,o.add(r),r}function ke(o,t,e,n,i){const s=new R(...t),r=new R(...e),a=r.clone().sub(s),l=Ve(o,new Mn(n,n,a.length(),16),i);return l.position.copy(s.add(r).multiplyScalar(.5)),l.quaternion.setFromUnitVectors(new R(0,1,0),a.normalize()),l}function Wi(o,t,e,n=0){const i=new Xr(t.map(([s,r])=>new nt(r,s)),80);return i.rotateX(Math.PI/2),Ve(o,i,e,0,n)}function wr(o,t,e){const n=new ye;return n.setAttribute("position",new Ht(t.flat(),3)),n.setAttribute("uv",new Ht([0,0,1,0,1,1,0,1],2)),n.setIndex([0,1,2,0,2,3]),n.computeVertexNormals(),Ve(o,n,e)}function wi(o,t,e,n=1){const i=[],s=[],r=[];for(let c=0;c<t.length;c++){const[d,u,h,f,m]=t[c];for(let v=0;v<=64;v++){const g=v<=32?v/32:2-v/32,p=5*m*(.2969*Math.sqrt(g)-.126*g-.3516*g*g+.2843*g**3-.1036*g**4);i.push(d*n,u+p*(v<=32?1:-1),h+g*f),r.push(g,c/(t.length-1))}if(c)for(let v=0;v<64;v++){const g=(c-1)*65+v,p=c*65+v;s.push(g,p,g+1,p,p+1,g+1)}}const l=new ye;return l.setAttribute("position",new Ht(i,3)),l.setAttribute("uv",new Ht(r,2)),l.setIndex(s),l.computeVertexNormals(),e.side=Xe,Ve(o,l,e)}function vu(o,t="#174f78"){const e=document.createElement("canvas");e.width=1024,e.height=128;const n=e.getContext("2d");n.font="600 65px Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle=t,n.fillText(o,512,64);const i=new Ni(e);return i.colorSpace=He,i.anisotropy=8,new Ee({map:i,transparent:!0,roughness:.4,depthWrite:!1,side:Xe})}function xu(o,t,e,n,i,s,r){const a=[],l=[],c=[],d=[[-11.8,.27],[-11.3,.61],[-10.6,.94],[-9.5,1.2],[-8,1.32]];for(let h=0;h<=8;h++)for(let f=0;f<=8;f++){const m=n+(i-n)*h/8,v=s+(r-s)*f/8;let g=1.32;for(let p=1;p<d.length;p++)if(m<=d[p][0]){const x=d[p-1],y=d[p];g=x[1]+(y[1]-x[1])*(m-x[0])/(y[0]-x[0]);break}if(g+=.027,a.push(e*Math.sin(v)*g,1.6+Math.cos(v)*g,m),l.push(h/8,f/8),h&&f){const p=h*9+f,x=p-9;c.push(x-1,p-1,x,x,p-1,p)}}const u=new ye;u.setAttribute("position",new Ht(a,3)),u.setAttribute("uv",new Ht(l,2)),u.setIndex(c),u.computeVertexNormals(),Ve(o,u,t)}function fM(o){const t=new zt,e=new zt,n=new zt,i=new zt,s=[],r=[],a=[];t.add(e),e.add(n,i);const l=Qr(o.color),c=new hi({color:1195109,metalness:.55,roughness:.23,clearcoat:1,side:Xe}),d=l.alloy;if(o.kind==="air"){Wi(e,[[-12,0],[-11.8,.27],[-11.3,.61],[-10.6,.94],[-9.5,1.2],[-8,1.32],[5.8,1.32],[7.5,1.17],[9,.91],[10.5,.56],[11.8,.12],[12,0]],l.paint,1.6),Wi(e,[[-10.3,.99],[-9.5,1.205],[-8,1.325],[5.8,1.325],[7.5,1.175],[9,.915]],c,1.6).scale.y=.62;for(const f of[-1,1]){xu(e,l.glass,f,-10.8,-9.8,.075,.66),xu(e,l.glass,f,-10.42,-9.08,.71,1.18),wr(e,[[f*.06,2.51,-10.08],[f*.68,2.4,-9.99],[f*.86,2.06,-10.29],[f*.06,2.13,-10.65]],l.glass),wr(e,[[f*.73,2.4,-9.95],[f*1.14,2.26,-9.25],[f*1.17,1.97,-9.45],[f*.91,2.06,-10.23]],l.glass);for(let y=0;y<22;y++){const _=-7.2+y*.56,S=_<5.8?1.32:1.3-(_-5.8)*.11;Ve(e,new xn(1,20,12),l.glass,f*(S*.952+.017),2.03,_).scale.set(.035,.195,.128);const E=Ve(e,new qn(.17,.018,6,24),d,f*(S*.959+.019),2.03,_);E.rotation.y=Math.PI/2,E.scale.set(.8,1.15,1)}for(const y of[-8.3,6.1])ke(e,[f*1.296,.93,y-.23],[f*1.296,2.33,y-.23],.012,l.trim),ke(e,[f*1.296,.93,y+.23],[f*1.296,2.33,y+.23],.012,l.trim),ke(e,[f*1.296,2.33,y-.23],[f*1.296,2.33,y+.23],.012,l.trim),ke(e,[f*1.32,1.54,y-.08],[f*1.32,1.54,y+.09],.026,d);const m=Ve(e,new wn(7,.72),vu("NORIMONO AIR"),f*1.283,2.42,-2.1);m.rotation.y=f*Math.PI/2,wi(e,[[.9,1.1,-3,6.1,.58],[3,1.18,-2.7,5,.43],[7,1.5,-.7,3.1,.27],[12.7,2,2.1,1.25,.11]],l.paint,f),wi(e,[[12.6,2,2.1,1.25,.11],[13.1,3.2,2.45,.75,.07],[13.15,3.65,2.65,.25,.04]],c,f),wi(e,[[.3,2.12,7.4,3.8,.23],[2.8,2.32,8.6,2.3,.15],[5,2.6,10.1,.8,.07]],l.paint,f),ke(e,[f*1.6,1.15,-2.92],[f*7,1.51,-.67],.035,d),ke(e,[f*7,1.51,-.67],[f*12.65,2.02,2.1],.024,d);for(const y of[3.1,4.8,6.5,8.2]){const _=-2.7+(y-3)*.41;ke(e,[f*y,1.31+(y-3)*.08,_+2],[f*(y+1.25),1.41+(y-3)*.08,_+2.4],.012,l.trim),Ve(e,new xn(1,24,16),l.paint,f*y,.99+(y-3)*.08,_+3).scale.set(.14,.16,.9)}const v=new zt;v.position.set(f*4.1,.36,-1.6),e.add(v),Wi(v,[[-1.72,.78],[-1.78,.88],[-1.58,1.01],[-1.1,1.02],[.6,.88],[1.55,.67],[1.6,.53],[.9,.54],[-1.25,.72],[-1.72,.78]],l.paint),Ve(v,new qn(.82,.085,12,64),l.chrome,0,0,-1.69),Wi(v,[[-1.6,.735],[-.65,.64]],l.dark);const g=new zt;g.position.z=-1.36,v.add(g),a.push(g);for(let y=0;y<24;y++){const _=y*Math.PI/12,S=wr(g,[[.18,0,0],[.7,.045,.1],[.69,.18,.15],[.17,.07,0]],d);S.rotation.z=_}const p=Ve(v,new Do(.19,.49,32),l.chrome,0,0,-1.57);p.rotation.x=-Math.PI/2,Wi(v,[[.9,.47],[1.65,.33],[1.88,.16]],l.dark),ke(e,[f*4.1,1.45,-.2],[f*4.1,.9,-.1],.2,d);const x=Ve(e,new xn(.08,16,12),new Ee({color:f<0?15016498:3604377,emissive:f<0?15016498:3604377,emissiveIntensity:2}),f*13.1,2.5,2.7);r.push(x)}const h=new zt;e.add(h),wi(h,[[0,0,7,4.5,.3],[2.7,0,8.5,2.7,.2],[5.1,0,10.5,.95,.08]],c),h.rotation.z=Math.PI/2,h.position.y=2.35;for(const f of[-1,1]){const m=Ve(e,new wn(1.8,1.1),vu("NW","#ffffff"),f*.12,5.65,10.7);m.rotation.y=f*Math.PI/2}for(const[f,m]of[[0,-7.9],[-1.5,1.3],[1.5,1.3]]){ke(e,[f,.8,m],[f,-.12,m],.095,l.chrome),ke(e,[f,.7,m+.5],[f,-.12,m],.045,d);const v=new zt,g=new zt;v.position.set(f,-.15,m),v.add(g),e.add(v);for(const p of[-1,1]){const x=Ve(g,new qn(.44,.14,12,40),l.rubber,p*.22,0,0);x.rotation.y=Math.PI/2;const y=Ve(g,new Mn(.25,.25,.11,28),d,p*.28,0,0);y.rotation.z=Math.PI/2}s.push({pivot:v,roll:g,front:m<0})}}else{Wi(e,[[-4.9,0],[-4.6,.65],[-3.5,1.35],[-1.5,1.6],[.4,1.5],[2,1.12],[3,.7],[3.5,.25]],l.paint,1.7),Ve(e,new xn(1,48,32),l.glass,0,2,-3.2).scale.set(1.27,1.09,1.55),ke(e,[0,1.3,-4.67],[0,2.95,-3.52],.045,l.paint);for(const v of[-1,1]){wr(e,[[v*1.32,1.7,-2.45],[v*1.49,1.7,-.2],[v*1.39,2.65,-.2],[v*1.19,2.85,-2.3]],l.glass),ke(e,[v*1.49,1.55,-.1],[v*1.37,2.8,-.1],.035,l.trim),ke(e,[v*1.5,1.4,.1],[v*1.5,1.4,.45],.045,l.chrome),ke(e,[v*1.7,-.53,-3.4],[v*1.7,-.53,2.4],.12,d),ke(e,[v*1.7,-.53,-3.4],[v*1.7,-.25,-4],.12,d);for(const g of[-2,1.5])ke(e,[v*.85,.5,g],[v*1.7,-.53,g],.09,d)}Wi(e,[[2.4,.65],[4.5,.43],[7,.27],[9,.15]],l.paint,1.8);const f=new zt;e.add(f),wi(f,[[0,0,7.4,1.6,.13],[2.8,0,8.5,.9,.09]],c),f.rotation.z=Math.PI/2,f.position.y=1.8;for(const v of[-1,1])wi(e,[[0,1.8,6.7,1.6,.15],[2.1,1.8,7.3,.65,.05]],l.paint,v);const m=new zt;m.position.set(.28,2.4,8.5),m.rotation.z=Math.PI/2,e.add(m),a.push(m),m.userData.axis="y";for(let v=0;v<4;v++){const g=new zt;g.rotation.y=v*Math.PI/2,m.add(g),wi(g,[[.08,0,0,.2,.03],[1.2,0,.08,.22,.025]],l.dark)}n.position.set(0,3.85,-.25),ke(e,[0,2.7,-.25],[0,4.2,-.25],.14,d);for(let v=0;v<4;v++){const g=new zt;g.rotation.y=v*Math.PI/2,n.add(g),wi(g,[[.35,0,0,.3,.055],[2,.05,-.1,.5,.05],[8.2,.13,.1,.4,.025],[8.6,.15,.35,.22,.015]],l.dark),ke(n,[0,-.3,0],[Math.cos(v*Math.PI/2)*.7,0,Math.sin(v*Math.PI/2)*.7],.055,d)}for(const v of[-1,1]){const g=Ve(e,new Mn(.22,.28,.9,32),d,v*.56,3.11,1.35);g.rotation.x=Math.PI/2}}const u=Ve(e,new xn(.35,12,8),l.dark,0,2,-2);return u.visible=!1,t.userData={chassis:e,wheels:s,special:n,paint:l.paint,lights:r,stains:i,damage:u,fanRotors:a},t}const Ci=Lt(1581350,.55,.5),pM=Lt(1382169,0,.92),yo=Lt(10003882,.8,.3),Ps=Lt(2641757,.18,.28),Ka=new Map;function br(o,t,e,n,i,s,r,a,l=.16){const c=`${t}|${e}|${n}|${l}`;Ka.has(c)||Ka.set(c,new es(t,e,n,1,Math.min(l,t*.2,e*.2,n*.2)));const d=new Kt(Ka.get(c),a);return d.position.set(i,s,r),o.add(d),d}function mM(o,t,e,n,i,s){const r=new zt;r.position.set(e,-.15,n),o.add(r);const a=new zt;r.add(a);const l=ie(a,i,i,i*.72,0,0,0,0,12,pM);l.rotation.z=Math.PI/2;const c=ie(a,i*.48,i*.48,i*.78,0,0,0,0,10,yo);c.rotation.z=Math.PI/2,t.push({pivot:r,roll:a,front:s})}function gM(o,t,e,n,i,s){const r=["fire","ambulance","tow","dump","bus"].includes(e.id),a=["dozer","excavator"].includes(e.id),l=e.id==="monster";if(br(o,n,l?1.15:r?1.35:.85,i*.8,0,.65,0,e.paint,l?.28:.16),e.id==="bus"||e.id==="ambulance"||e.id==="fire"){br(o,n*.92,2.4,i*.72,0,2,0,e.paint,.2);for(const u of[-1,1])for(let h=-i*.25;h<=i*.25;h+=i*.18)X(o,.04,.75,i*.12,u*n*.47,2.35,h,0,Ps)}else if(a)br(o,n*.72,1.8,i*.34,0,1.75,i*.15,e.paint,.18),X(o,n*.62,1,i*.04,0,2,i*.33,0,Ps);else{const u=["sport","race"].includes(e.id);br(o,n*.78,u?.85:1.35,i*.38,0,u?1.25:1.55,.18,e.paint,u?.22:.18),X(o,n*.65,.72,i*.04,0,u?1.35:1.7,-.02,0,Ps);for(const h of[-1,1])X(o,.035,u?.48:.72,i*.22,h*n*.395,u?1.35:1.68,.2,0,Ps)}const d=r||a?i*.31:i*.29;for(const u of[-d,d])for(const h of[-1,1])mM(o,s,h*(n*.5+.08),u,e.wheel,u<0);if(l){X(o,n*.9,.2,i*.62,0,2.25,0,0,Ci);for(const u of[-1,1])ue(o,new R(u*n*.35,.7,-i*.22),new R(u*n*.35,2.2,i*.22),.08,11977156)}if(["sport","race"].includes(e.id)&&(X(o,n*1.05,.12,.7,0,1.8,i*.35,0,Ci),X(o,n*1.08,.12,.5,0,.3,-i*.43,0,Ci)),e.id==="dozer"&&(t.position.set(0,.7,-i*.48),X(t,n*1.28,1.55,.35,0,0,-.65,0,e.paint)),e.id==="excavator"&&(t.position.set(0,1,-1),ue(t,new R(0,0,0),new R(0,3,-2.2),.28,e.color),ue(t,new R(0,3,-2.2),new R(0,.8,-5),.24,e.color),X(t,1.7,1.1,1.1,0,.55,-5,0,yo)),e.id==="dump"){t.position.set(0,1,i*.38),X(t,n*.9,.25,i*.52,0,0,-i*.24,0,e.paint);for(const u of[-1,1])X(t,.16,1.1,i*.52,u*n*.44,.55,-i*.24,0,e.paint)}e.id==="tow"&&(ue(t,new R(0,1,1),new R(0,3.4,2.7),.22,e.color),ue(t,new R(0,3.4,2.7),new R(0,.8,4.2),.07,3423040)),e.id==="fire"&&(X(o,.8,.25,i*.65,0,3.45,.4,0,yo),t.position.set(0,3.5,-2),ie(t,.13,.17,1.7,0,.1,-.5,0,10,yo).rotation.x=Math.PI/2),e.id==="tractor"&&(X(o,n*.65,1.5,i*.28,0,1.55,i*.12,0,e.paint),X(o,n*.85,.18,i*.25,0,2.45,i*.14,0,Ci))}function vM(o,t,e,n){const i=ie(o,1,.55,2.2,0,.1,0,t.color,8,t.paint);i.scale.set(e*.5,.8,n*.45),i.rotation.x=Math.PI/2,X(o,e*.68,.35,n*.52,0,1,.3,0,Lt(15985365)),X(o,e*.58,1.15,n*.25,0,1.65,.7,0,Ps),X(o,.7,1.2,1,0,.5,n*.42,0,Ci)}function xM(o,t,e,n,i,s){if(on(o,1,0,1,0,e.color,e.paint).scale.set(n*.48,1.2,i*.38),on(o,1,0,1.55,-i*.18,0,Ps).scale.set(n*.38,.72,i*.14),e.kind==="air"){X(o,i*.72,.18,i*.12,0,.95,0,0,e.paint),X(o,i*.28,.14,i*.1,0,1.35,i*.32,0,e.paint),X(o,.18,2.2,1.5,0,2.05,i*.32,0,e.paint),t.position.set(0,1,-i*.4);const l=X(t,n*.12,3.4,.12,0,0,0,0,Ci);s.push(l),l.userData.axis="z"}else X(o,.55,.55,i*.52,0,1,i*.36,0,e.paint),X(o,.16,2,1.2,0,1.8,i*.62,0,e.paint),t.position.set(0,3,0),ie(t,.16,.16,1,0,.1,0,0,8,yo),X(t,i*.78,.1,.32,0,.65,0,0,Ci),X(t,.32,.1,i*.78,0,.65,0,0,Ci)}function _M(o){const t=new zt,e=new zt,n=new zt,i=[],s=[],r=[];t.add(e),e.add(n);const a=Lt(o.color,.42,.46),l={...o,paint:a},c=o.width,d=o.length;o.kind==="water"?vM(e,l,c,d):o.kind==="air"||o.kind==="heli"?xM(e,n,l,c,d,r):gM(e,n,l,c,d,i);for(const m of[-1,1])X(e,c*.18,.22,.12,m*c*.3,.9,-d*.42,0,Lt(15334399,.1,.2)),X(e,c*.18,.2,.12,m*c*.3,.85,d*.42,0,Lt(16724024,.1,.28));if(["police","ambulance","fire"].includes(o.id))for(const m of[-1,1]){const v=m<0?16721721:1477887,g=new Ee({color:v,emissive:v,emissiveIntensity:.3});s.push(X(e,.82,.22,.42,m*.52,o.id==="police"?2.5:3.42,-.65,0,g))}const u=new zt,h=new Ee({color:16724889,roughness:.95,transparent:!0,opacity:.9});e.add(u);for(let m=0;m<4;m++){const v=on(u,.22,(m%2?1:-1)*c*.48,.55+(m>>1)*.3,-d*.22+m*d*.14,16724889,h);v.scale.set(.18,1,.85),v.visible=!1}const f=X(e,c*.7,.012,d*.45,0,1.05,0,4340015);return f.visible=!1,t.userData={chassis:e,wheels:i,special:n,paint:a,lights:s,stains:u,damage:f,fanRotors:r},t}const yM=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<=1024;function _u(o){return yM?_M(o):Dd(o)}function Dd(o){if(o.kind==="air"||o.kind==="heli")return fM(o);if(["car","police","sport","race","rare-sport","suv","secret-suv"].includes(o.id))return dM(o);if(o.kind==="ground")return uM(o);const t=new zt,e=new zt;t.add(e);const n=[],i=new zt;e.add(i);const s=Qr(o.color),r=s.paint,a=Lt(9477026,.85,.28),l=Lt(1515559,.7,.38),c=Lt(1513754,0,.92),d=s.glass,u=o.width,h=o.length,f=o.wheel,m=o.id==="monster",v=["fire","ambulance","tow","dump","bus"].includes(o.id),g=["dozer","excavator"].includes(o.id),p=X(e,u,.85,h,0,.7,0,o.color,r);if(p.geometry=new es(u,.85,h,2,.2),p.castShadow=!0,X(e,u*.78,.35,h*.9,0,-.05,0,0,l),o.kind==="water"){p.scale.set(.92,.65,.8),ie(e,1,.6,2,0,-.4,0,o.color,8,r).scale.set(u/2,1,h/2),X(e,u*.72,.3,h*.55,0,1,1,0,Lt(15129012)),X(e,u*.65,1.2,2.5,0,1.4,0,0,d);for(const E of[-1,1])ue(e,new R(E*u*.43,.9,-h*.3),new R(E*u*.43,.9,h*.35),.07,13160660);X(e,1,1.8,.9,0,0,h*.45,0,l)}else if(o.kind==="air"||o.kind==="heli")if(p.scale.set(.65,.9,.8),on(e,1,0,1,0,o.color,r).scale.set(u*.52,1.5,h*.44),on(e,1,0,1.8,-2,0,d).scale.set(u*.46,1.15,2.3),o.kind==="air"){const P=X(e,19,.22,2.2,0,.9,.3,0,r);P.rotation.z=.015,X(e,7,.18,1.7,0,1.6,h*.38,0,r),X(e,.2,2.8,2,0,2.4,h*.36,0,r),i.position.set(0,1,-h*.45),X(i,.18,4.2,.15,0,0,0,0,l)}else{X(e,.7,.65,8,0,1,6,0,r),X(e,.2,2.5,1.3,0,2,9,0,r),i.position.set(0,3,0),ie(i,.2,.2,1.2,0,.2,0,0,8,a),X(i,17,.12,.45,0,.8,0,0,l),X(i,.45,.12,17,0,.8,0,0,l);for(const P of[-1,1])ue(e,new R(P*1.6,-.6,-3),new R(P*1.6,-.6,3),.14,11384249),ue(e,new R(P*1.6,-.6,-2),new R(P*.7,.5,-2),.1,11384249)}else{const w=v?-h*.23:g?h*.12:-.25,E=v?h*.28:h*.44,P=m?2.1:v?2.6:1.55,b=X(e,u*.84,P,E,0,1.2+P/2,w,0,r);b.geometry=new es(u*.84,P,E,2,.2),X(e,u*.77,P*.65,.08,0,1.4+P*.6,w-E/2-.045,0,d),X(e,u*.76,P*.6,.08,0,1.5+P*.5,w+E/2+.05,0,d);for(const M of[-1,1])X(e,.07,P*.62,E*.75,M*u*.425,1.4+P*.55,w,0,d),X(e,.09,.045,E*.92,M*u*.43,1.32,w,0,l),X(e,.13,.09,.42,M*u*.435,1.55,w+.6,0,a),ue(e,new R(M*u*.43,2,w-E*.42),new R(M*u*.61,2,w-E*.48),.055,7502464),X(e,.25,.4,.6,M*u*.62,2,w-E*.48,0,a),X(e,.25,.3,h*.8,M*u*.52,.25,0,0,a),ie(e,.14,.14,1.8,M*u*.35,.3,h*.46,0,10,a).rotation.x=Math.PI/2;if(v&&o.id!=="tow"&&o.id!=="dump"&&(X(e,u*.94,2.4,h*.52,0,1.8,h*.2,0,r),o.id==="bus"))for(let M=0;M<5;M++)for(const L of[-1,1])X(e,.07,1.3,1.2,L*u*.48,2.5,-1+M*1.6,0,d);for(const M of[-h*.32,h*.32])for(const L of[-1,1]){const A=new zt;A.position.set(L*(u*.5+.15),-.15,M),e.add(A);const D=new zt;A.add(D);const z=ie(D,f,f,f*.85,0,0,0,0,24,c);z.rotation.z=Math.PI/2,z.castShadow=!0;for(let G=0;G<(m?20:12);G++){const k=G*Math.PI*2/(m?20:12),q=X(D,f*.84,.1,f*.19,0,Math.sin(k)*f,Math.cos(k)*f,0,c);q.rotation.x=-k}const N=ie(D,f*.56,f*.56,.12,L*f*.46,0,0,0,16,a);N.rotation.z=Math.PI/2;const F=ie(D,f*.32,f*.32,.14,L*f*.53,0,0,0,12,l);F.rotation.z=Math.PI/2;for(let G=0;G<6;G++){const k=G*Math.PI/3,q=X(D,.15,f*.62,.12,L*f*.54,Math.sin(k)*f*.23,Math.cos(k)*f*.23,0,a);q.rotation.x=-k}if(X(e,.5,.25,f*2.45,L*u*.51,f*.75,M,0,r),ue(e,new R(L*u*.28,.4,M),new R(L*u*.52,-.2,M),m?.15:.08,12437195),m){const G=new Kt(new qn(.22,.065,5,10),a);for(let k=0;k<6;k++){const q=G.clone();q.rotation.x=Math.PI/2,q.position.set(L*u*.4,.2+k*.16,M),e.add(q)}}n.push({pivot:A,roll:D,front:M<0})}if(g)for(const M of[-1,1]){X(e,1.3,1.3,h*.85,M*u*.5,-.2,0,0,c);for(let L=0;L<12;L++)X(e,1.35,.14,.25,M*u*.5,.5,-h*.39+L*h*.071,0,a)}}for(const w of[-1,1])X(e,u*.19,.28,.12,w*u*.31,1,-h/2-.07,0,Lt(15071231,.2,.15)),X(e,u*.19,.24,.12,w*u*.34,.95,h/2+.07,0,Lt(16720932));for(let w=0;w<6;w++)X(e,u*.4,.045,.13,0,.54+w*.1,-h/2-.1,0,a);for(const w of[-h/2-.15,h/2+.15])X(e,u*1.03,.3,.32,0,.22,w,0,a);const x=[];if(["police","ambulance","fire"].includes(o.id)){for(const w of[-1,1]){const E=new Ee({color:w<0?16721721:1477887,emissive:w<0?16715808:415231,emissiveIntensity:.3});x.push(X(e,1,.25,.55,w*.65,3.9,-1,0,E))}o.id==="ambulance"&&(X(e,.08,.3,1.6,u*.48,2,2,14558510),X(e,.08,1.4,.3,u*.48,2,2,14558510))}if(m){for(let w=-2;w<=2;w++)X(e,.5,.24,.25,w*.72,3.5,-1.8,0,Lt(16318463));for(const w of[-1,1])ue(e,new R(w*1.65,1.2,1.7),new R(w*1.65,3.4,1.7),.13,2699834);X(e,3.4,.18,.2,0,3.4,1.7,0,l),X(e,2.5,.4,.65,0,-.2,-h*.4,0,a)}if(["race","sport"].includes(o.id)){X(e,u*1.2,.15,1,0,2,h*.42,0,l);for(const w of[-1,1])X(e,.15,.8,.25,w*u*.32,1.6,h*.42,0,l);X(e,u*1.1,.13,.6,0,.15,-h*.5,0,l)}if(o.id==="dozer"&&(i.position.set(0,.6,-h*.46),X(i,u*1.35,1.8,.4,0,0,-1,0,r)),o.id==="excavator"&&(i.position.set(0,1,-1),ue(i,new R(0,0,0),new R(0,4,-3),.4,o.color),ue(i,new R(0,4,-3),new R(0,1,-6),.3,o.color),X(i,2,1.4,1.4,0,.8,-6,0,a)),o.id==="dump"){i.position.set(0,1,h*.44),X(i,u*.95,.25,h*.58,0,0,-h*.26,0,r);for(const w of[-1,1])X(i,.18,1.3,h*.58,w*u*.47,.65,-h*.26,0,r);X(i,u,1.3,.18,0,.65,-h*.55,0,r)}if(o.id==="tow"&&(ue(i,new R(0,1,1),new R(0,4,3),.3,o.color),ue(i,new R(0,4,3),new R(0,1,4.7),.08,3423040)),o.id==="fire"){X(e,1,.35,h*.7,0,3.3,1,0,a);for(let w=0;w<9;w++)X(e,1.4,.1,.13,0,3.55,-2+w*.7,0,a);i.position.set(0,3.6,-2),ie(i,.15,.2,2,0,.1,-.6,0,12,a).rotation.x=Math.PI/2}const y=new zt,_=new Ee({color:16724889,roughness:.95,transparent:!0,opacity:.9});e.add(y);for(let w=0;w<14;w++){const E=w%2?1:-1,P=on(y,.3,E*u*.51,.35+w%3*.22,-h*.4+(w/2|0)*h*.12,16724889,_);P.scale.set(.15,1,.9),P.visible=!1}const S=X(e,u*.85,.015,h*.64,0,1.14,0,4340015);return S.visible=!1,t.userData={chassis:e,wheels:n,special:i,paint:r,lights:x,stains:y,damage:S},t}const Sr=(o,t,e)=>Math.max(t,Math.min(e,o));class Ja{constructor(t,e,n=e.x,i=e.z,s=2){if(this.game=t,this.config=e,this.mesh=_u(e),pu(this.mesh,e),t.scene.add(this.mesh),this.ride=e.kind==="water"?1:e.wheel+.25,this.body=t.physics.box(n,s+this.ride,i,e.width,.9,e.length,e.mass),this.body.collisionFilterGroup=2,this.body.collisionFilterMask=-13,this.body.fixedRotation=!0,this.body.updateMassProperties(),this.body.linearDamping=0,this.accessories=[],["dozer","excavator","dump"].includes(e.id)){const r=e.id==="dozer"?[[0,0,-1,e.width*1.35,1.8,.4]]:e.id==="excavator"?[[0,.8,-6,2,1.4,1.4]]:[[0,0,-e.length*.26,e.width,.25,e.length*.58],[-e.width*.47,.65,-e.length*.26,.18,1.3,e.length*.58],[e.width*.47,.65,-e.length*.26,.18,1.3,e.length*.58],[0,.65,-e.length*.55,e.width,1.3,.18]];for(const[a,l,c,d,u,h]of r){const f=t.physics.box(n,s,i,d,u,h);f.type=Ct.KINEMATIC,f.collisionFilterGroup=8,f.collisionFilterMask=5,this.accessories.push({body:f,local:new R(a,l,c),worldPosition:new R,worldQuaternion:new Ii})}}this.hp=100,this.yaw=0,this.speed=0,this.boost=0,this.park=!1,this.parking=!1,this.specialOn=["police","ambulance","fire"].includes(e.id),this.lastSpecial=!1,this.lastJump=!1,this.surfacePitch=0,this.grounded=!1,this.safe=new R(n,s+this.ride,i),this.waterTime=0,this.flipTime=0,this.hitCooldown=0,this.dirty=0,this.paintColor=0,this.paintTime=0,this.washTime=0,this.ray=new Ki,this.frontRay=new Ki,this.rearRay=new Ki,this.rayFrom=new C,this.rayTo=new C,this.idleGroundTimer=Math.random()*.1,this.body.addEventListener("collide",r=>{const a=Math.abs(r.contact.getImpactVelocityAlongNormal());a>8&&this.hitCooldown<=0&&this===t.active&&(this.damage((a-7)*1.8),this.hitCooldown=.7,t.audio.effect("hit"))}),this.sync(0,{})}update(t,e,n){const i=this.body,s=this.config;this.megaBoost=Math.max(0,(this.megaBoost||0)-t),this.megaFlight&&(this.megaFlight.elapsed+=t),this.jumpTime=Math.max(0,(this.jumpTime||0)-t),this.hitCooldown-=t,this.boost=Math.max(0,this.boost-t);const r=i.position;if(this.speed=-i.velocity.x*Math.sin(this.yaw)-i.velocity.z*Math.cos(this.yaw),!n){this.idleGroundTimer-=t,this.idleGroundTimer<=0&&(this.idleGroundTimer=.1,this.ray.reset(),this.rayFrom.set(r.x,r.y+1.4,r.z),this.rayTo.set(r.x,r.y-this.ride-2,r.z),this.game.physics.world.raycastClosest(this.rayFrom,this.rayTo,{collisionFilterMask:5,skipBackfaces:!0},this.ray)),this.ray.hasHit&&(r.y=this.ray.hitPointWorld.y+this.ride,i.velocity.y=0,i.force.y+=s.mass*24),s.kind==="water"&&this.game.world.isWater(r.x,r.z)&&(r.y=.8,i.velocity.y=0,i.force.y=s.mass*24),i.velocity.x*=.94,i.velocity.z*=.94,this.sync(t,{});return}(e.accel||e.brake||e.special||e.down||e.steer||e.jump)&&this.body.wakeUp();let a=e.accel||0,l=e.brake||0,c=e.steer||0;const d=!!e.special;if(this.megaFlight&&(a=1),e.jump&&!this.lastJump&&this.grounded&&this.hp>0&&(i.velocity.y=13*s.jump,this.jumpTime=.4,this.grounded=!1,this.game.audio.effect("jump")),this.lastJump=!!e.jump,d&&!this.lastSpecial&&this.activate(),this.lastSpecial=d,this.hp<=0&&(a=0,l=1),this.parking&&(a=0,l=1,Math.abs(this.speed)<.6&&(this.parking=!1,this.park=!0,this.parkPosition=i.position.clone())),this.park){i.velocity.setZero(),i.angularVelocity.setZero(),this.parkPosition&&i.position.copy(this.parkPosition),this.sync(t,e);return}this.ray.reset(),this.rayFrom.set(r.x,r.y+1.4,r.z),this.rayTo.set(r.x,r.y-this.ride-2,r.z),this.game.physics.world.raycastClosest(this.rayFrom,this.rayTo,{collisionFilterMask:5,skipBackfaces:!0},this.ray);const u=this.game.world.isWater(r.x,r.z),h=s.kind==="water";s.kind==="air"||s.kind;let f=this.ray.hasHit?this.ray.hitPointWorld.y:-20;if(h&&u&&(f=0),this.grounded=r.y<=f+this.ride+.85&&i.velocity.y-(this.ray.hasHit&&this.ray.hitNormalWorld.y>.4?(this.ray.hitNormalWorld.x*Math.sin(this.yaw)+this.ray.hitNormalWorld.z*Math.cos(this.yaw))*this.speed/this.ray.hitNormalWorld.y:0)<7,this.megaFlight&&this.megaFlight.elapsed<this.megaFlight.duration-.08?this.grounded=!1:this.megaFlight&&this.grounded&&(this.megaFlight=null,this.megaBoost=0),s.kind==="air"&&a&&!l&&this.speed>12&&(this.grounded=!1),s.kind==="heli"&&d&&(this.grounded=!1),this.grounded){const w=f+this.ride;r.y=w,i.force.y+=s.mass*24;const E=this.ray.hitNormalWorld;i.velocity.y=E.y>.4?(E.x*Math.sin(this.yaw)+E.z*Math.cos(this.yaw))*this.speed/E.y:0;const P=this.frontRay,b=this.rearRay,M=s.length*.29;P.reset(),b.reset();for(const[L,A]of[[P,1],[b,-1]]){const D=r.x-Math.sin(this.yaw)*M*A,z=r.z-Math.cos(this.yaw)*M*A;this.rayFrom.set(D,r.y+2,z),this.rayTo.set(D,r.y-this.ride-3,z),this.game.physics.world.raycastClosest(this.rayFrom,this.rayTo,{collisionFilterMask:5,skipBackfaces:!0},L)}P.hasHit&&b.hasHit&&Math.abs(P.hitPointWorld.y-b.hitPointWorld.y)<M*1.5?this.surfacePitch=Math.atan2(P.hitPointWorld.y-b.hitPointWorld.y,M*2):this.surfacePitch=Math.atan2(E.x*Math.sin(this.yaw)+E.z*Math.cos(this.yaw),E.y)}else this.surfacePitch*=Math.exp(-t*3);h&&u&&this.jumpTime<=0&&r.y<1.7&&(i.velocity.y=(.8+Math.sin(this.game.time*2)*.12-r.y)*5,this.grounded=!0);let m=s.max/3.6*Math.max(this.boost>0?1.65:1,this.megaBoost>0?3:1);u&&!h&&r.y<4&&(m*=s.id==="monster"?.65:.18),h&&!u&&(m=1.5),this.hp<15&&(m*=.4);let v=l?this.speed>1?0:-m*.36:a?m:0;const g=l&&this.speed>0?32:a?m*.6:9;let p=this.speed+Sr(v-this.speed,-g*t,g*t);(this.hp<=0||this.parking&&this.speed<=1)&&(p=0),this.yaw-=c*Sr(Math.abs(p)/5,0,1)*(3.3/(1+Math.abs(p)*.045))*t*(p<0?-1:1);const x=this.grounded?1-Math.exp(-t*(r.y>130?4:10)):.07,y=-Math.sin(this.yaw)*p,_=-Math.cos(this.yaw)*p,S=(i.velocity.x*Math.cos(this.yaw)-i.velocity.z*Math.sin(this.yaw))*(1-x);if(i.velocity.x=y+Math.cos(this.yaw)*S,i.velocity.z=_-Math.sin(this.yaw)*S,s.kind==="air"&&!this.megaFlight&&Math.abs(p)>10){const w=e.down||l?-9:a?Sr((p-10)*.65,0,13):-3;i.force.y+=s.mass*24,i.velocity.y+=(w-i.velocity.y)*t*2}if(s.kind==="heli"&&!this.megaFlight){const w=e.down?-8:d?10:r.y>5?0:-2;i.force.y+=s.mass*24,i.velocity.y+=(w-i.velocity.y)*t*4}if(this.megaFlight&&!this.grounded&&(i.force.y+=s.mass*(24-this.megaFlight.gravity)),r.y>300&&!this.megaFlight&&(i.velocity.y=Math.min(i.velocity.y,-3)),i.quaternion.setFromEuler(this.surfacePitch,this.yaw,0,"YXZ"),i.angularVelocity.setZero(),u&&!h&&r.y<1.4?(this.waterTime+=t,this.clean(t*.15),this.waterTime>3&&this.respawn()):this.waterTime=0,!u&&this.grounded&&f<80&&this.game.time%1<t&&this.safe.set(r.x,r.y,r.z),(Math.abs(r.x)>1e3||Math.abs(r.z)>1e3||r.y<-12)&&this.respawn(),this.towed){this.towed.body.wakeUp();const w=this.towed.body.position,E=new C(r.x+Math.sin(this.yaw)*12,r.y,r.z+Math.cos(this.yaw)*12);this.towed.body.velocity.x=(E.x-w.x)*3,this.towed.body.velocity.z=(E.z-w.z)*3,this.towed.yaw=this.yaw}s.id==="fire"&&d&&this.game.gimmicks.water(this,t),this.dirty=Math.max(0,this.dirty-t*5e-4),this.paintTime=Math.max(0,this.paintTime-t),this.sync(t,e)}sync(t,e){this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion);const n=this.mesh.userData,i=(e.steer||0)*Math.min(Math.abs(this.speed)*.009,.13);n.chassis.rotation.z=yn.lerp(n.chassis.rotation.z,i,.12),n.chassis.rotation.x=yn.lerp(n.chassis.rotation.x,e.brake?.07:e.accel?-.045:0,.1);for(const s of n.wheels)s.roll.rotation.x-=this.speed*t/this.config.wheel,s.front&&(s.pivot.rotation.y=-(e.steer||0)*.5),s.pivot.position.y=yn.lerp(s.pivot.position.y,this.grounded?-.15:-.45,.15);for(const s of n.fanRotors||[])s.rotation[s.userData.axis||"z"]+=t*(this===this.game.active?38:1);this.config.kind==="heli"&&(n.special.rotation.y+=t*(this===this.game.active?32:1)),["dozer","excavator","dump"].includes(this.config.id)&&(n.special.rotation.x=yn.lerp(n.special.rotation.x,this.specialOn?-.7:0,.05));for(let s=0;s<n.lights.length;s++){const r=this.specialOn&&Math.sin(this.game.time*15+s*Math.PI)>.1;n.lights[s].material.emissiveIntensity=r?9:.12,n.lights[s].userData.flare&&(n.lights[s].userData.flare.material.opacity=r?.85:0)}if(n.emergencyLight&&(n.emergencyLight.intensity=this===this.game.active&&this.specialOn?Math.sin(this.game.time*15)>0?18:2:0),n.damage.visible=this.hp<70,n.chassis.scale.y=this.hp<40?.95:1,this.accessories.length){this.mesh.updateMatrixWorld(!0);for(const s of this.accessories)s.worldPosition.copy(s.local).applyMatrix4(n.special.matrixWorld),n.special.getWorldQuaternion(s.worldQuaternion),s.body.position.copy(s.worldPosition),s.body.quaternion.copy(s.worldQuaternion),s.body.velocity.copy(this.body.velocity),s.body.aabbNeedsUpdate=!0}this.hp<40&&this===this.game.active&&Math.random()<t*14&&this.game.particles.emit(this.body.position,5593179,1,2,"smoke")}setPresentationDetail(t){if(!this.game.mobile||!!this.highDetail===t)return;const e=this.mesh,n=t?Dd(this.config):_u(this.config);if(n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.visible=e.visible,pu(n,this.config),md(n),this.game.scene.add(n),e.removeFromParent(),this.highDetail&&e.traverse(i=>i.geometry?.dispose()),this.mesh=n,this.highDetail=t,this.dirty>.02)for(const i of n.userData.stains.children)i.material.color.set(this.paintColor),i.material.opacity=this.dirty,i.visible=!0;this.sync(0,{})}activate(){const t=this.config.id;["police","ambulance","dozer","excavator","dump"].includes(t)?(this.specialOn=!this.specialOn,this.game.audio.effect("success")):t==="tow"?(this.towed?this.towed=null:this.towed=this.game.vehicles.find(e=>e!==this&&e.body.position.distanceTo(this.body.position)<25),this.game.toast(this.towed?"フック！ ひっぱろう":"フックを はなしたよ")):this.config.kind==="ground"&&t!=="fire"&&this.grounded&&(this.body.velocity.y=12*this.config.jump,this.game.audio.effect("jump"))}togglePark(){this.park||this.parking?(this.park=!1,this.parking=!1):this.parking=!0}damage(t){this.hp=Sr(this.hp-t,0,100)}repair(){this.hp=100,this.game.particles.emit(this.body.position,16772746,35,8),this.game.audio.effect("repair"),this.game.toast("ピカピカ！ なおったよ")}stain(t,e=!1){this.paintColor=t,this.paintTime=18,this.dirty=Math.min(1,this.dirty+.4);for(const n of this.mesh.userData.stains.children)n.material.color.set(t),n.material.opacity=this.dirty,n.visible=!0;this.game.particles.emit(this.body.position,t,24,6),this.game.audio.effect(e?"mud":"paint")}clean(t=1){this.dirty=Math.max(0,this.dirty-t);for(const e of this.mesh.userData.stains.children)e.material.opacity=this.dirty,e.visible=this.dirty>.02;this.dirty<=.02&&(this.paintTime=0)}respawn(){this.megaFlight=null,this.megaBoost=0,this.body.position.copy(this.safe),this.body.position.y+=2,this.body.velocity.setZero(),this.body.angularVelocity.setZero(),this.body.quaternion.setFromEuler(0,this.yaw,0),this.waterTime=0,this.park=!1,this.parking=!1,this.game.toast("だいじょうぶ！ もういちど")}}const Qa=[["monster","モンスタートラック",260,15299617,4.8,7.8,1.65,9,"ground",0,22,4,"大きなタイヤで段差に強い。最高ジャンプ！"],["police","パトカー",320,15857144,2.65,6.1,.64,5,"ground",14,12,2.4,"曲がりやすくて速い。サイレンも鳴らせるよ。"],["ambulance","きゅうきゅうしゃ",280,16118761,3.8,8,.9,7,"ground",70,-118,1.8,"安定して走れる救急車。サイレン付き。"],["fire","しょうぼうしゃ",240,14232871,4,10,1,10,"ground",100,-112,1.3,"水を出して火を消せる、力持ちの消防車。"],["tow","レッカーしゃ",230,15248678,3.8,8.5,1,9,"ground",625,18,1.6,"近くの乗り物をフックで引っぱれるよ。"],["dozer","ブルドーザー",200,15316268,5,7,1.1,15,"ground",646,24,1.1,"重くて丈夫。ブレードで物を押して進もう。"],["excavator","ショベルカー",200,15903786,4.8,7,1.1,12,"ground",667,24,1.2,"大きなアームを動かして遊べる重機。"],["dump","ダンプカー",220,14652974,4.4,9,1.2,12,"ground",688,24,1.4,"大きな荷台が動く、安定したダンプカー。"],["bus","バス",240,4893633,3.8,12,.9,8,"ground",-70,-75,1.5,"長い車体でゆったり走れる。運転も安定。"],["car","じょうようしゃ",300,4230826,2.5,5.6,.61,5,"ground",-15,12,2.2,"素直に曲がる、はじめてでも運転しやすい車。"],["sport","スポーツカー",420,13977385,2.9,6.4,.63,4,"ground",580,560,3.2,"加速が鋭い高速車。ジャンプも得意。"],["race","レーシングカー",500,2652360,3.15,7.1,.7,4,"ground",600,560,3.5,"最高速500km/h。サーキット最速のマシン。"],["suv","オフロードSUV",280,6848065,3.8,7.5,1.1,8,"ground",560,-455,3.8,"山道と段差が得意。とても高く跳べるよ。"],["tractor","トラクター",210,3768652,3.5,5.5,1.15,8,"ground",-100,-680,1,"ゆっくり安定。のんびり景色を楽しめる。"],["plane","ひこうき",500,15067113,3.8,24,.65,5,"air",-640,-570,1.5,"滑走して空へ。世界を一気に飛び回れる。"],["heli","ヘリコプター",360,14923819,3.4,14,.65,5,"heli",-600,-570,1,"その場から上昇できる。空中散歩にぴったり。"],["boat","ボート",260,16115918,4,9,.5,5,"water",-860,65,2,"水の上を安定して進む、扱いやすいボート。"],["powerboat","パワーボート",420,15028795,4.4,12,.5,5,"water",-880,85,2.8,"水上を高速で走る。波を越えるジャンプも得意。"]].map(([o,t,e,n,i,s,r,a,l,c,d,u,h])=>({id:o,name:t,max:e,color:n,width:i,length:s,wheel:r,mass:a*130,kind:l,x:c,z:d,jump:u,description:h}));class MM{constructor(t){this.game=t,this.x=600,this.width=88,this.startZ=100,this.endZ=-280,this.height=110,this.landingZ=-930,this.launches=0;const e=t.world,n=t.scene;let i=[this.x,2,this.startZ];for(let s=1;s<=72;s++){const r=s/72,a=2+this.height*r**4,l=this.startZ+(this.endZ-this.startZ)*r,c=[this.x,a,l];e.ramp(i,c,this.width);for(const d of[-1,1])ue(n,new R(this.x+d*45,i[1]+1.5,i[2]),new R(this.x+d*45,a+1.5,l),.32,16760117),s%8===0&&a>5&&e.solid(this.x+d*40,a/2,l,2.3,a-2,2.3,4415601);if(s%6===0){const d=new zt;d.position.set(this.x,a+.4,l),d.rotation.x=Math.atan(4*this.height*r**3/380),n.add(d);for(const u of[-1,1]){const h=X(d,20,.06,1,u*9,0,0,6810077,Lt(6810077,.25,.35));h.rotation.y=u*.35}}i=c}e.road([600,155],[600,95],this.width,2.1,!0),we(n,"山越え SUPER JUMP",600,21,120,"#ffe586",65),we(n,"×3 TURBO",600,9,70,"#8cffff",34),we(n,"TAKE OFF",600,126,-278,"#ffe586",38),e.road([555,-930],[645,-930],72,2.12),we(n,"LANDING",600,9,-948,"#a6ffe8",34);for(const s of[-1,1])for(let r=0;r<9;r++)X(n,2,.08,2,600+s*40,2.2,-900-r*6,14729576)}travel(){const t=this.game,e=t.active;t.action("close"),e.megaFlight=null,e.megaBoost=0,e.body.position.set(600,2+e.ride,145),e.body.velocity.setZero(),e.body.quaternion.setFromEuler(0,0,0),e.body.wakeUp(),e.yaw=0,e.park=!1,e.parking=!1,e.safe.set(600,2+e.ride,145),e.body.aabbNeedsUpdate=!0,t.input.clear(),t.cameraController.first=void 0,t.toast("まっすぐ進むと ×3加速！ 山をこえよう！",4e3)}update(){const t=this.game,e=t.active,n=e.body.position;if(e.hp<=0)return;const i=Math.abs(n.x-this.x)<this.width/2&&n.z<115&&n.z>this.endZ-5&&n.y<125;if(i&&!e.megaFlight){const s=(this.x-n.x)*.9;n.x+=(this.x-n.x)*.025,e.body.velocity.x+=s*.016,e.megaBoost>0||(t.audio.effect("boost"),t.toast("×3 ターボ！",2500)),e.megaBoost=5}if(i&&!e.megaFlight&&n.z<this.endZ+5&&n.y>100&&e.body.velocity.z<-30){const s=e.config.max/3.6*3,r=n.z-this.landingZ,a=270,l=r/s,c=(4*a-(n.y-(2+e.ride)))/l,d=8*a/(l*l);e.yaw=0,e.body.velocity.set(0,c,-s),e.grounded=!1,e.megaBoost=l+1,e.megaFlight={elapsed:0,duration:l,gravity:d,speed:s},this.launches++,t.audio.effect("jump"),t.particles.emit(n,16767333,80,28),t.toast("山をこえる！",3e3)}}}class wM{constructor(t){this.game=t,this.zones=[],this.platforms=[],this.domino=[],this.pins=[],this.fires=[],this.rings=[],this.cooldown=0,this.warpCooldown=0,this.trackTick=0,this.wash=0,this.cannonTimer=0,this.goalTimer=0,this.pinTimer=0,this.dominoTimer=0,this.build(),this.megaJump=new MM(t)}zone(t,e,n,i=10,s=16777215,r=2.3,a={}){const l=ie(this.game.scene,i,i,.15,e,r,n,s,32,Lt(s,.25,.4)),c={type:t,x:e,z:n,y:r,r:i,color:s,mesh:l,cool:0,...a};return this.zones.push(c),c}object(t,e,n,i=3,s=14527334,r=2,a=20){const l=this.game.scene,c=this.game.physics;let d;if(["ball","soccer","balloon"].includes(t)){if(d=on(l,i,e,r+i,n,s),c.ball(e,r+i,n,i,a,d),t==="soccer")for(let h=0;h<12;h++){const f=h*2.399,m=Math.acos(1-2*(h+.5)/12),v=new Kt(new To(i*.23,5),Lt(2637384));v.position.set(Math.sin(m)*Math.cos(f)*i*1.005,Math.cos(m)*i*1.005,Math.sin(m)*Math.sin(f)*i*1.005),v.lookAt(v.position.clone().multiplyScalar(2)),d.add(v)}}else d=t==="cone"?ie(l,.15,i*.5,i*1.7,e,r+i*.85,n,s,8):X(l,i,i*1.5,i,e,r+i*.75,n,s),c.box(d.position.x,d.position.y,d.position.z,i,i*1.5,i,a,d);const u=c.items.at(-1);return u.type=t,["box","cone","wall"].includes(t)&&(u.resetAfter=50),u}build(){const t=this.game,e=t.scene,n=t.world,i=[15749732,3313641,16108352,5356145,15365039,10314452,5692620];for(let u=0;u<7;u++)this.zone("paint",-42+u*14,-45,6,i[u],2.32,{rainbow:u===6}),this.zone("paint",-90+u*30,635,10,i[u],2.3,{rainbow:u===6});this.zone("mud",660,-45,28,7229493),this.zone("mud",-130,-655,18,7494976);for(let u=0;u<28;u++){const h=jn[u%jn.length],f=h.x+Math.sin(u*8)*65,m=h.z+Math.cos(u*8)*65;this.zone("water",f,m,5+u%5,6603218),u%3===0&&this.object("box",f+14,m,2.5,12031850)}for(const[u,h]of[[0,-80],[0,450],[600,470],[680,470],[740,660],[-450,-450],[100,710]])this.zone("boost",u,h,9,16109662),we(e,"» » »",u,3,h,"#ffffff",15);const s=[4758778,16737142,7460258,16765265,12220397,5625573],r=[0,4,2,1,5,7];for(let u=0;u<6;u++){const h=jn[r[u]],f=-90+u*35,m=190,v=Bn(e,9,1,f,11,m,s[u]);this.zones.push({type:"warp",x:f,z:m,y:3,r:8,mesh:v,dest:r[u],color:s[u],cool:0}),we(e,h.icon+" "+h.name,f,24,m,"#fff",27);const g=Bn(e,9,1,h.x+60,11,h.z+60,4758778);this.zones.push({type:"warp",x:h.x+60,z:h.z+60,y:3,r:8,mesh:g,dest:0,color:4758778,cool:0})}const a=[[35,-145,9,26],[-25,-145,5.5,14,10,"はじめてジャンプ"],[100,550,22,55],[580,680,18,48],[-700,180,10,28],[520,230,25,55],[635,-565,32,50],[-120,850,35,65],[170,680,13,35]];for(const[u,h,f,m,v,g]of a)n.ramp([u,2,h],[u,f,h-m],40,14264153),we(e,g||"↗",u,f+5,h-m,"#fff",g?23:12),this.zones.push({type:"jump",x:u,z:h-m,y:f,r:40*.47,power:v??(f>20?25:16),cool:0,safe:!0});this.soccer=this.object("soccer",-100,740,6,16052956,2,70);for(const u of[-135,-65])n.solid(u,13,822,1.3,22,1.3,15986910);X(e,71,1.3,1.3,-100,24,822,15986910);for(let u=0;u<9;u++)X(e,.1,20,.1,-132+u*8,13,826,13227987);we(e,"GOAL",-100,30,822,"#fff",32),this.object("ball",30,725,8,15376196,2,100),this.object("ball",630,-30,7,7714764,2,90),this.object("ball",220,-200,6,13148888,2,60);for(let u=0;u<4;u++)for(let h=0;h<=u;h++){const f=125+(h-u/2)*7,m=820+u*8,v=this.object("pin",f,m,3,15658717,2,18),g=ie(e,1,1.4,3,0,0,0,15156807);v.mesh.add(g),g.position.set(0,2.4,0),this.pins.push(v)}we(e,"ボウリング",125,16,855,"#fff",35);const l=new Ao([[-210,650],[-100,650],[-85,661],[-100,672],[-210,672],[-225,683],[-210,694],[-100,694],[-85,705],[-100,716],[-210,716]].map(([u,h])=>new R(u,5.5,h)),!1,"catmullrom",.1);for(let u=0;u<100;u++){const h=l.getPointAt(u/99),f=l.getTangentAt(u/99),m=h.x,v=h.z,g=Math.atan2(-f.z,f.x),p=X(e,1.05,7,4,m,5.5,v,i[u%7]);p.rotation.y=g,t.physics.box(m,5.5,v,1.05,7,4,10,p,g);const x=t.physics.items.at(-1);x.type="domino",this.domino.push(x)}we(e,"100 ドミノ！",-155,15,638,"#fff",45),this.zone("trampoline",0,790,17,5880002,2.4,{power:23}),this.zone("trampoline",40,850,21,10581973,2.4,{power:39});for(const[u,h,f,m]of[["rotate",70,700,.45],["rotate",140,740,2.8],["seesaw",-230,795,1],["vertical",220,800,1],["horizontal",240,690,1],["depth",230,610,1]]){const v=n.solid(h,3,f,26,1.2,26,u==="seesaw"?14004857:6524840);v.body.type=4,v.mesh.userData.dynamic=!0,this.platforms.push({...v,mode:u,x:h,z:f,speed:m}),we(e,u==="seesaw"?"↔":"↕",h,8,f,"#fff",12)}this.fan=new zt,this.fan.position.set(-250,17,750),e.add(this.fan),Bn(this.fan,12,.7,0,0,0,5667720);for(let u=0;u<4;u++){const h=X(this.fan,4,14,.5,Math.sin(u*Math.PI/2)*6,Math.cos(u*Math.PI/2)*6,0,8894917);h.rotation.z=-u*Math.PI/2}n.solid(-250,7,750,4,12,4,6126981),we(e,"かぜ！",-250,34,750,"#fff",22);const c=ie(e,9,12,17,280,14,740,11639414,20);c.rotation.z=Math.PI/2,Bn(e,8,1,267,14,740,5005933).rotation.y=Math.PI/2,we(e,"すって ポン！",280,31,740,"#fff",30),this.hammer=new zt,this.hammer.position.set(180,32,870),e.add(this.hammer),X(this.hammer,1.2,23,1.2,0,-11,0,6715258),X(this.hammer,16,7,7,0,-25,0,14721379);const d=ie(e,5,6,22,-30,10,875,6979474,20);d.rotation.x=.95,this.zone("cannon",-30,875,9,14857042),we(e,"3・2・1！",-30,25,875,"#fff",24),this.loops=[];for(const[u,h]of[[75,900],[700,720]]){const f=Bn(e,24,2,u,26,h,13805163);f.rotation.y=Math.PI/2,this.loops.push({x:u,z:h,mesh:f}),we(e,"ぐるりん！",u,55,h,"#fff",27)}for(let u=0;u<24;u++)this.object("wall",-10+u%6*4,690+Math.floor(u/6)*4,3.5,15329496,2,6),this.object("box",690+u%6*5,-75+Math.floor(u/6)*5,3,12227173),u<12&&this.object("cone",610+u*7,62,2,15569489,2,4);for(let u=0;u<8;u++){const h=this.object("balloon",-15+u*8,760,3,i[u%7],8,1.3);if(h.body.linearDamping=.4,u>=6){const f=new Co;if(u===6)for(let v=0;v<10;v++){const g=v*Math.PI/5,p=v%2?1.5:3;(v?f.lineTo.bind(f):f.moveTo.bind(f))(Math.sin(g)*p,Math.cos(g)*p)}else f.moveTo(0,-3),f.bezierCurveTo(-6,1,-3,5,0,2),f.bezierCurveTo(3,5,6,1,0,-3);const m=new Lo(f,{depth:.8,bevelEnabled:!0,bevelThickness:.4,bevelSize:.3,bevelSegments:2,steps:1});m.center(),h.mesh.geometry=m}}for(const[u,h]of[[106,-135],[690,-110],[-600,635]]){const f=ie(e,.4,3,7,u,5.5,h,15967560,8);this.fires.push({mesh:f,x:u,z:h,life:1,reset:0})}for(let u=0;u<10;u++){const h=-665+u*90,f=-750+Math.sin(u)*90,m=35+u*13,v=Bn(e,13,.7,h,m,f,16766574);this.rings.push({mesh:v,x:h,y:m,z:f,hit:!1,water:!1})}for(let u=0;u<6;u++){const h=-700+u*230;this.rings.push({mesh:Bn(e,9,.8,h,8,300,5954533),x:h,y:8,z:300,hit:!1,water:!0}),on(e,2,h+20,1,305,16103750)}for(let u=0;u<8;u++){const h=this.object("box",-185+u*13,-740,4,13022062);h.resetAfter=60}this.wheel=new zt,this.wheel.position.set(0,52,960),e.add(this.wheel),Bn(this.wheel,43,1,0,0,0,14337440);for(let u=0;u<12;u++){const h=u*Math.PI/6;ue(this.wheel,new R,new R(Math.sin(h)*43,Math.cos(h)*43,0),.25,7836825),X(this.wheel,6,5,5,Math.sin(h)*43,Math.cos(h)*43,0,i[u%7])}for(const u of[-1,1])ue(e,new R(u*18,2,965),new R(0,52,960),1,8493461)}update(t){this.megaJump.update();const e=this.game,n=e.active,i=n.body.position,s=e.time;this.warpCooldown=Math.max(0,this.warpCooldown-t),this.cooldown=Math.max(0,this.cooldown-t),this.trackTick+=t;for(const l of this.zones)if(l.cool=Math.max(0,(l.cool||0)-t),!(Math.hypot(i.x-l.x,i.z-l.z)>l.r||Math.abs(i.y-l.y)>12)){if(l.type==="warp"&&this.warpCooldown<=0){e.travel(l.dest),this.warpCooldown=4,e.audio.effect("warp");break}if(l.type==="boost"&&(n.boost=3,l.cool<=0&&(l.cool=2,e.audio.effect("boost"),e.toast("ビューン！"))),(l.type==="paint"||l.type==="mud")&&l.cool<=0&&(n.stain(l.rainbow?new Zt().setHSL(s%1,1,.6):l.color,l.type==="mud"),l.cool=2),l.type==="water"&&Math.abs(n.speed)>2&&l.cool<=0&&(e.particles.emit(i,11266803,16,Math.abs(n.speed)*.4),n.clean(.04),l.cool=.6,e.audio.effect("water")),["trampoline","jump"].includes(l.type)&&l.cool<=0&&n.body.velocity.y<8){if(l.safe){const c=l.x-i.x;i.x+=c*.45,n.body.velocity.x=c*1.4}n.body.velocity.y=l.power,l.cool=1.3,e.audio.effect("jump"),e.particles.emit(i,l.color||16766077,20,8)}l.type==="cannon"&&this.cooldown<=0&&this.cannonTimer<=0&&(this.cannonTimer=3,this.cannonVehicle=n,this.cooldown=8)}if(this.cannonTimer>0){this.cannonTimer-=t;const l=this.cannonVehicle;l.body.velocity.setZero(),e.toast(String(Math.ceil(this.cannonTimer))+" …"),this.cannonTimer<=0&&(l.body.velocity.set(0,45,-45),l.boost=4,e.toast("はっしゃー！"),e.audio.effect("jump"))}if(n.paintTime>0&&this.trackTick>.1&&n.grounded&&Math.abs(n.speed)>1&&(e.particles.track({x:i.x,y:i.y-n.ride+.06,z:i.z},n.yaw,n.paintColor,n.config.width),this.trackTick=0),i.y>140&&n.grounded&&this.trackTick>.16&&Math.abs(n.speed)>1&&(e.particles.track({x:i.x,y:i.y-n.ride+.06,z:i.z},n.yaw,15792127,n.config.width),e.particles.emit(i,16777215,3,2),this.trackTick=0),Math.abs(i.x+68)<12&&Math.abs(i.z-65)<16){this.wash+=t;const l=["みず！","あわあわ！","ブラシ！","すすぎ！","かわかすよ！","ピカピカ！"];e.toast(l[Math.min(5,Math.floor(this.wash))]),Math.random()<t*20&&e.particles.emit(i,this.wash<2?14087679:16777215,8,4),this.wash>=5&&(n.clean(1),n.hp<100&&n.repair(),this.wash<5+t&&e.audio.effect("wash"))}else this.wash=0;Math.hypot(i.x+68,i.z-100)<15&&n.hp<100&&n.repair();for(const l of this.platforms){const c=l.body.position.clone();if(l.mode==="rotate"&&(l.mesh.rotation.y=s*l.speed,l.body.quaternion.copy(l.mesh.quaternion)),l.mode==="seesaw"){const f=Math.abs(i.x-l.x)<15&&Math.abs(i.z-l.z)<15;l.mesh.rotation.z=yn.lerp(l.mesh.rotation.z,f?yn.clamp(-(i.x-l.x)*n.config.mass*25e-6,-.4,.4):0,t*2),l.body.quaternion.copy(l.mesh.quaternion)}l.mode==="vertical"&&(l.body.position.y=4+(Math.sin(s*.5)+1)*9),l.mode==="horizontal"&&(l.body.position.x=l.x+Math.sin(s*.5)*30),l.mode==="depth"&&(l.body.position.z=l.z+Math.sin(s*.5)*30),l.mesh.position.copy(l.body.position);const d=l.body.position.x-c.x,u=l.body.position.y-c.y,h=l.body.position.z-c.z;if(Math.abs(i.x-l.body.position.x)<13&&Math.abs(i.z-l.body.position.z)<13&&Math.abs(i.y-l.body.position.y-n.ride)<4&&(i.x+=d,i.y+=u,i.z+=h,l.mode==="rotate")){const f=l.speed*t,m=i.x-l.x,v=i.z-l.z;i.x=l.x+m*Math.cos(f)+v*Math.sin(f),i.z=l.z+v*Math.cos(f)-m*Math.sin(f),n.yaw+=f}}this.fan.rotation.z=s*8,this.wheel.rotation.z=s*.06,this.hammer.rotation.z=Math.sin(s*1.4)*.75,new R(0,-25,0).applyMatrix4(this.hammer.matrixWorld).distanceTo(n.mesh.position)<11&&this.cooldown<=0&&(n.body.velocity.set(20,18,-12),n.damage(8),this.cooldown=1);for(const l of e.physics.items){const c=l.body.position;l.type==="balloon"&&(l.body.force.y+=l.body.mass*24+(10-c.y)*l.body.mass*2),Math.hypot(c.x+250,c.z-780)<50&&(l.body.force.z+=l.body.mass*(l.type==="balloon"?50:14),l.body.wakeUp());const u=Math.hypot(c.x-270,c.z-740);u<40&&(l.body.force.x+=(270-c.x)*l.body.mass*2,l.body.force.z+=(740-c.z)*l.body.mass*2,l.body.wakeUp(),u<8&&(l.body.position.x=300,l.body.velocity.set(24,15,(Math.random()-.5)*10)))}if(Math.hypot(i.x+250,i.z-780)<45&&(n.body.velocity.z+=t*5),Math.hypot(i.x-270,i.z-740)<40&&(n.body.velocity.x+=(270-i.x)*t*.15),this.goalTimer>0?(this.goalTimer-=t,this.goalTimer<=0&&e.physics.reset(this.soccer)):Math.abs(this.soccer.body.position.x+100)<35&&this.soccer.body.position.z>817&&(this.goalTimer=4,e.toast("GOAL! やったー！"),e.audio.effect("goal"),e.particles.emit(this.soccer.body.position,16767054,80,20)),this.pins.every(l=>Math.abs(l.body.quaternion.x)+Math.abs(l.body.quaternion.z)>.25||l.body.position.distanceTo(l.home)>4)&&this.pinTimer<=0&&(this.pinTimer=5,e.toast("STRIKE!"),e.audio.effect("strike"),e.particles.emit(i,16766283,70,15)),this.pinTimer>0&&(this.pinTimer-=t,this.pinTimer<=0))for(const l of this.pins)e.physics.reset(l);if(this.domino.some(l=>Math.abs(l.body.quaternion.z)>.2||Math.abs(l.body.quaternion.x)>.2)&&(this.dominoTimer+=t),this.dominoTimer>24){for(const l of this.domino)e.physics.reset(l);this.dominoTimer=0}for(const l of this.fires)l.life<=0&&(l.reset-=t,l.reset<=0&&(l.life=1)),l.mesh.visible=l.life>0,l.mesh.scale.set(1,l.life*(.9+Math.sin(s*7)*.1),1);for(const l of this.rings)l.mesh.rotation.z=s*.25,!l.hit&&Math.hypot(i.x-l.x,i.y-l.y,i.z-l.z)<12&&(l.water?n.config.kind==="water":["air","heli"].includes(n.config.kind))&&(l.hit=!0,l.mesh.material=Lt(7143333,.3,.3),e.particles.emit(i,16768883,40,12),e.audio.effect("success"),e.toast("リング！ キラキラ！"));if(!this.loopRide){for(const l of this.loops)if(Math.hypot(i.x-l.x,i.z-l.z)<12&&i.y<9&&Math.abs(n.speed)>6){this.loopRide={loop:l,t:0,vehicle:n};break}}if(this.loopRide){const l=this.loopRide;l.t+=t;const c=l.t*2.4;l.vehicle.body.position.set(l.loop.x,26-Math.cos(c)*24+l.vehicle.ride,l.loop.z-Math.sin(c)*24),l.vehicle.body.velocity.setZero(),l.vehicle.body.quaternion.setFromEuler(c,0,0),c>=Math.PI*2&&(l.vehicle.body.velocity.set(0,10,-18),this.loopRide=null)}}water(t,e){const n=t.body.position,i=new R(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),s=new R(n.x,n.y+2,n.z).addScaledVector(i,8);Math.random()<e*40&&this.game.particles.emit(s,10675697,5,5);for(const r of this.fires){const a=new R(r.x-n.x,0,r.z-n.z);a.length()<38&&a.normalize().dot(i)>.6&&r.life>0&&(r.life-=e*.65,r.life<=0&&(r.reset=25,this.game.audio.effect("success"),this.game.toast("けせたよ！ ★"),this.game.particles.emit(r.mesh.position,16770460,40,10)))}for(const r of this.game.vehicles)r!==t&&r.mesh.position.distanceTo(s)<22&&r.clean(e*.3);for(const r of this.game.physics.items)r.mesh.position.distanceTo(s)<20&&(r.body.velocity.x+=i.x*e*5,r.body.velocity.z+=i.z*e*5,r.body.wakeUp())}}class bM{constructor(t,e){this.pointers=new Map,this.keys=new Set,this.root=t,this.onAction=e,this.bind()}bind(){for(const e of this.root.querySelectorAll("[data-control]")){e.addEventListener("pointerdown",n=>{n.preventDefault();try{e.setPointerCapture(n.pointerId)}catch{}this.pointers.set(n.pointerId,{control:e.dataset.control,value:e.dataset.control==="dpad"?this.direction(n,e):1}),e.classList.add("held")}),e.addEventListener("pointermove",n=>{const i=this.pointers.get(n.pointerId);i?.control==="dpad"&&(i.value=this.direction(n,e))});for(const n of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(n,i=>{this.pointers.delete(i.pointerId),[...this.pointers.values()].some(s=>s.control===e.dataset.control)||e.classList.remove("held")})}const t={KeyE:"switch",KeyR:"respawn",KeyC:"photo",KeyV:"vehicles",KeyM:"map",Escape:"close"};window.addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),t[e.code]&&!e.repeat&&this.onAction(t[e.code])}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.clear()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clear()});for(const e of["contextmenu","dragstart","gesturestart","gesturechange","gestureend","dblclick","touchmove"])document.getElementById("app").addEventListener(e,n=>{e==="touchmove"&&n.target.closest?.(".vehicle-grid")||n.preventDefault()},{passive:!1})}direction(t,e){const n=e.getBoundingClientRect(),i=(t.clientX-n.left-n.width/2)/(n.width*.32),s=(t.clientY-n.top-n.height/2)/(n.height*.32);if(Math.hypot(i,s)<.23)return{accel:0,brake:0,steer:0};const r=Math.abs(i)>.3?Math.max(-1,Math.min(1,i)):0,a=s>.35;return{accel:a?0:1,brake:a?1:0,steer:r}}get state(){const t={accel:0,brake:0,steer:0,special:0,down:0,jump:0};for(const n of this.pointers.values())n.control==="dpad"?(t.accel=Math.max(t.accel,n.value.accel),t.brake=Math.max(t.brake,n.value.brake),Math.abs(n.value.steer)>Math.abs(t.steer)&&(t.steer=n.value.steer)):t[n.control]=n.value;const e=this.keys;return(e.has("KeyW")||e.has("ArrowUp"))&&(t.accel=1),(e.has("KeyS")||e.has("ArrowDown"))&&(t.brake=1),(e.has("KeyA")||e.has("ArrowLeft"))&&(t.steer=-1),(e.has("KeyD")||e.has("ArrowRight"))&&(t.steer=1),t.steer&&!t.brake&&(t.accel=1),e.has("Space")&&(t.jump=1),e.has("KeyF")&&(t.special=1),(e.has("ShiftLeft")||e.has("KeyQ"))&&(t.down=1),t}clear(){this.pointers.clear(),this.keys.clear(),this.root.querySelectorAll(".held").forEach(t=>t.classList.remove("held"))}}class SM{constructor(t){this.game=t,this.look=new R,this.ray=new Kp,this.position=new R,this.followPosition=new R,this.delta=new R,this.desired=new R,this.target=new R,this.direction=new R,this.hits=[]}update(t,e=!1){const n=this.game,i=n.active,s=i.mesh.position;!e&&(this.followVehicle!==i||this.first===void 0)&&this.look.set(s.x-Math.sin(i.yaw)*8,s.y+2,s.z-Math.cos(i.yaw)*8),!e&&this.followVehicle===i&&this.first!==void 0&&(this.delta.copy(s).sub(this.followPosition),n.camera.position.add(this.delta),this.look.add(this.delta)),this.followVehicle=i,this.followPosition.copy(s);const r=this.desired;if(e){const a=n.time*.04;r.set(s.x+15*Math.cos(a),s.y+5.7,s.z-17),this.look.set(s.x-6,s.y+1.3,s.z)}else{const a=Math.max(17,i.config.length*1.5);r.set(s.x+Math.sin(i.yaw)*a,s.y+8,s.z+Math.cos(i.yaw)*a),this.target.set(s.x-Math.sin(i.yaw)*8,s.y+2,s.z-Math.cos(i.yaw)*8),this.look.lerp(this.target,1-Math.exp(-t*7));const l=this.direction.copy(r).sub(this.look),c=l.length();this.ray.set(this.look,l.normalize()),this.ray.far=c,this.hits.length=0;const d=this.ray.intersectObjects(n.world.solids,!1,this.hits)[0];d&&d.distance<c&&r.copy(this.look).addScaledVector(l,Math.max(5,d.distance-1)),r.y=Math.max(5,r.y)}!Number.isFinite(n.camera.position.x)||this.first===void 0?(n.camera.position.copy(r),this.first=!0):n.camera.position.lerp(r,1-Math.exp(-t*5)),n.camera.lookAt(this.look)}}class EM{constructor(t){this.game=t,this.root=document.getElementById("ui"),this.root.innerHTML=`<div id="title"><div class="title-copy"><div class="eyebrow">きょうは、どこへいこう？</div><h1>のりもの<br><em>ワールド！</em></h1><p>はしる。とぶ。あそぶ。<br>ぜんぶ、きみのじゆう。</p><button id="start">スタート！ <span>➜</span></button><div class="title-foot">20 のりもの ・ 9 エリア ・ あそびはむげん</div><button id="install" class="text-button">ホーム画面に追加</button></div><div class="title-badge">MONSTER / 01<br><b>どこまでも、いこう。</b></div></div><div id="hud" hidden><button id="respawn" class="utility" aria-label="復帰">↻</button><div id="location"><small>のりものワールド！</small><strong id="area">中央タウン</strong></div><div id="top-status"><button id="sound" aria-label="音">♫</button><button id="map-open">🗺 マップ</button><button id="vehicles-open">🚘 乗り物</button></div><button id="photo" class="utility" aria-label="撮影モード">📷</button><div id="dashboard"><span id="vehicle-name">モンスタートラック</span><div><b id="speed">0</b><small>km/h</small><span id="health">🔧 100</span></div></div><button id="dpad" data-control="dpad" aria-label="十字キー：上で前進、下で後退、左右で曲がる"><span class="dpad-up">▲</span><span class="dpad-left">◀</span><span class="dpad-center">●</span><span class="dpad-right">▶</span><span class="dpad-down">▼</span></button><button id="jump" data-control="jump" aria-label="ジャンプ"><strong>↟</strong><small>ジャンプ</small></button><button id="special" data-control="special" aria-label="特殊能力">★<small>ジャンプ</small></button><button id="down" data-control="down" aria-label="下降" hidden>↘<small>おりる</small></button><button id="switch" hidden><span>🚘</span>のる！<small id="switch-name"></small></button><button id="repair" hidden>🔧<br>なおす！</button><div id="hint">↑ ↓ ← → うんてん　SPACE ジャンプ　F とくしゅ　C 撮影</div><canvas id="minimap" width="170" height="170"></canvas></div><div id="toast" role="status"></div><div id="map-panel" hidden><header><div><small>つぎはどこへ？</small><h2>ワールドマップ</h2></div><button id="map-close">✕</button></header><div class="destinations">${jn.map((n,i)=>`<button data-travel="${i}" style="--accent:${n.color}"><span>${n.icon}</span><b>${n.name}</b><small>ワープする ➜</small></button>`).join("")}</div><footer><button id="mega-travel">🚀 山越えジャンプ ×3</button><label class="volume-control">音量 <input id="volume" aria-label="音量" type="range" min="0" max="1" step="0.05" value="0.85"></label></footer></div>`,this.root.insertAdjacentHTML("beforeend",`<div id="vehicles-panel" class="picker-panel" hidden><header><div><small>すきな乗り物をえらぼう</small><h2>乗り物ガレージ</h2></div><button id="vehicles-close">✕</button></header><div class="vehicle-grid">${t.vehicles.map((n,i)=>`<button data-vehicle="${i}"><span class="vehicle-swatch" style="--paint:#${n.config.color.toString(16).padStart(6,"0")}">${{ground:"🚘",air:"✈",heli:"🚁",water:"🚤"}[n.config.kind]}</span><b>${n.config.name}</b><span class="vehicle-spec"><strong>最高 ${n.config.max} km/h</strong><strong>ジャンプ ×${n.config.jump}</strong></span><small class="vehicle-description">${n.config.description}</small></button>`).join("")}</div></div><div id="photo-panel" hidden><div class="photo-top"><b>PHOTO MODE</b><button id="photo-reset">車両を中心に</button><button id="photo-close">運転に戻る ✕</button></div><div class="photo-bottom"><p>ドラッグ：回転 ／ 右ドラッグ・2本指：移動 ／ ホイール・ピンチ：ズーム</p><label>画角 <input id="photo-fov" type="range" min="25" max="90" value="55"></label><button id="photo-shot">📷 写真を保存</button></div></div>`);const e=(n,i)=>$i(document.getElementById(n),i);e("start",()=>t.start()),e("mega-travel",()=>t.gimmicks.megaJump.travel()),document.getElementById("volume").value=t.audio.volume,document.getElementById("volume").addEventListener("input",n=>t.audio.setVolume(Number(n.target.value))),e("respawn",()=>t.action("respawn")),e("photo",()=>t.action("photo")),e("vehicles-open",()=>t.action("vehicles")),e("vehicles-close",()=>t.action("close"));for(const n of this.root.querySelectorAll("[data-vehicle]"))$i(n,()=>t.selectVehicle(Number(n.dataset.vehicle)));e("switch",()=>t.action("switch")),e("repair",()=>t.active.repair()),e("map-open",()=>t.action("map")),e("map-close",()=>t.action("close")),e("sound",()=>{t.audio.enabled=!t.audio.enabled,document.getElementById("sound").textContent=t.audio.enabled?"♫":"♪̸",t.saveState()}),e("install",async()=>{const n=await t.pwa.install();n&&t.toast(n,8e3)});for(const n of this.root.querySelectorAll("[data-travel]"))$i(n,()=>{t.travel(Number(n.dataset.travel)),t.action("close")});this.map=document.getElementById("minimap").getContext("2d"),this.toastUntil=0}toast(t,e=2200){const n=document.getElementById("toast");n.textContent!==t&&(n.textContent=t),n.classList.add("show"),this.toastUntil=performance.now()+e}update(){const t=this.game,e=t.active,n=e.body.position,i=jn.reduce((a,l)=>Math.hypot(n.x-l.x,n.z-l.z)<Math.hypot(n.x-a.x,n.z-a.z)?l:a);document.getElementById("area").textContent=i.icon+" "+i.name,document.getElementById("vehicle-name").textContent=e.config.name,document.getElementById("speed").textContent=Math.round(Math.abs(e.speed)*3.6),document.getElementById("health").textContent="🔧 "+Math.round(e.hp),document.getElementById("health").style.color=e.hp<40?"#ffa585":"#b1e6d0",document.getElementById("repair").hidden=e.hp>0;const s=document.getElementById("switch");s.hidden=!t.nearest||e.hp<=0,document.getElementById("switch-name").textContent=t.nearest?.config.name||"",document.getElementById("down").hidden=!["air","heli"].includes(e.config.kind);const r={fire:"みず！",tow:"フック",dozer:"ブレード",excavator:"アーム",dump:"にだい",police:"サイレン",ambulance:"サイレン",heli:"あがる",plane:"とぶ"};document.querySelector("#special small").textContent=r[e.config.id]||"アクション",document.getElementById("special").hidden=!r[e.config.id],document.getElementById("dpad").dataset.direction=t.input.state.brake?"back":t.input.state.accel?"forward":"",performance.now()>this.toastUntil&&document.getElementById("toast").classList.remove("show"),this.drawMap()}drawMap(){const t=this.map,e=this.game;t.clearRect(0,0,170,170),t.fillStyle="#163743d9",t.fillRect(0,0,170,170),t.strokeStyle="#71938d",t.lineWidth=1,t.strokeRect(15,15,140,140),t.strokeStyle="#60b4ca",t.lineWidth=6,t.beginPath(),t.moveTo(0,109),t.lineTo(170,109),t.stroke();for(const i of jn){const s=85+i.x*.077,r=85+i.z*.077;t.strokeStyle="#72939b",t.lineWidth=1,t.beginPath(),t.moveTo(85,85),t.lineTo(s,r),t.stroke(),t.fillStyle=i.color,t.beginPath(),t.arc(s,r,3,0,7),t.fill()}t.fillStyle="#fff";for(const i of e.railway.trains){const s=i.meshes[0].position;t.fillRect(85+s.x*.077,85+s.z*.077,2,2)}const n=e.active.body.position;t.save(),t.translate(85+n.x*.077,85+n.z*.077),t.rotate(-e.active.yaw),t.fillStyle="#ffdd64",t.beginPath(),t.moveTo(0,-6),t.lineTo(-4,5),t.lineTo(4,5),t.fill(),t.restore()}}class TM{constructor(){if(this.mobile=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<=1024,this.scene=new hc,this.scene.background=new Zt(11524583),this.scene.fog=new Eo(11524583,450,1600),this.camera=new un(55,innerWidth/innerHeight,.3,this.mobile?430:2300),this.renderer=new Ux({canvas:document.getElementById("game"),antialias:!0,powerPreference:"high-performance",precision:this.mobile?"mediump":"highp",stencil:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1.25:1.5)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=He,this.renderer.toneMapping=kr,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!this.mobile,this.renderer.shadowMap.type=Mu,this.scene.add(new Xp(14808319,6583651,1.1)),this.sun=new Yp(16771532,2.2),this.sun.position.set(100,180,60),this.sun.castShadow=!this.mobile,this.sun.shadow.mapSize.set(this.mobile?256:1024,this.mobile?256:1024),Object.assign(this.sun.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:300}),this.sun.shadow.bias=-.001,this.scene.add(this.sun,this.sun.target),!this.mobile){const n=new Fr(this.renderer),i=new m_;this.scene.environment=n.fromScene(i,.04).texture,i.dispose(),n.dispose()}this.physics=new iM,this.audio=new oM,this.save=new rM,this.particles=new sM(this.scene),this.time=0,this.started=!1,this.paused=!1,this.world=new M_(this),this.vehicles=Qa.map(n=>new Ja(this,n)),this.vehicles.push(new Ja(this,{...Qa[10],id:"rare-sport",name:"おうごんのスポーツカー",max:450,jump:3.6,color:13874027,description:"きらきら輝く特別な高速車。速さもジャンプも一級品。"},-185,45,35)),this.vehicles.push(new Ja(this,{...Qa[12],id:"secret-suv",name:"ひみつのSUV",max:300,jump:4,color:5467272,description:"秘密基地の特別車。悪路に強く、最高のジャンプ力。"},580,-475,2)),this.active=this.vehicles[0],this.railway=new P_(this),this.gimmicks=new wM(this),this.world.finishRoads(),this.ui=new EM(this),this.input=new bM(this.ui.root,n=>this.action(n)),this.pwa=new aM,this.cameraController=new SM(this),this.photo=new Kx(this),this.clock=new rd,this.nearest=null,this.frameCount=0,this.lastUi=0,this.audio.enabled=this.save.data.settings?.sound!==!1,this.marker=new Kt(new qn(5,.16,6,40),new Qi({color:16771994})),this.marker.rotation.x=-Math.PI/2,this.scene.add(this.marker);for(const n of this.vehicles)md(n.mesh);this.mobile&&this.active.setPresentationDetail(!0),p_(this),this.graphics=new d_(this);const t=()=>this.resize();window.addEventListener("resize",t),window.visualViewport?.addEventListener("resize",t),window.addEventListener("orientationchange",()=>{this.input.clear(),this.resize(),requestAnimationFrame(t),setTimeout(t,250)}),document.addEventListener("visibilitychange",()=>{this.input.clear(),this.clock.getDelta(),document.hidden||this.resize()});const e=this.renderer.domElement;e.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.paused=!0,this.toast("画面を復旧しています…",5e3)}),e.addEventListener("webglcontextrestored",()=>{this.paused=!1,this.resize()}),this.resize(),this.tick()}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.graphics?.resize();const n=matchMedia("(orientation: landscape)").matches||t>e;this.portrait=!n&&t<=1e3,this.portrait&&this.input?.clear()}async start(){if(this.started)return;this.resize();const t=matchMedia("(orientation: landscape)").matches||innerWidth>innerHeight;if(this.portrait&&!t)return;this.portrait=!1,this.input.clear();const e=this.vehicles.find(n=>n.config.id===this.save.data.lastVehicle);e&&(this.active=e,this.refreshMobileVehicleDetail(),e.body.wakeUp()),this.started=!0,document.getElementById("title").hidden=!0,document.getElementById("hud").hidden=!1,this.saveState(),requestAnimationFrame(()=>{this.audio.start().catch(()=>{}),setTimeout(()=>{this.pwa.start()},250)})}action(t){if(!(!this.started||this.portrait)){if(t==="photo"){this.photo.active?this.photo.close():this.photo.open();return}if(t==="vehicles"){this.action("close"),this.paused=!0,document.getElementById("vehicles-panel").hidden=!1,this.input.clear();return}t==="map"&&(this.action("close"),this.paused=!0,document.getElementById("map-panel").hidden=!this.paused,this.input.clear()),t==="close"&&(this.photo?.close(),document.getElementById("vehicles-panel").hidden=!0,this.paused=!1,document.getElementById("map-panel").hidden=!0,this.input.clear()),!this.paused&&(t==="respawn"&&this.active.respawn(),t==="switch"&&this.nearest&&(this.active.park=!0,this.active.parkPosition=this.active.body.position.clone(),this.active.body.velocity.setZero(),this.active=this.nearest,this.refreshMobileVehicleDetail(),this.active.park=!1,this.active.parking=!1,this.active.body.wakeUp(),this.input.clear(),this.nearest=null,this.audio.effect("success"),this.toast(this.active.config.name+" に のったよ！"),this.saveState(),this.ui.update()))}}selectVehicle(t){const e=this.vehicles[t];e&&(this.action("close"),this.active.body.velocity.setZero(),this.active=e,this.refreshMobileVehicleDetail(),e.park=!1,e.parking=!1,e.body.wakeUp(),this.nearest=null,this.input.clear(),this.cameraController.first=void 0,this.toast(e.config.name+" に のったよ！"),this.saveState(),this.ui.update())}refreshMobileVehicleDetail(){if(this.mobile){for(const t of this.vehicles)t.setPresentationDetail(t===this.active);this.graphics?.updateMobileVisibility()}}travel(t){const e=jn[t],n=this.active;let i=e.x,s=e.z+22,r=2+n.ride;t===2&&(i=600,s=-410),t===7&&n.config.kind==="water"&&(i=-860,s=70,r=1),n.body.position.set(i,r+2,s),n.safe.set(i,r,s),n.body.velocity.setZero(),n.yaw=0,n.park=!1,n.parking=!1,n.waterTime=0,this.gimmicks.warpCooldown=4,this.particles.emit(n.body.position,11135743,50,12),this.toast(e.icon+" "+e.name+" へ！"),this.input.clear()}toast(t,e){this.ui?.toast(t,e)}saveState(){this.save.save(this.active,{sound:this.audio.enabled})}tick(t=performance.now()){if(requestAnimationFrame(i=>this.tick(i)),this.testManual||this.lastAnimationTime&&t-this.lastAnimationTime<15.5)return;this.lastAnimationTime=t;const e=Math.min(.05,this.clock.getDelta());if(document.hidden)return;this.time+=e;const n=this.started&&!this.paused&&!this.portrait;if(n){const i=this.input.state;for(const r of this.vehicles)r.update(e,i,r===this.active);this.world.update(e,this.time),this.railway.update(e),this.gimmicks.update(e),this.physics.step(e);for(const r of this.vehicles)r.mesh.position.copy(r.body.position),r.mesh.quaternion.copy(r.body.quaternion);this.particles.update(e),this.nearest=null;let s=y_.switchDistance;for(const r of this.vehicles)if(r!==this.active){const a=r.body.position.distanceTo(this.active.body.position);a<s&&(s=a,this.nearest=r)}this.audio.update(this.active,this.railway.trains,this.time)}else this.started||(this.active.sync(e,{}),this.railway.update(e));this.marker.visible=!!this.nearest&&n,this.nearest&&this.marker.position.set(this.nearest.body.position.x,this.nearest.body.position.y-this.nearest.ride+.2,this.nearest.body.position.z),this.photo.active?this.photo.update():this.cameraController.update(e,!this.started),this.sun.position.set(this.active.body.position.x-65,this.active.body.position.y+100,this.active.body.position.z-45),this.sun.target.position.copy(this.active.mesh.position),this.time-this.lastUi>.1&&(this.ui.update(),this.lastUi=this.time),this.graphics.render(e),this.frameCount++}}try{const o=new TM;new URLSearchParams(location.search).has("test")&&(window.__game=o)}catch(o){console.error(o),document.getElementById("ui").innerHTML='<div style="padding:40px;background:#163746;pointer-events:auto">起動できませんでした。ページを再読み込みしてください。<br>WebGLが使えるブラウザで開いてください。</div>'}
