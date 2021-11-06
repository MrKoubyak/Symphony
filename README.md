# Symphony
Theme for YAKA GitHub Sites based on Bootstrap 5

## Installation
Add this line to your site's `_config.yml`:

```
# Jekyl Theme
remote_theme: YAKAGameStudio/Symphony
```

## Content
Symphony has been scaffolded with all the necessary files and directories to have a new Jekyll site up and running with zero-configuration.

## Layouts
Refers to files within the `_layouts` directory, that define the markup for your theme.

  - `default.html` : The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says ` {{ content }} ` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
  - `home.html` : The layout for your landing-page / home-page / index-page. [[More Info.](#home-layout)]
  - `page.html` : The layout for your documents that contain FrontMatter, but are not posts.
  - `post.html` : The layout for your posts.

### Home Layout

`home.html` is a flexible HTML layout for the site's landing-page / home-page / index-page.

## Usage
