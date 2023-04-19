# def remove_char_from(word, c):
#     # make empty array to add the word not equal c
#     wordWithoutC = []
#     for item in word:
#         if (item != c.upper() and item != c.lower()):
#             wordWithoutC.append(item)

#     return "".join(wordWithoutC)

# high order function
def remove_char_from(word, c):
    result = filter(lambda x: x != c.lower() and x != c.upper(),word)
    return "".join(result)


# Testing Ouput
print(remove_char_from("ElddzeroD WebDD ddSchool", "d"))  # Elzero Web School
print(remove_char_from("ElxzeroX Web Sxchool", "x"))  # Elzero Web School
print(remove_char_from("Elzero@ Web@@ @@School", "@"))  # Elzero Web School
