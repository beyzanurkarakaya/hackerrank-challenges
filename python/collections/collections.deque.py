# Enter your code here. Read input from STDIN. Print output to STDOUT
from collections import deque

n = int(input())
d = deque()

for _ in range(n):
    command, *params = input().split()
    
    if command == "append":
        d.append(params[0])
    elif command == "appendleft":
        d.appendleft(params[0])
    elif command == "pop":
        d.pop()
    elif command == "popleft":
        d.popleft()
        
print(*d)

# from collections import deque
# d = deque()
# for _ in range(int(input())):
#     cmd, *args = input().split()
#     # d nesnesi icinde cmd ismindeki metodu bul ve args ile calistir
#     getattr(d, cmd)(*args)
#print(*d)