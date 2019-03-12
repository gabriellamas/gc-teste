/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    'use strict'\r\n\r\n    fetch('https://api.myjson.com/bins/sqwaq', {\r\n        method: 'GET'\r\n    }).then(response => {\r\n        response.json().then(data => {\r\n            buildScreen(data);\r\n        });\r\n    }).catch(function (err) {\r\n        console.error(err);\r\n    });\r\n\r\n    function buildScreen(data) {\r\n        buildHeader(data)\r\n        buildForFunArea(data)\r\n        buildLobbyAndRankedArea(data)\r\n        buildfooter(data)\r\n    }\r\n\r\n    function buildHeader(data) {\r\n        console.log(data)\r\n\r\n        const userName = document.querySelector('.gc-name');\r\n        const userId = document.querySelector('.gc-id');\r\n        const progressBar = document.querySelector('.progress-bar');\r\n\r\n        let pinLevelCasual = document.querySelector('.pin-level-casual')\r\n        let pinLevelCOmpetitive = document.querySelector('.pin-level-competitive')\r\n        let pinLevelAmateur = document.querySelector('.pin-level-amateur')\r\n        let pinLevelPro = document.querySelector('.pin-level-pro')\r\n\r\n        let featuredMedal = document.querySelector('.-featured-medal')\r\n        let position = document.querySelector('.-position')\r\n        let patent = document.querySelector('.-patent')\r\n        let level = document.querySelector('.-level')\r\n        //let subscription = document.querySelector('.-subscription')\r\n\r\n        userName.textContent = `GC.${data.user.name}`\r\n        userId.textContent = `GC ID: ${data.user.id}`;\r\n\r\n        featuredMedal.src = data.user.featured_medal.image;\r\n        position.src = data.user.game_position.image;\r\n        patent.src = data.user.patent;\r\n        level.textContent = data.user.level;\r\n        \r\n\r\n        if (data.user.expertise == 'casual') {\r\n            progressBar.style.cssText = \"width:25%;\"\r\n            pinLevelCasual.src = 'img/pin-level-blue.png'\r\n\r\n        } else if (data.user.expertise == 'competitive') {\r\n            progressBar.style.cssText = \"width:50%;\"\r\n            pinLevelCasual.src = 'img/pin-level-blue.png'\r\n            pinLevelCOmpetitive.src = 'img/pin-level-blue.png'\r\n\r\n        } else if (data.user.expertise == 'amateur') {\r\n            progressBar.style.cssText = \"width:75%;\"\r\n            pinLevelCasual.src = 'img/pin-level-blue.png'\r\n            pinLevelCOmpetitive.src = 'img/pin-level-blue.png'\r\n            pinLevelAmateur.src = 'img/pin-level-blue.png'\r\n\r\n        } else if (data.user.expertise == 'pro') {\r\n            progressBar.style.cssText = \"width:100%;\"\r\n            pinLevelCasual.src = 'img/pin-level-blue.png'\r\n            pinLevelCOmpetitive.src = 'img/pin-level-blue.png'\r\n            pinLevelAmateur.src = 'img/pin-level-blue.png'\r\n            pinLevelPro.src = 'img/pin-level-blue.png'\r\n        }      \r\n\r\n    }\r\n\r\n    function buildForFunArea(data) {\r\n\r\n        const imageForFunTitle = document.querySelector('.image-forfun-title');\r\n        const titleForFunArea = document.querySelector('.title-forfun-area');\r\n\r\n        imageForFunTitle.src = \"https://gamersclub.com.br/assets/images/jogueagora/casual-icon@2x.svg\";\r\n        titleForFunArea.textContent = data['4fun'].title;\r\n\r\n        buildServersOptions(data)\r\n\r\n    }\r\n\r\n    function buildServersOptions(data) {\r\n\r\n        let servers = data['4fun'].servers\r\n        let forFunArea = document.querySelector('.forfun-area');\r\n        let navigationArea = document.querySelector('.navigation-area')\r\n        let countServers = 1;\r\n        let countGroup = 1;\r\n        let idCopy = 1;\r\n\r\n        servers.forEach(element => {\r\n\r\n            // <define the width size of progress bar server>\r\n            const maxServer = element.max;\r\n            const currentServer = element.current;\r\n            const sizeProgressBar = (currentServer * 101) / maxServer\r\n            // </define the width size of progress bar server>\r\n\r\n            if (countServers == 1) {\r\n\r\n                const navigationButton = `\r\n                    <label class=\"navigation-forfun\">\r\n                        <input type=\"radio\" class=\"reference-${countGroup}\" name=\"forfun\" id=\"navigation-${countGroup}\" ${countGroup == 1 ? 'checked=checked' : ''}\">\r\n                        <span></span>\r\n                    </label>\r\n                `\r\n\r\n                navigationArea.insertAdjacentHTML('beforeend', navigationButton);\r\n\r\n                const groupServersArea = `\r\n                    <div class=\"group-quad-area reference-${countGroup} ${countGroup == 1 ? 'show':'hide'}\" id=\"group-quad-${countGroup}\">\r\n                        \r\n                    </div>\r\n                `\r\n                forFunArea.insertAdjacentHTML('beforeend', groupServersArea);\r\n            }\r\n\r\n            const groupServersArea = `\r\n                <article class=\"forfun-quad\">\r\n                    <div class=\"flex-area w-100\">\r\n                        <button class=\"bt-forfun-area -btn-clipboard\" data-clipboard-id=\"${idCopy}\" data-clipboard-text=\"${element.copy}\">\r\n                            <img src=\"img/copy-paste-icon.png\" alt=\"Gamers Club\">\r\n                        </button>\r\n                        <a href=\"${element.join}\" class=\"bt-forfun-area -green\"> <img src=\"img/goto-icon.png\" alt=\"Gamers Club\">\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"w-100\">\r\n                        <div>\r\n                            <p class=\"descri-forfun-area\">#${element.id} - Deathmatch <strong>${element.mode}</strong></p>\r\n                        </div>\r\n                        <div>\r\n                            <p class=\"title-progressbar-forfun-area\"><span class=\"map-name\">${element.map}</span> <span>${element.current}/${element.max}</span></p>\r\n                            <div class=\"progress-bar-forfun-area\">\r\n                                <span class=\"progress-bar-forfun\" style=\"width:${sizeProgressBar}%;\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </article> \r\n            `\r\n\r\n            //<Make Copy button works>\r\n            new ClipboardJS(`[data-clipboard-id=\"${idCopy}\"]`);\r\n            //</Make Copy button works>\r\n\r\n            let groupArea = document.querySelector(`#group-quad-${countGroup}`);\r\n            groupArea.insertAdjacentHTML('beforeend', groupServersArea);\r\n\r\n            countServers++\r\n\r\n            if (countServers == 4) {\r\n                countServers = 1;\r\n                countGroup++;\r\n            }\r\n\r\n        })\r\n\r\n        listenNavigation()\r\n    }\r\n\r\n\r\n    function buildLobbyAndRankedArea(data) {\r\n\r\n        let lobbyTitle = document.querySelector('.title-lobby-area')\r\n        let RankedTitle = document.querySelector('.title-ranked-area')\r\n        let imageLobbyTitle = document.querySelector('.image-lobby-title')\r\n        let imageRankedTitle = document.querySelector('.image-ranked-title')\r\n\r\n        let lobbyPlayedNumber = document.querySelector('.lobby-played-number')\r\n        let lobbyVictoryNumber = document.querySelector('.lobby-victory-number')\r\n        let lobbyLoseNumber = document.querySelector('.lobby-lose-number')\r\n\r\n        let rankedPlayedNumber = document.querySelector('.ranked-played-number')\r\n        let rankedVictoryNumber = document.querySelector('.ranked-victory-number')\r\n        let rankedLoseNumber = document.querySelector('.ranked-lose-number')\r\n\r\n        let buttonLobby = document.querySelector('.bt-lobby')\r\n        let buttonRanked = document.querySelector('.bt-ranked')\r\n        let buttonRankedNumber = document.querySelector('.users-number-area .number')\r\n\r\n\r\n        lobbyTitle.textContent = data.games[0].title;\r\n        imageLobbyTitle.src = data.games[0].image\r\n\r\n        RankedTitle.textContent = data.games[1].title;\r\n        imageRankedTitle.src = data.games[1].image\r\n\r\n        lobbyPlayedNumber.textContent = data.games[0].matches\r\n        lobbyVictoryNumber.textContent = data.games[0].win\r\n        lobbyLoseNumber.textContent = data.games[0].lose\r\n\r\n        rankedPlayedNumber.textContent = data.games[1].matches\r\n        rankedVictoryNumber.textContent = data.games[1].win\r\n        rankedLoseNumber.textContent = data.games[1].lose\r\n\r\n        buttonLobby.href = data.games[0].cta.link\r\n        buttonRanked.href = data.games[1].cta.link\r\n        buttonRankedNumber.textContent = data.games[1].cta.line\r\n    }\r\n\r\n    function buildfooter(data) {\r\n        let onlinePlayers = document.querySelector('.online-players')\r\n        let bannedPlayers = document.querySelector('.banned-players')\r\n\r\n        onlinePlayers.textContent = data.online\r\n        bannedPlayers.textContent = data.latest_banned\r\n    }\r\n\r\n})();\r\n\r\n\r\nfunction listenNavigation() {\r\n\r\n    let allCheckedButtons = document.querySelectorAll('input[type=\"radio\"]');\r\n\r\n    allCheckedButtons.forEach(element => {\r\n        element.addEventListener('click', (event) => {\r\n            let clickedNavigation = event.target\r\n\r\n            if (clickedNavigation.checked) {\r\n                let clickedNavigationReference = clickedNavigation.classList[0];\r\n                let allGroups = document.querySelectorAll('.group-quad-area');\r\n\r\n                allGroups.forEach((element) => {\r\n                    if (element.classList.contains(`${clickedNavigationReference}`)) {\r\n                        element.classList.add('show')\r\n                        element.classList.remove('hide')\r\n                    } else {\r\n                        element.classList.add('hide')\r\n                        element.classList.remove('show')\r\n                    }\r\n                })\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });