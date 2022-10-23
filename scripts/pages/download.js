$(window).on('load', startup);
var baseurl = 'https://raw.githubusercontent.com/SwiftLabo/database/web/data/'
//Load Pages Styles
$('head').append('<link rel="stylesheet" href="ui/pages/download.css" />');
//Start Add Pages
let devicejson;
var dataurl = 'https://raw.githubusercontent.com/SwiftLabo/database/web/data/'
const devicetitle = '.device .banner-title';
const devicecodename = '.device .banner-subtitle';
function startup() {
    const el = document.querySelector('#page');
    el.classList.add("fetched");

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    var dataurl = 'https://raw.githubusercontent.com/SwiftLabo/database/web/data/'
    setTimeout(function () {
        let value = params.device;
        const el = document.querySelector('#page');
        if (value !== null) {
            var jsonurl = `${dataurl}/device/${value}/${value}.json`;

            el.classList.add("devicedl");
            $('.device .banner-subtitle').text(value)
            fetchDeviceData(jsonurl)
            el.classList.remove("fetched");
        } else {
            renderUsers();
            el.classList.remove("fetched");
        }
    }, 100);
}

function opengrid() {
    var codename = $(this).attr('class').split(' ')[1];
    window.location.href = 'download.html?device=' + codename;
}
async function fetchDeviceData(file) {
    let x = await fetch(file, { cache: "no-store" });
    let y = await x.text();
    if (y !== undefined) {
        const obj = JSON.parse(y);
        $('.device .banner-title').text(obj.name)
        $('.device .banner-subtitle').text(obj.codename)
        $('.device .banner-maintainer').text(obj.maintainer)
        var pictures = `${dataurl}/${obj.pictures}`
        document.querySelector('.phone').src = pictures;
        const el = document.querySelector('#page');
        el.classList.add("fetched");
    }
}

async function fetchDeviceList(file) {
    let x = await fetch(file, { cache: "no-store" });
    let y = await x.text();
    if (y !== undefined) {
        const obj = JSON.parse(y);
        $('.device .banner-title').text(obj.name)
        $('.device .banner-subtitle').text(obj.codename)
        $('.device .banner-maintainer').text(obj.maintainer)
        var pictures = `${dataurl}/${obj.pictures}`
        document.querySelector('.phone').src = pictures;
        const el = document.querySelector('#page');
        el.classList.add("fetched");
    }
}
async function getDevice() {
    let url = baseurl.concat('list/device.json');
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getDevice();
    const el = document.querySelector('#page');
    let html = '';
    users.forEach(device => {
        var pictures = baseurl.concat(device.pictures)
        let htmlSegment = `<div class="grid ${device.codename}" onmousedown="ripple('.${device.codename}')">
                            <img class="phone" src="${pictures}" alt="Anroid">
                             <span class="title">${device.name}</span>
                             <span class="subtitle">${device.codename}</span>
                           </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container-grid');
    container.innerHTML = html;
    $('.grid').click(opengrid);
    el.classList.add("fetched");
}


