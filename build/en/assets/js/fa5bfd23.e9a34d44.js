"use strict";(self.webpackChunktbk_developers=self.webpackChunktbk_developers||[]).push([[7249],{19173:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>b});var o=r(87462),t=(r(67294),r(3905)),i=r(26389),n=r(94891),s=(r(75190),r(47507)),l=r(24310),c=r(63303),d=(r(75035),r(85162));const p={id:"crear-una-transaccion-mall",title:"Crear una transacci\xf3n mall",description:"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente.",sidebar_label:"Crear una transacci\xf3n mall",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Webpay Plus Mall"],description:"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{buy_order:{type:"string",description:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",example:"ordenCompra12345678",maxLength:26},session_id:{type:"string",description:"Identificador de sesio\u0301n, uso interno de comercio, este valor es devuelto al final de la transaccio\u0301n. Largo ma\u0301ximo 61",example:"sesion1234557545",maxLength:61},returnUrl:{type:"string",description:"URL del comercio, a la cual Webpay redireccionara\u0301 posterior al proceso de autorizacio\u0301n. Largo ma\u0301ximo 256",example:"http://www.comercio.cl/webpay/retorno",maxLength:256},details:{type:"array",items:{type:"object",properties:{amount:{type:"number",description:"Monto de la transaccio\u0301n. Ma\u0301ximo 2 decimales para USD. Largo ma\u0301ximo 17",format:"float",example:1e4},commerce_code:{type:"string",description:"Co\u0301digo comercio asignado por Transbank para la tienda perteneciente al mall a la cual corresponde esta transacci\xf3n. Largo 12.",example:"597055555537",minLength:12,maxLength:12},buy_order:{type:"string",description:"Orden de compra de la tienda del mall. Este nu\u0301mero debe ser u\u0301nico para cada transaccio\u0301n. Largo ma\u0301ximo 26. La orden de compra puede tener Nu\u0301meros, letras, mayu\u0301sculas y minu\u0301sculas, y los signos |_=&%.,~:/?[+!@()>-.",maxLength:26,example:"ordenCompraDetalle4321"}}}}},example:{buy_order:"ordenCompra12345678,",session_id:"sesion1234557545,",returnUrl:"http://www.comercio.cl/webpay/retorno,",details:[{amount:1e4,commerce_code:"597055555536",buy_order:"ordenCompraDetalle1234"},{amount:12e3,commerce_code:"597055555537",buy_order:"ordenCompraDetalle4321"}]}}}},required:!0},responses:{200:{description:"(OK) Se inicializo una transaccion correctamente",content:{"application/json":{schema:{type:"object",properties:{token:{type:"string",description:"Token de la transaccio\u0301n. Largo 64",example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3",minLength:64,maxLength:64},url:{type:"string",description:"URL de formulario de pago Webpay. Largo ma\u0301ximo 255.",example:"https://webpay3gint.transbank.cl/webpayserver/initTransaction",maxLength:255}}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"post",path:"/rswebpaytransaction/api/webpay/v1.2/transactions",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},jsonRequestBodyExample:{buy_order:"ordenCompra12345678,",session_id:"sesion1234557545,",returnUrl:"http://www.comercio.cl/webpay/retorno,",details:[{amount:1e4,commerce_code:"597055555536",buy_order:"ordenCompraDetalle1234"},{amount:12e3,commerce_code:"597055555537",buy_order:"ordenCompraDetalle4321"}]},info:{title:"API Transaccion mall - WebPay Plus Mall",description:"Una transaccio\u0301n Mall Normal corresponde a una solicitud de autorizacio\u0301n financiera de un conjunto de pagos con tarjetas de cre\u0301dito o de\u0301bito, en donde quie\u0301n realiza el pago ingresa al sitio del comercio, selecciona productos o servicios, y el ingreso asociado a los datos de la tarjeta de cre\u0301dito o de\u0301bito lo realiza una u\u0301nica vez en forma segura en Webpay para el conjunto de pagos. Cada pago tendra\u0301 su propio resultado, autorizado o rechazado. Revisa m\xe1s detalles sobre esta modalidad en la documentaci\xf3n",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Crear una transacci\xf3n mall",description:{content:"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente.",type:"text/plain"},url:{path:["rswebpaytransaction","api","webpay","v1.2","transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/WebpayPlusMall/api-transaccion-mall-webpay-plus-mall",custom_edit_url:null},m=void 0,u={unversionedId:"WebpayPlusMall/crear-una-transaccion-mall",id:"WebpayPlusMall/crear-una-transaccion-mall",title:"Crear una transacci\xf3n mall",description:"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente.",source:"@site/docs/WebpayPlusMall/crear-una-transaccion-mall.api.mdx",sourceDirName:"WebpayPlusMall",slug:"/WebpayPlusMall/crear-una-transaccion-mall",permalink:"/tbk-developers-new-site/en/docs/WebpayPlusMall/crear-una-transaccion-mall",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"crear-una-transaccion-mall",title:"Crear una transacci\xf3n mall",description:"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente.",sidebar_label:"Crear una transacci\xf3n mall",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Webpay Plus Mall"],description:"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{buy_order:{type:"string",description:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",example:"ordenCompra12345678",maxLength:26},session_id:{type:"string",description:"Identificador de sesio\u0301n, uso interno de comercio, este valor es devuelto al final de la transaccio\u0301n. Largo ma\u0301ximo 61",example:"sesion1234557545",maxLength:61},returnUrl:{type:"string",description:"URL del comercio, a la cual Webpay redireccionara\u0301 posterior al proceso de autorizacio\u0301n. Largo ma\u0301ximo 256",example:"http://www.comercio.cl/webpay/retorno",maxLength:256},details:{type:"array",items:{type:"object",properties:{amount:{type:"number",description:"Monto de la transaccio\u0301n. Ma\u0301ximo 2 decimales para USD. Largo ma\u0301ximo 17",format:"float",example:1e4},commerce_code:{type:"string",description:"Co\u0301digo comercio asignado por Transbank para la tienda perteneciente al mall a la cual corresponde esta transacci\xf3n. Largo 12.",example:"597055555537",minLength:12,maxLength:12},buy_order:{type:"string",description:"Orden de compra de la tienda del mall. Este nu\u0301mero debe ser u\u0301nico para cada transaccio\u0301n. Largo ma\u0301ximo 26. La orden de compra puede tener Nu\u0301meros, letras, mayu\u0301sculas y minu\u0301sculas, y los signos |_=&%.,~:/?[+!@()>-.",maxLength:26,example:"ordenCompraDetalle4321"}}}}},example:{buy_order:"ordenCompra12345678,",session_id:"sesion1234557545,",returnUrl:"http://www.comercio.cl/webpay/retorno,",details:[{amount:1e4,commerce_code:"597055555536",buy_order:"ordenCompraDetalle1234"},{amount:12e3,commerce_code:"597055555537",buy_order:"ordenCompraDetalle4321"}]}}}},required:!0},responses:{200:{description:"(OK) Se inicializo una transaccion correctamente",content:{"application/json":{schema:{type:"object",properties:{token:{type:"string",description:"Token de la transaccio\u0301n. Largo 64",example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3",minLength:64,maxLength:64},url:{type:"string",description:"URL de formulario de pago Webpay. Largo ma\u0301ximo 255.",example:"https://webpay3gint.transbank.cl/webpayserver/initTransaction",maxLength:255}}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"post",path:"/rswebpaytransaction/api/webpay/v1.2/transactions",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},jsonRequestBodyExample:{buy_order:"ordenCompra12345678,",session_id:"sesion1234557545,",returnUrl:"http://www.comercio.cl/webpay/retorno,",details:[{amount:1e4,commerce_code:"597055555536",buy_order:"ordenCompraDetalle1234"},{amount:12e3,commerce_code:"597055555537",buy_order:"ordenCompraDetalle4321"}]},info:{title:"API Transaccion mall - WebPay Plus Mall",description:"Una transaccio\u0301n Mall Normal corresponde a una solicitud de autorizacio\u0301n financiera de un conjunto de pagos con tarjetas de cre\u0301dito o de\u0301bito, en donde quie\u0301n realiza el pago ingresa al sitio del comercio, selecciona productos o servicios, y el ingreso asociado a los datos de la tarjeta de cre\u0301dito o de\u0301bito lo realiza una u\u0301nica vez en forma segura en Webpay para el conjunto de pagos. Cada pago tendra\u0301 su propio resultado, autorizado o rechazado. Revisa m\xe1s detalles sobre esta modalidad en la documentaci\xf3n",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Crear una transacci\xf3n mall",description:{content:"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente.",type:"text/plain"},url:{path:["rswebpaytransaction","api","webpay","v1.2","transactions"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/WebpayPlusMall/api-transaccion-mall-webpay-plus-mall",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Confirmar una transacci\xf3n mall",permalink:"/tbk-developers-new-site/en/docs/WebpayPlusMall/confirmar-una-transaccion-mall"},next:{title:"Obtener estado de una transacci\xf3n mall",permalink:"/tbk-developers-new-site/en/docs/WebpayPlusMall/obtener-estado-de-una-transaccion-mall"}},y={},b=[{value:"Crear una transacci\xf3n mall",id:"crear-una-transacci\xf3n-mall",level:2}],g={toc:b};function k(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"crear-una-transacci\xf3n-mall"},"Crear una transacci\xf3n mall"),(0,t.kt)("p",null,"Esta operaci\xf3n te permite iniciar o crear varias transacciones de una sola vez, Webpay Plus Mall procesa el requerimiento y entrega como resultado de la operaci\xf3n el token de la transacci\xf3n y URL de redireccionamiento a la cual se deber\xe1 redirigir al tarjetahabiente."),(0,t.kt)(n.Z,{mdxType:"MimeTabs"},(0,t.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Request Body"),(0,t.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!1,name:"buy_order",required:!1,deprecated:void 0,schemaDescription:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",schemaName:"string",qualifierMessage:"**Possible values:** `<= 26 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"session_id",required:!1,deprecated:void 0,schemaDescription:"Identificador de sesio\u0301n, uso interno de comercio, este valor es devuelto al final de la transaccio\u0301n. Largo ma\u0301ximo 61",schemaName:"string",qualifierMessage:"**Possible values:** `<= 61 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"returnUrl",required:!1,deprecated:void 0,schemaDescription:"URL del comercio, a la cual Webpay redireccionara\u0301 posterior al proceso de autorizacio\u0301n. Largo ma\u0301ximo 256",schemaName:"string",qualifierMessage:"**Possible values:** `<= 256 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{}},(0,t.kt)("summary",{style:{}},(0,t.kt)("strong",null,"details"),(0,t.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!1,name:"amount",required:!1,deprecated:void 0,schemaDescription:"Monto de la transaccio\u0301n. Ma\u0301ximo 2 decimales para USD. Largo ma\u0301ximo 17",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"commerce_code",required:!1,deprecated:void 0,schemaDescription:"Co\u0301digo comercio asignado por Transbank para la tienda perteneciente al mall a la cual corresponde esta transacci\xf3n. Largo 12.",schemaName:"string",qualifierMessage:"**Possible values:** `>= 12 characters` and `<= 12 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"buy_order",required:!1,deprecated:void 0,schemaDescription:"Orden de compra de la tienda del mall. Este nu\u0301mero debe ser u\u0301nico para cada transaccio\u0301n. Largo ma\u0301ximo 26. La orden de compra puede tener Nu\u0301meros, letras, mayu\u0301sculas y minu\u0301sculas, y los signos |_=&%.,~:/?[+!@()>-.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 26 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,t.kt)("div",null,(0,t.kt)(i.Z,{mdxType:"ApiTabs"},(0,t.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"(OK) Se inicializo una transaccion correctamente")),(0,t.kt)("div",null,(0,t.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(c.Z,{mdxType:"SchemaTabs"},(0,t.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!1,name:"token",required:!1,deprecated:void 0,schemaDescription:"Token de la transaccio\u0301n. Largo 64",schemaName:"string",qualifierMessage:"**Possible values:** `>= 64 characters` and `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:"URL de formulario de pago Webpay. Largo ma\u0301ximo 255.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,t.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(s.Z,{responseExample:'{\n  "token": "e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3",\n  "url": "https://webpay3gint.transbank.cl/webpayserver/initTransaction"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado")),(0,t.kt)("div",null,(0,t.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(c.Z,{mdxType:"SchemaTabs"},(0,t.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!1,name:"error_message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,t.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(s.Z,{responseExample:'{\n  "error_message": "token is required"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"No autorizado. API Key y/o API Secret inv\xe1lidos")),(0,t.kt)("div",null)),(0,t.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"La transacci\xf3n no ha sido encontrada")),(0,t.kt)("div",null)),(0,t.kt)(d.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"M\xe9todo no permitido")),(0,t.kt)("div",null)),(0,t.kt)(d.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"No fue posible procesar la respuesta en el formato que el cliente indica")),(0,t.kt)("div",null)),(0,t.kt)(d.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Tipo de mensaje no permitido")),(0,t.kt)("div",null)),(0,t.kt)(d.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios")),(0,t.kt)("div",null)),(0,t.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Ha ocurrido un error inesperado")),(0,t.kt)("div",null)))))}k.isMDXComponent=!0}}]);