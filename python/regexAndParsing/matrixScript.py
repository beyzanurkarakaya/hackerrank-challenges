#!/bin/python3

import re

first_multiple_input = input().rstrip().split()

n = int(first_multiple_input[0])
m = int(first_multiple_input[1])

matrix = []

for _ in range(n):
    matrix_item = input()
    matrix.append(matrix_item)

# 1. Read columns from top to bottom and merge them into a single string
decoded_string = "".join([matrix[row][col] for col in range(m) for row in range(n)])

# 2. Match symbols and spaces situated only between alphanumeric characters
pattern = r"(?<=\w)[^\w]+(?=\w)"

# 3. Replace the matched symbols with a single space
result = re.sub(pattern, " ", decoded_string)

print(result)