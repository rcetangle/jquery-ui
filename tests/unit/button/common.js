define( [
	"lib/common",
	"ui/button"
], function( common ) {

common.testWidget( "button", {
	defaults: {
		disabled: null,
		showLabel: true,
		label: null,
		icon: null,
		iconPosition: "beginning",
		classes: {
			"ui-button": "ui-corner-all"
		},

		// Callbacks
		create: null
	}
});

} );