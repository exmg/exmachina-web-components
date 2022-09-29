// requiring path and fs modules
const path = require('path');
const fs = require('fs');

const rootPath = path.join(__dirname, '../');

const config = `
# Where things are
source              : .
destination         : ./_site
collections_dir     : .
plugins_dir         : _plugins # takes an array of strings and loads plugins in that order
layouts_dir         : _layouts
data_dir            : _data
includes_dir        : _includes
sass:
  sass_dir: _sass
collections:
  posts:
    output          : true

# Handling Reading
safe                : true
include             : [".htaccess", "node_modules/"]
exclude             : ["Gemfile", "Gemfile.lock" "vendor/bundle/", "vendor/cache/", "vendor/gems/", "vendor/ruby/"]
keep_files          : [".git", ".svn"]
encoding            : "utf-8"
markdown_ext        : "markdown,mkdown,mkdn,mkd,md"
strict_front_matter : false

# Filtering Content
show_drafts         : null
limit_posts         : 0
future              : false
unpublished         : false

# Plugins
whitelist           : []
plugins             : []

# Conversion
markdown            : kramdown
highlighter         : rouge
lsi                 : false
excerpt_separator   : "\n\n"
incremental         : false

# Serving
detach              : false
port                : 4000
host                : 127.0.0.1
baseurl             : "" 
show_dir_listing    : false

# Outputting
permalink           : date
paginate_path       : /page:num
timezone            : null

quiet               : false
verbose             : false
defaults            : []

liquid:
  error_mode        : warn
  strict_filters    : false
  strict_variables  : false
  
gist:
  noscript: false

# Markdown Processors
kramdown:
  syntax_highlighter: rouge
  math_engine: mathjax
  auto_ids          : true
  entity_output     : as_char
  toc_levels        : [1, 2, 3, 4, 5, 6]
  smart_quotes      : lsquo,rsquo,ldquo,rdquo
  input             : GFM
  hard_wrap         : false
  footnote_nr       : 1
  show_warnings     : false
`;

const main = () => {
  try {
    fs.writeFileSync(path.join(rootPath, '_config.yml'), config);
    console.log('Config for Jekyll successfully created.');
  } catch (error) {
    console.log('An error occured: ', error);
  }
};

main();
