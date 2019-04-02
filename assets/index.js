// Used the https://www.codeseek.co/stevenklein/statuspageio-overall-page-status-mznjG to display the status with javascript correctly.

var sp = new StatusPage.page({ page: '6w4r0ttlx5ft'});

sp.summary({
  success: function(data) {
    // adds the text description
    $('.color-description').text(data.status.description);
    // appends the status indicator as a class name so we can use the right color for the status light thing
    $('.color-dot').addClass(data.status.indicator);
    // timestamp
    $('.update').getTimezoneOffset(data.page.updated_at);
  }
});

