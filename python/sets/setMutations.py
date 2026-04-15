# Enter your code here. Read input from STDIN. Print output to STDOUT
A = int(input())
set_A = set(map(int, input().split()))
N = int(input())
for i in range(N):
    command_args = input().split()
    command = command_args[0]
    
    if command == "update":
        set_B = set(map(int, input().split()))
        set_A.update(set_B)
    elif command == "intersection_update":
        set_B = set(map(int, input().split()))
        set_A.intersection_update(set_B)
    elif command == "difference_update":
        set_B = set(map(int, input().split()))
        set_A.difference_update(set_B)
    elif command == "symmetric_difference_update":
        set_B = set(map(int, input().split()))
        set_A.symmetric_difference_update(set_B)
    
print(sum(set_A))
