import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles/*.css");
  eleventyConfig.addPassthroughCopy("src/images/*.svg");

  eleventyConfig.addPlugin(pluginWebc, { components: "src/_components/**/*.webc" });
};

