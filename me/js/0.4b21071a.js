(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"4iCP":function(e,t,a){},cmjr:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%"}},[a("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:e.getTable}},[e._v("获取表格信息21")]),e._v(" "),a("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:e.checkedRows}},[e._v("获取选中的行")]),e._v(" "),a("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:e.add}},[e._v("增加一行")]),e._v(" "),a("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:e.xls}},[e._v("导出xls文件")]),e._v(" "),a("button",{staticStyle:{padding:"6px",border:"1px solid #666"},attrs:{title:"第一列设置了required=true"},on:{click:e.checkRequired}},[e._v("对required=true检查")]),e._v(" "),a("button",{staticStyle:{padding:"6px",border:"1px solid #666"},on:{click:e.reset}},[e._v("doReset")]),e._v("\n    注意：表格宽高是撑满父容器的\n    "),a("div",{staticStyle:{width:"100%",height:"540px","margin-top":"14px"}},[a("database",{ref:"database",attrs:{scrollSpeed:e.scrollSpeed,colData:e.colData,rowData:e.rowData,colRelation:e.colRelation,entry:e.entry,showCheckBoxAndIndex:e.showCheckBoxAndIndex,showOperate:e.showOperate,operateItem:e.operateItem,onlyShowIndex:e.onlyShowIndex,onlyShowCheckBox:e.onlyShowCheckBox,showPrompt:e.showPrompt,showStatus:e.showStatus,option_limit:e.option_limit,searchDelayTime:e.searchDelayTime,showOptionPage:e.showOptionPage},on:{selectChange:e.selectChange,dateChange:e.dateChange,saveLine:e.saveLine,removeLine:e.removeLine}})],1)])},i=[];a("VRzm");function o(){return"/select.json"}var d={data:function(){return{scrollSpeed:1,colData:[{title:"多选",props:"a1",width:150,icon:"",sort:!0,fixed:!0},{title:"单选",width:100,props:"a2",icon:"number"},{title:"sync单选",width:130,props:"a3",icon:"select"},{title:"sync多选",width:140,props:"a4",icon:"mul_select"},{title:"日期",width:140,icon:"date",props:"a5"},{title:"时间",width:140,icon:"time",props:"a6"},{title:"日期时间X",width:240,icon:"date",sort:!0,props:"a7"},{title:"编辑数字",width:140,props:"a8"},{title:"编辑文字",width:200,props:"a9"},{title:"标题10",width:140,props:"a10"},{title:"标题11",width:140,props:"a11"},{title:"标题12",width:140,props:"a12"},{title:"标题13",width:140,props:"a13"},{title:"标题14",width:140,props:"a14"},{title:"标题15",width:140,props:"a15"},{title:"标题16",width:140,props:"a16"},{title:"标题17",width:140,props:"a17"},{title:"标题18",width:140,props:"a18"},{title:"标题19",width:140,props:"a19"},{title:"标题20",width:140,props:"a20"},{title:"标题21",width:140,props:"a21"},{title:"标题22",width:140,props:"a22"},{title:"标题23",width:140,props:"a23"},{title:"标题24",width:140,props:"a24"},{title:"标题25",width:140,props:"a25"},{title:"标题26",width:140,props:"a26"},{title:"标题27",width:140,props:"a27"},{title:"标题28",width:140,props:"a28"},{title:"标题29",width:140,props:"a29"},{title:"标题30",width:140,props:"a30"},{title:"标题31",width:140,props:"a31"},{title:"标题32",width:140,props:"a32"},{title:"标题33",width:140,props:"a33"},{title:"标题34",width:140,props:"a34"},{title:"标题35",width:140,props:"a35"},{title:"标题36",width:140,props:"a36"},{title:"标题37",width:140,props:"a37"},{title:"标题38",width:140,props:"a38"},{title:"标题39",width:140,props:"a39"},{title:"这是标准的最后一列！",props:"a40"}],colRelation:[{title:"4-1",level:4,indexStart:2,indexEnd:6},{title:"4-2",level:4,indexStart:6,indexEnd:16},{title:"4-3",level:4,indexStart:16,indexEnd:29},{title:"4-4",level:4,indexStart:29,indexEnd:39},{title:"3-1",level:3,indexStart:3,indexEnd:6},{title:"3-2",level:3,indexStart:7,indexEnd:22},{title:"3-3",level:3,indexStart:25,indexEnd:33},{title:"3-4",level:3,indexStart:34,indexEnd:37},{title:"2-1",level:2,indexStart:3,indexEnd:5},{title:"2-2",level:2,indexStart:5,indexEnd:6}],entry:!1,rowData:[],showPrompt:!0,showCheckBoxAndIndex:!0,onlyShowIndex:!1,onlyShowCheckBox:!0,showOperate:!0,operateItem:{save:!0,add:!0,remove:!0,up:!0,down:!0},showStatus:!0,option_limit:10,searchDelayTime:500,showOptionPage:!0}},created:function(){for(var e=this,t=[],a=0;a<200;a++)t.push({checked:6==a||3==a||2==a,noCheckAble:1==a||2==a,a1:{type:"opt_mul_select",option:[{id:1,name:"name1"},{id:2,name:"name2"},{id:3,name:"name3"}],value:["name1","name2"],id:[1,2],required:!0},a2:{type:"edit",value:"name0",required:!0},a3:{type:"select",url:o(),dataPos:"data.result",dataTotal:"data.total",value:"",id:""},a4:{type:"mul_select",url:o(),dataPos:"data.result",dataTotal:"data.total",value:[],id:[]},a5:{type:"date",value:"2018-03-03"},a6:{type:"time",value:"08:02:33"},a7:{type:"datetime",required:!0,value:"2012-02-27 08:02:33"},a8:{type:"number",value:a,style:{color:"#000",background:"#ffd0d0"}},a9:{type:"edit",value:a+"-9",id:a},a10:{type:"normal",value:a+"-10",id:a},a11:{type:"normal",value:a+"-11",id:a},a12:{type:"normal",value:a+"-12",id:a},a13:{type:"normal",value:a+"-13",id:a},a14:{type:"normal",value:a+"-14",id:a},a15:{type:"normal",value:a+"-15",id:a},a16:{type:"normal",value:a+"-16",id:a},a17:{type:"normal",value:a+"-17",id:a},a18:{type:"normal",value:a+"-18",id:a},a19:{type:"normal",value:a+"-19",id:a},a20:{type:"edit",value:a+"-20"},a21:{type:"normal",value:a+"-21",id:a},a22:{type:"normal",value:a+"-22",id:a},a23:{type:"normal",value:a+"-23",id:a},a24:{type:"normal",value:a+"-24",id:a},a25:{type:"normal",value:a+"-25",id:a},a26:{type:"normal",value:a+"-26",id:a},a27:{type:"normal",value:a+"-27",id:a},a28:{type:"normal",value:a+"-28",id:a},a29:{type:"normal",value:a+"-29",id:a},a30:{type:"normal",value:30},a31:{type:"normal",value:a+"-31",id:a},a32:{type:"normal",value:a+"-32",id:a},a33:{type:"normal",value:a+"-33",id:a},a34:{type:"normal",value:a+"-34",id:a},a35:{type:"normal",value:a+"-35",id:a},a36:{type:"normal",value:a+"-36",id:a},a37:{type:"normal",value:a+"-37",id:a},a38:{type:"normal",value:a+"-38",id:a},a39:{type:"edit",value:a+"-39",id:a},a40:{type:"date",value:"2018-03-03"}});setTimeout(function(){e.rowData=t,e.$refs.database.doReset(!0)},2e3);var l=0;this.entry={checked:6==l||3==l||2==l,noCheckAble:1==l||2==l,a1:{type:"opt_mul_select",option:[{id:1,name:"name1"},{id:2,name:"name2"},{id:3,name:"name3"}],value:["name2"],id:[2],required:!0},a2:{type:"opt_select",option:[{id:0,name:"name0"},{id:2,name:"name2"},{id:3,name:"name3"}],value:"name0",id:0,required:!0},a3:{type:"select",url:"",dataPos:"data.result",dataTotal:"data.total",value:"",required:!0,id:""},a4:{type:"mul_select",url:"",dataPos:"data.result",dataTotal:"data.total",value:[],id:[]},a5:{type:"date",value:"2018-03-03"},a6:{type:"time",value:"08:02:33"},a7:{type:"datetime",value:"2012-02-27 08:02:33"},a8:{type:"number",value:121,style:{color:"#000",background:"#ffd0d0"}},a9:{type:"edit",value:l+"-9",id:l},a10:{type:"normal",value:l+"-10",id:l},a11:{type:"normal",value:l+"-11",id:l},a12:{type:"normal",value:l+"-12",id:l},a13:{type:"normal",value:l+"-13",id:l},a14:{type:"normal",value:l+"-14",id:l},a15:{type:"normal",value:l+"-15",id:l},a16:{type:"normal",value:l+"-16",id:l},a17:{type:"normal",value:l+"-17",id:l},a18:{type:"normal",value:l+"-18",id:l},a19:{type:"normal",value:l+"-19",id:l},a20:{type:"normal",value:l+"-20",id:l},a21:{type:"normal",value:l+"-21",id:l},a22:{type:"normal",value:l+"-22",id:l},a23:{type:"normal",value:l+"-23",id:l},a24:{type:"normal",value:l+"-24",id:l},a25:{type:"normal",value:l+"-25",id:l},a26:{type:"normal",value:l+"-26",id:l},a27:{type:"normal",value:l+"-27",id:l},a28:{type:"normal",value:l+"-28",id:l},a29:{type:"normal",value:l+"-29",id:l},a30:{type:"normal",value:l+"-30",id:l},a31:{type:"normal",value:l+"-31",id:l},a32:{type:"normal",value:l+"-32",id:l},a33:{type:"normal",value:l+"-33",id:l},a34:{type:"normal",value:l+"-34",id:l},a35:{type:"normal",value:l+"-35",id:l},a36:{type:"normal",value:l+"-36",id:l},a37:{type:"normal",value:l+"-37",id:l},a38:{type:"normal",value:l+"-38",id:l},a39:{type:"normal",value:l+"-39",id:l},a40:{type:"normal",value:l+"-40",id:l}}},watch:{"$store.state.isExpand":function(){var e=this;this.$nextTick(function(){e.doLayout()})}},methods:{selectChange:function(e){console.log(e)},dateChange:function(e){console.log(e)},getTable:function(){var e=this.$refs.database.getTable();console.log(e)},checkedRows:function(){var e=this.$refs.database.checkedRows();console.log(e)},add:function(){this.$refs.database.addLine()},doLayout:function(){this.$refs.database.doLayout()},checkRequired:function(){var e=this.$refs.database.checkRequired();console.log(e)},reset:function(){this.$refs.database.doReset(!0)},saveLine:function(e){console.log(e),"checkSuccess"==e.status&&setTimeout(function(){e.complate()},4500)},removeLine:function(e){setTimeout(function(){e.success()},4500)},xls:function(){for(var e=this.$refs.database.getTable(),t=e.row,a=e.col,l=[],i=0;i<a.length;i++)l.push(a[i].title);for(var o=[],d=0;d<t.length;d++){for(var n=[],r=0;r<a.length;r++){var p=t[d][a[r].props].value;p instanceof Array?n.push(p.join(",")):n.push(p)}o.push(n)}this.$refs.database.exportXLS(l,o)}}},n=d,r=(a("gCoE"),a("KHd+")),p=Object(r["a"])(n,l,i,!1,null,"585d81f2",null);t["default"]=p.exports},gCoE:function(e,t,a){"use strict";var l=a("4iCP"),i=a.n(l);i.a}}]);
//# sourceMappingURL=0.4b21071a.js.map