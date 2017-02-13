function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function CheckEmail(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(pattern)) {
        return false;
    } else {
        return true;
    }
}


function EmailError() {
    return "Please enter valid email.";
}

function PasswordError() {
    return "Please enter correct password.";
}

var consoleHolder = console;

function debug(bool) {
    if (!bool) {
        consoleHolder = console;
        console = {};
        console.log = function() {};
    } else
        console = consoleHolder;
}

function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
}

function dateFormate(date) {
    var date = new Date(date);
    var dd = date.getDate();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();
    return addZeroBefore(mm) + '/' + addZeroBefore(dd) + '/' + yyyy;
}

function phoneValidation(id) {
    // For Disable key
    $(document).ready(function() {
        $(id).keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });

}

function CheckEmail(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(pattern)) {
        return false;
    } else {
        return true;
    }
}

function tostPopup($mdToast, message) {
    var pinTo = "bottom right";
    $mdToast.show(
        $mdToast.simple()
        .textContent(message)
        .position(pinTo)
        .hideDelay(3000)
    );
}
//Service 

/*

app.service('manuals', function() {
    var productList = [];

    var addProduct = function(newObj) {
        productList.push(newObj);

    };

    var getProducts = function() {
        return productList;
        productList.length = 0;
    };

    return {
        addProduct: addProduct,
        getProducts: getProducts
    };
});

 //  manuals.addProduct(item);
            */