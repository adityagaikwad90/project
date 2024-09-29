document.getElementById('toggle-projects').addEventListener('click', function() {
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    const buttonText = this.innerText;

    hiddenProjects.forEach(project => {
        if (project.style.display === 'none' || project.style.display === '') {
            project.style.display = 'flex';
            setTimeout(() => project.style.opacity = '1', 50);
        } else {
            project.style.opacity = '0';
            setTimeout(() => project.style.display = 'none', 500);
        }
    });

    this.innerText = buttonText === 'Show More Projects' ? 'Show Less Projects' : 'Show More Projects';
});
