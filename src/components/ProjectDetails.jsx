import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';
import EditableImage from './EditableImage';
import EditableText from './EditableText';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const { data, isEditMode } = useAppContext();
  
  const projectIndex = data.portfolio.projects.findIndex(p => p.id === id);
  const project = data.portfolio.projects[projectIndex];

  if (!project) {
    return (
      <section className="section project-details">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="gradient-text " style={{ fontSize: '3rem', marginBottom: '1rem' }}>Project Not Found</h1>
          <p className="text-muted">The project you are looking for does not exist or has been removed.</p>
          <Link to="/" className="btn btn-ghost" style={{ marginTop: '2rem' }}>← Back to Portfolio</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-details">
      <div className="container">
        <Link to="/#portfolio" className="btn btn-ghost project-details__back">← Back to Portfolio</Link>
        
        <div className="project-details__header glass-card" style={{ '--accent': project.color }}>
          {(project.image || isEditMode) && (
            <div style={{ width: '100%', height: '400px', marginBottom: '2.5rem', borderRadius: '12px', overflow: 'hidden' }}>
              <EditableImage 
                src={project.image} 
                dataPath={['portfolio', 'projects', projectIndex, 'image']}
                fallback={<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)' }}>No Image</div>}
              />
            </div>
          )}
          <h1 className="gradient-text">
            <EditableText value={project.title} dataPath={['portfolio', 'projects', projectIndex, 'title']} />
          </h1>
          <div className="project-details__tags">
            {project.tags?.map((t, idx) => (
              <span key={idx} className="portfolio__tag">
                <EditableText value={t} dataPath={['portfolio', 'projects', projectIndex, 'tags', idx]} />
              </span>
            ))}
          </div>
          <p className="project-details__subtitle">
            <EditableText value={project.desc} dataPath={['portfolio', 'projects', projectIndex, 'desc']} />
          </p>
        </div>

        <div className="project-details__body glass-card" style={{ '--accent': project.color }}>
          {isEditMode ? (
            <div style={{ minHeight: '100px', padding: '1rem', border: '1px dashed rgba(0,255,204,0.5)', borderRadius: '8px' }}>
              <EditableText 
                as="div"
                value={project.fullContent || `This is a detailed view of the ${project.title} project.\n\nMore detailed case study coming soon... To update this content, simply edit the fullContent field in the data source.`} 
                dataPath={['portfolio', 'projects', projectIndex, 'fullContent']} 
              />
            </div>
          ) : (
            project.fullContent ? (
              <div dangerouslySetInnerHTML={{ __html: project.fullContent }} />
            ) : (
              <div>
                <p>This is a detailed view of the <strong>{project.title}</strong> project.</p>
                <p>More detailed case study coming soon... To update this content, simply edit the `fullContent` field in the data source.</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
