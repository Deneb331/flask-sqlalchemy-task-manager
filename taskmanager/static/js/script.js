document.addEventListener('DOMContentLoaded', function () {
  //Navbar initialization
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  //Datepicker initialization
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    }
  });

  //Select initialization
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  //Collapsibles initialization
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
});