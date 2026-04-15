n = int(input())
s = set(map(int, input().split()))
lines = int(input())

for i in range(lines):
    command_args = input().split()
    command = command_args[0]
    
    if command == "remove":
        s.remove(int(command_args[1]))
    elif command == "discard":
        s.discard(int(command_args[1]))
    elif command == "pop":
        s.pop()
        
print(sum(s))
