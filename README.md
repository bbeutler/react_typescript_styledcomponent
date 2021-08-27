# 📦 React / TypeScript starter project

    $ yarn
    $ yarn dev

## Conventions

* All components go in `components/`
* All files should be named using `dash-case`
* Utility functions go in `lib/`

## VSCode

Install

* https://github.com/styled-components/vscode-styled-components

Add the following to your workspace settings `.vscode/settings.json`

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```
