"use strict";(self.webpackChunktbk_developers=self.webpackChunktbk_developers||[]).push([[4203],{75547:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>y,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var t=o(87462),n=(o(67294),o(3905)),i=o(26389),r=o(94891),c=o(75190),s=o(47507),d=o(24310),l=o(63303),p=(o(75035),o(85162));const m={id:"obtener-estado-de-una-transaccion-mall",title:"Obtener estado de una transacci\xf3n mall",description:"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan.",sidebar_label:"Obtener estado de una transacci\xf3n mall",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Webpay Plus Mall"],description:"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan.",parameters:[{name:"token",in:"path",required:!0,description:"Token de la transaccio\u0301n",schema:{type:"string",minimum:64,maximum:64,example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3"}}],responses:{200:{description:"(OK) El resultado de la transaccio\u0301n",content:{"application/json":{schema:{type:"object",properties:{buy_order:{type:"string",description:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",example:"ordenCompra12345678",maxLength:26},session_id:{type:"string",description:"Identificador de sesio\u0301n, uso interno de comercio, este valor es devuelto al final de la transaccio\u0301n. Largo ma\u0301ximo 61",example:"sesion1234557545",maxLength:61},card_detail:{type:"object",description:"Objeto que representa los datos de la tarjeta de cre\u0301dito del tarjeta habiente.",properties:{"card_detail.card_number":{type:"string",description:"4 u\u0301ltimos nu\u0301meros de la tarjeta de cre\u0301dito del tarjetahabiente. Solo para comercios autorizados por Transbank se envi\u0301a el nu\u0301mero completo. Largo ma\u0301ximo 19.",minLength:4,maxLength:19,example:6623}}},accounting_date:{type:"string",description:"Fecha de la autorizacio\u0301n. Largo 4, formato MMDD",maxLength:4,minLength:4,example:"MMDD"},transaction_date:{type:"string",description:"Fecha y hora de la autorizacio\u0301n. Largo 24, formato ISO 8601 (Ej yyyy-mm-ddTHH:mm:ss.xxxZ)",maxLength:24,minLength:24,example:"yyyy-mm-ddTHH:mm:ss.xxxZ"},vci:{type:"string",description:"Resultado de la autenticacio\u0301n del tarjetahabiente. Algunos de ellos son <br>TSY - Autenticaci\xf3n Exitosa <br>TSN - Autenticaci\xf3n Rechazada <br>NP - No Participa, sin autenticaci\xf3n <br>U3 - Falla conexi\xf3n, Autenticaci\xf3n Rechazada <br>INV - Datos Inv\xe1lidos <br>A - Intent\xf3 <br>CNP1 - Comercio no participa <br>EOP - Error operacional <br>BNA - BIN no adherido <br>ENA - Emisor no adherido <br> <br>Para venta extranjera, estos son algunos de los c\xf3digos <br>TSYS (Autenticacio\u0301n exitosa Sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n Existosa) <br>TSAS (Intento, tarjeta no enrolada / emisor no disponible. Resultado autenticaci\xf3n  Autenticacio\u0301n Exitosa) <br>TSNS (Fallido, no autenticado, denegado / no permite intentos. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSRS (Autenticaci\xf3n rechazada - sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n rechazada) <br>TSUS (Autenticaci\xf3n no se pudo realizar por problema t\xe9cnico u otro motivo. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>TSCF (Autenticaci\xf3n con fricci\xf3n (No aceptada por el comercio). Resultado autenticaci\xf3n  Autenticaci\xf3n incompleta) <br>TSYF (Autenticaci\xf3n exitosa con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n exitosa) <br>TSNF (No autenticado. Transacci\xf3n denegada con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSUF (Autenticaci\xf3n con fricci\xf3n no se pudo realizar por problema t\xe9cnico u otro. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>NPC (Comercio no Participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPB (BIN no participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPCB (Comercio y BIN no participan. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>SPCB (Comercio y BIN s\xed participan. Resultado autenticaci\xf3n  Autorizaci\xf3n incompleta) <br>Este campo es informaci\xf3n adicional suplementaria al responseCode pero el comercio no debe validar este campo porque constantemente se agregan nuevos mecanismos de autenticaci\xf3n que se traducen en nuevos valores para este campo que no est\xe1n necesariamente documentados. (En el caso de tarjetas internacionales que no proveen 3D-Secure, la decisi\xf3n del comercio de aceptarlas o no se realiza a nivel de configuraci\xf3n del comercio en Transbank y debe ser conversada con el ejecutivo del comercio)",example:"TCY"},details:{type:"array",items:{type:"object",description:"Lista con resultado de cada una de las transacciones enviados en Transaction.create().",properties:{amount:{type:"number",description:"Formato nu\u0301mero entero para transacciones en peso y decimal para transacciones en do\u0301lares. Largo ma\u0301ximo 17",format:"float",example:1e4},status:{type:"string",description:"Estado de la transaccio\u0301n (INITIALIZED, AUTHORIZED, REVERSED, FAILED, NULLIFIED, PARTIALLY_NULLIFIED, CAPTURED). Largo ma\u0301ximo 64",maxLength:64,example:"AUTHORIZED"},authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n Largo ma\u0301ximo 6",maxLength:6,example:1213},payment_type_code:{type:"string",description:"Tipo de pago de la transaccio\u0301n. <br>VD = Venta De\u0301bito. <br>VN = Venta Normal. <br>VC = Venta en cuotas. <br>SI = 3 cuotas sin intere\u0301s. <br>S2 = 2 cuotas sin intere\u0301s. <br>NC = N Cuotas sin intere\u0301s <br>VP = Venta Prepago.",example:"VN"},response_code:{type:"number",description:'Co\u0301digo de respuesta de la autorizacio\u0301n. Valores posibles <br>0 = Transaccio\u0301n aprobada <br>Puedes revisar los c\xf3digos de respuesta de rechazo en el siguiente <a href="https://www.transbankdevelopers.cl/producto/webpay#codigos-de-respuesta-de-autorizacion">link</a>',example:0},installments_amount:{type:"number",description:"Monto de las cuotas. Largo m\xe1ximo 17"},installments_number:{type:"number",description:"Cantidad de cuotas. Largo ma\u0301ximo 2",example:0},commerce_code:{type:"string",description:"Co\u0301digo comercio asignado por Transbank para la tienda perteneciente al mall a la cual corresponde esta transacci\xf3n. Largo 12.",example:"597055555537",minLength:12,maxLength:12},buy_order:{type:"string",description:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",example:"ordenCompra12345678",maxLength:26}}}},balance:{type:"number",description:"Monto restante para un detalle anulado. Largo m\xe1ximo 17",maximum:1e17,example:0}},example:{buy_order:"415034240",card_detail:{card_number:"6623"},accounting_date:"0321",transaction_date:"2019-03-21T15:43:48.523Z",vci:"TSY",details:[{amount:1e4,status:"AUTHORIZED",authorization_code:"1213",payment_type_code:"VN",response_code:0,installments_number:0,commerce_code:"597055555536",buy_order:"505479072"}]}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"get",path:"/rswebpaytransaction/api/webpay/v1.2/transactions/{token}",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},info:{title:"API Transaccion mall - WebPay Plus Mall",description:"Una transaccio\u0301n Mall Normal corresponde a una solicitud de autorizacio\u0301n financiera de un conjunto de pagos con tarjetas de cre\u0301dito o de\u0301bito, en donde quie\u0301n realiza el pago ingresa al sitio del comercio, selecciona productos o servicios, y el ingreso asociado a los datos de la tarjeta de cre\u0301dito o de\u0301bito lo realiza una u\u0301nica vez en forma segura en Webpay para el conjunto de pagos. Cada pago tendra\u0301 su propio resultado, autorizado o rechazado. Revisa m\xe1s detalles sobre esta modalidad en la documentaci\xf3n",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Obtener estado de una transacci\xf3n mall",description:{content:"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan.",type:"text/plain"},url:{path:["rswebpaytransaction","api","webpay","v1.2","transactions",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Token de la transaccio\u0301n",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/WebpayPlusMall/api-transaccion-mall-webpay-plus-mall",custom_edit_url:null},u=void 0,b={unversionedId:"WebpayPlusMall/obtener-estado-de-una-transaccion-mall",id:"WebpayPlusMall/obtener-estado-de-una-transaccion-mall",title:"Obtener estado de una transacci\xf3n mall",description:"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan.",source:"@site/docs/WebpayPlusMall/obtener-estado-de-una-transaccion-mall.api.mdx",sourceDirName:"WebpayPlusMall",slug:"/WebpayPlusMall/obtener-estado-de-una-transaccion-mall",permalink:"/tbk-developers-new-site/docs/WebpayPlusMall/obtener-estado-de-una-transaccion-mall",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"obtener-estado-de-una-transaccion-mall",title:"Obtener estado de una transacci\xf3n mall",description:"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan.",sidebar_label:"Obtener estado de una transacci\xf3n mall",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Webpay Plus Mall"],description:"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan.",parameters:[{name:"token",in:"path",required:!0,description:"Token de la transaccio\u0301n",schema:{type:"string",minimum:64,maximum:64,example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3"}}],responses:{200:{description:"(OK) El resultado de la transaccio\u0301n",content:{"application/json":{schema:{type:"object",properties:{buy_order:{type:"string",description:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",example:"ordenCompra12345678",maxLength:26},session_id:{type:"string",description:"Identificador de sesio\u0301n, uso interno de comercio, este valor es devuelto al final de la transaccio\u0301n. Largo ma\u0301ximo 61",example:"sesion1234557545",maxLength:61},card_detail:{type:"object",description:"Objeto que representa los datos de la tarjeta de cre\u0301dito del tarjeta habiente.",properties:{"card_detail.card_number":{type:"string",description:"4 u\u0301ltimos nu\u0301meros de la tarjeta de cre\u0301dito del tarjetahabiente. Solo para comercios autorizados por Transbank se envi\u0301a el nu\u0301mero completo. Largo ma\u0301ximo 19.",minLength:4,maxLength:19,example:6623}}},accounting_date:{type:"string",description:"Fecha de la autorizacio\u0301n. Largo 4, formato MMDD",maxLength:4,minLength:4,example:"MMDD"},transaction_date:{type:"string",description:"Fecha y hora de la autorizacio\u0301n. Largo 24, formato ISO 8601 (Ej yyyy-mm-ddTHH:mm:ss.xxxZ)",maxLength:24,minLength:24,example:"yyyy-mm-ddTHH:mm:ss.xxxZ"},vci:{type:"string",description:"Resultado de la autenticacio\u0301n del tarjetahabiente. Algunos de ellos son <br>TSY - Autenticaci\xf3n Exitosa <br>TSN - Autenticaci\xf3n Rechazada <br>NP - No Participa, sin autenticaci\xf3n <br>U3 - Falla conexi\xf3n, Autenticaci\xf3n Rechazada <br>INV - Datos Inv\xe1lidos <br>A - Intent\xf3 <br>CNP1 - Comercio no participa <br>EOP - Error operacional <br>BNA - BIN no adherido <br>ENA - Emisor no adherido <br> <br>Para venta extranjera, estos son algunos de los c\xf3digos <br>TSYS (Autenticacio\u0301n exitosa Sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n Existosa) <br>TSAS (Intento, tarjeta no enrolada / emisor no disponible. Resultado autenticaci\xf3n  Autenticacio\u0301n Exitosa) <br>TSNS (Fallido, no autenticado, denegado / no permite intentos. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSRS (Autenticaci\xf3n rechazada - sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n rechazada) <br>TSUS (Autenticaci\xf3n no se pudo realizar por problema t\xe9cnico u otro motivo. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>TSCF (Autenticaci\xf3n con fricci\xf3n (No aceptada por el comercio). Resultado autenticaci\xf3n  Autenticaci\xf3n incompleta) <br>TSYF (Autenticaci\xf3n exitosa con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n exitosa) <br>TSNF (No autenticado. Transacci\xf3n denegada con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSUF (Autenticaci\xf3n con fricci\xf3n no se pudo realizar por problema t\xe9cnico u otro. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>NPC (Comercio no Participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPB (BIN no participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPCB (Comercio y BIN no participan. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>SPCB (Comercio y BIN s\xed participan. Resultado autenticaci\xf3n  Autorizaci\xf3n incompleta) <br>Este campo es informaci\xf3n adicional suplementaria al responseCode pero el comercio no debe validar este campo porque constantemente se agregan nuevos mecanismos de autenticaci\xf3n que se traducen en nuevos valores para este campo que no est\xe1n necesariamente documentados. (En el caso de tarjetas internacionales que no proveen 3D-Secure, la decisi\xf3n del comercio de aceptarlas o no se realiza a nivel de configuraci\xf3n del comercio en Transbank y debe ser conversada con el ejecutivo del comercio)",example:"TCY"},details:{type:"array",items:{type:"object",description:"Lista con resultado de cada una de las transacciones enviados en Transaction.create().",properties:{amount:{type:"number",description:"Formato nu\u0301mero entero para transacciones en peso y decimal para transacciones en do\u0301lares. Largo ma\u0301ximo 17",format:"float",example:1e4},status:{type:"string",description:"Estado de la transaccio\u0301n (INITIALIZED, AUTHORIZED, REVERSED, FAILED, NULLIFIED, PARTIALLY_NULLIFIED, CAPTURED). Largo ma\u0301ximo 64",maxLength:64,example:"AUTHORIZED"},authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n Largo ma\u0301ximo 6",maxLength:6,example:1213},payment_type_code:{type:"string",description:"Tipo de pago de la transaccio\u0301n. <br>VD = Venta De\u0301bito. <br>VN = Venta Normal. <br>VC = Venta en cuotas. <br>SI = 3 cuotas sin intere\u0301s. <br>S2 = 2 cuotas sin intere\u0301s. <br>NC = N Cuotas sin intere\u0301s <br>VP = Venta Prepago.",example:"VN"},response_code:{type:"number",description:'Co\u0301digo de respuesta de la autorizacio\u0301n. Valores posibles <br>0 = Transaccio\u0301n aprobada <br>Puedes revisar los c\xf3digos de respuesta de rechazo en el siguiente <a href="https://www.transbankdevelopers.cl/producto/webpay#codigos-de-respuesta-de-autorizacion">link</a>',example:0},installments_amount:{type:"number",description:"Monto de las cuotas. Largo m\xe1ximo 17"},installments_number:{type:"number",description:"Cantidad de cuotas. Largo ma\u0301ximo 2",example:0},commerce_code:{type:"string",description:"Co\u0301digo comercio asignado por Transbank para la tienda perteneciente al mall a la cual corresponde esta transacci\xf3n. Largo 12.",example:"597055555537",minLength:12,maxLength:12},buy_order:{type:"string",description:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",example:"ordenCompra12345678",maxLength:26}}}},balance:{type:"number",description:"Monto restante para un detalle anulado. Largo m\xe1ximo 17",maximum:1e17,example:0}},example:{buy_order:"415034240",card_detail:{card_number:"6623"},accounting_date:"0321",transaction_date:"2019-03-21T15:43:48.523Z",vci:"TSY",details:[{amount:1e4,status:"AUTHORIZED",authorization_code:"1213",payment_type_code:"VN",response_code:0,installments_number:0,commerce_code:"597055555536",buy_order:"505479072"}]}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"get",path:"/rswebpaytransaction/api/webpay/v1.2/transactions/{token}",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},info:{title:"API Transaccion mall - WebPay Plus Mall",description:"Una transaccio\u0301n Mall Normal corresponde a una solicitud de autorizacio\u0301n financiera de un conjunto de pagos con tarjetas de cre\u0301dito o de\u0301bito, en donde quie\u0301n realiza el pago ingresa al sitio del comercio, selecciona productos o servicios, y el ingreso asociado a los datos de la tarjeta de cre\u0301dito o de\u0301bito lo realiza una u\u0301nica vez en forma segura en Webpay para el conjunto de pagos. Cada pago tendra\u0301 su propio resultado, autorizado o rechazado. Revisa m\xe1s detalles sobre esta modalidad en la documentaci\xf3n",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Obtener estado de una transacci\xf3n mall",description:{content:"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan.",type:"text/plain"},url:{path:["rswebpaytransaction","api","webpay","v1.2","transactions",":token"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Token de la transaccio\u0301n",type:"text/plain"},type:"any",value:"",key:"token"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/WebpayPlusMall/api-transaccion-mall-webpay-plus-mall",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Crear una transacci\xf3n mall",permalink:"/tbk-developers-new-site/docs/WebpayPlusMall/crear-una-transaccion-mall"},next:{title:"Reversar o anular una transaccion mall",permalink:"/tbk-developers-new-site/docs/WebpayPlusMall/reversar-o-anular-una-transaccion-mall"}},y={},g=[{value:"Obtener estado de una transacci\xf3n mall",id:"obtener-estado-de-una-transacci\xf3n-mall",level:2}],h={toc:g};function v(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"obtener-estado-de-una-transacci\xf3n-mall"},"Obtener estado de una transacci\xf3n mall"),(0,n.kt)("p",null,"Esta operaci\xf3n permite obtener el estado de la transacci\xf3n en cualquier momento. En condiciones normales es probable que no se requiera ejecutar, pero en caso de ocurrir un error inesperado permite conocer el estado y tomar las acciones que correspondan."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"token",in:"path",required:!0,description:"Token de la transaccio\u0301n",schema:{type:"string",minimum:64,maximum:64,example:"e9d555262db0f989e49d724b4db0b0af367cc415cde41f500a776550fc5fddd3"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"(OK) El resultado de la transaccio\u0301n")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"buy_order",required:!1,deprecated:void 0,schemaDescription:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",schemaName:"string",qualifierMessage:"**Possible values:** `<= 26 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"session_id",required:!1,deprecated:void 0,schemaDescription:"Identificador de sesio\u0301n, uso interno de comercio, este valor es devuelto al final de la transaccio\u0301n. Largo ma\u0301ximo 61",schemaName:"string",qualifierMessage:"**Possible values:** `<= 61 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"card_detail"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Objeto que representa los datos de la tarjeta de cre\u0301dito del tarjeta habiente.")),(0,n.kt)(d.Z,{collapsible:!1,name:"card_detail.card_number",required:!1,deprecated:void 0,schemaDescription:"4 u\u0301ltimos nu\u0301meros de la tarjeta de cre\u0301dito del tarjetahabiente. Solo para comercios autorizados por Transbank se envi\u0301a el nu\u0301mero completo. Largo ma\u0301ximo 19.",schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters` and `<= 19 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"accounting_date",required:!1,deprecated:void 0,schemaDescription:"Fecha de la autorizacio\u0301n. Largo 4, formato MMDD",schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters` and `<= 4 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"transaction_date",required:!1,deprecated:void 0,schemaDescription:"Fecha y hora de la autorizacio\u0301n. Largo 24, formato ISO 8601 (Ej yyyy-mm-ddTHH:mm:ss.xxxZ)",schemaName:"string",qualifierMessage:"**Possible values:** `>= 24 characters` and `<= 24 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"vci",required:!1,deprecated:void 0,schemaDescription:"Resultado de la autenticacio\u0301n del tarjetahabiente. Algunos de ellos son <br>TSY - Autenticaci\xf3n Exitosa <br>TSN - Autenticaci\xf3n Rechazada <br>NP - No Participa, sin autenticaci\xf3n <br>U3 - Falla conexi\xf3n, Autenticaci\xf3n Rechazada <br>INV - Datos Inv\xe1lidos <br>A - Intent\xf3 <br>CNP1 - Comercio no participa <br>EOP - Error operacional <br>BNA - BIN no adherido <br>ENA - Emisor no adherido <br> <br>Para venta extranjera, estos son algunos de los c\xf3digos <br>TSYS (Autenticacio\u0301n exitosa Sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n Existosa) <br>TSAS (Intento, tarjeta no enrolada / emisor no disponible. Resultado autenticaci\xf3n  Autenticacio\u0301n Exitosa) <br>TSNS (Fallido, no autenticado, denegado / no permite intentos. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSRS (Autenticaci\xf3n rechazada - sin fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n rechazada) <br>TSUS (Autenticaci\xf3n no se pudo realizar por problema t\xe9cnico u otro motivo. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>TSCF (Autenticaci\xf3n con fricci\xf3n (No aceptada por el comercio). Resultado autenticaci\xf3n  Autenticaci\xf3n incompleta) <br>TSYF (Autenticaci\xf3n exitosa con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n exitosa) <br>TSNF (No autenticado. Transacci\xf3n denegada con fricci\xf3n. Resultado autenticaci\xf3n  Autenticaci\xf3n denegada) <br>TSUF (Autenticaci\xf3n con fricci\xf3n no se pudo realizar por problema t\xe9cnico u otro. Resultado autenticaci\xf3n  Autenticaci\xf3n fallida) <br>NPC (Comercio no Participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPB (BIN no participa. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>NPCB (Comercio y BIN no participan. Resultado autenticaci\xf3n  Comercio/BIN no participa) <br>SPCB (Comercio y BIN s\xed participan. Resultado autenticaci\xf3n  Autorizaci\xf3n incompleta) <br>Este campo es informaci\xf3n adicional suplementaria al responseCode pero el comercio no debe validar este campo porque constantemente se agregan nuevos mecanismos de autenticaci\xf3n que se traducen en nuevos valores para este campo que no est\xe1n necesariamente documentados. (En el caso de tarjetas internacionales que no proveen 3D-Secure, la decisi\xf3n del comercio de aceptarlas o no se realiza a nivel de configuraci\xf3n del comercio en Transbank y debe ser conversada con el ejecutivo del comercio)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,deprecated:void 0,schemaDescription:"Formato nu\u0301mero entero para transacciones en peso y decimal para transacciones en do\u0301lares. Largo ma\u0301ximo 17",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"Estado de la transaccio\u0301n (INITIALIZED, AUTHORIZED, REVERSED, FAILED, NULLIFIED, PARTIALLY_NULLIFIED, CAPTURED). Largo ma\u0301ximo 64",schemaName:"string",qualifierMessage:"**Possible values:** `<= 64 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"authorization_code",required:!1,deprecated:void 0,schemaDescription:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n Largo ma\u0301ximo 6",schemaName:"string",qualifierMessage:"**Possible values:** `<= 6 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"payment_type_code",required:!1,deprecated:void 0,schemaDescription:"Tipo de pago de la transaccio\u0301n. <br>VD = Venta De\u0301bito. <br>VN = Venta Normal. <br>VC = Venta en cuotas. <br>SI = 3 cuotas sin intere\u0301s. <br>S2 = 2 cuotas sin intere\u0301s. <br>NC = N Cuotas sin intere\u0301s <br>VP = Venta Prepago.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"response_code",required:!1,deprecated:void 0,schemaDescription:'Co\u0301digo de respuesta de la autorizacio\u0301n. Valores posibles <br>0 = Transaccio\u0301n aprobada <br>Puedes revisar los c\xf3digos de respuesta de rechazo en el siguiente <a href="https://www.transbankdevelopers.cl/producto/webpay#codigos-de-respuesta-de-autorizacion">link</a>',schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"installments_amount",required:!1,deprecated:void 0,schemaDescription:"Monto de las cuotas. Largo m\xe1ximo 17",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"installments_number",required:!1,deprecated:void 0,schemaDescription:"Cantidad de cuotas. Largo ma\u0301ximo 2",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"commerce_code",required:!1,deprecated:void 0,schemaDescription:"Co\u0301digo comercio asignado por Transbank para la tienda perteneciente al mall a la cual corresponde esta transacci\xf3n. Largo 12.",schemaName:"string",qualifierMessage:"**Possible values:** `>= 12 characters` and `<= 12 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"buy_order",required:!1,deprecated:void 0,schemaDescription:"Es el co\u0301digo u\u0301nico de la orden de compra generada por el comercio mall",schemaName:"string",qualifierMessage:"**Possible values:** `<= 26 characters`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"balance",required:!1,deprecated:void 0,schemaDescription:"Monto restante para un detalle anulado. Largo m\xe1ximo 17",schemaName:"number",qualifierMessage:"**Possible values:** `<= 100000000000000000`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "buy_order": "415034240",\n  "card_detail": {\n    "card_number": "6623"\n  },\n  "accounting_date": "0321",\n  "transaction_date": "2019-03-21T15:43:48.523Z",\n  "vci": "TSY",\n  "details": [\n    {\n      "amount": 10000,\n      "status": "AUTHORIZED",\n      "authorization_code": "1213",\n      "payment_type_code": "VN",\n      "response_code": 0,\n      "installments_number": 0,\n      "commerce_code": "597055555536",\n      "buy_order": "505479072"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"error_message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "error_message": "token is required"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"No autorizado. API Key y/o API Secret inv\xe1lidos")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"La transacci\xf3n no ha sido encontrada")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"M\xe9todo no permitido")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"No fue posible procesar la respuesta en el formato que el cliente indica")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Tipo de mensaje no permitido")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Ha ocurrido un error inesperado")),(0,n.kt)("div",null)))))}v.isMDXComponent=!0}}]);