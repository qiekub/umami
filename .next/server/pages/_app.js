module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "/6ml":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Contas\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Adicionar conta\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Adicionar website\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrador\"}],\"label.all\":[{\"type\":0,\"value\":\"Todos\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Todos os websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Voltar\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancelar\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Alterar palavra-passe\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmar palavra-passe\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiar para a área de transferência\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Palavra-passe atual\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalo personalizado\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Intervalo de datas\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalo de datas predefinido\"}],\"label.delete\":[{\"type\":0,\"value\":\"Eliminar\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Eliminar conta\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Eliminar website\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ignorar\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domínio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editar\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editar conta\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editar website\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Ativar link de partilha\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Inválido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Domínio inválido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Últimos \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dias\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Últimas \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" horas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Sessão iniciada como \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Iniciar sessão\"}],\"label.logout\":[{\"type\":0,\"value\":\"Sair\"}],\"label.more\":[{\"type\":0,\"value\":\"Mais\"}],\"label.name\":[{\"type\":0,\"value\":\"Nome\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nova palavra-passe\"}],\"label.password\":[{\"type\":0,\"value\":\"Palavra-passe\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Palavra-passes não correspondem\"}],\"label.profile\":[{\"type\":0,\"value\":\"Perfil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Tempo real\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Relatório em tempo real\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Atualizar\"}],\"label.required\":[{\"type\":0,\"value\":\"Obrigatório\"}],\"label.reset\":[{\"type\":0,\"value\":\"Repor\"}],\"label.save\":[{\"type\":0,\"value\":\"Guardar\"}],\"label.settings\":[{\"type\":0,\"value\":\"Definições\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Partilhar link\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Dia único\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Este mês\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Esta semana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Este ano\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuso horário\"}],\"label.today\":[{\"type\":0,\"value\":\"Hoje\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Código de tracking\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Desconhecido\"}],\"label.username\":[{\"type\":0,\"value\":\"Nome de utilizador\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Ver detalhes\"}],\"label.websites\":[{\"type\":0,\"value\":\"Websites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitante\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitantes\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" neste momento\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Tens a certeza que queres eliminar \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiado!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Todos os dados associados também serão eliminados.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ocorreu um erro.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obter link de partilha\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obter código de tracking\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ir para as definições\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nome de utilizador/palavra-passe incorretos.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitante de \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" a usar \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" no \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"os\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Uma nova versão de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" está disponível!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Sem dados disponíveis.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Não tens nenhum website configurado.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Página não encontrada.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Distribuído por \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Guardado com sucesso.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Este é o link de partilha público para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Para recolheres estatísticas para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", coloca o seguinte código na secção \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" do teu website.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Escreve \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" abaixo para confirmares.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Ações\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tempo médio de visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Taxa de rejeição\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navegadores\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Países\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Portátil\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Telemóvel\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivos\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventos\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinado\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Apenas domínio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Dados brutos\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemas operativos\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Visualizações da página\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Páginas\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referrers\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitantes únicos\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visualizações\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitantes\"}]}");

/***/ }),

/***/ "02Qa":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Хэрэглэгчид\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Хэрэглэгч нэмэх\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Веб нэмэх\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Админ\"}],\"label.all\":[{\"type\":0,\"value\":\"Бүх\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Бүх вебүүд\"}],\"label.back\":[{\"type\":0,\"value\":\"Буцах\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Цуцлах\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Нууц үг солих\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Шинэ нууц үгээ давтах\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Хуулах\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Ашиглаж буй нууц үг\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Дурын хугацаа\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Хянах самбар\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Хугацааны мужид\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Өгөгдмөл хугацааны муж\"}],\"label.delete\":[{\"type\":0,\"value\":\"Устгах\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Хэрэглэгч устгах\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Веб устгах\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Үл хэргэсэх\"}],\"label.domain\":[{\"type\":0,\"value\":\"Домэйн\"}],\"label.edit\":[{\"type\":0,\"value\":\"Засах\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Хэрэглэгч засах\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Веб засах\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Хуваалцах холбоос идэвхжүүлэх\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Буруу\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Буруу домэйн\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Сүүлийн \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" хоног\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Сүүлийн \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" цаг\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\"-р нэвтэрсэн\"}],\"label.login\":[{\"type\":0,\"value\":\"Нэвтрэх\"}],\"label.logout\":[{\"type\":0,\"value\":\"Гарах\"}],\"label.more\":[{\"type\":0,\"value\":\"Цааш\"}],\"label.name\":[{\"type\":0,\"value\":\"Нэр\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Шинэ нууц үг\"}],\"label.password\":[{\"type\":0,\"value\":\"Нууц үг\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Нууц үг тохирохгүй байна\"}],\"label.profile\":[{\"type\":0,\"value\":\"Бүртгэл\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Яг одоо\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Бодит хугацааны бүртгэл\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Сэргээх\"}],\"label.required\":[{\"type\":0,\"value\":\"Шаардлагатай\"}],\"label.reset\":[{\"type\":0,\"value\":\"Хуучин хэвд нь оруулах\"}],\"label.save\":[{\"type\":0,\"value\":\"Хадгалах\"}],\"label.settings\":[{\"type\":0,\"value\":\"Тохиргоо\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Хуваалцах холбоос\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Нэг өдөр\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Энэ сар\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Энэ долоо хоног\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Энэ жил\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Цагийн бүс\"}],\"label.today\":[{\"type\":0,\"value\":\"Өнөөдөр\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Мөрдөх код\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Тодорхойгүй\"}],\"label.username\":[{\"type\":0,\"value\":\"Хэрэглэгчийн нэр\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Дэлгэрүүлж харах\"}],\"label.websites\":[{\"type\":0,\"value\":\"Вебүүд\"}],\"message.active-users\":[{\"type\":0,\"value\":\"одоо \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"зочин\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"зочин\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" байна\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Та \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"-г устгахдаа итгэлтэй байна уу?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Хуулсан!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Үүнтэй холбоотой бүх өгөгдөл устах болно.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ямар нэг зүйл буруу боллоо.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Хуваалцах холбоос авах\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Мөрдөх код авах\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Тохиргоо руу очих\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Буруу хэрэглэгчийн нэр/нууц үг.\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" улсаас \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" дээр \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" хөтөч ашиглан орсон\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Umami-гийн шинэ хувилбар \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" гарсан байна!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Өгөгдөл алга.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Та ямар нэгэн веб тохируулаагүй байна.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Хуудас олдсонгүй.\"}],\"message.powered-by\":[{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" дээр суурилсан\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Амжилттай хадгаллаа.\"}],\"message.share-url\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"-г нийтэд хуваалцах холбоос.\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" вебийн статистикийг бүртгэхийн тулд доорх кодыг вебийнхээ \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" хэсэгт байрлуулна уу.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Доорх хэсэгт \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" гэж бичиж баталгаажуулна уу.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Үйлдлүүд\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Зочилсон дундаж хугацаа\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Нэг хуудас үзээд гарсан\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Хөтөч\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Улс\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Суурин компьютер\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Зөөврийн компьютер\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Утас\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Таблет\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Төхөөрөмж\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Үйлдэл\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Нэгтгэсэн\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Зөвхөн домэйн\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Түүхий\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Үйлдлийн систем\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Хуудас үзсэн\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Хуудас\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Чиглүүлэгч\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Зочин\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Үзсэн\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Зочин\"}]}");

/***/ }),

/***/ "07cz":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Účty\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Přidat účet\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Přidat web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrátor\"}],\"label.all\":[{\"type\":0,\"value\":\"Vše\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Všechny weby\"}],\"label.back\":[{\"type\":0,\"value\":\"Zpět\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Zrušit\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Změnit heslo\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Potvrdit heslo\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopírovat do schránky\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Aktuální heslo\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Vlastní rozsah\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Přehled\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Období\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Výchozí období\"}],\"label.delete\":[{\"type\":0,\"value\":\"Smazat\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Smazat účet\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Smazat web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Odejít\"}],\"label.domain\":[{\"type\":0,\"value\":\"Doména\"}],\"label.edit\":[{\"type\":0,\"value\":\"Upravit\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Upravit účet\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Upravit web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Povolit sdílení URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Neplatný\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Neplatná doména\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Posledních \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dnů\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Posledních \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hodin\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Přihlášený jako \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Přihlásit\"}],\"label.logout\":[{\"type\":0,\"value\":\"Odhlásit\"}],\"label.more\":[{\"type\":0,\"value\":\"Více\"}],\"label.name\":[{\"type\":0,\"value\":\"Jméno\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nové heslo\"}],\"label.password\":[{\"type\":0,\"value\":\"Heslo\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Hesla se neschodují\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Aktuálně\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Aktuální záznamy\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Obnovit\"}],\"label.required\":[{\"type\":0,\"value\":\"Vyžadováno\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Uložit\"}],\"label.settings\":[{\"type\":0,\"value\":\"Nastavení\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Sdílet URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Jeden den\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Tento měsíc\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Tento týden\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tento rok\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Časová zóna\"}],\"label.today\":[{\"type\":0,\"value\":\"Dnes\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sledovací kód\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Neznámý\"}],\"label.username\":[{\"type\":0,\"value\":\"Uživatelské jméno\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Zobrazit detaily\"}],\"label.websites\":[{\"type\":0,\"value\":\"Weby\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktuálně \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"návštěvník\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"návštěvníci\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Opravdu smazat \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Zkopírováno!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Všechna související data budou také smazána.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Něco se pokazilo.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Získat sdílené URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Získat měřící kód\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Jít do nastavení\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nesprávné jméno/heslo.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Návštěvník z \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" s prohlížečem \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" na \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Nová verze umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" je k dispozici!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Žádná data.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nemáte nastavený žádný web.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Stránka nenalezena.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Běží na \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Úspěšně uloženo.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Toto je sdílené URL pro \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pro sledování návštěv na \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", přidejte následující kód do \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" části vašeho webu.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Napište \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" pro potvrzení.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Akce\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Průměrný čas návštěvy\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Okamžité opuštění\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Prohlížeč\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Země\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Stolní počítač\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Přenosný počítač\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobilní telefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Zařízení\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Události\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombinace\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domény\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Nezpracované\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operační systém\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Zobrazení stránek\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Stránky\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Odkazy\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Jedinečné návštěvy\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Zobrazení\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Návštěvy\"}]}");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./redux/actions/app.js
var app = __webpack_require__("DzNn");

// EXTERNAL MODULE: ./redux/actions/user.js
var user = __webpack_require__("j6IE");

// EXTERNAL MODULE: ./redux/actions/websites.js
var websites = __webpack_require__("nn0s");

// EXTERNAL MODULE: ./redux/actions/queries.js
var queries = __webpack_require__("Y5Tl");

// CONCATENATED MODULE: ./redux/reducers.js





/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  app: app["b" /* default */],
  user: user["a" /* default */],
  websites: websites["a" /* default */],
  queries: queries["a" /* default */]
}));
// CONCATENATED MODULE: ./redux/store.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let store_store;
function getStore(preloadedState) {
  return Object(toolkit_["configureStore"])({
    reducer: reducers,
    middleware: [external_redux_thunk_default.a],
    preloadedState
  });
}
const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store_store) !== null && _store2 !== void 0 ? _store2 : getStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store_store) {
    _store = getStore(_objectSpread(_objectSpread({}, store_store.getState()), preloadedState)); // Reset the current store

    store_store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store_store) store_store = _store;
  return _store;
};
function useStore(initialState) {
  return Object(external_react_["useMemo"])(() => initializeStore(initialState), [initialState]);
}
// EXTERNAL MODULE: ./hooks/useLocale.js
var useLocale = __webpack_require__("nsFc");

// CONCATENATED MODULE: ./hooks/useForceSSL.js


function useForceSSL(enabled) {
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (enabled && false && /^http:\/\//.test(location.href)) {
      router.push(location.href.replace(/^http:\/\//, 'https://'));
    }
  }, [enabled]);
  return null;
}
// EXTERNAL MODULE: ./lib/lang.js
var lang = __webpack_require__("KeCI");

// EXTERNAL MODULE: ./styles/variables.css
var variables = __webpack_require__("TGBB");

// EXTERNAL MODULE: ./styles/bootstrap-grid.css
var bootstrap_grid = __webpack_require__("4zqh");

// EXTERNAL MODULE: ./styles/index.css
var styles = __webpack_require__("iOjB");

// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Intl = ({
  children
}) => {
  const [locale] = Object(useLocale["a" /* default */])();

  const Wrapper = ({
    children
  }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    className: locale,
    children: children
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["IntlProvider"], {
    locale: locale,
    messages: lang["c" /* messages */][locale],
    textComponent: Wrapper,
    children: children
  });
};

function App({
  Component,
  pageProps
}) {
  useForceSSL(false);
  const store = useStore();
  const {
    basePath
  } = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_redux_["Provider"], {
    store: store,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "icon",
        href: `${basePath}/favicon.ico`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `${basePath}/apple-touch-icon.png`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${basePath}/favicon-32x32.png`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${basePath}/favicon-16x16.png`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "manifest",
        href: `${basePath}/site.webmanifest`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "mask-icon",
        href: `${basePath}/safari-pinned-tab.svg`,
        color: "#5bbad5"
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "msapplication-TileColor",
        content: "#da532c"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "theme-color",
        content: "#ffffff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Intl, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
    })]
  });
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4zqh":
/***/ (function(module, exports) {



/***/ }),

/***/ "6icl":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Conturi\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Adăugare cont\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Adăugare site web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"All\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"All websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Înapoi\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Anulează\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Schimbare parolă\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmare parolă\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiază în clipboard\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Parola curentă\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Interval personalizat\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Tablou de bord\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Interval de date\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Interval de date implicit\"}],\"label.delete\":[{\"type\":0,\"value\":\"Șterge\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Ștergere cont\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Ștergere site web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Renunță\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domeniu\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editare\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editare cont\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editare site web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Activare adresa URL de distribuire\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Invalid\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Invalid domain\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Ultimele \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" zile\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Ultimele \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ore\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Autentificat ca \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Autentificare\"}],\"label.logout\":[{\"type\":0,\"value\":\"Dezautentificare\"}],\"label.more\":[{\"type\":0,\"value\":\"Mai mult\"}],\"label.name\":[{\"type\":0,\"value\":\"Nume\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Parola nouă\"}],\"label.password\":[{\"type\":0,\"value\":\"Parolă\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Parolele nu se potrivesc\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtime logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Reîmprospătare\"}],\"label.required\":[{\"type\":0,\"value\":\"Obligatoriu\"}],\"label.reset\":[{\"type\":0,\"value\":\"Resetează\"}],\"label.save\":[{\"type\":0,\"value\":\"Salvează\"}],\"label.settings\":[{\"type\":0,\"value\":\"Setări\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Partajare URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"O singură zi\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Această lună\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Această săptămână\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Acest an\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fus orar\"}],\"label.today\":[{\"type\":0,\"value\":\"Astăzi\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Cod de urmărire\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Necunoscut\"}],\"label.username\":[{\"type\":0,\"value\":\"Username\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vizualizare detalii\"}],\"label.websites\":[{\"type\":0,\"value\":\"Site-uri web\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"vizitator activ\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"vizitatori activi\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Sunteți sigur că doriți să ștergeți \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiat!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Toate datele asociate vor fi șterse, de asemenea.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ceva n-a mers bine.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obține adresa URL de partajare\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obține codul de urmărire\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Mergi la Setări\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Username/parolă incorecte.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitor from \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" using \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" on \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Este disponibilă o nouă versiune \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" de umami!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Nicio informație disponibilă.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nu aveți niciun site web configurat.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Pagina nu a fost găsită.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Cu sprijinul \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Salvat cu succes.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Aceasta este adresa URL de partajare pentru \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pentru a urmări statisticile pentru \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", plasați următorul cod în secțiunea \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" a site-ului dvs. web.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Tastați \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" în casuța de mai jos pentru a confirma.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Acțiuni\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Timp mediu de vizitare\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Rata de respingere\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsere\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Țări\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tabletă\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispozitive\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Evenimente\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinat\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Numai domeniu\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Brut\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sisteme de operare\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Vizualizări de pagină\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pagini\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Site-uri de proveniență\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Vizitatori unici\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Vizualizări\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Vizitatori\"}]}");

/***/ }),

/***/ "7T8v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeWWW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDomainName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeUrl; });
function removeTrailingSlash(url) {
  return url && url.length > 1 && url.endsWith('/') ? url.slice(0, -1) : url;
}
function removeWWW(url) {
  return url && url.length > 1 && url.startsWith('www.') ? url.slice(4) : url;
}
function getDomainName(str) {
  try {
    return new URL(str).hostname;
  } catch (e) {
    return str;
  }
}
function getQueryString(params = {}) {
  const map = Object.keys(params).reduce((arr, key) => {
    if (params[key] !== undefined) {
      return arr.concat(`${key}=${encodeURIComponent(params[key])}`);
    }

    return arr;
  }, []);

  if (map.length) {
    return `?${map.join('&')}`;
  }

  return '';
}
function makeUrl(url, params) {
  return `${url}${getQueryString(params)}`;
}

/***/ }),

