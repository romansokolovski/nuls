webpackJsonp([20],{"2VZf":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("KcW0"),n=e("+1pJ"),o=e("x47x"),l=e("9woI"),i=e.n(l),c={data:function(){return{loading:!1,tabelShow:!1,accountAddressOk:!0,accountAddress:[],accountAddressValue:localStorage.getItem("newAccountAddress"),activeName:sessionStorage.getItem("consensusTabName"),tabName:"first",creditValuesShow0:!1,creditValuesShow1:!1,creditValuesShow2:!1,noDataOK:!1,myConsensusSizeOK:!0,allAgentCount:0,allTotalDeposit:0,myInfoData:{agentCount:0,totalDeposit:0,reward:0,joinAgentCount:0,usableBalance:0,rewardOfDay:0},creditColor:"#6e84f7",totalColor:"#f64b3e",memberColor:"#82BD39",allConsensus:[],allEvents:1,totalAll:0,myConsensus:[],myEvents:1,myTotalAll:0,consensusSetInterval:null}},components:{ProgressBar:a.a,AccountAddressBar:n.a},computed:{getAddressList:function(){return this.$store.getters.getAddressList}},created:function(){var s=this;this.getConsensus("/consensus"),""!==localStorage.getItem("newAccountAddress")&&this.getConsensusAddress("/consensus/address/"+localStorage.getItem("newAccountAddress")),this.getAllConsensus("/consensus/agent/list",{pageSize:"12",pageNumber:"1"}),""!==localStorage.getItem("newAccountAddress")&&(this.accountAddressValue=localStorage.getItem("newAccountAddress"),this.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageSize:"12",pageNumber:"1"}),this.consensusSetInterval=setInterval(function(){s.getConsensusAddress("/consensus/address/"+localStorage.getItem("newAccountAddress")),"first"===s.tabName?s.getAllConsensus("/consensus/agent/list",{pageSize:"12",pageNumber:s.allEvents}):s.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageSize:"12",pageNumber:s.myEvents})},5e3))},destroyed:function(){clearInterval(this.consensusSetInterval)},methods:{chenckAccountAddress:function(s){this.accountAddressValue=s,this.getConsensusAddress("/consensus/address/"+s),"first"===sessionStorage.getItem("consensusTabName")?this.getAllConsensus("/consensus/agent/list",{pageSize:"12",pageNumber:"1"}):this.getMyConsensus("/consensus/agent/address/"+s,{pageSize:"12",pageNumber:"1"})},accountCopy:function(){""!==this.accountAddressValue?(i()(this.accountAddressValue),this.$message({message:this.$t("message.c129"),type:"success",duration:"800"})):this.$message({message:this.$t("message.c199"),duration:"800"})},getConsensus:function(s){var t=this;this.$fetch(s).then(function(s){if(s.success){var e=new o.BigNumber(1e-8);t.allAgentCount=s.data.agentCount,t.allTotalDeposit=parseFloat(e.times(s.data.totalDeposit).toString())}})},getConsensusAddress:function(s){var t=this;this.$fetch(s).then(function(s){if(s.success){var e=new o.BigNumber(1e-8);t.myInfoData=s.data,t.myInfoData.reward=parseFloat(e.times(s.data.reward).toString()),t.myInfoData.usableBalance=parseFloat(e.times(s.data.usableBalance).toString()),t.myInfoData.totalDeposit=parseFloat(e.times(s.data.totalDeposit).toString())}})},getMyConsensus:function(s,t){var e=this;this.$fetch(s,t).then(function(s){if(e.myTotalAll=1,s.success){var t=new o.BigNumber(1e-8);0!==s.data.list.length?(e.noDataOK=!1,e.myConsensusSizeOK=!0):(e.noDataOK=!0,e.myConsensusSizeOK=!1);for(var a=0;a<s.data.list.length;a++)s.data.list[a].creditVals=s.data.list[a].creditVal,s.data.list[a].creditVal=((s.data.list[a].creditVal+1)/2*100).toFixed().toString()+"%",s.data.list[a].agentAddresss=s.data.list[a].agentAddress.substr(0,6)+"..."+s.data.list[a].agentAddress.substr(-6),s.data.list[a].totalDeposit=parseFloat(t.times(s.data.list[a].totalDeposit).toString());e.loading=!1,e.tabelShow=!0,e.myTotalAll=s.data.total,e.myConsensus=s.data.list}})},myConsensusSize:function(s){this.myEvents=s,this.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageNumber:s,pageSize:"12"})},getAllConsensus:function(s,t){var e=this;this.$fetch(s,t).then(function(s){if(s.success){for(var t=new o.BigNumber(1e-8),a=0;a<s.data.list.length;a++)s.data.list[a].creditVals=s.data.list[a].creditVal,s.data.list[a].creditVal=((s.data.list[a].creditVal+1)/2*100).toFixed().toString()+"%",s.data.list[a].agentAddresss=s.data.list[a].agentAddress.substr(0,6)+"..."+s.data.list[a].agentAddress.substr(-6),s.data.list[a].totalDeposit=parseFloat(t.times(s.data.list[a].totalDeposit).toString()),s.data.list[a].deposit=parseFloat(t.times(s.data.list[a].deposit).toString());e.loading=!1,e.tabelShow=!0,e.totalAll=s.data.total,e.allConsensus=s.data.list}})},allConsensusSize:function(s){this.allEvents=s,this.getAllConsensus("/consensus/agent/list/",{pageNumber:s,pageSize:"12"})},toNewNode:function(){this.$store.getters.getNetWorkInfo.localBestHeight===this.$store.getters.getNetWorkInfo.netBestHeight?this.$router.push({path:"/consensus/newNode"}):this.$message({message:this.$t("message.c133")})},toPledgeInfo:function(){this.$router.push({path:"/consensus/pledgeInfo"})},toNodePage:function(s){this.$router.push({path:"/consensus/nodePage",query:{address:s}})},toAgencyNode:function(){this.$router.push({path:"/consensus/agencyNode",query:{indexTo:1}})},toMyNode:function(s,t){var e=this;this.$fetch("/consensus/deposit/address/"+s,{agentHash:t,pageSize:"10",pageNumber:this.pageNumber}).then(function(a){a.success&&a.data.list.length>0?e.$router.push({path:"/consensus/myNode",query:{agentAddress:s,agentHash:t}}):e.$router.push({path:"/consensus/nodePage",query:{address:t}})})},toCheck:function(){this.$router.push({path:"/consensus/nodeInfo",query:{agentHash:this.myInfoData.agentHash}})},toggleShow:function(s){},handleClick:function(s){this.tabName=s.name,sessionStorage.setItem("consensusTabName",this.tabName),""!==localStorage.getItem("newAccountAddress")&&("first"!==s.name?this.getMyConsensus("/consensus/agent/address/"+localStorage.getItem("newAccountAddress"),{pageSize:"12",pageNumber:"1"}):this.allConsensusSize(this.allEvents))},toNodeList:function(){this.$router.push({name:"/agencyNode"})}}},r={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"consensus-index"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.tabelShow,expression:"tabelShow"}],staticClass:"account-top"},[e("label",{directives:[{name:"show",rawName:"v-show",value:s.accountAddressOk,expression:"accountAddressOk"}]},[s._v(s._s(s.$t("message.indexAccountAddress"))+"：")]),s._v(" "),e("AccountAddressBar",{on:{chenckAccountAddress:s.chenckAccountAddress}}),s._v(" "),e("i",{staticClass:"copy_icon copyBtn cursor-p",attrs:{"data-clipboard-text":s.accountAddressValue,title:s.$t("message.c143")},on:{click:s.accountCopy}})],1),s._v(" "),e("div",{staticClass:"consensus-index-title"},[e("label",[s._v(s._s(s.$t("message.c1"))+s._s(s.$t("message.c1_1"))+"：")]),s._v("\n    "+s._s(this.allTotalDeposit.toString())+" NULS，\n    "),e("label",[s._v(s._s(s.$t("message.c2"))+"：")]),s._v(s._s(this.allAgentCount)+"\n  ")]),s._v(" "),e("div",{staticClass:"consensus-center"},[e("ul",[e("li",{staticClass:"li-bg"},[e("label",[s._v(s._s(s.$t("message.c3"))+"：")])]),s._v(" "),e("li",{staticClass:"li-bg"},[e("label",[s._v(s._s(s.$t("message.c7"))+"：")]),s._v(s._s(this.myInfoData.reward)+" NULS\n      ")]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c4"))+"：")]),s._v(s._s(this.myInfoData.agentCount)+" "+s._s(s.$t("message.c30"))+"\n        "),this.myInfoData.agentCount>0?e("span",[s._v("("),e("span",{staticClass:"span",on:{click:s.toCheck}},[s._v(s._s(s.$t("message.c5_1")))]),s._v(")")]):e("span",[s._v("("),e("span",{staticClass:"span",on:{click:s.toNewNode}},[s._v(s._s(s.$t("message.c5")))]),s._v(")")])]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c8"))+"：")]),s._v(s._s(this.myInfoData.joinAgentCount)+" "+s._s(s.$t("message.c30"))+"\n        ("),e("span",{staticClass:"span",on:{click:s.toAgencyNode}},[s._v(s._s(s.$t("message.c9")))]),s._v(")\n      ")]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c6"))+"：")]),s._v(s._s(this.myInfoData.usableBalance.toString())+" NULS\n      ")]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c10"))+"：")]),s._v(" "),e("span",{staticClass:"span",on:{click:s.toPledgeInfo}},[s._v("\n                  "+s._s(this.myInfoData.totalDeposit.toString())+" NULS\n                  ")])])])]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.tabelShow,expression:"tabelShow"}],staticClass:"consensus-bottom"},[[e("el-tabs",{on:{"tab-click":s.handleClick},model:{value:s.activeName,callback:function(t){s.activeName=t},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:s.$t("message.c11"),name:"first"}},[s._l(s.allConsensus,function(t,a){return e("div",{staticClass:"div-icon cursor-p fl",on:{click:function(e){s.toNodePage(t.txHash)}}},[e("p",{staticClass:"subscript",class:0===t.status?"stay":""},[s._v("\n              "+s._s(s.$t("message.status"+t.status))+"\n            ")]),s._v(" "),e("h3",{staticClass:"overflow"},[s._v(s._s(t.agentId))]),s._v(" "),e("ul",[e("li",{staticClass:"overflow"},[e("label",[s._v(s._s(s.$t("message.c16"))+"：")]),s._v(s._s(t.agentName?t.agentName:t.agentAddresss)+"\n              ")]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c17"))+"：")]),s._v(s._s(t.commissionRate)+"%")]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c25"))+"：")]),s._v(s._s(t.deposit.toFixed(2))+" NULS")]),s._v(" "),e("li",{staticClass:"cb"},[e("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c19"))+"：")]),s._v(s._s(t.memberCount)+"\n              ")]),s._v(" "),e("li",[e("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c20"))+"：")]),s._v("\n                "+s._s(t.totalDeposit.toFixed(2))+"\n              ")]),s._v(" "),e("li",{on:{mouseover:function(t){s.toggleShow(a)},mouseout:function(t){s.toggleShow(a)}}},[e("label",{staticClass:"fl cursor-p"},[s._v(s._s(s.$t("message.c18"))+":")]),s._v(" "),e("ProgressBar",{attrs:{colorData:t.creditVals<0?"#f64b3e":"#82bd39",widthData:t.creditVal}})],1)])])}),s._v(" "),e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:s.totalAllOk=this.totalAll>12,expression:"totalAllOk = this.totalAll>12 ?true:false"}],staticClass:"cb",attrs:{layout:"prev, pager, next","page-size":12,total:this.totalAll},on:{"current-change":s.allConsensusSize}})],2),s._v(" "),e("el-tab-pane",{attrs:{label:s.$t("message.c12"),name:"second"}},[s._l(s.myConsensus,function(t,a){return e("div",{staticClass:"div-icon cursor-p fl",on:{click:function(e){s.toMyNode(s.accountAddressValue,t.agentHash)}}},[e("p",{staticClass:"subscript",class:0===t.status?"stay":""},[s._v("\n              "+s._s(s.$t("message.status"+t.status))+"\n            ")]),s._v(" "),e("h3",{staticClass:"overflow"},[s._v(s._s(t.agentId))]),s._v(" "),e("ul",[e("li",{staticClass:"overflow"},[e("label",[s._v(s._s(s.$t("message.c16"))+"：")]),s._v(s._s(t.agentName?t.agentName:t.agentAddresss)+"\n              ")]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c17"))+"：")]),s._v(s._s(t.commissionRate)+"%")]),s._v(" "),e("li",[e("label",[s._v(s._s(s.$t("message.c25"))+"：")]),s._v(s._s((1e-8*t.deposit).toFixed(2))+"\n                NULS\n              ")]),s._v(" "),e("li",{staticClass:"cb"},[e("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c19"))+"：")]),s._v(s._s(t.memberCount)+"\n              ")]),s._v(" "),e("li",{staticClass:"cb"},[e("label",{staticClass:"fl"},[s._v(s._s(s.$t("message.c20"))+"：")]),s._v(s._s(t.totalDeposit.toFixed(2))+"\n              ")]),s._v(" "),e("li",{on:{mouseover:function(t){s.toggleShow(a)},mouseout:function(t){s.toggleShow(a)}}},[e("label",{staticClass:"fl cursor-p"},[s._v(s._s(s.$t("message.c18"))+":")]),s._v(" "),e("ProgressBar",{attrs:{colorData:t.creditVals<0?"#f64b3e":"#82bd39",widthData:t.creditVal}})],1)])])}),s._v(" "),e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:s.totalAllOk=this.myTotalAll>12,expression:"totalAllOk = this.myTotalAll>12 ?true:false"}],staticClass:"cb",attrs:{layout:"prev, pager, next","page-size":12,total:this.myTotalAll},on:{"current-change":s.myConsensusSize}}),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.noDataOK,expression:"noDataOK"}],staticClass:"noData",on:{click:s.toNodeList}},[e("i",{staticClass:"el-icon-plus"})])],2)],1)]],2)])},staticRenderFns:[]};var u=e("vSla")(c,r,!1,function(s){e("j0CS")},null,null);t.default=u.exports},j0CS:function(s,t){}});