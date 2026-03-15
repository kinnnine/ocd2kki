// ocd.js, custom interface to ynoproject.net for ocd2kki
// https://github.com/kinnnine/ocd2kki
// License: MIT

// Umbrella JS 3.3.2 umbrellajs.com
// https://github.com/franciscop/umbrella
// License: MIT
var u=function(t,e){return this instanceof u?t instanceof u?t:((t="string"==typeof t?this.select(t,e):t)&&t.nodeName&&(t=[t]),void(this.nodes=this.slice(t))):new u(t,e)};u.prototype={get length(){return this.nodes.length}},u.prototype.nodes=[],u.prototype.addClass=function(){return this.eacharg(arguments,function(t,e){t.classList.add(e)})},u.prototype.adjacent=function(o,t,i){return"number"==typeof t&&(t=0===t?[]:new Array(t).join().split(",").map(Number.call,Number)),this.each(function(n,r){var e=document.createDocumentFragment();u(t||{}).map(function(t,e){e="function"==typeof o?o.call(this,t,e,n,r):o;return"string"==typeof e?this.generate(e):u(e)}).each(function(t){this.isInPage(t)?e.appendChild(u(t).clone().first()):e.appendChild(t)}),i.call(this,n,e)})},u.prototype.after=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t.nextSibling)})},u.prototype.append=function(t,e){return this.adjacent(t,e,function(t,e){t.appendChild(e)})},u.prototype.args=function(t,e,n){return(t="string"!=typeof(t="function"==typeof t?t(e,n):t)?this.slice(t).map(this.str(e,n)):t).toString().split(/[\s,]+/).filter(function(t){return t.length})},u.prototype.array=function(o){var i=this;return this.nodes.reduce(function(t,e,n){var r;return o?(r="string"==typeof(r=(r=o.call(i,e,n))||!1)?u(r):r)instanceof u&&(r=r.nodes):r=e.innerHTML,t.concat(!1!==r?r:[])},[])},u.prototype.attr=function(t,e,r){return r=r?"data-":"",this.pairs(t,e,function(t,e){return t.getAttribute(r+e)},function(t,e,n){n?t.setAttribute(r+e,n):t.removeAttribute(r+e)})},u.prototype.before=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t)})},u.prototype.children=function(t){return this.map(function(t){return this.slice(t.children)}).filter(t)},u.prototype.clone=function(){return this.map(function(t,e){var n=t.cloneNode(!0),r=this.getAll(n);return this.getAll(t).each(function(t,e){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](t,r.nodes[e])}),n})},u.prototype.getAll=function(t){return u([t].concat(u("*",t).nodes))},u.prototype.mirror={},u.prototype.mirror.events=function(t,e){if(t._e)for(var n in t._e)t._e[n].forEach(function(t){u(e).on(n,t.callback)})},u.prototype.mirror.select=function(t,e){u(t).is("select")&&(e.value=t.value)},u.prototype.mirror.textarea=function(t,e){u(t).is("textarea")&&(e.value=t.value)},u.prototype.closest=function(e){return this.map(function(t){do{if(u(t).is(e))return t}while((t=t.parentNode)&&t!==document)})},u.prototype.data=function(t,e){return this.attr(t,e,!0)},u.prototype.each=function(t){return this.nodes.forEach(t.bind(this)),this},u.prototype.eacharg=function(n,r){return this.each(function(e,t){this.args(n,e,t).forEach(function(t){r.call(this,e,t)},this)})},u.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)})},u.prototype.filter=function(e){var t=e instanceof u?function(t){return-1!==e.nodes.indexOf(t)}:"function"==typeof e?e:function(t){return t.matches=t.matches||t.msMatchesSelector||t.webkitMatchesSelector,t.matches(e||"*")};return u(this.nodes.filter(t))},u.prototype.find=function(e){return this.map(function(t){return u(e||"*",t)})},u.prototype.first=function(){return this.nodes[0]||!1},u.prototype.generate=function(t){return/^\s*<tr[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().nodes:/^\s*<t(h|d)[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().children().nodes:/^\s*</.test(t)?u(document.createElement("div")).html(t).children().nodes:document.createTextNode(t)},u.prototype.handle=function(){var t=this.slice(arguments).map(function(e){return"function"==typeof e?function(t){t.preventDefault(),e.apply(this,arguments)}:e},this);return this.on.apply(this,t)},u.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},u.prototype.html=function(e){return void 0===e?this.first().innerHTML||"":this.each(function(t){t.innerHTML=e})},u.prototype.is=function(t){return 0<this.filter(t).length},u.prototype.isInPage=function(t){return t!==document.body&&document.body.contains(t)},u.prototype.last=function(){return this.nodes[this.length-1]||!1},u.prototype.map=function(t){return t?u(this.array(t)).unique():this},u.prototype.not=function(e){return this.filter(function(t){return!u(t).is(e||!0)})},u.prototype.off=function(t,e,n){var r=null==e&&null==n,o=null,i=e;return"string"==typeof e&&(o=e,i=n),this.eacharg(t,function(e,n){u(e._e?e._e[n]:[]).each(function(t){(r||t.orig_callback===i&&t.selector===o)&&e.removeEventListener(n,t.callback)})})},u.prototype.on=function(t,e,o){function i(t,e){try{Object.defineProperty(t,"currentTarget",{value:e,configurable:!0})}catch(t){}}var c=null,n=e;"string"==typeof e&&(c=e,n=o,e=function(n){var r=arguments;u(n.currentTarget).find(c).each(function(t){var e;t.contains(n.target)&&(e=n.currentTarget,i(n,t),o.apply(t,r),i(n,e))})});function r(t){return e.apply(this,[t].concat(t.detail||[]))}return this.eacharg(t,function(t,e){t.addEventListener(e,r),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push({callback:r,orig_callback:n,selector:c})})},u.prototype.pairs=function(r,t,e,o){var n;return void 0!==t&&(n=r,(r={})[n]=t),"object"==typeof r?this.each(function(t,e){for(var n in r)"function"==typeof r[n]?o(t,n,r[n](t,e)):o(t,n,r[n])}):this.length?e(this.first(),r):""},u.prototype.param=function(e){return Object.keys(e).map(function(t){return this.uri(t)+"="+this.uri(e[t])}.bind(this)).join("&")},u.prototype.parent=function(t){return this.map(function(t){return t.parentNode}).filter(t)},u.prototype.prepend=function(t,e){return this.adjacent(t,e,function(t,e){t.insertBefore(e,t.firstChild)})},u.prototype.remove=function(){return this.each(function(t){t.parentNode&&t.parentNode.removeChild(t)})},u.prototype.removeClass=function(){return this.eacharg(arguments,function(t,e){t.classList.remove(e)})},u.prototype.replace=function(t,e){var n=[];return this.adjacent(t,e,function(t,e){n=n.concat(this.slice(e.children)),t.parentNode.replaceChild(e,t)}),u(n)},u.prototype.scroll=function(){var t=this.first();return t&&t.scrollIntoView({behavior:"smooth"}),this},u.prototype.select=function(t,e){return t=t.replace(/^\s*/,"").replace(/\s*$/,""),/^</.test(t)?u().generate(t):(e||document).querySelectorAll(t)},u.prototype.serialize=function(){var r=this;return this.slice(this.first().elements).reduce(function(e,n){return!n.name||n.disabled||"file"===n.type||/(checkbox|radio)/.test(n.type)&&!n.checked?e:"select-multiple"===n.type?(u(n.options).each(function(t){t.selected&&(e+="&"+r.uri(n.name)+"="+r.uri(t.value))}),e):e+"&"+r.uri(n.name)+"="+r.uri(n.value)},"").slice(1)},u.prototype.siblings=function(t){return this.parent().children(t).not(this)},u.prototype.size=function(){var t=this.first();return t?t.getBoundingClientRect():null},u.prototype.slice=function(t){return t&&0!==t.length&&"string"!=typeof t&&"[object Function]"!==t.toString()?t.length?[].slice.call(t.nodes||t):[t]:[]},u.prototype.str=function(e,n){return function(t){return"function"==typeof t?t.call(this,e,n):t.toString()}},u.prototype.text=function(e){return void 0===e?this.first().textContent||"":this.each(function(t){t.textContent=e})},u.prototype.toggleClass=function(t,e){return!!e===e?this[e?"addClass":"removeClass"](t):this.eacharg(t,function(t,e){t.classList.toggle(e)})},u.prototype.trigger=function(t){var o=this.slice(arguments).slice(1);return this.eacharg(t,function(t,e){var n,r={bubbles:!0,cancelable:!0,detail:o};try{n=new window.CustomEvent(e,r)}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,o)}t.dispatchEvent(n)})},u.prototype.unique=function(){return u(this.nodes.reduce(function(t,e){return null!=e&&!1!==e&&-1===t.indexOf(e)?t.concat(e):t},[]))},u.prototype.uri=function(t){return encodeURIComponent(t).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},u.prototype.wrap=function(t){return this.map(function(e){return u(t).each(function(t){!function(t){for(;t.firstElementChild;)t=t.firstElementChild;return u(t)}(t).append(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)})})},"object"==typeof module&&module.exports&&(module.exports=u,module.exports.u=u);

