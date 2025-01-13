// src/data/blogPosts.ts

export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
    coverImage: string;
    category: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'L\'Impact de l\'IA en Afrique',
      summary: 'Découvrez comment l\'intelligence artificielle transforme le paysage technologique africain.',
      content: 'Contenu détaillé de l\'article...',
      date: '2024-04-25',
      author: 'John Doe',
      coverImage: '/images/ai-impact.jpg',
      category: 'Intelligence Artificielle'
    },
    {
      id: '2',
      title: 'Innovation Technologique',
      summary: 'Les dernières avancées technologiques qui façonnent notre futur.',
      content: 'Contenu détaillé de l\'article...',
      date: '2024-04-24',
      author: 'Jane Smith',
      coverImage: '/images/innovation.jpg',
      category: 'Innovation'
    }
  ];