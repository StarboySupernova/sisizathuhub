# Project Overview

## Project Summary
- Total Files (tracked): 117

### Language Breakdown
- JavaScript: 103 files (88.0%)
- JSON: 12 files (10.3%)
- Markdown: 2 files (1.7%)

## Project Structure

```
.
├── 🧠 studio
│   ├── 🧩 components
│   │   └── 🟨 SidebarList.js
│   ├── 📁 config
│   │   ├── 🧠 @sanity
│   │   │   ├── 🔧 data-aspects.json
│   │   │   ├── 📄⚛️ default-layout.json
│   │   │   ├── 🔧 default-login.json
│   │   │   └── 🔧 form-builder.json
│   │   └── 📄 .checksums
│   ├── 📁 plugins
│   │   └── 📄 .gitkeep
│   ├── 📁 schemas
│   │   ├── 📁 documents
│   │   │   ├── 🟨 author.js
│   │   │   ├── 🟨 blog.js
│   │   │   ├── 🟨 category.js
│   │   │   ├── 🟨 objective.js
│   │   │   ├── 🟨 publication.js
│   │   │   ├── 🟨 service.js
│   │   │   ├── 🟨 spotlight.js
│   │   │   └── 🟨 value.js
│   │   ├── 📁 objects
│   │   │   ├── 🟨 customImage.js
│   │   │   ├── 🟨 normalText.js
│   │   │   └── 🟨 richText.js
│   │   └── 🟨 schema.js
│   ├── 📁 static
│   │   ├── 📄 .gitkeep
│   │   └── 📄 favicon.ico
│   ├── 🔒 .env.production
│   ├── 📄 .gitignore
│   ├── 🔧 package-lock.json
│   ├── 🔧 package.json
│   ├── 🔧 sanity.json
│   ├── 🔧 tsconfig.json
│   └── 📄 yarn.lock
├── 🌐 web
│   ├── 📂 src
│   │   ├── 🧩 components
│   │   │   ├── 📁 author
│   │   │   │   ├── 🟨 AuthorGrid.js
│   │   │   │   └── 🟨 AuthorItem.js
│   │   │   ├── 📁 blog
│   │   │   │   ├── 🟨 BlogGrid.js
│   │   │   │   └── 🟨 BlogItem.js
│   │   │   ├── 📁 buttons
│   │   │   │   ├── 🟨 ActionButton.js
│   │   │   │   └── 🟨 Button.js
│   │   │   ├── 📁 category
│   │   │   │   ├── 🟨 ActivityGrid.js
│   │   │   │   ├── 🟨 ActivityItem.js
│   │   │   │   ├── 🟨 CategoryGrid.js
│   │   │   │   ├── 🟨 CategoryItem.js
│   │   │   │   ├── 🟨 ObjectiveGrid.js
│   │   │   │   ├── 🟨 ObjectiveItem.js
│   │   │   │   ├── 🟨 ValueGrid.js
│   │   │   │   └── 🟨 ValueItem.js
│   │   │   ├── 📁 homePage
│   │   │   │   ├── 🟨 ContactSection.js
│   │   │   │   ├── 🟨 FeaturedBlogs.js
│   │   │   │   ├── 🟨 HeroSection.js
│   │   │   │   └── 🟨 TopCategories.js
│   │   │   ├── 📁 search
│   │   │   │   ├── 🟨 SearchField.js
│   │   │   │   ├── 🟨 SearchModal.js
│   │   │   │   ├── 🟨 SearchResult.js
│   │   │   │   └── 🟨 SearchResultItem.js
│   │   │   ├── 📁 typography
│   │   │   │   ├── 🟨 ParagraphText.js
│   │   │   │   └── 🟨 Title.js
│   │   │   ├── 🟨 ConstrainedPortableText.js
│   │   │   ├── 🟨 Footer.js
│   │   │   ├── 🟨 Header.js
│   │   │   ├── 📄⚛️ Layout.js
│   │   │   ├── 🟨 Logo.js
│   │   │   ├── 🟨 MyPortableText.js
│   │   │   ├── 🟨 PageHeader.js
│   │   │   ├── 🟨 PageSpace.js
│   │   │   ├── 🟨 Pagination.js
│   │   │   ├── 🟨 SectionDivider.js
│   │   │   ├── 🟨 seo.js
│   │   │   └── 🟨 TechSphere.js
│   │   ├── 📁 constants
│   │   │   ├── 🟨 buttonTypes.js
│   │   │   ├── 🟨 menu.js
│   │   │   └── 🟨 socialLinks.js
│   │   ├── 📁 contexts
│   │   │   └── 🟨 searchModalContext.js
│   │   ├── 🖼️ images
│   │   │   ├── 📁 svgs
│   │   │   │   ├── 📄 analytics.png
│   │   │   │   ├── 📄 analytics.svg
│   │   │   │   ├── 📄 android.png
│   │   │   │   ├── 📄 android.svg
│   │   │   │   ├── 📄 aws.png
│   │   │   │   ├── 📄 aws.svg
│   │   │   │   ├── 📄 c#.png
│   │   │   │   ├── 📄 c#.svg
│   │   │   │   ├── 📄 c++.png
│   │   │   │   ├── 📄 c++.svg
│   │   │   │   ├── 📄 codeigniter.png
│   │   │   │   ├── 📄 codeigniter.svg
│   │   │   │   ├── 📄 figma.png
│   │   │   │   ├── 📄 figma.svg
│   │   │   │   ├── 📄 firebase.png
│   │   │   │   ├── 📄 firebase.svg
│   │   │   │   ├── 📄 flutter.png
│   │   │   │   ├── 📄 flutter.svg
│   │   │   │   ├── 📄 gatsby.png
│   │   │   │   ├── 📄 gatsby.svg
│   │   │   │   ├── 📄 git.png
│   │   │   │   ├── 📄 git.svg
│   │   │   │   ├── 📄 github.png
│   │   │   │   ├── 📄 graphql.png
│   │   │   │   ├── 📄 graphql.svg
│   │   │   │   ├── 📄 html5.png
│   │   │   │   ├── 📄 html5.svg
│   │   │   │   ├── 📄 jamstack.png
│   │   │   │   ├── 📄 jamstack.svg
│   │   │   │   ├── 📄 java.png
│   │   │   │   ├── 📄 java.svg
│   │   │   │   ├── 📄 js.png
│   │   │   │   ├── 📄 js.svg
│   │   │   │   ├── 📄 kotlin.png
│   │   │   │   ├── 📄 kotlin.svg
│   │   │   │   ├── 📄 laravel.png
│   │   │   │   ├── 📄 laravel.svg
│   │   │   │   ├── 📄 net.png
│   │   │   │   ├── 📄 net.svg
│   │   │   │   ├── 📄 netlify2.png
│   │   │   │   ├── 📄 netlify2.svg
│   │   │   │   ├── 📄 networkx.png
│   │   │   │   ├── 📄 networkx.svg
│   │   │   │   ├── 📄 nitro.png
│   │   │   │   ├── 📄 nitro.svg
│   │   │   │   ├── 📄 nodejs.png
│   │   │   │   ├── 📄 nodejs.svg
│   │   │   │   ├── 📄 npm2.png
│   │   │   │   ├── 📄 npm2.svg
│   │   │   │   ├── 📄 react.png
│   │   │   │   ├── 📄 react.svg
│   │   │   │   ├── 📄 reactnative.png
│   │   │   │   ├── 📄 reactnative.svg
│   │   │   │   ├── 📄 realm.png
│   │   │   │   ├── 📄 realm.svg
│   │   │   │   ├── 📄 redux.png
│   │   │   │   ├── 📄 redux.svg
│   │   │   │   ├── 🧠 sanity.png
│   │   │   │   ├── 🧠 sanity.svg
│   │   │   │   ├── 📄 selenium.png
│   │   │   │   ├── 📄 selenium.svg
│   │   │   │   ├── 📄 socketio.png
│   │   │   │   ├── 📄 socketio.svg
│   │   │   │   ├── 📄 solidjs.png
│   │   │   │   ├── 📄 solidjs.svg
│   │   │   │   ├── 📄 sqlite.png
│   │   │   │   ├── 📄 sqlite.svg
│   │   │   │   ├── 📄 stackblitz.png
│   │   │   │   ├── 📄 stackblitz.svg
│   │   │   │   ├── 📄 stripe.png
│   │   │   │   ├── 📄 stripe.svg
│   │   │   │   ├── 📄 supabase.png
│   │   │   │   ├── 📄 supabase.svg
│   │   │   │   ├── 📄 sveltejs.png
│   │   │   │   ├── 📄 sveltejs.svg
│   │   │   │   ├── 📄 swift.png
│   │   │   │   ├── 📄 swift.svg
│   │   │   │   ├── 🌬️ tailwindcss.png
│   │   │   │   ├── 🌬️ tailwindcss.svg
│   │   │   │   ├── 📄 tencentcloud.png
│   │   │   │   ├── 📄 tencentcloud.svg
│   │   │   │   ├── 📄 tensorflow.png
│   │   │   │   ├── 📄 tensorflow.svg
│   │   │   │   ├── 📄 terraform.png
│   │   │   │   ├── 📄 terraform.svg
│   │   │   │   ├── 📄 typescript.png
│   │   │   │   ├── 📄 typescript.svg
│   │   │   │   ├── 📄 unity.png
│   │   │   │   ├── 📄 unity.svg
│   │   │   │   ├── 📄 unsplash.png
│   │   │   │   ├── 📄 unsplash.svg
│   │   │   │   ├── 📄 v8.png
│   │   │   │   ├── 📄 v8.svg
│   │   │   │   ├── 📄 vapor.png
│   │   │   │   ├── 📄 vapor.svg
│   │   │   │   ├── 📄 visualstudio.png
│   │   │   │   ├── 📄 visualstudio.svg
│   │   │   │   ├── 📄 webstorm.png
│   │   │   │   ├── 📄 webstorm.svg
│   │   │   │   ├── 📄 windows8.svg
│   │   │   │   ├── 📄 wordpress.png
│   │   │   │   ├── 📄 wordpress.svg
│   │   │   │   ├── 📄 xamarin.png
│   │   │   │   ├── 📄 xamarin.svg
│   │   │   │   ├── 📄 xcode.png
│   │   │   │   ├── 📄 xcode.svg
│   │   │   │   ├── 📄 yaml.png
│   │   │   │   ├── 📄 yaml.svg
│   │   │   │   ├── 📄 yarn.png
│   │   │   │   ├── 📄 yarn.svg
│   │   │   │   ├── 📄 zig.png
│   │   │   │   └── 📄 zig.svg
│   │   │   ├── 📄 background.svg
│   │   │   ├── 📄 demt.ico.jpg
│   │   │   ├── 📄 hero1.jpg
│   │   │   ├── 📄 hero2.png
│   │   │   ├── 📄 hero3.jpg
│   │   │   ├── 📄 hero4.jpg
│   │   │   ├── 📄 sisizathuhub.jpg
│   │   │   └── 📄 sisizathulogo.png
│   │   ├── 📑 pages
│   │   │   ├── 🟨 404.js
│   │   │   └── 🟨 index.js
│   │   ├── 🎨 styles
│   │   │   ├── 📁 author
│   │   │   │   ├── 🟨 AuthorGridStyles.js
│   │   │   │   ├── 🟨 AuthorItemStyles.js
│   │   │   │   └── 🟨 SingleAuthorStyles.js
│   │   │   ├── 📁 blog
│   │   │   │   ├── 🟨 BlogGridStyles.js
│   │   │   │   ├── 🟨 BlogItemStyles.js
│   │   │   │   └── 🟨 SingleBlogStyles.js
│   │   │   ├── 📁 buttons
│   │   │   │   ├── 🟨 ActionButtonStyles.js
│   │   │   │   └── 🟨 ButtonStyles.js
│   │   │   ├── 📁 category
│   │   │   │   ├── 🟨 CategoryGridStyles.js
│   │   │   │   ├── 🟨 CategoryItemStyles.js
│   │   │   │   └── 🟨 SingleCategoryStyles.js
│   │   │   ├── 📁 homePage
│   │   │   │   ├── 🟨 FeaturedBlogsStyles.js
│   │   │   │   ├── 🟨 HeroSectionStyles.js
│   │   │   │   └── 🟨 TopCategoriesStyles.js
│   │   │   ├── 📁 search
│   │   │   │   ├── 🟨 SearchFieldStyles.js
│   │   │   │   ├── 🟨 SearchModalStyles.js
│   │   │   │   └── 🟨 SearchResultItemStyles.js
│   │   │   ├── 📁 typography
│   │   │   │   ├── 🟨 ParagraphTextStyles.js
│   │   │   │   └── 🟨 SectionTitleStyles.js
│   │   │   ├── 🟨 CustomImageStyles.js
│   │   │   ├── 🟨 FooterStyles.js
│   │   │   ├── 🟨 GlobalStyles.js
│   │   │   ├── 🟨 HeaderStyles.js
│   │   │   ├── 🟨 HomePageStyles.js
│   │   │   ├── 🟨 LogoStyles.js
│   │   │   ├── 🟨 NotFoundPageStyles.js
│   │   │   ├── 🟨 PageHeaderStyles.js
│   │   │   ├── 🟨 PageSpaceStyles.js
│   │   │   └── 🟨 PaginationStyles.js
│   │   ├── 📁 templates
│   │   │   ├── 🟨 activity-list.js
│   │   │   ├── 🟨 author-list.js
│   │   │   ├── 🟨 blog-list.js
│   │   │   ├── 🟨 category-list.js
│   │   │   ├── 🟨 publication-list.js
│   │   │   ├── 🟨 single-activity.js
│   │   │   ├── 🟨 single-author.js
│   │   │   ├── 🟨 single-blog.js
│   │   │   ├── 🟨 single-category.js
│   │   │   └── 🟨 single-publication.js
│   │   └── 🛠️ utils
│   │       └── 🟨 getSanityImageData.js
│   ├── 📁 static
│   │   └── 📄 demt.ico
│   ├── 🟨 .eslintrc.js
│   ├── 📄 .gitignore
│   ├── 🟨 gatsby-browser.js
│   ├── 🟨 gatsby-config.js
│   ├── 🟨 gatsby-node.js
│   ├── 🟨 gatsby-ssr.js
│   ├── 🔧 package-lock.json
│   ├── 🔧 package.json
│   ├── 📝 README.md
│   └── 🟨 sanity-config.js
├── 📄 .eslintignore
├── 🟨 .eslintrc.js
├── 📄 .gitignore
├── 📄 banner.png
├── 🟨 generate_structure.js
├── 🔧 package-lock.json
├── 🔧 package.json
├── 📝 README.md
└── 📄 yarn.lock
```

# File Contents (selected)