function ocd() {
    // greeting
    console.log('ocd2kki init!');

    // common variables
    const __body = document.body;
    const __yno_2kki_version = document.querySelector("meta[name='2kkiVersion']").content;
    const __windowWidthOffset = 16
    const __windowHeightOffset = 39
    let __ocdDPI = 0

    // config: default config
    const ocdDefaultConfig = {
        windowSize: 1
    }

    // function: config-related: load config from localstorage
    function ocdLoadConfig() {
        const loadedConfig = localStorage.getItem("config_ocd2kki");
        if (loadedConfig) {
            try {
                return JSON.parse(loadedConfig);
            } catch (error) {
                console.error("Error while parsing config:", error);
                return ocdDefaultConfig;
            }
        }
        return ocdDefaultConfig;
    }

    // function: config-related: handy and quick apply config
    function ocdApplyConfig(config) {
        u("#ocdWindowSize").first().value = config.windowSize;
        ocdSetWindowSize(config.windowSize);
    }

    // function: config-related: save config to localstorage
    function ocdSaveConfig(config) {
        localStorage.setItem("config_ocd2kki", JSON.stringify(config));
    }

    // config: start using ocdConfig
    let ocdConfig = ocdLoadConfig();
    ocdSaveConfig(ocdConfig);

    // window: set window title
    Neutralino.window.setTitle(`ocd2kki rel.${NL_APPVERSION} - ${__yno_2kki_version} on ynoproject.net/2kki`);

    // content: fix: set hidden to prevent crash
    u('#content').attr({style: 'display: none;'});

    // ocdGameContainer
    u("body").append(u('<div id="ocdGameContainer"></div>'));
    const __ocdGameContainer = document.getElementById('ocdGameContainer');

    // ocdGameContainer: canvasContainer
    let canvasContainer = u("#canvas");
    canvasContainer.attr({
        style: 'display: block; top: 0px; margin: 0 0; min-width: none; width: 640px; max-width: none; min-height: none; height: 480px; max-height: none; border: 0px; image-rendering: pixelated; outline: none;'
    });
    __ocdGameContainer.append(document.getElementById('canvas'));

    // ocdGameContainer: gameChatContainer
    let gameChatContainer = u("#gameChatContainer");
    gameChatContainer.attr({
        style: 'z-index: 1; top: none; left: none; width: 640px; height: 240px; margin-top: none; bottom: 0px;'
    });
    __ocdGameContainer.append(document.getElementById('gameChatContainer'));

    // ocdGameContainer: controls
    //      - dynamic appearance when mouse in enter or leave
    //      - set hidden fullscreen button
    //      - enable fullscreen buttons
    let controls = u("#controls");
    let leftControls = u("#leftControls");
    let rightControls = u("#rightControls");
    controls.attr({
        style: 'z-index: 10; opacity: 1; position: fixed; top: 6px; height: 45px;'
    });
    u("#fsBadgesButton").removeClass('fsOnlyControl');
    u("#fsLocationsButton").removeClass('fsOnlyControl');
    u("#fsCommunityScreenshotsButton").removeClass('fsOnlyControl');
    u("#fsRankingsButton").removeClass('fsOnlyControl');
    u("#fsSchedulesButton").removeClass('fsOnlyControl');
    u("#controls-fullscreen").addClass('hidden');
    leftControls.addClass('hidden');
    rightControls.addClass('hidden');
    rightControls.attr({
        style: 'display: inline;'
    });
    controls.on('mousemove', function(){
        leftControls.removeClass('hidden');
        rightControls.removeClass('hidden');
    });
    controls.on('mouseleave', function(){
        leftControls.addClass('hidden');
        rightControls.addClass('hidden');
    });
    __ocdGameContainer.append(document.getElementById('controls'));

    // ocdGameContainer: toastContainer
    //      - click element to close toast using closeToast
    let toastContainer = u("#toastContainer");
    toastContainer.attr({
        class: 'top',
        style: 'z-index: 2; --toast-offset: 0;'
    });
    toastContainer.on('click', function(){
        u('#toastContainer').find('.closeToast').trigger('click');
    });
    __ocdGameContainer.append(document.getElementById('toastContainer'));

    // modalContainer
    let modalContainer = u("#modalContainer");
    __body.append(document.getElementById('modalContainer'));
    __body.append(document.getElementById('modalFadeOutContainer'));
    __body.append(document.getElementById('confirmModalContainer'));

    // modalContainer: emptyTemplateModal
    let emptyTemplateModal = u("#loginModal").clone();
    emptyTemplateModal.attr({
        id: 'emptyTemplateModal',
        class: 'modal hidden',
        style: 'z-index: 50;'
    });
    emptyTemplateModal.find('.modalContent').html('');
    emptyTemplateModal.find('.modalHeader').html('');
    emptyTemplateModal.find('.modalFooter').html('');
    modalContainer.prepend(emptyTemplateModal);

    // modalContainer: settingTemplateModal
    let settingTemplateModal = u("#settingsModal").clone();
    settingTemplateModal.attr({
        id: 'settingTemplateModal',
        class: 'modal hidden',
        style: 'z-index: 50;'
    });
    settingTemplateModal.find('.modalContent').html('');
    settingTemplateModal.find('.modalHeader').html('');
    settingTemplateModal.find('.modalFooter').html('');
    modalContainer.prepend(settingTemplateModal);

    // modalContainer: template elements
    // let templateButton = u('<button>').text('');

    // modalContainer: settingsModal
    //      - move login and logout button into settingsModal
    //      - set hidden accountSettingsButtons
    //      - add ocd2kki settings button
    let settingsModal = u("#settingsModal");
    let accountSettingsButton = u("#accountSettingsButton");
    let loginButton = u("#loginButton");
    let logoutButton = u("#logoutButton");
    settingsModal.addClass('fullscreenModal');
    accountSettingsButton.addClass('hidden');
    loginButton.addClass('hidden');
    logoutButton.addClass('hidden');
    let ocd2kkiButton = u('<button>').text('ocd2kki');
    ocd2kkiButton.attr({
        id: 'ocd2kkiButton',
        type: 'button'
    });
    ocd2kkiButton.on('click', function(){
        ocd2kkiModal.toggleClass('hidden');
    });
    u("#content").append(ocd2kkiButton);
    // settingsModal.find('.modalContent').append(ocd2kkiButton.first());
    const __settingsModal = document.getElementById('settingsModal');
    const __settingsModalformButtonRow = __settingsModal.querySelector('.buttonRow');
    __settingsModalformButtonRow.append(document.getElementById('loginButton'));
    __settingsModalformButtonRow.append(document.getElementById('logoutButton'));
    __settingsModalformButtonRow.prepend(document.getElementById('ocd2kkiButton'));

    // modalContainer: badgesModal
    //      - add badgeFilterModal to fix large space
    let badgesModal = u("#badgesModal");
    let badgeFilterButton = u('<button>').text('Filter');
    badgeFilterButton.attr({
        id: 'badgeFilterButton',
        type: 'button'
    });
    badgeFilterButton.on('click', function(){
        badgeFilterModal.toggleClass('hidden');
    });
    u("#content").append(badgeFilterButton);
    u("#badgeGameTabs").addClass('hidden');
    badgesModal.find('.modalFooter').append(badgeFilterButton.first());

    // modalContainer: badgeFilterModal
    //      - move badgeControls into badgeFilterModal
    let badgeFilterModal = u("#emptyTemplateModal").clone();
    badgeFilterModal.attr('id', 'badgeFilterModal');
    badgeFilterModal.find('.modalClose').on('click', function(){
        badgeFilterModal.toggleClass('hidden');
    });
    modalContainer.prepend(badgeFilterModal);
    const __badgeFilterModal = document.getElementById('badgeFilterModal');
    const __badgeFilterModalContent = __badgeFilterModal.querySelector('.modalContent');
    __badgeFilterModalContent.append(document.getElementById('badgeControls'));

    // modalContainer: rankingsModal
    //      - add rankingFilterModal to fix large space
    let rankingsModal = u("#rankingsModal");
    let rankingFilterButton = u('<button>').text('Filter');
    rankingsModal.addClass('fullscreenModal');
    rankingFilterButton.attr({
        id: 'rankingFilterButton',
        type: 'button'
    });
    rankingFilterButton.on('click', function(){
        rankingFilterModal.toggleClass('hidden');
    });
    u("#content").append(rankingFilterButton);
    rankingsModal.find('.modalHeader').append(rankingFilterButton.first());

    // modalContainer: rankingFilterModal
    //      - move rankingCategoryTabs into rankingFilterModal
    let rankingFilterModal = u("#emptyTemplateModal").clone();
    rankingFilterModal.attr('id', 'rankingFilterModal');
    rankingFilterModal.find('.modalClose').on('click', function(){
        rankingFilterModal.toggleClass('hidden');
    });
    modalContainer.prepend(rankingFilterModal);
    const __rankingFilterModal = document.getElementById('rankingFilterModal');
    const __rankingFilterModalContent = __rankingFilterModal.querySelector('.modalContent');
    __rankingFilterModalContent.append(document.getElementById('rankingCategoryTabs'));

    // modalContainer: ocd2kkiModal
    let ocd2kkiModal = u("#emptyTemplateModal").clone();
    let ocd2kkiFormControls = u('<ul>');
    let ocd2kkiWindowSizeSelection = u('<li>');
    let ocd2kkiFormButtons = u('<li>');
    let ocd2kkiRestoreDefaultButton = u('<button>').text('Restore to default settings');
    ocd2kkiModal.attr('id', 'ocd2kkiModal');
    // ocd2kkiModal.addClass('fullscreenModal');
    ocd2kkiModal.find('.modalClose').on('click', function(){
        ocd2kkiModal.toggleClass('hidden');
    });
    ocd2kkiFormControls.addClass('formControls');
    ocd2kkiFormButtons.addClass('formControlRow');
    ocd2kkiFormButtons.addClass('buttonRow');
    ocd2kkiRestoreDefaultButton.attr({
        id: 'rankingFilterButton',
        type: 'button'
    });
    ocd2kkiRestoreDefaultButton.on('click', function(){
        ocdConfig = ocdDefaultConfig;
        ocdSetWindowSize(ocdConfig.windowSize);
        ocdSaveConfig(ocdConfig);
    });
    ocd2kkiWindowSizeSelection.addClass('formControlRow');
    ocd2kkiWindowSizeSelection.html('<label for="ocdWindowSize">Window Size</label><div><div><select id="ocdWindowSize" size="4"><option value="1">1x</option><option value="2">2x</option></select></div></div>');
    modalContainer.prepend(ocd2kkiModal);
    ocd2kkiFormButtons.prepend(ocd2kkiRestoreDefaultButton);
    ocd2kkiFormControls.prepend(ocd2kkiWindowSizeSelection);
    ocd2kkiFormControls.append(ocd2kkiFormButtons);
    u("#content").append(ocd2kkiFormControls);
    ocd2kkiModal.find('.modalContent').prepend(ocd2kkiFormControls.first());
    u("#ocdWindowSize").on('change', function(){
        ocdConfig.windowSize = Number(this.value);
        ocdSetWindowSize(ocdConfig.windowSize);
        ocdSaveConfig(ocdConfig);
    });
    u("#ocdWindowSize").on('click', function(){
        u("#ocdWindowSize").trigger('change');
    });

    // function: window-related: set new window size
    function ocdSetWindowSize(size) {
        switch (size) {
        case 1:
            canvasContainer.attr({
                style: 'display: block; top: 0px; margin: 0 0; min-width: none; width: 640px; max-width: none; min-height: none; height: 480px; max-height: none; border: 0px; image-rendering: pixelated; outline: none;',
                width: 640 * __ocdDPI
            });
            break;
        case 2:
            canvasContainer.attr({
                style: 'display: block; top: 0px; margin: 0 0; min-width: none; width: 800px; max-width: none; min-height: none; height: 600px; max-height: none; border: 0px; image-rendering: pixelated; outline: none;',
                width: 800 * __ocdDPI
            });
            break;
        default:
            // intentionally left blank
        }
    }

    // config: apply config at startup
    ocdApplyConfig(ocdConfig);

    // mutationobserver
    const config = { attributes: true, childList: true, subtree: true };
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
            // mutationobserver: tweak: quit when easyrpg quit from main menu by user
            if (mutation.target.id === 'canvas' && mutation.type === 'attributes') {
                let canvasWidth =  Number(mutation.target.getAttribute('width'));
                let canvasHeight = Number(mutation.target.getAttribute('height'));
                // console.log(typeof(dpi));
                if (canvasWidth === 0 && canvasHeight === 0) {
                    Neutralino.app.exit();
                }
                // mutationobserver: fix: set window size according to the canvas and correcting to dpi scale
                Neutralino.computer.getDisplays()
                    .then((output) => {
                        __ocdDPI = output[0].dpi / 96;
                        Neutralino.window.setSize({
                            width: Number(canvasWidth) + __windowWidthOffset * __ocdDPI,
                            height: Number(canvasHeight) + __windowHeightOffset * __ocdDPI,
                            minWidth: Number(canvasWidth) + __windowWidthOffset * __ocdDPI,
                            minHeight: Number(canvasHeight) + __windowHeightOffset * __ocdDPI,
                            maxWidth: Number(canvasWidth) + __windowWidthOffset * __ocdDPI,
                            maxHeight: Number(canvasHeight) + __windowHeightOffset * __ocdDPI,
                            resizable: false
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        return;
                    });
                // mutationobserver: workaround: sometimes login and logout buttons won't appear
                u('#content').addClass('guest');
            };
            // mutationobserver: fix: scrollbar bug when gameChatContainer's style is changed
            if (mutation.target.id === 'gameChatContainer' && mutation.type === 'attributes' && mutation.attributeName === 'style') {
                observer.disconnect();
                gameChatContainer.attr({
                    style: 'top: none; left: none; width: 640px; height: 240px; margin-top: none; bottom: 0px;'
                });
                observer.observe(document.documentElement, config);
            };
            // mutationobserver: fix: accountRequired buttons appearance
            if (mutation.target.id === 'content' && mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (mutation.target.classList.contains('loggedIn')) {
                    accountSettingsButton.removeClass('hidden');
                    loginButton.addClass('hidden');
                    logoutButton.removeClass('hidden');
                } else {
                    accountSettingsButton.addClass('hidden');
                    loginButton.removeClass('hidden');
                    logoutButton.addClass('hidden');
                };
            };
        };
    };
    // mutationobserver: start
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, config);
};

function inject() {
    if (u("#loadingOverlay").is('.loaded')) {
        ocd(); 
    } else {
        setTimeout(inject, 100);
    }
};
Neutralino.init();
inject();