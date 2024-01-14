jQuery(document).ready(function($) {
    $("#notification-display").click(function() {
        $("#notification-bar").toggle();
        $('.toast').toast('show')
    });
    $('#notification-bar .no-alerts .btn-close').click(function() {
        $("#notification-bar").hide();
    })
});

function displayAlerts() {
    $.ajax({
        type: "POST",
        url: $('#notification-bar').attr('data-get-url'),
        data: {},
        dataType: 'json',
        success: function (data) {
            alertText = '';
            if (data.no_of_alerts == 0) {
                alertText = '<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">No alerts to display</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div>';
                $('#sidebar-notification-icon').removeClass("notification_icon")
                $('#notification-count').remove()
            } else {
                alertText += '<div class="toast-container position-static">' 
                for (i=0; i<data.all_alerts.length; i++) {
                    level = ''
                    if (data.all_alerts[i].level == 'CRIT') {
                        level = 'red'
                    } else if (data.all_alerts[i].level == 'WARN') {
                        level = 'yellow'
                    } else {
                        level = 'grey'
                    }
                    alertText += '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false"><div class="toast-header"><div class="notification-indicator" style="background-color:'+level+';"></div><strong class="me-auto" onclick="readAlert('+data.all_alerts[i].id+');">'+data.all_alerts[i].title+'</strong><small class="text-body-secondary">'+data.all_alerts[i].age+'</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" onclick="deleteAlert('+data.all_alerts[i].id+');"></button></div><div class="toast-body" onclick="readAlert('+data.all_alerts[i].id+');">'+data.all_alerts[i].message+'</div></div>'
                }
                alertText += '</div>'
                $('#sidebar-notification-icon').addClass("notification_icon")
                $('#notification-count').html(data.all_alerts.length)
            }
            $('#notification-bar').html(alertText)
            $('.toast').toast('show')
        }
    })
}
function deleteAlert(id) {
    $.ajax({
        type: "POST",
        url: $('#notification-bar').attr('data-delete-url'),
        data: {
            'id': id
        },
        dataType: 'json',
        success: function (data) {
            displayAlerts()
        }
    });
}
function readAlert(id) {
    $.ajax({
        type: "POST",
        url: $('#notification-bar').attr('data-update-url'),
        data: {
            'id': id
        },
        dataType: 'json',
        success: function (data) {
            displayAlerts();
            if (data.link) {
                window.location.href = data.link
            }
        }
    });
}