/***/ "8wFs":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Tilit\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Lisää tili\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Lisää verkkosivu\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Järjestelmänvalvoja\"}],\"label.all\":[{\"type\":0,\"value\":\"Kaikki\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Kaikki verkkosivut\"}],\"label.back\":[{\"type\":0,\"value\":\"Takaisin\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Peruuta\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Vaihda salasana\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Vahvista salasana\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopioi leikepöydälle\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Nykyinen salasana\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Mukautettu jakso\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Ohjauspaneeli\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Ajanjakso\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Oletusajanjakso\"}],\"label.delete\":[{\"type\":0,\"value\":\"Poista\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Poista tili\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Poista verkkosivu\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Hylkää\"}],\"label.domain\":[{\"type\":0,\"value\":\"Verkkotunnus\"}],\"label.edit\":[{\"type\":0,\"value\":\"Muokkaa\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Muokkaa tiliä\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Muokkaa verkkosivua\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Ota jakamisen URL-osoite käyttöön\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Virheellinen\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Virheellinen verkkotunnus\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Viimeisimmät \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" päivät\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Viimeisimmät \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" tunnit\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Kirjautuneena sisään nimellä \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Kirjaudu sisään\"}],\"label.logout\":[{\"type\":0,\"value\":\"Kirjaudu ulos\"}],\"label.more\":[{\"type\":0,\"value\":\"Lisää\"}],\"label.name\":[{\"type\":0,\"value\":\"Nimi\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Uusi salasana\"}],\"label.password\":[{\"type\":0,\"value\":\"Salasana\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Salasanat eivät täsmää\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profiili\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Reaaliaikainen\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Reaaliaikaiset lokit\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Päivitä\"}],\"label.required\":[{\"type\":0,\"value\":\"Vaaditaan\"}],\"label.reset\":[{\"type\":0,\"value\":\"Nollaa\"}],\"label.save\":[{\"type\":0,\"value\":\"Tallenna\"}],\"label.settings\":[{\"type\":0,\"value\":\"Asetukset\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Jaa URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Yksi päivä\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Tämä kuukausi\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Tämä viikko\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tämä vuosi\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Aikavyöhyke\"}],\"label.today\":[{\"type\":0,\"value\":\"Tänään\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Seurantakoodi\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Tuntematon\"}],\"label.username\":[{\"type\":0,\"value\":\"Käyttäjänimi\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Katso tiedot\"}],\"label.websites\":[{\"type\":0,\"value\":\"Verkkosivut\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" nykyinen \"},{\"offset\":0,\"options\":{\"muut\":{\"value\":[{\"type\":0,\"value\":\"visitors\"}]},\"yksi\":{\"value\":[{\"type\":0,\"value\":\"visitor\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Haluatko varmasti poistaa \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopioitu!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Kaikki siihen liittyvät tiedot poistetaan.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Jotain meni väärin.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Hanki jakamisen URL-osoite\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Hanki seurantakoodi\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Mene asetuksiin\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Väärä käyttäjänimi/salasana.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Vierailija maasta \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" käyttäen selainta \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\"-laitteella: \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Uusi versio umamista \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" on käytettävissä!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Tietoja ei ole käytettävissä.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Sinulla ei ole määritettyjä verkkosivustoja.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Sivua ei löydetty.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Voimanlähteenä \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Tallennettu onnistuneesti.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Tämä on julkisesti jaettu URL-osoitteelle \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Jos haluat seurata kohteen \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" tilastoja, aseta seuraava koodi verkkosivustosi \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" osioon.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Kirjoita \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" alla olevaan ruutuun vahvistaaksesi.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Toiminnat\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Keskimääräinen vierailuaika\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Välitön poistuminen\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Selaimet\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Maat\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Pöytäkone\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Kannettava tietokone\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiili\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tabletti\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Laitteet\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Tapahtumat\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Yhdistetty\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Vain verkkotunnus\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Käsittelemätön\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Käyttöjärjestelmät\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sivun näyttökertoja\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sivut\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Viittaajat\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Uniikit vierailijat\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Näyttökertoja\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Vierailijat\"}]}");

/***/ }),

/***/ "AEbH":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Konta\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Dodaj konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Dodaj witrynę\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Wszystkie\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Wszystkie witryny\"}],\"label.back\":[{\"type\":0,\"value\":\"Powrót\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Anuluj\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Zmień hasło\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Potwierdź hasło\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Skopiuj do schowka\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Aktualne hasło\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Zakres niestandardowy\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Zakres dat\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Domyślny zakres dat\"}],\"label.delete\":[{\"type\":0,\"value\":\"Usuń\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Usuń konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Usuń witrynę\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Odrzuć\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domena\"}],\"label.edit\":[{\"type\":0,\"value\":\"Edytuj\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Edytuj konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Edytuj witrynę\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Włącz udostępnianie adresu URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Nieprawidłowy\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Nieprawidłowa witryna\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Ostatnie \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dni\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Ostatnie \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" godzin\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Zalogowano jako \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Zaloguj się\"}],\"label.logout\":[{\"type\":0,\"value\":\"Wyloguj\"}],\"label.more\":[{\"type\":0,\"value\":\"Więcej\"}],\"label.name\":[{\"type\":0,\"value\":\"Nazwa\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nowe hasło\"}],\"label.password\":[{\"type\":0,\"value\":\"Hasło\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Hasła się nie zgadzają\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Czas rzeczywisty\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Logi w czasie rzeczywistym\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Odśwież\"}],\"label.required\":[{\"type\":0,\"value\":\"Wymagany\"}],\"label.reset\":[{\"type\":0,\"value\":\"Zresetuj\"}],\"label.save\":[{\"type\":0,\"value\":\"Zapisz\"}],\"label.settings\":[{\"type\":0,\"value\":\"Ustawienia\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Udostępnij adres URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"W tym dniu\"}],\"label.this-month\":[{\"type\":0,\"value\":\"W tym miesiącu\"}],\"label.this-week\":[{\"type\":0,\"value\":\"W tym tygodniu\"}],\"label.this-year\":[{\"type\":0,\"value\":\"W tym roku\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Strefa czasowa\"}],\"label.today\":[{\"type\":0,\"value\":\"Dzisiaj\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Kod śledzenia\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Nieznany\"}],\"label.username\":[{\"type\":0,\"value\":\"Nazwa użytkownika\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Pokaż szczegóły\"}],\"label.websites\":[{\"type\":0,\"value\":\"Witryny\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktualnie \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"odwiedzający\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"odwiedzających\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Czy na pewno chcesz usunąć \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Skopiowano!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Wszystkie powiązane dane również zostaną usunięte.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Coś poszło nie tak.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Uzyskaj adres URL udostępniania\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Pobierz kod śledzenia\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Przejdź do ustawień\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nieprawidłowa nazwa użytkownika/hasło.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Odwiedzający z \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" używa \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" na \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Nowa wersja umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" jest dostępna!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Brak dostępnych danych.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nie masz skonfigurowanych żadnych witryn internetowych.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Strona nie znaleziona.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Obsługiwane przez \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Zapisano pomyślnie.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"To jest publicznie udostępniany adres URL dla \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Aby śledzić statystyki dla \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", umieść poniższy kod w sekcji \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" swojej witryny.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Wpisz \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" w polu poniżej, aby potwierdzić.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Działania\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Średni czas wizyty\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Współczynnik odrzuceń\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Przeglądarki\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Kraje\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Komputer\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Smartfon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Urządzenia\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Zdarzenia\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Połączone\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Tylko domena\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Surowe dane\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"System operacyjny\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Wyświetlenia strony\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Strony\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Źródła odsyłające\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unikalni odwiedzający\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Wyświetlenia\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Odwiedzający\"}]}");

/***/ }),

/***/ "D5CS":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Účty\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Pridať účet\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Pridať web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrátor\"}],\"label.all\":[{\"type\":0,\"value\":\"Všetko\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Všetky weby\"}],\"label.back\":[{\"type\":0,\"value\":\"Späť\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Zrušiť\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Zmeniť heslo\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Potvrdiť heslo\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopírovať do schránky\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Aktuálne heslo\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Vlastný rozsah\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Prehlad\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Obdobie\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Predvolené obdobie\"}],\"label.delete\":[{\"type\":0,\"value\":\"Zmazať\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Zmazať účet\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Zmazať web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Odísť\"}],\"label.domain\":[{\"type\":0,\"value\":\"Doména\"}],\"label.edit\":[{\"type\":0,\"value\":\"Upraviť\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Upraviť účet\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Upraviť web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Povoliť zdielanie URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Neplatný\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Neplatná doména\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Posledných \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dní\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Posledných \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hodín\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Prihlásený ako \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Prihlásiť\"}],\"label.logout\":[{\"type\":0,\"value\":\"Odhlásiť\"}],\"label.more\":[{\"type\":0,\"value\":\"Viac\"}],\"label.name\":[{\"type\":0,\"value\":\"Meno\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nové heslo\"}],\"label.password\":[{\"type\":0,\"value\":\"Heslo\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Hesla se nezhodujú\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Aktuálne\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Aktuálne záznamy\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Obnoviť\"}],\"label.required\":[{\"type\":0,\"value\":\"Povinné\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Uložiť\"}],\"label.settings\":[{\"type\":0,\"value\":\"Nastavenia\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Zdielanie URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Jeden deň\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Tento mesiac\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Tento týždeň\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tento rok\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Časová zóna\"}],\"label.today\":[{\"type\":0,\"value\":\"Dnes\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sledovací kód\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Neznámý\"}],\"label.username\":[{\"type\":0,\"value\":\"Užívateľské meno\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Zobraziť detaily\"}],\"label.websites\":[{\"type\":0,\"value\":\"Weby\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktuálne \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"návštevník\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"návštěvníci\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Naozaj zmazať \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Skopírované!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Všetky príbuzné data budu tiež zmazané.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Niečo sa pokazilo.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Získať zdielané URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Získať tracking kód\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ísť do nastavení\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nesprávné meno/heslo.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Návštevník z \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" s prehliadačom \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" na \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Nová verzia umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" je k dispozícii!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Žiadne data.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nemáte nastavený žiadny web.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Stránka sa nenašla.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Úspešne uložené.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Toto je zdielané URL pre \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pre sledovanie návštev na \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", pridajte následujúci kód do \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" časti vašeho webu.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Napíšte \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" pre potvrdenie.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Akcie\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Priemerný čas návštevy\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Okamžité opustenie\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Prehliadač\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Zem\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Stolný počítač\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Prenosný počítač\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobilný telefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Zariadenie\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Udalosti\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombinácie\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domény\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Nezpracované\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operačný systém\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Zobrazenie stánok\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Stránky\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Odkazy\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Jedinečné návštevy\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Zobrazení\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Návštevy\"}]}");

/***/ }),

/***/ "DvRY":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"حساب ها\"}],\"label.add-account\":[{\"type\":0,\"value\":\"افزودن حساب\"}],\"label.add-website\":[{\"type\":0,\"value\":\"افزودن وب سایت\"}],\"label.administrator\":[{\"type\":0,\"value\":\"مدیر\"}],\"label.all\":[{\"type\":0,\"value\":\"همه\"}],\"label.all-events\":[{\"type\":0,\"value\":\"همه رویداد ها\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"همه وب سایت ها\"}],\"label.back\":[{\"type\":0,\"value\":\"برگشت\"}],\"label.cancel\":[{\"type\":0,\"value\":\"انصراف\"}],\"label.change-password\":[{\"type\":0,\"value\":\"تغییر رمز\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"تایید رمز\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"کپی به حافظه\"}],\"label.current-password\":[{\"type\":0,\"value\":\"رمز فعلی\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"محدوده دلخواه\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"داشبورد\"}],\"label.date-range\":[{\"type\":0,\"value\":\"محدوده تاریخ\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"محدوده پیشفرض تاریخ\"}],\"label.delete\":[{\"type\":0,\"value\":\"حذف\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"حذف حساب\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"حذف وب سایت\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"رد کردن\"}],\"label.domain\":[{\"type\":0,\"value\":\"دامنه\"}],\"label.edit\":[{\"type\":0,\"value\":\"ویرایش\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"ویرایش حساب\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"ویرایش وب سایت\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"فعال کردن اشتراک گذاری URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"نامعتبر\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"دامنه نامعتبر\"}],\"label.last-days\":[{\"type\":0,\"value\":\"لیست \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" روز\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"لیست \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ساعت\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"وارد شده به عنوان \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"ورود\"}],\"label.logout\":[{\"type\":0,\"value\":\"خروج\"}],\"label.more\":[{\"type\":0,\"value\":\"بیشتر\"}],\"label.name\":[{\"type\":0,\"value\":\"نام\"}],\"label.new-password\":[{\"type\":0,\"value\":\"رمز جدید\"}],\"label.password\":[{\"type\":0,\"value\":\"رمز\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"رمز ها یکسان نیستند\"}],\"label.profile\":[{\"type\":0,\"value\":\"پروفایل\"}],\"label.realtime\":[{\"type\":0,\"value\":\"آمار هم اکنون\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"لاگ های هم اکنون\"}],\"label.refresh\":[{\"type\":0,\"value\":\"تازه کردن\"}],\"label.required\":[{\"type\":0,\"value\":\"لازم\"}],\"label.reset\":[{\"type\":0,\"value\":\"ریست\"}],\"label.save\":[{\"type\":0,\"value\":\"ذخیره\"}],\"label.settings\":[{\"type\":0,\"value\":\"تنظیمات\"}],\"label.share-url\":[{\"type\":0,\"value\":\"به اشتراک گذاری URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"یک روز\"}],\"label.this-month\":[{\"type\":0,\"value\":\"این ماه\"}],\"label.this-week\":[{\"type\":0,\"value\":\"این هفته\"}],\"label.this-year\":[{\"type\":0,\"value\":\"امسال\"}],\"label.timezone\":[{\"type\":0,\"value\":\"منطقه زمانی\"}],\"label.today\":[{\"type\":0,\"value\":\"امروز\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"کد رهگیری\"}],\"label.unknown\":[{\"type\":0,\"value\":\"ناشناخته\"}],\"label.username\":[{\"type\":0,\"value\":\"نام کاربری\"}],\"label.view-details\":[{\"type\":0,\"value\":\"مشاهده جزئیات\"}],\"label.websites\":[{\"type\":0,\"value\":\"وب سایت ها\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" هم اکنون \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"یک\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"از میان\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"آیا مطمئن هستید می خواهید \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" را حذف کنید?\"}],\"message.copied\":[{\"type\":0,\"value\":\"کپی شد!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"همه داده های مرتبط هم حذف خواهد شد.\"}],\"message.failure\":[{\"type\":0,\"value\":\"مشکلی پیش آمده است.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"دریافت URL برای اشتراک گذاری\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"گرفتن کد رهگیری\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"رفتن به تنظیمات\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"نام کاربری / رمز نادرست است.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"بازدید کننده از کشور \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" با مروگر \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" در \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"نسخه جدید umami (\"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\") وجود است!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"اطلاعاتی موجود نیست.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"شما هیچ وب سایتی را پیکر بندی نکرده اید.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"صفحه یافت نشد.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"قدرت گرفته توسط \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"با موفقیت ذخیره شد.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"این URL به اشتراک گذاشته شده عمومی برای \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" است.\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"برای ردیابی آمار \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", کد روبرو را در قسمت \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" وب سایت قرار دهید.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"جهت اطمینان {delete} را در کادر زیر بنویسید.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"اقدامات\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"میانگین زمان بازدید\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"نرخ Bounce\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"مروگر ها\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"کشور ها\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"دسکتاپ\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"لپ تاپ\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"موبایل\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"تبلت\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"دستگاه ها\"}],\"metrics.events\":[{\"type\":0,\"value\":\"رویداد ها\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"ترکیب شده\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"فقط دامنه\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"خام\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"سیستم عامل ها\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"بازدید صفحه\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"صفحه ها\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"ارجاع دهندگان\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"بازدید کننده خالص\"}],\"metrics.views\":[{\"type\":0,\"value\":\"بازدید\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"بازدید کننده\"}]}");

/***/ }),

/***/ "DzNn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setTheme; });
/* unused harmony export setVersions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setShareToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkVersion; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jeBt");
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YSmr");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Oz/6");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_3__);




const app = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'app',
  initialState: {
    locale: Object(lib_web__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "c"])(lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* LOCALE_CONFIG */ "o"]) || lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* DEFAULT_LOCALE */ "f"],
    theme: Object(lib_web__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "c"])(lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* THEME_CONFIG */ "z"]) || lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* DEFAULT_THEME */ "g"],
    versions: {
      current: "1.17.0",
      latest: null,
      hasUpdate: false
    },
    shareToken: null
  },
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
      return state;
    },

    setTheme(state, action) {
      state.theme = action.payload;
      return state;
    },

    setVersions(state, action) {
      state.versions = action.payload;
      return state;
    },

    setShareToken(state, action) {
      state.shareToken = action.payload;
      return state;
    }

  }
});
const {
  setLocale,
  setTheme,
  setVersions,
  setShareToken
} = app.actions;
/* harmony default export */ __webpack_exports__["b"] = (app.reducer);
function checkVersion() {
  return async (dispatch, getState) => {
    const {
      app: {
        versions: {
          current
        }
      }
    } = getState();
    const data = await fetch('https://api.github.com/repos/mikecao/umami/releases/latest', {
      method: 'get',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      return null;
    });

    if (!data) {
      return;
    }

    const {
      tag_name
    } = data;
    const latest = tag_name.startsWith('v') ? tag_name.slice(1) : tag_name;
    const lastCheck = Object(lib_web__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "c"])(lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* VERSION_CHECK */ "D"]);
    const hasUpdate = latest && semver__WEBPACK_IMPORTED_MODULE_3___default.a.gt(latest, current) && (lastCheck === null || lastCheck === void 0 ? void 0 : lastCheck.version) !== latest;
    return dispatch(setVersions({
      current,
      latest,
      hasUpdate
    }));
  };
}

/***/ }),

/***/ "EqNz":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Utenti\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Aggiungi utente\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Aggiungi sito\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Amministratore\"}],\"label.all\":[{\"type\":0,\"value\":\"Tutto\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Tutti i siti web\"}],\"label.back\":[{\"type\":0,\"value\":\"Indietro\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Annulla\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Modifica password\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Conferma password\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copia\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Password corrente\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Personalizzato\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Periodo\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Periodo standard\"}],\"label.delete\":[{\"type\":0,\"value\":\"Elimina\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Elimina account\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Elimina sito\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Scarta\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dominio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Modifica\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Modifica account\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Modifica sito\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Abilita URL di condivisione\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Non valido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Dominio non valido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Ultimi \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" giorni\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Ultime \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ore\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Ciao \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Login\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logout\"}],\"label.more\":[{\"type\":0,\"value\":\"Dettagli\"}],\"label.name\":[{\"type\":0,\"value\":\"Nome\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nuova password\"}],\"label.password\":[{\"type\":0,\"value\":\"Password\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Le password non corrispondono\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profilo\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Log in realtime\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Ricarica\"}],\"label.required\":[{\"type\":0,\"value\":\"Obbligatorio\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Salva\"}],\"label.settings\":[{\"type\":0,\"value\":\"Impostazioni\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Share URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Singolo giorno\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Questo mese\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Questa settimana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Quest'anno\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuso orario\"}],\"label.today\":[{\"type\":0,\"value\":\"Oggi\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Codice di tracking\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Sconosciuto\"}],\"label.username\":[{\"type\":0,\"value\":\"Username\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vedi dettagli\"}],\"label.websites\":[{\"type\":0,\"value\":\"Siti web\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitatore\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitatori\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" online\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Sei sicuro di voler eliminare \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiato!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Saranno eliminati anche tutti i dati associati.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Si è verificato un errore.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Ottieni l'URL di condivisione\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Ottieni il codice di tracking\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Vai alle impostazioni\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Username o password non corretti.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Utenti da \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" tramite \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" su \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Una nuova versione umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" è disponibile!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Nessun dato disponibile.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Non hai ancora configurato alcun sito.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Pagina non trovata\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Salvato!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Questo è l'URL di condivisione per \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Per tracciare le statistiche di \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", inserisci questo codice nella sezione \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" del tuo sito web.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Digita \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" nel box qui sotto per confermare.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Azioni\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tempo medio di visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Frequenza di rimbalzo\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browser\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Nazioni\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobile\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivi\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventi\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Aggregati\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Solo dominio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Raw\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemi operativi\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Visualizzazioni di pagina\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pagine\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referr\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitatori unici\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visualizzazioni\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitatori\"}]}");

/***/ }),

