def average(array):
    # your code goes here
    n = len(set(array))
    summary = sum(set(array))
    average_arr = summary / n
    return average_arr

