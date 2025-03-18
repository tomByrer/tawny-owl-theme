/* (c) Copyright 2025 tomByrer, All Rights Reserved, no reuse authorized, only autmoated distrobution
Usage: bun run themegen.js
*/

// Refreance: https://codepen.io/tomByrer/pen/PwoodQw
// const lch9 = [
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 126.35953858321626
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 166.35953858321625
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 206.35953858321625
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 246.35953858321625
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 286.35953858321625
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 326.35953858321625
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 6.359538583216249
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 46.35953858321625
//   },
//   {
//       "mode": "lch",
//       "l": 29.499065626915545,
//       "c": 9.800795568638161,
//       "h": 86.35953858321625
//   }
// ]
const pale = 'ce'
const paler = 'aa'
const palest = '93'
const faint = '66'
const palette = { //https://codepen.io/tomByrer/pen/PwoodQw
'--pSlate': '#87a2b2',
'--pWalkway': '#a39b9d',
  '--pPurple': '#a398a4', // https://thecolorpedia.com/hex?hex=a39b9d tritanopia
'--pMoss': '#a8b5b4',
'--pTan': '#c6bea4',
'--pBrown': '#b4a679',
'--pWhite': '#d7d8d1',
'--pRust': '#7c5c3d', // shades25: #221a11 #150f0a #070503
'--pAlge': '#404839', //VERY dark
'--pLeaf': '#91a898',
'--pBlack': '#150f0a',
'--pRustLeaf': '#86826a',
'--pRustSlate': '#817f77',
'--pRustWhite': '#a99a87',
'--TEST': '#ff1',
}
const vars = { //names from https://chir.ag/projects/name-that-color/
  '--dark': palette['--pBlack'],
  '--light':  palette['--pWhite'],
  '--text':  palette['--pWhite']+pale,
  '--blacktransparent': '#00000050', //
  '--gray03': palette['--pMoss'],
  '--prop': palette['--pSlate'],
  '--c02': palette['--pMoss'],
  '--c03': palette['--pTan'],
  '--c04': palette['--pMoss'],
  '--c05': palette['--pRust'],
  '--c06': palette['--pBrown'],
  '--c07': palette['--pWhite'],
  '--c08': palette['--pBrown'],
  '--c09': palette['--pTan'],
  '--c10': palette['--pSlate'],
  '--c11': palette['--pPurple'],
  '--TEST': palette['--TEST'],
  '--numeric': palette['--pBrown'],
  '--comment': palette['--pRust'],
  '--commentDelmit': palette['--pRust']+palest,
  '--keyword': palette['--pMoss'],
  '--punctuation': palette['--pLeaf']+paler,
  '--punctuationBright': palette['--pLeaf'],
  '--punctuationDark': palette['--pLeaf']+palest,
  '--storage': palette['--pSlate'],
  '--string': palette['--pTan'],
  '--msc': palette['--pPurple'],
  '--inline': palette['--pPurple'],
  // for JSDoc
 '--jsdStorage': palette['--pRustSlate'],
 '--jsdSPunctuation': palette['--pRustLeaf']+paler,
 '--jsdVariable': palette['--pRustWhite'],
}
const varsTypes = {
  '--keyword': vars['--keyword']+palest,
  '--numeric': vars['--numeric']+palest,
  '--storage': vars['--storage']+palest,
  '--string': vars['--string']+palest,
  '--variable': vars['--light']+palest,
}

