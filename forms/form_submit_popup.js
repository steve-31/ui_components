function showTempAlertPopup(alertType, inputString) {
    if (alertType.toUpperCase() == 'SUCCESS') {
        $('#form-submit-popup').addClass('form-submit-success')
        $('#form-submit-progress').addClass('form-submit-progress-success')
    } else if (alertType.toUpperCase() == 'WARNING') {
        $('#form-submit-popup').addClass('form-submit-warn')
        $('#form-submit-progress').addClass('form-submit-progress-warn')
    } else if (alertType.toUpperCase() == 'ERROR') {
        $('#form-submit-popup').addClass('form-submit-error')
        $('#form-submit-progress').addClass('form-submit-progress-error')
    }
    $('#form-submit-text').html(alertType.toUpperCase() + ": " + inputString);
    $('#form-submit-popup').fadeIn()
    var barWidth = 0;
    var progressBarTimer = setInterval(function() {
        if (barWidth >= 100) {
            clearInterval(progressBarTimer)
            $('#form-submit-popup').fadeOut()
            removeClasses = setTimeout(function () {
                $('#form-submit-popup').removeClass('form-submit-success')
                $('#form-submit-popup').removeClass('form-submit-warn')
                $('#form-submit-popup').removeClass('form-submit-error')
                $('#form-submit-progress').removeClass('form-submit-progress-success')
                $('#form-submit-progress').removeClass('form-submit-progress-warn')
                $('#form-submit-progress').removeClass('form-submit-progress-error')
            }, 500);
        } else {
            barWidth++;
            $('#form-submit-progress').css('width',String(barWidth)+'%')
        }
    }, 50)
}
