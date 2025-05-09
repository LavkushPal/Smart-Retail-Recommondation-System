from itertools import islice

def create_bit_mat(file_path):
    """
    Reads the first 1000 lines of the transaction list file, creates a unique item list, and generates a 2D bit matrix.

    Parameters:
        file_path (str): Path to the transaction list file.

    Returns:
        bit_matrix (list of list of int): A 2D bit matrix where rows represent transactions and columns represent items.
        unique_items (list of str): List of unique items in the transactions.
    """
    unique_items = set()

    # Read the first 1000 lines of the file and extract unique items
    transactions = []
    with open(file_path, "r") as file:
        for line in islice(file, 1000):  # Read only the first 1000 lines
            # Split the line to extract the transaction items (ignoring the index)
            _, items = line.strip().split(": ", 1)
            transaction = items.split(", ")
            transactions.append(transaction)
            unique_items.update(transaction)

    # Convert unique items to a sorted list
    unique_list = sorted(unique_items)

    # Create a 2D bit matrix
    bit_matrix = []
    for transaction in transactions:
        row = [1 if item in transaction else 0 for item in unique_list]
        bit_matrix.append(row)

    return bit_matrix, unique_list


if __name__ == "__main__":
    transaction_list_path = "transaction_list.txt"  # Update the path if needed
    bit_map_file = "bit_map.txt"  # File to store the bit matrix

    # Generate the bit matrix and unique items
    bit_matrix, unique_items = create_bit_mat(transaction_list_path)

    # Print the unique items (column headers)
    print("Unique Items (Columns):")
    print(unique_items)

    # Print the bit matrix
    print("\nBit Matrix (Rows):")
    for i, row in enumerate(bit_matrix):
        print(f"{i}: {row}")


    # Store the bit matrix in a file
    with open(bit_map_file, "w") as file:
        # Write the header (unique items)
        file.write("Index\t" + "\t".join(unique_items) + "\n")
        # Write each row of the bit matrix
        for i, row in enumerate(bit_matrix):
            file.write(f"{i}\t" + "\t".join(map(str, row)) + "\n")

    print(f"\nBit matrix has been saved to {bit_map_file}.")

#read transaction file
    #create unique item list
    #then assign index to each unique item
    #at last fill bit matrix
    #use this bit matrix to calculate support
    #calculate confidence and lift for each combination with in transaction
    #store this rules or trained dataset for recommondation of items
