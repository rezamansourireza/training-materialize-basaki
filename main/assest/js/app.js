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

    

    var quickAccessNodes = Array.prototype.slice.call(document.querySelectorAll('.quick_access_items'));
    for (const item of quickAccessNodes) {
        item.addEventListener('click', function () {
            let index = quickAccessNodes.indexOf(item) + 1;
            let menuItemArray = document.querySelectorAll('.menu_item_list');
            setTimeout(function(){
                menuItemArray[index].click();
            } , 100)
        })
    }
});