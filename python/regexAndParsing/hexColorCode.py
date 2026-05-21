# Enter your code here. Read input from STDIN. Print output to STDOUT
import re

# Read the number of lines
n = int(input())

# Flag to track whether we are inside a CSS property block
in_css_block = False

# Regex to match valid Hex codes (3 or 6 hex digits, case-insensitive)
# It ensures the hex starts with # but is immediately preceded by a colon, comma, or space
hex_pattern = r"(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3})(?=[;,\)])"

for _ in range(n):
    line = input()
    
    # Enable scanning when entering a CSS rule block
    if "{" in line:
        in_css_block = True
    # Disable scanning when leaving a CSS rule block
    elif "}" in line:
        in_css_block = False
    
    # Extract matches only if we are inside the properties block
    if in_css_block:
        matches = re.findall(hex_pattern, line)
        for match in matches:
            print(match)