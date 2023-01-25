"use strict";(self.webpackChunktbk_developers=self.webpackChunktbk_developers||[]).push([[3133],{58595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),o=a(94891),n=a(74933),p=(a(47507),a(24310)),l=a(63303),d=a(75035),m=a(85162);const c={id:"update-user",title:"Updated user",description:"This can only be done by the logged in user.",sidebar_label:"Updated user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"This can only be done by the logged in user.",operationId:"updateUser",parameters:[{name:"username",in:"path",description:"name that need to be deleted",required:!0,schema:{type:"string"}}],responses:{400:{description:"Invalid user supplied"},404:{description:"User not found"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"integer",format:"int64",readOnly:!0},pet:{oneOf:[{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}},{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"}}}},description:"Updated user object",required:!0},method:"put",path:"/user/{username}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{pet:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},username:"John78",firstName:"John",lastName:"Smith",email:"john.smith@example.com",password:"drowssaP123",phone:"+1-202-555-0192",userStatus:0},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Updated user",description:{content:"This can only be done by the logged in user.",type:"text/plain"},url:{path:["user",":username"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) name that need to be deleted",type:"text/plain"},type:"any",value:"",key:"username"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/petstore/swagger-petstore-yaml"},u=void 0,g={unversionedId:"petstore/update-user",id:"petstore/update-user",title:"Updated user",description:"This can only be done by the logged in user.",source:"@site/docs/petstore/update-user.api.mdx",sourceDirName:"petstore",slug:"/petstore/update-user",permalink:"/tbk-developers-new-site/docs/petstore/update-user",draft:!1,editUrl:"https://github.com/continuum/tbk-developers-new-site/tree/main/docs/petstore/update-user.api.mdx",tags:[],version:"current",frontMatter:{id:"update-user",title:"Updated user",description:"This can only be done by the logged in user.",sidebar_label:"Updated user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"This can only be done by the logged in user.",operationId:"updateUser",parameters:[{name:"username",in:"path",description:"name that need to be deleted",required:!0,schema:{type:"string"}}],responses:{400:{description:"Invalid user supplied"},404:{description:"User not found"}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"integer",format:"int64",readOnly:!0},pet:{oneOf:[{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"}}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}},{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^\\+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"}}}},description:"Updated user object",required:!0},method:"put",path:"/user/{username}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{pet:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},username:"John78",firstName:"John",lastName:"Smith",email:"john.smith@example.com",password:"drowssaP123",phone:"+1-202-555-0192",userStatus:0},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Updated user",description:{content:"This can only be done by the logged in user.",type:"text/plain"},url:{path:["user",":username"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) name that need to be deleted",type:"text/plain"},type:"any",value:"",key:"username"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/petstore/swagger-petstore-yaml"},sidebar:"openApiSidebar",previous:{title:"Get user by user name",permalink:"/tbk-developers-new-site/docs/petstore/get-user-by-name"},next:{title:"Delete user",permalink:"/tbk-developers-new-site/docs/petstore/delete-user"}},h={},y=[{value:"Updated user",id:"updated-user",level:2}],f={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"updated-user"},"Updated user"),(0,s.kt)("p",null,"This can only be done by the logged in user."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"username",in:"path",description:"name that need to be deleted",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"Updated user object"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"pet"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"pet",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"category"),(0,s.kt)("span",{style:{opacity:"0.6"}}," Category")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Category name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"sub"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Test Sub Category")),(0,s.kt)(p.Z,{collapsible:!1,name:"prop1",required:!1,schemaDescription:"Dumb Property",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:"The name given to a pet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"photoUrls",required:!0,schemaDescription:"The list of URL to a cute photos featuring pet",schemaName:"url[]",qualifierMessage:"**Possible values:** `<= 20`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"friend",required:!1,schemaDescription:void 0,schemaName:"circular(pet)",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"tags"),(0,s.kt)("span",{style:{opacity:"0.6"}}," Tag[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,s.kt)("inlineCode",{parentName:"p"},">= 1"))),(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Tags attached to the pet")),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Tag name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Pet status in the store",schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)("div",{className:"discriminatorItem"},(0,s.kt)("div",null,(0,s.kt)("strong",{style:{paddingLeft:"1rem"}},"petType"),(0,s.kt)("span",{style:{opacity:"0.6"}}," string"),(0,s.kt)("div",{style:{paddingLeft:"1rem"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,s.kt)("inlineCode",{parentName:"p"},"cat"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"dog"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"bee"),"]")),(0,s.kt)("div",{style:{paddingLeft:"1rem"}},(0,s.kt)("p",null,"Type of a pet")),(0,s.kt)(d.Z,{mdxType:"DiscriminatorTabs"},(0,s.kt)(m.Z,{label:"cat",value:"0-item-discriminator",mdxType:"TabItem"},(0,s.kt)("div",{style:{marginLeft:"-4px"}},(0,s.kt)(p.Z,{collapsible:!1,name:"huntingSkill",required:!0,schemaDescription:"The measured skill for hunting",schemaName:"string",qualifierMessage:"**Possible values:** [`clueless`, `lazy`, `adventurous`, `aggressive`]",defaultValue:"lazy",mdxType:"SchemaItem"}))),(0,s.kt)(m.Z,{label:"dog",value:"1-item-discriminator",mdxType:"TabItem"},(0,s.kt)("div",{style:{marginLeft:"-4px"}},(0,s.kt)(p.Z,{collapsible:!1,name:"packSize",required:!0,schemaDescription:"The size of the pack the dog is from",schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}))),(0,s.kt)(m.Z,{label:"bee",value:"2-item-discriminator",mdxType:"TabItem"},(0,s.kt)("div",{style:{marginLeft:"-4px"}},(0,s.kt)(p.Z,{collapsible:!1,name:"honeyPerDay",required:!0,schemaDescription:"Average amount of honey produced per day in ounces",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"tag",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Tag name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(p.Z,{collapsible:!1,name:"username",required:!1,schemaDescription:"User supplied username",schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"firstName",required:!1,schemaDescription:"User first name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"lastName",required:!1,schemaDescription:"User last name",schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:"User email address",schemaName:"email",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"password",required:!1,schemaDescription:"User password, MUST contain a mix of upper and lower case letters, as well as digits",schemaName:"password",qualifierMessage:"**Possible values:** `>= 8 characters`, Value must match regular expression `/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"phone",required:!1,schemaDescription:"User phone number in international format",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `/^\\+(?:[0-9]-?){6,14}[0-9]$/`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"userStatus",required:!1,schemaDescription:"User status",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Invalid user supplied")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"User not found")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);