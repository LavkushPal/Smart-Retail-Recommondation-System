
from itertools import islice


def support_pair(x,y,bit_mat,colum_mapping):
    total_transaction=len(bit_mat)

    x_index=colum_mapping.index(x)
    y_index=colum_mapping.index(y)

    count=0
    for i in range(total_transaction):
        if bit_mat[i][x_index] and bit_mat[i][y_index]:
            count = count + 1
    
    return count/total_transaction



def support(item,bit_mat,colum_mapping):
    total_transaction=len(bit_mat)

    i_index=colum_mapping.index(item)

    count=0
    for i in range(total_transaction):
        if bit_mat[i][i_index]:
            count = count + 1
    
    return count/total_transaction


def gen_rul(item1, item2, bit_mat, colum_mapping, rules):
    sp1 = support(item1, bit_mat, colum_mapping)
    sp2 = support(item2, bit_mat, colum_mapping)
    sp12 = support_pair(item1, item2, bit_mat, colum_mapping)

    confidence = sp12 / sp1 if sp1 else 0
    lift = sp12 / (sp1 * sp2) if sp1 * sp2 else 0

    #strong association: lift>=1.5 
    if confidence >= 0.6 and lift >= 1.5:
        # Add item2 to item1's association list
        if item1 not in rules:
            rules[item1] = []
        if item2 not in rules[item1]:
            rules[item1].append(item2)

        # Add item1 to item2's association list
        if item2 not in rules:
            rules[item2] = []
        if item1 not in rules[item2]:
            rules[item2].append(item1)


def each_pairs(item_list, bit_mat, column_mapping, rules):
    for i in range(len(item_list)):
        for j in range(i + 1, len(item_list)):  # To avoid duplicate pairs and self-pairs
            item1 = item_list[i]
            item2 = item_list[j]
            if item1 != item2:
                gen_rul(item1, item2, bit_mat, column_mapping, rules)



def read_bit_map(file_path):
   
    bit_matrix = []
    column_mapping = []

    # Open the file and read the header (first line)
    with open(file_path, "r") as file:
        # Read the first line to get column names
        header = file.readline().strip().split("\t")
        column_mapping = header[1:]  # Skip the "Index" column

        # Read the remaining lines to populate the bit matrix
        for line in file:
            row = list(map(int, line.strip().split("\t")[1:]))  # Skip the "Index" column
            bit_matrix.append(row)

    return bit_matrix, column_mapping


if __name__ == "__main__":
    transaction_list = "transaction_list.txt"
    bit_map = "bit_map.txt"
    generated_rules="trained_rules.txt"

    rules= {} # rules dictionary

    # Read the bit_map file into a 2D matrix and get column mapping
    bit_mat, column_mapping = read_bit_map(bit_map)

    # Print the column mapping
    # print("Column Mapping (Items):")
    # print(column_mapping)

    # Print the bit matrix
    # print("\nBit Matrix:")
    # for row in bit_mat:
    #     print(row)

    # Process the transaction list
    with open(transaction_list, "r") as file:
        for line in islice(file, 1000):  # Read only the first 1000 lines
            # Split the line to extract the transaction items (ignoring the index)
            _, items = line.strip().split(": ", 1)
            item_list = items.split(", ")
            if(len(item_list)>1):
                each_pairs(item_list,bit_mat,column_mapping,rules)

    # Print the rules dictionary
    print("\nGenerated Rules:")
    for item, related_items in rules.items():
        print(f"{item}: {related_items}")

    with open(generated_rules,"w") as file:
        for item, related_items in rules.items():
            file.write(f"{item}: {', '.join(related_items)}\n") 