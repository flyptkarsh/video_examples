# Array#bsearch
# Here's how you can use Array#bsearch in Ruby:
sorted_array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
value_to_find = 40

found_value = sorted_array.bsearch { |x| value_to_find <=> x }

if found_value
  puts "Found value: #{found_value}"
else
  puts "Value not found."
end

# The bsearch method returns the first element for which the block returns true.

# If you need the index of the found element, you can use the Array#bsearch_index method instead:
sorted_array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
number_to_find = 13

found_index = sorted_array.bsearch_index { |x| x >= number_to_find }

if found_index
  puts "Number found at index: #{found_index}"
else
  puts "Number not found."
end

## Array#combination

# The Array#combination method returns an enumerator that yields all combinations of a given length of elements from the array.

# Here's an example:

array = [1, 2, 3, 4, 5]
array.combination(3).to_a

# => [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4],
#     [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5],
#     [2, 4, 5], [3, 4, 5]]


# Array#combination is useful when you want to find all possible combinations of elements from an array.

## Array#cycle

# The Array#cycle method calls the given block for each element of the array, repeating the cycle forever.
    
# Here's an example:

array = [1, 2, 3]
array.cycle { |x| puts x }

# You can also specify the number of times you want to repeat the cycle:

array = [1, 2, 3]
array.cycle(2) { |x| puts x }


## Array#differences — Calculating Consecutive Differences 

# The Array#differences method returns an array of consecutive differences between the elements of the array.

# Here's an example:
 
array = [1, 2, 3, 4, 5]
array.differences

# => [1, 1, 1, 1]

# The differences method is useful when you want to calculate the differences between consecutive elements of an array.

## Array#dig — Accessing Nested Elements

# The Array#dig method returns the nested element specified by the given sequence of keys.

# Here's an example:

array = [[1, 2], [3, 4], [5, 6]]
array.dig(1, 1)

# => 4

# The dig method is useful when you want to access nested elements of an array.

