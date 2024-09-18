function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Catatan tidak boleh kosong woyyyyy');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('div');
    taskText.classList.add('task-text');
    taskText.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.onclick = () => taskList.removeChild(taskItem);

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    
    taskInput.value = '';
}

function downloadTasks() {
    const taskList = document.getElementById('taskList');
    let tasks = '';

    for (let i = 0; i < taskList.children.length; i++) {
        tasks += `${taskList.children[i].firstChild.textContent}\n`;
    }
    const blob = new Blob([tasks], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Catatan.txt';
    link.click();
}
