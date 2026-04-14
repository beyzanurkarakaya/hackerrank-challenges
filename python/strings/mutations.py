def mutate_string(string, position, character):
    return string[:position] + f"{character}" + string[position+1:]

