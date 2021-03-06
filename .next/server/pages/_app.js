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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Contas\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Adicionar conta\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Adicionar website\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrador\"}],\"label.all\":[{\"type\":0,\"value\":\"Todos\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Todos os websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Voltar\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancelar\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Alterar palavra-passe\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmar palavra-passe\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiar para a ??rea de transfer??ncia\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Palavra-passe atual\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalo personalizado\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Intervalo de datas\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalo de datas predefinido\"}],\"label.delete\":[{\"type\":0,\"value\":\"Eliminar\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Eliminar conta\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Eliminar website\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ignorar\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dom??nio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editar\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editar conta\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editar website\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Ativar link de partilha\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Inv??lido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Dom??nio inv??lido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"??ltimos \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dias\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"??ltimas \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" horas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Sess??o iniciada como \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Iniciar sess??o\"}],\"label.logout\":[{\"type\":0,\"value\":\"Sair\"}],\"label.more\":[{\"type\":0,\"value\":\"Mais\"}],\"label.name\":[{\"type\":0,\"value\":\"Nome\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nova palavra-passe\"}],\"label.password\":[{\"type\":0,\"value\":\"Palavra-passe\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Palavra-passes n??o correspondem\"}],\"label.profile\":[{\"type\":0,\"value\":\"Perfil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Tempo real\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Relat??rio em tempo real\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Atualizar\"}],\"label.required\":[{\"type\":0,\"value\":\"Obrigat??rio\"}],\"label.reset\":[{\"type\":0,\"value\":\"Repor\"}],\"label.save\":[{\"type\":0,\"value\":\"Guardar\"}],\"label.settings\":[{\"type\":0,\"value\":\"Defini????es\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Partilhar link\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Dia ??nico\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Este m??s\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Esta semana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Este ano\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuso hor??rio\"}],\"label.today\":[{\"type\":0,\"value\":\"Hoje\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"C??digo de tracking\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Desconhecido\"}],\"label.username\":[{\"type\":0,\"value\":\"Nome de utilizador\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Ver detalhes\"}],\"label.websites\":[{\"type\":0,\"value\":\"Websites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitante\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitantes\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" neste momento\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Tens a certeza que queres eliminar \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiado!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Todos os dados associados tamb??m ser??o eliminados.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ocorreu um erro.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obter link de partilha\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obter c??digo de tracking\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ir para as defini????es\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nome de utilizador/palavra-passe incorretos.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitante de \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" a usar \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" no \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"os\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Uma nova vers??o de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" est?? dispon??vel!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Sem dados dispon??veis.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"N??o tens nenhum website configurado.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"P??gina n??o encontrada.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Distribu??do por \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Guardado com sucesso.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Este ?? o link de partilha p??blico para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Para recolheres estat??sticas para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", coloca o seguinte c??digo na sec????o \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" do teu website.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Escreve \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" abaixo para confirmares.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"A????es\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tempo m??dio de visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Taxa de rejei????o\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navegadores\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Pa??ses\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Port??til\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Telem??vel\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivos\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventos\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinado\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Apenas dom??nio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Dados brutos\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemas operativos\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Visualiza????es da p??gina\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"P??ginas\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referrers\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitantes ??nicos\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visualiza????es\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitantes\"}]}");

/***/ }),

/***/ "02Qa":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"??????????????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"?????????????????? ??????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"?????? ??????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"??????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"?????? ????????????\"}],\"label.back\":[{\"type\":0,\"value\":\"??????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"???????? ???? ??????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"???????? ???????? ???????? ????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"????????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"?????????????? ?????? ???????? ????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"?????????? ??????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"?????????????????? ??????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????????????? ?????????????????? ??????\"}],\"label.delete\":[{\"type\":0,\"value\":\"????????????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"?????????????????? ????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"?????? ????????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"???? ????????????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"????????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"??????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"?????????????????? ??????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"?????? ??????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"?????????????????? ?????????????? ??????????????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"??????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"?????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"?????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\"-?? ??????????????????\"}],\"label.login\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"??????????\"}],\"label.more\":[{\"type\":0,\"value\":\"????????\"}],\"label.name\":[{\"type\":0,\"value\":\"??????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"???????? ???????? ????\"}],\"label.password\":[{\"type\":0,\"value\":\"???????? ????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"???????? ???? ???????????????????? ??????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"???? ????????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"?????????? ?????????????????? ??????????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.required\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"???????????? ???????? ???? ??????????????\"}],\"label.save\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"?????????????????? ??????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"?????? ????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"?????? ??????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"?????? ?????????? ??????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"?????? ??????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"???????????? ??????\"}],\"label.today\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"???????????? ??????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"??????????????????????\"}],\"label.username\":[{\"type\":0,\"value\":\"???????????????????????? ??????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"???????????????????? ??????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"????????????\"}],\"message.active-users\":[{\"type\":0,\"value\":\"???????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"??????????\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"??????????\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????????\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"???? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"-?? ?????????????????? ???????????????? ?????????? ?????\"}],\"message.copied\":[{\"type\":0,\"value\":\"??????????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"???????????? ?????????????????? ?????? ?????????????? ?????????? ??????????.\"}],\"message.failure\":[{\"type\":0,\"value\":\"???????? ?????? ???????? ?????????? ????????????.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"?????????????????? ?????????????? ????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"???????????? ?????? ????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"???????????????? ?????? ????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"?????????? ???????????????????????? ??????/???????? ????.\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ???????????? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" ???????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ?????????? ?????????????? ??????????\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Umami-???????? ???????? ???????????????? \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ???????????? ??????????!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"?????????????? ????????.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"???? ???????? ?????????? ?????? ?????????????????????????? ??????????.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"???????????? ??????????????????.\"}],\"message.powered-by\":[{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" ???????? ??????????????????\"}],\"message.save-success\":[{\"type\":0,\"value\":\"?????????????????? ??????????????????.\"}],\"message.share-url\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"-?? ???????????? ?????????????????? ??????????????.\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ???????????? ???????????????????????? ???????????????????? ???????? ?????????? ?????????? ?????????????????? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ???????????? ???????????????????? ????.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"?????????? ???????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ?????? ?????????? ???????????????????????????? ????.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"???????????????? ???????????? ??????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"?????? ???????????? ?????????? ????????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"???????????? ??????????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"???????????????? ??????????????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"???????????? ????????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"???????????????? ????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"???????????? ??????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"????????????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"??????????\"}]}");

/***/ }),

/***/ "07cz":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"????ty\"}],\"label.add-account\":[{\"type\":0,\"value\":\"P??idat ????et\"}],\"label.add-website\":[{\"type\":0,\"value\":\"P??idat web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administr??tor\"}],\"label.all\":[{\"type\":0,\"value\":\"V??e\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"V??echny weby\"}],\"label.back\":[{\"type\":0,\"value\":\"Zp??t\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Zru??it\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Zm??nit heslo\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Potvrdit heslo\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kop??rovat do schr??nky\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Aktu??ln?? heslo\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Vlastn?? rozsah\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"P??ehled\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Obdob??\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"V??choz?? obdob??\"}],\"label.delete\":[{\"type\":0,\"value\":\"Smazat\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Smazat ????et\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Smazat web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Odej??t\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dom??na\"}],\"label.edit\":[{\"type\":0,\"value\":\"Upravit\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Upravit ????et\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Upravit web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Povolit sd??len?? URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Neplatn??\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Neplatn?? dom??na\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Posledn??ch \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dn??\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Posledn??ch \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hodin\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"P??ihl????en?? jako \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"P??ihl??sit\"}],\"label.logout\":[{\"type\":0,\"value\":\"Odhl??sit\"}],\"label.more\":[{\"type\":0,\"value\":\"V??ce\"}],\"label.name\":[{\"type\":0,\"value\":\"Jm??no\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nov?? heslo\"}],\"label.password\":[{\"type\":0,\"value\":\"Heslo\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Hesla se neschoduj??\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Aktu??ln??\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Aktu??ln?? z??znamy\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Obnovit\"}],\"label.required\":[{\"type\":0,\"value\":\"Vy??adov??no\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Ulo??it\"}],\"label.settings\":[{\"type\":0,\"value\":\"Nastaven??\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Sd??let URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Jeden den\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Tento m??s??c\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Tento t??den\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tento rok\"}],\"label.timezone\":[{\"type\":0,\"value\":\"??asov?? z??na\"}],\"label.today\":[{\"type\":0,\"value\":\"Dnes\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sledovac?? k??d\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Nezn??m??\"}],\"label.username\":[{\"type\":0,\"value\":\"U??ivatelsk?? jm??no\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Zobrazit detaily\"}],\"label.websites\":[{\"type\":0,\"value\":\"Weby\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktu??ln?? \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"n??v??t??vn??k\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"n??v??t??vn??ci\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Opravdu smazat \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Zkop??rov??no!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"V??echna souvisej??c?? data budou tak?? smaz??na.\"}],\"message.failure\":[{\"type\":0,\"value\":\"N??co se pokazilo.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Z??skat sd??len?? URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Z??skat m??????c?? k??d\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"J??t do nastaven??\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nespr??vn?? jm??no/heslo.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"N??v??t??vn??k z \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" s prohl????e??em \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" na \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Nov?? verze umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" je k dispozici!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"????dn?? data.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nem??te nastaven?? ????dn?? web.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Str??nka nenalezena.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"B?????? na \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"??sp????n?? ulo??eno.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Toto je sd??len?? URL pro \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pro sledov??n?? n??v??t??v na \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", p??idejte n??sleduj??c?? k??d do \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ????sti va??eho webu.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Napi??te \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" pro potvrzen??.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Akce\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Pr??m??rn?? ??as n??v??t??vy\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Okam??it?? opu??t??n??\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Prohl????e??\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Zem??\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Stoln?? po????ta??\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"P??enosn?? po????ta??\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiln?? telefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Za????zen??\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Ud??losti\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombinace\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Dom??ny\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Nezpracovan??\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Opera??n?? syst??m\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Zobrazen?? str??nek\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Str??nky\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Odkazy\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Jedine??n?? n??v??t??vy\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Zobrazen??\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"N??v??t??vy\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Conturi\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Ad??ugare cont\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Ad??ugare site web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"All\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"All websites\"}],\"label.back\":[{\"type\":0,\"value\":\"??napoi\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Anuleaz??\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Schimbare parol??\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmare parol??\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiaz?? ??n clipboard\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Parola curent??\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Interval personalizat\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Tablou de bord\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Interval de date\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Interval de date implicit\"}],\"label.delete\":[{\"type\":0,\"value\":\"??terge\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"??tergere cont\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"??tergere site web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Renun????\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domeniu\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editare\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editare cont\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editare site web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Activare adresa URL de distribuire\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Invalid\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Invalid domain\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Ultimele \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" zile\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Ultimele \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ore\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Autentificat ca \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Autentificare\"}],\"label.logout\":[{\"type\":0,\"value\":\"Dezautentificare\"}],\"label.more\":[{\"type\":0,\"value\":\"Mai mult\"}],\"label.name\":[{\"type\":0,\"value\":\"Nume\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Parola nou??\"}],\"label.password\":[{\"type\":0,\"value\":\"Parol??\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Parolele nu se potrivesc\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtime logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Re??mprosp??tare\"}],\"label.required\":[{\"type\":0,\"value\":\"Obligatoriu\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reseteaz??\"}],\"label.save\":[{\"type\":0,\"value\":\"Salveaz??\"}],\"label.settings\":[{\"type\":0,\"value\":\"Set??ri\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Partajare URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"O singur?? zi\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Aceast?? lun??\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Aceast?? s??pt??m??n??\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Acest an\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fus orar\"}],\"label.today\":[{\"type\":0,\"value\":\"Ast??zi\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Cod de urm??rire\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Necunoscut\"}],\"label.username\":[{\"type\":0,\"value\":\"Username\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vizualizare detalii\"}],\"label.websites\":[{\"type\":0,\"value\":\"Site-uri web\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"vizitator activ\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"vizitatori activi\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Sunte??i sigur c?? dori??i s?? ??terge??i \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiat!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Toate datele asociate vor fi ??terse, de asemenea.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ceva n-a mers bine.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Ob??ine adresa URL de partajare\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Ob??ine codul de urm??rire\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Mergi la Set??ri\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Username/parol?? incorecte.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitor from \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" using \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" on \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Este disponibil?? o nou?? versiune \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" de umami!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Nicio informa??ie disponibil??.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nu ave??i niciun site web configurat.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Pagina nu a fost g??sit??.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Cu sprijinul \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Salvat cu succes.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Aceasta este adresa URL de partajare pentru \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pentru a urm??ri statisticile pentru \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", plasa??i urm??torul cod ??n sec??iunea \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" a site-ului dvs. web.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Tasta??i \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ??n casu??a de mai jos pentru a confirma.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Ac??iuni\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Timp mediu de vizitare\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Rata de respingere\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsere\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"????ri\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet??\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispozitive\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Evenimente\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinat\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Numai domeniu\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Brut\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sisteme de operare\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Vizualiz??ri de pagin??\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pagini\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Site-uri de provenien????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Vizitatori unici\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Vizualiz??ri\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Vizitatori\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Tilit\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Lis???? tili\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Lis???? verkkosivu\"}],\"label.administrator\":[{\"type\":0,\"value\":\"J??rjestelm??nvalvoja\"}],\"label.all\":[{\"type\":0,\"value\":\"Kaikki\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Kaikki verkkosivut\"}],\"label.back\":[{\"type\":0,\"value\":\"Takaisin\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Peruuta\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Vaihda salasana\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Vahvista salasana\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopioi leikep??yd??lle\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Nykyinen salasana\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Mukautettu jakso\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Ohjauspaneeli\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Ajanjakso\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Oletusajanjakso\"}],\"label.delete\":[{\"type\":0,\"value\":\"Poista\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Poista tili\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Poista verkkosivu\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Hylk????\"}],\"label.domain\":[{\"type\":0,\"value\":\"Verkkotunnus\"}],\"label.edit\":[{\"type\":0,\"value\":\"Muokkaa\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Muokkaa tili??\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Muokkaa verkkosivua\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Ota jakamisen URL-osoite k??ytt????n\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Virheellinen\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Virheellinen verkkotunnus\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Viimeisimm??t \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" p??iv??t\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Viimeisimm??t \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" tunnit\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Kirjautuneena sis????n nimell?? \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Kirjaudu sis????n\"}],\"label.logout\":[{\"type\":0,\"value\":\"Kirjaudu ulos\"}],\"label.more\":[{\"type\":0,\"value\":\"Lis????\"}],\"label.name\":[{\"type\":0,\"value\":\"Nimi\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Uusi salasana\"}],\"label.password\":[{\"type\":0,\"value\":\"Salasana\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Salasanat eiv??t t??sm????\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profiili\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Reaaliaikainen\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Reaaliaikaiset lokit\"}],\"label.refresh\":[{\"type\":0,\"value\":\"P??ivit??\"}],\"label.required\":[{\"type\":0,\"value\":\"Vaaditaan\"}],\"label.reset\":[{\"type\":0,\"value\":\"Nollaa\"}],\"label.save\":[{\"type\":0,\"value\":\"Tallenna\"}],\"label.settings\":[{\"type\":0,\"value\":\"Asetukset\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Jaa URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Yksi p??iv??\"}],\"label.this-month\":[{\"type\":0,\"value\":\"T??m?? kuukausi\"}],\"label.this-week\":[{\"type\":0,\"value\":\"T??m?? viikko\"}],\"label.this-year\":[{\"type\":0,\"value\":\"T??m?? vuosi\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Aikavy??hyke\"}],\"label.today\":[{\"type\":0,\"value\":\"T??n????n\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Seurantakoodi\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Tuntematon\"}],\"label.username\":[{\"type\":0,\"value\":\"K??ytt??j??nimi\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Katso tiedot\"}],\"label.websites\":[{\"type\":0,\"value\":\"Verkkosivut\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" nykyinen \"},{\"offset\":0,\"options\":{\"muut\":{\"value\":[{\"type\":0,\"value\":\"visitors\"}]},\"yksi\":{\"value\":[{\"type\":0,\"value\":\"visitor\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Haluatko varmasti poistaa \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopioitu!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Kaikki siihen liittyv??t tiedot poistetaan.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Jotain meni v????rin.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Hanki jakamisen URL-osoite\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Hanki seurantakoodi\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Mene asetuksiin\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"V????r?? k??ytt??j??nimi/salasana.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Vierailija maasta \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" k??ytt??en selainta \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\"-laitteella: \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Uusi versio umamista \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" on k??ytett??viss??!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Tietoja ei ole k??ytett??viss??.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Sinulla ei ole m????ritettyj?? verkkosivustoja.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Sivua ei l??ydetty.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Voimanl??hteen?? \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Tallennettu onnistuneesti.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"T??m?? on julkisesti jaettu URL-osoitteelle \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Jos haluat seurata kohteen \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" tilastoja, aseta seuraava koodi verkkosivustosi \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" osioon.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Kirjoita \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" alla olevaan ruutuun vahvistaaksesi.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Toiminnat\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Keskim????r??inen vierailuaika\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"V??lit??n poistuminen\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Selaimet\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Maat\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"P??yt??kone\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Kannettava tietokone\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiili\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tabletti\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Laitteet\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Tapahtumat\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Yhdistetty\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Vain verkkotunnus\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"K??sittelem??t??n\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"K??ytt??j??rjestelm??t\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sivun n??ytt??kertoja\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sivut\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Viittaajat\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Uniikit vierailijat\"}],\"metrics.views\":[{\"type\":0,\"value\":\"N??ytt??kertoja\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Vierailijat\"}]}");

