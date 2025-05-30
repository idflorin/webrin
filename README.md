# Webrin Theme

Webrin is a custom subtheme of the Olivero theme for Drupal 11.

## Features

- Inherits all CSS/JS from Olivero
- Customizable CSS and JS
- Minimal, modern layout
- Easy to extend with Twig templates

## Installation

1. Place the `webrin` theme folder in your Drupal site's `/themes/custom/` directory.
2. Enable the theme via the **Appearance** admin page or run:
   ```bash
   drush theme:enable webrin
   drush config:set system.theme default webrin
   ```

## File Structure

- `webrin.info.yml` - Theme metadata and region declarations
- `webrin.libraries.yml` - CSS/JS asset definitions
- `webrin.theme` - PHP preprocess hooks
- `css/custom.css` - Your custom styles
- `js/custom.js` - Custom JavaScript behaviors
- `templates/` - Override Drupal templates here

## Version

**1.0**

## License

GPL-2.0-or-later