/***/ "EtmR":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"खाता\"}],\"label.add-account\":[{\"type\":0,\"value\":\"खाता जोड़ें\"}],\"label.add-website\":[{\"type\":0,\"value\":\"वेबसाइट\"}],\"label.administrator\":[{\"type\":0,\"value\":\"प्रशासक\"}],\"label.all\":[{\"type\":0,\"value\":\"सब\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"सभी वेबसाइटें\"}],\"label.back\":[{\"type\":0,\"value\":\"पीछे\"}],\"label.cancel\":[{\"type\":0,\"value\":\"रद्द करें\"}],\"label.change-password\":[{\"type\":0,\"value\":\"पासवर्ड बदलें\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"पासवर्ड की पुष्टि कीजिये\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"क्लिपबोर्ड पर कॉपी करें\"}],\"label.current-password\":[{\"type\":0,\"value\":\"वर्तमान पासवर्ड\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"कस्टम रेंज\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"नियंत्रण-पट्ट\"}],\"label.date-range\":[{\"type\":0,\"value\":\"तिथि सीमा\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"डिफ़ॉल्ट तिथि सीमा\"}],\"label.delete\":[{\"type\":0,\"value\":\"खाता हटाएं\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"खाता हटाएं\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"वेबसाइट हटाएं\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"खारिज कीजिये\"}],\"label.domain\":[{\"type\":0,\"value\":\"डोमेन\"}],\"label.edit\":[{\"type\":0,\"value\":\"संपादित करें\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"खाता संपादित करें\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"वेबसाइट संपादित करें\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"शेयर URL सक्षम करें\"}],\"label.invalid\":[{\"type\":0,\"value\":\"अमान्य\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"अमान्य डोमेन\"}],\"label.last-days\":[{\"type\":0,\"value\":\"पिछले \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" दिन\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"पिछले \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" घंटे\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" के रूप में लॉग इन किया\"}],\"label.login\":[{\"type\":0,\"value\":\"लॉग इन\"}],\"label.logout\":[{\"type\":0,\"value\":\"लॉग आउट\"}],\"label.more\":[{\"type\":0,\"value\":\"और\"}],\"label.name\":[{\"type\":0,\"value\":\"नाम\"}],\"label.new-password\":[{\"type\":0,\"value\":\"नया पासवर्ड\"}],\"label.password\":[{\"type\":0,\"value\":\"पासवर्ड\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"पासवर्ड मेल नहीं खाते\"}],\"label.profile\":[{\"type\":0,\"value\":\"प्रोफ़ाइल\"}],\"label.realtime\":[{\"type\":0,\"value\":\"वास्तव काल\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"वास्तविक समय लॉग\"}],\"label.refresh\":[{\"type\":0,\"value\":\"रिफ्रेश\"}],\"label.required\":[{\"type\":0,\"value\":\"अपेक्षित\"}],\"label.reset\":[{\"type\":0,\"value\":\"रीसेट\"}],\"label.save\":[{\"type\":0,\"value\":\"सहेजें\"}],\"label.settings\":[{\"type\":0,\"value\":\"समायोजन\"}],\"label.share-url\":[{\"type\":0,\"value\":\"यूआरएल साझा करें\"}],\"label.single-day\":[{\"type\":0,\"value\":\"एक दिन\"}],\"label.this-month\":[{\"type\":0,\"value\":\"इस महीने\"}],\"label.this-week\":[{\"type\":0,\"value\":\"इस सप्ताह\"}],\"label.this-year\":[{\"type\":0,\"value\":\"इस साल\"}],\"label.timezone\":[{\"type\":0,\"value\":\"समय क्षेत्र\"}],\"label.today\":[{\"type\":0,\"value\":\"आज\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"ट्रैकिंग कोड\"}],\"label.unknown\":[{\"type\":0,\"value\":\"अज्ञात\"}],\"label.username\":[{\"type\":0,\"value\":\"उपयोगकर्ता नाम\"}],\"label.view-details\":[{\"type\":0,\"value\":\"विवरण देखें\"}],\"label.websites\":[{\"type\":0,\"value\":\"वेबसाइटों\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" मौजूद \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"आगंतुक\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"आगंतुकों\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"क्या आप वाकई में \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" हटाना चाहते हैं?\"}],\"message.copied\":[{\"type\":0,\"value\":\"कॉपी हो गया!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"सभी संबद्ध डेटा को भी हटा दिया जाएगा।\"}],\"message.failure\":[{\"type\":0,\"value\":\"कुछ गलत हो गया।\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"शेयर URL प्राप्त करें\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"ट्रैकिंग कोड प्राप्त करें\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"समायोजन में जाइए\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"ग़लत उपयोगकर्ता नाम / पासवर्ड।\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" का आगंतुक, जो \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" का उपयोग करता है, \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" यन्त्र पर\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"उमामी का नया संस्करण \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" उपलब्ध है!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"कोई डेटा उपलब्ध नहीं है।\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"आपके पास कोई वेबसाइट कॉन्फ़िगर नहीं है।\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"पृष्ठ नहीं मिला।\"}],\"message.powered-by\":[{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" द्वारा संचालित\"}],\"message.save-success\":[{\"type\":0,\"value\":\"सफलतापूर्वक संचित कर लिया गया है।\"}],\"message.share-url\":[{\"type\":0,\"value\":\"यह \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" के लिए सार्वजनिक रूप से साझा किया गया URL है।\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" के आँकड़ों को ट्रैक करने के लिए, अपनी वेबसाइट के \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" अनुभाग में निम्नलिखित कोड रखें।\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"पुष्टि करने के लिए नीचे दिए गए बॉक्स में \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" टाइप करें।\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"कार्य\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"औसत दृश्य समय\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"उछाल दर\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"वेब ब्राउज़र\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"देश\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"डेस्कटॉप\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"लैपटॉप\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"मोबाइल फोन\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"टैबलेट\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"उपकरण\"}],\"metrics.events\":[{\"type\":0,\"value\":\"स्पर्धाएँ\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"संयुक्त\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"केवल डोमेन\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"रॉ\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"ऑपरेटिंग सिस्टम\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"पृष्ठ दृश्य\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"पृष्ठों\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"सन्दर्भदाता\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"अद्वितीय आगंतुकों\"}],\"metrics.views\":[{\"type\":0,\"value\":\"दृश्य\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"आगंतुकों\"}]}");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IVkf":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Konton\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Lägg till konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Lägg till webbsajt\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administratör\"}],\"label.all\":[{\"type\":0,\"value\":\"Alla\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alla sajter\"}],\"label.back\":[{\"type\":0,\"value\":\"Tillbaka\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Avbryt\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Byt lösenord\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Bekräfta lösenord\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopiera till urklipp\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Nuvarande lösenord\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Anpassat urval\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Översikt\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datumomfång\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standard datum-urval\"}],\"label.delete\":[{\"type\":0,\"value\":\"Radera\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Radera konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Radera webbsajt\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Avbryt\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domän\"}],\"label.edit\":[{\"type\":0,\"value\":\"Redigera\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Redigera konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Redigera webbsajt\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktivera delnings-URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ogiltig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ogiltig domän\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Senaste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dagarna\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Senaste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" timmarna\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Inloggad som \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Logga in\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logga ut\"}],\"label.more\":[{\"type\":0,\"value\":\"Mer\"}],\"label.name\":[{\"type\":0,\"value\":\"Namn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nytt lösenord\"}],\"label.password\":[{\"type\":0,\"value\":\"Lösenord\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Lösenorden är inte samma\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtid\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtidsloggar\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Uppdatera\"}],\"label.required\":[{\"type\":0,\"value\":\"Krävs\"}],\"label.reset\":[{\"type\":0,\"value\":\"Återställ\"}],\"label.save\":[{\"type\":0,\"value\":\"Spara\"}],\"label.settings\":[{\"type\":0,\"value\":\"Inställningar\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Delnings-URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"En dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Denna månad\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Denna vecka\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Detta år\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tidszon\"}],\"label.today\":[{\"type\":0,\"value\":\"Idag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Spårningskod\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Okänd\"}],\"label.username\":[{\"type\":0,\"value\":\"Användarnamn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Visa detaljer\"}],\"label.websites\":[{\"type\":0,\"value\":\"Webbsajt\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"besökare\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"besökare\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" just nu\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Är du säker på att du vill radera \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopierad!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"All tillhörande data kommer också raderas.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Något gick fel.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Visa delnings-URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Visa spårningskod\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Gå till inställningar\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Felaktikt användarnamn/lösenord.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Besökare från \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" med \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" på \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"En ny version av umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" är tillgänglig!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Ingen data tillgänglig.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Du har inga webbsajter.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Sidan kan inte hittas.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Drivs av \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Sparades!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Det här är den offentliga delnings-URL:en \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"För att spåra statistik för \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", placera följande kod i \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"-avsnittet på din webbsajt.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriv \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" i rutan nedan för att radera.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Händelser\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Medelbesökstid\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Avvisningfrekvens\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Webbläsare\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Länder\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Stationär\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Bärbar\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Platta\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Enheter\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Händelser\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombinerade\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Endast domän\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Rådata\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operativsystem\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sidvisningar\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sidor\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Hänvisare\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unika besökare\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visningar\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Besökare\"}]}");

/***/ }),

/***/ "KeCI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return menuOptions; });
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tDG4");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lang_compiled_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jG9A");
var lang_compiled_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("jG9A", 1);
/* harmony import */ var lang_compiled_nl_NL_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("OhGf");
var lang_compiled_nl_NL_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("OhGf", 1);
/* harmony import */ var lang_compiled_zh_CN_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iQzV");
var lang_compiled_zh_CN_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("iQzV", 1);
/* harmony import */ var lang_compiled_zh_TW_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rDi4");
var lang_compiled_zh_TW_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("rDi4", 1);
/* harmony import */ var lang_compiled_tr_TR_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("yl8m");
var lang_compiled_tr_TR_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("yl8m", 1);
/* harmony import */ var lang_compiled_ru_RU_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xdMv");
var lang_compiled_ru_RU_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("xdMv", 1);
/* harmony import */ var lang_compiled_de_DE_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Wwee");
var lang_compiled_de_DE_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t("Wwee", 1);
/* harmony import */ var lang_compiled_ja_JP_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hQbz");
var lang_compiled_ja_JP_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t("hQbz", 1);
/* harmony import */ var lang_compiled_es_MX_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bOZ5");
var lang_compiled_es_MX_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t("bOZ5", 1);
/* harmony import */ var lang_compiled_fr_FR_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("RWu3");
var lang_compiled_fr_FR_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("RWu3", 1);
/* harmony import */ var lang_compiled_mn_MN_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("02Qa");
var lang_compiled_mn_MN_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t("02Qa", 1);
/* harmony import */ var lang_compiled_da_DK_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("lnWM");
var lang_compiled_da_DK_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t("lnWM", 1);
/* harmony import */ var lang_compiled_sv_SE_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("IVkf");
var lang_compiled_sv_SE_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t("IVkf", 1);
/* harmony import */ var lang_compiled_el_GR_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("TkjR");
var lang_compiled_el_GR_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t("TkjR", 1);
/* harmony import */ var lang_compiled_fo_FO_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("RZw1");
var lang_compiled_fo_FO_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t("RZw1", 1);
/* harmony import */ var lang_compiled_pt_PT_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("/6ml");
var lang_compiled_pt_PT_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t("/6ml", 1);
/* harmony import */ var lang_compiled_pt_BR_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("wXnG");
var lang_compiled_pt_BR_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t("wXnG", 1);
/* harmony import */ var lang_compiled_ro_RO_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("6icl");
var lang_compiled_ro_RO_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t("6icl", 1);
/* harmony import */ var lang_compiled_nb_NO_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("Tofa");
var lang_compiled_nb_NO_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t("Tofa", 1);
/* harmony import */ var lang_compiled_id_ID_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("tSfz");
var lang_compiled_id_ID_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t("tSfz", 1);
/* harmony import */ var lang_compiled_uk_UA_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("hKbc");
var lang_compiled_uk_UA_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t("hKbc", 1);
/* harmony import */ var lang_compiled_fi_FI_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("8wFs");
var lang_compiled_fi_FI_json__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t("8wFs", 1);
/* harmony import */ var lang_compiled_cs_CZ_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("07cz");
var lang_compiled_cs_CZ_json__WEBPACK_IMPORTED_MODULE_23___namespace = /*#__PURE__*/__webpack_require__.t("07cz", 1);
/* harmony import */ var lang_compiled_sk_SK_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("D5CS");
var lang_compiled_sk_SK_json__WEBPACK_IMPORTED_MODULE_24___namespace = /*#__PURE__*/__webpack_require__.t("D5CS", 1);
/* harmony import */ var lang_compiled_pl_PL_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("AEbH");
var lang_compiled_pl_PL_json__WEBPACK_IMPORTED_MODULE_25___namespace = /*#__PURE__*/__webpack_require__.t("AEbH", 1);
/* harmony import */ var lang_compiled_ta_IN_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("s1yH");
var lang_compiled_ta_IN_json__WEBPACK_IMPORTED_MODULE_26___namespace = /*#__PURE__*/__webpack_require__.t("s1yH", 1);
/* harmony import */ var lang_compiled_hi_IN_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("EtmR");
var lang_compiled_hi_IN_json__WEBPACK_IMPORTED_MODULE_27___namespace = /*#__PURE__*/__webpack_require__.t("EtmR", 1);
/* harmony import */ var lang_compiled_he_IL_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("wPVa");
var lang_compiled_he_IL_json__WEBPACK_IMPORTED_MODULE_28___namespace = /*#__PURE__*/__webpack_require__.t("wPVa", 1);
/* harmony import */ var lang_compiled_it_IT_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("EqNz");
var lang_compiled_it_IT_json__WEBPACK_IMPORTED_MODULE_29___namespace = /*#__PURE__*/__webpack_require__.t("EqNz", 1);
/* harmony import */ var lang_compiled_fa_IR_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("DvRY");
var lang_compiled_fa_IR_json__WEBPACK_IMPORTED_MODULE_30___namespace = /*#__PURE__*/__webpack_require__.t("DvRY", 1);
/* harmony import */ var lang_compiled_ms_MY_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("U15p");
var lang_compiled_ms_MY_json__WEBPACK_IMPORTED_MODULE_31___namespace = /*#__PURE__*/__webpack_require__.t("U15p", 1);
































const messages = {
  'en-US': lang_compiled_en_US_json__WEBPACK_IMPORTED_MODULE_1__,
  'nl-NL': lang_compiled_nl_NL_json__WEBPACK_IMPORTED_MODULE_2__,
  'zh-CN': lang_compiled_zh_CN_json__WEBPACK_IMPORTED_MODULE_3__,
  'zh-TW': lang_compiled_zh_TW_json__WEBPACK_IMPORTED_MODULE_4__,
  'de-DE': lang_compiled_de_DE_json__WEBPACK_IMPORTED_MODULE_7__,
  'ru-RU': lang_compiled_ru_RU_json__WEBPACK_IMPORTED_MODULE_6__,
  'tr-TR': lang_compiled_tr_TR_json__WEBPACK_IMPORTED_MODULE_5__,
  'ja-JP': lang_compiled_ja_JP_json__WEBPACK_IMPORTED_MODULE_8__,
  'es-MX': lang_compiled_es_MX_json__WEBPACK_IMPORTED_MODULE_9__,
  'fr-FR': lang_compiled_fr_FR_json__WEBPACK_IMPORTED_MODULE_10__,
  'mn-MN': lang_compiled_mn_MN_json__WEBPACK_IMPORTED_MODULE_11__,
  'da-DK': lang_compiled_da_DK_json__WEBPACK_IMPORTED_MODULE_12__,
  'sv-SE': lang_compiled_sv_SE_json__WEBPACK_IMPORTED_MODULE_13__,
  'el-GR': lang_compiled_el_GR_json__WEBPACK_IMPORTED_MODULE_14__,
  'fo-FO': lang_compiled_fo_FO_json__WEBPACK_IMPORTED_MODULE_15__,
  'pt-PT': lang_compiled_pt_PT_json__WEBPACK_IMPORTED_MODULE_16__,
  'pt-BR': lang_compiled_pt_BR_json__WEBPACK_IMPORTED_MODULE_17__,
  'ro-RO': lang_compiled_ro_RO_json__WEBPACK_IMPORTED_MODULE_18__,
  'nb-NO': lang_compiled_nb_NO_json__WEBPACK_IMPORTED_MODULE_19__,
  'id-ID': lang_compiled_id_ID_json__WEBPACK_IMPORTED_MODULE_20__,
  'uk-UA': lang_compiled_uk_UA_json__WEBPACK_IMPORTED_MODULE_21__,
  'fi-FI': lang_compiled_fi_FI_json__WEBPACK_IMPORTED_MODULE_22__,
  'cs-CZ': lang_compiled_cs_CZ_json__WEBPACK_IMPORTED_MODULE_23__,
  'sk-SK': lang_compiled_sk_SK_json__WEBPACK_IMPORTED_MODULE_24__,
  'pl-PL': lang_compiled_pl_PL_json__WEBPACK_IMPORTED_MODULE_25__,
  'ta-IN': lang_compiled_ta_IN_json__WEBPACK_IMPORTED_MODULE_26__,
  'hi-IN': lang_compiled_hi_IN_json__WEBPACK_IMPORTED_MODULE_27__,
  'he-IL': lang_compiled_he_IL_json__WEBPACK_IMPORTED_MODULE_28__,
  'it-IT': lang_compiled_it_IT_json__WEBPACK_IMPORTED_MODULE_29__,
  'fa-IR': lang_compiled_fa_IR_json__WEBPACK_IMPORTED_MODULE_30__,
  'ms-MY': lang_compiled_ms_MY_json__WEBPACK_IMPORTED_MODULE_31__
};
const dateLocales = {
  'en-US': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["enUS"],
  'nl-NL': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["nl"],
  'zh-CN': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["zhCN"],
  'zh-TW': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["zhTW"],
  'de-DE': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["de"],
  'da-DK': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["da"],
  'ru-RU': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["ru"],
  'sv-SE': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["sv"],
  'tr-TR': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["tr"],
  'ja-JP': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["ja"],
  'es-MX': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["es"],
  'fr-FR': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["fr"],
  'mn-MN': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["enUS"],
  'el-GR': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["el"],
  'fo-FO': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["da"],
  'pt-PT': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["pt"],
  'pt-BR': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["ptBR"],
  'ro-RO': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["ro"],
  'nb-NO': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["nb"],
  'id-ID': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["id"],
  'uk-UA': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["uk"],
  'fi-FI': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["fi"],
  'cs-CZ': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["cs"],
  'sk-SK': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["sk"],
  'pl-PL': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["pl"],
  'ta-In': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["ta"],
  'hi-IN': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["hi"],
  'he-IL': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["he"],
  'it-IT': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["it"],
  'fa-IR': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["faIR"],
  'ms-MY': date_fns_locale__WEBPACK_IMPORTED_MODULE_0__["ms"]
};
const menuOptions = [{
  label: '中文',
  value: 'zh-CN',
  display: 'cn'
}, {
  label: '中文(繁體)',
  value: 'zh-TW',
  display: 'tw'
}, {
  label: 'Čeština',
  value: 'cs-CZ',
  display: 'cs'
}, {
  label: 'Dansk',
  value: 'da-DK',
  display: 'da'
}, {
  label: 'Deutsch',
  value: 'de-DE',
  display: 'de'
}, {
  label: 'English',
  value: 'en-US',
  display: 'en'
}, {
  label: 'Español',
  value: 'es-MX',
  display: 'es'
}, {
  label: 'فارسی',
  value: 'fa-IR',
  display: 'fa'
}, {
  label: 'Føroyskt',
  value: 'fo-FO',
  display: 'fo'
}, {
  label: 'Français',
  value: 'fr-FR',
  display: 'fr'
}, {
  label: 'Ελληνικά',
  value: 'el-GR',
  display: 'el'
}, {
  label: 'עברית',
  value: 'he-IL',
  display: 'he'
}, {
  label: 'हिन्दी',
  value: 'hi-IN',
  display: 'hi'
}, {
  label: 'Italiano',
  value: 'it-IT',
  display: 'it'
}, {
  label: 'Bahasa Indonesia',
  value: 'id-ID',
  display: 'id'
}, {
  label: '日本語',
  value: 'ja-JP',
  display: 'ja'
}, {
  label: 'Malay',
  value: 'ms-MY',
  display: 'ms'
}, {
  label: 'Монгол',
  value: 'mn-MN',
  display: 'mn'
}, {
  label: 'Nederlands',
  value: 'nl-NL',
  display: 'nl'
}, {
  label: 'Norsk Bokmål',
  value: 'nb-NO',
  display: 'nb'
}, {
  label: 'Polski',
  value: 'pl-PL',
  display: 'pl'
}, {
  label: 'Português',
  value: 'pt-PT',
  display: 'pt'
}, {
  label: 'Português do Brasil',
  value: 'pt-BR',
  display: 'pt-BR'
}, {
  label: 'Русский',
  value: 'ru-RU',
  display: 'ru'
}, {
  label: 'Română',
  value: 'ro-RO',
  display: 'ro'
}, {
  label: 'Slovenčina',
  value: 'sk-SK',
  display: 'sk'
}, {
  label: 'Suomi',
  value: 'fi-FI',
  display: 'fi'
}, {
  label: 'Svenska',
  value: 'sv-SE',
  display: 'sv'
}, {
  label: 'தமிழ்',
  value: 'ta-IN',
  display: 'ta'
}, {
  label: 'Türkçe',
  value: 'tr-TR',
  display: 'tr'
}, {
  label: 'українська',
  value: 'uk-UA',
  display: 'uk'
}];

