function adjustColumnHeight(group, item) {
  $(group).each(function() {
      $(this).each(function() {
        $(this).find(item).height($(this).height())
      });
  });
};

$(document).ready(function() {
  adjustColumnHeight(".section", ".column_content");
  $("div.section div:last-child").addClass("last_column_in_section");
  
});

// $(window).resize(function() {
//   adjustColumnHeight(".section", ".column");
// });