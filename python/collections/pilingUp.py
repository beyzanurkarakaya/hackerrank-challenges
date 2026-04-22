# Enter your code here. Read input from STDIN. Print output to STDOUT
from collections import deque

def solve():
    n = int(input())

    d = deque(map(int, input().split()))

    last_picked = float('inf')

    for _ in range(n): # while d:
        if d[0] >= d[-1]:
            current = d.popleft()
        else:
            current = d.pop()
            
        if current > last_picked:
            print("No")
            return
        
        last_picked = current
        
    print("Yes")

t = int(input())
for _ in range(t):
    solve()