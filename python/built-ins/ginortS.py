# Enter your code here. Read input from STDIN. Print output to STDOUT
s = input()

def custom_sort(c):
    if c.islower():
        return (0, c)
    elif c.isupper():
        return (1, c) 
    elif c.isdigit():
        if int(c) % 2 != 0:
            return (2, c)
        else:
            return (3, c)

print(*sorted(s, key=custom_sort), sep='')