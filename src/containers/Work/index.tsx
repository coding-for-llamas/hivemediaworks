import WorkContent from './WorkContent';

export const Work = (): JSX.Element => {
  document.title = 'Work | Hive Media Works ';  
  return (
      <div className="Site-content">
        <main className="work-main">
          <WorkContent />
        </main>
      </div>
  );
};

export default Work;