/***/ }),

/***/ "AEbH":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Konta\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Dodaj konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Dodaj witryn??\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Wszystkie\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Wszystkie witryny\"}],\"label.back\":[{\"type\":0,\"value\":\"Powr??t\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Anuluj\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Zmie?? has??o\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Potwierd?? has??o\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Skopiuj do schowka\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Aktualne has??o\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Zakres niestandardowy\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Zakres dat\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Domy??lny zakres dat\"}],\"label.delete\":[{\"type\":0,\"value\":\"Usu??\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Usu?? konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Usu?? witryn??\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Odrzu??\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domena\"}],\"label.edit\":[{\"type\":0,\"value\":\"Edytuj\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Edytuj konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Edytuj witryn??\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"W????cz udost??pnianie adresu URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Nieprawid??owy\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Nieprawid??owa witryna\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Ostatnie \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dni\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Ostatnie \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" godzin\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Zalogowano jako \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Zaloguj si??\"}],\"label.logout\":[{\"type\":0,\"value\":\"Wyloguj\"}],\"label.more\":[{\"type\":0,\"value\":\"Wi??cej\"}],\"label.name\":[{\"type\":0,\"value\":\"Nazwa\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nowe has??o\"}],\"label.password\":[{\"type\":0,\"value\":\"Has??o\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Has??a si?? nie zgadzaj??\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Czas rzeczywisty\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Logi w czasie rzeczywistym\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Od??wie??\"}],\"label.required\":[{\"type\":0,\"value\":\"Wymagany\"}],\"label.reset\":[{\"type\":0,\"value\":\"Zresetuj\"}],\"label.save\":[{\"type\":0,\"value\":\"Zapisz\"}],\"label.settings\":[{\"type\":0,\"value\":\"Ustawienia\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Udost??pnij adres URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"W tym dniu\"}],\"label.this-month\":[{\"type\":0,\"value\":\"W tym miesi??cu\"}],\"label.this-week\":[{\"type\":0,\"value\":\"W tym tygodniu\"}],\"label.this-year\":[{\"type\":0,\"value\":\"W tym roku\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Strefa czasowa\"}],\"label.today\":[{\"type\":0,\"value\":\"Dzisiaj\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Kod ??ledzenia\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Nieznany\"}],\"label.username\":[{\"type\":0,\"value\":\"Nazwa u??ytkownika\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Poka?? szczeg????y\"}],\"label.websites\":[{\"type\":0,\"value\":\"Witryny\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktualnie \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"odwiedzaj??cy\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"odwiedzaj??cych\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Czy na pewno chcesz usun???? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Skopiowano!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Wszystkie powi??zane dane r??wnie?? zostan?? usuni??te.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Co?? posz??o nie tak.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Uzyskaj adres URL udost??pniania\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Pobierz kod ??ledzenia\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Przejd?? do ustawie??\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nieprawid??owa nazwa u??ytkownika/has??o.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Odwiedzaj??cy z \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" u??ywa \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" na \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Nowa wersja umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" jest dost??pna!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Brak dost??pnych danych.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nie masz skonfigurowanych ??adnych witryn internetowych.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Strona nie znaleziona.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Obs??ugiwane przez \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Zapisano pomy??lnie.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"To jest publicznie udost??pniany adres URL dla \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Aby ??ledzi?? statystyki dla \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", umie???? poni??szy kod w sekcji \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" swojej witryny.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Wpisz \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" w polu poni??ej, aby potwierdzi??.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Dzia??ania\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"??redni czas wizyty\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Wsp????czynnik odrzuce??\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Przegl??darki\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Kraje\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Komputer\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Smartfon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Urz??dzenia\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Zdarzenia\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Po????czone\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Tylko domena\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Surowe dane\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"System operacyjny\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Wy??wietlenia strony\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Strony\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"??r??d??a odsy??aj??ce\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unikalni odwiedzaj??cy\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Wy??wietlenia\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Odwiedzaj??cy\"}]}");

/***/ }),

/***/ "D5CS":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"????ty\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Prida?? ????et\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Prida?? web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administr??tor\"}],\"label.all\":[{\"type\":0,\"value\":\"V??etko\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"V??etky weby\"}],\"label.back\":[{\"type\":0,\"value\":\"Sp????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Zru??i??\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Zmeni?? heslo\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Potvrdi?? heslo\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kop??rova?? do schr??nky\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Aktu??lne heslo\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Vlastn?? rozsah\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Prehlad\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Obdobie\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Predvolen?? obdobie\"}],\"label.delete\":[{\"type\":0,\"value\":\"Zmaza??\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Zmaza?? ????et\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Zmaza?? web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Od??s??\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dom??na\"}],\"label.edit\":[{\"type\":0,\"value\":\"Upravi??\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Upravi?? ????et\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Upravi?? web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Povoli?? zdielanie URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Neplatn??\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Neplatn?? dom??na\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Posledn??ch \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dn??\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Posledn??ch \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hod??n\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Prihl??sen?? ako \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Prihl??si??\"}],\"label.logout\":[{\"type\":0,\"value\":\"Odhl??si??\"}],\"label.more\":[{\"type\":0,\"value\":\"Viac\"}],\"label.name\":[{\"type\":0,\"value\":\"Meno\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nov?? heslo\"}],\"label.password\":[{\"type\":0,\"value\":\"Heslo\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Hesla se nezhoduj??\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Aktu??lne\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Aktu??lne z??znamy\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Obnovi??\"}],\"label.required\":[{\"type\":0,\"value\":\"Povinn??\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Ulo??i??\"}],\"label.settings\":[{\"type\":0,\"value\":\"Nastavenia\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Zdielanie URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Jeden de??\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Tento mesiac\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Tento t????de??\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tento rok\"}],\"label.timezone\":[{\"type\":0,\"value\":\"??asov?? z??na\"}],\"label.today\":[{\"type\":0,\"value\":\"Dnes\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sledovac?? k??d\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Nezn??m??\"}],\"label.username\":[{\"type\":0,\"value\":\"U????vate??sk?? meno\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Zobrazi?? detaily\"}],\"label.websites\":[{\"type\":0,\"value\":\"Weby\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktu??lne \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"n??v??tevn??k\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"n??v??t??vn??ci\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Naozaj zmaza?? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Skop??rovan??!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"V??etky pr??buzn?? data budu tie?? zmazan??.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Nie??o sa pokazilo.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Z??ska?? zdielan?? URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Z??ska?? tracking k??d\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"??s?? do nastaven??\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nespr??vn?? meno/heslo.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"N??v??tevn??k z \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" s prehliada??om \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" na \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Nov?? verzia umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" je k dispoz??cii!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"??iadne data.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nem??te nastaven?? ??iadny web.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Str??nka sa nena??la.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"??spe??ne ulo??en??.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Toto je zdielan?? URL pre \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pre sledovanie n??v??tev na \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", pridajte n??sleduj??ci k??d do \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ??asti va??eho webu.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Nap????te \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" pre potvrdenie.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Akcie\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Priemern?? ??as n??v??tevy\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Okam??it?? opustenie\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Prehliada??\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Zem\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Stoln?? po????ta??\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Prenosn?? po????ta??\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiln?? telefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Zariadenie\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Udalosti\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombin??cie\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Dom??ny\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Nezpracovan??\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Opera??n?? syst??m\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Zobrazenie st??nok\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Str??nky\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Odkazy\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Jedine??n?? n??v??tevy\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Zobrazen??\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"N??v??tevy\"}]}");