/***/ }),

/***/ "OhGf":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Gebruikers\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Account toevoegen\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Website toevoegen\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alles\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Alle gebeurtenissen\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Terug\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Annuleren\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Wachtwoord wijzigen\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Wachtwoord bevestigen\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopiëer naar klembord\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Huidig wachtwoord\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Aangepast bereik\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Overzicht\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datumbereik\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standaard bereik\"}],\"label.delete\":[{\"type\":0,\"value\":\"Verwijderen\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Account verwijderen\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Website verwijderen\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Negeren\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domein\"}],\"label.edit\":[{\"type\":0,\"value\":\"Bewerken\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Account bewerken\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Website bewerken\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Sta delen via openbare URL toe\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ongeldig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ongeldig domein\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Laatste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dagen\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Laatste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" uur\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Ingelogd als \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Inloggen\"}],\"label.logout\":[{\"type\":0,\"value\":\"Uitloggen\"}],\"label.more\":[{\"type\":0,\"value\":\"Toon meer\"}],\"label.name\":[{\"type\":0,\"value\":\"Naam\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nieuw wachtwoord\"}],\"label.password\":[{\"type\":0,\"value\":\"Wachtwoord\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Wachtwoorden komen niet overeen\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profiel\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Actueel\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Actueel logboek\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Vernieuwen\"}],\"label.required\":[{\"type\":0,\"value\":\"Verplicht\"}],\"label.reset\":[{\"type\":0,\"value\":\"Resetten\"}],\"label.save\":[{\"type\":0,\"value\":\"Opslaan\"}],\"label.settings\":[{\"type\":0,\"value\":\"Instellingen\"}],\"label.share-url\":[{\"type\":0,\"value\":\"URL delen\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Enkele dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Deze maand\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Deze week\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Dit jaar\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tijdzone\"}],\"label.today\":[{\"type\":0,\"value\":\"Vandaag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Volgcode\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Onbekend\"}],\"label.username\":[{\"type\":0,\"value\":\"Gebruikersnaam\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Meer details\"}],\"label.websites\":[{\"type\":0,\"value\":\"Websites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" actieve \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"bezoeker\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"bezoekers\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Weet je zeker dat je \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" wilt verwijderen?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Gekopiëerd!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle verwante gegezens zullen ook verwijderd worden.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Er is iets misgegaan.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Openbare URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Tracking code\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Naar instellingen\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Incorrecte gebruikersnaam/wachtwoord.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Bezoeker uit \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" met \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" op een \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Een nieuwe versie van umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" is beschikbaar!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Geen gegevens beschikbaar.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Je hebt geen websites ingesteld.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Pagina niet gevonden.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"mogelijk gemaakt door \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Opslaan succesvol.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Met deze URL kan \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" openbaar gedeeld worden.\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Om statistieken voor \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" bij te houden, plaats je de volgende code in het \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" gedeelte van je website.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Type \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" in onderstaande veld om dit te bevestigen.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Acties\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Gemiddelde bezoektijd\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bouncepercentage\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsers\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Landen\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiel\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Apparaten\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Gebeurtenissen\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Gecombineerd\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Alleen domein\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Ruw\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Besturingssysteem\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Paginaweergaven\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pagina's\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Verwijzers\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unieke bezoekers\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Weergaven\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Bezoekers\"}]}");

/***/ }),

/***/ "Oz/6":
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),

/***/ "RWu3":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Comptes\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Ajouter un compte\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Ajouter un site\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrateur\"}],\"label.all\":[{\"type\":0,\"value\":\"Tout\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Tous les événements\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Tous les sites web\"}],\"label.back\":[{\"type\":0,\"value\":\"Retour\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Annuler\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Changer le mot de passe\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmation du mot de passe\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copier dans le presse papier\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Mot de passe actuel\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalle personnalisé\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Tableau de bord\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Intervalle\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalle par défaut\"}],\"label.delete\":[{\"type\":0,\"value\":\"Supprimer\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Supprimer le compte\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Supprimer le site\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ignorer\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domaine\"}],\"label.edit\":[{\"type\":0,\"value\":\"Modifier\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Modifier le compte\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Modifier le site\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Activer le partage d'URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Invalide\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Domaine invalide\"}],\"label.last-days\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" derniers jours\"}],\"label.last-hours\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dernières heures\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Connecté en tant que \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Connexion\"}],\"label.logout\":[{\"type\":0,\"value\":\"Déconnexion\"}],\"label.more\":[{\"type\":0,\"value\":\"Plus\"}],\"label.name\":[{\"type\":0,\"value\":\"Nom\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nouveau mot de passe\"}],\"label.password\":[{\"type\":0,\"value\":\"Mot de passe\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Les mots de passe ne correspondent pas\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Temps réel\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Logs en temps réel\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Rafraîchir\"}],\"label.required\":[{\"type\":0,\"value\":\"Requis\"}],\"label.reset\":[{\"type\":0,\"value\":\"Réinitialiser\"}],\"label.save\":[{\"type\":0,\"value\":\"Sauvegarder\"}],\"label.settings\":[{\"type\":0,\"value\":\"Paramètres\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Partager l'URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Journée\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Ce mois ci\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Cette semaine\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Cette année\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuseau horaire\"}],\"label.today\":[{\"type\":0,\"value\":\"Aujourd'hui\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Code de suivi\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Inconnu\"}],\"label.username\":[{\"type\":0,\"value\":\"Nom d'utilisateur\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Voir les details\"}],\"label.websites\":[{\"type\":0,\"value\":\"Sites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visiteur\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visiteurs\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" actuellement\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Êtes-vous sûr de vouloir supprimer \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copié !\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Toutes les données associées seront également supprimées.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Un problème est survenu.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obtenez l'URL de partage\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obtenez le code de suivi\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Aller aux paramètres\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"nom d'utilisateurs/mot de passe incorrect.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visiteur de \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" utilisant \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" sur \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Une nouvelle version de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" est disponible !\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Pas de données disponibles.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Vous n'avez configuré aucun site Web.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Page non trouvée.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Propulsé par \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Enregistré avec succès.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Ceci est l'URL partagée pour \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pour suivre les statistiques de \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", placez le code suivant dans la section \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" de votre site Web.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Tapez \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" dans la case ci-dessous pour confirmer.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Actions\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Temps de visite moyen\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Taux de rebond\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navigateurs\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Pays\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Ordinateur\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Portable\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Téléphone\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablette\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Appareils\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Événements\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combiné\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domaine uniquement\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Brute\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Systèmes d'exploitation\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Pages vues\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pages\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"URL Référentes\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visiteurs uniques\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Vues\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visiteurs\"}]}");

/***/ }),

/***/ "RZw1":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Brúkarar\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Ger brúkara\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Legg heimasíðu afturat\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Fyrisitari\"}],\"label.all\":[{\"type\":0,\"value\":\"Alt\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Allar heimasíður\"}],\"label.back\":[{\"type\":0,\"value\":\"Aftur\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Strika\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Skift loyniorð\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Vátta loyniorð\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Avrita til setiðborð\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Núverandi loyniorð\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Tillaga  spenni\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Yvirlitsskíggi\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Vel dato\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Forsett dato\"}],\"label.delete\":[{\"type\":0,\"value\":\"Sletta\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Sletta brúkara\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Sletta heimasíðu\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Lat fara\"}],\"label.domain\":[{\"type\":0,\"value\":\"Økisnavn\"}],\"label.edit\":[{\"type\":0,\"value\":\"Ger broyting\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Broyt brúkara\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Broyt heimasíðu\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Virkja deili leinki\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ógilda\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ógilt økisnavn\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Seinastu \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dagarnar\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Seinastu \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" tímarnar\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Ritaður inn sum \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Rita inn\"}],\"label.logout\":[{\"type\":0,\"value\":\"Rita út\"}],\"label.more\":[{\"type\":0,\"value\":\"Meira\"}],\"label.name\":[{\"type\":0,\"value\":\"Navn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nýtt loyniorð\"}],\"label.password\":[{\"type\":0,\"value\":\"Loyniorð\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Loyniorðini eru ikki eins\"}],\"label.profile\":[{\"type\":0,\"value\":\"Vangi\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Beinleiðis\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Beinleiðis skrá\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Endurskapa\"}],\"label.required\":[{\"type\":0,\"value\":\"Kravt\"}],\"label.reset\":[{\"type\":0,\"value\":\"Nulstilla\"}],\"label.save\":[{\"type\":0,\"value\":\"Goym\"}],\"label.settings\":[{\"type\":0,\"value\":\"Stillingar\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Deil leinku\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Einkultur dagur\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Hendan mánan\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Hesa vikuna\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Hetta árið\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tíðarsona\"}],\"label.today\":[{\"type\":0,\"value\":\"Í dag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Spori kota\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Ókent\"}],\"label.username\":[{\"type\":0,\"value\":\"Brúkaranavn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vís frágreiðing\"}],\"label.websites\":[{\"type\":0,\"value\":\"Heimasíður\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" í løtuni \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"vitjandi\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\" vitjandi \"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Ert tú sikkur at tú ynskir at strika \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Avrita!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Øll data ið er knýtt at verður eisini strika.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Okkurt bleiv gali.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Fá leinku sum tú kanst deila\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Fá sporings kotu\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Far til stillingar\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Skeivt brúkaranavn/loyniorð.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Vitjandi frá \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" brúkar \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" á \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Ein nýggj útgava av umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" er tøkt!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Einki data tøk.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Tú hevur ongar heimasíður stillaða til.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Síðan bleiv ikki funnin.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Goymt.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Hettar er tann almenna leinkan av \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Fyri at spora hagtøl fyri \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", koyr kotuna í \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" partin á tínari heimasíðu.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriva \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" í feltið fyri at vátta\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Gerðir\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Miðal vitjurnartíð \"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bounce prosenttal\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Kagar\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Lond\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Borðtelda\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Fartelda\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Telefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Teldil\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Tóleindir\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Hendingar/tiltøk\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Samansett\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Bara økisnavn\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Óviðgjørt\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Stýrikervir\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Opnaðar síðir\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Síðir\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Framsendingar\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Einsýna vitjanir\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Sýningar\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Vitjandi\"}]}");

/***/ }),

/***/ "TGBB":
/***/ (function(module, exports) {



/***/ }),

/***/ "TkjR":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Λογαριασμοί\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Προσθήκη λογαριασμού\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Προσθήκη ιστότοπου\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Διαχειριστής\"}],\"label.all\":[{\"type\":0,\"value\":\"All\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"All websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Πίσω\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Ακύρωση\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Αλλαγή κωδικού\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Επιβεβαίωση κωδικού\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Αντιγραφή στο πρόχειρο\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Τωρινός κωδικός πρόσβασης\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Προσαρμοσμένο εύρος\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Πίνακας\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Εύρος ημερομηνιών\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Προεπιλεγμένο εύρος ημερομηνιών\"}],\"label.delete\":[{\"type\":0,\"value\":\"Διαγραφή\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Διαγραφή λογαριασμού\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Διαγραφή ιστότοπου\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Dismiss\"}],\"label.domain\":[{\"type\":0,\"value\":\"Τομέας\"}],\"label.edit\":[{\"type\":0,\"value\":\"Επεξεργασία\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Επεξεργασία λογαριασμού\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Επεξεργασία ιστότοπου\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Ενεργοποίηση κοινής χρήσης URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Μη έγκυρο\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Μη έγκυρος τομέας\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Τελευταίες \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ημέρες\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Τελευταίες \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ώρες\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Συνδεθήκατε ως \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Είσοδος\"}],\"label.logout\":[{\"type\":0,\"value\":\"Αποσύνδεση\"}],\"label.more\":[{\"type\":0,\"value\":\"Περισσότερα\"}],\"label.name\":[{\"type\":0,\"value\":\"Όνομα\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Νέος κωδικός\"}],\"label.password\":[{\"type\":0,\"value\":\"Κωδικός\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Οι κωδικοί πρόσβασης δεν ταιριάζουν\"}],\"label.profile\":[{\"type\":0,\"value\":\"Προφίλ\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtime logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Ανανέωση\"}],\"label.required\":[{\"type\":0,\"value\":\"Απαιτείται\"}],\"label.reset\":[{\"type\":0,\"value\":\"Επαναφορά\"}],\"label.save\":[{\"type\":0,\"value\":\"Αποθήκευση\"}],\"label.settings\":[{\"type\":0,\"value\":\"Ρυθμίσεις\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Κοινοποίηση διεύθυνσης URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Ημερήσια\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Αυτο το μήνα\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Αυτή την εβδομάδα\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Αυτή την χρονιά\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Ζώνη ώρας\"}],\"label.today\":[{\"type\":0,\"value\":\"Σήμερα\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Κωδικός παρακολούθησης\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Άγνωστο\"}],\"label.username\":[{\"type\":0,\"value\":\"Όνομα χρήστη\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Λεπτομέρειες\"}],\"label.websites\":[{\"type\":0,\"value\":\"Ιστότοποι\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ενεργοί \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"επισκέπτης\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"επισκέπτες\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Είστε βέβαιοι ότι θέλετε να διαγράψετε το \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\";\"}],\"message.copied\":[{\"type\":0,\"value\":\"Αντιγράφηκε!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Όλα τα σχετικά δεδομένα θα διαγραφούν επίσης.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Κάτι πήγε στραβά.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Λήψη URL κοινής χρήσης\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Λήψη κώδικα παρακολούθησης\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Μεταβείτε στις ρυθμίσεις\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Εσφαλμένο όνομα χρήστη / κωδικός πρόσβασης.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitor from \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" using \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" on \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"A new version of umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" is available!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Δεν υπάρχουν διαθέσιμα δεδομένα.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Δεν έχετε ρυθμίσει κανένα ιστότοπο.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Η σελίδα δεν βρέθηκε.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Με την υποστήριξη του \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Αποθηκεύτηκε επιτυχώς.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Αυτό είναι το κοινόχρηστο URL για το \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Για να παρακολουθείτε στατιστικά στοιχεία για \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", τοποθετήστε τον ακόλουθο κώδικα στην ενότητα \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" του ιστότοπού σας.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Πληκτρολογήστε \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" στο παρακάτω πλαίσιο για επιβεβαίωση.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Ενέργειες\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Μέσος χρόνος επίσκεψης\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Ποσοστό αναπήδησης\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Προγράμματα περιήγησης\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Χώρες\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Σταθερός υπολογιστής\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Λάπτοπ\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Κινητό\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Τάμπλετ\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Συσκευές\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Γεγονότα\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Σε συνδυασμό\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Μόνο τομέας\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Ακατέργαστο\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Λειτουργικά συστήματα\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Προβολές σελίδας\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Σελίδες\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Παραπομπές\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Μοναδικοί επισκέπτες\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Προβολές\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Επισκέπτες\"}]}");

/***/ }),

