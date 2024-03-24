document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: "right",
    });
    var tabs = document.querySelectorAll('.main_ul_navbar');
    M.Tabs.init(tabs, {
        swipeable: true
    });
    var actionbutton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(actionbutton, {
        toolbarEnabled: true
    });


    var selectElm = document.querySelectorAll('select');
    M.FormSelect.init(selectElm , {});














    var quickAccessNodes = Array.prototype.slice.call(document.querySelectorAll('.quick_access_items'));
    for (const item of quickAccessNodes) {
        item.addEventListener('click', function () {
            let index = quickAccessNodes.indexOf(item) + 1;
            let menuItemArray = document.querySelectorAll('.menu_item_list');
            setTimeout(function () {
                menuItemArray[index].click();
            }, 100)
        })
    }

    animateprogress('pay_progress_path', 'pay_progress_text', 50)
    animateprogress('floor_progress_path', 'floor_progress_text', 90)

    function animateprogress(PathDomId, TextDomId, percent) {
        let startpercent = 0;
        let maxpercent = percent;

        let stratprogress = 0;
        let maxprogress = 253;

        let progressInterval = setInterval(function () {
            if (startpercent <= maxpercent) {
                document.getElementById(PathDomId).setAttribute('stroke-dasharray', `${stratprogress}, ${maxprogress}`)
                document.getElementById(TextDomId).innerHTML = startpercent + "%";

                startpercent += 1
                stratprogress += 2.53
                maxprogress -= 2.53
            } else {
                clearInterval(progressInterval);
            }
        }, 25)

    }

});