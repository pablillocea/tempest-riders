import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "☠️ The Tempest Riders & The Stralit Key ✨",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "pablillocea.github.io/tempest-riders",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Pirata One",
        body: "JetBrains Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: '#F9F2E3',  // Aged parchment
    	  lightgray: '#D4C3A5',  // Weathered wood
    	  gray: '#967259',  // Aged leather
    	  darkgray: '#4F3822',  // Darkened wood
    	  dark: '#1C140D',  // Near black
     	  secondary: '#AA6B39',  // Rustic gold
     	  tertiary: '#3C2F2F',  // Aged iron
      	  highlight: 'rgba(170, 107, 57, 0.15)',  // Translucent rustic gold
  	},
  	darkMode: {
    	  light: '#2C2C2C',  // Smoky black
    	  lightgray: '#4E4E4E',  // Charcoal
    	  gray: '#757575',  // Mid grey
    	  darkgrkay: '#A9A9A9',  // Light grey
    	  dark: '#FDFDFD',  // Near white
    	  secondary: '#AA6B39',  // Rustic gold
    	  tertiary: '#3C2F2F',  // Aged iron
    	  highlight: 'rgba(170, 107, 57, 0.15)',  // Translucent rustic gold
  	},
      /**
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },*/
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
