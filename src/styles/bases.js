import variables from './variables'

const bases = `
html {
  font-size: 16px;
}

body {
  margin: 0;
  color: #333;
  font-family: ${variables.fontsSansSerif};
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  line-height: 1rem;
  word-wrap: break-word;
  font-feature-settings: "pwid";
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
}

dl {
  margin: 0;
}


dl dt {
  font-weight: 700;
}

dl dd {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

a {
  color: #333;
  text-decoration: none;
}

img {
  max-width: 100%;
  border-style: none;
  vertical-align: middle;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: .75rem 1rem;
  text-align: left;
}

th {
  white-space: nowrap;
}

figcaption,
figure,
article,
aside,
footer,
header,
nav,
section {
  display: block;
}

iframe {
  display: block;
  border: 0;
}

button,
input,
optgroup,
select,
textarea {
  box-sizing: border-box;
  margin: 0;
  font-size: 1rem;
  line-height: 1.25rem;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  border: 0;
  background-color: transparent;
  -webkit-appearance: button;
  cursor: pointer;
}

select,
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

select,
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

select,
input,
textarea:focus {
  outline: 0;
}

input[type="search"] {
  -webkit-appearance: textfield;
  box-sizing: border-box;
}

input[type="search"]::-webkit-search-decoration {
  display: none;
}

input[type="search"]:focus {
  outline-offset: -2px;
}

.turbolinks-progress-bar {
  height: 4px;
}
`

export default bases
