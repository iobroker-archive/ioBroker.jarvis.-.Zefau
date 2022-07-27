import{_ as d,q as c,d9 as f,d8 as p,dH as u,ds as l,j as g,o as h,d as m,a as v,d0 as y,g as b,K as w,a2 as x,e as S,k,n as C,m as z}from"./index-9b3d623a.js";import"./index-61c294a1.js";import"./components-58ae6d36.js";import"./_commonjsHelpers-45ea234c.js";import"./vue.runtime.esm-bundler-a62b0c26.js";import"./QTooltip-0ea98b06.js";import"./json-editor-a7e0d10a.js";const V=c({name:"ModuleChart",props:["_containerSize","_widgetSize","widget"],data(){return this.devices={},{widgetSize:this._widgetSize,stateLabels:{},stateValues:{},error:null,loaded:!1}},methods:{zIndex(i){const e=document.querySelector(".jarvis-widget-"+this.widget.id);e&&(e.style.zIndex=i)},fitChart(){this.loaded&&this.vchart&&this.vchart.resize({width:"auto",height:"auto"})},gotState(i,e,t){if(i){this.error=i,this.loaded=!0;return}const{item:s}=this.devices[t.id+"#"+e.key];this.stateLabels[t.id+"#"+e.key]=s.label||e.label||t.name,this.stateValues[t.id+"#"+e.key]=parseFloat(e.value),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.setChartOptions()},500)},setChartOptions(){let i={};!this.config.type||this.config.type==="bar"?i={xAxis:[{type:"category",axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",max:this.config.barStack===!0?Math.round(Object.values(this.stateValues).reduce((e,t)=>e+t)/100)*100:this.config.maxValue,min:this.config.minValue}]}:this.config.type==="pie"?i={series:[{type:"pie",radius:this.config.pieRadius===!0?["40%","80%"]:["80%","0%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:this.$q.dark.isActive?"#333":"#fff",borderWidth:2},label:{formatter:"{c}",position:"inside"},emphasis:{label:{show:!0}},labelLine:{show:!1},data:Object.keys(this.stateLabels).map(e=>{var s;let t=(s=this.devices[e].device.states[this.devices[e].item.primaryStateKey])==null?void 0:s.unit;return t=t&&typeof t=="object"?t[this.stateValues[e]]||t.default:t||"",{value:this.stateValues[e],name:e+":"+this.stateLabels[e],label:{formatter:this.config.label===!0?"":this.stateValues[e]+" "+t},unit:t,itemStyle:{color:this.devices[e].item.moduleConfig&&this.devices[e].item.moduleConfig.color}}})}]}:this.config.type==="circle"&&(i={angleAxis:{max:this.config.maxValue&&parseInt(this.config.maxValue)||void 0},radiusAxis:{type:"category",axisLabel:{show:!1}},polar:{radius:this.config.radius?["10%",this.config.radius+"%"]:this.widget.title?["10%","60%"]:["10%","70%"],center:this.config.legend==="bottom"?["50%","45%"]:["50%","50%"]}}),i=f(i,{legend:{show:this.config.legend!=="off",bottom:this.config.legend==="bottom"?0:"auto",padding:[10,10,5,10],textStyle:{color:this.$q.dark.isActive?"#fff":"#666"},tooltip:{show:!0,position:"top",borderWidth:1,borderColor:"#ccc",formatter:e=>{var n;const[t,s]=e.name.split(":"),a=this.stateValues[t],r=this.devices[t].item.moduleConfig&&this.devices[t].item.moduleConfig.color;let o=(n=this.devices[t].device.states[this.devices[t].item.primaryStateKey])==null?void 0:n.unit;return o=o&&typeof o=="object"?o[this.stateValues[t]]||o.default:o||"",'<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:'+r+';"></span><span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">'+s+'</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">'+(a?a.toFixed(2):"-")+(o?" "+o:"")+"</span>"}},formatter:e=>{const[,t]=e.split(":");return t},data:Object.keys(this.stateLabels).map(e=>({name:e+":"+this.stateLabels[e],itemStyle:{color:this.devices[e].item.moduleConfig&&this.devices[e].item.moduleConfig.color}}))},grid:{top:"15%",left:"1%",right:"2%",bottom:"12%",containLabel:!0},label:{color:this.$q.dark.isActive?"#fff":"#333",fontWeight:"bold"},tooltip:{position:"top",formatter:e=>{const{marker:t,seriesName:s,name:a,data:r}=e,[,o]=(this.config.type==="bar"||this.config.type==="circle"?s:a).split(":");return""+t+'<span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">'+o+'</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">'+(r.value?r.value.toFixed(2):"-")+(r.unit?" "+r.unit:"")+"</span>"}},series:this.config.type==="pie"?[]:Object.keys(this.stateLabels).map(e=>{var a;let t=(a=this.devices[e].device.states[this.devices[e].item.primaryStateKey])==null?void 0:a.unit;t=t&&typeof t=="object"?t[this.stateValues[e]]||t.default:t||"";const s={name:e+":"+this.stateLabels[e],type:"bar",showBackground:!0,stack:!this.config.type||this.config.type==="bar"?this.config.barStack:!1,emphasis:{focus:"series"},label:{show:!0,position:"insideTop"},data:[{value:this.stateValues[e],label:{formatter:this.config.label===!0?"":this.stateValues[e]+" "+t},unit:t,itemStyle:{color:this.devices[e].item.moduleConfig&&this.devices[e].item.moduleConfig.color}}]};return this.config.type==="circle"&&(s.coordinateSystem="polar",s.label={show:!0,fontWeight:"bold",color:this.$q.dark.isActive?"#fff":"#000",position:"start",offset:[2,2]}),s})}),this.vchart&&this.vchart.setOption(i,!0),this.loaded=!0}},computed:{config(){return p.joinConfig(this.widget.config,u)}},watch:{_widgetSize(i){this.widgetSize!==i&&(this.widgetSize=i)}},mounted(){this.vchart=this.$refs.vchart,this.widget.items&&this.revision!==this.widget.revision&&(this.revision=this.widget.revision,this.widget.items.forEach(i=>{if(i.type==="device"){const e=l.get(i.deviceId||null);e?(this.stateLabels[e.id+"#"+i.primaryStateKey]=e.name,this.devices[e.id+"#"+i.primaryStateKey]={item:i,device:e},l.listen(e.id,i.primaryStateKey,this.gotState)):console.error(this.$i18n.t("No device specified"))}})),window.addEventListener("orientationchange",()=>{this.fitChart()})},beforeUnmount(){for(const i in this.devices)this.devices[i]}});function L(i,e,t,s,a,r){const o=g("v-chart");return h(),m("div",{onTouchstart:e[0]||(e[0]=z(()=>{},["stop"])),onMouseover:e[1]||(e[1]=n=>i.zIndex(99)),onMouseout:e[2]||(e[2]=n=>i.zIndex("initial")),style:{"min-width":"1px","min-height":"1px"}},[i.loaded?b("",!0):(h(),v(y,{key:0,indeterminate:""})),w(S("div",{style:C({"min-width":"100%","min-height":"100%",width:i.widgetSize.width+"px",height:i._containerSize.height+"px"})},[k(o,{autoresize:"",ref:"vchart"},null,512)],4),[[x,i.loaded&&!i.error]])],32)}var W=d(V,[["render",L]]);export{W as default};