const themePreamble = {
  name: 'ulti',
  info: {
    history: 'used JS to create JSON',
  },
  colors: {
    'editor.background': vars['--dark'],
    'editor.foreground': vars['--light'],
    'activityBarBadge.background': vars['--TEST'],
    'sideBarTitle.foreground': vars['--gray03']
  },
}
const themeMain = [
  {
    name: 'Variables',
    scope: [
      'variable',
      'string constant.other.placeholder',

    ],
    settings: { foreground: vars['--light'] }
  },
  {
    name: 'Invalid',
    scope: [ 'invalid', 'invalid.illegal' ],
    settings: { foreground: vars['--c03'] }
  },
  {
    name: 'Keyword, Operator, CSS Class, Misc',
    scope: [
      'entity.other.attribute-name.class',
      'keyword',
      // 'keyword.control',809-
      // 'keyword.other.template',
      // 'keyword.other.substitution',
      'support.function.misc.css', // var()
    ],
    settings: { foreground: vars['--keyword'] }
  },
  {
    name: 'Import, Storage',
    scope: [
      'keyword.control.import.js',
      'keyword.control.from.js',
      'meta.import.js',
      'meta.import.js.jsx',
      'storage.modifier',
      'storage.type',
    ],
    settings: { foreground: vars['--storage'] }
  },
  {
    name: 'MSC',
    scope: [
      'constant.character.escape',
      'keyword.other.unit',
      'meta.template.expression',
      'meta.template.expression.js',
      'meta.template.expression.js.jsx',
      'punctuation.definition.string.template.begin.js',
      'punctuation.definition.string.template.end.js',
      'punctuation.definition.template-expression.begin.js',
      'punctuation.definition.template-expression.end.js',
      'string.regexp',
      'string.template.js',
      'constant.language.boolean.true',
      'constant.language.boolean.flase',
    ],
    settings: { foreground: vars['--msc'] }
  },
  {
    name: 'Punctuation',
    scope: [
      'punctuation',
      'punctuation.definition.tag',
      'punctuation.separator.inheritance.php',
      'punctuation.section.embedded',
      'meta.tag',
    ],
    settings: { foreground: vars['--punctuation'] }
  },
  {
    name: 'Punctuation Separator',
    scope: [
      'punctuation.separator.dictionary.key-value.json',
      'punctuation.separator.key-value.css',
      'punctuation.separator.key-value.js',
    ],
    settings: { foreground: vars['--punctuationDark'] }
  },
  {
    name: 'Punctuation Bright',
    scope: [
      'string.quoted.single.js.jsx punctuation',
    ],
    settings: { foreground: vars['--punctuationBright'] }
  },
  {
    name: 'Punctuation Terminator',
    scope: [
      'punctuation.separator.comma.js',
      'punctuation.separator.comma.js.jsx',
      'punctuation.separator.dictionary.pair.json',
      'punctuation.terminator',
      'punctuation.definition.link.title',
      'punctuation.definition.metadata.markdown',
      'punctuation.terminator.statement.js',
      'punctuation.terminator.statement.js.jsx',
      'punctuation.terminator.statement.rule.css',
      'punctuation.definition.tag.html',
      'punctuation.definition.tag.begin.html',
      'punctuation.definition.tag.end.html',
      'punctuation.definition.tag.begin.js',
      'punctuation.definition.tag.end.js',
    ],
    settings: { foreground: vars['--comment'] }
  },
  {
    name: 'Tag',
    scope: [
      'entity.name.tag',
      'meta.tag.sgml',
      'markup.deleted.git_gutter'
    ],
    settings: { foreground: vars['--c06'] }
  },
  {
    name: 'Function, Special Method',
    scope: [
      'entity.name.function',
      'entity.name.type.class',
      'meta.function-call',
      'variable.function',
      'support.function',
      'keyword.other.special-method'
    ],
    settings: { foreground: vars['--c07'] }
  },
  {
    name: 'Block Level Variables',
    scope: [ 'meta.block variable.other' ],
    settings: { foreground: vars['--c06'] }
  },
  {
    name: 'Other Variable, String Link',
    scope: [ 'support.other.variable', 'string.other.link' ],
    settings: { foreground: vars['--c06'] }
  },
  {
    name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
    scope: [
      'constant.numeric',
      'constant.language',
      'support.constant',
      'constant.character',
      'constant.escape',
      'variable.parameter',
      'keyword.other'
    ],
    settings: { foreground: vars['--numeric'] }
  },
  {
    name: 'String, Symbols, Inherited Class, Markup Heading',
    scope: [
      'string',
      'constant.other.symbol',
      'constant.other.key',
      'entity.other.inherited-class',
      'markup.heading',
      'markup.inserted.git_gutter',
      'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
    ],
    settings: { foreground: vars['--string'] }
  },
  {
    name: 'Class, Support',
    scope: [
      'entity.name',
      'support.class',
      'support.other.namespace.use.php',
      'meta.use.php',
      'support.other.namespace.php',
      'markup.changed.git_gutter',
    ],
    settings: { foreground: vars['--c10'] }
  },

  {
    name: 'Language methods',
    scope: [ 'variable.language' ],
    settings: { fontStyle: 'italic', foreground: vars['--c03'] }
  },

  {
    name: 'Inserted',
    scope: [ 'markup.inserted' ],
    settings: { foreground: vars['--c09'] }
  },
  {
    name: 'Deleted',
    scope: [ 'markup.deleted' ],
    settings: { foreground: vars['--c03'] }
  },
  {
    name: 'Changed',
    scope: [ 'markup.changed' ],
    settings: { foreground: vars['--c04'] }
  },
  {
    name: 'URL',
    scope: [ '*url*', '*link*', '*uri*' ],
    settings: { fontStyle: 'underline' }
  },

// const jscsshtml = { tokenColors: [ 
  {
    name: 'Decorators',
    scope: [
      'tag.decorator.js entity.name.tag.js',
      'tag.decorator.js punctuation.definition.tag.js'
    ],
    settings: { fontStyle: 'italic', foreground: vars['--c07'] }
  },
  {
    name: 'ES7 Bind Operator',
    scope: [
      'source.js constant.other.object.key.js string.unquoted.label.js'
    ],
    settings: { fontStyle: 'italic', foreground: vars['--c03'] }
  },
  {
    name: 'Sub-methods',
    scope: [
      'entity.name.module.js',
      'variable.import.parameter.js',
      'variable.other.class.js'
    ],
    settings: { foreground: vars['--c03'] }
  },
  {
    name: 'entity.name.method.js',
    scope: [ 'entity.name.method.js' ],
    settings: { fontStyle: 'italic', foreground: vars['--c07'] }
  },
  {
    name: 'meta.method.js',
    scope: [
      'meta.class-method.js entity.name.function.js',
      'variable.function.constructor'
    ],
    settings: { foreground: vars['--c07'] }
  },

  {
    name: 'HTML Attributes',
    scope: [
      'text.html.basic entity.other.attribute-name.html',
      'text.html.basic entity.other.attribute-name'
    ],
    settings: { fontStyle: 'italic', foreground: vars['--c10'] }
  },

  {
    name: 'Property Name',
    scope: [
      'entity.other.attribute-name',
      'source.css support.type.property-name',
      'source.sass support.type.property-name',
      'source.scss support.type.property-name',
      'source.less support.type.property-name',
      'source.stylus support.type.property-name',
      'source.postcss support.type.property-name'
    ],
    settings: { foreground: vars['--prop'] }
  },
  {
    name: "CSS ID's",
    scope: [ 'source.sass keyword.control' ],
    settings: { foreground: vars['--c07'] }
  },

// const json = { tokenColors: [
  {
    name: 'JSON Key - Level 0',
    scope: [
      'source.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c04'] }
  },
  {
    name: 'JSON Key - Level 1',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c10'] }
  },
  {
    name: 'JSON Key - Level 2',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c08'] }
  },
  {
    name: 'JSON Key - Level 3',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c03'] }
  },
  {
    name: 'JSON Key - Level 4',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c11'] }
  },
  {
    name: 'JSON Key - Level 5',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c07'] }
  },
  {
    name: 'JSON Key - Level 6',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c06'] }
  },
  {
    name: 'JSON Key - Level 7',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c04'] }
  },
  {
    name: 'JSON Key - Level 8',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
    ],
    settings: { foreground: vars['--c09'] }
  },