/***/ "Tofa":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Kontoer\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Legg til konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Legg til nettsted\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alle\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle nettsteder\"}],\"label.back\":[{\"type\":0,\"value\":\"Tilbake\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Avvis\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Bytt passord\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Godkjenn passord\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopier til utklippstavle\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Nåværende passord\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Egendefinert utvalg\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datointervall\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standard datoperiode\"}],\"label.delete\":[{\"type\":0,\"value\":\"Slett\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Slett konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Slett nettstedet\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Avbryt\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domene\"}],\"label.edit\":[{\"type\":0,\"value\":\"Rediger\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Rediger konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Rediger nettsted\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktiver delings-URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ugyldig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ugyldig domene\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Siste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dager\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Siste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" timer\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Logget på som \"},{\"type\":1,\"value\":\"brukernavn\"}],\"label.login\":[{\"type\":0,\"value\":\"Logg inn\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logg ut\"}],\"label.more\":[{\"type\":0,\"value\":\"Mer\"}],\"label.name\":[{\"type\":0,\"value\":\"Navn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nytt passord\"}],\"label.password\":[{\"type\":0,\"value\":\"Passord\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Passordene er ikke like\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Sanntid\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Sanntidslogger\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Oppdater\"}],\"label.required\":[{\"type\":0,\"value\":\"Påkrevd\"}],\"label.reset\":[{\"type\":0,\"value\":\"Nullstill\"}],\"label.save\":[{\"type\":0,\"value\":\"Lagre\"}],\"label.settings\":[{\"type\":0,\"value\":\"Innstillinger\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Del URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Enkelt dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Denne måneden\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Denne uka\"}],\"label.this-year\":[{\"type\":0,\"value\":\"I år\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tidssone\"}],\"label.today\":[{\"type\":0,\"value\":\"I dag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sporingskode\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Ukjent\"}],\"label.username\":[{\"type\":0,\"value\":\"Brukernavn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vis detaljer\"}],\"label.websites\":[{\"type\":0,\"value\":\"Nettsteder\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"besøkende\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"besøkende\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" nå\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Er du sikker på at du vil slette \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopiert!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle tilknyttede data slettes også.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Noe gikk galt.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Få delings-URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Få sporingskode\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Gå til innstillinger\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Ugyldig brukernavn/passord.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Besøkende fra \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" med \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" på \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"En ny versjon av umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" er tilgjengelig!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Ingen data tilgjengelig.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Du har ikke satt opp noen nettsteder.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Side ikke funnet.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Drevet av \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Lagret!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Dette er den offentlige delings-URL-en for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"For å spore statistikk for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", plasser følgende kode i \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"-delen av nettstedet ditt.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriv inn \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" i boksen nedenfor for å bekrefte.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Handlinger\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Gjennomsnittlig besøkelsestid\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Avvisningsfrekvens\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Nettlesere\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Land\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Stasjonær\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Bærbar\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiltelefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Nettbrett\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Enheter\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Arrangementer\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombinert\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Bare domene\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Rå\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operativsystemer\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sidevisninger\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sider\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referanser\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unike besøkende\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visninger\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Besøkende\"}]}");

/***/ }),

/***/ "U15p":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Akaun\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Tambah akaun\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Tambah laman web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Pentadbir\"}],\"label.all\":[{\"type\":0,\"value\":\"Semua\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Semua peristiwa\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Semua laman web\"}],\"label.back\":[{\"type\":0,\"value\":\"Kembali\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Batal\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Tukar kata laluan\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Sahkan kata laluan\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Salin ke papan keratan\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Kata laluan semasa\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Julat khas\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Papan pemuka\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Julat tarikh\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Julat tarikh lalai\"}],\"label.delete\":[{\"type\":0,\"value\":\"Padam\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Padam akaun\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Padam laman web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ketepikan\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domain\"}],\"label.edit\":[{\"type\":0,\"value\":\"Edit\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Edit akaun\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Edit laman web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktifkan url berkongsi\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Tidak sah\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Domain tidak sah\"}],\"label.last-days\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hari lepas\"}],\"label.last-hours\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" jam lepas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Log masuk sebagai \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Log masuk\"}],\"label.logout\":[{\"type\":0,\"value\":\"Log keluar\"}],\"label.more\":[{\"type\":0,\"value\":\"Lebih banyak lagi\"}],\"label.name\":[{\"type\":0,\"value\":\"Nama\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Kata laluan baru\"}],\"label.password\":[{\"type\":0,\"value\":\"Kata laluan\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Kata laluan tidak sepadan\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Siaran langsung\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Log secara siaran langsung\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Muat semula\"}],\"label.required\":[{\"type\":0,\"value\":\"Diperlukan\"}],\"label.reset\":[{\"type\":0,\"value\":\"Tetapkan semula\"}],\"label.save\":[{\"type\":0,\"value\":\"Simpan\"}],\"label.settings\":[{\"type\":0,\"value\":\"Tetapan\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Kongsikan URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Satu hari\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Bulan ini\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Minggu ini\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tahun ini\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zon masa\"}],\"label.today\":[{\"type\":0,\"value\":\"Hari ini\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Kod penjejakan\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Tidak diketahui\"}],\"label.username\":[{\"type\":0,\"value\":\"Nama pengguna\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Lihat butiran\"}],\"label.websites\":[{\"type\":0,\"value\":\"Laman web\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" semasa \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"pelawat\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"pelawat\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Pastikah anda ingin memadam \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Disalin!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Semua data yang berkaitan juga akan dihapuskan.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ada yang tidak kena.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Dapatkan URL berkongsi\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Dapatkan kod penjejakan\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Pergi ke tetapan\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Pengguna/kata laluan tidak betul.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Pelawat dari \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" mengguna \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" pada \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Versi baru umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" boleh didapati!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Tiada data yang boleh didapati.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Anda tidak ada sebarang laman web yang telah dikonfigurasikan.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Halaman tidak dijumpai.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Disediakan oleh \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Berjaya disimpan.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Ini adalah URL berkongsi untuk \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Untuk menjejak statistik bagi \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", letakkan kod berikut di bahagian \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" laman web anda.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Taip \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" di dalam kotak di bawah untuk pengesahan.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Aksi\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Purata tempoh masa lawatan\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Kadar lantunan\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Pelayar web\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Negara\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Telefon bimbit\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Peranti\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Peristiwa\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Digabungkan\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domain sahaja\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Mentah\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistem operasi\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Paparan halaman\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Halaman\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Perujuk\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Pelawat unik\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Lawatan\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Pelawat\"}]}");

/***/ }),

/***/ "Wwee":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Konten\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Konto hinzugfügen\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Webseite hinzufügen\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alle\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Alle Ereignisse\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle Webseiten\"}],\"label.back\":[{\"type\":0,\"value\":\"Zurück\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Abbrechen\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Passwort ändern\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Passwort wiederholen\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"In die Zwischenablage kopieren\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Derzeitiges Passwort\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Benutzerdefinierter Bereich\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Übersicht\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datumsbereich\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Voreingestellter Datumsbereich\"}],\"label.delete\":[{\"type\":0,\"value\":\"Löschen\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Konto löschen\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Webseite löschen\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Verwerfen\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domain\"}],\"label.edit\":[{\"type\":0,\"value\":\"Bearbeiten\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Konto bearbeiten\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Webseite bearbeiten\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Freigabe-URL aktivieren\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ungültig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ungültige Domain\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Letzten \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" Tage\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Letzten \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" Stunden\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Angemeldet als \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Anmelden\"}],\"label.logout\":[{\"type\":0,\"value\":\"Abmelden\"}],\"label.more\":[{\"type\":0,\"value\":\"Mehr\"}],\"label.name\":[{\"type\":0,\"value\":\"Name\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Neues Passwort\"}],\"label.password\":[{\"type\":0,\"value\":\"Passwort\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Passwörter stimmen nicht überein\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Echtzeit\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Echtzeit-Protokoll\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Aktualisieren\"}],\"label.required\":[{\"type\":0,\"value\":\"Erforderlich\"}],\"label.reset\":[{\"type\":0,\"value\":\"Zurücksetzen\"}],\"label.save\":[{\"type\":0,\"value\":\"Speichern\"}],\"label.settings\":[{\"type\":0,\"value\":\"Einstellungen\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Freigabe-URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Ein Tag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Diesen Monat\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Diese Woche\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Dieses Jahr\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zeitzone\"}],\"label.today\":[{\"type\":0,\"value\":\"Heute\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Tracking Kennung\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Unbekannt\"}],\"label.username\":[{\"type\":0,\"value\":\"Benutzername\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Details anzeigen\"}],\"label.websites\":[{\"type\":0,\"value\":\"Webseiten\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"aktiver Besucher\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"aktive Besucher\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Sind Sie sich sicher \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" zu löschen?\"}],\"message.copied\":[{\"type\":0,\"value\":\"In Zwischenablage kopiert!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle zugehörigen Daten werden ebenfalls gelöscht.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Es ist ein Fehler aufgetreten.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Freigabe-URL abrufen\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Erstelle Tracking Kennung\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Zu den Einstellungen\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Falsches Passwort oder Benutzername.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Besucher aus \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" benutzt \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" auf \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Eine neue Version von umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ist verfügbar!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Keine Daten vorhanden.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Es ist keine Webseite vorhanden.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Seite nicht gefunden.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Betrieben durch \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Erfolgreich gespeichert.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Dies ist die öffentliche URL zum Teilen für \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Um die Statistiken für \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" zu übermitteln, platzieren Sie bitte den folgenden Quelltext im \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ihrer Webseite.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Geben Sie \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" in das Feld unten ein um zu bestätigen.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Aktionen\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Durchschn. Besuchszeit\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Absprungrate\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browser\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Länder\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiltelefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Geräte\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Ereignisse\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombiniert\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Nur diese Domain\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Rohdaten\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Betriebssysteme\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Seitenaufrufe\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Seiten\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referrer\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Eindeutige Besucher\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Aufrufe\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Besucher\"}]}");

/***/ }),

/***/ "Y5Tl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateQuery; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const queries = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'queries',
  initialState: {},
  reducers: {
    updateQuery(state, action) {
      const _action$payload = action.payload,
            {
        url
      } = _action$payload,
            data = _objectWithoutProperties(_action$payload, ["url"]);

      state[url] = data;
      return state;
    }

  }
});
const {
  updateQuery
} = queries.actions;
/* harmony default export */ __webpack_exports__["a"] = (queries.reducer);

/***/ }),

/***/ "YSmr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOCALE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return TIMEZONE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DATE_RANGE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return THEME_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return VERSION_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TOKEN_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DEFAULT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DEFAULT_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DEFAUL_CHART_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEFAULT_ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEFAULT_DATE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REALTIME_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REALTIME_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return THEME_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return EVENT_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return POSTGRESQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MYSQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MYSQL_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return POSTGRESQL_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DOMAIN_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DESKTOP_SCREEN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LAPTOP_SCREEN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MOBILE_SCREEN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return URL_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DESKTOP_OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MOBILE_OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BROWSERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return MAP_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ISO_COUNTRIES; });
const AUTH_COOKIE_NAME = 'umami.auth';
const LOCALE_CONFIG = 'umami.locale';
const TIMEZONE_CONFIG = 'umami.timezone';
const DATE_RANGE_CONFIG = 'umami.date-range';
const THEME_CONFIG = 'umami.theme';
const VERSION_CHECK = 'umami.version-check';
const TOKEN_HEADER = 'x-umami-token';
const DEFAULT_LOCALE = 'en-US';
const DEFAULT_THEME = 'light';
const DEFAUL_CHART_HEIGHT = 400;
const DEFAULT_ANIMATION_DURATION = 300;
const DEFAULT_DATE_RANGE = '24hour';
const REALTIME_RANGE = 30;
const REALTIME_INTERVAL = 3000;
const THEME_COLORS = {
  light: {
    primary: '#2680eb',
    gray50: '#ffffff',
    gray75: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eaeaea',
    gray300: '#e1e1e1',
    gray400: '#cacaca',
    gray500: '#b3b3b3',
    gray600: '#8e8e8e',
    gray700: '#6e6e6e',
    gray800: '#4b4b4b',
    gray900: '#2c2c2c'
  },
  dark: {
    primary: '#2680eb',
    gray50: '#252525',
    gray75: '#2f2f2f',
    gray100: '#323232',
    gray200: '#3e3e3e',
    gray300: '#4a4a4a',
    gray400: '#5a5a5a',
    gray500: '#6e6e6e',
    gray600: '#909090',
    gray700: '#b9b9b9',
    gray800: '#e3e3e3',
    gray900: '#ffffff'
  }
};
const EVENT_COLORS = ['#2680eb', '#9256d9', '#44b556', '#e68619', '#e34850', '#f7bd12', '#01bad7', '#6734bc', '#89c541', '#ffc301', '#ec1562', '#ffec16'];
const POSTGRESQL = 'postgresql';
const MYSQL = 'mysql';
const MYSQL_DATE_FORMATS = {
  minute: '%Y-%m-%d %H:%i:00',
  hour: '%Y-%m-%d %H:00:00',
  day: '%Y-%m-%d',
  month: '%Y-%m-01',
  year: '%Y-01-01'
};
const POSTGRESQL_DATE_FORMATS = {
  minute: 'YYYY-MM-DD HH24:MI:00',
  hour: 'YYYY-MM-DD HH24:00:00',
  day: 'YYYY-MM-DD',
  month: 'YYYY-MM-01',
  year: 'YYYY-01-01'
};
const DOMAIN_REGEX = /^(localhost(:[1-9]\d{0,4})?|((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63})$/;
const DESKTOP_SCREEN_WIDTH = 1920;
const LAPTOP_SCREEN_WIDTH = 1024;
const MOBILE_SCREEN_WIDTH = 479;
const URL_LENGTH = 500;
const DESKTOP_OS = ['Windows 3.11', 'Windows 95', 'Windows 98', 'Windows 2000', 'Windows XP', 'Windows Server 2003', 'Windows Vista', 'Windows 7', 'Windows 8', 'Windows 8.1', 'Windows 10', 'Windows ME', 'Open BSD', 'Sun OS', 'Linux', 'Mac OS', 'QNX', 'BeOS', 'OS/2', 'Chrome OS'];
const MOBILE_OS = ['iOS', 'Android OS', 'BlackBerry OS', 'Windows Mobile', 'Amazon OS'];
const BROWSERS = {
  aol: 'AOL',
  edge: 'Edge',
  'edge-ios': 'Edge (iOS)',
  yandexbrowser: 'Yandex',
  kakaotalk: 'KaKaoTalk',
  samsung: 'Samsung',
  silk: 'Silk',
  miui: 'MIUI',
  beaker: 'Beaker',
  'edge-chromium': 'Edge (Chromium)',
  chrome: 'Chrome',
  'chromium-webview': 'Chrome (webview)',
  phantomjs: 'PhantomJS',
  crios: 'Chrome (iOS)',
  firefox: 'Firefox',
  fxios: 'Firefox (iOS)',
  'opera-mini': 'Opera Mini',
  opera: 'Opera',
  ie: 'IE',
  bb10: 'BlackBerry 10',
  android: 'Android',
  ios: 'iOS',
  safari: 'Safari',
  facebook: 'Facebook',
  instagram: 'Instagram',
  'ios-webview': 'iOS (webview)',
  searchbot: 'Searchbot'
};
const MAP_FILE = '/datamaps.world.json';
const ISO_COUNTRIES = {
  AFG: 'AF',
  ALA: 'AX',
  ALB: 'AL',
  DZA: 'DZ',
  ASM: 'AS',
  AND: 'AD',
  AGO: 'AO',
  AIA: 'AI',
  ATA: 'AQ',
  ATG: 'AG',
  ARG: 'AR',
  ARM: 'AM',
  ABW: 'AW',
  AUS: 'AU',
  AUT: 'AT',
  AZE: 'AZ',
  BHS: 'BS',
  BHR: 'BH',
  BGD: 'BD',
  BRB: 'BB',
  BLR: 'BY',
  BEL: 'BE',
  BLZ: 'BZ',
  BEN: 'BJ',
  BMU: 'BM',
  BTN: 'BT',
  BOL: 'BO',
  BIH: 'BA',
  BWA: 'BW',
  BVT: 'BV',
  BRA: 'BR',
  VGB: 'VG',
  IOT: 'IO',
  BRN: 'BN',
  BGR: 'BG',
  BFA: 'BF',
  BDI: 'BI',
  KHM: 'KH',
  CMR: 'CM',
  CAN: 'CA',
  CPV: 'CV',
  CYM: 'KY',
  CAF: 'CF',
  TCD: 'TD',
  CHL: 'CL',
  CHN: 'CN',
  HKG: 'HK',
  MAC: 'MO',
  CXR: 'CX',
  CCK: 'CC',
  COL: 'CO',
  COM: 'KM',
  COG: 'CG',
  COD: 'CD',
  COK: 'CK',
  CRI: 'CR',
  CIV: 'CI',
  HRV: 'HR',
  CUB: 'CU',
  CYP: 'CY',
  CZE: 'CZ',
  DNK: 'DK',
  DJI: 'DJ',
  DMA: 'DM',
  DOM: 'DO',
  ECU: 'EC',
  EGY: 'EG',
  SLV: 'SV',
  GNQ: 'GQ',
  ERI: 'ER',
  EST: 'EE',
  ETH: 'ET',
  FLK: 'FK',
  FRO: 'FO',
  FJI: 'FJ',
  FIN: 'FI',
  FRA: 'FR',
  GUF: 'GF',
  PYF: 'PF',
  ATF: 'TF',
  GAB: 'GA',
  GMB: 'GM',
  GEO: 'GE',
  DEU: 'DE',
  GHA: 'GH',
  GIB: 'GI',
  GRC: 'GR',
  GRL: 'GL',
  GRD: 'GD',
  GLP: 'GP',
  GUM: 'GU',
  GTM: 'GT',
  GGY: 'GG',
  GIN: 'GN',
  GNB: 'GW',
  GUY: 'GY',
  HTI: 'HT',
  HMD: 'HM',
  VAT: 'VA',
  HND: 'HN',
  HUN: 'HU',
  ISL: 'IS',
  IND: 'IN',
  IDN: 'ID',
  IRN: 'IR',
  IRQ: 'IQ',
  IRL: 'IE',
  IMN: 'IM',
  ISR: 'IL',
  ITA: 'IT',
  JAM: 'JM',
  JPN: 'JP',
  JEY: 'JE',
  JOR: 'JO',
  KAZ: 'KZ',
  KEN: 'KE',
  KIR: 'KI',
  PRK: 'KP',
  KOR: 'KR',
  KWT: 'KW',
  KGZ: 'KG',
  LAO: 'LA',
  LVA: 'LV',
  LBN: 'LB',
  LSO: 'LS',
  LBR: 'LR',
  LBY: 'LY',
  LIE: 'LI',
  LTU: 'LT',
  LUX: 'LU',
  MKD: 'MK',
  MDG: 'MG',
  MWI: 'MW',
  MYS: 'MY',
  MDV: 'MV',
  MLI: 'ML',
  MLT: 'MT',
  MHL: 'MH',
  MTQ: 'MQ',
  MRT: 'MR',
  MUS: 'MU',
  MYT: 'YT',
  MEX: 'MX',
  FSM: 'FM',
  MDA: 'MD',
  MCO: 'MC',
  MNG: 'MN',
  MNE: 'ME',
  MSR: 'MS',
  MAR: 'MA',
  MOZ: 'MZ',
  MMR: 'MM',
  NAM: 'NA',
  NRU: 'NR',
  NPL: 'NP',
  NLD: 'NL',
  ANT: 'AN',
  NCL: 'NC',
  NZL: 'NZ',
  NIC: 'NI',
  NER: 'NE',
  NGA: 'NG',
  NIU: 'NU',
  NFK: 'NF',
  MNP: 'MP',
  NOR: 'NO',
  OMN: 'OM',
  PAK: 'PK',
  PLW: 'PW',
  PSE: 'PS',
  PAN: 'PA',
  PNG: 'PG',
  PRY: 'PY',
  PER: 'PE',
  PHL: 'PH',
  PCN: 'PN',
  POL: 'PL',
  PRT: 'PT',
  PRI: 'PR',
  QAT: 'QA',
  REU: 'RE',
  ROU: 'RO',
  RUS: 'RU',
  RWA: 'RW',
  BLM: 'BL',
  SHN: 'SH',
  KNA: 'KN',
  LCA: 'LC',
  MAF: 'MF',
  SPM: 'PM',
  VCT: 'VC',
  WSM: 'WS',
  SMR: 'SM',
  STP: 'ST',
  SAU: 'SA',
  SEN: 'SN',
  SRB: 'RS',
  SYC: 'SC',
  SLE: 'SL',
  SGP: 'SG',
  SVK: 'SK',
  SVN: 'SI',
  SLB: 'SB',
  SOM: 'SO',
  ZAF: 'ZA',
  SGS: 'GS',
  SSD: 'SS',
  ESP: 'ES',
  LKA: 'LK',
  SDN: 'SD',
  SUR: 'SR',
  SJM: 'SJ',
  SWZ: 'SZ',
  SWE: 'SE',
  CHE: 'CH',
  SYR: 'SY',
  TWN: 'TW',
  TJK: 'TJ',
  TZA: 'TZ',
  THA: 'TH',
  TLS: 'TL',
  TGO: 'TG',
  TKL: 'TK',
  TON: 'TO',
  TTO: 'TT',
  TUN: 'TN',
  TUR: 'TR',
  TKM: 'TM',
  TCA: 'TC',
  TUV: 'TV',
  UGA: 'UG',
  UKR: 'UA',
  ARE: 'AE',
  GBR: 'GB',
  USA: 'US',
  UMI: 'UM',
  URY: 'UY',
  UZB: 'UZ',
  VUT: 'VU',
  VEN: 'VE',
  VNM: 'VN',
  VIR: 'VI',
  WLF: 'WF',
  ESH: 'EH',
  YEM: 'YE',
  ZMB: 'ZM',
  ZWE: 'ZW',
  XKX: 'XK'
};

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "bOZ5":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Usuarios\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Agregar usuario\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Agregar sitio\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrador\"}],\"label.all\":[{\"type\":0,\"value\":\"Todos\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Todos los eventos\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Todos los sitios\"}],\"label.back\":[{\"type\":0,\"value\":\"Atrás\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancelar\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Cambiar contraseña\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmar contraseña\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiar al portapapeles\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Contraseña actual\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalo personalizado\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Panel de control\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Fechas\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalo por defecto\"}],\"label.delete\":[{\"type\":0,\"value\":\"Eliminar\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Eliminar usuario\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Eliminar sitio\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ignorar\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dominio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editar\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editar usuario\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editar sitio\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Habilitar compartir URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Inválido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Dominio inválido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Últimos \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" días\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Últimas \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" horas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Sesión iniciada como \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Iniciar sesión\"}],\"label.logout\":[{\"type\":0,\"value\":\"Cerrar sesión\"}],\"label.more\":[{\"type\":0,\"value\":\"Más\"}],\"label.name\":[{\"type\":0,\"value\":\"Nombre\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nueva contraseña\"}],\"label.password\":[{\"type\":0,\"value\":\"Contraseña\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Las contraseñas no coinciden\"}],\"label.profile\":[{\"type\":0,\"value\":\"Perfil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Tiempo real\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Registros en tiempo real\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Actualizar\"}],\"label.required\":[{\"type\":0,\"value\":\"Requerido\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reiniciar\"}],\"label.save\":[{\"type\":0,\"value\":\"Guardar\"}],\"label.settings\":[{\"type\":0,\"value\":\"Configuraciones\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Compartir URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Dia\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Este mes\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Esta semana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Este año\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zona horaria\"}],\"label.today\":[{\"type\":0,\"value\":\"Hoy\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Código de rastreo\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Desconocida\"}],\"label.username\":[{\"type\":0,\"value\":\"Nombre de usuario\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Ver detalles\"}],\"label.websites\":[{\"type\":0,\"value\":\"Sitios\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"activo\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"activos\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"¿Estás seguro(a) de querer eliminar \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiado!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Toda la información relacionada será eliminada.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Algo falló.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obtener URL para compartir\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obtener código de rastreo\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ir a la configuración\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nombre de usuario o contraseña incorrectos.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitante desde \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" usando \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" en \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Una nueva versíon de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" esta disponible!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Sin información disponible.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"No tienes ningún sitio configurado.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Page not found\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Desarrollado con \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Guardado exitosamente.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Esta es la URL compartida públicamente para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Para registrar estadísticas para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", copia el siguiente código dentro de la etiqueta \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" de tu sitio.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Escribe \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" abajo para confirmar.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Acciones\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tiempo promedio de visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Porcentaje de rebote\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navegadores\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Países\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobile\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tableta\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivos\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventos\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinado\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Únicamente dominio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Personalizado\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemas operativos\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Vistas\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Páginas\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referentes\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitantes únicos\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Vistas\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitantes\"}]}");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hKbc":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Облікові записи\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Додати обліковий запис\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Додати сайт\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Адміністратор\"}],\"label.all\":[{\"type\":0,\"value\":\"Всі\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Всі події\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Всі сайти\"}],\"label.back\":[{\"type\":0,\"value\":\"Назад\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Відмінити\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Змінити пароль\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Підтвердити пароль\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Копіювати до буферу обміну\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Поточний пароль\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Довільний період\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Інформаційна панель\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Діапазон дат\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Діапазон дат за замовчуванням\"}],\"label.delete\":[{\"type\":0,\"value\":\"Видалити\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Видалити обліковий запис\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Видалити сайт\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Відхилити\"}],\"label.domain\":[{\"type\":0,\"value\":\"Домен\"}],\"label.edit\":[{\"type\":0,\"value\":\"Редагувати\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Редагувати обліковий запис\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Редагувати сайт\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Дозволити ділитися посиланням\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Некоректний\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Некоректний домен\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Останні \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" днів\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Останні \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" годин\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Ви увійшли як \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Увійти\"}],\"label.logout\":[{\"type\":0,\"value\":\"Вийти\"}],\"label.more\":[{\"type\":0,\"value\":\"Більше\"}],\"label.name\":[{\"type\":0,\"value\":\"Ім'я\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Новий пароль\"}],\"label.password\":[{\"type\":0,\"value\":\"Пароль\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Паролі не співпадають\"}],\"label.profile\":[{\"type\":0,\"value\":\"Профіль\"}],\"label.realtime\":[{\"type\":0,\"value\":\"У реальному часі\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Логи у реальному часі\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Оновити\"}],\"label.required\":[{\"type\":0,\"value\":\"Обов'язкове\"}],\"label.reset\":[{\"type\":0,\"value\":\"Скинути\"}],\"label.save\":[{\"type\":0,\"value\":\"Зберегти\"}],\"label.settings\":[{\"type\":0,\"value\":\"Налаштування\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Поділитися посилання\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Один день\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Цього місяця\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Цього тижня\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Цього ріку\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Часовий пояс\"}],\"label.today\":[{\"type\":0,\"value\":\"Сьогодні\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Код для відслідковування\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Невідомо\"}],\"label.username\":[{\"type\":0,\"value\":\"Ім'я користувача\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Переглянути деталі\"}],\"label.websites\":[{\"type\":0,\"value\":\"Сайти\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" поточних відвідувачів\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Ви впевнені, що бажаєте видалити \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Скопійовано!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Усі пов'язані дані будуть видалені також.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Щось пішло не так.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Отримати публічне посилання\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Отримати код для відслідковування\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Перейти до налаштувань\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Невірне ім'я користувача або пароль.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Відвідувач з \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" використовуючи \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" на \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Нова версія umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" доступна!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Немає даних.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"У вас немає налаштованих сайтів.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Сторінку не знайдено.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"На базі \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Збережено успішно.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Це публічне посилання для \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Аби відслідковувати статистику для \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", розмістіть наступний код у \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" секції вашого сайту.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Введіть \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" у полі нижче щоб підтвердити.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Дії\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Середній час візиту\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Показник відмов\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Браузери\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Країни\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Настільний ПК\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Ноутбук\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Мобільний\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Планшет\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Пристрої\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Події\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Об'єднані\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Лише домен\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Сирі дані\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Операційні системи\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Перегляди сторінок\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Сторінки\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Джерела\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Унікальні відвідувачі\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Перегляди\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Відвідувачі\"}]}");

