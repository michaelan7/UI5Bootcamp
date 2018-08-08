sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	], function(Controller, MessageToast) {
	"use strict";
	
	return Controller.extend("sap.ui.bootcampBootcamp.view.LoginPanel", {
		
		onLoginPress: function() {
			//declaration
			var oTextFieldName = this.getView().byId("username");
			var oTextFieldPass = this.getView().byId("password");
			var user = oTextFieldName.getValue();
			var password = oTextFieldPass.getValue();
			
			//read msg from i18n model
			var oBundle=this.getView().getModel("i18n").getResourceBundle();
			var sRecepient=this.getView().getModel().getProperty("/field/username");
			var sMsg=oBundle.getText("helloMsg", [sRecepient]);

			
			if (user === "michael") {
			
				if (password === "test1234") {
					//MessageToast.show("Welcome back " + user + "!");
					//show message
					MessageToast.show(sMsg);

				} else {
					sap.m.MessageToast.show("Error: Incorrect Password!");
				}
			
			} else if (user === "") {
			
				sap.m.MessageToast.show("Error: Username can't be blank!");
				
			} else  {
				
				sap.m.MessageToast.show("Error: User " + user + " is invalid.");
				
			}
		},
		
		// _getDialog:function(){
		// 	if (!this._oDialog){
		// 		this._oDialog = sap.ui.xmlfragment("sap.ui.bootcampBootcamp.view.LoginDialog", this);
		// 		this.getView().addDependent(this._oDialog);
		// 	}
		// 	return this._oDialog;
		// },
		
		onOpenDialog:function(){
			// this._getDialog().open();
			this.getOwnerComponent().loginDialog.open(this.getView());
		}
		
		// onCloseDialog:function(){
		// 	this._getDialog().close();
		// }
		
	});
});