## `.eslintrc.js`
```
module.exports = {
  extends: ['wesbos'],
  rules: {
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-pascal-case': 'error',
  },
};

```
## `generate_structure.js`
```
#!/usr/bin/env node

/* eslint-disable */ // ← Prevents ESLint from breaking this file

/**
 * Advanced Project Structure Generator
 * With smart folder & tech-specific emojis
 */

const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = "project_structure.md";

const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  ".next",
  "out",
  "DerivedData",
  "Pods",
  ".build",
  "vendor",
  "__MACOSX",
  ".vscode",
  ".idea",
]);

const ALLOWED_EXT = new Set([
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".json",
  ".html",
  ".css",
  ".scss",
  ".md",
  ".swift",
  ".m",
  ".mm",
  ".h",
  ".c",
  ".cpp",
  ".plist",
  ".xml",
  ".sh",
  ".php",
  ".blade.php",
]);

const EXT_TO_LANG = {
  ".js": "JavaScript",
  ".ts": "TypeScript",
  ".jsx": "JSX",
  ".tsx": "TSX",
  ".json": "JSON",
  ".html": "HTML",
  ".css": "CSS",
  ".scss": "SCSS",
  ".md": "Markdown",
  ".swift": "Swift",
  ".m": "Objective-C",
  ".mm": "Objective-C++",
  ".h": "Header",
  ".c": "C",
  ".cpp": "C++",
  ".plist": "Plist",
  ".xml": "XML",
  ".sh": "Shell",
  ".php": "PHP",
  ".blade.php": "Blade",
};

// Tech-specific emoji mapping
function getFileEmoji(filename) {
  const ext = path.extname(filename).toLowerCase();
  const name = filename.toLowerCase();

  // React / Frontend
  if (
    name.includes("app.") ||
    name.includes("page.") ||
    name.includes("layout.")
  )
    return "📄⚛️ ";
  if (name.includes("component") || name.includes("comp.")) return "🧩 ";
  if (ext === ".tsx" || ext === ".jsx") return "⚛️ ";
  if (ext === ".ts") return "🔷 ";
  if (ext === ".js") return "🟨 ";

  // Styling
  if (ext === ".css" || ext === ".scss") return "🎨 ";
  if (name.includes("tailwind")) return "🌬️ ";
  if (name.includes("vite.config")) return "⚡ ";
  if (name.includes("webpack")) return "📦 ";

  // Config & Data
  if (ext === ".json") return "🔧 ";
  if (name.includes("config") || name.includes("setup")) return "⚙️ ";
  if (name.includes("env")) return "🔒 ";

  // Sanity Studio
  if (name.includes("sanity") || name.includes("schema")) return "🧠 ";
  if (name.includes("desk") || name.includes("structure")) return "📋 ";

  // Backend / PHP / Laravel
  if (ext === ".php" || ext === ".blade.php") return "🐘 ";
  if (name.includes("controller")) return "🎮 ";
  if (name.includes("model")) return "📊 ";
  if (name.includes("route")) return "🛤️ ";

  // Default files
  if (ext === ".md") return "📝 ";
  if (ext === ".sh") return "🐚 ";

  return "📄 ";
}

function getFolderEmoji(folderName) {
  const name = folderName.toLowerCase();

  if (name === "src" || name === "source") return "📂 ";
  if (name === "components" || name === "comp") return "🧩 ";
  if (name === "pages" || name === "routes") return "📑 ";
  if (name === "styles" || name === "css" || name === "scss") return "🎨 ";
  if (name === "public") return "🌐 ";
  if (name === "studio") return "🧠 ";
  if (name === "web") return "🌐 ";
  if (name.includes("sanity")) return "🧠 ";
  if (name.includes("api") || name === "server") return "🔌 ";
  if (name.includes("utils") || name === "lib") return "🛠️ ";
  if (name.includes("assets") || name.includes("images")) return "🖼️ ";
  if (name.includes("tests") || name.includes("__tests__")) return "🧪 ";

  return "📁 ";
}

// Walk function (collects files)
function walk(dir, fileList = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (IGNORED_DIRS.has(entry.name) || entry.name === OUTPUT_FILE) continue;

      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath, fileList);
      } else {
        fileList.push(fullPath);
      }
    }
  } catch (err) {
    console.warn(`Warning: Could not read ${dir}`);
  }
  return fileList;
}

function writeLine(stream, line = "") {
  stream.write(line + "\n");
}

// Stats
function computeStats(files) {
  const stats = { totalFiles: 0, languages: {} };
  files.forEach((f) => {
    const ext = path.extname(f).toLowerCase();
    if (!ALLOWED_EXT.has(ext)) return;
    stats.totalFiles++;
    const lang = EXT_TO_LANG[ext] || ext.slice(1).toUpperCase();
    stats.languages[lang] = (stats.languages[lang] || 0) + 1;
  });
  return stats;
}

function formatLanguageStats(stats) {
  const total = stats.totalFiles || 1;
  return Object.entries(stats.languages)
    .sort((a, b) => b[1] - a[1])
    .map(
      ([lang, count]) =>
        `- ${lang}: ${count} files (${((count / total) * 100).toFixed(1)}%)`,
    );
}

// Smart Tree with emojis
function printTree(dir, prefix = "", stream) {
  try {
    let entries = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter(
        (entry) => !IGNORED_DIRS.has(entry.name) && entry.name !== OUTPUT_FILE,
      )
      .sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
      });

    entries.forEach((entry, index) => {
      const isLast = index === entries.length - 1;
      const connector = isLast ? "└── " : "├── ";
      const newPrefix = prefix + (isLast ? "    " : "│   ");

      if (entry.isDirectory()) {
        const emoji = getFolderEmoji(entry.name);
        writeLine(stream, prefix + connector + emoji + entry.name);
        printTree(path.join(dir, entry.name), newPrefix, stream);
      } else {
        const emoji = getFileEmoji(entry.name);
        writeLine(stream, prefix + connector + emoji + entry.name);
      }
    });
  } catch (err) {}
}

// ====================== MAIN ======================
(function main() {
  const args = process.argv.slice(2);
  const NO_CONTENT = args.includes("--no-content");
  const root = process.cwd();
  const output = fs.createWriteStream(OUTPUT_FILE, { encoding: "utf8" });

  console.log("🔍 Scanning project...");
  const files = walk(root);
  const stats = computeStats(files);

  writeLine(output, "# Project Overview\n");
  writeLine(output, "## Project Summary");
  writeLine(output, `- Total Files (tracked): ${stats.totalFiles}\n`);
  writeLine(output, "### Language Breakdown");
  formatLanguageStats(stats).forEach((line) => writeLine(output, line));
  writeLine(output, "");

  writeLine(output, "## Project Structure\n");
  writeLine(output, "```");
  writeLine(output, ".");
  printTree(root, "", output);
  writeLine(output, "```");

  if (!NO_CONTENT) {
    writeLine(output, "\n# File Contents (selected)\n");
    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase();
      if (!ALLOWED_EXT.has(ext)) return;
      try {
        let content = fs.readFileSync(file, "utf8");
        if (content.length > 15000)
          content = content.slice(0, 15000) + "\n... (truncated)";
        writeLine(output, `## \`${path.relative(root, file)}\``);
        writeLine(output, "```");
        writeLine(output, content);
        writeLine(output, "```");
      } catch (e) {}
    });
  } else {
    writeLine(
      output,
      "\n# File Contents\n(Skipped — run with `--content` to include)",
    );
  }

  output.end();
  console.log(`✅ Done! Generated → ${OUTPUT_FILE}`);
})();

