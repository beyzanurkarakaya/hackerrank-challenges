from collections import OrderedDict
def merge_the_tools(string, k):
    # your code goes here
    for i in range(0, len(string), k):
        substring = string[i:i+k]
        uniques = "".join(OrderedDict.fromkeys(substring))
        print(uniques)

