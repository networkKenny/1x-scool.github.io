// 開啟isotope

var $grid = $(".grid").isotope({
    itemSelector: ".items"
});

// 記憶所選的filter
var filters = [];

// 按鈕連結

$(".filters").on("click", "button", function(event) {
    var $target = $(event.currentTarget);
    $target.toggleClass("is-checked");
    // 改變CSS
    var isChecked = $target.hasClass("is-checked");
    // 抓data-filter
    var filter = $target.attr("data-filter");

    if (isChecked) {
        addFilter(filter);
    } else {
        removeFilter(filter);
    }
    // 執行isotope
    $grid.isotope({
        filter: filters.join(',')
    });

    function addFilter(filter) {
        if (filters.indexOf(filter) == -1) {
            filters.push(filter);
        }
    }

    function removeFilter(filter) {
        if (filter.indexOf(filter) != -1) {
            filters.splice(filter.indexOf(filter), 1);
        }
    }


});