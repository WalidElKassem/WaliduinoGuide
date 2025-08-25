import os
import re
from pathlib import Path

# List of pages and their labels for navigation
PAGES = [
    ("Home", "index.html"),
    ("Good To Know", "000_Good_To_Know/index.html"),
    ("Board Structure", "000_Board_Structure/index.html"),
    ("Get Started", "000_Get_Started/index.html"),
    ("Unit1: Turn On the Red LED", "001_Unit1_Turn_On_Red_Led/index.html"),
]

# Simple inline markdown replacement
INLINE_PATTERNS = [
    (re.compile(r"\*\*(.+?)\*\*"), r"<strong>\1</strong>"),
    (re.compile(r"\*(.+?)\*"), r"<em>\1</em>"),
]

LINK_RE = re.compile(r"\[(.+?)\]\((.+?)\)")

def inline_markdown(text: str) -> str:
    for pattern, repl in INLINE_PATTERNS:
        text = pattern.sub(repl, text)

    def _link_repl(match: re.Match) -> str:
        label, url = match.groups()
        if url.endswith('.md'):
            url = url[:-3] + '.html'
        return f"<a href='{url}'>" + label + "</a>"

    text = LINK_RE.sub(_link_repl, text)
    return text

# Basic Markdown to HTML conversion

def md_to_html(text: str) -> str:
    lines = text.splitlines()
    html_lines = []
    in_list = False
    for line in lines:
        stripped = line.strip()
        if not stripped or re.match(r"^\[[^\]]+\]:", stripped):
            if in_list:
                html_lines.append("</ul>")
                in_list = False
            continue
        if stripped.startswith('#'):
            if in_list:
                html_lines.append("</ul>")
                in_list = False
            level = len(stripped) - len(stripped.lstrip('#'))
            content = stripped[level:].strip()
            html_lines.append(f"<h{level}>{inline_markdown(content)}</h{level}>")
            continue
        if stripped.startswith(('* ', '- ')):
            if not in_list:
                html_lines.append("<ul>")
                in_list = True
            content = stripped[2:].strip()
            html_lines.append(f"<li>{inline_markdown(content)}</li>")
            continue
        if in_list:
            html_lines.append("</ul>")
            in_list = False
        html_lines.append(f"<p>{inline_markdown(stripped)}</p>")
    if in_list:
        html_lines.append("</ul>")
    return "\n".join(html_lines)

# Extract title from front matter or first heading

def extract_title(raw: str) -> (str, str):
    title = ""
    text = raw
    if raw.startswith('---'):
        parts = raw.split('---', 2)
        if len(parts) >= 3:
            fm = parts[1]
            text = parts[2]
            for line in fm.splitlines():
                if line.lower().startswith('title:'):
                    title = line.split(':', 1)[1].strip()
                    break
    # fallback: first heading
    for line in text.splitlines():
        if line.startswith('#'):
            title = line.lstrip('#').strip()
            break
    return title or "Waliduino", text

# Build navigation menu for a given page directory

def build_nav(current_dir: Path) -> str:
    items = []
    for label, page in PAGES:
        rel = os.path.relpath(Path(page), current_dir)
        items.append(f"<li><a href='{rel}'>{label}</a></li>")
    return "\n".join(items)

# Convert a single Markdown file to HTML

def convert_file(md_path: Path):
    raw = md_path.read_text(encoding='utf-8')
    title, text = extract_title(raw)
    body = md_to_html(text)
    out_path = md_path.with_suffix('.html')
    rel_css = os.path.relpath(Path('assets/css/style.css'), md_path.parent)
    rel_js = os.path.relpath(Path('assets/js/nav.js'), md_path.parent)
    nav = build_nav(md_path.parent)
    template = f"""<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>{title}</title>
<link rel='stylesheet' href='{rel_css}'>
<script defer src='{rel_js}'></script>
</head>
<body>
<nav class='site-nav'>
  <button id='nav-toggle' class='nav-toggle' aria-expanded='false'>☰</button>
  <ul id='nav-menu' class='nav-menu'>
{nav}
  </ul>
</nav>
<div class='container'>
{body}
</div>
</body>
</html>
"""
    out_path.write_text(template, encoding='utf-8')
    return out_path

# Main: find all .md files and convert

def main():
    for md in Path('.').rglob('*.md'):
        convert_file(md)

if __name__ == '__main__':
    main()