/***/ }),

/***/ "DvRY":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"???????? ????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"???????????? ????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"???????????? ???? ????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-events\":[{\"type\":0,\"value\":\"?????? ???????????? ????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"?????? ???? ???????? ????\"}],\"label.back\":[{\"type\":0,\"value\":\"??????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"?????????? ??????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"?????????? ??????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"?????? ???? ??????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"?????? ????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"???????????? ????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"???????????? ??????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????????? ???????????? ??????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"??????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"?????? ????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"?????? ???? ????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"???? ????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"??????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"????????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"???????????? ????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"???????????? ???? ????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"???????? ???????? ???????????? ?????????? URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"?????????? ??????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"???????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"???????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ????????\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"???????? ?????? ???? ?????????? \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"????????\"}],\"label.more\":[{\"type\":0,\"value\":\"??????????\"}],\"label.name\":[{\"type\":0,\"value\":\"??????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"?????? ????????\"}],\"label.password\":[{\"type\":0,\"value\":\"??????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"?????? ???? ?????????? ????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"???????? ???? ??????????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"?????? ?????? ???? ??????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"???????? ????????\"}],\"label.required\":[{\"type\":0,\"value\":\"????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"????????\"}],\"label.save\":[{\"type\":0,\"value\":\"??????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"???? ???????????? ?????????? URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"???? ??????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"?????? ??????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"?????? ????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"??????????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"?????????? ??????????\"}],\"label.today\":[{\"type\":0,\"value\":\"??????????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"???? ????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.username\":[{\"type\":0,\"value\":\"?????? ????????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"???????????? ????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"???? ???????? ????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???? ?????????? \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"????\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"???? ????????\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"?????? ?????????? ?????????? ???? ???????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ???? ?????? ?????????\"}],\"message.copied\":[{\"type\":0,\"value\":\"?????? ????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"?????? ???????? ?????? ?????????? ???? ?????? ?????????? ????.\"}],\"message.failure\":[{\"type\":0,\"value\":\"?????????? ?????? ???????? ??????.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"???????????? URL ???????? ???????????? ??????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"?????????? ???? ????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"???????? ???? ??????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"?????? ???????????? / ?????? ???????????? ??????.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"???????????? ?????????? ???? ???????? \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ???? ?????????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ???? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"???????? ???????? umami (\"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\") ???????? ??????!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"???????????????? ?????????? ????????.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"?????? ?????? ???? ?????????? ???? ???????? ???????? ?????????? ??????.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"???????? ???????? ??????.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"???????? ?????????? ???????? \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"???? ???????????? ?????????? ????.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"?????? URL ???? ???????????? ???????????? ?????? ?????????? ???????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ??????.\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"???????? ???????????? ???????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", ???? ?????????? ???? ???? ???????? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ???? ???????? ???????? ????????.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"?????? ?????????????? {delete} ???? ???? ???????? ?????? ??????????????.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"?????????????? ???????? ????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"?????? Bounce\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"?????????? ????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"???????? ????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"???? ??????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"???????????? ????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"???????????? ????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"?????????? ??????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"?????? ??????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"?????????? ???????? ????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"???????????? ????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"???????? ????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"?????????? ??????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"???????????? ?????????? ????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"???????????? ??????????\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Utenti\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Aggiungi utente\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Aggiungi sito\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Amministratore\"}],\"label.all\":[{\"type\":0,\"value\":\"Tutto\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Tutti i siti web\"}],\"label.back\":[{\"type\":0,\"value\":\"Indietro\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Annulla\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Modifica password\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Conferma password\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copia\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Password corrente\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Personalizzato\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Periodo\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Periodo standard\"}],\"label.delete\":[{\"type\":0,\"value\":\"Elimina\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Elimina account\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Elimina sito\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Scarta\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dominio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Modifica\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Modifica account\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Modifica sito\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Abilita URL di condivisione\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Non valido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Dominio non valido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Ultimi \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" giorni\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Ultime \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ore\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Ciao \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Login\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logout\"}],\"label.more\":[{\"type\":0,\"value\":\"Dettagli\"}],\"label.name\":[{\"type\":0,\"value\":\"Nome\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nuova password\"}],\"label.password\":[{\"type\":0,\"value\":\"Password\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Le password non corrispondono\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profilo\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Log in realtime\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Ricarica\"}],\"label.required\":[{\"type\":0,\"value\":\"Obbligatorio\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Salva\"}],\"label.settings\":[{\"type\":0,\"value\":\"Impostazioni\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Share URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Singolo giorno\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Questo mese\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Questa settimana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Quest'anno\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuso orario\"}],\"label.today\":[{\"type\":0,\"value\":\"Oggi\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Codice di tracking\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Sconosciuto\"}],\"label.username\":[{\"type\":0,\"value\":\"Username\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vedi dettagli\"}],\"label.websites\":[{\"type\":0,\"value\":\"Siti web\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitatore\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitatori\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" online\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Sei sicuro di voler eliminare \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiato!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Saranno eliminati anche tutti i dati associati.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Si ?? verificato un errore.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Ottieni l'URL di condivisione\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Ottieni il codice di tracking\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Vai alle impostazioni\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Username o password non corretti.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Utenti da \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" tramite \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" su \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Una nuova versione umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ?? disponibile!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Nessun dato disponibile.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Non hai ancora configurato alcun sito.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Pagina non trovata\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Salvato!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Questo ?? l'URL di condivisione per \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Per tracciare le statistiche di \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", inserisci questo codice nella sezione \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" del tuo sito web.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Digita \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" nel box qui sotto per confermare.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Azioni\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tempo medio di visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Frequenza di rimbalzo\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browser\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Nazioni\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobile\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivi\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventi\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Aggregati\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Solo dominio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Raw\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemi operativi\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Visualizzazioni di pagina\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pagine\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referr\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitatori unici\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visualizzazioni\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitatori\"}]}");

/***/ }),

/***/ "EtmR":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"???????????? ??????????????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"????????? ???????????????????????????\"}],\"label.back\":[{\"type\":0,\"value\":\"????????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"???????????? ????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"????????????????????? ???????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"????????????????????? ?????? ?????????????????? ??????????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"?????????????????????????????? ?????? ???????????? ????????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"????????????????????? ?????????????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"??????????????? ????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"????????????????????????-????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"???????????? ????????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????????????????????? ???????????? ????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"???????????? ???????????????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"???????????? ???????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"????????????????????? ???????????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"??????????????? ??????????????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"????????????????????? ????????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"???????????? ????????????????????? ????????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"????????????????????? ????????????????????? ????????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"???????????? URL ??????????????? ????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"?????????????????? ???????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"??????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?????????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"??????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ????????????\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?????? ????????? ????????? ????????? ?????? ????????????\"}],\"label.login\":[{\"type\":0,\"value\":\"????????? ??????\"}],\"label.logout\":[{\"type\":0,\"value\":\"????????? ?????????\"}],\"label.more\":[{\"type\":0,\"value\":\"??????\"}],\"label.name\":[{\"type\":0,\"value\":\"?????????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"????????? ?????????????????????\"}],\"label.password\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"????????????????????? ????????? ???????????? ????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"?????????????????? ?????????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"???????????????????????? ????????? ?????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.required\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.save\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"?????????????????? ???????????? ????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"?????? ?????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"?????? ???????????????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"?????? ??????????????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"?????? ?????????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"????????? ?????????????????????\"}],\"label.today\":[{\"type\":0,\"value\":\"??????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"???????????????????????? ?????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.username\":[{\"type\":0,\"value\":\"?????????????????????????????? ?????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"??????????????? ???????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????????????? \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"??????????????????\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"????????????????????????\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"???????????? ?????? ???????????? ????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ??????????????? ??????????????? ??????????\"}],\"message.copied\":[{\"type\":0,\"value\":\"???????????? ?????? ?????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"????????? ?????????????????? ???????????? ?????? ?????? ????????? ???????????? ??????????????????\"}],\"message.failure\":[{\"type\":0,\"value\":\"????????? ????????? ?????? ????????????\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"???????????? URL ????????????????????? ????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"???????????????????????? ????????? ????????????????????? ????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"????????????????????? ????????? ????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"???????????? ?????????????????????????????? ????????? / ????????????????????????\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ?????? ??????????????????, ?????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ?????? ??????????????? ???????????? ??????, \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" ?????????????????? ??????\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"??????????????? ?????? ????????? ????????????????????? \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ?????????????????? ??????!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"????????? ???????????? ?????????????????? ???????????? ?????????\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"???????????? ????????? ????????? ????????????????????? ??????????????????????????? ???????????? ?????????\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"??????????????? ???????????? ???????????????\"}],\"message.powered-by\":[{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" ?????????????????? ?????????????????????\"}],\"message.save-success\":[{\"type\":0,\"value\":\"????????????????????????????????? ??????????????? ?????? ???????????? ????????? ?????????\"}],\"message.share-url\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ?????? ????????? ??????????????????????????? ????????? ?????? ???????????? ???????????? ????????? URL ?????????\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ?????? ????????????????????? ?????? ??????????????? ???????????? ?????? ?????????, ???????????? ????????????????????? ?????? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ?????????????????? ????????? ?????????????????????????????? ????????? ???????????????\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"?????????????????? ???????????? ?????? ????????? ???????????? ????????? ?????? ??????????????? ????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ???????????? ???????????????\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"????????? ??????????????? ?????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"???????????? ??????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"????????? ????????????????????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"?????????????????? ?????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"???????????? ???????????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"???????????????????????? ??????????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"??????????????? ???????????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"?????????????????????????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"???????????????????????? ????????????????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"????????????????????????\"}]}");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IVkf":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Konton\"}],\"label.add-account\":[{\"type\":0,\"value\":\"L??gg till konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"L??gg till webbsajt\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrat??r\"}],\"label.all\":[{\"type\":0,\"value\":\"Alla\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alla sajter\"}],\"label.back\":[{\"type\":0,\"value\":\"Tillbaka\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Avbryt\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Byt l??senord\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Bekr??fta l??senord\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopiera till urklipp\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Nuvarande l??senord\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Anpassat urval\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"??versikt\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datumomf??ng\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standard datum-urval\"}],\"label.delete\":[{\"type\":0,\"value\":\"Radera\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Radera konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Radera webbsajt\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Avbryt\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dom??n\"}],\"label.edit\":[{\"type\":0,\"value\":\"Redigera\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Redigera konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Redigera webbsajt\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktivera delnings-URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ogiltig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ogiltig dom??n\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Senaste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dagarna\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Senaste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" timmarna\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Inloggad som \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Logga in\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logga ut\"}],\"label.more\":[{\"type\":0,\"value\":\"Mer\"}],\"label.name\":[{\"type\":0,\"value\":\"Namn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nytt l??senord\"}],\"label.password\":[{\"type\":0,\"value\":\"L??senord\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"L??senorden ??r inte samma\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtid\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtidsloggar\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Uppdatera\"}],\"label.required\":[{\"type\":0,\"value\":\"Kr??vs\"}],\"label.reset\":[{\"type\":0,\"value\":\"??terst??ll\"}],\"label.save\":[{\"type\":0,\"value\":\"Spara\"}],\"label.settings\":[{\"type\":0,\"value\":\"Inst??llningar\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Delnings-URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"En dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Denna m??nad\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Denna vecka\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Detta ??r\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tidszon\"}],\"label.today\":[{\"type\":0,\"value\":\"Idag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sp??rningskod\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Ok??nd\"}],\"label.username\":[{\"type\":0,\"value\":\"Anv??ndarnamn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Visa detaljer\"}],\"label.websites\":[{\"type\":0,\"value\":\"Webbsajt\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"bes??kare\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"bes??kare\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" just nu\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"??r du s??ker p?? att du vill radera \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopierad!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"All tillh??rande data kommer ocks?? raderas.\"}],\"message.failure\":[{\"type\":0,\"value\":\"N??got gick fel.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Visa delnings-URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Visa sp??rningskod\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"G?? till inst??llningar\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Felaktikt anv??ndarnamn/l??senord.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Bes??kare fr??n \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" med \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" p?? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"En ny version av umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ??r tillg??nglig!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Ingen data tillg??nglig.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Du har inga webbsajter.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Sidan kan inte hittas.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Drivs av \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Sparades!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Det h??r ??r den offentliga delnings-URL:en \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"F??r att sp??ra statistik f??r \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", placera f??ljande kod i \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"-avsnittet p?? din webbsajt.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriv \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" i rutan nedan f??r att radera.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"H??ndelser\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Medelbes??kstid\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Avvisningfrekvens\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Webbl??sare\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"L??nder\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Station??r\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"B??rbar\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Platta\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Enheter\"}],\"metrics.events\":[{\"type\":0,\"value\":\"H??ndelser\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombinerade\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Endast dom??n\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"R??data\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operativsystem\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sidvisningar\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sidor\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"H??nvisare\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unika bes??kare\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visningar\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Bes??kare\"}]}");

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
  label: '??????',
  value: 'zh-CN',
  display: 'cn'
}, {
  label: '??????(??????)',
  value: 'zh-TW',
  display: 'tw'
}, {
  label: '??e??tina',
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
  label: 'Espa??ol',
  value: 'es-MX',
  display: 'es'
}, {
  label: '??????????',
  value: 'fa-IR',
  display: 'fa'
}, {
  label: 'F??royskt',
  value: 'fo-FO',
  display: 'fo'
}, {
  label: 'Fran??ais',
  value: 'fr-FR',
  display: 'fr'
}, {
  label: '????????????????',
  value: 'el-GR',
  display: 'el'
}, {
  label: '??????????',
  value: 'he-IL',
  display: 'he'
}, {
  label: '??????????????????',
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
  label: '?????????',
  value: 'ja-JP',
  display: 'ja'
}, {
  label: 'Malay',
  value: 'ms-MY',
  display: 'ms'
}, {
  label: '????????????',
  value: 'mn-MN',
  display: 'mn'
}, {
  label: 'Nederlands',
  value: 'nl-NL',
  display: 'nl'
}, {
  label: 'Norsk Bokm??l',
  value: 'nb-NO',
  display: 'nb'
}, {
  label: 'Polski',
  value: 'pl-PL',
  display: 'pl'
}, {
  label: 'Portugu??s',
  value: 'pt-PT',
  display: 'pt'
}, {
  label: 'Portugu??s do Brasil',
  value: 'pt-BR',
  display: 'pt-BR'
}, {
  label: '??????????????',
  value: 'ru-RU',
  display: 'ru'
}, {
  label: 'Rom??n??',
  value: 'ro-RO',
  display: 'ro'
}, {
  label: 'Sloven??ina',
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
  label: '???????????????',
  value: 'ta-IN',
  display: 'ta'
}, {
  label: 'T??rk??e',
  value: 'tr-TR',
  display: 'tr'
}, {
  label: '????????????????????',
  value: 'uk-UA',
  display: 'uk'
}];

