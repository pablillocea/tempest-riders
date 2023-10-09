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
    	  light: '#F8F1FC',  // Lavender blush
    	  lightgray: '#D3C1E5',  // Light Lilac
    	  gray: '#AB83A1',  // Mauve
    	  darkgray: '#643965',  // Plum
    	  dark: '#321432',  // Dark Purple
    	  secondary: '#AB498A',  // Orchid
    	  tertiary: '#834D7A',  // Vintage Fuchsia
    	  highlight: 'rgba(171, 73, 138, 0.15)'  // Translucent Orchid
  	},
  	darkMode: {
    	  light: '#2D2A33',  // Off-black with a tint of purple
    	  lightgray: '#453A4A',  // Gunmetal with a purple tint
    	  gray: '#6B596E',  // Slate grey with a purple tint
    	  darkgray: '#9A8C9A',  // Lilac Grey
    	  dark: '#EDE0ED',  // Lavender Mist
    	  secondary: '#9C5F92',  // Dark Orchid
    	  tertiary: '#734560',  // Byzantium
    	  highlight: 'rgba(156, 95, 146, 0.15)'  // Translucent Dark Orchid
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