```
## `package-lock.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "react-js-fullstack-web-app",
      "version": "1.0.0",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.16.0",
        "@babel/eslint-parser": "^7.16.3",
        "@babel/preset-react": "^7.16.0",
        "@types/node": "^16.11.12",
        "@typescript-eslint/eslint-plugin": "^5.6.0",
        "@typescript-eslint/parser": "^5.6.0",
        "eslint": "^8.4.1",
        "eslint-config-airbnb": "^19.0.2",
        "eslint-config-airbnb-typescript": "^16.1.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-config-wesbos": "^3.0.2",
        "eslint-plugin-html": "^6.2.0",
        "eslint-plugin-import": "^2.25.3",
        "eslint-plugin-jsx-a11y": "^6.5.1",
        "eslint-plugin-prettier": "^4.0.0",
        "eslint-plugin-react": "^7.27.1",
        "eslint-plugin-react-hooks": "^4.3.0",
        "prettier": "^2.5.1",
        "typescript": "^4.5.2"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",
      "integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.23.4",
        "chalk": "^2.4.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.16.8.tgz",
      "integrity": "sha512-m7OkX0IdKLKPpBlJtF561YJal5y/jyI5fNfWbPxh2D/nbzzGI4qRyrD8xO2jB24u7l+5I2a43scCG2IrfjC50Q==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.16.0.tgz",
      "integrity": "sha512-mYZEvshBRHGsIAiyH5PzCFTCfbWfoYbO/jcSdXQSUQu1/pW0xDZAUP7KEc32heqWTAfAHhV9j1vH8Sav7l+JNQ==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.16.0",
        "@babel/generator": "^7.16.0",
        "@babel/helper-compilation-targets": "^7.16.0",
        "@babel/helper-module-transforms": "^7.16.0",
        "@babel/helpers": "^7.16.0",
        "@babel/parser": "^7.16.0",
        "@babel/template": "^7.16.0",
        "@babel/traverse": "^7.16.0",
        "@babel/types": "^7.16.0",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/eslint-parser": {
      "version": "7.16.3",
      "resolved": "https://registry.npmjs.org/@babel/eslint-parser/-/eslint-parser-7.16.3.tgz",
      "integrity": "sha512-iB4ElZT0jAt7PKVaeVulOECdGe6UnmA/O0P9jlF5g5GBOwDVbna8AXhHRu4s27xQf6OkveyA8iTDv1jHdDejgQ==",
      "dev": true,
      "dependencies": {
        "eslint-scope": "^5.1.1",
        "eslint-visitor-keys": "^2.1.0",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": "^10.13.0 || ^12.13.0 || >=14.0.0"
      },
      "peerDependencies": {
        "@babel/core": ">=7.11.0",
        "eslint": "^7.5.0 || ^8.0.0"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.5.tgz",
      "integrity": "sha512-BPssCHrBD+0YrxviOa3QzpqwhNIXKEtOa2jQrm4FlmkC2apYgRnQcmPWiGZDlGxiNtltnUFolMe8497Esry+jA==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.23.5",
        "@jridgewell/gen-mapping": "^0.3.2",
        "@jridgewell/trace-mapping": "^0.3.17",
        "jsesc": "^2.5.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.16.7.tgz",
      "integrity": "sha512-s6t2w/IPQVTAET1HitoowRGXooX8mCgtuP5195wD/QJPV6wYjpujCGF7JuMODVX2ZAJOf1GT6DT9MHEZvLOFSw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.16.7.tgz",
      "integrity": "sha512-mGojBwIWcwGD6rfqgRXVlVYmPAv7eOpIemUG3dGnDdCY4Pae70ROij3XmfrH6Fa1h1aiDylpglbZyktfzyo/hA==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.16.4",
        "@babel/helper-validator-option": "^7.16.7",
        "browserslist": "^4.17.5",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-environment-visitor": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",
      "integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",
      "integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.22.15",
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",
      "integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.16.7.tgz",
      "integrity": "sha512-LVtS6TqjJHFc+nYeITRo6VLXve70xmq7wPhWTqDJusJEgGmkAACWwMiTNrvfoQo6hEhFwAIixNkvB0jPXDL8Wg==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.16.7.tgz",
      "integrity": "sha512-gaqtLDxJEFCeQbYp9aLAefjhkKdjKcdh6DB7jniIGU3Pz52WAmP268zK0VgPz9hUNkMSYeH976K2/Y6yPadpng==",
      "dev": true,
      "dependencies": {
        "@babel/helper-environment-visitor": "^7.16.7",
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-simple-access": "^7.16.7",
        "@babel/helper-split-export-declaration": "^7.16.7",
        "@babel/helper-validator-identifier": "^7.16.7",
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.16.7",
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.16.7.tgz",
      "integrity": "sha512-Qg3Nk7ZxpgMrsox6HreY1ZNKdBq7K72tDSliA6dCl5f007jR4ne8iD5UzuNnCJH2xBf2BEEVGr+/OL6Gdp7RxA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.16.7.tgz",
      "integrity": "sha512-ZIzHVyoeLMvXMN/vok/a4LWRy8G2v205mNP0XOuf9XRLyX5/u9CnVulUtDgUTama3lT+bf/UqucuZjqiGuTS1g==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-split-export-declaration": {
      "version": "7.22.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.22.6.tgz",
      "integrity": "sha512-AsUnxuLhRYsisFiaJwvp1QF+I3KjD5FOxut14q/GzovUe6orHLesW2C7d754kRm53h5gqrz6sFl6sxc4BVtE/g==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.23.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.23.4.tgz",
      "integrity": "sha512-803gmbQdqwdf4olxrX4AJyFBV/RTr3rSmOj0rKwesmzlfhYNDEs+/iOcznzpNWlJlIlTJC2QfPFcHB6DlzdVLQ==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.22.20.tgz",
      "integrity": "sha512-Y4OZ+ytlatR8AI+8KZfKuL5urKp7qey08ha31L8b3BwewJAoJamTzyvxPR/5D+KkdJCGPq/+8TukHBlY10FX9A==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.16.7.tgz",
      "integrity": "sha512-TRtenOuRUVo9oIQGPC5G9DgK4743cdxvtOw0weQNpZXaS16SCBi5MNjZF8vba3ETURjZpTbVn7Vvcf2eAwFozQ==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.16.7.tgz",
      "integrity": "sha512-9ZDoqtfY7AuEOt3cxchfii6C7GDyyMBffktR5B2jvWv8u2+efwvpnVKXMWzNehqy68tKgAfSwfdw/lWpthS2bw==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.16.7",
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/highlight": {
      "version": "7.23.4",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.23.4.tgz",
      "integrity": "sha512-acGdbYSfp2WheJoJm/EBBBLh/ID8KDc64ISZ9DYtBmC8/Q204PZJLHyzeB5qMzJ5trcOkybd78M4x2KWsUq++A==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.22.20",
        "chalk": "^2.4.2",
        "js-tokens": "^4.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.23.5.tgz",
      "integrity": "sha512-hOOqoiNXrmGdFbhgCzu6GiURxUgM27Xwd/aPuu8RfHEZPBzL1Z54okAHAQjXfcQNwvrlkAmAp4SlRTZ45vlthQ==",
      "dev": true,
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.16.7.tgz",
      "integrity": "sha512-Esxmk7YjA8QysKeT3VhTXvF6y77f/a91SIs4pWb4H2eWGQkCKFgQaG6hdoEVZtGsrAcb2K5BW66XsOErD4WU3Q==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-display-name": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.16.7.tgz",
      "integrity": "sha512-qgIg8BcZgd0G/Cz916D5+9kqX0c7nPZyXaP8R2tLNN5tkyIZdG5fEwBrxwplzSnjC1jvQmyMNVwUCZPcbGY7Pg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.16.7.tgz",
      "integrity": "sha512-8D16ye66fxiE8m890w0BpPpngG9o9OVBBy0gH2E+2AR7qMR2ZpTYJEqLxAsoroenMId0p/wMW+Blc0meDgu0Ag==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-jsx": "^7.16.7",
        "@babel/types": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-development": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugin-transform-react-jsx-development-7.16.7.tgz",
      "integrity": "sha512-RMvQWvpla+xy6MlBpPlrKZCMRs2AGiHOGHY3xRwl0pEeim348dDyxeH4xBsMPbIMhujeq7ihE702eM2Ew0Wo+A==",
      "dev": true,
      "dependencies": {
        "@babel/plugin-transform-react-jsx": "^7.16.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-pure-annotations": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-pure-annotations/-/plugin-transform-react-pure-annotations-7.16.7.tgz",
      "integrity": "sha512-hs71ToC97k3QWxswh2ElzMFABXHvGiJ01IB1TbYQDGeWRKWz/MPUTh5jGExdHvosYKpnJW5Pm3S4+TA3FyX+GA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
  
... (truncated)
```
## `package.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "keywords": [],
  "author": "christian simbarashe",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/eslint-parser": "^7.16.3",
    "@babel/preset-react": "^7.16.0",
    "@types/node": "^16.11.12",
    "@typescript-eslint/eslint-plugin": "^5.6.0",
    "@typescript-eslint/parser": "^5.6.0",
    "eslint": "^8.4.1",
    "eslint-config-airbnb": "^19.0.2",
    "eslint-config-airbnb-typescript": "^16.1.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-config-wesbos": "^3.0.2",
    "eslint-plugin-html": "^6.2.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.27.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "prettier": "^2.5.1",
    "typescript": "^4.5.2"
  }
}

```
## `README.md`
```
![Mwenje-Geology](./mwenje.png)

# Mwenje Geology. By Christian Simbarashe Dombodzvuku

A complete full-stack web-app created with `JAMstack`. ([Gatsby.js](https://www.gatsbyjs.org/) & [Sanity.io](https://sanity.io)).

<a href="https://www.buymeacoffee.com/" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 45px !important;width: 162.75px !important;" ></a>

---

## Project Details

`Gatsby.js` was used for the frontend and `Sanity.io` for the headless CMS, with `graphql` used to source content

- [React.js](https://reactjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)
  - [Gatsby-plugin-image](https://www.gatsbyjs.org/packages/gatsby-plugin-image/)
    - Static Image & Gatsby Image
  - Gatsby Page
    - Normal Pages
    - programmatically created pages
  - Gatsby Pagination
  - [Gatsby-plugin-local-search](https://www.gatsbyjs.org/packages/gatsby-plugin-local-search/)
  - [GraphQL](https://graphql.org/)
    - Static Query & Page Query
- [Sanity.io](https://sanity.io/)
  - Sanity Schema
  - Custom Blocks
    - Custom Rich-text Block
    - Custom Code Block
  - Studio Customization
- [React-PortableText](https://github.com/portabletext/react-portabletext)
- [Axios](https://www.npmjs.com/package/axios)

## Tools Used

- UI Design: Figma
- Code Editor: VS Code

## License

[MIT][mit]

✨🚀

[mit]: https://choosealicense.com/licenses/mit/

```
## `studio\components\SidebarList.js`
```
import S from "@sanity/desk-tool/structure-builder";
import { MdStar } from "react-icons/md";

function SidebarList() {
  return S.list()
    .title("Sisizathu Hub")
    .items([
      S.listItem()
        .title("Spotlight")
        .id("spotlightItems")
        .icon(MdStar)
        .child(S.editor().schemaType("spotlight").documentId("spotlightItems")),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "spotlight",
      ),
    ]);
}

export default SidebarList;

```
## `studio\config\@sanity\data-aspects.json`
```
{
  "listOptions": {}
}

```
## `studio\config\@sanity\default-layout.json`
```
{
  "toolSwitcher": {
    "order": [],
    "hidden": []
  }
}

```
## `studio\config\@sanity\default-login.json`
```
{
  "providers": {
    "mode": "append",
    "redirectOnSingle": false,
    "entries": []
  }
}

```
## `studio\config\@sanity\form-builder.json`
```
{
  "images": {
    "directUploads": true
  }
}

```
## `studio\package-lock.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "react-js-fullstack-web-app",
      "version": "1.0.0",
      "license": "UNLICENSED",
      "dependencies": {
        "@sanity/base": "^2.25.4",
        "@sanity/code-input": "^2.27.0",
        "@sanity/core": "^2.25.0",
        "@sanity/default-layout": "^2.25.4",
        "@sanity/default-login": "^2.24.1",
        "@sanity/desk-tool": "^2.25.4",
        "@sanity/vision": "^2.25.4",
        "date-fns": "^2.28.0",
        "prop-types": "^15.7",
        "react": "^17.0",
        "react-dom": "^17.0",
        "react-icons": "^4.3.1",
        "styled-components": "^5.2.0"
      },
      "devDependencies": {
        "dotenv": "^16.0.0"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",
      "integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",
      "integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",
      "dependencies": {
        "@babel/highlight": "^7.23.4",
        "chalk": "^2.4.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.23.5.tgz",
      "integrity": "sha512-uU27kfDRlhfKl+w1U6vp16IuvSLtjAxdArVXPa9BvLkrr7CYIsxH5adpHObeAGY/41+syctUWOZ140a2Rvkgjw==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.23.5.tgz",
      "integrity": "sha512-Cwc2XjUrG4ilcfOw4wBAK+enbdgwAcAJCfGUItPBKR7Mjw4aEfAFYrLxeRp4jWgtNIKn3n2AlBOfwwafl+42/g==",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.23.5",
        "@babel/generator": "^7.23.5",
        "@babel/helper-compilation-targets": "^7.22.15",
        "@babel/helper-module-transforms": "^7.23.3",
        "@babel/helpers": "^7.23.5",
        "@babel/parser": "^7.23.5",
        "@babel/template": "^7.22.15",
        "@babel/traverse": "^7.23.5",
        "@babel/types": "^7.23.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/@babel/core/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/@babel/generator": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.5.tgz",
      "integrity": "sha512-BPssCHrBD+0YrxviOa3QzpqwhNIXKEtOa2jQrm4FlmkC2apYgRnQcmPWiGZDlGxiNtltnUFolMe8497Esry+jA==",
      "dependencies": {
        "@babel/types": "^7.23.5",
        "@jridgewell/gen-mapping": "^0.3.2",
        "@jridgewell/trace-mapping": "^0.3.17",
        "jsesc": "^2.5.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.22.5.tgz",
      "integrity": "sha512-LvBTxu8bQSQkcyKOU+a1btnNFQ1dMAd0R6PyW3arXes06F6QLWLIrd681bxRPIXlrMGR3XYnW9JyML7dP3qgxg==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.22.15.tgz",
      "integrity": "sha512-QkBXwGgaoC2GtGZRoma6kv7Szfv06khvhFav67ZExau2RaXzy8MpHSMO2PNoP2XtmQphJQRHFfg77Bq731Yizw==",
      "dependencies": {
        "@babel/types": "^7.22.15"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.22.15.tgz",
      "integrity": "sha512-y6EEzULok0Qvz8yyLkCvVX+02ic+By2UdOhylwUOvOn9dvYc9mKICJuuU1n1XBI02YWsNsnrY1kc6DVbjcXbtw==",
      "dependencies": {
        "@babel/compat-data": "^7.22.9",
        "@babel/helper-validator-option": "^7.22.15",
        "browserslist": "^4.21.9",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.23.5.tgz",
      "integrity": "sha512-QELlRWxSpgdwdJzSJn4WAhKC+hvw/AtHbbrIoncKHkhKKR/luAlKkgBDcri1EzWAo8f8VvYVryEHN4tax/V67A==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-function-name": "^7.23.0",
        "@babel/helper-member-expression-to-functions": "^7.23.0",
        "@babel/helper-optimise-call-expression": "^7.22.5",
        "@babel/helper-replace-supers": "^7.22.20",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",
        "@babel/helper-split-export-declaration": "^7.22.6",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.22.15.tgz",
      "integrity": "sha512-29FkPLFjn4TPEa3RE7GpW+qbE8tlsu3jntNYNfcGsc49LphF1PQIiD+vMZ1z1xVOKt+93khA9tc2JBs3kBjA7w==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "regexpu-core": "^5.3.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.4.3.tgz",
      "integrity": "sha512-WBrLmuPP47n7PNwsZ57pqam6G/RGo1vw/87b0Blc53tZNGZ4x7YvZ6HgQe2vo1W/FR20OgjeZuGXzudPiXHFug==",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.22.6",
        "@babel/helper-plugin-utils": "^7.22.5",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider/node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/@babel/helper-environment-visitor": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",
      "integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",
      "integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",
      "dependencies": {
        "@babel/template": "^7.22.15",
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",
      "integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.23.0.tgz",
      "integrity": "sha512-6gfrPwh7OuT6gZyJZvd6WbTfrqAo7vm4xCzAXOusKqq/vWdKXphTpj5klHKNmRUU6/QRGlBsyU9mAIPaWHlqJA==",
      "dependencies": {
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.22.15.tgz",
      "integrity": "sha512-0pYVBnDKZO2fnSPCrgM/6WMc7eS20Fbok+0r88fp+YtWVLZrp4CkafFGIp+W0VKw4a22sgebPT99y+FDNMdP4w==",
      "dependencies": {
        "@babel/types": "^7.22.15"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.23.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.23.3.tgz",
      "integrity": "sha512-7bBs4ED9OmswdfDzpz4MpWgSrV7FXlc3zIagvLFjS5H+Mk7Snr21vQ6QwrsoCGMfNC4e4LQPdoULEt4ykz0SRQ==",
      "dependencies": {
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-module-imports": "^7.22.15",
        "@babel/helper-simple-access": "^7.22.5",
        "@babel/helper-split-export-declaration": "^7.22.6",
        "@babel/helper-validator-identifier": "^7.22.20"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.22.5.tgz",
      "integrity": "sha512-HBwaojN0xFRx4yIvpwGqxiV2tUfl7401jlok564NgB9EHS1y6QT17FmKWm4ztqjeVdXLuC4fSvHc5ePpQjoTbw==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.22.5.tgz",
      "integrity": "sha512-uLls06UVKgFG9QD4OeFYLEGteMIAa5kpTPcFL28yuCIIzsf6ZyKZMllKVOCZFhiZ5ptnwX4mtKdWCBE/uT4amg==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-remap-async-to-generator": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.22.20.tgz",
      "integrity": "sha512-pBGyV4uBqOns+0UvhsTO8qgl8hO89PmiDYv+/COyp1aeMcmfrfruz+/nCMFiYyFF/Knn0yfrC85ZzNFjembFTw==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-wrap-function": "^7.22.20"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.22.20.tgz",
      "integrity": "sha512-qsW0In3dbwQUbK8kejJ4R7IHVGwHJlV6lpG6UA7a9hSa2YEiAib+N1T2kr6PEeUT+Fl7najmSOS6SmAwCHK6Tw==",
      "dependencies": {
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-member-expression-to-functions": "^7.22.15",
        "@babel/helper-optimise-call-expression": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.22.5.tgz",
      "integrity": "sha512-n0H99E/K+Bika3++WNL17POvo4rKWZ7lZEp1Q+fStVbUi8nxPQEBOlTmCOxW/0JsS56SKKQ+ojAe2pHKJHN35w==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-skip-transparent-ex
... (truncated)
```
## `studio\package.json`
```
{
  "name": "react-js-fullstack-web-app",
  "private": true,
  "version": "1.0.0",
  "description": "",
  "main": "package.json",
  "author": "Christian Simbarashe",
  "license": "UNLICENSED",
  "scripts": {
    "start": "sanity start",
    "build": "sanity build"
  },
  "keywords": [
    "Sisizathu Hub",
    "software",
    "technology",
    "website hosting"
  ],
  "dependencies": {
    "@sanity/base": "^2.25.4",
    "@sanity/code-input": "^2.27.0",
    "@sanity/core": "^2.25.0",
    "@sanity/default-layout": "^2.25.4",
    "@sanity/default-login": "^2.24.1",
    "@sanity/desk-tool": "^2.25.4",
    "@sanity/vision": "^2.25.4",
    "date-fns": "^2.28.0",
    "prop-types": "^15.7",
    "react": "^17.0",
    "react-dom": "^17.0",
    "react-icons": "^4.3.1",
    "styled-components": "^5.2.0"
  },
  "devDependencies": {
    "dotenv": "^16.0.0"
  }
}

```
## `studio\sanity.json`
```
{
  "root": true,
  "api": {
    "projectId": "mmhckrk8",
    "dataset": "production"
  },
  "project": {
    "name": "SisizathuHub"
  },
  "plugins": [
    "@sanity/base",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/desk-tool",
    "@sanity/code-input"
  ],
  "env": {
    "development": {
      "plugins": ["@sanity/vision"]
    }
  },
  "parts": [
    {
      "name": "part:@sanity/base/schema",
      "path": "./schemas/schema"
    },
    {
      "name": "part:@sanity/desk-tool/structure",
      "path": "./components/SidebarList"
    }
  ]
}

```
## `studio\schemas\documents\author.js`
```
import { FcBusinessman } from 'react-icons/fc';

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: FcBusinessman,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'customImage',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};

```
## `studio\schemas\documents\blog.js`
```
import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Post',
  name: 'blog', // name is the id, which we use to reference this object in code
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Tag',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime', // datetime is a custom type in sanity
    },
    {
      title: 'Category',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
      description: 'Overview',
    },
    {
      title: 'Activity Description',
      name: 'body',
      type: 'richText',
    },
  ],
  preview: {
    // customizing blog preview
    select: {
      // selecting which field I want to show on the preview, and preparing them (destructuring the props selected inside preview)
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyy')
          : '',
      };
    },
  },
};

```
## `studio\schemas\documents\category.js`
```
import { MdCategory } from 'react-icons/md';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};

```
## `studio\schemas\documents\objective.js`
```
import { FcComboChart } from 'react-icons/fc';

export default {
  name: 'objective',
  title: 'Objective',
  type: 'document',
  icon: FcComboChart,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'objectives',
      };
    },
  },
};

```
## `studio\schemas\documents\publication.js`
```
import { FcLibrary } from 'react-icons/fc';

export default {
  name: 'publication',
  title: 'Publication & Books',
  type: 'document',
  icon: FcLibrary,
  fields: [
    { name: 'title', title: 'Book/Series Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    {
      name: 'author',
      title: 'Author/Team',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    { name: 'coverImage', title: 'Book Cover', type: 'customImage' },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'string',
      description: 'e.g., Policymakers, Primary Students, General Public',
    },
    { name: 'description', title: 'Synopsis', type: 'richText' },
    {
      name: 'documentUpload',
      title: 'Document Upload (PDF, Word, etc.)',
      type: 'file',
      options: {
        storeOriginalFilename: true, 
      },
    },
  ],
};
```
## `studio\schemas\documents\service.js`
```
import { FcServices } from 'react-icons/fc';

export default {
  name: 'activity', // Keeping 'activity' prevents breaking existing Gatsby GraphQL queries
  title: 'Service / R&D Pillar', // Changes how it looks in Sanity Studio
  type: 'document',
  icon: FcServices,
  fields: [
    { name: 'title', title: 'Service Name', type: 'string' },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'coverImage', title: 'Cover Image', type: 'customImage' },
    { name: 'description', title: 'Short Description', type: 'normalText' },
    { name: 'body', title: 'Full Service Details', type: 'richText' }, // Added richText for deep dives
  ],
  preview: {
    select: {
      title: 'title',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};

```
## `studio\schemas\documents\spotlight.js`
```
import { FcRating } from "react-icons/fc";

export default {
  name: "spotlight",
  title: "Spotlight",
  type: "document",
  icon: FcRating,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "blogs",
      title: "Featured Publications & News",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog" }, { type: "publication" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every entry should be unique").unique(),
        Rule.required().error("At least one entry is required"),
      ],
    },
    {
      name: "activity",
      title: "Core R&D Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "activity" }],
        },
      ],
      validation: (Rule) => [
        Rule.error("Every Item should be unique").unique(),
        Rule.required().error("At least one item is required"),
      ],
    },
  ],
};

```
## `studio\schemas\documents\value.js`
```
import { FcIdea } from 'react-icons/fc';

export default {
  name: 'value',
  title: 'Value',
  type: 'document',
  icon: FcIdea,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'values',
      };
    },
  },
};

```
## `studio\schemas\objects\customImage.js`
```
import React from 'react';
import { MdImage } from 'react-icons/md';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error("Alt text can't be empty").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
    },
    prepare(selection) {
      const { imageUrl, alt } = selection;
      return {
        imageUrl,
        alt,
        media: () => <img src={imageUrl} alt={alt} className="custom-image" />, // added a prepare function to the preview object. This function returns a modified media property, which renders an image with the specified src, alt, and a CSS class of "custom-image", essentially ensuring that the generated HTML for the image includes that class name. Once the HTML is rendered in your frontend application, the CSS styles targeting that class name will apply to the images
      };
    },
  },
};

```
## `studio\schemas\objects\normalText.js`
```
export default {
  title: 'Normal Text',
  name: 'normalText',
  type: 'array',
  of: [
    // of, here, will the the document we want to see inside the array
    {
      title: 'Block',
      type: 'block', // possibly block type here is named after the html tag
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Bolden', value: 'strong' },
          { title: 'Italicize', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
};

```
## `studio\schemas\objects\richText.js`
```
export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bolden', value: 'strong' },
          { title: 'Italicize', value: 'em' },
        ],
        annotations: [
          {
            title: 'Create link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Additional Notes (Optional)',
                name: 'note',
                type: 'string',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'customImage',
    },
  ],
};

```
## `studio\schemas\schema.js`
```
/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */

// import document schemas/
import blog from "./documents/blog";
import category from "./documents/category";
import author from "./documents/author";
import service from "./documents/service";
import publication from "./documents/publication";
import spotlight from "./documents/spotlight";
import objective from "./documents/objective";
import value from "./documents/value";

// import object
import richText from "./objects/richText";
import normalText from "./objects/normalText";
import customImage from "./objects/customImage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // document schemas
    blog,
    category,
    author,
    service,
    publication,
    spotlight,
    objective,
    value,

    // object schemas
    normalText,
    richText,
    customImage,
  ]),
});

```
## `studio\tsconfig.json`
```
{
  // Note: This config is only used to help editors like VS Code understand/resolve
  // parts, the actual transpilation is done by babel. Any compiler configuration in
  // here will be ignored.
  "include": ["./node_modules/@sanity/base/types/**/*.ts", "./**/*.ts", "./**/*.tsx"]
}

```
## `web\.eslintrc.js`
```
module.exports = {
  rules: {},
};

```
## `web\gatsby-browser.js`
```
// fonts
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/inter/500.css';

import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

```
## `web\gatsby-config.js`
```
require("dotenv").config("./.env");
const sanityConfig = require("./sanity-config.js");

