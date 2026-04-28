# Enter your code here. Read input from STDIN. Print output to STDOUT
import re
import sys

input_data = sys.stdin.read().splitlines()

if input_data:
    t = int(input_data[0])
    
    for i in range(1, t + 1):
        pattern = input_data[i]
        try:
            re.compile(pattern)
            print(True)
        except re.error:
            print(False)