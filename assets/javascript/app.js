/*
 * Application
 */
addEventListener('render', function() {
    // Tooltips
    $('[data-bs-toggle="tooltip"]').each(function() {
        $(this).tooltip();
    });
});