/***/ }),

/***/ "hQbz":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"アカウント\"}],\"label.add-account\":[{\"type\":0,\"value\":\"アカウントの追加\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Webサイトの追加\"}],\"label.administrator\":[{\"type\":0,\"value\":\"管理者\"}],\"label.all\":[{\"type\":0,\"value\":\"すべて表示\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"すべてのWebサイト\"}],\"label.back\":[{\"type\":0,\"value\":\"戻る\"}],\"label.cancel\":[{\"type\":0,\"value\":\"キャンセル\"}],\"label.change-password\":[{\"type\":0,\"value\":\"パスワード変更\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"パスワード（確認）\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"クリップボードにコピー\"}],\"label.current-password\":[{\"type\":0,\"value\":\"現在のパスワード\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"期間を指定する\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"ダッシュボード\"}],\"label.date-range\":[{\"type\":0,\"value\":\"範囲指定\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"最初に表示する期間\"}],\"label.delete\":[{\"type\":0,\"value\":\"削除\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"アカウントの削除\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Webサイトの削除\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"無視する\"}],\"label.domain\":[{\"type\":0,\"value\":\"ドメイン\"}],\"label.edit\":[{\"type\":0,\"value\":\"編集\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"アカウントの編集\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Webサイトの編集\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"共有リンクを有効にする\"}],\"label.invalid\":[{\"type\":0,\"value\":\"無効\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"無効なドメイン\"}],\"label.last-days\":[{\"type\":0,\"value\":\"過去\"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\"日間\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"過去\"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\"時間\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\"でログイン中\"}],\"label.login\":[{\"type\":0,\"value\":\"ログイン\"}],\"label.logout\":[{\"type\":0,\"value\":\"ログアウト\"}],\"label.more\":[{\"type\":0,\"value\":\"さらに表示\"}],\"label.name\":[{\"type\":0,\"value\":\"名前\"}],\"label.new-password\":[{\"type\":0,\"value\":\"新しいパスワード\"}],\"label.password\":[{\"type\":0,\"value\":\"パスワード\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"パスワードが一致しません\"}],\"label.profile\":[{\"type\":0,\"value\":\"プロファイル\"}],\"label.realtime\":[{\"type\":0,\"value\":\"リアルタイム\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"リアルタイムログ\"}],\"label.refresh\":[{\"type\":0,\"value\":\"更新\"}],\"label.required\":[{\"type\":0,\"value\":\"必須\"}],\"label.reset\":[{\"type\":0,\"value\":\"リセット\"}],\"label.save\":[{\"type\":0,\"value\":\"保存\"}],\"label.settings\":[{\"type\":0,\"value\":\"設定\"}],\"label.share-url\":[{\"type\":0,\"value\":\"共有リンク\"}],\"label.single-day\":[{\"type\":0,\"value\":\"一日のみ\"}],\"label.this-month\":[{\"type\":0,\"value\":\"今月\"}],\"label.this-week\":[{\"type\":0,\"value\":\"今週\"}],\"label.this-year\":[{\"type\":0,\"value\":\"今年\"}],\"label.timezone\":[{\"type\":0,\"value\":\"タイムゾーン\"}],\"label.today\":[{\"type\":0,\"value\":\"今日\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"トラッキングコード\"}],\"label.unknown\":[{\"type\":0,\"value\":\"不明\"}],\"label.username\":[{\"type\":0,\"value\":\"ユーザー名\"}],\"label.view-details\":[{\"type\":0,\"value\":\"詳細を見る\"}],\"label.websites\":[{\"type\":0,\"value\":\"Webサイト\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\"人が閲覧中です。\"}],\"message.confirm-delete\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"を削除してもよろしいですか？\"}],\"message.copied\":[{\"type\":0,\"value\":\"コピーしました！\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"関連するすべてのデータも削除されます。\"}],\"message.failure\":[{\"type\":0,\"value\":\"問題が発生しました。\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"共有リンクを取得\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"トラッキングコードを取得\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"設定する\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"ユーザー名/パスワードが正しくありません。\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\"（\"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\"）で\"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\"を使用している\"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\"からの訪問者\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"新しいバージョン（\"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\"）が利用可能です！\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"データがありません。\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Webサイトが設定されていません。\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"ページが見つかりません。\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"このシステムは \"},{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" で実行されています。\"}],\"message.save-success\":[{\"type\":0,\"value\":\"正常に保存されました。\"}],\"message.share-url\":[{\"type\":0,\"value\":\"これは \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" の共有リンクです。\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"のアクセス解析を開始するには、次のコードをWebサイトの\"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"セクションへ追加してください。\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"確認のため、下のフォームに\"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\"と入力してください。\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"アクション\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"平均滞在時間\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"直帰率\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"ブラウザ\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"国\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"デスクトップ\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"ノートPC\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"携帯電話\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"タブレット\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"デバイス\"}],\"metrics.events\":[{\"type\":0,\"value\":\"イベント\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"パスまで\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"ドメインのみ\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"すべて表示\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"OS\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"閲覧数\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"ページ\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"リファラー\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"ユニーク訪問者数\"}],\"metrics.views\":[{\"type\":0,\"value\":\"閲覧数\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"訪問者数\"}]}");

/***/ }),

/***/ "iOjB":
/***/ (function(module, exports) {



/***/ }),

/***/ "iQzV":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"账户\"}],\"label.add-account\":[{\"type\":0,\"value\":\"添加账户\"}],\"label.add-website\":[{\"type\":0,\"value\":\"添加网站\"}],\"label.administrator\":[{\"type\":0,\"value\":\"管理员\"}],\"label.all\":[{\"type\":0,\"value\":\"所有\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"全部网站\"}],\"label.back\":[{\"type\":0,\"value\":\"返回\"}],\"label.cancel\":[{\"type\":0,\"value\":\"取消\"}],\"label.change-password\":[{\"type\":0,\"value\":\"更新密码\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"确认密码\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"复制\"}],\"label.current-password\":[{\"type\":0,\"value\":\"目前密码\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"自定义时间段\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"仪表板\"}],\"label.date-range\":[{\"type\":0,\"value\":\"时间段\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"默认时间段\"}],\"label.delete\":[{\"type\":0,\"value\":\"删除\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"删除账户\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"删除网站\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"关闭\"}],\"label.domain\":[{\"type\":0,\"value\":\"域名\"}],\"label.edit\":[{\"type\":0,\"value\":\"编辑\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"编辑账户\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"编辑网站\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"启用共享链接\"}],\"label.invalid\":[{\"type\":0,\"value\":\"输入无效\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"无效域名\"}],\"label.last-days\":[{\"type\":0,\"value\":\"最近 \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" 天\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"最近 \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" 小时\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"登录名: \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"登录\"}],\"label.logout\":[{\"type\":0,\"value\":\"退出\"}],\"label.more\":[{\"type\":0,\"value\":\"更多\"}],\"label.name\":[{\"type\":0,\"value\":\"名字\"}],\"label.new-password\":[{\"type\":0,\"value\":\"新密码\"}],\"label.password\":[{\"type\":0,\"value\":\"密码\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"密码不一致\"}],\"label.profile\":[{\"type\":0,\"value\":\"个人资料\"}],\"label.realtime\":[{\"type\":0,\"value\":\"实时\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"实时日志\"}],\"label.refresh\":[{\"type\":0,\"value\":\"刷新\"}],\"label.required\":[{\"type\":0,\"value\":\"必填\"}],\"label.reset\":[{\"type\":0,\"value\":\"重置\"}],\"label.save\":[{\"type\":0,\"value\":\"保存\"}],\"label.settings\":[{\"type\":0,\"value\":\"设置\"}],\"label.share-url\":[{\"type\":0,\"value\":\"共享链接\"}],\"label.single-day\":[{\"type\":0,\"value\":\"单日\"}],\"label.this-month\":[{\"type\":0,\"value\":\"本月\"}],\"label.this-week\":[{\"type\":0,\"value\":\"本周\"}],\"label.this-year\":[{\"type\":0,\"value\":\"今年\"}],\"label.timezone\":[{\"type\":0,\"value\":\"时区\"}],\"label.today\":[{\"type\":0,\"value\":\"今天\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"跟踪代码\"}],\"label.unknown\":[{\"type\":0,\"value\":\"未知\"}],\"label.username\":[{\"type\":0,\"value\":\"用户名\"}],\"label.view-details\":[{\"type\":0,\"value\":\"查看更多\"}],\"label.websites\":[{\"type\":0,\"value\":\"网站\"}],\"message.active-users\":[{\"type\":0,\"value\":\"当前在线 \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" 人\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"你确定要删除 \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" 吗？\"}],\"message.copied\":[{\"type\":0,\"value\":\"复制成功！\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"所有相关数据将会被删除。\"}],\"message.failure\":[{\"type\":0,\"value\":\"出现错误。\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"获取共享链接\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"获取跟踪代码\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"去设置\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"用户名或密码不正确。\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"来自 \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" 的访客在搭载 \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" 的 \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" 上使用 \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" 浏览器进行访问。\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami 有新版本 \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" 发布啦！\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"无可用数据。\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"你还没有设置任何网站。\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"网页未找到。\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"由 \"},{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" 提供支持\"}],\"message.save-success\":[{\"type\":0,\"value\":\"保存成功。\"}],\"message.share-url\":[{\"type\":0,\"value\":\"这是 \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" 的共享链接。\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"把以下代码放到你的网站的 \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" 部分来收集 \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" 的数据。\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"在下方输入框输入 \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" 以确认删除。\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"用户行为\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"平均访问时间\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"跳出率\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"浏览器\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"国家\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"桌面电脑\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"笔记本\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"手机\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"平板\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"设备\"}],\"metrics.events\":[{\"type\":0,\"value\":\"行为类别\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"总和\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"只看域名\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"原始\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"操作系统\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"页面浏览量\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"网页\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"来源域名\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"独立访客\"}],\"metrics.views\":[{\"type\":0,\"value\":\"浏览量\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"访客\"}]}");

/***/ }),

/***/ "j6IE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateUser; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const user = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'user',
  initialState: null,
  reducers: {
    updateUser(state, action) {
      state = action.payload;
      return state;
    }

  }
});
const {
  updateUser
} = user.actions;
/* harmony default export */ __webpack_exports__["a"] = (user.reducer);

/***/ }),

