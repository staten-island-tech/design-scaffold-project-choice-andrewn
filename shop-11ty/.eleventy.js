module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/style");
    eleventyConfig.addPassthroughCopy("src/media");
    eleventyConfig.addPassthroughCopy("src/md");
    return {
        dir: {
            input:"src",
            output: "dist",
        },
    };
};