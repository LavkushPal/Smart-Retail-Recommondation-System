import pandas as pd

def generate_transaction_list(file_path):
    """
    Reads the groceries dataset and returns a transaction list.
    Each transaction is a list of items bought by a member on a particular date.

    Parameters:
        file_path (str): Path to 'Groceries_dataset.csv'.

    Returns:
        transactions (list of list of str): List of transactions.
    """
    # Read CSV file
    df = pd.read_csv(file_path)

    # Group by Member_number and Date to form transactions
    grouped = df.groupby(['Member_number', 'Date'])['itemDescription'].apply(list)

    # Convert to list of transactions
    transactions = grouped.tolist()
    
    return transactions

# Example usage
if __name__ == "__main__":
    transaction_list="transaction_list.txt"
    dataset_path = "Groceries_dataset.csv"  # Update if needed
    transactions = generate_transaction_list(dataset_path)

    # Print first 5 transactions
    # print("First 5 transactions:")
    # for i, t in enumerate(transactions[:5], 1):
    #     print(f"{i}. {t}")

    # Open the file in append mode
    file = open(transaction_list, "a")

    # Write each transaction with its index to the file
    for index, transaction in enumerate(transactions, start=1):
        # Convert the list to a comma-separated string and write the index and transaction
        file.write(f"{index}: {', '.join(transaction)}\n")

    # Close the file
    file.close()
