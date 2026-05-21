# Enter your code here. Read input from STDIN. Print output to STDOUT
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print(tag)
        for attr, value in attrs:
            print(f"-> {attr} > {value}")

    def handle_startendtag(self, tag, attrs):
        print(tag)
        for attr, value in attrs:
            print(f"-> {attr} > {value}")

# Read the number of input lines
n = int(input())
html_code = ""

for _ in range(n):
    html_code += input() + "\n"

# Parse the HTML content
parser = MyHTMLParser()
parser.feed(html_code)
parser.close()