/***/ }),

/***/ "OhGf":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Gebruikers\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Account toevoegen\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Website toevoegen\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alles\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Alle gebeurtenissen\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Terug\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Annuleren\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Wachtwoord wijzigen\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Wachtwoord bevestigen\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopi??er naar klembord\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Huidig wachtwoord\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Aangepast bereik\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Overzicht\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datumbereik\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standaard bereik\"}],\"label.delete\":[{\"type\":0,\"value\":\"Verwijderen\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Account verwijderen\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Website verwijderen\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Negeren\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domein\"}],\"label.edit\":[{\"type\":0,\"value\":\"Bewerken\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Account bewerken\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Website bewerken\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Sta delen via openbare URL toe\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ongeldig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ongeldig domein\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Laatste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dagen\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Laatste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" uur\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Ingelogd als \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Inloggen\"}],\"label.logout\":[{\"type\":0,\"value\":\"Uitloggen\"}],\"label.more\":[{\"type\":0,\"value\":\"Toon meer\"}],\"label.name\":[{\"type\":0,\"value\":\"Naam\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nieuw wachtwoord\"}],\"label.password\":[{\"type\":0,\"value\":\"Wachtwoord\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Wachtwoorden komen niet overeen\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profiel\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Actueel\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Actueel logboek\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Vernieuwen\"}],\"label.required\":[{\"type\":0,\"value\":\"Verplicht\"}],\"label.reset\":[{\"type\":0,\"value\":\"Resetten\"}],\"label.save\":[{\"type\":0,\"value\":\"Opslaan\"}],\"label.settings\":[{\"type\":0,\"value\":\"Instellingen\"}],\"label.share-url\":[{\"type\":0,\"value\":\"URL delen\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Enkele dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Deze maand\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Deze week\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Dit jaar\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tijdzone\"}],\"label.today\":[{\"type\":0,\"value\":\"Vandaag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Volgcode\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Onbekend\"}],\"label.username\":[{\"type\":0,\"value\":\"Gebruikersnaam\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Meer details\"}],\"label.websites\":[{\"type\":0,\"value\":\"Websites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" actieve \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"bezoeker\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"bezoekers\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Weet je zeker dat je \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" wilt verwijderen?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Gekopi??erd!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle verwante gegezens zullen ook verwijderd worden.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Er is iets misgegaan.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Openbare URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Tracking code\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Naar instellingen\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Incorrecte gebruikersnaam/wachtwoord.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Bezoeker uit \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" met \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" op een \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Een nieuwe versie van umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" is beschikbaar!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Geen gegevens beschikbaar.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Je hebt geen websites ingesteld.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Pagina niet gevonden.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"mogelijk gemaakt door \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Opslaan succesvol.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Met deze URL kan \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" openbaar gedeeld worden.\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Om statistieken voor \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" bij te houden, plaats je de volgende code in het \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" gedeelte van je website.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Type \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" in onderstaande veld om dit te bevestigen.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Acties\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Gemiddelde bezoektijd\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bouncepercentage\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsers\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Landen\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiel\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Apparaten\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Gebeurtenissen\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Gecombineerd\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Alleen domein\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Ruw\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Besturingssysteem\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Paginaweergaven\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pagina's\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Verwijzers\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unieke bezoekers\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Weergaven\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Bezoekers\"}]}");

/***/ }),

/***/ "Oz/6":
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),

/***/ "RWu3":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Comptes\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Ajouter un compte\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Ajouter un site\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrateur\"}],\"label.all\":[{\"type\":0,\"value\":\"Tout\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Tous les ??v??nements\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Tous les sites web\"}],\"label.back\":[{\"type\":0,\"value\":\"Retour\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Annuler\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Changer le mot de passe\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmation du mot de passe\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copier dans le presse papier\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Mot de passe actuel\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalle personnalis??\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Tableau de bord\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Intervalle\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalle par d??faut\"}],\"label.delete\":[{\"type\":0,\"value\":\"Supprimer\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Supprimer le compte\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Supprimer le site\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ignorer\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domaine\"}],\"label.edit\":[{\"type\":0,\"value\":\"Modifier\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Modifier le compte\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Modifier le site\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Activer le partage d'URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Invalide\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Domaine invalide\"}],\"label.last-days\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" derniers jours\"}],\"label.last-hours\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" derni??res heures\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Connect?? en tant que \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Connexion\"}],\"label.logout\":[{\"type\":0,\"value\":\"D??connexion\"}],\"label.more\":[{\"type\":0,\"value\":\"Plus\"}],\"label.name\":[{\"type\":0,\"value\":\"Nom\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nouveau mot de passe\"}],\"label.password\":[{\"type\":0,\"value\":\"Mot de passe\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Les mots de passe ne correspondent pas\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Temps r??el\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Logs en temps r??el\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Rafra??chir\"}],\"label.required\":[{\"type\":0,\"value\":\"Requis\"}],\"label.reset\":[{\"type\":0,\"value\":\"R??initialiser\"}],\"label.save\":[{\"type\":0,\"value\":\"Sauvegarder\"}],\"label.settings\":[{\"type\":0,\"value\":\"Param??tres\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Partager l'URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Journ??e\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Ce mois ci\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Cette semaine\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Cette ann??e\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuseau horaire\"}],\"label.today\":[{\"type\":0,\"value\":\"Aujourd'hui\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Code de suivi\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Inconnu\"}],\"label.username\":[{\"type\":0,\"value\":\"Nom d'utilisateur\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Voir les details\"}],\"label.websites\":[{\"type\":0,\"value\":\"Sites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visiteur\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visiteurs\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" actuellement\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"??tes-vous s??r de vouloir supprimer \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copi?? !\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Toutes les donn??es associ??es seront ??galement supprim??es.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Un probl??me est survenu.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obtenez l'URL de partage\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obtenez le code de suivi\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Aller aux param??tres\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"nom d'utilisateurs/mot de passe incorrect.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visiteur de \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" utilisant \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" sur \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Une nouvelle version de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" est disponible !\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Pas de donn??es disponibles.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Vous n'avez configur?? aucun site Web.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Page non trouv??e.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Propuls?? par \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Enregistr?? avec succ??s.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Ceci est l'URL partag??e pour \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Pour suivre les statistiques de \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", placez le code suivant dans la section \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" de votre site Web.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Tapez \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" dans la case ci-dessous pour confirmer.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Actions\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Temps de visite moyen\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Taux de rebond\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navigateurs\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Pays\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Ordinateur\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Portable\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"T??l??phone\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablette\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Appareils\"}],\"metrics.events\":[{\"type\":0,\"value\":\"??v??nements\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combin??\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domaine uniquement\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Brute\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Syst??mes d'exploitation\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Pages vues\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pages\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"URL R??f??rentes\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visiteurs uniques\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Vues\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visiteurs\"}]}");

/***/ }),

/***/ "RZw1":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Br??karar\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Ger br??kara\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Legg heimas????u afturat\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Fyrisitari\"}],\"label.all\":[{\"type\":0,\"value\":\"Alt\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Allar heimas????ur\"}],\"label.back\":[{\"type\":0,\"value\":\"Aftur\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Strika\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Skift loynior??\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"V??tta loynior??\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Avrita til seti??bor??\"}],\"label.current-password\":[{\"type\":0,\"value\":\"N??verandi loynior??\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Tillaga  spenni\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Yvirlitssk??ggi\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Vel dato\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Forsett dato\"}],\"label.delete\":[{\"type\":0,\"value\":\"Sletta\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Sletta br??kara\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Sletta heimas????u\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Lat fara\"}],\"label.domain\":[{\"type\":0,\"value\":\"??kisnavn\"}],\"label.edit\":[{\"type\":0,\"value\":\"Ger broyting\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Broyt br??kara\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Broyt heimas????u\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Virkja deili leinki\"}],\"label.invalid\":[{\"type\":0,\"value\":\"??gilda\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"??gilt ??kisnavn\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Seinastu \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dagarnar\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Seinastu \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" t??marnar\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Rita??ur inn sum \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Rita inn\"}],\"label.logout\":[{\"type\":0,\"value\":\"Rita ??t\"}],\"label.more\":[{\"type\":0,\"value\":\"Meira\"}],\"label.name\":[{\"type\":0,\"value\":\"Navn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"N??tt loynior??\"}],\"label.password\":[{\"type\":0,\"value\":\"Loynior??\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Loynior??ini eru ikki eins\"}],\"label.profile\":[{\"type\":0,\"value\":\"Vangi\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Beinlei??is\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Beinlei??is skr??\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Endurskapa\"}],\"label.required\":[{\"type\":0,\"value\":\"Kravt\"}],\"label.reset\":[{\"type\":0,\"value\":\"Nulstilla\"}],\"label.save\":[{\"type\":0,\"value\":\"Goym\"}],\"label.settings\":[{\"type\":0,\"value\":\"Stillingar\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Deil leinku\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Einkultur dagur\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Hendan m??nan\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Hesa vikuna\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Hetta ??ri??\"}],\"label.timezone\":[{\"type\":0,\"value\":\"T????arsona\"}],\"label.today\":[{\"type\":0,\"value\":\"?? dag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Spori kota\"}],\"label.unknown\":[{\"type\":0,\"value\":\"??kent\"}],\"label.username\":[{\"type\":0,\"value\":\"Br??karanavn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"V??s fr??grei??ing\"}],\"label.websites\":[{\"type\":0,\"value\":\"Heimas????ur\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?? l??tuni \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"vitjandi\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\" vitjandi \"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Ert t?? sikkur at t?? ynskir at strika \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Avrita!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"??ll data i?? er kn??tt at ver??ur eisini strika.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Okkurt bleiv gali.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"F?? leinku sum t?? kanst deila\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"F?? sporings kotu\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Far til stillingar\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Skeivt br??karanavn/loynior??.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Vitjandi fr?? \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" br??kar \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ?? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Ein n??ggj ??tgava av umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" er t??kt!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Einki data t??k.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"T?? hevur ongar heimas????ur stilla??a til.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"S????an bleiv ikki funnin.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Goymt.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Hettar er tann almenna leinkan av \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Fyri at spora hagt??l fyri \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", koyr kotuna ?? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" partin ?? t??nari heimas????u.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriva \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ?? felti?? fyri at v??tta\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Ger??ir\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Mi??al vitjurnart???? \"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bounce prosenttal\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Kagar\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Lond\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Bor??telda\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Fartelda\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Telefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Teldil\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"T??leindir\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Hendingar/tilt??k\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Samansett\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Bara ??kisnavn\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"??vi??gj??rt\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"St??rikervir\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Opna??ar s????ir\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"S????ir\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Framsendingar\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Eins??na vitjanir\"}],\"metrics.views\":[{\"type\":0,\"value\":\"S??ningar\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Vitjandi\"}]}");

