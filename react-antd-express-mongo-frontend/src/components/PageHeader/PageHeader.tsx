interface IProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<IProps> = ({ title, subtitle }: IProps) => {
  return (
    <div className="page-header">
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
