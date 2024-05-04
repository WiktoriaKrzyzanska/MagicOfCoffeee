import React from 'react';
import './InfoSection.css'
import Image from 'next/image';

interface InfoSectionProps {
    imageSrc: string;
    title: string;
    content: string;
    imageRight: boolean;
  }
const InfoSection: React.FC <InfoSectionProps> = ({ imageSrc, title, content, imageRight }) => (
  <div className={`info-section ${imageRight ? 'image-right' : 'image-left'}`}>
    <div className="text-block">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
    <div className="image-block">
      <Image src={imageSrc} alt={title} width={700} height={300} />
    </div>
  </div>
);
export default InfoSection;