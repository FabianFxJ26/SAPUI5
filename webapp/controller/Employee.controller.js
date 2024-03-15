sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("sap.btp.sapui5.controller.Employee", {
        handleListEmployeesPress: function (oEvent) {
            //Esta referencia al enrutador se puede utilizar posteriormente
            //para configurar y manejar la navegación dentro de la aplicación.
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            var selectEmployeeID = oEvent.getSource().getBindingContext().getProperty("EmployeeID");
            console.log(selectEmployeeID);
            oRouter.navTo("employeeDetail", {
                employeeID:selectEmployeeID
            });
        },
    });
});