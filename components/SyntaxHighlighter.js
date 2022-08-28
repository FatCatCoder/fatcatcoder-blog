import Highlight, { defaultProps } from "prism-react-renderer";

import Prism from "prism-react-renderer/prism";
import github from "prism-react-renderer/themes/github";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-arduino");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-aspnet");

const SyntaxHighlighter = ({ children , className}) => {
    const language = className.replace(/language-/, '')

  return (
    <Highlight theme={github} {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, backgroundColor: "init", margin: 0, padding: 0}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
};

export default SyntaxHighlighter;