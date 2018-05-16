// Mobile Navigation Side Buttons
var mobiNav = false;
function mobileNav() {
    var x = document.getElementById("mobile-nav-icon");
    x.classList.toggle('open');
    if (x.classList.contains('open')) {
        openNav();
    } else {
        closeNav();
    }

};

function openNav() {
    this.mobileNav = mobileNav;
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    this.mobileNav = false;
    document.getElementById("mySidenav").style.width = "0";
}
