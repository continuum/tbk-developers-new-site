"use strict";(self.webpackChunktbk_developers=self.webpackChunktbk_developers||[]).push([[1539],{31782:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>y,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>b,toc:()=>g});var n=i(87462),t=(i(67294),i(3905)),o=i(26389),r=i(94891),c=i(75190),s=i(47507),d=i(24310),l=i(63303),m=(i(75035),i(85162));const p={id:"confirmar-una-transaccion",title:"Confirmar una transacci\xf3n",description:"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera",sidebar_label:"Confirmar una transacci\xf3n",hide_title:!0,hide_table_of_contents:!0,api:{tags:["transacciones"],description:"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera",parameters:[{name:"token",in:"path",required:!0,description:"Token de la transaccio\u0301n",schema:{type:"string",minimum:64,maximum:64,example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3"}}],responses:{200:{description:"(OK) El resultado de la transaccio\u0301n",content:{"application/json":{schema:{type:"object",properties:{vci:{type:"string",description:"Resultado de la autenticacio\u0301n del tarjetahabiente. Algunos de ellos son <br>TSY - Autenticaci\xf3n Exitosa <br>TSN - Autenticaci\xf3n Rechazada <br>NP - No Participa, sin autenticaci\xf3n <br>U3 - Falla conexi\xf3n, Autenticaci\xf3n Rechazada <br>INV - Datos Inv\xe1lidos <br>A - Intent\xf3 <br>CNP1 - Comercio no participa <br>EOP - Error operacional <br>BNA - BIN no adherido <br>ENA - Emisor no adherido <br> <br>Para venta extranjera, estos son algunos de los c\xf3digos <br>TSYS (Autenticacio\u0301n exitosa Sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n Existosa) <br>TSAS (Intento, tarjeta no enrolada / emisor no disponible. Resultado autenticaci\xf3n  Autenticacio\u0301n Exitosa) <br>TSNS (Fallido, no autenticado, denegado / no permite intentos. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSRS (Autenticaci\xf3n rechazada - sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n rechazada) <br>TSUS (Autenticaci\xf3n no se pudo realizar por problema t\xe9cnico u otro motivo. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>TSCF (Autenticaci\xf3n con fricci\xf3n (No aceptada por el comercio). Resultado autenticaci\xf3n  Autenticaci\xf3n incompleta) <br>TSYF (Autenticaci\xf3n exitosa con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n exitosa) <br>TSNF (No autenticado. Transacci\xf3n denegada con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSUF (Autenticaci\xf3n con fricci\xf3n no se pudo realizar por problema t\xe9cnico u otro. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>NPC (Comercio no Participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPB (BIN no participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPCB (Comercio y BIN no participan. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>SPCB (Comercio y BIN s\xed participan. Resultado autenticaci\xf3n  Autorizaci\xf3n incompleta) <br>Este campo es informaci\xf3n adicional suplementaria al responseCode pero el comercio no debe validar este campo porque constantemente se agregan nuevos mecanismos de autenticaci\xf3n que se traducen en nuevos valores para este campo que no est\xe1n necesariamente documentados. (En el caso de tarjetas internacionales que no proveen 3D-Secure, la decisi\xf3n del comercio de aceptarlas o no se realiza a nivel de configuraci\xf3n del comercio en Transbank y debe ser conversada con el ejecutivo del comercio)",example:"TCY"},amount:{type:"number",description:"Formato nu\u0301mero entero para transacciones en peso y decimal para transacciones en do\u0301lares. Largo ma\u0301ximo 17",format:"float",example:1e4},status:{type:"string",description:"Estado de la transaccio\u0301n (INITIALIZED, AUTHORIZED, REVERSED, FAILED, NULLIFIED, PARTIALLY_NULLIFIED, CAPTURED). Largo ma\u0301ximo 64",maxLength:64,example:"AUTHORIZED"},buy_order:{type:"string",description:"Orden de compra de la tienda indicado en Transaction.create(). Largo ma\u0301ximo 26",maxLength:64,example:"ordenCompra12345678"},session_id:{type:"string",description:"Identificador de sesio\u0301n, el mismo enviado originalmente por el comercio en Transaction.create(). Largo ma\u0301ximo 61.",maxLength:61,example:"sesion1234557545"},card_detail:{type:"object",description:"Objeto que representa los datos de la tarjeta de cre\u0301dito del tarjeta habiente.",properties:{"card_detail.card_number":{type:"string",description:"4 u\u0301ltimos nu\u0301meros de la tarjeta de cre\u0301dito del tarjetahabiente. Solo para comercios autorizados por Transbank se envi\u0301a el nu\u0301mero completo. Largo ma\u0301ximo 19.",minLength:4,maxLength:19,example:6623}}},accounting_date:{type:"string",description:"Fecha de la autorizacio\u0301n. Largo 4, formato MMDD",maxLength:4,minLength:4,example:"MMDD"},transaction_date:{type:"string",description:"Fecha y hora de la autorizacio\u0301n. Largo 24, formato ISO 8601 (Ej yyyy-mm-ddTHH:mm:ss.xxxZ)",maxLength:24,minLength:24,example:"yyyy-mm-ddTHH:mm:ss.xxxZ"},authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n Largo ma\u0301ximo 6",maxLength:6,example:1213},payment_type_code:{type:"string",description:"Tipo de pago de la transaccio\u0301n. <br>VD = Venta De\u0301bito. <br>VN = Venta Normal. <br>VC = Venta en cuotas. <br>SI = 3 cuotas sin intere\u0301s. <br>S2 = 2 cuotas sin intere\u0301s. <br>NC = N Cuotas sin intere\u0301s <br>VP = Venta Prepago.",example:"VN"},response_code:{type:"number",description:'Co\u0301digo de respuesta de la autorizacio\u0301n. Valores posibles <br>0 = Transaccio\u0301n aprobada <br>Puedes revisar los c\xf3digos de respuesta de rechazo en el siguiente <a href="https://www.transbankdevelopers.cl/producto/webpay#codigos-de-respuesta-de-autorizacion">link</a>',example:0},installments_amount:{type:"number",description:"Monto de las cuotas. Largo m\xe1ximo 17"},installments_number:{type:"number",description:"Cantidad de cuotas. Largo ma\u0301ximo 2",example:0},balance:{type:"number",description:"Monto restante para un detalle anulado. Largo m\xe1ximo 17",maximum:1e17,example:0}}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"put",path:"/rswebpaytransaction/api/webpay/v1.2/transactions/{token}",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},info:{title:"API Transaccion simple - WebPay Plus",description:"Una transaccio\u0301n de autorizacio\u0301n normal (o transaccio\u0301n normal), corresponde a una solicitud de autorizacio\u0301n financiera de un pago con tarjetas de cre\u0301dito o de\u0301bito, en donde quie\u0301n realiza el pago ingresa al sitio del comercio, selecciona productos o servicio, y el ingreso asociado a los datos de la tarjeta de cre\u0301dito, de\u0301bito o prepago lo realiza en forma segura en Webpay.",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Confirmar una transacci\xf3n",description:{content:"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera",type:"text/plain"},url:{path:["rswebpaytransaction","api","webpay","v1.2","transactions",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Token de la transaccio\u0301n",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"docs/Webpay Plus/api-transaccion-simple-webpay-plus",custom_edit_url:null},u=void 0,b={unversionedId:"Webpay Plus/confirmar-una-transaccion",id:"Webpay Plus/confirmar-una-transaccion",title:"Confirmar una transacci\xf3n",description:"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera",source:"@site/docs/Webpay Plus/confirmar-una-transaccion.api.mdx",sourceDirName:"Webpay Plus",slug:"/Webpay Plus/confirmar-una-transaccion",permalink:"/tbk-developers-new-site/en/docs/Webpay Plus/confirmar-una-transaccion",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"confirmar-una-transaccion",title:"Confirmar una transacci\xf3n",description:"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera",sidebar_label:"Confirmar una transacci\xf3n",hide_title:!0,hide_table_of_contents:!0,api:{tags:["transacciones"],description:"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera",parameters:[{name:"token",in:"path",required:!0,description:"Token de la transaccio\u0301n",schema:{type:"string",minimum:64,maximum:64,example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3"}}],responses:{200:{description:"(OK) El resultado de la transaccio\u0301n",content:{"application/json":{schema:{type:"object",properties:{vci:{type:"string",description:"Resultado de la autenticacio\u0301n del tarjetahabiente. Algunos de ellos son <br>TSY - Autenticaci\xf3n Exitosa <br>TSN - Autenticaci\xf3n Rechazada <br>NP - No Participa, sin autenticaci\xf3n <br>U3 - Falla conexi\xf3n, Autenticaci\xf3n Rechazada <br>INV - Datos Inv\xe1lidos <br>A - Intent\xf3 <br>CNP1 - Comercio no participa <br>EOP - Error operacional <br>BNA - BIN no adherido <br>ENA - Emisor no adherido <br> <br>Para venta extranjera, estos son algunos de los c\xf3digos <br>TSYS (Autenticacio\u0301n exitosa Sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n Existosa) <br>TSAS (Intento, tarjeta no enrolada / emisor no disponible. Resultado autenticaci\xf3n  Autenticacio\u0301n Exitosa) <br>TSNS (Fallido, no autenticado, denegado / no permite intentos. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSRS (Autenticaci\xf3n rechazada - sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n rechazada) <br>TSUS (Autenticaci\xf3n no se pudo realizar por problema t\xe9cnico u otro motivo. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>TSCF (Autenticaci\xf3n con fricci\xf3n (No aceptada por el comercio). Resultado autenticaci\xf3n  Autenticaci\xf3n incompleta) <br>TSYF (Autenticaci\xf3n exitosa con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n exitosa) <br>TSNF (No autenticado. Transacci\xf3n denegada con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSUF (Autenticaci\xf3n con fricci\xf3n no se pudo realizar por problema t\xe9cnico u otro. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>NPC (Comercio no Participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPB (BIN no participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPCB (Comercio y BIN no participan. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>SPCB (Comercio y BIN s\xed participan. Resultado autenticaci\xf3n  Autorizaci\xf3n incompleta) <br>Este campo es informaci\xf3n adicional suplementaria al responseCode pero el comercio no debe validar este campo porque constantemente se agregan nuevos mecanismos de autenticaci\xf3n que se traducen en nuevos valores para este campo que no est\xe1n necesariamente documentados. (En el caso de tarjetas internacionales que no proveen 3D-Secure, la decisi\xf3n del comercio de aceptarlas o no se realiza a nivel de configuraci\xf3n del comercio en Transbank y debe ser conversada con el ejecutivo del comercio)",example:"TCY"},amount:{type:"number",description:"Formato nu\u0301mero entero para transacciones en peso y decimal para transacciones en do\u0301lares. Largo ma\u0301ximo 17",format:"float",example:1e4},status:{type:"string",description:"Estado de la transaccio\u0301n (INITIALIZED, AUTHORIZED, REVERSED, FAILED, NULLIFIED, PARTIALLY_NULLIFIED, CAPTURED). Largo ma\u0301ximo 64",maxLength:64,example:"AUTHORIZED"},buy_order:{type:"string",description:"Orden de compra de la tienda indicado en Transaction.create(). Largo ma\u0301ximo 26",maxLength:64,example:"ordenCompra12345678"},session_id:{type:"string",description:"Identificador de sesio\u0301n, el mismo enviado originalmente por el comercio en Transaction.create(). Largo ma\u0301ximo 61.",maxLength:61,example:"sesion1234557545"},card_detail:{type:"object",description:"Objeto que representa los datos de la tarjeta de cre\u0301dito del tarjeta habiente.",properties:{"card_detail.card_number":{type:"string",description:"4 u\u0301ltimos nu\u0301meros de la tarjeta de cre\u0301dito del tarjetahabiente. Solo para comercios autorizados por Transbank se envi\u0301a el nu\u0301mero completo. Largo ma\u0301ximo 19.",minLength:4,maxLength:19,example:6623}}},accounting_date:{type:"string",description:"Fecha de la autorizacio\u0301n. Largo 4, formato MMDD",maxLength:4,minLength:4,example:"MMDD"},transaction_date:{type:"string",description:"Fecha y hora de la autorizacio\u0301n. Largo 24, formato ISO 8601 (Ej yyyy-mm-ddTHH:mm:ss.xxxZ)",maxLength:24,minLength:24,example:"yyyy-mm-ddTHH:mm:ss.xxxZ"},authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n Largo ma\u0301ximo 6",maxLength:6,example:1213},payment_type_code:{type:"string",description:"Tipo de pago de la transaccio\u0301n. <br>VD = Venta De\u0301bito. <br>VN = Venta Normal. <br>VC = Venta en cuotas. <br>SI = 3 cuotas sin intere\u0301s. <br>S2 = 2 cuotas sin intere\u0301s. <br>NC = N Cuotas sin intere\u0301s <br>VP = Venta Prepago.",example:"VN"},response_code:{type:"number",description:'Co\u0301digo de respuesta de la autorizacio\u0301n. Valores posibles <br>0 = Transaccio\u0301n aprobada <br>Puedes revisar los c\xf3digos de respuesta de rechazo en el siguiente <a href="https://www.transbankdevelopers.cl/producto/webpay#codigos-de-respuesta-de-autorizacion">link</a>',example:0},installments_amount:{type:"number",description:"Monto de las cuotas. Largo m\xe1ximo 17"},installments_number:{type:"number",description:"Cantidad de cuotas. Largo ma\u0301ximo 2",example:0},balance:{type:"number",description:"Monto restante para un detalle anulado. Largo m\xe1ximo 17",maximum:1e17,example:0}}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"put",path:"/rswebpaytransaction/api/webpay/v1.2/transactions/{token}",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},info:{title:"API Transaccion simple - WebPay Plus",description:"Una transaccio\u0301n de autorizacio\u0301n normal (o transaccio\u0301n normal), corresponde a una solicitud de autorizacio\u0301n financiera de un pago con tarjetas de cre\u0301dito o de\u0301bito, en donde quie\u0301n realiza el pago ingresa al sitio del comercio, selecciona productos o servicio, y el ingreso asociado a los datos de la tarjeta de cre\u0301dito, de\u0301bito o prepago lo realiza en forma segura en Webpay.",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Confirmar una transacci\xf3n",description:{content:"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera",type:"text/plain"},url:{path:["rswebpaytransaction","api","webpay","v1.2","transactions",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Token de la transaccio\u0301n",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"docs/Webpay Plus/api-transaccion-simple-webpay-plus",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Capturar una transacci\xf3n",permalink:"/tbk-developers-new-site/en/docs/Webpay Plus/capturar-una-transaccion"},next:{title:"Crear una transacci\xf3n",permalink:"/tbk-developers-new-site/en/docs/Webpay Plus/crear-una-transaccion"}},y={},g=[{value:"Confirmar una transacci\xf3n",id:"confirmar-una-transacci\xf3n",level:2}],h={toc:g};function v(e){let{components:a,...i}=e;return(0,t.kt)("wrapper",(0,n.Z)({},h,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"confirmar-una-transacci\xf3n"},"Confirmar una transacci\xf3n"),(0,t.kt)("p",null,"Permite confirmar y obtener el resultado de la transaccio\u0301n una vez que Webpay ha resuelto su autorizacio\u0301n financiera"),(0,t.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("strong",null,"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(c.Z,{className:"paramsItem",param:{name:"token",in:"path",required:!0,description:"Token de la transaccio\u0301n",schema:{type:"string",minimum:64,maximum:64,example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3"}},mdxType:"ParamsItem"})))),(0,t.kt)("div",null,(0,t.kt)(o.Z,{mdxType:"ApiTabs"},(0,t.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"(OK) El resultado de la transaccio\u0301n")),(0,t.kt)("div",null,(0,t.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(l.Z,{mdxType:"SchemaTabs"},(0,t.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(d.Z,{collapsible:!1,name:"vci",required:!1,deprecated:void 0,schemaDescription:"Resultado de la autenticacio\u0301n del tarjetahabiente. Algunos de ellos son <br>TSY - Autenticaci\xf3n Exitosa <br>TSN - Autenticaci\xf3n Rechazada <br>NP - No Participa, sin autenticaci\xf3n <br>U3 - Falla conexi\xf3n, Autenticaci\xf3n Rechazada <br>INV - Datos Inv\xe1lidos <br>A - Intent\xf3 <br>CNP1 - Comercio no participa <br>EOP - Error operacional <br>BNA - BIN no adherido <br>ENA - Emisor no adherido <br> <br>Para venta extranjera, estos son algunos de los c\xf3digos <br>TSYS (Autenticacio\u0301n exitosa Sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n Existosa) <br>TSAS (Intento, tarjeta no enrolada / emisor no disponible. Resultado autenticaci\xf3n  Autenticacio\u0301n Exitosa) <br>TSNS (Fallido, no autenticado, denegado / no permite intentos. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSRS (Autenticaci\xf3n rechazada - sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n rechazada) <br>TSUS (Autenticaci\xf3n no se pudo realizar por problema t\xe9cnico u otro motivo. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>TSCF (Autenticaci\xf3n con fricci\xf3n (No aceptada por el comercio). Resultado autenticaci\xf3n  Autenticaci\xf3n incompleta) <br>TSYF (Autenticaci\xf3n exitosa con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n exitosa) <br>TSNF (No autenticado. Transacci\xf3n denegada con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSUF (Autenticaci\xf3n con fricci\xf3n no se pudo realizar por problema t\xe9cnico u otro. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>NPC (Comercio no Participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPB (BIN no participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPCB (Comercio y BIN no participan. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>SPCB (Comercio y BIN s\xed participan. Resultado autenticaci\xf3n  Autorizaci\xf3n incompleta) <br>Este campo es informaci\xf3n adicional suplementaria al responseCode pero el comercio no debe validar este campo porque constantemente se agregan nuevos mecanismos de autenticaci\xf3n que se traducen en nuevos valores para este campo que no est\xe1n necesariamente documentados. (En el caso de tarjetas internacionales que no proveen 3D-Secure, la decisi\xf3n del comercio de aceptarlas o no se realiza a nivel de configuraci\xf3n del comercio en Transbank y debe ser conversada con el ejecutivo del comercio)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,deprecated:void 0,schemaDescription:"Formato nu\u0301mero entero para transacciones en peso y decimal para transacciones en do\u0301lares. Largo ma\u0301ximo 17",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"Estado de la transaccio\u0301n (INITIALIZED, AUTHORIZED, REVERSED, FAILED, NULLIFIED, PARTIALLY_NULLIFIED, CAPTURED). Largo ma\u0301ximo 64",schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"buy_order",required:!1,deprecated:void 0,schemaDescription:"Orden de compra de la tienda indicado en Transaction.create(). Largo ma\u0301ximo 26",schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"session_id",required:!1,deprecated:void 0,schemaDescription:"Identificador de sesio\u0301n, el mismo enviado originalmente por el comercio en Transaction.create(). Largo ma\u0301ximo 61.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 61 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{}},(0,t.kt)("summary",{style:{}},(0,t.kt)("strong",null,"card_detail"),(0,t.kt)("span",{style:{opacity:"0.6"}}," object")),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"Objeto que representa los datos de la tarjeta de cre\u0301dito del tarjeta habiente.")),(0,t.kt)(d.Z,{collapsible:!1,name:"card_detail.card_number",required:!1,deprecated:void 0,schemaDescription:"4 u\u0301ltimos nu\u0301meros de la tarjeta de cre\u0301dito del tarjetahabiente. Solo para comercios autorizados por Transbank se envi\u0301a el nu\u0301mero completo. Largo ma\u0301ximo 19.",schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters` and `<= 19 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,t.kt)(d.Z,{collapsible:!1,name:"accounting_date",required:!1,deprecated:void 0,schemaDescription:"Fecha de la autorizacio\u0301n. Largo 4, formato MMDD",schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters` and `<= 4 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"transaction_date",required:!1,deprecated:void 0,schemaDescription:"Fecha y hora de la autorizacio\u0301n. Largo 24, formato ISO 8601 (Ej yyyy-mm-ddTHH:mm:ss.xxxZ)",schemaName:"string",qualifierMessage:"**Possible values:** `>= 24 characters` and `<= 24 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"authorization_code",required:!1,deprecated:void 0,schemaDescription:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n Largo ma\u0301ximo 6",schemaName:"string",qualifierMessage:"**Possible values:** `<= 6 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"payment_type_code",required:!1,deprecated:void 0,schemaDescription:"Tipo de pago de la transaccio\u0301n. <br>VD = Venta De\u0301bito. <br>VN = Venta Normal. <br>VC = Venta en cuotas. <br>SI = 3 cuotas sin intere\u0301s. <br>S2 = 2 cuotas sin intere\u0301s. <br>NC = N Cuotas sin intere\u0301s <br>VP = Venta Prepago.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"response_code",required:!1,deprecated:void 0,schemaDescription:'Co\u0301digo de respuesta de la autorizacio\u0301n. Valores posibles <br>0 = Transaccio\u0301n aprobada <br>Puedes revisar los c\xf3digos de respuesta de rechazo en el siguiente <a href="https://www.transbankdevelopers.cl/producto/webpay#codigos-de-respuesta-de-autorizacion">link</a>',schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"installments_amount",required:!1,deprecated:void 0,schemaDescription:"Monto de las cuotas. Largo m\xe1ximo 17",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"installments_number",required:!1,deprecated:void 0,schemaDescription:"Cantidad de cuotas. Largo ma\u0301ximo 2",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,t.kt)(d.Z,{collapsible:!1,name:"balance",required:!1,deprecated:void 0,schemaDescription:"Monto restante para un detalle anulado. Largo m\xe1ximo 17",schemaName:"number",qualifierMessage:"**Possible values:** `<= 100000000000000000`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,t.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(s.Z,{responseExample:'{\n  "vci": "TCY",\n  "amount": 10000,\n  "status": "AUTHORIZED",\n  "buy_order": "ordenCompra12345678",\n  "session_id": "sesion1234557545",\n  "card_detail": {\n    "card_detail.card_number": 6623\n  },\n  "accounting_date": "MMDD",\n  "transaction_date": "yyyy-mm-ddTHH:mm:ss.xxxZ",\n  "authorization_code": 1213,\n  "payment_type_code": "VN",\n  "response_code": 0,\n  "installments_amount": 0,\n  "installments_number": 0,\n  "balance": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado")),(0,t.kt)("div",null,(0,t.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(l.Z,{mdxType:"SchemaTabs"},(0,t.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(d.Z,{collapsible:!1,name:"error_message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,t.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(s.Z,{responseExample:'{\n  "error_message": "token is required"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"No autorizado. API Key y/o API Secret inv\xe1lidos")),(0,t.kt)("div",null)),(0,t.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"La transacci\xf3n no ha sido encontrada")),(0,t.kt)("div",null)),(0,t.kt)(m.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"M\xe9todo no permitido")),(0,t.kt)("div",null)),(0,t.kt)(m.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"No fue posible procesar la respuesta en el formato que el cliente indica")),(0,t.kt)("div",null)),(0,t.kt)(m.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Tipo de mensaje no permitido")),(0,t.kt)("div",null)),(0,t.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios")),(0,t.kt)("div",null)),(0,t.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Ha ocurrido un error inesperado")),(0,t.kt)("div",null)))))}v.isMDXComponent=!0}}]);