// const markdown = { tokenColors: [    
  {
    name: 'Plain Text',
    scope: [
      'meta.jsx.children',
      'text.html.derivative',
      'text.html.markdown',
      'punctuation.definition.list_item.markdown',
      //css
      'constant.other.color',
      'support.constant.color.w3c-standard-color-name.css',
    ],
    settings: { foreground: vars['--text'] }
  },
  {
    name: 'Markdown - Markup Raw Inline',
    scope: [ 'text.html.markdown markup.inline.raw.markdown' ],
    settings: { foreground: vars['--c04'] }
  },
  {
    name: 'Markdown - Markup Raw Inline Punctuation',
    scope: [
      'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'
    ],
    settings: { foreground: vars['--c12'] }
  },
  {
    name: 'Markdown - Heading',
    scope: [
      'markdown.heading',
      'markup.heading | markup.heading entity.name',
      'markup.heading.markdown punctuation.definition.heading.markdown'
    ],
    settings: { foreground: vars['--c09'] }
  },
  {
    name: 'Markup - Italic',
    scope: [ 'markup.italic' ],
    settings: { fontStyle: 'italic', foreground: vars['--inline'] }
  },
  {
    name: 'Markdown Bold, Inline',
    scope: [
      'fenced_code.block.language.markdown',
      'markup.bold',
      'markup.bold string'
    ],
    settings: { fontStyle: 'bold', foreground: vars['--inline'] }
  },
  {
    name: 'Markup - Bold-Italic',
    scope: [
      'markup.bold markup.italic',
      'markup.italic markup.bold',
      'markup.quote markup.bold',
      'markup.bold markup.italic string',
      'markup.italic markup.bold string',
      'markup.quote markup.bold string'
    ],
    settings: { fontStyle: 'bold italic', foreground: vars['--inline'] }
  },
  {
    name: 'Markup - Underline',
    scope: [ 'markup.underline' ],
    settings: { fontStyle: 'underline', foreground: vars['--c08'] }
  },
  {
    name: 'Markdown - Blockquote',
    scope: [ 'markup.quote punctuation.definition.blockquote.markdown' ],
    settings: { foreground: vars['--c12'] }
  },
  {
    name: 'Markup - Quote',
    scope: [ 'markup.quote' ],
    settings: { fontStyle: 'italic' }
  },
  {
    name: 'Markdown - Link',
    scope: [ 'string.other.link.title.markdown' ],
    settings: { foreground: vars['--c07'] }
  },
  {
    name: 'Markdown - Link Description',
    scope: [ 'string.other.link.description.title.markdown' ],
    settings: { foreground: vars['--c04'] }
  },
  {
    name: 'Markdown - Link Anchor',
    scope: [ 'constant.other.reference.link.markdown' ],
    settings: { foreground: vars['--c10'] }
  },
  {
    name: 'Markup - Raw Block',
    scope: [ 'markup.raw.block' ],
    settings: { foreground: vars['--c04'] }
  },
  {
    name: 'Markdown - Raw Block Fenced',
    scope: [ 'markup.raw.block.fenced.markdown' ],
    settings: { foreground: vars['--blacktransparent'] }
  },
  {
    name: 'Markdown - Fenced Bode Block',
    scope: [ 'punctuation.definition.fenced.markdown' ],
    settings: { foreground: vars['--blacktransparent'] }
  },
  {
    name: 'Markdown - Fenced Bode Block Variable',
    scope: [
      'markup.raw.block.fenced.markdown',
      'variable.language.fenced.markdown',
      'punctuation.section.class.end'
    ],
    settings: { foreground: vars['--light'] }
  },
  {
    name: 'Markdown - Fenced Language',
    scope: [ 'variable.language.fenced.markdown' ],
    settings: { foreground: vars['--c12'] }
  },
  {
    name: 'Markdown - Separator',
    scope: [ 'meta.separator' ],
    settings: { fontStyle: 'bold', foreground: vars['--c12'] }
  },
  {
    name: 'Markup - Table',
    scope: [ 'markup.table' ],
    settings: { foreground: vars['--light'] }
  },


  {
    name: 'Comment',
    scope: [ 'comment' ],
    settings: { fontStyle: 'italic', foreground: vars['--comment'] }
  },
  {
    name: 'Comment Delimiter',
    scope: [ 'punctuation.definition.comment', 'punctuation.definition.comment.js' ],
    settings: { fontStyle: 'italic', foreground: vars['--commentDelmit'] }
  },
  {
    name: 'JSDoc Storage',
    scope: [ 'storage.type.class.jsdoc' ],
    settings: { fontStyle: '', foreground: vars['--jsdStorage'] }
  },
  {
    name: 'JSDoc Punctuation',
    scope: [ 'punctuation.definition.block.tag.jsdoc' ],
    settings: { fontStyle: '', foreground: vars['--jsdSPunctuation'] }
  },
  {
    name: 'JSDoc Variable',
    scope: [ 'variable.other.jsdoc' ],
    settings: { fontStyle: '', foreground: vars['--jsdVariable'] }
  },

  {
    name: 'Italics',
    scope: [
      'punctuation.definition.binding-pattern.object.js',
      'punctuation.definition.block.js',
      'punctuation.definition.dictionary.begin',
      'punctuation.definition.dictionary.end',
    ],
    settings: { fontStyle: 'italic' }
  },
]