/***/ }),

/***/ "TGBB":
/***/ (function(module, exports) {



/***/ }),

/***/ "TkjR":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"??????????????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"???????????????? ??????????????????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"???????????????? ??????????????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.all\":[{\"type\":0,\"value\":\"All\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"All websites\"}],\"label.back\":[{\"type\":0,\"value\":\"????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"???????????? ??????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"?????????????????????? ??????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"?????????????????? ?????? ????????????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"?????????????? ?????????????? ??????????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"?????????????????????????? ??????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"?????????? ??????????????????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"?????????????????????????? ?????????? ??????????????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"???????????????? ??????????????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"???????????????? ??????????????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Dismiss\"}],\"label.domain\":[{\"type\":0,\"value\":\"????????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"??????????????????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"?????????????????????? ??????????????????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"?????????????????????? ??????????????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"???????????????????????? ???????????? ???????????? URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"???? ????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"???? ?????????????? ????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"???????????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ????????????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"???????????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ????????\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"?????????????????????? ???? \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"????????????????????\"}],\"label.more\":[{\"type\":0,\"value\":\"??????????????????????\"}],\"label.name\":[{\"type\":0,\"value\":\"??????????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"???????? ??????????????\"}],\"label.password\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"???? ?????????????? ?????????????????? ?????? ????????????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtime logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.required\":[{\"type\":0,\"value\":\"????????????????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.save\":[{\"type\":0,\"value\":\"????????????????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"?????????????????????? ???????????????????? URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"???????? ???? ????????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"???????? ?????? ????????????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"???????? ?????? ????????????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"???????? ????????\"}],\"label.today\":[{\"type\":0,\"value\":\"????????????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"?????????????? ????????????????????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.username\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"??????????????????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?????????????? \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"????????????????????\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"????????????????????\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"?????????? ?????????????? ?????? ???????????? ???? ???????????????????? ???? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\";\"}],\"message.copied\":[{\"type\":0,\"value\":\"??????????????????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"?????? ???? ?????????????? ???????????????? ???? ???????????????????? ????????????.\"}],\"message.failure\":[{\"type\":0,\"value\":\"???????? ???????? ????????????.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"???????? URL ???????????? ????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"???????? ???????????? ????????????????????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"?????????????????? ???????? ??????????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"?????????????????? ?????????? ???????????? / ?????????????? ??????????????????.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitor from \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" using \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" on \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"A new version of umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" is available!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"?????? ???????????????? ?????????????????? ????????????????.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"?????? ?????????? ???????????????? ???????????? ????????????????.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"?? ???????????? ?????? ??????????????.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"???? ?????? ???????????????????? ?????? \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"???????????????????????? ????????????????.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"???????? ?????????? ???? ?????????????????????? URL ?????? ???? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"?????? ???? ???????????????????????????? ???????????????????? ???????????????? ?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", ?????????????????????? ?????? ???????????????? ???????????? ???????? ?????????????? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ?????? ?????????????????? ??????.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"???????????????????????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ?????? ???????????????? ?????????????? ?????? ??????????????????????.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"?????????? ???????????? ??????????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"?????????????? ????????????????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"?????????????????????? ????????????????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"???????????????? ??????????????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"???? ??????????????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"???????? ????????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"??????????????????????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"?????????????????????? ??????????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"???????????????? ??????????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"????????????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"?????????????????? ????????????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"????????????????????\"}]}");

/***/ }),

/***/ "Tofa":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Kontoer\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Legg til konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Legg til nettsted\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alle\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle nettsteder\"}],\"label.back\":[{\"type\":0,\"value\":\"Tilbake\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Avvis\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Bytt passord\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Godkjenn passord\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopier til utklippstavle\"}],\"label.current-password\":[{\"type\":0,\"value\":\"N??v??rende passord\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Egendefinert utvalg\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datointervall\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standard datoperiode\"}],\"label.delete\":[{\"type\":0,\"value\":\"Slett\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Slett konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Slett nettstedet\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Avbryt\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domene\"}],\"label.edit\":[{\"type\":0,\"value\":\"Rediger\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Rediger konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Rediger nettsted\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktiver delings-URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ugyldig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ugyldig domene\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Siste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dager\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Siste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" timer\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Logget p?? som \"},{\"type\":1,\"value\":\"brukernavn\"}],\"label.login\":[{\"type\":0,\"value\":\"Logg inn\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logg ut\"}],\"label.more\":[{\"type\":0,\"value\":\"Mer\"}],\"label.name\":[{\"type\":0,\"value\":\"Navn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nytt passord\"}],\"label.password\":[{\"type\":0,\"value\":\"Passord\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Passordene er ikke like\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Sanntid\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Sanntidslogger\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Oppdater\"}],\"label.required\":[{\"type\":0,\"value\":\"P??krevd\"}],\"label.reset\":[{\"type\":0,\"value\":\"Nullstill\"}],\"label.save\":[{\"type\":0,\"value\":\"Lagre\"}],\"label.settings\":[{\"type\":0,\"value\":\"Innstillinger\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Del URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Enkelt dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Denne m??neden\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Denne uka\"}],\"label.this-year\":[{\"type\":0,\"value\":\"I ??r\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tidssone\"}],\"label.today\":[{\"type\":0,\"value\":\"I dag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sporingskode\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Ukjent\"}],\"label.username\":[{\"type\":0,\"value\":\"Brukernavn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vis detaljer\"}],\"label.websites\":[{\"type\":0,\"value\":\"Nettsteder\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"bes??kende\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"bes??kende\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" n??\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Er du sikker p?? at du vil slette \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopiert!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle tilknyttede data slettes ogs??.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Noe gikk galt.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"F?? delings-URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"F?? sporingskode\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"G?? til innstillinger\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Ugyldig brukernavn/passord.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Bes??kende fra \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" med \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" p?? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"En ny versjon av umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" er tilgjengelig!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Ingen data tilgjengelig.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Du har ikke satt opp noen nettsteder.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Side ikke funnet.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Drevet av \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Lagret!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Dette er den offentlige delings-URL-en for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"For ?? spore statistikk for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", plasser f??lgende kode i \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"-delen av nettstedet ditt.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriv inn \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" i boksen nedenfor for ?? bekrefte.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Handlinger\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Gjennomsnittlig bes??kelsestid\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Avvisningsfrekvens\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Nettlesere\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Land\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Stasjon??r\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"B??rbar\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiltelefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Nettbrett\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Enheter\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Arrangementer\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombinert\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Bare domene\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"R??\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operativsystemer\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sidevisninger\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sider\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referanser\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unike bes??kende\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visninger\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Bes??kende\"}]}");

/***/ }),

/***/ "U15p":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Akaun\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Tambah akaun\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Tambah laman web\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Pentadbir\"}],\"label.all\":[{\"type\":0,\"value\":\"Semua\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Semua peristiwa\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Semua laman web\"}],\"label.back\":[{\"type\":0,\"value\":\"Kembali\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Batal\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Tukar kata laluan\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Sahkan kata laluan\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Salin ke papan keratan\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Kata laluan semasa\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Julat khas\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Papan pemuka\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Julat tarikh\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Julat tarikh lalai\"}],\"label.delete\":[{\"type\":0,\"value\":\"Padam\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Padam akaun\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Padam laman web\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ketepikan\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domain\"}],\"label.edit\":[{\"type\":0,\"value\":\"Edit\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Edit akaun\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Edit laman web\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktifkan url berkongsi\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Tidak sah\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Domain tidak sah\"}],\"label.last-days\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hari lepas\"}],\"label.last-hours\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" jam lepas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Log masuk sebagai \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Log masuk\"}],\"label.logout\":[{\"type\":0,\"value\":\"Log keluar\"}],\"label.more\":[{\"type\":0,\"value\":\"Lebih banyak lagi\"}],\"label.name\":[{\"type\":0,\"value\":\"Nama\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Kata laluan baru\"}],\"label.password\":[{\"type\":0,\"value\":\"Kata laluan\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Kata laluan tidak sepadan\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Siaran langsung\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Log secara siaran langsung\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Muat semula\"}],\"label.required\":[{\"type\":0,\"value\":\"Diperlukan\"}],\"label.reset\":[{\"type\":0,\"value\":\"Tetapkan semula\"}],\"label.save\":[{\"type\":0,\"value\":\"Simpan\"}],\"label.settings\":[{\"type\":0,\"value\":\"Tetapan\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Kongsikan URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Satu hari\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Bulan ini\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Minggu ini\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Tahun ini\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zon masa\"}],\"label.today\":[{\"type\":0,\"value\":\"Hari ini\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Kod penjejakan\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Tidak diketahui\"}],\"label.username\":[{\"type\":0,\"value\":\"Nama pengguna\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Lihat butiran\"}],\"label.websites\":[{\"type\":0,\"value\":\"Laman web\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" semasa \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"pelawat\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"pelawat\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Pastikah anda ingin memadam \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Disalin!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Semua data yang berkaitan juga akan dihapuskan.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ada yang tidak kena.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Dapatkan URL berkongsi\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Dapatkan kod penjejakan\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Pergi ke tetapan\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Pengguna/kata laluan tidak betul.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Pelawat dari \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" mengguna \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" pada \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Versi baru umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" boleh didapati!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Tiada data yang boleh didapati.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Anda tidak ada sebarang laman web yang telah dikonfigurasikan.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Halaman tidak dijumpai.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Disediakan oleh \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Berjaya disimpan.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Ini adalah URL berkongsi untuk \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Untuk menjejak statistik bagi \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", letakkan kod berikut di bahagian \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" laman web anda.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Taip \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" di dalam kotak di bawah untuk pengesahan.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Aksi\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Purata tempoh masa lawatan\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Kadar lantunan\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Pelayar web\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Negara\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Telefon bimbit\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Peranti\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Peristiwa\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Digabungkan\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domain sahaja\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Mentah\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistem operasi\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Paparan halaman\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Halaman\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Perujuk\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Pelawat unik\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Lawatan\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Pelawat\"}]}");

/***/ }),

