"use strict";(self.webpackChunktbk_developers=self.webpackChunktbk_developers||[]).push([[5472],{61001:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>b});var i=r(87462),o=(r(67294),r(3905)),t=r(26389),c=r(94891),n=(r(75190),r(47507)),d=r(24310),s=r(63303),l=(r(75035),r(85162));const p={id:"captura-diferida-de-una-transaccion",title:"Captura diferida de una transacci\xf3n",description:"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago.",sidebar_label:"Captura diferida de una transacci\xf3n",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Oneclick Mall"],description:"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{commerce_code:{type:"string",description:"Tienda hija que realizo\u0301 la transaccio\u0301n. Largo 6.",maxLength:6},buy_order:{type:"string",description:"Orden de compra de la transaccio\u0301n que se requiere capturar. Largo ma\u0301ximo 26.",maxLength:26},capture_amount:{type:"number",description:"Monto que se desea capturar. Largo ma\u0301ximo 17.",format:"float"},authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n que se requiere capturar Largo ma\u0301ximo 6.",maxLength:6}}}}},required:!0},responses:{200:{description:"(OK) La informacion de la captura",content:{"application/json":{schema:{type:"object",properties:{authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la captura diferida. Largo m\xe1ximo 6",maxLength:6},authorization_date:{type:"string",description:"Fecha y hora de la autorizacio\u0301n."},captured_amount:{type:"number",description:"Monto capturado. Largo m\xe1ximo 6",format:"float"},response_code:{type:"integer",description:"C\xf3digo de resultado de la captura. Si es exitoso es 0,de lo contrario la captura no fue realizada. Largo m\xe1ximo 2",maximum:99}},example:{authorization_code:"152759",authorization_date:"2020-04-03T01:49:50.181Z",captured_amount:50,response_code:0}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"put",path:"/rswebpaytransaction/api/oneclick/mall/v1.2/transactions/capture",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},jsonRequestBodyExample:{commerce_code:"string",buy_order:"string",capture_amount:0,authorization_code:"string"},info:{title:"API Oneclick Mall",description:"La modalidad de pago Oneclick permite al tarjetahabiente realizar pagos en el comercio sin la necesidad de ingresar cada vez informacio\u0301n de la tarjeta de cre\u0301dito al momento de realizar la compra. El modelo de pago contempla un proceso previo de inscripcio\u0301n o enrolamiento del tarjetahabiente, a trave\u0301s del comercio, que desee utilizar el servicio. Este tipo de pago facilita la venta, disminuye el tiempo de la transaccio\u0301n y reduce los riesgos de ingreso erro\u0301neo de los datos del medio de pago.\nEl proceso de integracio\u0301n con Oneclick consiste en desarrollar por parte del comercio las llamadas a los servicios web dispuestos por Transbank para la inscripcio\u0301n de los tarjetahabientes, asi\u0301 como para la realizacio\u0301n de los pagos.",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Captura diferida de una transacci\xf3n",description:{content:"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago.",type:"text/plain"},url:{path:["rswebpaytransaction","api","oneclick","mall","v1.2","transactions","capture"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/Oneclick/api-oneclick-mall",custom_edit_url:null},u=void 0,m={unversionedId:"Oneclick/captura-diferida-de-una-transaccion",id:"Oneclick/captura-diferida-de-una-transaccion",title:"Captura diferida de una transacci\xf3n",description:"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago.",source:"@site/docs/Oneclick/captura-diferida-de-una-transaccion.api.mdx",sourceDirName:"Oneclick",slug:"/Oneclick/captura-diferida-de-una-transaccion",permalink:"/tbk-developers-new-site/docs/Oneclick/captura-diferida-de-una-transaccion",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"captura-diferida-de-una-transaccion",title:"Captura diferida de una transacci\xf3n",description:"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago.",sidebar_label:"Captura diferida de una transacci\xf3n",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Oneclick Mall"],description:"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{commerce_code:{type:"string",description:"Tienda hija que realizo\u0301 la transaccio\u0301n. Largo 6.",maxLength:6},buy_order:{type:"string",description:"Orden de compra de la transaccio\u0301n que se requiere capturar. Largo ma\u0301ximo 26.",maxLength:26},capture_amount:{type:"number",description:"Monto que se desea capturar. Largo ma\u0301ximo 17.",format:"float"},authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n que se requiere capturar Largo ma\u0301ximo 6.",maxLength:6}}}}},required:!0},responses:{200:{description:"(OK) La informacion de la captura",content:{"application/json":{schema:{type:"object",properties:{authorization_code:{type:"string",description:"Co\u0301digo de autorizacio\u0301n de la captura diferida. Largo m\xe1ximo 6",maxLength:6},authorization_date:{type:"string",description:"Fecha y hora de la autorizacio\u0301n."},captured_amount:{type:"number",description:"Monto capturado. Largo m\xe1ximo 6",format:"float"},response_code:{type:"integer",description:"C\xf3digo de resultado de la captura. Si es exitoso es 0,de lo contrario la captura no fue realizada. Largo m\xe1ximo 2",maximum:99}},example:{authorization_code:"152759",authorization_date:"2020-04-03T01:49:50.181Z",captured_amount:50,response_code:0}}}}},400:{description:"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado",content:{"application/json":{schema:{type:"object",properties:{error_message:{type:"string",example:"token is required"}}}}}},401:{description:"No autorizado. API Key y/o API Secret inv\xe1lidos"},404:{description:"La transacci\xf3n no ha sido encontrada"},405:{description:"M\xe9todo no permitido"},406:{description:"No fue posible procesar la respuesta en el formato que el cliente indica"},415:{description:"Tipo de mensaje no permitido"},422:{description:"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios"},500:{description:"Ha ocurrido un error inesperado"}},method:"put",path:"/rswebpaytransaction/api/oneclick/mall/v1.2/transactions/capture",servers:[{url:"https://webpay3gint.transbank.cl"}],security:[{tbkApiKeyId:[],tbkApiKeySecret:[]}],securitySchemes:{tbkApiKeyId:{type:"apiKey",name:"Tbk-Api-Key-Id",in:"header",description:"C\xf3digo de comercio"},tbkApiKeySecret:{type:"apiKey",name:"Tbk-Api-Key-Secret",in:"header",description:"LLave secreta"}},jsonRequestBodyExample:{commerce_code:"string",buy_order:"string",capture_amount:0,authorization_code:"string"},info:{title:"API Oneclick Mall",description:"La modalidad de pago Oneclick permite al tarjetahabiente realizar pagos en el comercio sin la necesidad de ingresar cada vez informacio\u0301n de la tarjeta de cre\u0301dito al momento de realizar la compra. El modelo de pago contempla un proceso previo de inscripcio\u0301n o enrolamiento del tarjetahabiente, a trave\u0301s del comercio, que desee utilizar el servicio. Este tipo de pago facilita la venta, disminuye el tiempo de la transaccio\u0301n y reduce los riesgos de ingreso erro\u0301neo de los datos del medio de pago.\nEl proceso de integracio\u0301n con Oneclick consiste en desarrollar por parte del comercio las llamadas a los servicios web dispuestos por Transbank para la inscripcio\u0301n de los tarjetahabientes, asi\u0301 como para la realizacio\u0301n de los pagos.",termsOfService:"https://www.transbankdevelopers.cl/termino-y-condiciones",version:"1.0.0"},postman:{name:"Captura diferida de una transacci\xf3n",description:{content:"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago.",type:"text/plain"},url:{path:["rswebpaytransaction","api","oneclick","mall","v1.2","transactions","capture"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/Oneclick/api-oneclick-mall",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Autorizar una transacci\xf3n",permalink:"/tbk-developers-new-site/docs/Oneclick/autorizar-una-transaccion"},next:{title:"Confirmar una inscripci\xf3n",permalink:"/tbk-developers-new-site/docs/Oneclick/confirmar-una-inscripcion"}},g={},b=[{value:"Captura diferida de una transacci\xf3n",id:"captura-diferida-de-una-transacci\xf3n",level:2}],h={toc:b};function f(a){let{components:e,...r}=a;return(0,o.kt)("wrapper",(0,i.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"captura-diferida-de-una-transacci\xf3n"},"Captura diferida de una transacci\xf3n"),(0,o.kt)("p",null,"En el caso de que tengas contratada la modalidad de Captura diferida, necesitas llamar al m\xe9todo capture despu\xe9s de llamar a authorize para finalizar la transacci\xf3n.Para capturar una transacci\xf3n, esta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esa forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.Para realizar esa captura expl\xedcita debe usarse el m\xe9todo capture(). Una inscripci\xf3n Oneclick Mall permite que el tarjetahabiente registre su tarjeta, asociando dicha inscripci\xf3n a un comercio padre. Una vez realizada la inscripci\xf3n, el comercio padre autoriza transacciones para los comercios \u201chijo\u201d que tiene registrados. La autorizaci\xf3n se encarga de validar si es posible realizar el cargo a la tarjeta de cr\xe9dito, d\xe9btio o prepago realizando en el mismo acto la reserva del monto de la transacci\xf3n. La posterior captura hace efectiva dicha reserva y 'captura' el monto 'reservado' previamente.Este me\u0301todo permite a los comercios Oneclick Mall habilitados, poder realizar capturas diferidas de una transaccio\u0301n previamente autorizada. El me\u0301todo contempla una u\u0301nica captura por cada autorizacio\u0301n. Para ello se debera\u0301 indicar los datos asociados a la transaccio\u0301n de venta y el monto requerido para capturar, el cual debe ser menor o igual al monto originalmente autorizado. Para capturar una transacci\xf3n, \xe9sta debe haber sido creada por un c\xf3digo de comercio configurado para captura diferida. De esta forma la transacci\xf3n estar\xe1 autorizada pero requerir\xe1 una captura expl\xedcita posterior para confirmar la transacci\xf3n.En esta modalidad no se aceptan tarjetas de d\xe9bito ni prepago."),(0,o.kt)(c.Z,{mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"commerce_code",required:!1,deprecated:void 0,schemaDescription:"Tienda hija que realizo\u0301 la transaccio\u0301n. Largo 6.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 6 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"buy_order",required:!1,deprecated:void 0,schemaDescription:"Orden de compra de la transaccio\u0301n que se requiere capturar. Largo ma\u0301ximo 26.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 26 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"capture_amount",required:!1,deprecated:void 0,schemaDescription:"Monto que se desea capturar. Largo ma\u0301ximo 17.",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"authorization_code",required:!1,deprecated:void 0,schemaDescription:"Co\u0301digo de autorizacio\u0301n de la transaccio\u0301n que se requiere capturar Largo ma\u0301ximo 6.",schemaName:"string",qualifierMessage:"**Possible values:** `<= 6 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(t.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"(OK) La informacion de la captura")),(0,o.kt)("div",null,(0,o.kt)(c.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"SchemaTabs"},(0,o.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"authorization_code",required:!1,deprecated:void 0,schemaDescription:"Co\u0301digo de autorizacio\u0301n de la captura diferida. Largo m\xe1ximo 6",schemaName:"string",qualifierMessage:"**Possible values:** `<= 6 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"authorization_date",required:!1,deprecated:void 0,schemaDescription:"Fecha y hora de la autorizacio\u0301n.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"captured_amount",required:!1,deprecated:void 0,schemaDescription:"Monto capturado. Largo m\xe1ximo 6",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(d.Z,{collapsible:!1,name:"response_code",required:!1,deprecated:void 0,schemaDescription:"C\xf3digo de resultado de la captura. Si es exitoso es 0,de lo contrario la captura no fue realizada. Largo m\xe1ximo 2",schemaName:"integer",qualifierMessage:"**Possible values:** `<= 99`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "authorization_code": "152759",\n  "authorization_date": "2020-04-03T01:49:50.181Z",\n  "captured_amount": 50,\n  "response_code": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"El mensaje JSON es inv\xe1lido. Puedes ser que no corresponda a un mensaje bien estructurado o que contenga un campo no esperado")),(0,o.kt)("div",null,(0,o.kt)(c.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"SchemaTabs"},(0,o.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(d.Z,{collapsible:!1,name:"error_message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(n.Z,{responseExample:'{\n  "error_message": "token is required"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"No autorizado. API Key y/o API Secret inv\xe1lidos")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"La transacci\xf3n no ha sido encontrada")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"M\xe9todo no permitido")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"No fue posible procesar la respuesta en el formato que el cliente indica")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"415",value:"415",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Tipo de mensaje no permitido")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"El requerimiento no ha podido ser procesado ya sea por validaciones de datos o por l\xf3gica de negocios")),(0,o.kt)("div",null)),(0,o.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Ha ocurrido un error inesperado")),(0,o.kt)("div",null)))))}f.isMDXComponent=!0}}]);