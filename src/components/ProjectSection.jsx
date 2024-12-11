import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectSection() {
    const [projectItems, setProjectItems] = useState([]);

    useEffect(() => {
        fetch('/assets/ProjectItems.json')
            .then((response) => response.json())
            .then((data) => setProjectItems(data))
            .catch((error) => console.error('Error al cargar el JSON:', error));
    }, []);

    return (
        <div className='py-5' id='projects'>
            <div className='container'>
                <h2 className='mb-5'>My projects</h2>
                <div className='row g-4'>
                    {projectItems.map((item) => (
                        <ProjectCard
                            key={item.id}
                            id={item.id} 
                            projectImage={item.projectImg}
                            projectTitle={item.projectTitle}
                            projectDesc={item.projectDescription}
                            projectDesc2={item.projectDescription2} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
