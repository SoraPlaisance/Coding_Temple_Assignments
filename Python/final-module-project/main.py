# Todo List

# Create an empty list to store tasks

tasks = []

# Function to display the menu

def display_menu():
    print("\nTodo List Menu:")
    print("1. Add a task")
    print("2. View tasks")
    print("3. Delete a task")
    print("4. Quit")

# Functions to add, view, and delete tasks

# Add
def add_task():
    task = input("Enter the task you want to add: ")
    tasks.append(task)
    print(f'Task "{task}" added.')

# View
def view_tasks():
    if not tasks:
        print("No tasks in the list.")
    else:
        print("Your tasks:")
        for idx, task in enumerate(tasks, start=1):
            print(f"{idx}. {task}")

# Delete
def delete_task():
    view_tasks()
    if tasks:
        try:
            task_num = int(input("Enter the task number to delete: "))
            if 1 <= task_num <= len(tasks):
                removed_task = tasks.pop(task_num - 1)
                print(f'Task "{removed_task}" deleted.')
            else:
                print("Invalid task number.")
        except ValueError:
            print("Please enter a valid number.")

# Put it all together!

def todo_list():
    print("Welcome to the Todo List Application!")
    while True: # Loop until the user chooses to quit
        display_menu()
        choice = input("Choose an option (1-4): ")
        if choice == '1':
            add_task()
        elif choice == '2':
            view_tasks()
        elif choice == '3':
            delete_task()
        elif choice == '4':
            print("Goodbye!")
            break # Exit the loop and end the program
        else:
            print("Invalid choice. Please select a valid option.")
            
if __name__ == "__main__":
    todo_list()