/***/ "jG9A":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Accounts\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Add account\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Add website\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"All\"}],\"label.all-events\":[{\"type\":0,\"value\":\"All events\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"All websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Back\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancel\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Change password\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirm password\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copy to clipboard\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Current password\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Custom range\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Date range\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Default date range\"}],\"label.delete\":[{\"type\":0,\"value\":\"Delete\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Delete account\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Delete website\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Dismiss\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domain\"}],\"label.edit\":[{\"type\":0,\"value\":\"Edit\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Edit account\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Edit website\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Enable share URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Invalid\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Invalid domain\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Last \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" days\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Last \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hours\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Logged in as \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Login\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logout\"}],\"label.more\":[{\"type\":0,\"value\":\"More\"}],\"label.name\":[{\"type\":0,\"value\":\"Name\"}],\"label.new-password\":[{\"type\":0,\"value\":\"New password\"}],\"label.password\":[{\"type\":0,\"value\":\"Password\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Passwords don't match\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profile\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtime logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Refresh\"}],\"label.required\":[{\"type\":0,\"value\":\"Required\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Save\"}],\"label.settings\":[{\"type\":0,\"value\":\"Settings\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Share URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Single day\"}],\"label.this-month\":[{\"type\":0,\"value\":\"This month\"}],\"label.this-week\":[{\"type\":0,\"value\":\"This week\"}],\"label.this-year\":[{\"type\":0,\"value\":\"This year\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Timezone\"}],\"label.today\":[{\"type\":0,\"value\":\"Today\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Tracking code\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Unknown\"}],\"label.username\":[{\"type\":0,\"value\":\"Username\"}],\"label.view-details\":[{\"type\":0,\"value\":\"View details\"}],\"label.websites\":[{\"type\":0,\"value\":\"Websites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" current \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitor\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitors\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Are your sure you want to delete \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copied!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"All associated data will be deleted as well.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Something went wrong.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Get share URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Get tracking code\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Go to settings\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Incorrect username/password.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitor from \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" using \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" on \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"A new version of umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" is available!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"No data available.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"You don't have any websites configured.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Page not found.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Saved successfully.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"This is the publicly shared URL for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"To track stats for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", place the following code in the \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" section of your website.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Type \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" in the box below to confirm.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Actions\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Average visit time\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bounce rate\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsers\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Countries\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobile\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Devices\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Events\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combined\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domain only\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Raw\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operating systems\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Page views\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pages\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referrers\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unique visitors\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Views\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitors\"}]}");

/***/ }),

/***/ "jeBt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export apiRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return post; });
/* unused harmony export put */
/* unused harmony export hook */
/* unused harmony export doNotTrack */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getItem; });
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7T8v");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const apiRequest = (method, url, body, headers) => fetch(url, {
  method,
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: _objectSpread({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }, headers),
  body
}).then(res => {
  if (res.ok) {
    return res.json().then(data => ({
      ok: res.ok,
      status: res.status,
      data
    }));
  }

  return res.text().then(data => ({
    ok: res.ok,
    status: res.status,
    res: res,
    data
  }));
});
const get = (url, params, headers) => apiRequest('get', Object(_url__WEBPACK_IMPORTED_MODULE_0__[/* makeUrl */ "c"])(url, params), undefined, headers);
const del = (url, params, headers) => apiRequest('delete', Object(_url__WEBPACK_IMPORTED_MODULE_0__[/* makeUrl */ "c"])(url, params), undefined, headers);
const post = (url, params, headers) => apiRequest('post', url, JSON.stringify(params), headers);
const put = (url, params, headers) => apiRequest('put', url, JSON.stringify(params), headers);
const hook = (_this, method, callback) => {
  const orig = _this[method];
  return (...args) => {
    callback.apply(null, args);
    return orig.apply(_this, args);
  };
};
const doNotTrack = () => {
  const {
    doNotTrack,
    navigator,
    external
  } = window;

  const msTracking = () => {
    return external && typeof external.msTrackingProtectionEnabled === 'function' && external.msTrackingProtectionEnabled();
  };

  const dnt = doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || msTracking();
  return dnt === true || dnt === 1 || dnt === 'yes' || dnt === '1';
};
const setItem = (key, data, session) => {
  if (false) {}
};
const getItem = (key, session) => false ? undefined : null;

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "lnWM":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Kontoer\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Tilføj konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Tilføj hjemmeside\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alle\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Tilbage\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Afvis\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Skift adgangskode\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Godkendt adgangskode\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopier til udklipsholder\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Nuværende adgangskode\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Tilpasset interval\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Betjeningspanel\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datointerval\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standard datointerval\"}],\"label.delete\":[{\"type\":0,\"value\":\"Slet\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Slet konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Slet hjemmeside\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Afvis\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domæne\"}],\"label.edit\":[{\"type\":0,\"value\":\"Rediger\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Rediger konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Rediger hjemmeside\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktivér delings-URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ugyldig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ugyldigt domæne\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Sidste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dage\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Sidste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" timer\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Loggede ind som \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Log ind\"}],\"label.logout\":[{\"type\":0,\"value\":\"Log ud\"}],\"label.more\":[{\"type\":0,\"value\":\"Mere\"}],\"label.name\":[{\"type\":0,\"value\":\"Navn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Ny adgangskode\"}],\"label.password\":[{\"type\":0,\"value\":\"Adgangskode\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Adgangskoder matcher ikke\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtid\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtid logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Opdater\"}],\"label.required\":[{\"type\":0,\"value\":\"Påkrævet\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Gem\"}],\"label.settings\":[{\"type\":0,\"value\":\"Indstillinger\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Del URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Enkelt dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Denne måned\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Denne uge\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Dette år\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tidszone\"}],\"label.today\":[{\"type\":0,\"value\":\"Idag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sporingskode\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Ukendt\"}],\"label.username\":[{\"type\":0,\"value\":\"Brugernavn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vis detajler\"}],\"label.websites\":[{\"type\":0,\"value\":\"Hjemmesider\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" nuværende \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"bruger\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"brugere\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Er du sikker på at du vil slette \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopieret!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle tilknyttede data slettes også.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Noget gik galt.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Få delings-URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Få sporingskode\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Gå til betjeningspanel\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Ugyldigt brugernavn/adgangskode.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Besøgende fra \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" bruger \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" på \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Ny udgave af Umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" er tilgængelig!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Ingen data tilgængelig.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Du har ikke konfigureret nogen websteder.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Side ikke fundet.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Drevet af \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Gemt!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Dette er den offentligt delings-URL til \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"For at spore statistik for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" skal du placere følgende kode i \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" sektionen på dit websted.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriv \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" i boksen nedenfor, for at bekræfte.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Handlinger\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Gennemsnitlig besøgstid\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Afvisningsprocent\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsere\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Lande\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Enheder\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Hændelser\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombineret\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Kun domæne\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Rå\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operativsystemer\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sidevisninger\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sider\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Henvisninger\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unikke besøgende\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visninger\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Besøgende\"}]}");

/***/ }),

/***/ "nn0s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateWebsites */
/* unused harmony export updateWebsite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setDateRange; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const websites = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'websites',
  initialState: {},
  reducers: {
    updateWebsites(state, action) {
      state = action.payload;
      return state;
    },

    updateWebsite(state, action) {
      const _action$payload = action.payload,
            {
        websiteId
      } = _action$payload,
            data = _objectWithoutProperties(_action$payload, ["websiteId"]);

      state[websiteId] = data;
      return state;
    }

  }
});
const {
  updateWebsites,
  updateWebsite
} = websites.actions;
/* harmony default export */ __webpack_exports__["a"] = (websites.reducer);
function setDateRange(websiteId, dateRange) {
  return dispatch => {
    return dispatch(updateWebsite({
      websiteId,
      dateRange: _objectSpread(_objectSpread({}, dateRange), {}, {
        modified: Date.now()
      })
    }));
  };
}

/***/ }),

/***/ "nsFc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLocale; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DzNn");
/* harmony import */ var lib_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jeBt");
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YSmr");




function useLocale() {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.app.locale);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();

  function saveLocale(value) {
    Object(lib_web__WEBPACK_IMPORTED_MODULE_2__[/* setItem */ "e"])(lib_constants__WEBPACK_IMPORTED_MODULE_3__[/* LOCALE_CONFIG */ "o"], value);
    dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[/* setLocale */ "c"])(value));
  }

  return [locale, saveLocale];
}

/***/ }),

/***/ "rDi4":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"帳戶\"}],\"label.add-account\":[{\"type\":0,\"value\":\"增加帳戶\"}],\"label.add-website\":[{\"type\":0,\"value\":\"增加網站\"}],\"label.administrator\":[{\"type\":0,\"value\":\"管理員\"}],\"label.all\":[{\"type\":0,\"value\":\"所有\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"全部網站\"}],\"label.back\":[{\"type\":0,\"value\":\"返回\"}],\"label.cancel\":[{\"type\":0,\"value\":\"取消\"}],\"label.change-password\":[{\"type\":0,\"value\":\"更新密碼\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"確認密碼\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"複製\"}],\"label.current-password\":[{\"type\":0,\"value\":\"目前密碼\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"自定義時段\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"管理面板\"}],\"label.date-range\":[{\"type\":0,\"value\":\"多日\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"默認日期範圍\"}],\"label.delete\":[{\"type\":0,\"value\":\"刪除\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"刪除帳戶\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"删除網站\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"關閉\"}],\"label.domain\":[{\"type\":0,\"value\":\"域名\"}],\"label.edit\":[{\"type\":0,\"value\":\"編輯\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"編輯帳戶\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"編輯網站\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"啟用分享連結\"}],\"label.invalid\":[{\"type\":0,\"value\":\"無效輸入\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"無效域名\"}],\"label.last-days\":[{\"type\":0,\"value\":\"最近 \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" 天\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"最近 \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" 小時\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"用戶名: \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"登入\"}],\"label.logout\":[{\"type\":0,\"value\":\"退出\"}],\"label.more\":[{\"type\":0,\"value\":\"更多\"}],\"label.name\":[{\"type\":0,\"value\":\"名字\"}],\"label.new-password\":[{\"type\":0,\"value\":\"新密碼\"}],\"label.password\":[{\"type\":0,\"value\":\"密碼\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"密碼不一致\"}],\"label.profile\":[{\"type\":0,\"value\":\"個人資料\"}],\"label.realtime\":[{\"type\":0,\"value\":\"實時\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"實時日志\"}],\"label.refresh\":[{\"type\":0,\"value\":\"刷新\"}],\"label.required\":[{\"type\":0,\"value\":\"必填\"}],\"label.reset\":[{\"type\":0,\"value\":\"重置\"}],\"label.save\":[{\"type\":0,\"value\":\"保存\"}],\"label.settings\":[{\"type\":0,\"value\":\"設置\"}],\"label.share-url\":[{\"type\":0,\"value\":\"分享連結\"}],\"label.single-day\":[{\"type\":0,\"value\":\"單日\"}],\"label.this-month\":[{\"type\":0,\"value\":\"本月\"}],\"label.this-week\":[{\"type\":0,\"value\":\"本週\"}],\"label.this-year\":[{\"type\":0,\"value\":\"今年\"}],\"label.timezone\":[{\"type\":0,\"value\":\"時區\"}],\"label.today\":[{\"type\":0,\"value\":\"今天\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"追蹤代碼\"}],\"label.unknown\":[{\"type\":0,\"value\":\"未知\"}],\"label.username\":[{\"type\":0,\"value\":\"用户名\"}],\"label.view-details\":[{\"type\":0,\"value\":\"查看更多\"}],\"label.websites\":[{\"type\":0,\"value\":\"網站\"}],\"message.active-users\":[{\"type\":0,\"value\":\"当前線上 \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" 人\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"你確定要删除\"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"嗎?\"}],\"message.copied\":[{\"type\":0,\"value\":\"複製成功!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"所有相關數據將會被删除.\"}],\"message.failure\":[{\"type\":0,\"value\":\"出現錯誤.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"獲得分享連結\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"獲得追蹤代碼\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"去設定\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"用户名或密碼不正確.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"自 \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" 的訪客在搭載 \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" 的 \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" 上使用 \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" 進行訪問.\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami 有新版本 \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" 發佈啦！\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"無可用數據.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"目前無任何網站設定.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"網頁未找到.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"運行 \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"成功保存.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"這是 \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" 的分享連結.\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"將以下代碼放入被設定網站的\"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"部分来收集\"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"的資料.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"在下方空格輸入\"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\"確認\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"用戶行為\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"平均訪問時間\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"跳出率\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"瀏覽器\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"國家\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"桌機\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"筆記本\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"手機\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"平板\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"裝置\"}],\"metrics.events\":[{\"type\":0,\"value\":\"行為類別\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"總和\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"僅域名\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"原始\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"操作系统\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"網頁流量\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"網頁\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"指入域名\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"獨立訪客\"}],\"metrics.views\":[{\"type\":0,\"value\":\"页面流量\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"獨立訪客\"}]}");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "s1yH":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"கணக்குகள்\"}],\"label.add-account\":[{\"type\":0,\"value\":\"கணக்கு சேர்க்க\"}],\"label.add-website\":[{\"type\":0,\"value\":\"வலைத்தளத்தைச் சேர்க்க\"}],\"label.administrator\":[{\"type\":0,\"value\":\"நிர்வாகியைச் சேர்க்க\"}],\"label.all\":[{\"type\":0,\"value\":\"எல்லாம்\"}],\"label.all-events\":[{\"type\":0,\"value\":\"அனைத்து நிகழ்வுகளும்\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"அனைத்து வலைத்தளங்களும்\"}],\"label.back\":[{\"type\":0,\"value\":\"பின்னால்\"}],\"label.cancel\":[{\"type\":0,\"value\":\"ரத்துசெய்\"}],\"label.change-password\":[{\"type\":0,\"value\":\"கடவுச்சொல்லை மாற்று\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"கடவுச்சொல்லை உறுதிப்படுத்தவும்\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"கிளிப்போர்டுக்கு நகலெடுக்கவும்\"}],\"label.current-password\":[{\"type\":0,\"value\":\"தற்போதைய கடவுச்சொல்\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"தனிப்பயன் வேறுபாட்டெல்லை\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"முகப்பு\"}],\"label.date-range\":[{\"type\":0,\"value\":\"தேதி வரம்பு\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"இயல்புநிலை தேதி வரம்பு\"}],\"label.delete\":[{\"type\":0,\"value\":\"அழி\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"கணக்கை நீக்குக\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"வலைத்தளத்தை நீக்கு\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"நீக்கு\"}],\"label.domain\":[{\"type\":0,\"value\":\"கள முகவரி\"}],\"label.edit\":[{\"type\":0,\"value\":\"திருத்துதல்\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"கணக்கைத் திருத்து\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"வலைத்தளத்தைத் திருத்து\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"கள முகவரியை பகிரலாம்\"}],\"label.invalid\":[{\"type\":0,\"value\":\"தவறானது\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"தவறான கள முகவரி\"}],\"label.last-days\":[{\"type\":0,\"value\":\"முந்தைய \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" நாட்கள்\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"முந்தைய \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" மணி\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\" உள்நுழைந்துள்ளீர்\"}],\"label.login\":[{\"type\":0,\"value\":\"உள்நுழைய\"}],\"label.logout\":[{\"type\":0,\"value\":\"வெளியேறு\"}],\"label.more\":[{\"type\":0,\"value\":\"மேலும்\"}],\"label.name\":[{\"type\":0,\"value\":\"பெயர்\"}],\"label.new-password\":[{\"type\":0,\"value\":\"புதிய கடவுச்சொல்\"}],\"label.password\":[{\"type\":0,\"value\":\"கடவுச்சொல்\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"இருக்கடவுச்சொல் பொருந்தவில்லை\"}],\"label.profile\":[{\"type\":0,\"value\":\"சுயவிவரம்\"}],\"label.realtime\":[{\"type\":0,\"value\":\"தற்போதைய\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"தற்போதைய பதிவுகள்\"}],\"label.refresh\":[{\"type\":0,\"value\":\"புதுப்பிப்பு\"}],\"label.required\":[{\"type\":0,\"value\":\"தேவையானவை\"}],\"label.reset\":[{\"type\":0,\"value\":\"மீட்டமை\"}],\"label.save\":[{\"type\":0,\"value\":\"சேமி\"}],\"label.settings\":[{\"type\":0,\"value\":\"அமைப்புகள்\"}],\"label.share-url\":[{\"type\":0,\"value\":\"வலைத்தள களத்தைப் பகிரவும்\"}],\"label.single-day\":[{\"type\":0,\"value\":\"ஒரு நாள்\"}],\"label.this-month\":[{\"type\":0,\"value\":\"இந்த மாதம்\"}],\"label.this-week\":[{\"type\":0,\"value\":\"இந்த வாரம்\"}],\"label.this-year\":[{\"type\":0,\"value\":\"இந்த வருடம்\"}],\"label.timezone\":[{\"type\":0,\"value\":\"நேர மண்டலம்\"}],\"label.today\":[{\"type\":0,\"value\":\"இன்று\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"கண்காணிப்பு குறியீடு\"}],\"label.unknown\":[{\"type\":0,\"value\":\"தெரியாத\"}],\"label.username\":[{\"type\":0,\"value\":\"பயனர்பெயர்\"}],\"label.view-details\":[{\"type\":0,\"value\":\"விபரங்களை பார்\"}],\"label.websites\":[{\"type\":0,\"value\":\"வலைத்தளங்கள்\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" தற்போதைய \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"ஒன்று\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"மற்ற\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"நீங்கள் நிச்சயமாக \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" நீக்க விரும்புகிறீர்களா?\"}],\"message.copied\":[{\"type\":0,\"value\":\"நகலெடுக்கப்பட்டது!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"தொடர்புடைய எல்லா தரவும் நீக்கப்படும்.\"}],\"message.failure\":[{\"type\":0,\"value\":\"ஏதோ தவறு நடந்துவிட்டது.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"கள முகவரியை ஐப் பெறுக\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"கண்காணிப்பு குறியீட்டைப் பெறுக\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"அமைப்புகளுக்குச் செல்லவும்\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"தவறான பயனர்பெயர் / கடவுச்சொல்.\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\"வில் இருந்து பார்வையாளர் \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ஐ \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\"லில் பயன்படுத்துகிறார்\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" இன் புதிய பதிப்பு கிடைக்கும்!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"தரவு எதுவும் கிடைக்கவில்லை.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"உங்களிடம் எந்த வலைத்தளங்களும் கட்டமைக்கப்படவில்லை.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"பக்கம் கிடைக்கவில்லை.\"}],\"message.powered-by\":[{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" ஆல் இயக்கப்படுகிறது\"}],\"message.save-success\":[{\"type\":0,\"value\":\"வெற்றிகரமாக சேமிக்கப்பட்டது.\"}],\"message.share-url\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" இது பொதுவில் பகிரும் வலைத்தள முகவரி.\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"க்கான புள்ளிவிவரங்களைக் கண்காணிக்க, \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"ல் பின்வரும் குறியீட்டை வைக்கவும்.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"உறுதிப்படுத்த கீழே உள்ள பெட்டியில் \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" என தட்டச்சு செய்க.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"செயல்கள்\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"சராசரி வருகை நேரம்\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"துள்ளல் விகிதம்\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"உலாவிகள்\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"நாடுகள்\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"மேசை கணினி\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"மடிக்கணினி\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"கைபேசி\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"கையடக்க கணினி\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"சாதனங்கள்\"}],\"metrics.events\":[{\"type\":0,\"value\":\"நிகழ்வுகள்\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"ஒருங்கிணைந்த\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"கள முகவரி மட்டும்\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"மூல\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"இயக்க முறைமைகள்\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"பக்க காட்சிகள்\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"பக்கங்கள்\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"குறிப்பிடுவோர்\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"தனிப்பட்ட பார்வையாளர்கள்\"}],\"metrics.views\":[{\"type\":0,\"value\":\"பார்வைகள்\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"பார்வையாளர்கள்\"}]}");

