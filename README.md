# Battuto

Yet another JS tool to boost performance and enrich your styles

## Intro

The idea of **Battuto** came from the talk [Inline Styles are About to Kill CSS](https://www.youtube.com/watch?v=NoaxsCi13yQ) by Colin Megill at the [Css Conf](https://cssconf.com) in 2015.<br>
The purpose of this repo is to provide a `javascript` powered boilerplate for frontend developers who need to style their project followiong a complex logic

## What does it do?

- Inline any style for a fast client-side computing.
- Styles in a single `config.js` a wide range of elements.
- Improves flexibility with subtle **contextual** and **global** variables.
- Explains what code does using detailed comments.
- Provide a set of styles automatically overridable in order to reduce the code length.

## Features

### Configuration

**Battuto** has this configuration options:

- Primary font family – mostly used for `buttons` and `headings`
- Secondary font family – mostly used in `paragraphs`
- `body` background color
- Primary color
- Accent color
- Width of the base section

### Elements

**Battuto** has a `js` file for each element grouped in folders by function. Each folder has a index with the same name, placed in `elements/`, wich imports its elements.<br>
The division below follow the one at used by MDN [here](https://developer.mozilla.org/en/docs/Web/HTML/Element)

### Folder structure

**Battuto** is organised as follows

```
battuto/
└─ _config.js
└─ config/
  └─ _content-sectioning.js

└─ _elements.js
└─ elements/
  └─ _content-sectioning.js
  └─ content-sectioning/
      └─ article.js
      └─ aside.js
      └─ footer.js
      └─ header.js
      └─ heading.js
      └─ nav.js
      └─ section.js
  └─ _text-content.js
  └─ text-content/
      └─ div.js
      └─ hr.js
      └─ li.js
      └─ main.js
      └─ ol.js
      └─ p.js
      └─ ul.js
  └─ _inline-text.js
  └─ inline-text/
      └─ a.js
      └─ code.js
  └─ _media.js
  └─ media/
      └─ img.js
      └─ video.js
  └─ _embedded-content.js
  └─ embedded-content/
      └─ object.js
  └─ _scripting.js
  └─ scripting/
      └─ canvas.js
  └─ _forms.js
  └─ forms/
      └─ button.js
      └─ input.js
      └─ label.js
      └─ select.js
      └─ textarea.js
```

### Elements styled

- `<article>`
- `<aside>`
- `<footer>`
- `<header>`
- `<heading>`
- `<nav>`
- `<section>`
- `<div>`
- `<hr>`
- `<li>`
- `<main>`
- `<ol>`
- `<p>`
- `<ul>`
- `<a>`
- `<code>`
- `<img>`
- `<video>`
- `<object>`
- `<canvas>`
- `<button>`
- `<input>`
- `<label>`
- `<select>`
- `<textarea>`

## Usage

To start mess with the code `cd` into the root folder and run

```
npm run dev
```

Once you have done and you wanna create your minified files and inline everything run

```
npm run production
```

## Browser support

- Chrome (last five)
- Edge (last five)
- Firefox (last five)
- Opera (last five)
- Internet Explorer 8+
- Safari 6+

## Aknowledgements

**Battuto** is a project developed with :heart: by [Nicola Bertelloni](mailto:nicola.bertelloni@gmail.com).<br>
