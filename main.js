function buildResponse() {
    //Appending to DOM 
    chrome.tabs.executeScript({
        code: 'var changeFrom = \'' + document.getElementById('changeFrom').value
                + '\'; var changeTo = \'' + document.getElementById('changeTo').value + '\'; createHtml(changeFrom, changeTo)'
    });

    window.close();

}
document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('checkPage');
    // onClick's logic below:
    link.addEventListener('click', function () {
        buildResponse();
    });
});

function createHtml(changeFrom, changeTo) {

    if (changeFrom.length == 0 || changeTo.length == 0) {
        alert("Fill up the change from and change to input!");
        return;
    }
    
    var elements = $(":contains(" + changeFrom + "):not(:has(*))");

    if(elements.length == 0) {
        alert("Text not found");
    }
    $.each(elements, function (index, value) {
        $(value).html($(value).text().replace(changeFrom, "<span style=\"color: red\; font-color: red; font-size: 150%\">" + changeTo + "</span>"));
//        $(value).css({ 'color': 'red', 'font-size': '150%' });;
    });


}