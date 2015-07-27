window.onload = function() {
  function showIt(elID) {
    var elementToScrollTo = document.getElementById(elID);
    elementToScrollTo.scrollIntoView(true);
  }
  if (navigator.platform.toUpperCase().indexOf('MAC') !== -1) {
    showIt('mac');
  }
  if (navigator.platform.toUpperCase().indexOf("LINUX") !== -1) {
    if (navigator.userAgent.toUpperCase().indexOf("UBUNTU") !== -1) {
      showIt('ubuntu');
    } else if (navigator.userAgent.toUpperCase().indexOf("DEBIAN") !== -1) {
      showIt('debian');
    } else if (navigator.userAgent.toUpperCase().indexOf("ARCH") !== -1) {
      showIt('archlinux');
    } else if (navigator.userAgent.toUpperCase().indexOf("SUSE") !== -1) {
      showIt('opensuse');
    } else if (navigator.userAgent.toUpperCase().indexOf("FEDORA") !== -1) {
      showIt('fedora');
    } else if (navigator.userAgent.toUpperCase().indexOf("MAGEIA") !== -1) {
      showIt('mageia');
    } else if (navigator.userAgent.toUpperCase().indexOf("XUBUNTU") !== -1) {
      showIt('xubuntu');
    } else if (navigator.userAgent.toUpperCase().indexOf("GENTOO") !== -1) {
      showIt('gentoo');
    } else {
      showIt('ubuntu')
    }
  }
  if (navigator.platform.toUpperCase().indexOf("FREEBSD") !== -1) {
    showIt('freebsd')
  }
};