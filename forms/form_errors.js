var formErrorCount = 0;

function addToErrors(elementId, errorMsg) {
    formErrorCount++;
    $(elementId).closest('.form-group').addClass('has-error')
    $(elementId).closest('.form-group').find('.form-errors').html(errorMsg)
}

function resetFormErrors(formId) {
    formErrorCount = 0;
    $(formId).children('.has-error').removeClass('has-error')
    $(formId).children('.form-errors').html('')
}

function resetForm(formId) {
    resetFormErrors(formId);
    $(formId).find('input').val('')
    $(formId).find('select').val('')
    $('.is_reoccurance').val('False')
}