import ContactContent from './ContactContent';

export const Contact = (): JSX.Element => {
  document.title = 'Contact | Hive Media Works';  
  return (
      <div className="Site-content">
        <main className="contact-main">
          <ContactContent />
        </main>
      </div>
  );
};

export default Contact;
