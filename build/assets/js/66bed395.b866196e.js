"use strict";(self.webpackChunktbk_developers=self.webpackChunktbk_developers||[]).push([[9527],{85663:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var r=i(87462),n=(i(67294),i(3905)),o=i(26389),t=i(94891),s=(i(75190),i(47507)),c=i(24310),l=i(63303),p=(i(75035),i(85162));const d={id:"crear-una-inscripcion",title:"Crear una inscripci\xf3n",description:"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior.",sidebar_label:"Crear una inscripci\xf3n",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Oneclick Mall"],description:"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{username:{type:"string",description:"Identificador del usuario registrado en el comercio. Largo ma\u0301ximo 40.",maxLength:40},email:{type:"string",description:"Email del usuario registrado en el comercio. Largo ma\u0301ximo 100.",maxLength:100},response_url:{type:"string",description:"URL del comercio a la cual Webpay redireccionara\u0301 posterior al proceso de inscripci\xf3n Largo ma\u0301ximo 255.",maxLength:255}},example:{username:"juanperez",email:"juan.perez@gmail.com",response_url:"http://www.comercio.cl/return_inscription"}}}},required:!0},responses:{200:{description:"(OK) Se creo una inscripcion correctamente",content:{"application/json":{schema:{type:"object",description:"Una vez que se llama a este endpoint, el usuario debe ser redireccionado vi\u0301a POST a urlInscriptionForm con para\u0301metro TBK_TOKEN igual al token.",properties:{token:{type:"string",description:"Identificador, u\u0301nico, del proceso de inscripcio\u0301n. Largo 64.",maxLength:64},url_webpay:{type:"string",description:"URL de Webpay para iniciar la inscripcio\u0301n. Largo 255.",maxLength:255}},example:{token:"e128a9c24c0a3cbc09223973327b97c8c474f6b74be509196cce4caf162a016a",url_webpay:"https://webpay3g.transbank.cl/webpayserver/bp_inscription.cgi"}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"post",path:"/rswebpaytransaction/api/oneclick/v1.2/inscriptions",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},jsonRequestBodyExample:{username:"juanperez",email:"juan.perez@gmail.com",response_url:"http://www.comercio.cl/return_inscription"},info:{title:"API Oneclick Mall",description:"La modalidad de pago Oneclick permite al tarjetahabiente realizar pagos en el comercio sin la necesidad de ingresar cada vez informacio\u0301n de la tarjeta de cre\u0301dito al momento de realizar la compra. El modelo de pago contempla un proceso previo de inscripcio\u0301n o enrolamiento del tarjetahabiente, a trave\u0301s del comercio, que desee utilizar el servicio. Este tipo de pago facilita la venta, disminuye el tiempo de la transaccio\u0301n y reduce los riesgos de ingreso erro\u0301neo de los datos del medio de pago.\nEl proceso de integracio\u0301n con Oneclick consiste en desarrollar por parte del comercio las llamadas a los servicios web dispuestos por Transbank para la inscripcio\u0301n de los tarjetahabientes, asi\u0301 como para la realizacio\u0301n de los pagos.",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Crear una inscripci\xf3n",description:{content:"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior.",type:"text/plain"},url:{path:["rswebpaytransaction","api","oneclick","v1.2","inscriptions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/Oneclick/api-oneclick-mall",custom_edit_url:null},u=void 0,m={unversionedId:"Oneclick/crear-una-inscripcion",id:"Oneclick/crear-una-inscripcion",title:"Crear una inscripci\xf3n",description:"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior.",source:"@site/docs/Oneclick/crear-una-inscripcion.api.mdx",sourceDirName:"Oneclick",slug:"/Oneclick/crear-una-inscripcion",permalink:"/tbk-developers-new-site/docs/Oneclick/crear-una-inscripcion",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"crear-una-inscripcion",title:"Crear una inscripci\xf3n",description:"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior.",sidebar_label:"Crear una inscripci\xf3n",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Oneclick Mall"],description:"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{username:{type:"string",description:"Identificador del usuario registrado en el comercio. Largo ma\u0301ximo 40.",maxLength:40},email:{type:"string",description:"Email del usuario registrado en el comercio. Largo ma\u0301ximo 100.",maxLength:100},response_url:{type:"string",description:"URL del comercio a la cual Webpay redireccionara\u0301 posterior al proceso de inscripci\xf3n Largo ma\u0301ximo 255.",maxLength:255}},example:{username:"juanperez",email:"juan.perez@gmail.com",response_url:"http://www.comercio.cl/return_inscription"}}}},required:!0},responses:{200:{description:"(OK) Se creo una inscripcion correctamente",content:{"application/json":{schema:{type:"object",description:"Una vez que se llama a este endpoint, el usuario debe ser redireccionado vi\u0301a POST a urlInscriptionForm con para\u0301metro TBK_TOKEN igual al token.",properties:{token:{type:"string",description:"Identificador, u\u0301nico, del proceso de inscripcio\u0301n. Largo 64.",maxLength:64},url_webpay:{type:"string",description:"URL de Webpay para iniciar la inscripcio\u0301n. Largo 255.",maxLength:255}},example:{token:"e128a9c24c0a3cbc09223973327b97c8c474f6b74be509196cce4caf162a016a",url_webpay:"https://webpay3g.transbank.cl/webpayserver/bp_inscription.cgi"}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"post",path:"/rswebpaytransaction/api/oneclick/v1.2/inscriptions",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},jsonRequestBodyExample:{username:"juanperez",email:"juan.perez@gmail.com",response_url:"http://www.comercio.cl/return_inscription"},info:{title:"API Oneclick Mall",description:"La modalidad de pago Oneclick permite al tarjetahabiente realizar pagos en el comercio sin la necesidad de ingresar cada vez informacio\u0301n de la tarjeta de cre\u0301dito al momento de realizar la compra. El modelo de pago contempla un proceso previo de inscripcio\u0301n o enrolamiento del tarjetahabiente, a trave\u0301s del comercio, que desee utilizar el servicio. Este tipo de pago facilita la venta, disminuye el tiempo de la transaccio\u0301n y reduce los riesgos de ingreso erro\u0301neo de los datos del medio de pago.\nEl proceso de integracio\u0301n con Oneclick consiste en desarrollar por parte del comercio las llamadas a los servicios web dispuestos por Transbank para la inscripcio\u0301n de los tarjetahabientes, asi\u0301 como para la realizacio\u0301n de los pagos.",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Crear una inscripci\xf3n",description:{content:"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior.",type:"text/plain"},url:{path:["rswebpaytransaction","api","oneclick","v1.2","inscriptions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/Oneclick/api-oneclick-mall",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Confirmar una inscripci\xf3n",permalink:"/tbk-developers-new-site/docs/Oneclick/confirmar-una-inscripcion"},next:{title:"Eliminar una inscripci\xf3n",permalink:"/tbk-developers-new-site/docs/Oneclick/eliminar-una-inscripcion"}},b={},v=[{value:"Crear una inscripci\xf3n",id:"crear-una-inscripci\xf3n",level:2}],k={toc:v};function y(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"crear-una-inscripci\xf3n"},"Crear una inscripci\xf3n"),(0,n.kt)("p",null,"Permite comenzar con la inscripcio\u0301n de de la tarjeta del usuario. Retorna como respuesta un token, que representa la inscripcio\u0301n, y una URL (urlWebpay). El usuario debe ser redireccionado a urlWebpay, enviando como para\u0301metro TBK_TOKEN el token recibido (Puede ser una redirecci\xf3n por POST o GET). Nota que a diferencia de Webpay Plus, donde el par\xe1metro se llama token_ws, en Oneclick el par\xe1metro se llama TBK_TOKEN. Un mismo username solo puede tener una tarjeta inscrita en tu comercio. Si eventualmente se solicita una nueva inscripci\xf3n a un username previamente registrado, al finalizar la nueva inscripci\xf3n el tbk_user de la tarjeta anterior ser\xe1 inv\xe1lido. Como recomendaci\xf3n, si un usuario en tu sistema ya tiene una tarjeta inscrita, no deber\xeda poder volver a inscribir una nueva a menos que elimine la anterior."),(0,n.kt)(t.Z,{mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"username",required:!1,deprecated:void 0,schemaDescription:"Identificador del usuario registrado en el comercio. Largo ma\u0301ximo 40.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 40 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"email",required:!1,deprecated:void 0,schemaDescription:"Email del usuario registrado en el comercio. Largo ma\u0301ximo 100.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"response_url",required:!1,deprecated:void 0,schemaDescription:"URL del comercio a la cual Webpay redireccionara\u0301 posterior al proceso de inscripci\xf3n Largo ma\u0301ximo 255.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"(OK) Se creo una inscripcion correctamente")),(0,n.kt)("div",null,(0,n.kt)(t.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"token",required:!1,deprecated:void 0,schemaDescription:"Identificador, u\u0301nico, del proceso de inscripcio\u0301n. Largo 64.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"url_webpay",required:!1,deprecated:void 0,schemaDescription:"URL de Webpay para iniciar la inscripcio\u0301n. Largo 255.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "token": "e128a9c24c0a3cbc09223973327b97c8c474f6b74be509196cce4caf162a016a",\n  "url_webpay": "https://webpay3g.transbank.cl/webpayserver/bp_inscription.cgi"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado")),(0,n.kt)("div",null,(0,n.kt)(t.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"error_message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "error_message": "token is required"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"No autorizado. API Key y/o API Secret inv\xe1lidos")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"La transacci\xf3n no ha sido encontrada")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"M\xe9todo no permitido")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"No fue posible procesar la respuesta en el formato que el cliente indica")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Tipo de mensaje no permitido")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Ha ocurrido un error inesperado")),(0,n.kt)("div",null)))))}y.isMDXComponent=!0}}]);