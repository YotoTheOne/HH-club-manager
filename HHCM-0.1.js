// ==UserScript==
// @name         HH club manager
// @namespace    https://github.com/YotoTheOne/HH-club-manager
// @version      0.1
// @description  Open the menu in HaremHeroes(topright) to toggle AutoControlls. Supports AutoSalary, AutoContest, AutoMission, AutoQuest, AutoTrollBattle, AutoArenaBattle and AutoPachinko(Free), AutoLeagues, AutoChampions and AutoStatUpgrades. Messages are printed in local console.
// @author       YotoTheOne
// @match        http*://nutaku.haremheroes.com/*
// @match        http*://*.hentaiheroes.com/*
// @match        http*://*.gayharem.com/*
// @grant        GM_addStyle
// @license      MIT
// @updateURL   https://github.com/YotoTheOne/HH-club-manager/raw/main/HHCM-0.1.js
// @downloadURL https://github.com/YotoTheOne/HH-club-manager/raw/main/HHCM-0.1.js
// ==/UserScript==

// once a day or more, to be determined


// go to page "clubs"
var togoto = "clubs.html";
console.log(window.location.origin+togoto);
//window.location = window.location.origin + togoto;

// retrieve members list with name, level, girls and contribution


// write to file (text, database or calc sheet ?)