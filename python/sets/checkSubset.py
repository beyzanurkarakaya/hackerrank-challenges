# Enter your code here. Read input from STDIN. Print output to STDOUT
test = int(input())

for i in range(test):
    A = int(input())
    set_A = set(map(int, input().split()))
    B = int(input())
    set_B = set(map(int, input().split()))
    
    if len(set_A.difference(set_B)) == 0:
        print("True")
    else:
        print("False")
