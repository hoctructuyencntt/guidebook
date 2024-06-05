document.addEventListener('DOMContentLoaded', function () {
    const activities = document.querySelectorAll('input[name="activity"]');
    const contents = document.querySelectorAll('.description .content');
    const sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(title => {
        title.addEventListener('click', function () {
            const targetList = document.getElementById(this.getAttribute('data-target'));
            if (targetList.style.display === 'none' || targetList.style.display === '') {
                targetList.style.display = 'block';
            } else {
                targetList.style.display = 'none';
            }
        });
    });

    activities.forEach(activity => {
        activity.addEventListener('change', function () {
            const selectedContentId = this.getAttribute('data-content');

            contents.forEach(content => {
                if (content.id === selectedContentId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    document.getElementById('add').addEventListener('click', function () {
        const selectedActivity = document.querySelector('input[name="activity"]:checked');
        const selectedLabel = selectedActivity.getAttribute('data-label');
        const noteContent = selectedActivity.getAttribute('data-note-content');
        showStickyNote(selectedLabel, noteContent);
    });

    document.getElementById('cancel').addEventListener('click', function () {
        location.reload();
    });

    // Display the first content by default
    document.querySelector('.description .content').style.display = 'block';
});

function showStickyNote(activityName, activityContent) {
    const stickyNote = document.getElementById('sticky-note');
    const noteContent = document.getElementById('note-content');
    noteContent.innerHTML = ''; // Clear previous content

    // Add the title
    const title = document.createElement('p');
    title.textContent = `Gợi ý sử dụng ${activityName}:`;
    noteContent.appendChild(title);

    // Add the content
    const contentParagraph = document.createElement('p');
    contentParagraph.textContent = activityContent;
    noteContent.appendChild(contentParagraph);

    stickyNote.style.display = 'block';

    // Automatically close the sticky note after 5 seconds
    setTimeout(() => {
        stickyNote.style.display = 'none';
    }, 5000);
}

function closeStickyNote() {
    document.getElementById('sticky-note').style.display = 'none';
}
