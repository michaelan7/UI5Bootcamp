sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/bootcampBootcamp/model/models",
	"sap/ui/bootcampBootcamp/controller/LoginDialog"
], function(UIComponent, Device, models, LoginDialog) {
	"use strict";

	return UIComponent.extend("sap.ui.bootcampBootcamp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// set dialog
			this.loginDialog = new LoginDialog();
		}
	});
});