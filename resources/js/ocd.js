function ocd() {
    // greet
    console.log('ocd2kki init!');

    // get 2kki version from meta tag
    const yno_2kki_version = document.querySelector("meta[name='2kkiVersion']").content;

    // set window title
    Neutralino.window.setTitle(`ocd2kki rel.${NL_APPVERSION} - ${yno_2kki_version} on ynoproject.net/2kki`);

    // pickup gameContainer
    const canvasContainer = document.getElementById('canvas');
    canvasContainer.setAttribute('style', 'display: block; top: 0px; margin: none; min-width: none; width: 640px; max-width: none; min-height: none; height: 480px; max-height: none; border: 0px; image-rendering: pixelated; outline: none;');

    // pickup gameChatContainer
    const gameChatContainer = document.getElementById('gameChatContainer');
    gameChatContainer.setAttribute('style', 'top: none; left: none; width: 640px; height: 240px; margin-top: none; bottom: 3px;');

    // pickup modalContainer
    const modalContainer = document.getElementById('modalContainer');
    const modalFadeOutContainer = document.getElementById('modalFadeOutContainer');
    const confirmModalContainer = document.getElementById('confirmModalContainer');

    // pickup controls
    const controls = document.getElementById('controls');
    controls.setAttribute('style', 'z-index: 10; opacity: 1; position: fixed; top: 6px; height: 45px;')

    // set hidden accountSettingsButton
    const accountSettingsButton = document.getElementById('accountSettingsButton');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    accountSettingsButton.classList.add('hidden');
    loginButton.classList.add('hidden');
    logoutButton.classList.add('hidden');

    // pickup login and logout button into settingsModal
    const settingsModal = document.getElementById('settingsModal');
    const settingsModalformButtonRow = settingsModal.querySelector('.buttonRow');
    settingsModalformButtonRow.appendChild(loginButton);
    settingsModalformButtonRow.appendChild(logoutButton);

    // workaround: set hidden fullscreen button
    const controlsFullscreenButton = document.getElementById('controls-fullscreen')
    controlsFullscreenButton.classList.add('hidden');

    // fix: enable the rest of right buttons (fullscreen only buttons)
    const fsBadgesButton = document.getElementById('fsBadgesButton');
    const fsLocationsButton = document.getElementById('fsLocationsButton');
    const fsCommunityScreenshotsButton = document.getElementById('fsCommunityScreenshotsButton');
    const fsRankingsButton = document.getElementById('fsRankingsButton');
    const fsSchedulesButton = document.getElementById('fsSchedulesButton');
    fsBadgesButton.classList.remove('fsOnlyControl');
    fsLocationsButton.classList.remove('fsOnlyControl');
    fsCommunityScreenshotsButton.classList.remove('fsOnlyControl');
    fsRankingsButton.classList.remove('fsOnlyControl');
    fsSchedulesButton.classList.remove('fsOnlyControl');

    // workaround: set hidden content element (prevent crash)
    const mainContent = document.getElementById('content');
    mainContent.setAttribute('style', 'display: none;');

    // tweak: display controls when mouse hovering
    const leftControls = document.getElementById('leftControls')
    const rightControls = document.getElementById('rightControls')
    leftControls.classList.add('hidden');
    rightControls.classList.add('hidden');
    controls.addEventListener('mousemove', function() {
        leftControls.classList.remove('hidden');
        rightControls.classList.remove('hidden');
    });
    controls.addEventListener('mouseleave', function() {
        leftControls.classList.add('hidden');
        rightControls.classList.add('hidden');
    });

    // fix: align correctly on control buttons
    rightControls.setAttribute('style', 'display: inline;')

    // apply ocdGameContainer element (new of original gameContainer)
    const ocdGameContainer = document.createElement("div");
    ocdGameContainer.id = "ocdgameContainer";
    ocdGameContainer.appendChild(canvasContainer);
    ocdGameContainer.appendChild(gameChatContainer);
    ocdGameContainer.appendChild(controls);
    document.body.appendChild(ocdGameContainer);

    // apply modalContainer element
    document.body.appendChild(modalContainer);
    // requirements for modalContainer to work properly
    document.body.appendChild(modalFadeOutContainer);
    document.body.appendChild(confirmModalContainer);

    // mutationobserver things
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
            // tweak: quit when easyrpg quit from main menu by user
            if (mutation.target.id === 'canvas' && mutation.type === 'attributes') {
                const canvasWidth = mutation.target.getAttribute('width');
                const canvasHeight = mutation.target.getAttribute('height');
                if (canvasWidth === '0' && canvasHeight === '0') {
                    Neutralino.app.exit();
                }
            }
            // fix: scrollbar bug when gameChatContainer's style is changed
            if (mutation.target.id === 'gameChatContainer' && mutation.type === 'attributes' && mutation.attributeName === 'style') {
                observer.disconnect();
                var gameChatContainerTemp = document.getElementById('gameChatContainer');
                gameChatContainerTemp.setAttribute('style', 'top: none; left: none; width: 640px; height: 240px; margin-top: none; bottom: 3px;');
                observer.observe(document.documentElement, config);
            }
            // fix: accountRequired buttons appearance
            if (mutation.target.id === 'content' && mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (mutation.target.classList.contains('loggedIn')) {
                    var accountSettingsButtonTemp = document.getElementById('accountSettingsButton');
                    var loginButtonTemp = document.getElementById('loginButton');
                    var logoutButtonTemp = document.getElementById('logoutButton');
                    var eventControlsTemp = document.getElementById('eventControls');
                    var fsBadgesButtonTemp = document.getElementById('fsBadgesButton');
                    accountSettingsButtonTemp.classList.remove('hidden');
                    loginButtonTemp.classList.add('hidden');
                    logoutButtonTemp.classList.remove('hidden');
                    eventControlsTemp.classList.remove('hidden');
                    fsBadgesButtonTemp.classList.remove('hidden');
                } else {
                    var accountSettingsButtonTemp = document.getElementById('accountSettingsButton');
                    var loginButtonTemp = document.getElementById('loginButton');
                    var logoutButtonTemp = document.getElementById('logoutButton');
                    var eventControlsTemp = document.getElementById('eventControls');
                    var fsBadgesButtonTemp = document.getElementById('fsBadgesButton');
                    accountSettingsButtonTemp.classList.add('hidden');
                    loginButtonTemp.classList.remove('hidden');
                    logoutButtonTemp.classList.add('hidden');
                    eventControlsTemp.classList.add('hidden');
                    fsBadgesButtonTemp.classList.add('hidden');
                }
            }
        }
    };
    // observe the mutations
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, config);
};

function inject() {
    const target = document.querySelector('.loaded');
    if (target) {
        ocd(); 
    } else {
        setTimeout(inject, 100);
    }
};
Neutralino.init();
inject();