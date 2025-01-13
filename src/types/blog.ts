export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introduction à l\'IA',
    excerpt: 'Découvrez les bases de l\'intelligence artificielle',
    category: 'Intelligence Artificielle',
    date: '2024-01-01',
    author: 'John Doe'
  },
  // Ajoutez d'autres articles ici
];