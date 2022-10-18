//Load Pages Styles
$('head').append('<link rel="stylesheet" href="ui/pages/index.css" />');
//Start Add Pages
var sourcechecker = `

`;
var advantages = `
                    <div class="grid light" onmouseover="ripple('.light')">
                        <span class="material-symbols-rounded" translate="no">bolt</span>
                        <span class="title">Light</span>
                        <span class="subtitle">No Burdensome Features</span>
                    </div>
                    <div class="grid goodui" onmouseover="ripple('.goodui')">
                        <span class="material-symbols-rounded" translate="no">auto_awesome</span>
                        <span class="title">Beautiful UI</span>
                        <span class="subtitle">With A Minimalist Elegant UI</span>
                    </div>
                    <div class="grid privacy" onmouseover="ripple('.privacy')">
                        <span class="material-symbols-rounded" translate="no">security</span>
                        <span class="title">Privacy</span>
                        <span class="subtitle">With Enchanced Security</span>
                    </div>
                    <div class="grid uptodate" onmouseover="ripple('.uptodate')">
                        <span class="material-symbols-rounded" translate="no">system_update</span>
                        <span class="title">Up-To-Date</span>
                        <span class="subtitle">We Always Merging New Security Patch</span>
                    </div>
`;

$(document).ready(function () {
    $('.advantages .container-grid').append(advantages)
    $('.sourcechecker').append(sourcechecker)
     
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.querySelector('.phone').src = "assets/drawable/phone_light.png";
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme == 'light') {
            document.querySelector('.phone').src = "assets/drawable/phone_light.png";
        }
        if (newColorScheme == 'dark') {
            document.querySelector('.phone').src = "assets/drawable/phone_dark.png";
        }
        console.log(newColorScheme)
    });
});