sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	
	return Controller.extend("sap.ui.bootcampBootcamp.view.app", {

		onInit: function() {
			
			//set data model on view
			var oData = {
				field:{
					username: "michael"
				}
			};
			
			//set data model on view
			var oModel = new JSONModel(oData);
			
			//set model in this view
			this.getView().setModel(oModel);
		
			//set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName:"sap.ui.bootcampBootcamp.i18n.i18n"
			
			});
			this.getView().setModel(i18nModel, "i18n");
		
		},

		onOpenDialog:function(){
			this.getOwnerComponent().loginDialog.open(this.getView());
		}
		
	});
});