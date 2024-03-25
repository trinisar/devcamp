function ToDoItem({ text, priority }) {
    return (
        <div style={{ backgroundColor: priority === 0 ? 'red' : null }}>
            {text}
        </div>
    );
}

export default ToDoItem;