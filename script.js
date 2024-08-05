document.addEventListener('DOMContentLoaded', function () {
    const fileSystem = document.getElementById('file-system');
    const createFileBtn = document.getElementById('create-file-btn');
    const removeFileBtn = document.getElementById('remove-file-btn');
    const textEditorModal = document.getElementById('text-editor-modal');
    const textEditor = document.getElementById('text-editor');
    const saveFileBtn = document.getElementById('save-file-btn');
    const closeEditorBtn = document.getElementById('close-editor-btn');
    let currentFile = null;

    createFileBtn.addEventListener('click', createFile);
    removeFileBtn.addEventListener('click', removeFile);
    saveFileBtn.addEventListener('click', saveFile);
    closeEditorBtn.addEventListener('click', closeEditor);

    let fileCounter = 0;

    function createFile() {
        const fileName = prompt('Enter file name (with .txt extension):');
        if (fileName && fileName.endsWith('.txt')) {
            const file = document.createElement('div');
            file.classList.add('file');
            file.setAttribute('data-file-id', fileCounter);
            file.setAttribute('data-file-content', '');

            const fileIcon = document.createElement('div');
            fileIcon.classList.add('file-icon');
            fileIcon.innerText = '📄';

            const fileNameDiv = document.createElement('div');
            fileNameDiv.classList.add('file-name');
            fileNameDiv.innerText = fileName;

            file.appendChild(fileIcon);
            file.appendChild(fileNameDiv);
            fileSystem.appendChild(file);

            file.addEventListener('click', () => openEditor(file));

            fileCounter++;
        } else {
            alert('Please enter a valid .txt file name.');
        }
    }

    function removeFile() {
        const fileName = prompt('Enter file name to remove:');
        if (fileName) {
            const files = document.querySelectorAll('.file');
            let fileFound = false;
            files.forEach(file => {
                const fileNameDiv = file.querySelector('.file-name');
                if (fileNameDiv.innerText === fileName) {
                    fileSystem.removeChild(file);
                    fileFound = true;
                }
            });
            if (!fileFound) {
                alert('File not found');
            }
        }
    }

    function openEditor(file) {
        currentFile = file;
        textEditor.value = file.getAttribute('data-file-content');
        textEditorModal.style.display = 'flex';
    }

    function saveFile() {
        if (currentFile) {
            currentFile.setAttribute('data-file-content', textEditor.value);
            closeEditor();
        }
    }

    function closeEditor() {
        textEditorModal.style.display = 'none';
        currentFile = null;
        textEditor.value = '';
    }
});
