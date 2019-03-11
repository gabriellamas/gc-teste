(function () {
    'use strict'


    fetch('https://api.myjson.com/bins/sqwaq', {
        method: 'GET'
    }).then(response => {
        response.json().then(data => {
            buildScreen(data);
        });
    }).catch(function (err) {
        console.error(err);
    });


    function buildScreen(data) {
        buildHeader(data)
        buildForFunArea(data)
    }

    function buildHeader(data) {

        const userName = document.querySelector('.gc-name');
        const userId = document.querySelector('.gc-id');
        const progressBar = document.querySelector('.progress-bar');

        let pinLevelCasual = document.querySelector('.pin-level-casual')
        let pinLevelCOmpetitive = document.querySelector('.pin-level-competitive')
        let pinLevelAmateur = document.querySelector('.pin-level-amateur')
        let pinLevelPro = document.querySelector('.pin-level-pro')

        userName.textContent = `GC.${data.user.name}`
        userId.textContent = `GC ID: ${data.user.id}`;
        
        if(data.user.expertise == 'casual'){
            progressBar.style.cssText = "width:25%;"
            pinLevelCasual.src = 'img/pin-level-blue.png'

        }else if(data.user.expertise == 'competitive'){
            progressBar.style.cssText = "width:50%;"
            pinLevelCasual.src = 'img/pin-level-blue.png'
            pinLevelCOmpetitive.src = 'img/pin-level-blue.png'

        }else if(data.user.expertise == 'amateur'){
            progressBar.style.cssText = "width:75%;"
            pinLevelCasual.src = 'img/pin-level-blue.png'
            pinLevelCOmpetitive.src = 'img/pin-level-blue.png'
            pinLevelAmateur.src = 'img/pin-level-blue.png'

        }else if(data.user.expertise == 'pro'){
            progressBar.style.cssText = "width:100%;"
            pinLevelCasual.src = 'img/pin-level-blue.png'
            pinLevelCOmpetitive.src = 'img/pin-level-blue.png'
            pinLevelAmateur.src = 'img/pin-level-blue.png'
            pinLevelPro.src = 'img/pin-level-blue.png'
        }

    }

    function buildForFunArea(data) {

        const imageForFunTitle = document.querySelector('.image-forfun-title');
        const titleForFunArea = document.querySelector('.title-forfun-area');

        imageForFunTitle.src = "https://gamersclub.com.br/assets/images/jogueagora/casual-icon@2x.svg";
        titleForFunArea.textContent = data['4fun'].title;

        buildServersOptions(data)

    }

    function buildServersOptions(data) {
        console.log(data)
        let servers = data['4fun'].servers
        let forFunArea = document.querySelector('.forfun-area');
        let navigationArea = document.querySelector('.navigation-area')
        let countServers = 1;
        let countGroup = 1;

        let lobbyTitle = document.querySelector('.title-lobby-area')
        let RankedTitle = document.querySelector('.title-ranked-area')
        let imageLobbyTitle = document.querySelector('.image-lobby-title')
        let imageRankedTitle = document.querySelector('.image-ranked-title')

        let lobbyPlayedNumber = document.querySelector('.lobby-played-number')
        let lobbyVictoryNumber = document.querySelector('.lobby-victory-number')
        let lobbyLoseNumber = document.querySelector('.lobby-lose-number')

        let rankedPlayedNumber = document.querySelector('.ranked-played-number')
        let rankedVictoryNumber = document.querySelector('.ranked-victory-number')
        let rankedLoseNumber = document.querySelector('.ranked-lose-number')

        let buttonLobby = document.querySelector('.bt-lobby')
        let buttonRanked = document.querySelector('.bt-ranked')
        let buttonRankedNumber = document.querySelector('.users-number-area .number')


        lobbyTitle.textContent = data.games[0].title;
        imageLobbyTitle.src = data.games[0].image

        RankedTitle.textContent = data.games[1].title;
        imageRankedTitle.src = data.games[1].image

        lobbyPlayedNumber.textContent = data.games[0].matches
        lobbyVictoryNumber.textContent = data.games[0].win
        lobbyLoseNumber.textContent = data.games[0].lose

        rankedPlayedNumber.textContent = data.games[1].matches
        rankedVictoryNumber.textContent = data.games[1].win
        rankedLoseNumber.textContent = data.games[1].lose

        buttonLobby.href = data.games[0].cta.link
        buttonRanked.href = data.games[1].cta.link
        buttonRankedNumber.textContent = data.games[1].cta.line



        servers.forEach( element => {

            // <define the width size of progress bar server>
            const maxServer = element.max;
            const currentServer = element.current;
            const sizeProgressBar = (currentServer * 101) / maxServer
            // </define the width size of progress bar server>

            if (countServers == 1) {

                const navigationButton = `
                    <label class="navigation-forfun">
                        <input type="radio" class="reference-${countGroup}" name="forfun" id="navigation-${countGroup}" ${countGroup == 1 ? 'checked=checked' : ''}">
                        <span></span>
                    </label>
                `

                navigationArea.insertAdjacentHTML('beforeend', navigationButton);

                const groupServersArea = `
                    <div class="group-quad-area reference-${countGroup} ${countGroup == 1 ? 'show':'hide'}" id="group-quad-${countGroup}">
                        
                    </div>
                `
                forFunArea.insertAdjacentHTML('beforeend', groupServersArea);
            }

            const groupServersArea = `
                <article class="forfun-quad">
                    <div class="flex-area w-100">
                        <button class="bt-forfun-area -btn-clipboard" data-clipboard-text="${element.copy}">
                            <img src="img/copy-paste-icon.png" alt="Gamers Club">
                        </button>
                        <a href="${element.join}" class="bt-forfun-area -green"> <img src="img/goto-icon.png" alt="Gamers Club">
                        </a>
                    </div>

                    <div class="w-100">
                        <div>
                            <p class="descri-forfun-area">#${element.id} - Deathmatch <strong>${element.mode}</strong></p>
                        </div>
                        <div>
                            <p class="title-progressbar-forfun-area"><span class="map-name">${element.map}</span> <span>${element.current}/${element.max}</span></p>
                            <div class="progress-bar-forfun-area">
                                <span class="progress-bar-forfun" style="width:${sizeProgressBar}%;"></span>
                            </div>
                        </div>
                    </div>
                </article> 
            `

            new ClipboardJS('.-btn-clipboard');

            let groupArea = document.querySelector(`#group-quad-${countGroup}`);
            groupArea.insertAdjacentHTML('beforeend', groupServersArea);

            countServers++

            if (countServers == 4) {
                countServers = 1;
                countGroup++;
            }

        })
        
        listenNavigation()
    }

})();



function listenNavigation(){

    let allCheckedButtons = document.querySelectorAll('input[type="radio"]');

        allCheckedButtons.forEach(element => {
            element.addEventListener('click', (event)=>{
                let clickedNavigation = event.target
          
                if(clickedNavigation.checked){
                    let clickedNavigationReference = clickedNavigation.classList[0];
                    let allGroups = document.querySelectorAll('.group-quad-area');

                    allGroups.forEach((element)=>{
                        if(element.classList.contains(`${clickedNavigationReference}`)){
                            element.classList.add('show')
                            element.classList.remove('hide')
                        }else{
                            element.classList.add('hide')
                            element.classList.remove('show')
                        }
                    })
                }
            })
        })
}