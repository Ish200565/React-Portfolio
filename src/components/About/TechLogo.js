import React, { useState } from 'react';

const logoSlugs = {
    Python: 'python',
    FastAPI: 'fastapi',
    Flask: 'flask',
    Django: 'django',
    PostgreSQL: 'postgresql',
    MongoDB: 'mongodb',
    SQLAlchemy: 'sqlalchemy',
    MySQL: 'mysql',
    SQLite: 'sqlite',
    'Prisma ORM': 'prisma',
    'Neon Cloud DB': 'neon',
    ChromaDB: 'chromadb',
    PyTorch: 'pytorch',
    TensorFlow: 'tensorflow',
    'Hugging Face RoBERTa': 'huggingface',
    OpenCV: 'opencv',
    Docker: 'docker',
    'CI/CD (GitHub Actions)': 'githubactions',
    'AWS Fundamentals (Lambda/SES)': 'amazonaws',
    Vercel: 'vercel',
    Netlify: 'netlify',
    'Git / GitHub': 'github',
    'Node.js': 'nodedotjs',
    'Express.js': 'express',
    WebSockets: 'socketdotio',
    'Groq / Gemini APIs': 'google',
    'RAG Pipelines': 'openai'
};

const fallbackMarks = {
    'REST APIs': 'API',
    JWT: 'JWT',
    RBAC: 'RB',
    'RAG Pipelines': 'RAG',
    NLP: 'NLP',
    'Groq / Gemini APIs': 'AI'
};

const TechLogo = ({ name }) => {
    const slug = logoSlugs[name];
    const fallback = fallbackMarks[name] || name.slice(0, 2).toUpperCase();
    const [imageFailed, setImageFailed] = useState(!slug);

    return (
        <span className="tech-logo" aria-hidden="true">
            {slug && !imageFailed && (
                <img
                    src={`https://cdn.simpleicons.org/${slug}/2d7a22`}
                    alt=""
                    onError={() => setImageFailed(true)}
                />
            )}
            {imageFailed && <span className="tech-logo-fallback">{fallback}</span>}
        </span>
    );
};

export default TechLogo;
