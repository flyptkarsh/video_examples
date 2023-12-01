# frozen_string_literal: true

# Array#drop_while

# The Array#drop_while method returns an array containing the elements of the array after the first element that returns false or nil when passed to the given block.

# Here's an example:
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = numbers.drop_while { |num| num < 5 }
puts result.inspect
# Output: [5, 6, 7, 8, 9, 10]

# Array#fetch  — Accessing Elements by Index

# The Array#fetch method allows you to access elements in an array by their index. It takes an index as an argument and returns the element at that index. If the index is out of range, it can return a default value or raise an error.

# Here's an example:
fruits = %w[apple banana orange]
puts fruits.fetch(1)
# Output: "banana"

puts fruits.fetch(5, 'grape')
# Output: "grape"

puts fruits.fetch(5) { |index| "Index #{index} is out of range" }
# Output: "Index 5 is out of range"

# Array#frozen? — Checking if an Array is Frozen

# The Array#frozen? method returns true if the array is frozen, meaning that it cannot be modified. Otherwise, it returns false.

# Here's an example:
fruits = %w[apple banana orange]
puts fruits.frozen?
# Output: false

fruits.freeze
puts fruits.frozen?
# Output: true

# Array#rotate — Rotating an Array

# The Array#rotate method rotates the elements of an array. It takes an optional argument specifying the number of positions to rotate. Positive values rotate to the right, while negative values rotate to the left.

# Here's an example:
numbers = [1, 2, 3, 4, 5]
result = numbers.rotate(2)
puts result.inspect
# Output: [4, 5, 1, 2, 3]

result = numbers.rotate(-1)
puts result.inspect
# Output: [2, 3, 4, 5, 1]

# Array#to_h — Converting an Array to a Hash

# The Array#to_h method converts an array to a hash. It takes an optional block that is used to generate the values of the hash.

# Here's an example:
fruits = [['apple', 1], ['banana', 2], ['orange', 3]]
result = fruits.to_h
puts result.inspect
# Output: {"apple"=>1, "banana"=>2, "orange"=>3}