const themeTypes = [
  {
    name: 'Types Storage',
    scope: [
      'entity.name.type',
      'support.type',
      'storage.modifier.ts',
      'storage.type.interface.ts',
      'storage.type.enum.ts',
      'storage.type.type.ts',
      'support.type.sys-types',
    ],
    settings: { foreground: varsTypes['--storage'] }
  },
  {
    name: 'Types Puncuation',
    scope: [
      'keyword.operator.type.annotation.ts',
      'keyword.operator.type.ts',
      'meta.enum.declaration.ts',
      'meta.type.annotation.ts',
      'punctuation.definition.typeparameters.end.ts',
      'punctuation.definition.typeparameters.start.ts',
    ],
    settings: { foreground: vars['--punctuationDark'] }
  },
  {
    name: 'Types Variable',
    scope: [
      'variable.object.property.ts',
      'variable.other.enummember.ts',
    ],
    settings: { foreground: varsTypes['--variable'] }
  },
  {
    name: 'Types Numeric',
    scope: [
      // 'constant.numeric.decimal.ts',
      'constant.numeric.float.ts',
    ],
    settings: { foreground: varsTypes['--numeric'] }
  },
  {
    name: 'Types Quoted String',
    scope: [
      'meta.type.declaration.ts',
    ],
    settings: { foreground: varsTypes['--string'] }
  },
  {
    name: 'Types Keyword', // as
    scope: [
      'keyword.control.as.ts',
    ],
    settings: { foreground: varsTypes['--keyword'] }
  },
]

