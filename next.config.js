const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(
	withPurgeCss({
		purgeCss: {
			safelist: {
				standard: ["html", "body", "btn"],
				deep: [/^col/, /^row/, /^container/, /^tooltip/, /^modal/],
			},
		},
	})
);