/***/ }),

/***/ "tDG4":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "tSfz":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Akun\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Tambah akun\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Tambah situs web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Pengelola\"}],\"label.all\":[{\"type\":0,\"value\":\"Semua\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Semua website\"}],\"label.back\":[{\"type\":0,\"value\":\"Kembali\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Batal\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Ganti kata sandi\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Konfirmasi kata sandi\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Salin ke papan klip\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Kata sandi sekarang\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Rentang khusus\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dasbor\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Rentang tanggal\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Rentang tanggal bawaan\"}],\"label.delete\":[{\"type\":0,\"value\":\"Hapus\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Hapus akun\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Hapus situs web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Tutup\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domain\"}],\"label.edit\":[{\"type\":0,\"value\":\"Sunting\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Sunting akun\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Sunting situs web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktifkan URL berbagi\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Tidak valid\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Domain tidak valid\"}],\"label.last-days\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hari terakhir\"}],\"label.last-hours\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" jam terakhir\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Masuk sebagai \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Masuk\"}],\"label.logout\":[{\"type\":0,\"value\":\"Keluar\"}],\"label.more\":[{\"type\":0,\"value\":\"Lebih banyak\"}],\"label.name\":[{\"type\":0,\"value\":\"Nama\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Kata sandi baru\"}],\"label.password\":[{\"type\":0,\"value\":\"Kata sandi\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Kata sandi tidak cocok\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Waktu nyata\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Log waktu nyata\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Segarkan\"}],\"label.required\":[{\"type\":0,\"value\":\"Wajib\"}],\"label.reset\":[{\"type\":0,\"value\":\"Atur ulang\"}],\"label.save\":[{\"type\":0,\"value\":\"Simpan\"}],\"label.settings\":[{\"type\":0,\"value\":\"Pengaturan\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Bagikan URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Sehari\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Bulan ini\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Minggu ini\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tahun ini\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zona waktu\"}],\"label.today\":[{\"type\":0,\"value\":\"Hari ini\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Kode lacak\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Tidak diketahui\"}],\"label.username\":[{\"type\":0,\"value\":\"Nama pengguna\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Lihat Detil\"}],\"label.websites\":[{\"type\":0,\"value\":\"Situs web\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" pengunjung saat ini\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Apakah kamu yakin ingin menghapus \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Tersalin!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Semua data terkait juga akan dihapus.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ada yang salah.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Dapatkan URL berbagi\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Dapatkan kode pelacakan\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Pergi ke pengaturan\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nama pengguna/kata sandi salah.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Pengunjung dari \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" dengan \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" di \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"os\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Versi terbaru umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" telah tersedia!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Tidak ada data.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Anda tidak memiliki situs web yang dikonfigurasi.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Halaman tidak ditemukan.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Didukung oleh \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Berhasil disimpan.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Ini adalah URL yang dibagikan secara publik untuk \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Untuk melacak statistik \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", tempatkan kode berikut di bagian \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" situs web anda.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Ketikkan \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" pada kotak di bawah untuk konfirmasi.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Aksi\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Waktu kunjungan rata-rata\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Rasio pentalan\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Peramban\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Negara\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Ponsel\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Perangkat\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Perihal\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Gabungan\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Hanya domain\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Mentah\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistem Operasi\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Tampilan halaman\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Halaman\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Perujuk\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Pengunjung unik\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Tampilan\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Pengunjung\"}]}");

/***/ }),

/***/ "wPVa":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"חשבונות\"}],\"label.add-account\":[{\"type\":0,\"value\":\"הוספה\"}],\"label.add-website\":[{\"type\":0,\"value\":\"הוספת אתר\"}],\"label.administrator\":[{\"type\":0,\"value\":\"מנהל\"}],\"label.all\":[{\"type\":0,\"value\":\"הכל\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"כל האתרים\"}],\"label.back\":[{\"type\":0,\"value\":\"חזרה\"}],\"label.cancel\":[{\"type\":0,\"value\":\"ביטול\"}],\"label.change-password\":[{\"type\":0,\"value\":\"שינוי סיסמה\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"אישור סיסמה\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"העתקה\"}],\"label.current-password\":[{\"type\":0,\"value\":\"סיסמה נוכחית\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"טווח מותאם\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"דשבורד\"}],\"label.date-range\":[{\"type\":0,\"value\":\"טווח תאריכים\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"טווח תאריכים בברירת מחדל\"}],\"label.delete\":[{\"type\":0,\"value\":\"הסרה\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"הסרת חשבון\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"הסרת אתר\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"שיחרור\"}],\"label.domain\":[{\"type\":0,\"value\":\"דומיין\"}],\"label.edit\":[{\"type\":0,\"value\":\"עריכה\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"עריכת חשבון\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"עריכת אתר\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"הפעלת URL שיתוף\"}],\"label.invalid\":[{\"type\":0,\"value\":\"לא תקין\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"דומיין לא תקין\"}],\"label.last-days\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ימים אחרונים\"}],\"label.last-hours\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" שעות אחרונות\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"מחובר כ-\"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"התחברות\"}],\"label.logout\":[{\"type\":0,\"value\":\"התנתקות\"}],\"label.more\":[{\"type\":0,\"value\":\"עוד\"}],\"label.name\":[{\"type\":0,\"value\":\"שם\"}],\"label.new-password\":[{\"type\":0,\"value\":\"סיסמה חדשה\"}],\"label.password\":[{\"type\":0,\"value\":\"סיסמה\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"סיסמאות לא תואמות\"}],\"label.profile\":[{\"type\":0,\"value\":\"פרופיל\"}],\"label.realtime\":[{\"type\":0,\"value\":\"זמן אמת\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"לוגים - זמן אמת\"}],\"label.refresh\":[{\"type\":0,\"value\":\"רענון\"}],\"label.required\":[{\"type\":0,\"value\":\"נדרש\"}],\"label.reset\":[{\"type\":0,\"value\":\"איפוס\"}],\"label.save\":[{\"type\":0,\"value\":\"שמירה\"}],\"label.settings\":[{\"type\":0,\"value\":\"הגדרות\"}],\"label.share-url\":[{\"type\":0,\"value\":\"שיתוף URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"יום בודד\"}],\"label.this-month\":[{\"type\":0,\"value\":\"החודש\"}],\"label.this-week\":[{\"type\":0,\"value\":\"השבוע\"}],\"label.this-year\":[{\"type\":0,\"value\":\"השנה\"}],\"label.timezone\":[{\"type\":0,\"value\":\"אזור זמן\"}],\"label.today\":[{\"type\":0,\"value\":\"היום\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"קוד מעקב\"}],\"label.unknown\":[{\"type\":0,\"value\":\"לא ידוע\"}],\"label.username\":[{\"type\":0,\"value\":\"שם משתמש\"}],\"label.view-details\":[{\"type\":0,\"value\":\"פרטים נוספים\"}],\"label.websites\":[{\"type\":0,\"value\":\"אתרים\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" נוכחיים \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"מבקר\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"מבקרים\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"האם באמת למחוק את \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"הועתק!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"כל המידע המקושר יימחק\"}],\"message.failure\":[{\"type\":0,\"value\":\"משהו השתבש\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"קבלת URL שיתוף\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"קבלת קוד מעקב\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"להדרותג\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"שם משתמש או סיסמה לא נכונים\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"מבקר ממדינת \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" משתמבש בדפדפן \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ב-\"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"גרסה חדשה של Umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" זמינה!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"אין מידע זמין\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"לא מוגדרים אתרים\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"דף לא נמצא\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"נשמר בהצלחה\"}],\"message.share-url\":[{\"type\":0,\"value\":\"זהו URL ציבורי עבור \"},{\"type\":1,\"value\":\"target\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"יש להוסיף את הקוד הבא לאזור ה-\"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" של האתר\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"הקלידו \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" בתיבה על מנת לאשר\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"פעולות\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"זמן ביקור ממוצע\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bounce rate\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"דפדפנים\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"מדינות\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"דסקטופ\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"לפטופ\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"מובייל\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"טאבלט\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"מכשירים\"}],\"metrics.events\":[{\"type\":0,\"value\":\"אירועים\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"משותף\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"דומיין בלבד\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"גולמי\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"מערכות הפעלה\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"צפיות בדפים\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"דפים\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"מפנים\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"מבקרים ייחודיים\"}],\"metrics.views\":[{\"type\":0,\"value\":\"צפיות\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"מבקרים\"}]}");

/***/ }),

/***/ "wXnG":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Contas\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Adicionar conta\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Adicionar site\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrador\"}],\"label.all\":[{\"type\":0,\"value\":\"Todos\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Todos os sites\"}],\"label.back\":[{\"type\":0,\"value\":\"Voltar\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancelar\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Alterar a senha\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirme a nova senha\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiar para a área de transferência\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Senha atual\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalo personalizado\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Painel\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Intervalo de datas\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalo de datas predefinido\"}],\"label.delete\":[{\"type\":0,\"value\":\"Remover\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Remover conta\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Remover site\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Dispensar\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domínio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editar\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editar conta\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editar site\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Ativar link de compartilhamento\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Inválido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Domínio inválido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Últimos \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dias\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Últimas \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" horas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Sessão iniciada como \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Iniciar sessão\"}],\"label.logout\":[{\"type\":0,\"value\":\"Sair\"}],\"label.more\":[{\"type\":0,\"value\":\"Mais\"}],\"label.name\":[{\"type\":0,\"value\":\"Nome\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nova senha\"}],\"label.password\":[{\"type\":0,\"value\":\"Senha\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"As senhas não correspondem\"}],\"label.profile\":[{\"type\":0,\"value\":\"Perfil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Tempo real\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Relatório em tempo real\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Atualizar\"}],\"label.required\":[{\"type\":0,\"value\":\"Obrigatório\"}],\"label.reset\":[{\"type\":0,\"value\":\"Redefinir\"}],\"label.save\":[{\"type\":0,\"value\":\"Salvar\"}],\"label.settings\":[{\"type\":0,\"value\":\"Configurações\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Link de compartilhamento\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Dia específico\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Este mês\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Esta semana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Este ano\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuso horário\"}],\"label.today\":[{\"type\":0,\"value\":\"Hoje\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Código de rastreamento\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Desconhecido\"}],\"label.username\":[{\"type\":0,\"value\":\"Nome de usuário\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Ver detalhes\"}],\"label.websites\":[{\"type\":0,\"value\":\"Sites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitante\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitantes\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" neste momento\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Deseja realmente remover \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiado!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Todos os dados associados também serão eliminados.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ocorreu um erro.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obter link de compartilhamento\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obter código de rastreamento\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ir para as configurações\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"O nome de usuário e/ou senha está incorreto.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitante de \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" usando \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" no \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"os\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Uma nova versão de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" está disponível!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Sem dados disponíveis.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nenhum site foi configurado ainda.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Página não encontrada.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Distribuído por \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Salvo com sucesso.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Este é o link público de compartilhamento para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Para gerar estatística para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", coloque o seguinte código no \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" do html do seu site.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Escreva \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" abaixo para continuar.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Ações\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tempo médio da visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Taxa de rejeição\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navegadores\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Países\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Computador\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Notebook\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Celular\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivos\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventos\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinado\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Apenas domínio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Dados brutos\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemas operacionais\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Visualizações de página\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Páginas\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referências\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitantes únicos\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visualizações\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitantes\"}]}");

/***/ }),

/***/ "xdMv":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Аккаунты\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Добавить аккаунт\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Добавить сайт\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Администратор\"}],\"label.all\":[{\"type\":0,\"value\":\"Все\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Все события\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Все сайты\"}],\"label.back\":[{\"type\":0,\"value\":\"Назад\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Отменить\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Изменить пароль\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Подтвердить пароль\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Скопировать в буфер обмена\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Текущий пароль\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Другой период\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Информационная панель\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Диапазон дат\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Диапазон дат по-умолчанию\"}],\"label.delete\":[{\"type\":0,\"value\":\"Удалить\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Удалить аккаунт\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Удалить сайт\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Отклонить\"}],\"label.domain\":[{\"type\":0,\"value\":\"Домен\"}],\"label.edit\":[{\"type\":0,\"value\":\"Редактировать\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Редактировать аккаунт\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Редактировать сайт\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Разрешить делиться ссылкой\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Некорректный\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Некорректный домен\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Последние \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" дней\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Последние \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" часа\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Вы вошли как \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Войти\"}],\"label.logout\":[{\"type\":0,\"value\":\"Выйти\"}],\"label.more\":[{\"type\":0,\"value\":\"Больше\"}],\"label.name\":[{\"type\":0,\"value\":\"Имя\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Новый пароль\"}],\"label.password\":[{\"type\":0,\"value\":\"Пароль\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Пароли не совпадают\"}],\"label.profile\":[{\"type\":0,\"value\":\"Профиль\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Реальное время\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Логи в реальном времени\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Обновить\"}],\"label.required\":[{\"type\":0,\"value\":\"Обязательное\"}],\"label.reset\":[{\"type\":0,\"value\":\"Сбросить\"}],\"label.save\":[{\"type\":0,\"value\":\"Сохранить\"}],\"label.settings\":[{\"type\":0,\"value\":\"Настройки\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Поделиться ссылкой\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Один день\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Этот месяц\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Эта неделя\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Этот год\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Часовой пояс\"}],\"label.today\":[{\"type\":0,\"value\":\"Сегодня\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Код отслеживания\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Неизвестно\"}],\"label.username\":[{\"type\":0,\"value\":\"Имя пользователя\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Посмотреть детали\"}],\"label.websites\":[{\"type\":0,\"value\":\"Сайты\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" текущих посетителей\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Вы уверены, что хотите удалить \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Скопировано!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Все связанные данные будут также удалены.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Что-то пошло не так.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Получить публичную ссылку\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Получить код отслеживания\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Перейти к настройкам\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Неверное имя пользователя/пароль.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Посетитель из \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" используя \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" на \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Доступна новая версия umami \"},{\"type\":1,\"value\":\"version\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Нет данных.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"У вас нет настроенных сайтов.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Страница не найдена.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"На движке \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Успешно сохранено.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Это публичная ссылка для \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Чтобы отслеживать статистику для \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", поместите следующий код в раздел \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" вашего сайта.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Напишите \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" в поле ниже, чтобы подтвердить.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Действия\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Среднее время посещения\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Отказы\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Браузеры\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Страны\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Настольный компьютер\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Ноутбук\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Смартфон\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Планшет\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Устройства\"}],\"metrics.events\":[{\"type\":0,\"value\":\"События\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Объединенные\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Только домен\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Сырые данные\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Операционные системы\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Просмотры страниц\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Страницы\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Источники\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Уникальные посетители\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Просмотры\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Посетители\"}]}");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yl8m":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Hesaplar\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Hesap ekle\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Web sitesi ekle\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Yönetici\"}],\"label.all\":[{\"type\":0,\"value\":\"Tümü\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Tüm web siteleri\"}],\"label.back\":[{\"type\":0,\"value\":\"Geri\"}],\"label.cancel\":[{\"type\":0,\"value\":\"İptal\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Şifre değiştir\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Parolayı onayla\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Panoya kopyala\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Mevcut parola\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Özelleştirilmiş aralık\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Kontrol Paneli\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Tarih aralığı\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Varsayılan tarih aralığı\"}],\"label.delete\":[{\"type\":0,\"value\":\"Sil\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Hesabı sil\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Web sitesini sil\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Reddet\"}],\"label.domain\":[{\"type\":0,\"value\":\"Alan adı\"}],\"label.edit\":[{\"type\":0,\"value\":\"Düzenle\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Hesabı düzenle\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Web sitesini düzenle\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Anonim paylaşım URL'i aktif\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Geçersiz\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Geçersiz alan adı\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Son \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" gün\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Son \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" saat\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\" olarak giriş yapıldı.\"}],\"label.login\":[{\"type\":0,\"value\":\"Giriş Yap\"}],\"label.logout\":[{\"type\":0,\"value\":\"Çıkış Yap\"}],\"label.more\":[{\"type\":0,\"value\":\"Detaylı göster\"}],\"label.name\":[{\"type\":0,\"value\":\"İsim\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Yeni parola\"}],\"label.password\":[{\"type\":0,\"value\":\"Parola\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Parolalar uyuşmuyor\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Gerçek Zamanlı\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Gerçek zamanlı kayıtlar\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Yenile\"}],\"label.required\":[{\"type\":0,\"value\":\"Zorunlu alan\"}],\"label.reset\":[{\"type\":0,\"value\":\"Sıfırla\"}],\"label.save\":[{\"type\":0,\"value\":\"Kaydet\"}],\"label.settings\":[{\"type\":0,\"value\":\"Ayarlar\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Paylaşım adresi\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Tekil gün\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Bu ay\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Bu hafta\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Bu yıl\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zaman dilimi\"}],\"label.today\":[{\"type\":0,\"value\":\"Bugün\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"İzleme kodu\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Bilinmeyen\"}],\"label.username\":[{\"type\":0,\"value\":\"Kullanıcı adı\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Detayı incele\"}],\"label.websites\":[{\"type\":0,\"value\":\"Web siteleri\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktif ziyaretçi\"}],\"message.confirm-delete\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" kaydını silmek istediğinizden emin misiniz?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Panoya kopyalandı!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"İlişkili tüm veriler de  silinecektir.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Bir şeyler ters gitti!\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Paylaşım adresini al\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"İzleme kodunu al\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ayarlara git\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Hatalı kullanıcı adı ya da parola.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Yeni ziyaretçi: \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\", \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\", \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\", \"},{\"type\":1,\"value\":\"browser\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami'nin yeni bir versiyonu (\"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\") mevcut!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Henüz hiç veri yok.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Henüz hiç web sitesi tanımlamadınız\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Sayfa bulunamadı.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Sağlayıcı: \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Başarıyla kaydedildi.\"}],\"message.share-url\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" için kullanılabilir anonim paylaşım adresidir.\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" alanı adı istatistiklerini takip etmek için, aşağıdaki kodu web sitenizin \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" bloğuna yerleştirin.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Onaylamak için kutuya \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" yazın.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Hareketler\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Ortalama ziyaret süresi\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Çıkma oranı\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Tarayıcılar\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Ülkeler\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Masaüstü\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Dizüstü\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil Cihaz\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Cihazlar\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Olaylar\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Birleşik\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Yalnızca alan adı\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Ham\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"İşletim sistemi\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sayfa görünümü\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sayfalar\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Yönlendirenler\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Tekil kullanıcı\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Görüntüleme\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Ziyaretçi\"}]}");

/***/ })

/******/ });