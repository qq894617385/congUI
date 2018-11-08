let showToast = function (event, text, duration, icon) {
    event.toastedit = event.selectComponent("#toast")
    switch (arguments.length) {
        case 1:
            event.toastedit.showToast("输入正确", 2000, "success");
            break;
        case 2:
            event.toastedit.showToast(text, 2000, "success");
            break;
        case 3:
            event.toastedit.showToast(text, duration, "success");
            break;
        case 4:
            event.toastedit.showToast(text, duration, icon);
            break;
    }
}

let test = () => {

}

module.exports = {
    toast: showToast,
    test: test
}