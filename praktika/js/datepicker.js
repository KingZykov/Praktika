$(document).ready(function () {
    $("#startAdd").datepicker({
        todayBtn: 1,
        autoclose: true,
    }).on('changeDate', function (selected) {
        var minDate = new Date(selected.date.valueOf());
        $('#endAdd').datepicker('setStartDate', minDate);
    });
    $("#endAdd").datepicker()
        .on('changeDate', function (selected) {
            var minDate = new Date(selected.date.valueOf());
            $('#startAdd').datepicker('setEndDate', minDate);
        });

    $("#startAdd1").datepicker({
        todayBtn: 1,
        autoclose: true,
    }).on('changeDate', function (selected) {
        var minDate = new Date(selected.date.valueOf());
        $('#endAdd1').datepicker('setStartDate', minDate);
    });
    $("#endAdd1").datepicker()
        .on('changeDate', function (selected) {
            var minDate = new Date(selected.date.valueOf());
            $('#startAdd1').datepicker('setEndDate', minDate);
        });

    $("#startAdd2").datepicker({
        todayBtn: 1,
        autoclose: true,
        minDate: 0,
    }).on('changeDate', function (selected) {
        var minDate = new Date(selected.date.valueOf());
        $('#endAdd2').datepicker('setStartDate', minDate);
    });
    $("#endAdd2").datepicker()
        .on('changeDate', function (selected) {
            var minDate = new Date(selected.date.valueOf());
            $('#startAdd2').datepicker('setEndDate', minDate);
        });       
});    