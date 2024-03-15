sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("sap.btp.sapui5.controller.EmployeeDetail", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("employeeDetail").attachMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function (oEvent) {
            var oArgs, oView;
            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();
            oView.bindElement({
                path: "/Employees(" + oArgs.employeeID + ")",
                events: {
                    dataRequested: function () {
                        oView.setBusy(true);
                    },
                    dataReceived: function () {
                        oView.setBusy(false);
                    }
                }
            });
        },
        handleNavButtonPressHome: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("employee");
        }
    });

});