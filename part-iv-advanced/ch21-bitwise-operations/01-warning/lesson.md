## Warning!

Just a heads-up...

For those of you who are mainly interested in practical programming, the early parts of this section may not be for you.

I'll be getting into the underlying theory of binary integers, the 
circuits used to add binary values, and the theoretical basis of the
integer system as implemented in the computer.

This is all valuable information and will help you understand why certain
situations in bitwise computation behave the way they do, but it's not
compulsory in order to perform the bitwise computations we'll learn later.

If you want to omit the theory and go straight to the logic and programming
with bitwise operations, skip to the [Truth Tables](#bitwise-truth-tables)
lesson.

Here's how the lessons divide:

* Theory (lessons 01 to 09): integers, number bases, negative numbers, integer
  overflow, binary addition, and the ones' and twos' complement systems.
* Practical (lessons 10 to 19): truth tables, the bitwise AND, OR, NOT, and XOR
  operators, bit flags, bit shifts, and a simple encryption example.

Lessons 05 and 18 include JavaScript examples that show what fixed-width bitwise work
does with overflow and underflow. Ordinary JavaScript `Number` arithmetic keeps a much
larger floating-point range, but bitwise operators convert their operands to signed
32-bit integers, so the same-looking operation can produce a very different result.

Otherwise, hang on. It's a bit of a bumpy ride...

---
