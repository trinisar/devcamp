import ToDoItem from "./ToDoItem"

function ToDo() {
    const list = [
        { text: 'Item 1', priority: 0 },
        { text: 'Item 2', priority: 2 },
        { text: 'Item 3', priority: 0 },
        { text: 'Item 4', priority: 2 },
        { text: 'Item 5', priority: 2 },
        { text: 'Item 6', priority: 2 },
        { text: 'Item 7', priority: 2 },
        { text: 'Item 8', priority: 2 },
        { text: 'Item 9', priority: 2 },
        { text: 'Item 10', priority: 2 },        
    ]

    return (
        <div>
            <h2>To do</h2>
            <div>
                {list.map((item, index) => (
                    <ToDoItem key={index} text={item.text} priority={item.priority} />
                ))}
            </div>
        </div>
    );
}

export default ToDo