module.exports = {
  siteMetadata: {
    title: `Sisizathu Hub`,
    siteUrl: `https://sisizathuhub.co.za`,
    description: `Sisizathu Hub - IT Solutions for SMMEs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityBlog {
            nodes {
              id
              title
              publishedAt
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }

        } 
        `,
        /* ref, index et. al. is to let the plugin know the result of the graphql query, and also specifieis for it what result we expect from the query */
        /* data is the result of the query */
        ref: "id",
        index: ["title"],
        store: ["id", "title", "publishedAt", "slug", "coverImage"],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `categories`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityCategory {
            nodes{
              id
              title
              slug {
                current
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `activities`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityActivity {
            nodes{
              id
              title
              slug {
                current
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allSanityActivity.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `authors`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityAuthor {
            nodes{
              id
              name
              slug {
                current
              }
              profileImage {
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        } 
        `,
        ref: "id",
        index: ["name"],
        store: ["id", "name", "slug", "profileImage"],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            name: node.name,
            slug: node.slug,
            profileImage: node.profileImage,
          })),
      },
    },
    {
  resolve: `gatsby-plugin-local-search`,
  options: {
    name: `publications`,
    engine: `flexsearch`,
    engineOptions: { tokenize: "forward" },
    query: `
    {
      allSanityPublication {
        nodes {
          id
          title
          slug { current }
          coverImage { alt, asset { gatsbyImageData } }
        }
      }
    } 
    `,
    ref: "id",
    index: ["title"],
    store: ["id", "title", "slug", "coverImage"],
    normalizer: ({ data }) =>
      data.allSanityPublication.nodes.map((node) => ({
        id: node.id,
        title: node.title,
        slug: node.slug,
        coverImage: node.coverImage,
      })),
  },
},
  ],
};

```
## `web\gatsby-node.js`
```
/* creating pages programmatically instead of creating them in files isnde the Pages folder */
exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 3;
  // resolving templates paths
  const singlePublicationTemplate = require.resolve('./src/templates/single-publication.js');
  const publicationListTemplate = require.resolve('./src/templates/publication-list.js');
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const singleActivityTemplate = require.resolve(
    './src/templates/single-activity.js'
  );
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const activityListTemplate = require.resolve(
    './src/templates/activity-list.js'
  );
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');

  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityActivity {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityPublication { nodes { id, slug { current } } }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;
  const categories = result.data.allSanityCategory.nodes;
  const authors = result.data.allSanityAuthor.nodes;
  const activities = result.data.allSanityActivity.nodes;
  const publications = result.data.allSanityPublication.nodes;

  // creating single blog pages
  blogs.forEach((blog) => {
    createPage({
      path: `/spotlight/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // creating single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  // single Author pages
  authors.forEach((author) => {
    createPage({
      path: `/team/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  //  creating single activity pages
  activities.forEach((activity) => {
    createPage({
      path: `/activities/${activity.slug.current}`,
      component: singleActivityTemplate,
      context: { id: activity.id },
    });
  });

  // Creating single publication pages
  publications.forEach((pub) => {
    actions.createPage({
      path: `/publications/${pub.slug.current}`,
      component: singlePublicationTemplate,
      context: { id: pub.id },
    });
  });

  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/spotlight` : `/spotlight/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // category paginated pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/categories` : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // Author paginated pages
  const totalAuthorListPages = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/team` : `/team/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });

  // activity paginated pages
  const totalActivityListPages = Math.ceil(activities.length / 7);
  Array.from({ length: totalActivityListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/activities` : `/activities/${index + 1}`,
      component: activityListTemplate,
      context: {
        limit: 7,
        offset: index * 7,
        numberOfPages: totalActivityListPages,
        currentPage: index + 1,
      },
    });
  });

  // publication paginated pages
  const totalPubPages = Math.ceil(publications.length / postsPerPage) || 1;
  Array.from({ length: totalPubPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/publications` : `/publications/${i + 1}`,
      component: publicationListTemplate,
      context: { limit: postsPerPage, offset: i * postsPerPage, numberOfPages: totalPubPages, currentPage: i + 1 },
    });
  });
};

```
## `web\gatsby-ssr.js`
```
import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

```
## `web\package-lock.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "react-js-fullstack-web-app",
      "version": "1.0.0",
      "dependencies": {
        "@fontsource/inter": "^4.5.2",
        "@fontsource/poppins": "^4.5.1",
        "@portabletext/react": "^1.0.2",
        "@sanity/asset-utils": "^1.2.3",
        "axios": "^0.26.0",
        "babel-plugin-styled-components": "^2.0.2",
        "clsx": "^1.1.1",
        "date-fns": "^2.28.0",
        "gatsby": "^4.6.0",
        "gatsby-plugin-image": "^2.6.0",
        "gatsby-plugin-local-search": "^2.0.1",
        "gatsby-plugin-react-helmet": "^5.7.0",
        "gatsby-plugin-sharp": "^4.6.0",
        "gatsby-plugin-styled-components": "^5.6.0",
        "gatsby-source-filesystem": "^4.6.0",
        "gatsby-source-sanity": "^7.3.2",
        "gatsby-transformer-sharp": "^4.6.0",
        "normalize.css": "^8.0.1",
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-helmet": "^6.1.0",
        "react-icons": "^4.3.1",
        "react-syntax-highlighter": "^15.4.5",
        "react-use-flexsearch": "^0.1.1",
        "styled-components": "^5.3.3"
      }, 
      "devDependencies": {
        "dotenv": "^16.0.0"
      }
    },
    "node_modules/@aashutoshrathi/word-wrap": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@aashutoshrathi/word-wrap/-/word-wrap-1.2.6.tgz",
      "integrity": "sha512-1Yjs2SvM8TflER/OD3cOjhWWOZb58A2t7wpE2S9XfBYTiIl+XFhQG2bjy4Pu1I+EAlCNUzRDYDdFwFYUKvXcIA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",
      "integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@ardatan/relay-compiler": {
      "version": "12.0.0",
      "resolved": "https://registry.npmjs.org/@ardatan/relay-compiler/-/relay-compiler-12.0.0.tgz",
      "integrity": "sha512-9anThAaj1dQr6IGmzBMcfzOQKTa5artjuPmw8NYK/fiGEMjADbSguBY2FMDykt+QhilR3wc9VA/3yVju7JHg7Q==",
      "dependencies": {
        "@babel/core": "^7.14.0",
        "@babel/generator": "^7.14.0",
        "@babel/parser": "^7.14.0",
        "@babel/runtime": "^7.0.0",
        "@babel/traverse": "^7.14.0",
        "@babel/types": "^7.0.0",
        "babel-preset-fbjs": "^3.4.0",
        "chalk": "^4.0.0",
        "fb-watchman": "^2.0.0",
        "fbjs": "^3.0.0",
        "glob": "^7.1.1",
        "immutable": "~3.7.6",
        "invariant": "^2.2.4",
        "nullthrows": "^1.1.1",
        "relay-runtime": "12.0.0",
        "signedsource": "^1.0.0",
        "yargs": "^15.3.1"
      },
      "bin": {
        "relay-compiler": "bin/relay-compiler"
      },
      "peerDependencies": {
        "graphql": "*"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@ardatan/relay-compiler/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@ardatan/relay-compiler/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.23.5.tgz",
      "integrity": "sha512-CgH3s1a96LipHCmSUmYFPwY7MNx8C3avkq7i4Wl3cfa662ldtUe4VM1TPXX70pfmrlWTb6jLqTYrZyT2ZTJBgA==",
      "dependencies": {
        "@babel/highlight": "^7.23.4",
        "chalk": "^2.4.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.23.5.tgz",
      "integrity": "sha512-uU27kfDRlhfKl+w1U6vp16IuvSLtjAxdArVXPa9BvLkrr7CYIsxH5adpHObeAGY/41+syctUWOZ140a2Rvkgjw==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.23.5.tgz",
      "integrity": "sha512-Cwc2XjUrG4ilcfOw4wBAK+enbdgwAcAJCfGUItPBKR7Mjw4aEfAFYrLxeRp4jWgtNIKn3n2AlBOfwwafl+42/g==",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.23.5",
        "@babel/generator": "^7.23.5",
        "@babel/helper-compilation-targets": "^7.22.15",
        "@babel/helper-module-transforms": "^7.23.3",
        "@babel/helpers": "^7.23.5",
        "@babel/parser": "^7.23.5",
        "@babel/template": "^7.22.15",
        "@babel/traverse": "^7.23.5",
        "@babel/types": "^7.23.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/eslint-parser": {
      "version": "7.23.3",
      "resolved": "https://registry.npmjs.org/@babel/eslint-parser/-/eslint-parser-7.23.3.tgz",
      "integrity": "sha512-9bTuNlyx7oSstodm1cR1bECj4fkiknsDa1YniISkJemMY3DGhJNYBECbe6QD/q54mp2J8VO66jW3/7uP//iFCw==",
      "dependencies": {
        "@nicolo-ribaudo/eslint-scope-5-internals": "5.1.1-v1",
        "eslint-visitor-keys": "^2.1.0",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": "^10.13.0 || ^12.13.0 || >=14.0.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.11.0",
        "eslint": "^7.5.0 || ^8.0.0"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.23.5.tgz",
      "integrity": "sha512-BPssCHrBD+0YrxviOa3QzpqwhNIXKEtOa2jQrm4FlmkC2apYgRnQcmPWiGZDlGxiNtltnUFolMe8497Esry+jA==",
      "dependencies": {
        "@babel/types": "^7.23.5",
        "@jridgewell/gen-mapping": "^0.3.2",
        "@jridgewell/trace-mapping": "^0.3.17",
        "jsesc": "^2.5.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.22.5.tgz",
      "integrity": "sha512-LvBTxu8bQSQkcyKOU+a1btnNFQ1dMAd0R6PyW3arXes06F6QLWLIrd681bxRPIXlrMGR3XYnW9JyML7dP3qgxg==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.22.15.tgz",
      "integrity": "sha512-QkBXwGgaoC2GtGZRoma6kv7Szfv06khvhFav67ZExau2RaXzy8MpHSMO2PNoP2XtmQphJQRHFfg77Bq731Yizw==",
      "dependencies": {
        "@babel/types": "^7.22.15"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.22.15.tgz",
      "integrity": "sha512-y6EEzULok0Qvz8yyLkCvVX+02ic+By2UdOhylwUOvOn9dvYc9mKICJuuU1n1XBI02YWsNsnrY1kc6DVbjcXbtw==",
      "dependencies": {
        "@babel/compat-data": "^7.22.9",
        "@babel/helper-validator-option": "^7.22.15",
        "browserslist": "^4.21.9",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.23.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.23.5.tgz",
      "integrity": "sha512-QELlRWxSpgdwdJzSJn4WAhKC+hvw/AtHbbrIoncKHkhKKR/luAlKkgBDcri1EzWAo8f8VvYVryEHN4tax/V67A==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "@babel/helper-environment-visitor": "^7.22.20",
        "@babel/helper-function-name": "^7.23.0",
        "@babel/helper-member-expression-to-functions": "^7.23.0",
        "@babel/helper-optimise-call-expression": "^7.22.5",
        "@babel/helper-replace-supers": "^7.22.20",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.22.5",
        "@babel/helper-split-export-declaration": "^7.22.6",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.22.15.tgz",
      "integrity": "sha512-29FkPLFjn4TPEa3RE7GpW+qbE8tlsu3jntNYNfcGsc49LphF1PQIiD+vMZ1z1xVOKt+93khA9tc2JBs3kBjA7w==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.22.5",
        "regexpu-core": "^5.3.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.4.3.tgz",
      "integrity": "sha512-WBrLmuPP47n7PNwsZ57pqam6G/RGo1vw/87b0Blc53tZNGZ4x7YvZ6HgQe2vo1W/FR20OgjeZuGXzudPiXHFug==",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.22.6",
        "@babel/helper-plugin-utils": "^7.22.5",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0 || ^8.0.0-0 <8.0.0"
      }
    },
    "node_modules/@babel/helper-environment-visitor": {
      "version": "7.22.20",
      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.22.20.tgz",
      "integrity": "sha512-zfedSIzFhat/gFhWfHtgWvlec0nqB9YEIVrpuwjruLlXfUSnA8cJB0miHKwqDnQ7d32aKo2xt88/xZptwxbfhA==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.23.0.tgz",
      "integrity": "sha512-OErEqsrxjZTJciZ4Oo+eoZqeW9UIiOcuYKRJA4ZAgV9myA+pOXhhmpfNCKjEH/auVfEYVFJ6y1Tc4r0eIApqiw==",
      "dependencies": {
        "@babel/template": "^7.22.15",
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.22.5.tgz",
      "integrity": "sha512-wGjk9QZVzvknA6yKIUURb8zY3grXCcOZt+/7Wcy8O2uctxhplmUPkOdlgoNhmdVee2c92JXbf1xpMtVNbfoxRw==",
      "dependencies": {
        "@babel/types": "^7.22.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.23.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.23.0.tgz",
      "integrity": "sha512-6gfrPwh7OuT6gZyJZvd6WbTfrqAo7vm4xCzAXOusKqq/vWdKXphTpj5klHKNmRUU6/QRGlBsyU9mAIPaWHlqJA==",
      "dependencies": {
        "@babel/types": "^7.23.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.22.15",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.22.15.tgz",
      "integrity": "sha512-0pYVBnDKZO2fnSPCrgM/6WMc7eS20Fbok+0r88fp+YtWVLZrp4CkafFGIp+W0VKw4a22sgebPT99y+FDNMdP4w==",
      "dependencies": {
        "@ba
... (truncated)
```
## `web\package.json`
```
{
  "name": "react-js-fullstack-web-app",
  "version": "1.0.0",
  "private": true,
  "description": "saint-christian-templ",
  "author": "Christian Simbarashe",
  "keywords": [
    "gatsby"
  ],
  "scripts": {
    "dev": "gatsby develop",
    "start": "gatsby develop",
    "build": "gatsby build",
    "serve": "gatsby serve",
    "clean": "gatsby clean"
  },
  "dependencies": {
    "@fontsource/inter": "^4.5.2",
    "@fontsource/poppins": "^4.5.1",
    "@portabletext/react": "^1.0.2",
    "@sanity/asset-utils": "^1.2.3",
    "axios": "^0.26.0",
    "babel-plugin-styled-components": "^2.0.2",
    "clsx": "^1.1.1",
    "date-fns": "^2.28.0",
    "gatsby": "^4.6.0",
    "gatsby-plugin-image": "^2.6.0",
    "gatsby-plugin-local-search": "^2.0.1",
    "gatsby-plugin-react-helmet": "^5.7.0",
    "gatsby-plugin-sharp": "^4.6.0",
    "gatsby-plugin-styled-components": "^5.6.0",
    "gatsby-source-filesystem": "^4.6.0",
    "gatsby-source-sanity": "^7.3.2",
    "gatsby-transformer-sharp": "^4.6.0",
    "normalize.css": "^8.0.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-helmet": "^6.1.0",
    "react-icons": "^4.3.1",
    "react-syntax-highlighter": "^15.4.5",
    "react-use-flexsearch": "^0.1.1",
    "styled-components": "^5.3.3"
  },
  "devDependencies": {
    "dotenv": "^16.0.0"
  },
  "overrides": {
    "msgpackr": "^1.10.2",
    "lmdb": "^2.8.5"
  }
}

```
## `web\README.md`
```
# Sisizathu Hub Solutions (Pvt) Ltd

A complete full-stack web-app created with `JAMstack`. ([Gatsby.js](https://www.gatsbyjs.org/) & [Sanity.io](https://sanity.io)).
Built to showcase Sisizathu Hub's R&D capabilities, AI publications, and digital transformation services.

## Project Details
`Gatsby.js` was used for the frontend and `Sanity.io` for the headless CMS, with `graphql` used to source content.

- [React.js](https://reactjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)
- [Sanity.io](https://sanity.io/)

## License
[MIT][mit]
```
## `web\sanity-config.js`
```
module.exports = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
};

```
## `web\src\components\author\AuthorGrid.js`
```
import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';

function AuthorGrid({ authors }) {
  return (
    <AuthorGridStyles>
      {authors.map((item) => (
        <AuthorItem
          key={item.id}
          name={item.name}
          slug={item.slug}
          profileImage={item.profileImage}
        />
      ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;

```
## `web\src\components\author\AuthorItem.js`
```
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { AuthorItemStyles } from "../../styles/author/AuthorItemStyles";
import { Title } from "../typography/Title";

function AuthorItem({ name, slug, profileImage }) {
  return (
    <AuthorItemStyles className="author-item" to={`/team/${slug.current}`}>
      {profileImage && (
        <GatsbyImage
          image={profileImage.asset.gatsbyImageData}
          alt={profileImage.alt || name}
          className="profileImage"
        />
      )}
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;

```
## `web\src\components\blog\BlogGrid.js`
```
import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs, prefix = "spotlight" }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            image={{
              imageData: blog.coverImage?.asset?.gatsbyImageData,
              altText: blog.coverImage?.alt,
            }}
            publishedAt={blog.publishedAt}
            // Use the item's own prefix if it has one, otherwise fallback to the grid default
            prefix={blog.prefix || prefix} 
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
```
## `web\src\components\blog\BlogItem.js`
```
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';

function BlogItem({ path, title, image, categories = [], publishedAt, prefix }) {
  return (
    <BlogItemStyles>
      <Link to={`/${prefix}/${path}`}>
        {image?.imageData && (
          <GatsbyImage
            image={image.imageData}
            alt={image.altText || title}
            className="img"
          />
        )}
      </Link>
      <Link to={`/${prefix}/${path}`}>
        <Title className="title">{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
      {categories.length > 0 && (
        <ParagraphText className="categoriesText">
          {categories.map((item, index) => (
            <span key={item.slug.current}>
              <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
              {index < categories.length - 1 ? ', ' : ''}
            </span>
          ))}
        </ParagraphText>
      )}
    </BlogItemStyles>
  );
}

export default BlogItem;
```
## `web\src\components\buttons\ActionButton.js`
```
import React from 'react';
import ActionButtonStyles from '../../styles/buttons/ActionButtonStyles';

// remove rest here to see its effect and also why we need it, and the effect of 2 func params in react
function ActionButton({ children, ...rest }) {
  return (
    <ActionButtonStyles
      className="mobileMenuBtn"
      role="button"
      tabIndex={0}
      {...rest}
    >
      {children}
    </ActionButtonStyles>
  );
}

export default ActionButton;

```
## `web\src\components\buttons\Button.js`
```
import React from 'react';
import { buttonTypes } from '../../constants/buttonTypes';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';

function Button({ children, tag, variant = buttonTypes.primary, ...props }) {
  return (
    // tag allows us to render the component as either a tag we will specify. More explanation is needed // possibly because ButtonStyles is a styled components Link underneath??
    <ButtonStyles as={tag} {...props} variant={variant}>
      {children}
    </ButtonStyles>
  );
}

export default Button;

```
## `web\src\components\category\ActivityGrid.js`
```
import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ActivityItem from './ActivityItem';

function ActivityGrid({ activities }) {
  return (
    <CategoryGridStyles>
      {activities.map((item) => (
        <ActivityItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default ActivityGrid;

```
## `web\src\components\category\ActivityItem.js`
```
import React from 'react';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';
import ConstrainedPortableText from '../ConstrainedPortableText';

function ActivityItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <ConstrainedPortableText value={description} />
      </div>
      <Button to={`/activities/${slug.current}`} variant={buttonTypes.outline}>
        More
      </Button>
    </CategoryItemStyles>
  );
}

export default ActivityItem;

```
## `web\src\components\category\CategoryGrid.js`
```
import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <CategoryGridStyles>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default CategoryGrid;

```
## `web\src\components\category\CategoryItem.js`
```
import React from 'react';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button to={`/categories/${slug.current}`} variant={buttonTypes.outline}>
        Explore
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;

```
## `web\src\components\category\ObjectiveGrid.js`
```
import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import ObjectiveItem from './ObjectiveItem';

function ObjectiveGrid({ objectives }) {
  return (
    <CategoryGridStyles>
      {objectives.map((item) => (
        <ObjectiveItem key={item.id} description={item._rawDescription} />
      ))}
    </CategoryGridStyles>
  );
}

export default ObjectiveGrid;

```
## `web\src\components\category\ObjectiveItem.js`
```
import React from 'react';
import MyPortableText from '../MyPortableText';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';

function ObjectiveItem({ description }) {
  return (
    <CategoryItemStyles>
      <div className="text">
        <MyPortableText value={description} />
      </div>
    </CategoryItemStyles>
  );
}

export default ObjectiveItem;

```
## `web\src\components\category\ValueGrid.js`
```
import React from "react";
import { ValueGridStyles } from "../../styles/category/CategoryGridStyles";
import ValueItem from "./ValueItem";

function ValueGrid({ DiginotiveValues }) {
  return (
    <ValueGridStyles>
      {DiginotiveValues.map((item) => (
        <ValueItem key={item.id} description={item._rawDescription} />
      ))}
    </ValueGridStyles>
  );
}

export default ValueGrid;

```
## `web\src\components\category\ValueItem.js`
```
import React from 'react';
import MyPortableText from '../MyPortableText';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';

function ValueItem({ description }) {
  return (
    <CategoryItemStyles>
      <div className="text">
        <MyPortableText value={description} />
      </div>
    </CategoryItemStyles>
  );
}

export default ValueItem;

```
## `web\src\components\ConstrainedPortableText.js`
```
import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import { CustomImageStyles } from '../styles/CustomImageStyles';

const constrainedPortableTextComponents = {
  block: {
    normal: ({ children }) => {
      // Check if children is not null and is an object
      if (!children || typeof children !== 'object') {
        // Handle the case where children is not an object or is null, for example, render an empty block
        return null;
      }

      // Extract text content from JSON structure
      const extractTextContent = (data) => {
        if (Array.isArray(data)) {
          return data.map((item) => extractTextContent(item)).join(' ');
        }
        if (typeof data === 'object' && data !== null) {
          // Filter out keys that correspond to node names
          const filteredValues = Object.values(data).filter(
            (value) =>
              typeof value === 'object' && value !== null && '_type' in value
          );
          return filteredValues
            .map((value) => extractTextContent(value))
            .join(' ');
        }
        if (typeof data === 'string') {
          return data;
        }
        return '';
      };

      // Extract text content from children
      const fullText = extractTextContent(children);

      // Check if the number of characters exceeds the limit
      if (fullText.length > 250) {
        // Slice the text to get the first 250 characters and add an ellipsis
        const truncatedText = `${fullText.slice(0, 250)} ...`;

        // Render the truncated text
        return <ParagraphText>{truncatedText}</ParagraphText>;
      }

      // If the number of characters is within the limit, render the full text
      return <ParagraphText>{fullText}</ParagraphText>;
    },
    h1: ({ children }) => <Title>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme} className="bodyCode">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        language={value.code.language}
        className="bodyCode"
      >
        {String(value.code.code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        width,
        height,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <CustomImageStyles>
          <GatsbyImage
            image={gatsbyImageData}
            alt={value.alt}
            className="bodyImage custom-image"
          />
        </CustomImageStyles>
      );
    },
  },
};

function ConstrainedPortableText({ value }) {
  return (
    <PortableText
      value={value}
      components={constrainedPortableTextComponents}
    />
  );
}

export default ConstrainedPortableText;

```
## `web\src\components\Footer.js`
```
import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          "Sisizathu Hub is a technology powerhouse dedicated to bridging the
          digital gap for SMMEs. By providing managed cybersecurity, bespoke
          software solutions, and robust hosting infrastructure, we ensure your
          business is secure, scalable, and ready for the future"
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          39 Rivier Street, Bothaville, 9660, Free State, South Africa
        </ParagraphText>
        <ParagraphText className="copyright">
          © Sisizathu Hub (Pvt) Ltd | EST. 2014 |{" "}
          {new Date().getFullYear()} | All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;

```
## `web\src\components\Header.js`
```
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import { menu } from '../constants/menu';
import { SearchModalContext } from '../contexts/searchModalContext';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { openSearchModal } = useContext(SearchModalContext);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isNavOpen]);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div
                  className="searchIcon__wrapper"
                  onClick={handleSearchModalOpen}
                  onKeyDown={handleSearchModalOpen}
                  tabIndex={0}
                  role="button"
                >
                  <MdSearch />
                </div>
              </div>
              <ActionButton
                className="mobileMenuBtn"
                onKeyDown={() => setIsNavOpen(true)}
                onClick={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {/* functionality to close menu upon clicking outside nav menu in mobile */}
            {isNavOpen && (
              <div
                aria-label="Close Menu"
                role="button"
                tabIndex={0}
                className="mobileNavBg"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="searchIcon">
                  <div
                    className="searchIcon__wrapper"
                    onClick={handleSearchModalOpen}
                    onKeyDown={handleSearchModalOpen}
                    tabIndex={0}
                    role="button"
                  >
                    <MdSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;

```
## `web\src\components\homePage\ContactSection.js`
```
import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { SectionTitle } from "../typography/Title";
import ParagraphText from "../typography/ParagraphText";

const ContactSectionStyles = styled.div`
  padding: 8rem 0;
  display: flex;
  justify-content: center;

  .quote-form-container {
    width: 100%;
    max-width: 800px;
    background: rgba(10, 17, 40, 0.4);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 50px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 1px solid rgba(0, 174, 239, 0.4);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .full-width {
      grid-column: 1 / -1;
    }

    input, textarea {
      width: 100%;
      padding: 16px 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.4);
      color: var(--white);
      font-size: 1.5rem;
      font-family: "Inter", sans-serif;
      transition: all 0.3s ease;
      outline: none;
      &:focus {
        border-color: var(--primary);
        background: rgba(0, 0, 0, 0.6);
        box-shadow: 0 0 15px rgba(0, 174, 239, 0.2);
      }
    }

    .custom-select-container {
      position: relative;
      width: 100%;
      cursor: pointer;
      font-size: 1.5rem;
    }

    .select-trigger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: var(--white);
      transition: 0.3s;

      /* Constraint for the dropdown chevron SVG */
      svg {
        width: 16px;
        height: 16px;
        min-width: 16px;
      }
    }

    .select-trigger.active {
      border-color: var(--primary);
    }

    .dropdown-menu {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      width: 100%;
      background: rgba(10, 17, 40, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid var(--primary);
      border-radius: 12px;
      z-index: 100;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
    }

    .dropdown-item {
      padding: 14px 20px;
      color: var(--white-1);
      transition: 0.2s;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      &:hover {
        background: var(--primary);
        color: var(--black);
        font-weight: 600;
      }
    }

    .submit-btn {
      width: 100%;
      background: linear-gradient(135deg, var(--secondary), var(--primary));
      color: var(--white);
      padding: 18px;
      border: none;
      border-radius: 8px;
      font-size: 1.6rem;
      font-weight: 800;
      cursor: pointer;
      transition: 0.3s;
      letter-spacing: 1px;
      margin-top: 10px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 174, 239, 0.4);
      }
    }

    .success-message {
      text-align: center;
      padding: 40px 0;
      .success-icon { font-size: 6rem; color: #00AEEF; margin-bottom: 20px; }
      h3 { font-size: 2.5rem; margin-bottom: 10px; color: var(--white); }
      p { font-size: 1.6rem; color: var(--gray); margin-bottom: 30px; }
      .reset-btn {
        background: transparent; color: var(--primary); border: 1px solid var(--primary);
        padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 1.4rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .quote-form-container {
      padding: 30px 20px;
      .form-grid { grid-template-columns: 1fr; }
    }
  }
`;

function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Required Service...");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Cybersecurity / MSSP",
    "Custom Software Development",
    "Web Hosting & Cloud",
    "Commercial Printing",
    "General IT Consultation",
  ];

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "it-inquiry", ...data })
    })
      .then(() => setIsSubmitted(true))
      .catch(error => alert(error));
  };

  return (
    <ContactSectionStyles>
      <div className="quote-form-container">
        {isSubmitted ? (
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <h3>Inquiry Received</h3>
            <p>Our technical team will review your requirements and reach out shortly.</p>
            <button onClick={() => setIsSubmitted(false)} className="reset-btn">Submit another inquiry</button>
          </div>
        ) : (
          <>
            <SectionTitle style={{marginBottom: "1rem"}}>Request a Technical Consultation</SectionTitle>
            <ParagraphText style={{marginBottom: "3rem"}}>
              Share your project details, and our engineers will architect a solution tailored to your enterprise.
            </ParagraphText>
            
            <form name="it-inquiry" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="it-inquiry" />
              
              <div className="form-grid">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="text" name="company" placeholder="Company Name" required />
                <input type="email" name="email" placeholder="Corporate Email" required />
                <input type="tel" name="phone" placeholder="Phone Number" required />
                
                <div className="custom-select-container full-width">
                  <div className={`select-trigger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span>{selectedService}</span>
                    <FaChevronDown className="arrow" />
                  </div>
                  {isOpen && (
                    <div className="dropdown-menu">
                      {services.map((service) => (
                        <div key={service} className="dropdown-item" onClick={() => { setSelectedService(service); setIsOpen(false); }}>
                          {service}
                        </div>
                      ))}
                    </div>
                  )}
                  <input type="hidden" name="service" value={selectedService} />
                </div>

                <div className="full-width">
                  <textarea name="message" placeholder="Project details, technical requirements, or current infrastructure challenges..." rows="5" required></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn full-width">Initialize Consultation</button>
            </form>
          </>
        )}
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
```
## `web\src\components\homePage\FeaturedBlogs.js`
```
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FeaturedBlogsStyles } from "../../styles/homePage/FeaturedBlogsStyles";
import BlogGrid from "../blog/BlogGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          blogs {
            ... on SanityBlog {
              _type
              id
              title
              publishedAt
              slug {
                current
              }
              categories {
                title
                slug {
                  current
                }
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
            ... on SanityPublication {
              _type
              id
              title
              publishedAt: _createdAt
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const rawBlogs = spotlightNode?.blogs || [];

  // Map the items and determine the URL prefix based on the Sanity Type
  const spotlightBlogs = rawBlogs.map((item) => ({
    ...item,
    categories: item.categories || [],
    prefix: item._type === "publication" ? "publications" : "spotlight",
  }));

  return (
    <FeaturedBlogsStyles>
      <SectionTitle className="centre__text">
        The Pulse of Digital Evolution
      </SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Technology never stands still, and neither should your business. Explore the projects, partnerships, and strategic initiatives that are redefining how Sisizathu Hub scales and secures the enterprises of tomorrow.
      </ParagraphText>
      <BlogGrid blogs={spotlightBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;


```
## `web\src\components\homePage\HeroSection.js`
```
import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate the images inside the SVG every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  },[]);

  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          {/* LEFT SIDE: Text */}
          <div className="left">
            <div className="badge">🚀 ENTERPRISE IT SOLUTIONS</div>
            <h1 className="hero__heading">
              Innovative IT Solutions Tailored for SMME Growth
            </h1>
            <ParagraphText className="hero__text">
              Sisizathu Hub is a premier provider of managed security, software
              development, and digital infrastructure. We empower enterprises
              with secure, scalable, and future-ready technology.
            </ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore Our Latest Work
            </Button>
          </div>

          {/* RIGHT SIDE: 3D GLASSMORPHIC SVG CAROUSEL */}
          <div className="right">
            <div className="svg-carousel-container">
              <svg
                width="100%"
                viewBox="0 0 310 432"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Back Drop Shadow */}
                <path
                  d="M9.29688 0.958984L241.912 60.0358C274.03 68.1926 300.066 101.668 300.066 134.805V371.805C300.066 404.942 274.03 425.193 241.912 417.036L67.4507 372.728C35.3332 364.571 9.29688 331.096 9.29688 297.959V0.958984Z"
                  fill="black"
                  fillOpacity="0.6"
                />

                {/* The Tilted Cyan/Blue Gradient Card */}
                <path
                  d="M9.29688 0.958984L247.633 29.168C280.541 33.0628 307.217 63.0831 307.217 96.2202V333.22C307.217 366.357 280.541 390.063 247.633 386.168L68.881 365.011C35.9736 361.116 9.29688 331.096 9.29688 297.959V0.958984Z"
                  fill="url(#paint0_linear_sisizathu)"
                />

                {/* Glass Panel Masking the Images */}
                <foreignObject x="11" y="8" width="288" height="364">
                  <div className="carousel-mask">
                    <div
                      className={`carousel-image ${currentImage === 0 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero1.jpg"
                        alt="Cybersecurity"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 1 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero2.png"
                        alt="Software Engineering"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 2 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero3.jpg"
                        alt="digital infrastructure"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 3 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero4.jpg"
                        alt="Web Hosting"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>

                    <div className="glass-reflection-overlay"></div>
                  </div>
                </foreignObject>

                <defs>
                  <linearGradient
                    id="paint0_linear_sisizathu"
                    x1="9.29688"
                    y1="0.958984"
                    x2="-32.3731"
                    y2="353.027"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00AEEF" /> {/* Cyan */}
                    <stop offset="1" stopColor="#007BFF" /> {/* Blue */}
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
```
## `web\src\components\homePage\TopCategories.js`
```
import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";
import { FaShieldAlt, FaCode, FaServer, FaSync } from "react-icons/fa"; 

const initialCards =[
  {
    id: "security",
    title: "Uncompromising Security",
    text: "We deploy battle-tested threat detection and robust endpoint protection to ensure your enterprise data remains impervious to modern cyber threats.",
    theme: "theme-cyan",
    icon: <FaShieldAlt />
  },
  {
    id: "software",
    title: "Bespoke Development",
    text: "Our software architectures are engineered for scale. From CRM modules to high-performance web apps, we translate your business logic into code.",
    theme: "theme-dark",
    icon: <FaCode />
  },
  {
    id: "infrastructure",
    title: "Scalable Infrastructure",
    text: "High-availability web hosting packages tailored for SMMEs, providing the 99.9% uptime and bandwidth required for continuous digital operations.",
    theme: "theme-slate",
    icon: <FaServer />
  }
];

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug { current }
            _rawDescription
          }
        }
      }
      allSanityObjective { nodes { id, _rawDescription } }
      allSanityValue { nodes { id, _rawDescription } }
    }
  `);

  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity ||[];
  const objectives = data.allSanityObjective?.nodes ||[];
  const DiginotiveValues = data.allSanityValue?.nodes || [];

  const [stackedCards, setStackedCards] = useState(initialCards);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();

  const shuffle = () => {
    setStackedCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      newCards.push(firstCard);
      return newCards;
    });
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(shuffle, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const handleManualClick = (id, e) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setStackedCards((prev) => {
      const index = prev.findIndex((c) => c.id === id);
      if (index === prev.length - 1) return prev;
      const newCards = [...prev];
      const [clickedCard] = newCards.splice(index, 1);
      newCards.push(clickedCard);
      return newCards;
    });
  };

  return (
    <TopCategoriesStyles>
      
      <div className="card-stack-wrapper">
        <div className="card-stack-container">
          {stackedCards.map((card, index) => {
            const isTop = index === stackedCards.length - 1;
            const offset = stackedCards.length - 1 - index;
            
            return (
              <div
                key={card.id}
                className={`stacked-card ${card.theme} card-depth-${offset} ${isTop && isAutoPlaying ? 'pulse-hint' : ''}`}
                onClick={(e) => handleManualClick(card.id, e)}
                style={{
                  zIndex: index,
                  '--card-offset': offset,
                  opacity: isTop ? 1 : 0.8,
                }}
              >
                <div className="card-header">
                  <h3>{card.title}</h3>
                  <div className="card-icon">{card.icon}</div>
                </div>
                <div className="card-body">
                  <p>{card.text}</p>
                </div>
                {isTop && (
                  <div className="interaction-hint">
                    <FaSync /> <span>{isAutoPlaying ? "Auto-Cycling" : "Interactive Mode"}</span>
                  </div>
                )}
                {!isTop && <div className="card-click-overlay"></div>}
              </div>
            );
          })}
        </div>
      </div>

      <SectionTitle className="centre__text">Our Values</SectionTitle>
      <ValueGrid DiginotiveValues={DiginotiveValues} />

      <SectionTitle className="centre__text">Our Objectives</SectionTitle>
      <ObjectiveGrid objectives={objectives} />

      <div style={{marginTop: "5rem"}}>
        <SectionTitle className="centre__text">Core Capabilities</SectionTitle>
        <ParagraphText className="centre__text" style={{maxWidth: "600px", margin: "0 auto"}}>
          Catalyzing digital transformation through our impactful core technology pillars.
        </ParagraphText>
        <ActivityGrid activities={activities} />
      </div>
      
    </TopCategoriesStyles>
  );
}

export default TopCategories;
```
## `web\src\components\Layout.js`
```
import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css/normalize.css';
import Footer from './Footer';
import Search from './search/SearchModal';
import { SearchModalContextProvider } from '../contexts/searchModalContext';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search /> {/* adding it to the component tree for it to work */}
      <Header />
      <main>{children}</main>
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;

```
## `web\src\components\Logo.js`
```
import React from 'react';
// import { GrTechnology } from 'react-icons/gr';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  const width = 50;
  const height = 50;
  return (
    <LogoStyles to="/">
      <StaticImage src="../images/sisizathulogo.png" width={width} height={height} />
    </LogoStyles>
  );
}

export default Logo;

```
## `web\src\components\MyPortableText.js`
```
import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import { CustomImageStyles } from '../styles/CustomImageStyles';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme} className="bodyCode">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        width,
        height,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <CustomImageStyles>
          <GatsbyImage
            image={gatsbyImageData}
            alt={value.alt}
            className="bodyImage custom-image"
          />
        </CustomImageStyles>
      );
    },
  },
};

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;

```
## `web\src\components\PageHeader.js`
```
import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import ParagraphText from './typography/ParagraphText';
import { SectionTitle } from './typography/Title';

function PageHeader({ title, description, children, className }) {
  return (
    <div className={className}>
      <PageHeaderStyles>
        <SectionTitle>{title}</SectionTitle>
        <ParagraphText>{description}</ParagraphText>
        {children}
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;

```
## `web\src\components\PageSpace.js`
```
import React from 'react';
import { PageSpaceStyles } from '../styles/PageSpaceStyles';

function PageSpace({ top, bottom, children }) {
  return (
    <PageSpaceStyles top={top} bottom={bottom}>
      {children}
    </PageSpaceStyles>
  );
}

export default PageSpace;

```
## `web\src\components\Pagination.js`
```
import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationStyles } from '../styles/PaginationStyles';
import ParagraphText from './typography/ParagraphText';

function Pagination({ baseURL, numberOfPages, currentPage }) {
  const prevPage = currentPage - 1 <= 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="container">
      <PaginationStyles>
        <div className="icons">
          <Link
            to={`${baseURL}/${prevPage}`}
            className={clsx(currentPage <= 1 && 'disabled')}
          >
            <FiChevronLeft /> Prev
          </Link>
          <Link
            to={`${baseURL}/${nextPage}`}
            className={clsx(currentPage >= numberOfPages && 'disabled')}
          >
            Next <FiChevronRight />
          </Link>
        </div>
        <ParagraphText>
          page {currentPage} of {numberOfPages} pages
        </ParagraphText>
      </PaginationStyles>
    </div>
  );
}

export default Pagination;

```
## `web\src\components\search\SearchField.js`
```
import React from "react";
import { FiSearch } from "react-icons/fi";
import { SearchFieldStyles } from "../../styles/search/SearchFieldStyles";

function SearchField({ value, setValue, onFocus }) {
  return (
    <SearchFieldStyles>
      <input
        type="text"
        placeholder="Search Sisizathu Hub"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
      <FiSearch className="searchIcon" />
    </SearchFieldStyles>
  );
}

export default SearchField;

```
## `web\src\components\search\SearchModal.js`
```
import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { SearchModalContext } from '../../contexts/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchResult from './SearchResult';
import SearchField from './SearchField';

const query = graphql`
  {
    localSearchBlogs {
      publicStoreURL
      publicIndexURL
    }
    localSearchCategories {
      publicStoreURL
      publicIndexURL
    }
    localSearchAuthors {
      publicStoreURL
      publicIndexURL
    }
    localSearchActivities {
      publicStoreURL
      publicIndexURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen } = useContext(SearchModalContext); // extracting state from context
  const [searchQuery, setSearchQuery] = useState('');
  const { closeSearchModal } = useContext(SearchModalContext);
  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const [authorsIndexStore, setAuthorsIndexStore] = useState(null);
  const [activitiesIndexStore, setActivitiesIndexStore] = useState(null);
  const data = useStaticQuery(query);

  useEffect(() => {
    if (isSearchModalOpen) {
      /* hiding scrollview when searching, & clearing previous search queries */
      document.body.style.overflow = 'hidden';
      setSearchQuery('');
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [
    isSearchModalOpen,
  ]); /* whenever searchmodalopen changes, the functionality here is run */

  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs;
  const {
    publicStoreURL: categoriesPublicStoreURL,
    publicIndexURL: categoriesPublicIndexURL,
  } = data.localSearchCategories;
  const {
    publicStoreURL: authorsPublicStoreURL,
    publicIndexURL: authorsPublicIndexURL,
  } = data.localSearchAuthors;
  const {
    publicStoreURL: activitiesPublicStoreURL,
    publicIndexURL: activitiesPublicIndexURL,
  } = data.localSearchActivities;

  const handleOnFocus = async () => {
    if (blogsIndexStore && categoriesIndexStore && authorsIndexStore) return;
    const [
      /* destructuring here is giving an alias for the data returned ny Promise.all, and the order matters because they correspond */
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
      { data: authorsIndex },
      { data: authorsStore },
      { data: activitiesIndex },
      { data: activitiesStore },
    ] = await Promise.all([
      axios.get(`${blogsPublicIndexURL}`),
      axios.get(`${blogsPublicStoreURL}`),
      axios.get(`${categoriesPublicIndexURL}`),
      axios.get(`${categoriesPublicStoreURL}`),
      axios.get(`${authorsPublicIndexURL}`),
      axios.get(`${authorsPublicStoreURL}`),
      axios.get(`${activitiesPublicIndexURL}`),
      axios.get(`${activitiesPublicStoreURL}`),
    ]);
    /* setting state using data destructured after being received from the Promise */
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    });
    setCategoriesIndexStore({
      index: categoriesIndex,
      store: categoriesStore,
    });
    setAuthorsIndexStore({
      index: authorsIndex,
      store: authorsStore,
    });
    setActivitiesIndexStore({
      index: activitiesIndex,
      store: activitiesStore,
    });
  };

  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery &&
          blogsIndexStore &&
          categoriesIndexStore &&
          authorsIndexStore &&
          activitiesIndexStore && (
            <div className="search__result">
              <SearchResult
                searchQuery={searchQuery}
                blogsIndexStore={blogsIndexStore}
                categoriesIndexStore={categoriesIndexStore}
                authorsIndexStore={authorsIndexStore}
                activitiesIndexStore={activitiesIndexStore}
              />
            </div>
          )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;

```
## `web\src\components\search\SearchResult.js`
```
import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
  ActivitySearchResultItem,
} from './SearchResultItem';
import ParagraphText from '../typography/ParagraphText';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
  activitiesIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );
  const activitiesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(activitiesIndexStore.index),
    activitiesIndexStore.store
  );

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0 &&
    activitiesResult.length === 0
  ) {
    return <ParagraphText>No Result Found.</ParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Spotlight</ParagraphText>
          {blogsResult.map((result) => (
            <BlogSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Categories</ParagraphText>
          {categoriesResult.map((result) => (
            <CategorySearchResultItem key={result.id} category={result} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <ParagraphText>Team</ParagraphText>
          {authorsResult.map((result) => (
            <AuthorSearchResultItem key={result.id} author={result} />
          ))}
        </>
      )}
      {activitiesResult.length > 0 && (
        <>
          <ParagraphText>Activities</ParagraphText>
          {activitiesResult.map((result) => (
            <ActivitySearchResultItem key={result.id} activity={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;

```
## `web\src\components\search\SearchResultItem.js`
```
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { format } from "date-fns";
import { SearchResultItemStyles } from "../../styles/search/SearchResultItemStyles";
import ParagraphText from "../typography/ParagraphText";
import { Title } from "../typography/Title";

import { SearchModalContext } from "../../contexts/searchModalContext";

function BlogSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/spotlight/${blog.slug?.current}`} 
      onClick={() => closeSearchModal()}
    >
      {/* Safely check if the image and asset exist */}
      {blog.coverImage?.asset && (
        <GatsbyImage
          image={blog.coverImage.asset.gatsbyImageData}
          alt={blog.coverImage.alt || blog.title}
          className="img"
        />
      )}
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="categoriesText">
          {format(new Date(blog.publishedAt), "p, MMMM dd, yyyy")}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategorySearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles> 
  );
}

function AuthorSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/team/${author.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      {/* Safety check to prevent crash if image is missing */}
      {author.profileImage && (
        <GatsbyImage
          image={author.profileImage.asset.gatsbyImageData}
          alt={author.profileImage.alt || author.name}
          className="authorProfileImg"
        />
      )}
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}

function ActivitySearchResultItem({ activity }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/activities/${activity.slug.current}`}
      onClick={() => closeSearchModal()}
    >
      <Title className="title">{activity.title}</Title>
    </SearchResultItemStyles>
  );
}

export {
  CategorySearchResultItem,
  BlogSearchResultItem,
  AuthorSearchResultItem,
  ActivitySearchResultItem,
};

```
## `web\src\components\SectionDivider.js`
```
import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 174, 239, 0.1), 0 0 10px rgba(0, 174, 239, 0.1); opacity: 0.5; }
  100% { box-shadow: 0 0 15px rgba(0, 174, 239, 0.5), 0 0 25px rgba(0, 174, 239, 0.3); opacity: 1; }
`;

const DividerWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  height: 2px;
  margin: 5rem auto;
  background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
  border-radius: 50%;
  animation: ${pulseGlow} 2s infinite alternate;
`;

export default function SectionDivider() {
  return <DividerWrapper />;
}
```
## `web\src\components\seo.js`
```
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';
import favicon from '../images/sisizathulogo.png'; // <-- Import your logo

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {/* Attach favicon to the browser tab */}
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;
```
## `web\src\components\TechSphere.js`
```
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// This wrapper uses a clearfix to ensure the floated elements don't collapse
const SectionWrapper = styled.div`
  margin: 2rem 0;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

// By setting float: left and shape-outside: circle, the text organically wraps around the 3D globe!
const SphereFloatContainer = styled.div`
  float: left;
  /* Use a fluid width that responds to screen size */
  width: 35%; 
  min-width: 250px;
  aspect-ratio: 1 / 1;
  /* Shape-outside stays relative to the container size */
  shape-outside: circle(48%);
  margin-right: 3rem;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Reduce size slightly for tablet/smaller screens to keep text legible */
  @media (max-width: 900px) {
    width: 40%;
    min-width: 200px;
    margin-right: 2rem;
  }

  /* On very small phones, we keep the float but shrink the sphere significantly */
  @media (max-width: 480px) {
    width: 45%;
    min-width: 150px;
    margin-right: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: clamp(18px, 4vw, 28px);  /* Will automatically shrink between 18px and 28px */
    height: clamp(18px, 4vw, 28px);
    filter: drop-shadow(0 0 5px rgba(0, 174, 239, 0.6));
    opacity: 0.8;
  }
`;

const MarketingCopy = styled.div`
  font-size: 1.65rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  text-align: justify;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.5rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.2;
    background: linear-gradient(to right, #ffffff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    margin-bottom: 1.8rem;
  }

  strong {
    color: var(--white);
    font-weight: 700;
  }
  
  .highlight {
    color: var(--primary);
    font-weight: 600;
  }

  @media (max-width: 900px) {
    text-align: left;
  }
`;

// Math logic for sphere distribution
const generatePoints = (count) => {
  const points =[];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const yRatio = 1 - (i / Math.max(1, count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - yRatio * yRatio);
    const theta = goldenAngle * i;
    const x = radiusAtY * Math.cos(theta);
    const z = radiusAtY * Math.sin(theta);
    points.push({ x, y: yRatio, z });
  }
  return points;
};

export default function TechSphere() {
  const [rotation, setRotation] = useState(0);
  const [iconPaths, setIconPaths] = useState([]);
  const requestRef = useRef();

  // Load all SVGs from your local folder
  useEffect(() => {
    try {
      const context = require.context('../images/svgs', false, /\.svg$/);
      const paths = context.keys().map(context);
      setIconPaths(paths);
    } catch (err) {
      console.error("Could not find SVGs in folder. Ensure path is correct.", err);
    }
  }, []);

  const points = useRef([]);
  if (points.current.length !== iconPaths.length) {
    points.current = generatePoints(iconPaths.length);
  }

  const animate = time => {
    setRotation(time * 0.0002); // Elegant, slow rotation
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  },[]);

  if (iconPaths.length === 0) return null;

  return (
    <SectionWrapper>
      <SphereFloatContainer>
        {points.current.map((point, i) => {
          const rotatedX =
            point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
          const rotatedZ =
            point.x * Math.sin(rotation) + point.z * Math.cos(rotation);

          const radius =
            window.innerWidth > 900 ? 180 : window.innerWidth > 480 ? 120 : 80;

          const perspective = 350 / (350 + rotatedZ * radius);
          const screenX = rotatedX * radius * perspective;
          const screenY = point.y * radius * perspective;

          const scale = Math.max(0.1, perspective);
          const opacity = perspective > 1 ? 1 : 0.1 + perspective * 0.6;
          const zIndex = Math.floor(perspective * 100);

          return (
            <IconWrapper
              key={i}
              style={{
                transform: `translate3d(${screenX}px, ${screenY}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
              }}
            >
              <img src={iconPaths[i].default || iconPaths[i]} alt="tech icon" />
            </IconWrapper>
          );
        })}
      </SphereFloatContainer>

      <MarketingCopy>
        <h2>Architecting the Digital Dominance of Tomorrow.</h2>
        <p>
          At{" "}
          <span className="highlight">Sisizathu Hub</span>, we do not merely
          provide IT support; we engineer the technological backbone of your
          future empire, transforming digital complexity into your ultimate
          competitive advantage.
        </p>
        <p>
          We create technological ecosystems with a focus on robustness and meticulous
          calibration such that your absolute focus remains solely on scaling your
          vision. Our extensive cybersecurity protocols, powered by battle-tested threat detection and
          exhaustive vulnerability assessments, stand as an impenetrable fortress
          around your most valuable corporate assets. But defensive architecture
          is merely the baseline of our offering.
        </p>
        <p>
          To help our clients truly outpace market competition, we offer bespoke software
          solutions that breathe life into operational workflows,
          eliminating friction and unlocking exponential workforce productivity.
          From high-availability, lightning-fast web hosting that ensures your
          brand's digital presence never sleeps, to enterprise-tier commercial
          printing that makes your physical footprint as commanding as your
          virtual one, we are the catalyst for your aggressive evolution.
        </p>
        <p>
          We understand that behind every data point, server node, and line of
          code lies the living heartbeat of your business. Our multidisciplinary
          team of elite engineers, cybersecurity veterans, and strategic
          visionaries partner intimately with you to navigate the unknown with
          absolute mathematical certainty. Command your market. Secure your
          legacy. Welcome to the new global standard of enterprise excellence.
        </p>
      </MarketingCopy>
    </SectionWrapper>
  );
}
```
## `web\src\components\typography\ParagraphText.js`
```
import React from 'react';
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function ParagraphText({ children, ...props }) {
  return <ParagraphTextStyles {...props}>{children}</ParagraphTextStyles>;
}

export default ParagraphText;

```
## `web\src\components\typography\Title.js`
```
import React from 'react';
import {
  SectionTitleStyles,
  TitleStyles,
} from '../../styles/typography/SectionTitleStyles';

export const SectionTitle = ({ children, tag, ...props }) => (
  <SectionTitleStyles as={tag} {...props}>
    {children}
  </SectionTitleStyles>
);

export const Title = ({ children, tag, ...props }) => (
  <TitleStyles as={tag} {...props}>
    {children}
  </TitleStyles>
);

```
## `web\src\constants\buttonTypes.js`
```
export const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
};

```
## `web\src\constants\menu.js`
```
export const menu = [
  { title: 'Home', path: '/' },
  { title: 'Insights & News', path: '/spotlight' },
  { title: 'Core Services', path: '/activities' },
  { title: 'Publications', path: '/publications' },
  { title: 'About Us', path: '/team' },
];
```
## `web\src\constants\socialLinks.js`
```
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
  FaLinkedin,
} from 'react-icons/fa';

import { IoIosMailUnread } from 'react-icons/io';

export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+27565151490',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:info@sisizathuhub.co.za',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/27565151490?text=${encodeURIComponent(
      "Hello, I would like to inquire about Sisizathu Hub's IT and Cybersecurity Solutions."
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/sisizathuhub',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/sisizathuhub',
    icon: <FaTwitter />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/sisizathuhub',
    icon: <FaLinkedin />,
  },
];

```
## `web\src\contexts\searchModalContext.js`
```
import React, { createContext, useMemo, useState } from 'react';

const SearchModalContext = createContext();

const SearchModalContextProvider = ({ children }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const initialValue = useMemo(
    () => ({
      isSearchModalOpen,
      openSearchModal: () => {
        setIsSearchModalOpen(true);
      },
      closeSearchModal: () => {
        setIsSearchModalOpen(false);
      },
    }),
    [isSearchModalOpen]
  );

  return (
    <SearchModalContext.Provider value={initialValue}>
      {children}
    </SearchModalContext.Provider>
  );
};

export { SearchModalContext, SearchModalContextProvider };

```
## `web\src\pages\404.js`
```
import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle className="title">Server Response : 404</SectionTitle>
          <ParagraphText>
            Error Type - The page you are looking for is not found. <br /> Go
            Back to{' '}
            <Link to="/" className="link">
              Home Page
            </Link>
            {/* add more Links */}
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;

```
## `web\src\pages\index.js`
```
import React from "react";
import FeaturedBlogs from "../components/homePage/FeaturedBlogs";
import HeroSection from "../components/homePage/HeroSection";
import TopCategories from "../components/homePage/TopCategories";
import ContactSection from "../components/homePage/ContactSection";
import TechSphere from "../components/TechSphere"; // Corrected path
import SectionDivider from "../components/SectionDivider"; 
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Sisizathu Hub Solutions" />
    
    <HeroSection />
    
    <SectionDivider />
    
    <div className="container">
      <FeaturedBlogs />
    </div>
    
    <SectionDivider />
    
    <div className="container">
      <TopCategories />
    </div>
    
    <SectionDivider />

    <div className="container">
      <ContactSection />
    </div>

    <SectionDivider />

    <div className="container">
      <TechSphere />
    </div>
  </>
);

export default IndexPage;
```
## `web\src\styles\author\AuthorGridStyles.js`
```
import styled from 'styled-components';

export const AuthorGridStyles = styled.div`
  display: grid;
  margin-top: 3.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

```
## `web\src\styles\author\AuthorItemStyles.js`
```
import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled(Link)`
  background-color: var(--black-2);
  border-radius: 8px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  .profileImage {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`;

```
## `web\src\styles\author\SingleAuthorStyles.js`
```
import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  .author-header {
    text-align: center;
  }
  .profileImage {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  .name {
    margin-bottom: 1rem;
  }
  .bio {
    margin: 0 auto;
    max-width: 500px;
  }
  .hr {
    margin: 3rem 0;
    color: var(--gray);
  }
`;

```
## `web\src\styles\blog\BlogGridStyles.js`
```
import styled from 'styled-components';

export const BlogGridStyles = styled.div`
  margin-top: 3.5rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem;
  }
`;

```
## `web\src\styles\blog\BlogItemStyles.js`
```
import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  /* PREMIUM FROSTED GLASS BASE */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(0, 174, 239, 0.3); /* Cyan Edge */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  z-index: 1;

  /* HOVER EFFECTS */
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 174, 239, 0.2);
    border-color: rgba(0, 174, 239, 0.5);

    .img [data-main-image] {
      transform: scale(1.08);
    }
  }

  .img {
    height: 220px;
    margin-bottom: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    [data-main-image] {
      transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  .title-link { text-decoration: none; }
  .title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    color: var(--white);
    line-height: 1.3;
  }

  .meta-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex-grow: 1;
  }

  .publishedAt, .categoriesText {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: 0;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      &:hover { color: var(--primary); text-decoration: underline;}
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    .title { font-size: 1.8rem; }
    .img { height: 180px; }
  }
`;
```
## `web\src\styles\blog\SingleBlogStyles.js`
```
import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 700px;
  margin: 0 auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
`;

```
## `web\src\styles\buttons\ActionButtonStyles.js`
```
import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  border: 2px solid var(--primary);
  padding: 0.6rem;
  border-radius: 8px;
  color: var(--primary);
  transition-property: color, background-color;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2.5rem;
  }
  * {
    pointer-events: none;
  }
  &:hover {
    background-color: var(--primary);
    color: var(--white-1);
  }
  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
    svg {
      font-size: 1.8rem;
    }
  }
`;

```
## `web\src\styles\buttons\ButtonStyles.js`
```
import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  background: ${({ variant }) =>
    variant === buttonTypes.primary
      ? 'linear-gradient(135deg, var(--secondary), var(--primary))'
      : variant === buttonTypes.secondary
      ? 'var(--white-1)'
      : 'transparent'};
  border: ${({ variant }) =>
    variant === buttonTypes.outline ? '2px solid var(--primary)' : 'none'};
  color: ${({ variant }) =>
    variant === buttonTypes.secondary ? 'var(--black-1)' : 'var(--white)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ variant }) =>
      variant === buttonTypes.outline 
      ? '0 0 15px rgba(0, 210, 255, 0.4) inset, 0 0 15px rgba(0, 210, 255, 0.4)' 
      : '0 8px 20px rgba(0, 123, 255, 0.4)'};
  }

  @media only screen and (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`;
```
## `web\src\styles\category\CategoryGridStyles.js`
```
import styled from 'styled-components';

export const CategoryGridStyles = styled.div`
  display: grid;
  margin-top: 3.5rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

export const ValueGridStyles = styled.div`
  display: grid;
  margin-top: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Reduced the minimum width to 250px */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(150px, 1fr)
    ); /* Adjusted for smaller screens */
    gap: 2rem;
  }
`;

```
## `web\src\styles\category\CategoryItemStyles.js`
```
import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  /* PREMIUM FROSTED GLASS CARDS */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(0, 174, 239, 0.3); /* Cyan edge highlight */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    border-color: rgba(0, 174, 239, 0.6); /* Glowing cyan border on hover */
  }

  .title {
    margin-bottom: 1.5rem;
    color: var(--white);
  }
  
  .text-wrap-container, .text {
    margin-bottom: 2.5rem;
    color: var(--white-1);
    flex-grow: 1;
  }

  .card-image-wrapper, .custom-image {
    width: 160px !important;
    height: 160px !important;
    float: left;
    margin: 0 2rem 1rem 0;
    border-radius: 10px;
    overflow: hidden;
    shape-outside: inset(0%);
    border: 1px solid rgba(0, 174, 239, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  .button-container {
    margin-top: auto; 
    clear: both;
    align-self: flex-start;
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    .card-image-wrapper, .custom-image {
      width: 130px !important;
      height: 130px !important;
      margin: 0 1.5rem 0.5rem 0;
    }
  }
`;
```
## `web\src\styles\category\SingleCategoryStyles.js`
```
import styled from 'styled-components';

export const SingleCategoryStyles = styled.div`
  .pageHeader {
    position: relative;
    padding: 2rem 0;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #0d121f, #0d121fe0 30%, #4a46eb14);
      z-index: -1;
    }
    .coverImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .custom-image {
      max-width: 200px;
      max-height: 200px;
    }
  }
  @media only screen and (max-width: 768px) {
    .pageHeader {
      padding: 0;
      &:after {
        display: none;
      }
    }
    .coverImage {
      display: none;
    }
  }
`;

```
## `web\src\styles\CustomImageStyles.js`
```
import styled from 'styled-components';

export const CustomImageStyles = styled.div`
  .custom-image {
    max-width: 180px;
    max-height: 180px;
    border-radius: 10px;
    margin: 15px;
  }
`;

```
## `web\src\styles\FooterStyles.js`
```
import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background: linear-gradient(135deg, #0A1128, #060910);
  border-top: 1px solid rgba(0, 174, 239, 0.2);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--white-1);
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;

```
## `web\src\styles\GlobalStyles.js`
```
import { createGlobalStyle } from 'styled-components';
import bgImage from '../images/background.svg'; 

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #00AEEF;
    --secondary: #007BFF;
    --darkBlue: #0A1128;
    --darkPurple: #1A0B2E;
    --black-1: #060910;
    --black-2: #0B1325;
    --white-1: #E2E8F0;
    --gray: #8A98B0;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter', sans-serif;
    color: var(--white);

    /* 2. THE MULTI-LAYERED BACKGROUND */
    background-color: #060910;
    background-image: 
      /* Top Layer: The Tech Grid */
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      /* Second Layer: Cyan/Blue Radial Glows */
      radial-gradient(at 0% 0%, rgba(0, 174, 239, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(0, 123, 255, 0.15) 0px, transparent 50%),
      /* Third Layer: Dark Gradient Overlay to ensure white text remains readable over the bright bottom of your SVG */
      linear-gradient(to bottom, rgba(6, 9, 16, 0.6), rgba(6, 9, 16, 0.95)),
      /* Bottom Layer: Your SVG Image */
      url(${bgImage});
      
    background-size: 
      40px 40px, 40px 40px, /* Sizing for the grid */
      100% 100%, 100% 100%, /* Sizing for the glows */
      100% 100%,            /* Sizing for the dark overlay */
      cover;                /* 'cover' ensures the SVG stretches and compresses perfectly to the screen */
      
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  img,
  svg {
    height: 100%;
    width: 100%;
  }

  li,
  ul {
    list-style: none;
  }

  /* Global Animations */
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 5px rgba(0, 210, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 210, 255, 0.6);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 210, 255, 0.2);
    }
  }
`;

export default GlobalStyles;
```
## `web\src\styles\HeaderStyles.js`
```
import styled from 'styled-components';

export default styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  padding: 1rem 0;
  transition: background 0.3s ease-in-out;
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav__wrapper {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      li {
        &:hover {
          a {
            background: #2c313e;
          }
        }
        a {
          color: var(--white-1);
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
        }
      }
    }
  }

  .searchIcon {
    cursor: pointer;
    font-size: 25px;
    .searchIcon__wrapper {
      border-radius: 6px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0a2b63;
    }
  }
  .mobileMenuCloseBtn,
  .mobileNavBg,
  .mobileIcon,
  .mobileMenuBtn {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .mobileMenuCloseBtn,
    .mobileNavBg,
    .mobileIcon,
    .mobileMenuBtn {
      display: initial;
    }
    .nav__wrapper {
      nav {
        z-index: 1002;
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        transform: translateX(100%);
        background-color: rgba(34, 11, 34, 0.95);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease transform;
        ul {
          width: 90%;
          margin: 0 auto;
          flex-direction: column;
          li {
            display: block;
            margin: 0.5rem 0;
            &:hover {
              a {
                background: var(--black-1);
              }
            }
            a {
              width: 100%;
              padding: 0.5rem 1rem;
              border-radius: 4px;
            }
            &.searchIcon {
              display: none;
            }
          }
        }
        .mobileMenuCloseBtn {
          color: crimson;
          position: absolute;
          top: 10px;
          right: 10px;
          border-color: crimson;
          &:hover {
            background-color: crimson;
            color: var(--white);
          }
        }
      }
      &.open {
        nav {
          transform: translateX(0);
        }
      }
      .mobileNavBg {
        z-index: 1001;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.6s linear 0s;
        background: rgba(0, 0, 0, 0.5);
      }
    }
    .mobileIcon {
      display: flex;
      gap: 1rem;
    }
    .mobileMenuBtn {
      svg {
        font-size: 2.5rem;
      }
    }
  }
`;

```
## `web\src\styles\homePage\FeaturedBlogsStyles.js`
```
import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding: 5rem 0;
  .featuredBlogs__text {
    max-width: 450px;
  }
  .centre__text {
    text-align: center;
  }
`;

```
## `web\src\styles\homePage\HeroSectionStyles.js`
```
import styled from "styled-components";

export const HeroSectionStyles = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .hero__wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    padding: 120px 0 60px 0;
  }

  .badge {
    display: inline-block;
    background: rgba(0, 174, 239, 0.1);
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 5px 12px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .hero__heading {
    font-size: 4.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    background: linear-gradient(to right, #ffffff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero__text {
    font-size: 1.6rem;
    color: var(--white-1);
    margin-bottom: 30px;
  }

  /* 3D SVG CAROUSEL STYLES */
  .right {
    display: flex;
    justify-content: center;
  }

  .svg-carousel-container {
    width: 100%;
    max-width: 500px; /* Increased from 355px to match previous size */
    margin: 0 auto;
    position: relative;
    animation: floatCard 6s ease-in-out infinite;
  }

  @keyframes floatCard {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .carousel-mask {
    width: 100%;
    height: 100%;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    background: var(--black-1);
  }

  .carousel-image {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateX(60px) scale(0.8) rotate(-4deg);
    transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 1;
  }

  .carousel-image.active {
    opacity: 1;
    transform: translateX(0px) scale(1) rotate(0deg);
    z-index: 2;
  }

  .glass-reflection-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 50%);
    border: 1.5px solid rgba(0, 174, 239, 0.5); /* Cyan border */
    border-radius: 26px;
    pointer-events: none;
    z-index: 3;
    box-shadow: inset 0 0 25px rgba(0,0,0,0.6);
  }

  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      grid-template-columns: 1fr; 
      padding-top: 100px;
    }
    .hero__heading {
      font-size: 3.5rem;
    }
  }
`;
```
## `web\src\styles\homePage\TopCategoriesStyles.js`
```
import styled, { keyframes } from 'styled-components';

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
`;

export const TopCategoriesStyles = styled.div`
  padding: 5rem 0;
  overflow: hidden;

  .card-stack-wrapper {
    display: flex;
    justify-content: center;
    padding: 2rem 0 10rem 0;
    perspective: 1000px;
  }

  .card-stack-container {
    position: relative;
    width: 100%;
    max-width: 750px;
    height: 380px;
  }

  .stacked-card {
    position: absolute;
    inset: 0;
    border-radius: 30px;
    padding: 40px;
    transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: -15px 20px 50px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    transform: 
        translate(calc(var(--card-offset) * 60px), calc(var(--card-offset) * 20px)) 
        rotate(calc(var(--card-offset) * -2deg))
        scale(calc(1 - var(--card-offset) * 0.05));
    cursor: pointer;
  }

  .pulse-hint {
    animation: ${wiggle} 4s ease-in-out infinite;
  }

  .interaction-hint {
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.5;
    display: flex;
    align-items: center;
    gap: 8px;
    svg { width: 12px; height: 12px; animation: spin 4s linear infinite; }
  }

  @keyframes spin { 100% { transform: rotate(360deg); } }

  /* --- TECH GRADIENTS --- */
  .theme-cyan {
    background: linear-gradient(145deg, var(--primary) 0%, var(--secondary) 100%);
    color: #fff;
    .card-icon { background: rgba(0,0,0,0.2); color: #fff; }
    .interaction-hint { color: #fff; }
  }

  .theme-dark {
    background: linear-gradient(145deg, #1a1a1c 0%, #050505 100%);
    border: 1px solid rgba(0, 174, 239, 0.4);
    color: #fff;
    .card-icon { background: var(--primary); color: #000; }
  }

  .theme-slate {
    background: linear-gradient(145deg, #2e2e35 0%, #1c1c1f 100%);
    color: #fff;
    .card-icon { background: rgba(0, 174, 239, 0.2); color: var(--primary); }
  }

  .card-depth-1 { filter: brightness(0.7) blur(0.5px); }
  .card-depth-2 { filter: brightness(0.4) blur(1.5px); }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-header h3 { font-size: 2.4rem; font-weight: 800; }
  .card-icon { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;}
  .card-body p { font-size: 1.6rem; line-height: 1.6; margin-top: 20px; }

  .centre__text { text-align: center; }

  @media only screen and (max-width: 768px) {
    .card-stack-wrapper { padding: 2rem 0 10rem 0; }
    .card-stack-container { height: 480px; max-width: 85%; }
    .stacked-card {
      transform: 
        translateY(calc(var(--card-offset) * 60px)) 
        translateX(calc(var(--card-offset) * -10px))
        rotate(calc(var(--card-offset) * 3deg)) 
        scale(calc(1 - var(--card-offset) * 0.06));
      padding: 30px;
    }
    .card-header h3 { font-size: 1.8rem; }
    .card-body p { font-size: 1.4rem; }
  }
`;
```
## `web\src\styles\HomePageStyles.js`
```
import styled from 'styled-components';

export default styled.div`
  color: red;
`;

```
## `web\src\styles\LogoStyles.js`
```
import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: inline-block;
  max-width: 200px;
  svg {
    font-size: 3rem;
    path {
      stroke: white;
    }
  }
`;

```
## `web\src\styles\NotFoundPageStyles.js`
```
import styled from 'styled-components';

export const NotFoundPageStyles = styled.div`
  text-align: center;
  .title {
    font-size: 5rem;
  }
  .link {
    color: var(--primary);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

```
## `web\src\styles\PageHeaderStyles.js`
```
import styled from 'styled-components';

export const PageHeaderStyles = styled.div`
  margin: 3rem 0;
  max-width: 400px;
`;

```
## `web\src\styles\PageSpaceStyles.js`
```
import styled from 'styled-components';

export const PageSpaceStyles = styled.div`
  padding-top: ${(props) => props.top || 100}px;
  padding-bottom: ${(props) => props.bottom || 100}px;
`;

```
## `web\src\styles\PaginationStyles.js`
```
import styled from 'styled-components';

export const PaginationStyles = styled.div`
  text-align: center;
  margin-top: 5rem;
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      background: var(--gray);
      padding: 0.8rem;
      border-radius: 4px;
      svg {
        padding: 0;
        margin: 0;
      }
      &.disabled {
        opacity: 0.2;
        pointer-events: none;
      }
    }
  }
`;

```
## `web\src\styles\search\SearchFieldStyles.js`
```
import styled from 'styled-components';

export const SearchFieldStyles = styled.label`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    font-size: 1.8rem;
    padding: 1rem;
    border-radius: 4px;
    color: var(--darkBlue);
    font-family: Poppins;
    border: none;
    outline: none;
    &:focus {
      outline: 3px solid var(--secondary);
    }
  }
  .searchIcon {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #048B63;
  }
  @media only screen and (max-width: 768px) {
    input {
      font-size: 1.6rem;
      padding: 0.6rem;
      &:focus {
        outline: 2px solid var(--secondary);
      }
    }
  }
`;

```
## `web\src\styles\search\SearchModalStyles.js`
```
import styled from 'styled-components';

export const SearchModalStyles = styled.div`
  position: fixed;
  z-index: 2000;
  min-height: 100vh;
  width: 100%;
  background-color: #000000bd;
  .modal__container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100px;
    max-height: calc(100% - 150px);
    width: 90%;
    max-width: 500px;
    background-color: var(--black-1);
    padding: 2rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .close {
      position: absolute;
      transform: translateY(-100%);
      top: -10px;
      right: 0;
      border-color: #1f1f47;
      color: crimson;
      &:hover {
        background-color: crimson;
        color: var(--white);
      }
    }
    .search__result {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      overflow-y: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .modal__container {
      padding: 1rem;
    }
  }
`;

```
## `web\src\styles\search\SearchResultItemStyles.js`
```
import { Link } from 'gatsby';
import styled from 'styled-components';

export const SearchResultItemStyles = styled(Link)`
  width: 100%;
  background-color: #1c3803;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 8px;
  .img {
    width: 50px;
    height: 40px;
    border-radius: 4px;
  }
  .title {
    font-size: 1.6rem;
  }
  .categoriesText {
    font-size: 1.3rem;
    a {
      color: var(--grey);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .authorProfileImg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

```
## `web\src\styles\typography\ParagraphTextStyles.js`
```
import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
  font-family: 'Inter', sans-serif;
  color: var(--grey);
  font-size: 1.6rem;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

```
## `web\src\styles\typography\SectionTitleStyles.js`
```
import styled from 'styled-components';

export const SectionTitleStyles = styled.h2`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: var(--primary);
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const TitleStyles = styled.h2`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

```
## `web\src\templates\activity-list.js`
```
import React from "react";
import { graphql } from "gatsby";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import PageHeader from "../components/PageHeader";
import ActivityGrid from "../components/category/ActivityGrid";
import Pagination from "../components/Pagination";

export const ActivityListQuery = graphql`
  query activitiesQuery($limit: Int!, $offset: Int!) {
    allSanityActivity(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Activity({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const activities = data.allSanityActivity.nodes;

  return (
    <>
      <SEO title="Core Services" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Core Services & R&D"
            description="Driving innovation, building solutions, and creating impact for Zimbabwe. Our evidence-based intelligence translates national digital strategies from policy into prosperity."
          />
          <ActivityGrid activities={activities} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/activities"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Activity;

```
## `web\src\templates\author-list.js`
```
import { graphql } from 'gatsby';
import React from 'react';
import AuthorGrid from '../components/author/AuthorGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="About Us & Our Team" />
      <div className="container">
        <PageHeader
          title="About Us"
          description="Our multidisciplinary team of experts spans research, engineering, finance, operations, and governance. We represent exactly the kind of home-grown innovation institution that drives digital transformation."
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/team"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;

```
## `web\src\templates\blog-list.js`
```
import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO title="Posts" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Posts"
            description="A timeline of our dedication to full client satisfaction"
          />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/spotlight"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Blogs;

```
## `web\src\templates\category-list.js`
```
import React from 'react';
import { graphql } from 'gatsby';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Categories({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      <SEO title="Categories" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Categories"
            description="Our overarching intervention departments"
          />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/categories"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Categories;

```
## `web\src\templates\publication-list.js`
```
import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/seo';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import Pagination from '../components/Pagination';

export const query = graphql`
  query publicationListQuery($limit: Int!, $offset: Int!) {
    allSanityPublication(sort: { fields: _createdAt, order: DESC }, limit: $limit, skip: $offset) {
      nodes {
        id
        title
        _createdAt
        slug { current }
        coverImage { alt, asset { gatsbyImageData } }
      }
    }
  }
`;

function Publications({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const publications = data.allSanityPublication.nodes.map(pub => ({
    ...pub,
    publishedAt: pub._createdAt,
    categories: []
  }));

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Publications & Books" />
      <div className="container">
        <PageHeader title="Publications & Books" description="Explore Sisizathu Hub's research and literature." />
        <BlogGrid blogs={publications} prefix="publications" />
        {numberOfPages > 1 && (
          <Pagination currentPage={currentPage} numberOfPages={numberOfPages} baseURL="/publications" />
        )}
      </div>
    </PageSpace>
  );
}
export default Publications;
```
## `web\src\templates\single-activity.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";

export const query = graphql`
  query SingleActivity($id: String!) {
    sanityActivity(id: { eq: $id }) {
      title
      _rawDescription
      _rawBody 
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`;

function SingleActivity({ data }) {
  const activity = data.sanityActivity;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Sisizathu Hub - ${activity.title}`} /> 
          
          <PageHeader title={activity.title} className="pageHeader">
            {/* This displays the Short Description in the header area */}
            <MyPortableText value={activity._rawDescription} />
            
            {activity.coverImage && (
              <GatsbyImage
                image={activity.coverImage.asset.gatsbyImageData}
                alt={activity.coverImage.alt || activity.title}
                className="coverImage"
              />
            )}
          </PageHeader>

          {/* 2. to display the Full Service Details (Body) */}
          <hr style={{ margin: '2rem 0', opacity: '0.1' }} />
          <div className="body-content">
             <MyPortableText value={activity._rawBody} />
          </div>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleActivity;
```
## `web\src\templates\single-author.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import MyPortableText from "../components/MyPortableText";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { Title } from "../components/typography/Title";
import { SingleAuthorStyles } from "../styles/author/SingleAuthorStyles";

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;
  return (
    <PageSpace top={80} bottom={100}>
      <SEO title={author.name} />
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            {/* Add this conditional check */}
            {author.profileImage && (
              <GatsbyImage
                image={author.profileImage.asset.gatsbyImageData}
                alt={author.profileImage.alt || author.name}
                className="profileImage"
              />
            )}
            <Title className="name">{author.name}</Title>
            <div className="bio">
              <MyPortableText value={author._rawBio} />
            </div>
          </div>
          <hr className="hr" />
          <BlogGrid blogs={blogs} />
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;

```
## `web\src\templates\single-blog.js`
```
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { format } from "date-fns";
import { BiCategory } from "react-icons/bi";
import { FiCalendar, FiUser } from "react-icons/fi";
import PageSpace from "../components/PageSpace";
import ParagraphText from "../components/typography/ParagraphText";
import { Title } from "../components/typography/Title";
import { SingleBlogStyles } from "../styles/blog/SingleBlogStyles";
import MyPortableText from "../components/MyPortableText";
import SEO from "../components/seo";

/// id coming from context defined in gatsby-node
export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

/// data is the result of the query
function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  return (
    <SingleBlogStyles>
      <SEO title={`Sisizathu Hub-${blog.title}`} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            {blog.coverImage && (
              <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt || blog.title}
                className="blog-cover-image"
              />
            )}
            <Title className="title">{blog.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.publishedAt), "p, MMMM dd, yyyy")}
            </ParagraphText>
            <ParagraphText className="categoriesText">
              <BiCategory />
              <span>
                {blog.categories.map((item, index) => (
                  <span key={item.slug.current}>
                    <Link to={`/categories/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </ParagraphText>
            <ParagraphText className="author">
              <FiUser />
              <Link to={`/team/${blog.author.slug.current}`}>
                {blog.author.name}
              </Link>
            </ParagraphText>
          </div>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={blog._rawBody} />
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default SingleBlog;

```
## `web\src\templates\single-category.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";

/// category id parameter is being dynamically accessed from context in gatsby-node
export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleCategory({ data }) {
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Sisizathu Hub-${category.title}`} />
          <PageHeader title={category.title} className="pageHeader">
            <MyPortableText value={category._rawDescription} />
            {/* Add the check here */}
            {category.coverImage && (
              <GatsbyImage
                image={category.coverImage.asset.gatsbyImageData}
                alt={category.coverImage.alt || category.title}
                className="coverImage"
              />
            )}
          </PageHeader>
          <BlogGrid blogs={blogs} />
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;

```
## `web\src\templates\single-publication.js`
```
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import MyPortableText from "../components/MyPortableText";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/seo";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";
import Button from "../components/buttons/Button"; 

export const query = graphql`
  query SinglePublication($id: String!) {
    sanityPublication(id: { eq: $id }) {
      title
      _rawDescription
      targetAudience
      coverImage {
        asset { gatsbyImageData }
        alt
      }
      documentUpload {
        asset {
          url
          originalFilename
        }
      }
    }
  }
`;

function SinglePublication({ data }) {
  const publication = data.sanityPublication;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Sisizathu Hub - ${publication.title}`} />
          <PageHeader title={publication.title} className="pageHeader">
            
            {publication.targetAudience && (
              <p style={{ color: "var(--primary)", marginBottom: "1.5rem", fontSize: "1.6rem" }}>
                <strong>Target Audience:</strong> {publication.targetAudience}
              </p>
            )}
            
            <MyPortableText value={publication._rawDescription} />
            
            {/*DOWNLOAD BUTTON */}
            {publication.documentUpload && (
              <div style={{ marginTop: "2rem" }}>
                <Button 
                  tag="a" 
                  href={publication.documentUpload.asset.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download / View Document
                </Button>
              </div>
            )}

            {publication.coverImage && (
              <GatsbyImage
                image={publication.coverImage.asset.gatsbyImageData}
                alt={publication.coverImage.alt || publication.title}
                className="coverImage"
              />
            )}

          </PageHeader>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SinglePublication;
```
## `web\src\utils\getSanityImageData.js`
```
import { getImageData } from 'gatsby-plugin-image';

/// extracting an optimized URL from the default cdn url connected to our sanity db on the backend. Letters are parameters
function urlBuilder({ baseUrl, width, height, format, options }) {
  return `${baseUrl}?w=${width}&h=${height}&fmt=${format}&q=${options.quality}`;
}

export function getSanityImageData({ image, ...props }) {
  return getImageData({
    baseUrl: image.url,
    sourceWidth: image.width,
    sourceHeight: image.height,
    urlBuilder,
    pluginName: 'gatsby-source-example',
    formats: ['auto'],
    options: {
      quality: 50,
    },
    ...props,
  });
}

```
