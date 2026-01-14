interface ExportCardProps {
  title: string;
  description: string;
}

const ExportCard = ({ title, description }: ExportCardProps) => {
  return (
    <div className="category-card">
      <h3>{title}</h3>
      <span className="specialist-badge">Specialist</span>
      <p>{description}</p>
    </div>
  );
};

export default ExportCard;