/***/ "Wwee":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Konten\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Konto hinzugf??gen\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Webseite hinzuf??gen\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alle\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Alle Ereignisse\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle Webseiten\"}],\"label.back\":[{\"type\":0,\"value\":\"Zur??ck\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Abbrechen\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Passwort ??ndern\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Passwort wiederholen\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"In die Zwischenablage kopieren\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Derzeitiges Passwort\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Benutzerdefinierter Bereich\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"??bersicht\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datumsbereich\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Voreingestellter Datumsbereich\"}],\"label.delete\":[{\"type\":0,\"value\":\"L??schen\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Konto l??schen\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Webseite l??schen\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Verwerfen\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domain\"}],\"label.edit\":[{\"type\":0,\"value\":\"Bearbeiten\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Konto bearbeiten\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Webseite bearbeiten\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Freigabe-URL aktivieren\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ung??ltig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ung??ltige Domain\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Letzten \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" Tage\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Letzten \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" Stunden\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Angemeldet als \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Anmelden\"}],\"label.logout\":[{\"type\":0,\"value\":\"Abmelden\"}],\"label.more\":[{\"type\":0,\"value\":\"Mehr\"}],\"label.name\":[{\"type\":0,\"value\":\"Name\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Neues Passwort\"}],\"label.password\":[{\"type\":0,\"value\":\"Passwort\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Passw??rter stimmen nicht ??berein\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Echtzeit\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Echtzeit-Protokoll\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Aktualisieren\"}],\"label.required\":[{\"type\":0,\"value\":\"Erforderlich\"}],\"label.reset\":[{\"type\":0,\"value\":\"Zur??cksetzen\"}],\"label.save\":[{\"type\":0,\"value\":\"Speichern\"}],\"label.settings\":[{\"type\":0,\"value\":\"Einstellungen\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Freigabe-URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Ein Tag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Diesen Monat\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Diese Woche\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Dieses Jahr\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zeitzone\"}],\"label.today\":[{\"type\":0,\"value\":\"Heute\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Tracking Kennung\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Unbekannt\"}],\"label.username\":[{\"type\":0,\"value\":\"Benutzername\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Details anzeigen\"}],\"label.websites\":[{\"type\":0,\"value\":\"Webseiten\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"aktiver Besucher\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"aktive Besucher\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Sind Sie sich sicher \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" zu l??schen?\"}],\"message.copied\":[{\"type\":0,\"value\":\"In Zwischenablage kopiert!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle zugeh??rigen Daten werden ebenfalls gel??scht.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Es ist ein Fehler aufgetreten.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Freigabe-URL abrufen\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Erstelle Tracking Kennung\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Zu den Einstellungen\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Falsches Passwort oder Benutzername.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Besucher aus \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" benutzt \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" auf \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Eine neue Version von umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ist verf??gbar!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Keine Daten vorhanden.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Es ist keine Webseite vorhanden.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Seite nicht gefunden.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Betrieben durch \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Erfolgreich gespeichert.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Dies ist die ??ffentliche URL zum Teilen f??r \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Um die Statistiken f??r \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" zu ??bermitteln, platzieren Sie bitte den folgenden Quelltext im \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ihrer Webseite.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Geben Sie \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" in das Feld unten ein um zu best??tigen.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Aktionen\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Durchschn. Besuchszeit\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Absprungrate\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browser\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"L??nder\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobiltelefon\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Ger??te\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Ereignisse\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombiniert\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Nur diese Domain\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Rohdaten\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Betriebssysteme\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Seitenaufrufe\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Seiten\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referrer\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Eindeutige Besucher\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Aufrufe\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Besucher\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Usuarios\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Agregar usuario\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Agregar sitio\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrador\"}],\"label.all\":[{\"type\":0,\"value\":\"Todos\"}],\"label.all-events\":[{\"type\":0,\"value\":\"Todos los eventos\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Todos los sitios\"}],\"label.back\":[{\"type\":0,\"value\":\"Atr??s\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancelar\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Cambiar contrase??a\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirmar contrase??a\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiar al portapapeles\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Contrase??a actual\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalo personalizado\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Panel de control\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Fechas\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalo por defecto\"}],\"label.delete\":[{\"type\":0,\"value\":\"Eliminar\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Eliminar usuario\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Eliminar sitio\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Ignorar\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dominio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editar\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editar usuario\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editar sitio\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Habilitar compartir URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Inv??lido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Dominio inv??lido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"??ltimos \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" d??as\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"??ltimas \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" horas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Sesi??n iniciada como \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Iniciar sesi??n\"}],\"label.logout\":[{\"type\":0,\"value\":\"Cerrar sesi??n\"}],\"label.more\":[{\"type\":0,\"value\":\"M??s\"}],\"label.name\":[{\"type\":0,\"value\":\"Nombre\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nueva contrase??a\"}],\"label.password\":[{\"type\":0,\"value\":\"Contrase??a\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Las contrase??as no coinciden\"}],\"label.profile\":[{\"type\":0,\"value\":\"Perfil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Tiempo real\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Registros en tiempo real\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Actualizar\"}],\"label.required\":[{\"type\":0,\"value\":\"Requerido\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reiniciar\"}],\"label.save\":[{\"type\":0,\"value\":\"Guardar\"}],\"label.settings\":[{\"type\":0,\"value\":\"Configuraciones\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Compartir URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Dia\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Este mes\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Esta semana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Este a??o\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zona horaria\"}],\"label.today\":[{\"type\":0,\"value\":\"Hoy\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"C??digo de rastreo\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Desconocida\"}],\"label.username\":[{\"type\":0,\"value\":\"Nombre de usuario\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Ver detalles\"}],\"label.websites\":[{\"type\":0,\"value\":\"Sitios\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"activo\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"activos\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"??Est??s seguro(a) de querer eliminar \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiado!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Toda la informaci??n relacionada ser?? eliminada.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Algo fall??.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obtener URL para compartir\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obtener c??digo de rastreo\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ir a la configuraci??n\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Nombre de usuario o contrase??a incorrectos.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitante desde \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" usando \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" en \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Una nueva vers??on de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" esta disponible!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Sin informaci??n disponible.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"No tienes ning??n sitio configurado.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Page not found\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Desarrollado con \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Guardado exitosamente.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Esta es la URL compartida p??blicamente para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Para registrar estad??sticas para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", copia el siguiente c??digo dentro de la etiqueta \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" de tu sitio.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Escribe \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" abajo para confirmar.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Acciones\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tiempo promedio de visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Porcentaje de rebote\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navegadores\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Pa??ses\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobile\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tableta\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivos\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventos\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinado\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"??nicamente dominio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Personalizado\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemas operativos\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Vistas\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"P??ginas\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referentes\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitantes ??nicos\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Vistas\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitantes\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"???????????????? ????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"???????????? ?????????????????? ??????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"???????????? ????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"??????????????????????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-events\":[{\"type\":0,\"value\":\"?????? ??????????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"?????? ??????????\"}],\"label.back\":[{\"type\":0,\"value\":\"??????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"?????????????? ????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"?????????????????????? ????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"?????????????????? ???? ???????????? ????????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"???????????????? ????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"?????????????????? ????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"???????????????????????? ????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"???????????????? ??????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????????????? ?????? ???? ??????????????????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"???????????????? ?????????????????? ??????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"???????????????? ????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"??????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"????????????????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"???????????????????? ?????????????????? ??????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"???????????????????? ????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"?????????????????? ???????????????? ????????????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"??????????????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"?????????????????????? ??????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"?????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ????????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"?????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????????\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"???? ?????????????? ???? \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"????????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"??????????\"}],\"label.more\":[{\"type\":0,\"value\":\"????????????\"}],\"label.name\":[{\"type\":0,\"value\":\"????'??\"}],\"label.new-password\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"???????????? ???? ??????????????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"?? ?????????????????? ????????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"???????? ?? ?????????????????? ????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.required\":[{\"type\":0,\"value\":\"????????'????????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.save\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"???????????????????? ??????????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"???????? ????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"?????????? ??????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"?????????? ????????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"?????????????? ????????\"}],\"label.today\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"?????? ?????? ????????????????????????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.username\":[{\"type\":0,\"value\":\"????'?? ??????????????????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"?????????????????????? ????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"??????????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???????????????? ????????????????????????\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"???? ????????????????, ???? ?????????????? ???????????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"??????????????????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"?????? ??????'?????????? ???????? ???????????? ???????????????? ??????????.\"}],\"message.failure\":[{\"type\":0,\"value\":\"???????? ?????????? ???? ??????.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"???????????????? ???????????????? ??????????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"???????????????? ?????? ?????? ????????????????????????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"?????????????? ???? ??????????????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"?????????????? ????'?? ?????????????????????? ?????? ????????????.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"???????????????????? ?? \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ???????????????????????????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ???? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"???????? ???????????? umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ????????????????!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"?????????? ??????????.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"?? ?????? ?????????? ???????????????????????? ????????????.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"???????????????? ???? ????????????????.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"???? ???????? \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"?????????????????? ??????????????.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"???? ???????????????? ?????????????????? ?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"?????? ?????????????????????????????? ???????????????????? ?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", ???????????????????? ?????????????????? ?????? ?? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ???????????? ???????????? ??????????.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"?????????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ?? ???????? ?????????? ?????? ??????????????????????.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"???????????????? ?????? ????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"???????????????? ????????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"???????????????????? ????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"????'????????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"???????? ??????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"???????? ????????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"???????????????????? ??????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"?????????????????? ????????????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"?????????????????? ??????????????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"??????????????????????\"}]}");

/***/ }),

/***/ "hQbz":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Web??????????????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"?????????\"}],\"label.all\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"????????????Web?????????\"}],\"label.back\":[{\"type\":0,\"value\":\"??????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"?????????????????????????????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"????????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"??????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Web??????????????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"????????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"????????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"??????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Web??????????????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"?????????????????????????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"??????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"??????\"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\"??????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"??????\"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\"??????\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\"??????????????????\"}],\"label.login\":[{\"type\":0,\"value\":\"????????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.more\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.name\":[{\"type\":0,\"value\":\"??????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.password\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"????????????????????????????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"??????\"}],\"label.required\":[{\"type\":0,\"value\":\"??????\"}],\"label.reset\":[{\"type\":0,\"value\":\"????????????\"}],\"label.save\":[{\"type\":0,\"value\":\"??????\"}],\"label.settings\":[{\"type\":0,\"value\":\"??????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"????????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"??????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.today\":[{\"type\":0,\"value\":\"??????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"??????\"}],\"label.username\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"Web?????????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\"????????????????????????\"}],\"message.confirm-delete\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"??????????????????????????????????????????\"}],\"message.copied\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"?????????????????????????????????????????????????????????\"}],\"message.failure\":[{\"type\":0,\"value\":\"??????????????????????????????\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"????????????????????????????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"???????????????/?????????????????????????????????????????????\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\"???\"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\"??????\"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\"?????????????????????\"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\"??????????????????\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"???????????????????????????\"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\"???????????????????????????\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"??????????????????????????????\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Web??????????????????????????????????????????\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"????????????????????????????????????\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"????????????????????? \"},{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" ??????????????????????????????\"}],\"message.save-success\":[{\"type\":0,\"value\":\"?????????????????????????????????\"}],\"message.share-url\":[{\"type\":0,\"value\":\"????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ???????????????????????????\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"???????????????????????????????????????????????????????????????Web????????????\"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"?????????????????????????????????????????????\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"???????????????????????????????????????\"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\"??????????????????????????????\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"???\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"?????????PC\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"OS\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"????????????\"}]}");

/***/ }),

/***/ "iOjB":
/***/ (function(module, exports) {



/***/ }),

