(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-46e63","chunk-46e6","chunk-46e631","chunk-7caa","chunk-46e631a"],{"7z+D":function(e,t,i){"use strict";var a=i("ExMk"),l=i("Ew9n"),s=i("EP+0"),n=i("3biH"),c=i("Er7M"),r=i("O1Uw"),o=i("7Qib"),d={name:"ExamineDetail",components:{SlideView:l.a,CreateSections:s.a,ExamineInfo:n.a,RelatedBusinessCell:c.a,CRMFullScreenDetail:function(){return i.e("chunk-7caa").then(i.bind(null,"uMjE"))},FileCell:r.a},props:{id:[String,Number],noListenerClass:{type:Array,default:function(){return["list-box"]}}},data:function(){return{loading:!1,categoryId:"",type:"",detail:{examineRecordId:""},list:[],categoryName:"",fileList:[],imgList:[],travelList:[],travelField:[{prop:"vehicle",label:"交通工具"},{prop:"trip",label:"单程往返"},{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"duration",label:"时长（天）"},{prop:"description",label:"备注"}],expensesField:[{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"traffic",label:"交通费（元）"},{prop:"stay",label:"住宿费（元）"},{prop:"diet",label:"餐饮费（元）"},{prop:"other",label:"其他费用（元）"},{prop:"description",label:"费用明细描述"}],relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:{relatedListData:function(){return{contacts:this.detail.contactsList||[],customer:this.detail.customerList||[],business:this.detail.businessList||[],contract:this.detail.contractList||[]}}},watch:{id:function(e){this.getDetial()}},mounted:function(){this.getDetial()},methods:{getBaseInfo:function(){var e=this;this.loading=!0,Object(a.a)({examineId:this.id,isDetail:1}).then(function(t){e.list=t.data,e.loading=!1}).catch(function(){e.loading=!1})},getDetial:function(){var e=this;this.loading=!0,Object(a.j)({examineId:this.id}).then(function(t){e.loading=!1,e.categoryId=t.data.categoryId,e.type=t.data.type,e.getBaseInfo(),e.detail=t.data,e.categoryName=e.detail.category,e.fileList=e.detail.file,e.imgList=e.detail.img,e.travelList=e.detail.examineTravelList}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},checkRelatedDetail:function(e,t){this.relatedID=t[e+"Id"],this.relatedCRMType=e,this.showRelatedDetail=!0},handleFile:function(e,t,i){if("preview"===e){if(t&&t.length>0){var a=t.map(function(e){return e.url=e.filePath,e});this.$bus.emit("preview-image-bus",{index:i,data:a})}}else"download"===e&&Object(o.a)({path:t.filePath,name:t.name})},imgZoom:function(e,t){this.$bus.emit("preview-image-bus",{index:t,data:e.map(function(e,t,i){return{url:e.filePath,name:e.name}})})},downloadFile:function(e){Object(o.a)({path:e.filePath,name:e.name})},examineHandle:function(e){this.$store.dispatch("GetOAMessageNum","examine"),this.$emit("on-examine-handle",e)}}},u=(i("aoc0"),i("ZrdR")),p=Object(u.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{"listener-ids":["workbench-main-container"],"no-listener-class":e.noListenerClass,"body-style":{padding:"10px 30px",height:"100%"}},on:{"side-close":e.hideView}},[a("flexbox",{staticStyle:{height:"100%"},attrs:{orient:"vertical"}},[a("flexbox",{staticClass:"detail-header"},[a("div",{staticClass:"header-name"},[e._v(e._s(e.categoryName))]),e._v(" "),a("img",{staticClass:"header-close",attrs:{src:i("cjwK")},on:{click:e.hideView}})]),e._v(" "),a("div",{staticClass:"detail-body"},[a("flexbox",{attrs:{gutter:0,align:"stretch",wrap:"wrap"}},e._l(e.list,function(t,l){return"examine_cause"!==t.formType&&"business_cause"!==t.formType?a("flexbox-item",{key:l,staticClass:"b-cell",attrs:{span:.5}},["checkbox"===t.formType?a("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[a("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"b-cell-value"},[a("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,i){return a("div",{key:i},[e._v("\n                  "+e._s(t)+"  \n                ")])}))],1)]):"file"===t.formType?a("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[a("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"b-cell-value"},e._l(t.value,function(l,s){return a("flexbox",{key:s,staticClass:"f-item"},[a("img",{staticClass:"f-img",attrs:{src:i("6KEE")}}),e._v(" "),a("div",{staticClass:"f-name"},[e._v(e._s(l.name.length>15?l.name.substring(0,15)+"...":l.name+"("+l.size+")"))]),e._v(" "),a("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){e.handleFile("preview",t.value,s)}}},[e._v("预览")]),e._v(" "),a("el-button",{attrs:{type:"text"},nativeOn:{click:function(t){e.handleFile("download",l,s)}}},[e._v("下载")])],1)}))]):a("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[a("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"b-cell-value"},[e._v(e._s(t.value))])])],1):e._e()})),e._v(" "),e.fileList.length>0||e.imgList.length>0?a("div",{staticClass:"accessory"},[a("div",{staticClass:"upload-img-box"},e._l(e.imgList,function(t,i){return a("div",{key:i,staticClass:"img-list",on:{click:function(t){e.imgZoom(e.imgList,i)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.filePath,expression:"imgItem.filePath"}],key:t.filePath})])})),e._v(" "),a("div",{staticClass:"accessory-box"},e._l(e.fileList,function(e,t){return a("file-cell",{key:t,attrs:{data:e,"cell-index":t}})}))]):e._e(),e._v(" "),e.type&&3==e.type&&e.travelList&&e.travelList.length>0?a("create-sections",{staticClass:"create-sections",attrs:{title:"行程"}},[a("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},e._l(e.travelField,function(t,i){return a("el-table-column",{key:i,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[a("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}))],1):e._e(),e._v(" "),e.type&&5==e.type&&e.travelList&&e.travelList.length>0?a("create-sections",{staticClass:"create-sections",attrs:{title:"报销"}},[a("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},[e._l(e.expensesField,function(t,i){return a("el-table-column",{key:i,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[a("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),a("el-table-column",{attrs:{label:"发票",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("flexbox",{attrs:{justify:"center"}},[a("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){e.handleFile("preview",t.row.img,0)}}},[e._v(e._s(t.row.img.length)+"张")])],1)]}}])})],2)],1):e._e(),e._v(" "),e.relatedListData.contacts.length>0||e.relatedListData.customer.length>0||e.relatedListData.business.length>0||e.relatedListData.contract.length>0?a("create-sections",{staticClass:"create-sections",attrs:{title:"关联业务"}},[a("div",{staticClass:"related-business create-sections-content"},e._l(e.relatedListData,function(t,i){return a("div",{key:i},e._l(t,function(t,l){return a("related-business-cell",{key:l,attrs:{data:t,"cell-index":l,type:i,"show-foot":!1},nativeOn:{click:function(a){e.checkRelatedDetail(i,t)}}})}))}))]):e._e(),e._v(" "),a("create-sections",{staticClass:"create-sections",attrs:{title:"审核信息"}},[a("examine-info",{staticClass:"create-sections-content",attrs:{id:e.id,"record-id":e.detail.examineRecordId,"examine-type":"oa_examine"},on:{"on-handle":e.examineHandle}})],1)],1)],1),e._v(" "),a("c-r-m-full-screen-detail",{attrs:{visible:e.showRelatedDetail,"crm-type":e.relatedCRMType,id:e.relatedID},on:{"update:visible":function(t){e.showRelatedDetail=t}}})],1)},[],!1,null,"81c16166",null);p.options.__file="examineDetail.vue";t.a=p.exports},ODkR:function(e,t,i){},UZZ0:function(e,t,i){"use strict";var a=i("ODkR");i.n(a).a},aoc0:function(e,t,i){"use strict";var a=i("n68K");i.n(a).a},n68K:function(e,t,i){},uMjE:function(e,t,i){"use strict";i.r(t);var a=i("7Qib"),l=i("mqlf"),s=i("ppJE"),n=i("PS1M"),c=i("n1dw"),r=i("xfX+"),o=i("8gwX"),d=i("K6D0"),u=i("7z+D"),p={name:"CRMFullScreenDetail",components:{ClueDetail:l.a,CustomerDetail:s.a,ContactsDetail:n.a,BusinessDetail:c.a,ContractDetail:r.a,ProductDetail:o.a,MoneyDetail:d.a,ExamineDetail:u.a},props:{id:[String,Number],crmType:{type:String,default:""},visible:{type:Boolean,default:!1}},data:function(){return{showDetail:!1}},computed:{tabName:function(){return"leads"==this.crmType?"clue-detail":"customer"==this.crmType?"customer-detail":"contacts"==this.crmType?"contacts-detail":"business"==this.crmType?"business-detail":"contract"==this.crmType?"contract-detail":"product"==this.crmType?"product-detail":"receivables"==this.crmType?"money-detail":"examine"==this.crmType?"examine-detail":""}},watch:{visible:function(e){this.showDetail=e,e&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(a.g)())},showDetail:function(e){var t=this;e||setTimeout(function(){t.$emit("update:visible",!1)},350)}},mounted:function(){this.visible&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(a.g)())},beforeDestroy:function(){this.$el&&this.$el.parentNode&&(this.$el.parentNode.removeChild(this.$el),this.$el.removeEventListener("click",this.handleDocumentClick,!1))},methods:{hiddenView:function(){this.showDetail=!1},handleDocumentClick:function(e){e.stopPropagation(),this.$el==e.target&&(this.showDetail=!1)},detailHandle:function(e){"alloc"!==e.type&&"get"!==e.type&&"transfer"!==e.type&&"transform"!==e.type&&"delete"!==e.type&&"put_seas"!==e.type||(this.showDetail=!1),this.$emit("handle",e)}}},h=(i("UZZ0"),i("ZrdR")),m=Object(h.a)(p,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"full-container"},[e.id&&e.showDetail?i(e.tabName,{tag:"component",staticClass:"d-view",attrs:{"crm-type":e.crmType,id:e.id},on:{handle:e.detailHandle,"hide-view":e.hiddenView}}):e._e()],1)},[],!1,null,"196e9308",null);m.options.__file="CRMFullScreenDetail.vue";t.default=m.exports}}]);