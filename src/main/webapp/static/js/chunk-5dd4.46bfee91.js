(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5dd4"],{"4v0a":function(e,t,s){},"5R2D":function(e,t,s){"use strict";var i=s("4v0a");s.n(i).a},QhmF:function(e,t,s){"use strict";s.r(t);var i=s("KzkL"),n=s("ExMk"),a={name:"ExamineHandle",components:{XhUserCell:s("8GhS").p},props:{show:{type:Boolean,default:!1},status:{type:[String,Number],default:1},id:[String,Number],recordId:[String,Number],detail:{type:Object,default:function(){return{}}},examineType:{type:String,default:""}},data:function(){return{loading:!1,showDialog:!1,handleType:1,selectUsers:[],content:""}},computed:{title:function(){return 1==this.status?"审批通过":2==this.status?"审批拒绝":4==this.status?"撤回审批":""},placeholder:function(){return 1==this.status?"请输入审批意见（选填）":2==this.status?"请输入审批意见（必填）":4==this.status?"请输入撤回理由（必填）":""}},watch:{show:{handler:function(e){this.showDialog=e},deep:!0,immediate:!0}},mounted:function(){},methods:{submitInfo:function(){2!=this.status&&4!=this.status||this.content?2==this.status||1==this.status?this.handlePassAndReject():4==this.status&&this.handleRevoke():this.$message.error(this.placeholder)},handleRevoke:function(){var e=this;this.loading=!0,this.getRequest()({id:this.id,recordId:this.recordId,status:this.status,remarks:this.content}).then(function(t){e.loading=!1,e.$message.success("操作成功"),e.$emit("save"),e.$bus.emit("examine-handle-bus"),e.$store.dispatch("GetMessageNum"),e.hiddenView()}).catch(function(){e.loading=!1})},getRequest:function(){return{crm_contract:i.b,crm_receivables:i.b,oa_examine:n.e}[this.examineType]},handlePassAndReject:function(){var e=this;this.loading=!0;var t={id:this.id,recordId:this.recordId,status:this.status,remarks:this.content};1==this.status&&2==this.detail.examineType&&1!=this.handleType&&(t.nextUserId=this.selectUsers[0].userId),this.getRequest()(t).then(function(t){e.loading=!1,e.$message.success("操作成功"),e.$emit("save",{type:e.status}),e.hiddenView(),e.$bus.emit("examine-handle-bus"),e.$store.dispatch("GetMessageNum")}).catch(function(){e.loading=!1})},handleClick:function(e){"cancel"==e?this.hiddenView():"confirm"==e&&this.submitInfo()},selectUserFocus:function(){this.handleType=2},selectExamineUser:function(e){this.selectUsers=e.value},hiddenView:function(){this.$emit("close")}}},l=(s("5R2D"),s("ZrdR")),o=Object(l.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.title,"append-to-body":!0,visible:e.showDialog,width:"400px"},on:{"update:visible":function(t){e.showDialog=t},close:e.hiddenView}},[1==e.status&&2==e.detail.examineType?s("div",{staticClass:"handle-type"},[s("flexbox",{staticClass:"handle-item"},[s("el-radio",{attrs:{label:1},model:{value:e.handleType,callback:function(t){e.handleType=t},expression:"handleType"}},[s("span")]),e._v(" "),s("div",{staticStyle:{"font-size":"12px"},nativeOn:{click:function(t){e.handleType=1}}},[e._v("审核结束")])],1),e._v(" "),s("flexbox",{staticClass:"handle-item",attrs:{id:"selectUser"}},[s("el-radio",{attrs:{label:2},model:{value:e.handleType,callback:function(t){e.handleType=t},expression:"handleType"}},[s("span")]),e._v(" "),s("xh-user-cell",{staticClass:"select-user",attrs:{placeholder:"选择下一审批人"},on:{focus:e.selectUserFocus,"value-change":e.selectExamineUser}})],1)],1):e._e(),e._v(" "),1==e.status&&2==e.detail.examineType?s("div",{staticClass:"title"},[e._v("意见")]):e._e(),e._v(" "),s("el-input",{attrs:{rows:5,maxlength:200,placeholder:e.placeholder,type:"textarea",resize:"none","show-word-limit":""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.handleClick("cancel")}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleClick("confirm")}}},[e._v("确 定")])],1)],1)},[],!1,null,"347c3d6a",null);o.options.__file="ExamineHandle.vue";t.default=o.exports}}]);