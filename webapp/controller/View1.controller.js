sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sap.prj2.projecthelloworld2.controller.View1", {
            onInit: function () {

            },

            onPress: function (){
                var vi18n = this.getView().getModel("i18n").getResourceBundle();
                var texto = vi18n.getText("description") + ' ' + this.getView().byId("productInput").getValue();
                MessageBox.success(texto);
            }
        });
    });
