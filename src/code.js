export const code = `# Basic ink tutorial script
LONDON, 1872
  Residence of Monsieur Phileas Fogg.
  -> london
  
  TODO: Add some more content

  // comment

  === london ===
  Monsieur Phileas Fogg returned home early from the Reform Club, and in a new-fangled steam-carriage, besides!  
  "Passepartout," said he. "We are going around the world!" &lt;># colour it blue
  
  + "Around the world[?], Monsieur?" # a tag
      I was utterly astonished. 
      -> astonished
  + [Nod curtly.] -> nod
  
  
/* longer comment
*/

  === astonished ===
  &lt;>"You are in jest!" I told him in dignified affront. "You make mock of me, Monsieur."
  "I am quite serious."
  
  + "But of course"
      -> ending
  
    TODO: add more content here
  
  === nod ===
  I nodded curtly, not believing a word of it.
  -> ending
  
  
  === ending
  "We shall circumnavigate the globe within eighty days." He was quite calm as he proposed this wild scheme. "We leave for Paris on the 8:25. In an hour."
  -> END
`

export const htmlScript = `<!-- You can simply add ink.js as a script tag: -->
<script src="js/codemirror.js"></script>
<script src="js/codemirror-mode-ink/dist/ink.js"></script>`

export const jsImport = `// If you're using frontend build tools like Webpack and Babel,
// you can simply import the module and register the mode:
import CodeMirror from 'codemirror'
import 'codemirror-mode-ink'`

export const create = 'CodeMirror.fromTextArea(document.getElementById(\'code\'), { mode: \'ink\' })'