/***/ "iQzV":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"??????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"????????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"????????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"?????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"????????????\"}],\"label.back\":[{\"type\":0,\"value\":\"??????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"??????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"??????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"?????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"?????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"??????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"????????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"??????\"}],\"label.domain\":[{\"type\":0,\"value\":\"??????\"}],\"label.edit\":[{\"type\":0,\"value\":\"??????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"????????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"????????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"?????????: \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"??????\"}],\"label.logout\":[{\"type\":0,\"value\":\"??????\"}],\"label.more\":[{\"type\":0,\"value\":\"??????\"}],\"label.name\":[{\"type\":0,\"value\":\"??????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"?????????\"}],\"label.password\":[{\"type\":0,\"value\":\"??????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"??????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"????????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"??????\"}],\"label.required\":[{\"type\":0,\"value\":\"??????\"}],\"label.reset\":[{\"type\":0,\"value\":\"??????\"}],\"label.save\":[{\"type\":0,\"value\":\"??????\"}],\"label.settings\":[{\"type\":0,\"value\":\"??????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"??????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"??????\"}],\"label.today\":[{\"type\":0,\"value\":\"??????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"??????\"}],\"label.username\":[{\"type\":0,\"value\":\"?????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"??????\"}],\"message.active-users\":[{\"type\":0,\"value\":\"???????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"?????????????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ??????\"}],\"message.copied\":[{\"type\":0,\"value\":\"???????????????\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"????????????????????????????????????\"}],\"message.failure\":[{\"type\":0,\"value\":\"???????????????\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"??????????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"??????????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"?????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"??????????????????????????????\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ?????????????????? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" ??? \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" ????????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ????????????????????????\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami ???????????? \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ????????????\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"??????????????????\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"?????????????????????????????????\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"??????????????????\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"??? \"},{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" ????????????\"}],\"message.save-success\":[{\"type\":0,\"value\":\"???????????????\"}],\"message.share-url\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ??????????????????\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"???????????????????????????????????? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ??????????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ????????????\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"???????????????????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ??????????????????\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"???????????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"??????\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Kontoer\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Tilf??j konto\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Tilf??j hjemmeside\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"Alle\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Alle websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Tilbage\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Afvis\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Skift adgangskode\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Godkendt adgangskode\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Kopier til udklipsholder\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Nuv??rende adgangskode\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Tilpasset interval\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Betjeningspanel\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Datointerval\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Standard datointerval\"}],\"label.delete\":[{\"type\":0,\"value\":\"Slet\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Slet konto\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Slet hjemmeside\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Afvis\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dom??ne\"}],\"label.edit\":[{\"type\":0,\"value\":\"Rediger\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Rediger konto\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Rediger hjemmeside\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Aktiv??r delings-URL\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ugyldig\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ugyldigt dom??ne\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Sidste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dage\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Sidste \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" timer\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Loggede ind som \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Log ind\"}],\"label.logout\":[{\"type\":0,\"value\":\"Log ud\"}],\"label.more\":[{\"type\":0,\"value\":\"Mere\"}],\"label.name\":[{\"type\":0,\"value\":\"Navn\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Ny adgangskode\"}],\"label.password\":[{\"type\":0,\"value\":\"Adgangskode\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Adgangskoder matcher ikke\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtid\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtid logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Opdater\"}],\"label.required\":[{\"type\":0,\"value\":\"P??kr??vet\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.save\":[{\"type\":0,\"value\":\"Gem\"}],\"label.settings\":[{\"type\":0,\"value\":\"Indstillinger\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Del URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Enkelt dag\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Denne m??ned\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Denne uge\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Dette ??r\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Tidszone\"}],\"label.today\":[{\"type\":0,\"value\":\"Idag\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Sporingskode\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Ukendt\"}],\"label.username\":[{\"type\":0,\"value\":\"Brugernavn\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Vis detajler\"}],\"label.websites\":[{\"type\":0,\"value\":\"Hjemmesider\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" nuv??rende \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"bruger\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"brugere\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Er du sikker p?? at du vil slette \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Kopieret!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Alle tilknyttede data slettes ogs??.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Noget gik galt.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"F?? delings-URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"F?? sporingskode\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"G?? til betjeningspanel\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Ugyldigt brugernavn/adgangskode.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Bes??gende fra \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" bruger \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" p?? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Ny udgave af Umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" er tilg??ngelig!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Ingen data tilg??ngelig.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Du har ikke konfigureret nogen websteder.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Side ikke fundet.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Drevet af \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Gemt!\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Dette er den offentligt delings-URL til \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"For at spore statistik for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" skal du placere f??lgende kode i \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" sektionen p?? dit websted.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Skriv \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" i boksen nedenfor, for at bekr??fte.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Handlinger\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Gennemsnitlig bes??gstid\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Afvisningsprocent\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsere\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Lande\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Enheder\"}],\"metrics.events\":[{\"type\":0,\"value\":\"H??ndelser\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Kombineret\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Kun dom??ne\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"R??\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operativsystemer\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sidevisninger\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sider\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Henvisninger\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unikke bes??gende\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visninger\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Bes??gende\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"??????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"????????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"????????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"?????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"????????????\"}],\"label.back\":[{\"type\":0,\"value\":\"??????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"??????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"??????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"??????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"??????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"????????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"??????\"}],\"label.domain\":[{\"type\":0,\"value\":\"??????\"}],\"label.edit\":[{\"type\":0,\"value\":\"??????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"????????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"????????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ??????\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"?????????: \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"??????\"}],\"label.logout\":[{\"type\":0,\"value\":\"??????\"}],\"label.more\":[{\"type\":0,\"value\":\"??????\"}],\"label.name\":[{\"type\":0,\"value\":\"??????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"?????????\"}],\"label.password\":[{\"type\":0,\"value\":\"??????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"??????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"????????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"??????\"}],\"label.required\":[{\"type\":0,\"value\":\"??????\"}],\"label.reset\":[{\"type\":0,\"value\":\"??????\"}],\"label.save\":[{\"type\":0,\"value\":\"??????\"}],\"label.settings\":[{\"type\":0,\"value\":\"??????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"??????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"??????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"??????\"}],\"label.today\":[{\"type\":0,\"value\":\"??????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"??????\"}],\"label.username\":[{\"type\":0,\"value\":\"?????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"??????\"}],\"message.active-users\":[{\"type\":0,\"value\":\"???????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"??????????????????\"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"????\"}],\"message.copied\":[{\"type\":0,\"value\":\"????????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"?????????????????????????????????.\"}],\"message.failure\":[{\"type\":0,\"value\":\"????????????.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"??????????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"??????????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"?????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"???????????????????????????.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"??? \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ?????????????????? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" ??? \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" ????????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ????????????.\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami ???????????? \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ????????????\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"???????????????.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"???????????????????????????.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"???????????????.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"????????????.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ???????????????.\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"???????????????????????????????????????\"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"???????????????\"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?????????.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"?????????????????????\"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\"??????\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"??????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"????????????\"}]}");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "s1yH":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"?????????????????? ?????????????????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"??????????????????????????????????????? ?????????????????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"???????????????????????????????????? ?????????????????????\"}],\"label.all\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.all-events\":[{\"type\":0,\"value\":\"????????????????????? ????????????????????????????????????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"????????????????????? ??????????????????????????????????????????\"}],\"label.back\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"??????????????????????????????????????? ??????????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"???????????????????????????????????? ???????????????????????????????????????????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"???????????????????????????????????????????????? ???????????????????????????????????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"???????????????????????? ??????????????????????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"??????????????????????????? ??????????????????????????????????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"???????????? ??????????????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"?????????????????????????????? ???????????? ??????????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"?????????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"?????????????????? ?????????????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"????????????????????????????????? ??????????????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"?????? ??????????????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"?????????????????????????????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"???????????????????????? ????????????????????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"??????????????????????????????????????? ????????????????????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"?????? ???????????????????????? ????????????????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"??????????????? ?????? ??????????????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"????????????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?????????????????????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"????????????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?????????\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\" ???????????????????????????????????????????????????\"}],\"label.login\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.more\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.name\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"??????????????? ?????????????????????????????????\"}],\"label.password\":[{\"type\":0,\"value\":\"?????????????????????????????????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"????????????????????????????????????????????? ???????????????????????????????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"???????????????????????? ????????????????????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"????????????????????????????????????\"}],\"label.required\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.save\":[{\"type\":0,\"value\":\"????????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"??????????????????????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"????????????????????? ???????????????????????? ????????????????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"????????? ????????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"???????????? ???????????????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"???????????? ???????????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"???????????? ??????????????????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"????????? ?????????????????????\"}],\"label.today\":[{\"type\":0,\"value\":\"???????????????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"????????????????????????????????? ????????????????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"label.username\":[{\"type\":0,\"value\":\"??????????????????????????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"??????????????????????????? ????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"????????????????????????????????????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???????????????????????? \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"???????????????\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"????????????\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"????????????????????? ??????????????????????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ??????????????? ????????????????????????????????????????????????????\"}],\"message.copied\":[{\"type\":0,\"value\":\"???????????????????????????????????????????????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"?????????????????????????????? ??????????????? ?????????????????? ????????????????????????????????????.\"}],\"message.failure\":[{\"type\":0,\"value\":\"???????????? ???????????? ???????????????????????????????????????.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"?????? ???????????????????????? ????????? ???????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"????????????????????????????????? ???????????????????????????????????? ???????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"???????????????????????????????????????????????? ???????????????????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"??????????????? ?????????????????????????????? / ??????????????????????????????.\"}],\"message.log.visitor\":[{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\"???????????? ????????????????????? ????????????????????????????????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ??? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\"???????????? ???????????????????????????????????????????????????\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ????????? ??????????????? ????????????????????? ??????????????????????????????!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"???????????? ????????????????????? ???????????????????????????????????????.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"??????????????????????????? ???????????? ?????????????????????????????????????????? ?????????????????????????????????????????????????????????.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"?????????????????? ???????????????????????????????????????.\"}],\"message.powered-by\":[{\"type\":1,\"value\":\"name\"},{\"type\":0,\"value\":\" ????????? ?????????????????????????????????????????????\"}],\"message.save-success\":[{\"type\":0,\"value\":\"????????????????????????????????? ?????????????????????????????????????????????.\"}],\"message.share-url\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" ????????? ???????????????????????? ????????????????????? ????????????????????? ??????????????????.\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"??????????????? ??????????????????????????????????????????????????? ??????????????????????????????, \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\"?????? ??????????????????????????? ?????????????????????????????? ???????????????????????????.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"??????????????????????????????????????? ???????????? ???????????? ?????????????????????????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ?????? ???????????????????????? ???????????????.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"?????????????????? ??????????????? ???????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"????????????????????? ?????????????????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"?????????????????????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"???????????? ???????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"??????????????????????????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"????????????????????? ???????????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"??????????????????????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"????????????????????????????????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"?????? ?????????????????? ?????????????????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"?????????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"??????????????? ???????????????????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"???????????? ???????????????????????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"??????????????????????????????????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"??????????????????????????? ??????????????????????????????????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"???????????????????????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"??????????????????????????????????????????\"}]}");

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

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"??????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"?????????? ??????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"???? ????????????\"}],\"label.back\":[{\"type\":0,\"value\":\"????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"??????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"?????????? ??????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"?????????? ??????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"??????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"???????? ??????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"???????? ??????????????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????? ?????????????? ???????????? ????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"????????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"???????? ??????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"???????? ??????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"????????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"????????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"??????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"?????????? ??????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"?????????? ??????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"?????????? URL ??????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"???? ????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"???????????? ???? ????????\"}],\"label.last-days\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???????? ??????????????\"}],\"label.last-hours\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ???????? ??????????????\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"?????????? ??-\"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.more\":[{\"type\":0,\"value\":\"??????\"}],\"label.name\":[{\"type\":0,\"value\":\"????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"?????????? ????????\"}],\"label.password\":[{\"type\":0,\"value\":\"??????????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"?????????????? ???? ????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"?????? ??????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"?????????? - ?????? ??????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"??????????\"}],\"label.required\":[{\"type\":0,\"value\":\"????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"??????????\"}],\"label.save\":[{\"type\":0,\"value\":\"??????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"?????????? URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"?????? ????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"??????????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"??????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"????????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"???????? ??????\"}],\"label.today\":[{\"type\":0,\"value\":\"????????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"?????? ????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"???? ????????\"}],\"label.username\":[{\"type\":0,\"value\":\"???? ??????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"??????????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?????????????? \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"????????\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"????????????\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"?????? ???????? ?????????? ???? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"??????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"???? ?????????? ???????????? ??????????\"}],\"message.failure\":[{\"type\":0,\"value\":\"???????? ??????????\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"???????? URL ??????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"???????? ?????? ????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"??????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"???? ?????????? ???? ?????????? ???? ????????????\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"???????? ???????????? \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ???????????? ???????????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ??-\"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"???????? ???????? ???? Umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" ??????????!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"?????? ???????? ????????\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"???? ?????????????? ??????????\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"???? ???? ????????\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"???????? ????????????\"}],\"message.share-url\":[{\"type\":0,\"value\":\"?????? URL ???????????? ???????? \"},{\"type\":1,\"value\":\"target\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"???? ???????????? ???? ???????? ?????? ?????????? ??-\"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ???? ????????\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"???????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ?????????? ???? ?????? ????????\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"?????? ?????????? ??????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bounce rate\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"???????????? ????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"???????????? ??????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"?????????? ??????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"???????????? ????????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"??????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"????????????\"}]}");

/***/ }),

