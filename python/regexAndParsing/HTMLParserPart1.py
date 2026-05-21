# Enter your code here. Read input from STDIN. Print output to STDOUT
from html.parser import HTMLParser

# Subclass HTMLParser and override the required handler methods
class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print(f"Start : {tag}")
        for attr in attrs:
            print(f"-> {attr[0]} > {attr[1]}")

    def handle_endtag(self, tag):
        print(f"End   : {tag}")

    def handle_startendtag(self, tag, attrs):
        print(f"Empty : {tag}")
        for attr in attrs:
            print(f"-> {attr[0]} > {attr[1]}")

# Read input and create a parser instance
n = int(input())
html_code = ""

for _ in range(n):
    html_code += input().strip() + "\n"

# Run the parser
parser = MyHTMLParser()
parser.feed(html_code)