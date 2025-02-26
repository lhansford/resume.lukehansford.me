import pluginWebc from "@11ty/eleventy-plugin-webc";
import MarkdownIt from "markdown-it";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles/*.css");
  eleventyConfig.addPassthroughCopy("src/images/*.svg");

  eleventyConfig.addPlugin(pluginWebc, { components: "src/_components/**/*.webc" });

  const md = new MarkdownIt({ linkify: true });

  eleventyConfig.addJavaScriptFunction("fromMarkdown", function(markdown) {
    return md.render(markdown);
  });

  eleventyConfig.addJavaScriptFunction("fromMarkdownInline", function(markdown) {
    return md.renderInline(markdown);
  });
};

