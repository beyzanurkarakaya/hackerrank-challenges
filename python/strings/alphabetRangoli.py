import string
def print_rangoli(size):
    # your code goes here
    alpha = string.ascii_lowercase
    lines = []
    
    for i in range(size):
        s = "-".join(alpha[i:size])
        row = s[::-1] + s[1:]
        lines.append(row)
    
    width = len(lines[0])
    
    for i in range(size-1, 0, -1):
        print(lines[i].center(width, "-"))
        
    for i in range(size):
        print(lines[i].center(width, "-"))

