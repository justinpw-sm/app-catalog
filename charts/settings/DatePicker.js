(function() {
    var Ext = window.Ext4 || window.Ext;

    Ext.define("Rally.apps.charts.settings.DatePicker", {
        extend: "Ext.form.FieldContainer",
        alias: "widget.chartdatepicker",

        items: [
            {
                xtype: "label",
                text: "Date Picker!"
            }
        ]
    });
}());