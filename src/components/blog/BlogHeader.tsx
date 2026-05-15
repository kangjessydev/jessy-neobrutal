import React from 'react';
import Tag from '../ui/Tag';

interface BlogHeaderProps {
  title: string;
  excerpt?: string;
  date: string;
  author: string;
  category: string;
  readTime?: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ 
  title, 
  excerpt, 
  date, 
  author, 
  category, 
  readTime 
}) => {
  return (
    <header className="pt-20 pb-12">
      <div className="flex gap-3 mb-8">
        <Tag variant="secondary">{category}</Tag>
        {readTime && <Tag variant="white">{readTime}</Tag>}
      </div>

      <h1 className="font-lexend font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase mb-8">
        {title}
      </h1>

      {excerpt && (
        <p className="font-space font-medium text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl">
          {excerpt}
        </p>
      )}

      <div className="mt-12 pt-8 border-t-4 border-dark flex flex-wrap gap-8">
        <div>
          <p className="text-xs font-bold uppercase text-gray-500">Published</p>
          <p className="font-black uppercase">{date}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase text-gray-500">Author</p>
          <p className="font-black uppercase">{author}</p>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
