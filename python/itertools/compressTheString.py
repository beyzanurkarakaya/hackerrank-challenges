# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import groupby

s = input()

for k, g in groupby(s):
    print((len(list(g)), int(k)), end=" ")
