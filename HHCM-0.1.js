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

const busyTimeout = 5000;


// once a day or more, to be determined
Main();


function Main()
{
	if (getPage() != 'home')
	{
		setTimeout(Main, busyTimeout); // busy : try again later
		return;
	}
	
	// deactivates HH auto ++
	document.getElementById("master").checked = false;
	Storage().HHAuto_Setting_master = "false";

	// go to page "clubs"
	window.location = window.location.origin + "/clubs.html";

	// retrieve members list with name, level, girls and contribution
	//var tableMembers = document.getElementById("members");
	// level : <td class="lvl_leadicon">
	// name : <div class="member_name">
	// girls : <td class="girls_icn">
	// mojo : <span class="mojo_icon">
	// contribution : <td class="contr_icn">
	//var member = {id, name, level, girls, mojo, contribution};
	
	
	var myTableArray = [];

	$("table#members tr").each(function() {
		var arrayOfThisRow = [];
		var tableData = $(this).find('td');
		if (tableData.length > 0) {
			tableData.each(function() { arrayOfThisRow.push($(this).text()); });
			myTableArray.push(arrayOfThisRow);
		}
	});

	alert(myTableArray);

	// write to file (text, database or calc sheet ?)
	
}


function Storage()
{
    return localStorage.HHAuto_Setting_settPerTab==="true"?sessionStorage:localStorage;
}

function getPage()
{
    try{
        var ob = document.getElementById("hh_nutaku");
        if(ob===undefined || ob === null)
        {
            ob = document.getElementById("hh_gay");
        }
        if(ob===undefined || ob === null)
        {
            ob = document.getElementById("hh_hentai");
        }
        var p=ob.className.match(/.*page-(.*) .*/i)[1];
        if (p=="missions" && $('h4.contests.selected').size()>0)
        {
            return "activities"
        }
        if (p=="missions" && $('h4.pop.selected').size()>0)
        {
            // if on Pop menu
            var t;
            var popList= $("div.pop_list")
            if (popList.attr('style') !='display:none' )
            {
                t = 'main';
            }
            else
            {
                t=$(".pop_thumb_selected").attr("pop_id");
                if (t === undefined)
                {
                    var queryString = window.location.search;
                    var urlParams = new URLSearchParams(queryString);
                    var index = urlParams.get('index');
                    if (index !== null)
                    {
                        addPopToUnableToStart(index,"Unable to go to Pop "+index+" as it is locked.");
                        removePopFromPopToStart(index);
                        t='main';
                    }
                }
            }
            return "powerplace"+t
        }
        else
        {
            return p;
        }
    }
    catch(err)
    {
        return ""
    }
}
