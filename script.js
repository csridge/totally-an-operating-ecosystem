document.addEventListener('DOMContentLoaded', function () {
    const fileSystem = document.getElementById('file-system');
    const createFileBtn = document.getElementById('create-file-btn');
    const removeFileBtn = document.getElementById('remove-file-btn');

    createFileBtn.addEventListener('click', createFile);
    removeFileBtn.addEventListener('click', removeFile);

    let fileCounter = 0;

    function createFile() {
        const fileName = prompt('Enter file name:');
        if (fileName) {
            const file = document.createElement('div');
            file.classList.add('file');
            file.setAttribute('data-file-id', fileCounter);

            const fileIcon = document.createElement('div');
            fileIcon.classList.add('file-icon');
            fileIcon.innerText = '📄';

            const fileNameDiv = document.createElement('div');
            fileNameDiv.classList.add('file-name');
            fileNameDiv.innerText = fileName;

            file.appendChild(fileIcon);
            file.appendChild(fileNameDiv);
            fileSystem.appendChild(file);

            fileCounter++;
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
});