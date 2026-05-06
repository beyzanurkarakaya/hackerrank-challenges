cube = lambda x: x**3 # complete the lambda function 

def fibonacci(n):
    # return a list of fibonacci numbers
    res = [0, 1]

    if n == 0:
        return []
    if n == 1:
        return [0]

    for i in range(2, n):
        res.append(res[i-1] + res[i-2])
        
    return res

if __name__ == '__main__':
    n = int(input())
    print(list(map(cube, fibonacci(n))))