const brackets =  {
  "editorBracketHighlight.foreground1": palette['--pWhite']+palest,
  "editorBracketHighlight.foreground2": palette['--pTan']+palest,
  "editorBracketHighlight.foreground3": palette['--pPurple']+palest,
  "editorBracketHighlight.foreground4": palette['--pSlate']+palest,
  "editorBracketHighlight.foreground5": palette['--pMoss']+palest,
  "editorBracketHighlight.foreground6": palette['--pBrown']+palest,

  "editorBracketHighlight.background1": palette['--pWhite']+faint,
  "editorBracketHighlight.background2": palette['--pTan']+faint,
  "editorBracketHighlight.background3": palette['--pPurple']+faint,
  "editorBracketHighlight.background4": palette['--pSlate']+faint,
  "editorBracketHighlight.background5": palette['--pMoss']+faint,
  "editorBracketHighlight.background6": palette['--pBrown']+faint,
}

/*
// turn off JSDoc highlighting
{
    "editor.tokenColorCustomizations": {
        "textMateRules": [
          {
            "name": "storage.type.class.jsdoc",
            "scope":
              "storage.type.class.jsdoc,entity.name.type.instance.jsdoc,variable.other.jsdoc",
            "settings": {
              "foreground": "#608b4e"
            }
          }
        ]
      }
}
*/
// export { vars, themeObj }

// colate in reverse
let themeObj = themePreamble
themeObj['tokenColors'] = [...themeTypes, ...themeMain]
const theme = JSON.stringify(themeObj, null, '\t')
const path = `./themes/tawny-owl-theme.json`
const bytes = await Bun.write(path, theme)
console.log('Wrote', bytes, 'to', path)
console.log(`"workbench.colorCustomizations":`)
console.log(brackets)