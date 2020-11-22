const inspect = require("util").inspect;

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
