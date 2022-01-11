# codemirror-mode-ink
> A CodeMirror mode for the Ink language

## Installation

```console
npm install codemirror codemirror-mode-ink --save
```

## Usage

1. Include `codemirror-mode-ink` into your project.

    ```html
    <!-- You can simply add ink.js as a script tag: -->
    <script src="js/codemirror.js"></script>
    <script src="js/codemirror-mode-ink/dist/ink.js"></script>
    ```

    or

    ```js
    // If you're using frontend build tools like Webpack and Babel,
    // you can simply import the module and register the mode:
    import CodeMirror from 'codemirror'
    import registerInkMode from 'codemirror-mode-ink'
    ```

1. Set 'ink' as the mode when creating the CodeMirror editor.

    ```js
    CodeMirror.fromTextArea(document.getElementById('code'), { mode: 'ink' })
    ```

## License

MIT - See [LICENSE][licenseUrl]

[licenseUrl]: https://github.com/shana/codemirror-mode-ink/blob/master/LICENSE
