(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/online-cinema/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("main",{staticClass:"main"},[a("div",{staticClass:"container"},[a("router-view")],1)])],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("div",{staticClass:"container"},[i("nav",{staticClass:"nav"},[i("router-link",{staticClass:"nav-logo",attrs:{to:{name:"home"}}},[i("img",{staticClass:"w-10",attrs:{src:a("9b19"),alt:"logo"}}),t._v(" Кинотеатр ")]),i("button",{staticClass:"nav-sign",on:{click:t.changeUserState}},[t._v(" "+t._s(t.auth?"Выйти":"Войти")+" ")])],1)])])},c=[],o={name:"Header",data:function(){return{auth:!1}},created:function(){this.auth=null!==localStorage.getItem("auth")},methods:{changeUserState:function(){this.auth?(localStorage.removeItem("auth"),this.auth=!1,this.$router.push({name:"home"})):(localStorage.setItem("auth",!0),this.auth=!0)}}},l=o,d=a("2877"),u=Object(d["a"])(l,r,c,!1,null,null,null),m=u.exports,f={name:"App",components:{Header:m}},p=f,g=Object(d["a"])(p,n,s,!1,null,null,null),v=g.exports,h=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"films"},[a("h1",{staticClass:"title text-md"},[t._v("Выбери фильм на свой вкус")]),a("ul",{staticClass:"film-list"},t._l(t.films,(function(e){return a("li",{key:e.id,staticClass:"film-card"},[a("img",{staticClass:"film-card__img",attrs:{src:e.img,alt:e.title}}),a("p",{staticClass:"film-card__title"},[t._v(t._s(e.title))]),a("p",{staticClass:"film-card__rating"},[t._v(t._s(e.rating))]),a("router-link",{staticClass:"film-card__link",attrs:{to:{name:"film",params:{id:e.id}}}},[t._v(" Подробнее о фильме ")])],1)})),0)])},_=[],x=[{id:1,title:"Побег из Шоушенка",description:"Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",rating:"9.1",actors:["Тим Роббинс","Морган Фриман","Боб Гантон","Уильям Сэдлер","Клэнси Браун","Гил Беллоуз","Марк Ролстон","Джеймс Уитмор","Джеффри ДеМанн","Ларри Бранденбург"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a4bbb2be-9fa6-4fc1-bb5c-36783618a3f7/960x960",directors:["Фрэнк Дарабонт"]},{id:2,title:"Зеленая миля",description:"Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",rating:"9.1",actors:["Том Хэнкс","Дэвид Морс","Бонни Хант","Майкл Кларк Дункан","Джеймс Кромуэлл","Майкл Джитер","Грэм Грин","Даг Хатчисон","Сэм Рокуэлл","Барри Пеппер"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/c6f19e6f-79dc-43de-80cc-11d8b31fac34/960x960",directors:["Фрэнк Дарабонт"]},{id:3,title:"Интерстеллар",description:"Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.",rating:"8.6",actors:["Мэттью МакКонахи","Энн Хэтэуэй","Джессика Честейн","Маккензи Фой","Майкл Кейн","Дэвид Гяси","Уэс Бентли","Кейси Аффлек","Джон Литгоу","Мэтт Дэймон"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/2eaf37b7-e94d-4ce6-bf15-31f1cd518c5c/960x960",directors:["Кристофер Нолан"]},{id:4,title:"Список Шиндлера",description:"Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.",rating:"8.8",actors:["Лиам Нисон","Бен Кингсли","Рэйф Файнс","Кэролайн Гудолл","Эмбет Дэвидц","Йонатан Сэгаль","Малгоша Гебель","Шмуэль Леви","Марк Иванир","Беатриче Макола"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/e69c1ccc-32ba-43e8-a724-4057d1a04dd0/800x800",directors:["Стивен Спилберг"]},{id:5,title:"Форрест Гамп",description:"Фантастическим образом превращается он в известного футболиста, героя войны, преуспевающего бизнесмена. Он становится миллиардером, но остается таким же бесхитростным, глупым и добрым. Форреста ждет постоянный успех во всем, а он любит девочку, с которой дружил в детстве, но взаимность приходит слишком поздно.",rating:"8.9",actors:["Том Хэнкс","Робин Райт","Салли Филд","Гэри Синиз","Майкелти Уильямсон","Майкл Коннер Хэмпфри","Ханна Р. Холл","Сэм Андерсон","Шиван Фэллон","Ребекка Уильямс"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/3846bc54-e59c-47a1-9ec3-b7cd7e9fee3d/960x960",directors:["Роберт Земекис"]},{id:6,title:"Назад в будущее",description:"Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.",rating:"8.6",actors:["Майкл Дж. Фокс","Кристофер Ллойд","Лиа Томпсон","Криспин Гловер","Томас Ф. Уилсон","Клаудия Уэллс","Марк МакКлюр","Уэнди Джо Спербер","Джордж ДиЧенцо","Фрэнсис Ли МакКейн"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/22da022a-78da-4b31-96c0-aa7ef3c63637/960x960",directors:["Роберт Земекис"]},{id:7,title:"Остров проклятых",description:"Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.",rating:"8.5",actors:["Леонардо ДиКаприо","Марк Руффало","Бен Кингсли","Макс фон Сюдов","Мишель Уильямс","Эмили Мортимер","Патриша Кларксон","Джеки Эрл Хейли","Тед Левайн","Джон Кэрролл Линч"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3b4ceb0f-3981-457c-84b5-6c90ba781e46/960x960",directors:["Мартин Скорсезе"]},{id:8,title:"Начало",description:"Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил.",rating:"8.7",actors:["Леонардо ДиКаприо","Джозеф Гордон-Левитт","Эллиот Пейдж","Том Харди","Кэн Ватанабэ","Дилип Рао","Киллиан Мёрфи","Том Беренджер","Марион Котийяр","Пит Постлетуэйт"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/5bc86e3a-652f-4a8f-8b4b-aeebed05e1c2/960x960",directors:["Кристофер Нолан"]},{id:9,title:"Большой куш",description:"Четырехпалый Френки должен был переправить краденый алмаз из Англии в США своему боссу Эви, но, сделав ставку на подпольный боксерский поединок, попадает в круговорот весьма нежелательных событий. Вокруг него и его груза разворачивается сложная интрига с участием множества колоритных персонажей лондонского дна — русского гангстера, троих незадачливых грабителей, хитрого боксера и угрюмого громилы грозного мафиози. Каждый норовит в одиночку сорвать большой куш.",rating:"8.5",actors:["Джейсон Стэйтем","Стивен Грэм","Брэд Питт","Алан Форд","Робби Ги","Ленни Джеймс","Эд","Деннис Фарина","Раде Шербеджия","Винни Джонс"],img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d24634e0-85ce-46f0-aa6b-5fd2dad427f7/960x960",directors:["Гай Ричи"]}],y={name:"Home",data:function(){return{films:x}}},k=y,C=Object(d["a"])(k,b,_,!1,null,null,null),j=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"film"},[a("h1",{staticClass:"film-title text-md"},[t._v(t._s(t.film.title))]),a("img",{staticClass:"w-full",attrs:{src:t.film.img,alt:t.film.title}}),a("div",{staticClass:"film-subtitle my-2"},[a("p",[t._v("Немного о сюжете:")]),a("p",[t._v(t._s(t.film.description))])]),a("div",{staticClass:"film-subtitle my-2"},[a("p",[t._v("Рейтинг:")]),a("p",[t._v(t._s(t.film.rating))])]),a("div",{staticClass:"film-subtitle my-2"},[a("p",[t._v("Актёрский состав:")]),a("p",[t._v(t._s(t.film.actors.join(", ")))])]),a("div",{staticClass:"film-subtitle my-2"},[a("p",[t._v("Режиссеры:")]),a("p",[t._v(t._s(t.film.directors.join(", ")))])])])},O=[],S=(a("7db0"),{name:"Home",computed:{film:function(){var t=this;return x.find((function(e){return e.id==t.$route.params.id}))}}}),$=S,E=Object(d["a"])($,w,O,!1,null,null,null),P=E.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-screen flex flex-col justify-center items-center"},[i("img",{staticClass:"h-32 w-32",attrs:{src:a("8a81"),alt:"404"}})])}],M={},T=Object(d["a"])(M,H,I,!1,null,null,null),J=T.exports;i["a"].use(h["a"]);var U=[{path:"/",name:"home",component:j},{path:"/:id",name:"film",component:P,beforeEnter:function(t,e,a){localStorage.getItem("auth")?a():a({name:"home"})}},{path:"*",component:J}],A=new h["a"]({routes:U}),q=A;a("def6");i["a"].config.productionTip=!1,new i["a"]({router:q,render:function(t){return t(v)}}).$mount("#app")},"8a81":function(t,e,a){t.exports=a.p+"img/404.3ed3094e.svg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.1cea2945.svg"},def6:function(t,e,a){}});
//# sourceMappingURL=app.d24c3ce0.js.map