/***/ "wXnG":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Contas\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Adicionar conta\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Adicionar site\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrador\"}],\"label.all\":[{\"type\":0,\"value\":\"Todos\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"Todos os sites\"}],\"label.back\":[{\"type\":0,\"value\":\"Voltar\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancelar\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Alterar a senha\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirme a nova senha\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copiar para a ??rea de transfer??ncia\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Senha atual\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Intervalo personalizado\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Painel\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Intervalo de datas\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Intervalo de datas predefinido\"}],\"label.delete\":[{\"type\":0,\"value\":\"Remover\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Remover conta\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Remover site\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Dispensar\"}],\"label.domain\":[{\"type\":0,\"value\":\"Dom??nio\"}],\"label.edit\":[{\"type\":0,\"value\":\"Editar\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Editar conta\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Editar site\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Ativar link de compartilhamento\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Inv??lido\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Dom??nio inv??lido\"}],\"label.last-days\":[{\"type\":0,\"value\":\"??ltimos \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" dias\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"??ltimas \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" horas\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Sess??o iniciada como \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Iniciar sess??o\"}],\"label.logout\":[{\"type\":0,\"value\":\"Sair\"}],\"label.more\":[{\"type\":0,\"value\":\"Mais\"}],\"label.name\":[{\"type\":0,\"value\":\"Nome\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Nova senha\"}],\"label.password\":[{\"type\":0,\"value\":\"Senha\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"As senhas n??o correspondem\"}],\"label.profile\":[{\"type\":0,\"value\":\"Perfil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Tempo real\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Relat??rio em tempo real\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Atualizar\"}],\"label.required\":[{\"type\":0,\"value\":\"Obrigat??rio\"}],\"label.reset\":[{\"type\":0,\"value\":\"Redefinir\"}],\"label.save\":[{\"type\":0,\"value\":\"Salvar\"}],\"label.settings\":[{\"type\":0,\"value\":\"Configura????es\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Link de compartilhamento\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Dia espec??fico\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Este m??s\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Esta semana\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Este ano\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Fuso hor??rio\"}],\"label.today\":[{\"type\":0,\"value\":\"Hoje\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"C??digo de rastreamento\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Desconhecido\"}],\"label.username\":[{\"type\":0,\"value\":\"Nome de usu??rio\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Ver detalhes\"}],\"label.websites\":[{\"type\":0,\"value\":\"Sites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitante\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitantes\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"},{\"type\":0,\"value\":\" neste momento\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Deseja realmente remover \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copiado!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"Todos os dados associados tamb??m ser??o eliminados.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Ocorreu um erro.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Obter link de compartilhamento\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Obter c??digo de rastreamento\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ir para as configura????es\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"O nome de usu??rio e/ou senha est?? incorreto.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitante de \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" usando \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" no \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"os\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"Uma nova vers??o de umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" est?? dispon??vel!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Sem dados dispon??veis.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Nenhum site foi configurado ainda.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"P??gina n??o encontrada.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Distribu??do por \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Salvo com sucesso.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"Este ?? o link p??blico de compartilhamento para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"Para gerar estat??stica para \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", coloque o seguinte c??digo no \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" do html do seu site.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Escreva \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" abaixo para continuar.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"A????es\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Tempo m??dio da visita\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Taxa de rejei????o\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Navegadores\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Pa??ses\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Computador\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Notebook\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Celular\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Dispositivos\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Eventos\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combinado\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Apenas dom??nio\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Dados brutos\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Sistemas operacionais\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Visualiza????es de p??gina\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"P??ginas\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Refer??ncias\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Visitantes ??nicos\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Visualiza????es\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitantes\"}]}");

/***/ }),

/***/ "xdMv":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.add-account\":[{\"type\":0,\"value\":\"???????????????? ??????????????\"}],\"label.add-website\":[{\"type\":0,\"value\":\"???????????????? ????????\"}],\"label.administrator\":[{\"type\":0,\"value\":\"??????????????????????????\"}],\"label.all\":[{\"type\":0,\"value\":\"??????\"}],\"label.all-events\":[{\"type\":0,\"value\":\"?????? ??????????????\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"?????? ??????????\"}],\"label.back\":[{\"type\":0,\"value\":\"??????????\"}],\"label.cancel\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.change-password\":[{\"type\":0,\"value\":\"???????????????? ????????????\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"?????????????????????? ????????????\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"?????????????????????? ?? ?????????? ????????????\"}],\"label.current-password\":[{\"type\":0,\"value\":\"?????????????? ????????????\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"???????????? ????????????\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"???????????????????????????? ????????????\"}],\"label.date-range\":[{\"type\":0,\"value\":\"???????????????? ??????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"???????????????? ?????? ????-??????????????????\"}],\"label.delete\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"?????????????? ??????????????\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"?????????????? ????????\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.domain\":[{\"type\":0,\"value\":\"??????????\"}],\"label.edit\":[{\"type\":0,\"value\":\"??????????????????????????\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"?????????????????????????? ??????????????\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"?????????????????????????? ????????\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"?????????????????? ???????????????? ??????????????\"}],\"label.invalid\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"???????????????????????? ??????????\"}],\"label.last-days\":[{\"type\":0,\"value\":\"?????????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ????????\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"?????????????????? \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ????????\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"???? ?????????? ?????? \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"??????????\"}],\"label.logout\":[{\"type\":0,\"value\":\"??????????\"}],\"label.more\":[{\"type\":0,\"value\":\"????????????\"}],\"label.name\":[{\"type\":0,\"value\":\"??????\"}],\"label.new-password\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"label.password\":[{\"type\":0,\"value\":\"????????????\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"???????????? ???? ??????????????????\"}],\"label.profile\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.realtime\":[{\"type\":0,\"value\":\"???????????????? ??????????\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"???????? ?? ???????????????? ??????????????\"}],\"label.refresh\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.required\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"label.reset\":[{\"type\":0,\"value\":\"????????????????\"}],\"label.save\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.settings\":[{\"type\":0,\"value\":\"??????????????????\"}],\"label.share-url\":[{\"type\":0,\"value\":\"???????????????????? ??????????????\"}],\"label.single-day\":[{\"type\":0,\"value\":\"???????? ????????\"}],\"label.this-month\":[{\"type\":0,\"value\":\"???????? ??????????\"}],\"label.this-week\":[{\"type\":0,\"value\":\"?????? ????????????\"}],\"label.this-year\":[{\"type\":0,\"value\":\"???????? ??????\"}],\"label.timezone\":[{\"type\":0,\"value\":\"?????????????? ????????\"}],\"label.today\":[{\"type\":0,\"value\":\"??????????????\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"?????? ????????????????????????\"}],\"label.unknown\":[{\"type\":0,\"value\":\"????????????????????\"}],\"label.username\":[{\"type\":0,\"value\":\"?????? ????????????????????????\"}],\"label.view-details\":[{\"type\":0,\"value\":\"???????????????????? ????????????\"}],\"label.websites\":[{\"type\":0,\"value\":\"??????????\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" ?????????????? ??????????????????????\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"???? ??????????????, ?????? ???????????? ?????????????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.copied\":[{\"type\":0,\"value\":\"??????????????????????!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"?????? ?????????????????? ???????????? ?????????? ?????????? ??????????????.\"}],\"message.failure\":[{\"type\":0,\"value\":\"??????-???? ?????????? ???? ??????.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"???????????????? ?????????????????? ????????????\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"???????????????? ?????? ????????????????????????\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"?????????????? ?? ????????????????????\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"???????????????? ?????? ????????????????????????/????????????.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"???????????????????? ???? \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" ?????????????????? \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" ???? \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"???????????????? ?????????? ???????????? umami \"},{\"type\":1,\"value\":\"version\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"?????? ????????????.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"?? ?????? ?????? ?????????????????????? ????????????.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"???????????????? ???? ??????????????.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"???? ???????????? \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"?????????????? ??????????????????.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"?????? ?????????????????? ???????????? ?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"?????????? ?????????????????????? ???????????????????? ?????? \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", ?????????????????? ?????????????????? ?????? ?? ???????????? \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" ???????????? ??????????.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"???????????????? \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" ?? ???????? ????????, ?????????? ??????????????????????.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"?????????????? ?????????? ??????????????????\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"????????????\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"???????????????????? ??????????????????\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"????????????????????\"}],\"metrics.events\":[{\"type\":0,\"value\":\"??????????????\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"????????????????????????\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"???????????? ??????????\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"?????????? ????????????\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"???????????????????????? ??????????????\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"?????????????????? ??????????????\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"????????????????\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"???????????????????? ????????????????????\"}],\"metrics.views\":[{\"type\":0,\"value\":\"??????????????????\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"????????????????????\"}]}");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yl8m":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Hesaplar\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Hesap ekle\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Web sitesi ekle\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Y??netici\"}],\"label.all\":[{\"type\":0,\"value\":\"T??m??\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"T??m web siteleri\"}],\"label.back\":[{\"type\":0,\"value\":\"Geri\"}],\"label.cancel\":[{\"type\":0,\"value\":\"??ptal\"}],\"label.change-password\":[{\"type\":0,\"value\":\"??ifre de??i??tir\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Parolay?? onayla\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Panoya kopyala\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Mevcut parola\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"??zelle??tirilmi?? aral??k\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Kontrol Paneli\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Tarih aral??????\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Varsay??lan tarih aral??????\"}],\"label.delete\":[{\"type\":0,\"value\":\"Sil\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Hesab?? sil\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Web sitesini sil\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Reddet\"}],\"label.domain\":[{\"type\":0,\"value\":\"Alan ad??\"}],\"label.edit\":[{\"type\":0,\"value\":\"D??zenle\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Hesab?? d??zenle\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Web sitesini d??zenle\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Anonim payla????m URL'i aktif\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Ge??ersiz\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Ge??ersiz alan ad??\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Son \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" g??n\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Son \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" saat\"}],\"label.logged-in-as\":[{\"type\":1,\"value\":\"username\"},{\"type\":0,\"value\":\" olarak giri?? yap??ld??.\"}],\"label.login\":[{\"type\":0,\"value\":\"Giri?? Yap\"}],\"label.logout\":[{\"type\":0,\"value\":\"????k???? Yap\"}],\"label.more\":[{\"type\":0,\"value\":\"Detayl?? g??ster\"}],\"label.name\":[{\"type\":0,\"value\":\"??sim\"}],\"label.new-password\":[{\"type\":0,\"value\":\"Yeni parola\"}],\"label.password\":[{\"type\":0,\"value\":\"Parola\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Parolalar uyu??muyor\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profil\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Ger??ek Zamanl??\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Ger??ek zamanl?? kay??tlar\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Yenile\"}],\"label.required\":[{\"type\":0,\"value\":\"Zorunlu alan\"}],\"label.reset\":[{\"type\":0,\"value\":\"S??f??rla\"}],\"label.save\":[{\"type\":0,\"value\":\"Kaydet\"}],\"label.settings\":[{\"type\":0,\"value\":\"Ayarlar\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Payla????m adresi\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Tekil g??n\"}],\"label.this-month\":[{\"type\":0,\"value\":\"Bu ay\"}],\"label.this-week\":[{\"type\":0,\"value\":\"Bu hafta\"}],\"label.this-year\":[{\"type\":0,\"value\":\"Bu y??l\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Zaman dilimi\"}],\"label.today\":[{\"type\":0,\"value\":\"Bug??n\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"??zleme kodu\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Bilinmeyen\"}],\"label.username\":[{\"type\":0,\"value\":\"Kullan??c?? ad??\"}],\"label.view-details\":[{\"type\":0,\"value\":\"Detay?? incele\"}],\"label.websites\":[{\"type\":0,\"value\":\"Web siteleri\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" aktif ziyaret??i\"}],\"message.confirm-delete\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" kayd??n?? silmek istedi??inizden emin misiniz?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Panoya kopyaland??!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"??li??kili t??m veriler de  silinecektir.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Bir ??eyler ters gitti!\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Payla????m adresini al\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"??zleme kodunu al\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Ayarlara git\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Hatal?? kullan??c?? ad?? ya da parola.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Yeni ziyaret??i: \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\", \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\", \"},{\"type\":1,\"value\":\"device\"},{\"type\":0,\"value\":\", \"},{\"type\":1,\"value\":\"browser\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"umami'nin yeni bir versiyonu (\"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\") mevcut!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"Hen??z hi?? veri yok.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"Hen??z hi?? web sitesi tan??mlamad??n??z\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Sayfa bulunamad??.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Sa??lay??c??: \"},{\"type\":1,\"value\":\"name\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Ba??ar??yla kaydedildi.\"}],\"message.share-url\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" i??in kullan??labilir anonim payla????m adresidir.\"}],\"message.track-stats\":[{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\" alan?? ad?? istatistiklerini takip etmek i??in, a??a????daki kodu web sitenizin \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" blo??una yerle??tirin.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Onaylamak i??in kutuya \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" yaz??n.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Hareketler\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Ortalama ziyaret s??resi\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"????kma oran??\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Taray??c??lar\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"??lkeler\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Masa??st??\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Diz??st??\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobil Cihaz\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Cihazlar\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Olaylar\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Birle??ik\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Yaln??zca alan ad??\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Ham\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"????letim sistemi\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Sayfa g??r??n??m??\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Sayfalar\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Y??nlendirenler\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Tekil kullan??c??\"}],\"metrics.views\":[{\"type\":0,\"value\":\"G??r??nt??leme\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Ziyaret??i\"}]}");

/***/ })

/******/ });