const ContactContent = (): JSX.Element => (
  <>
    <div className="contact-header">
      <h1 className="lg-heading">
        Contact
        {' '}
        <span className="text-secondary">Us</span>
      </h1>
      <h2 className="sm-heading">
        Want to talk? Here's where we can be reached!
      </h2>
    </div>
    <div className="contact-info">
      <div className="contact-info--box">
        {/* Look at WebJam to figure out a contact form and impliment it. */}
        <p>
          <a href="mailto:admin@hivemediaworks.com" target="_blank" rel="noopener noreferrer">Email</a>
          <br />
          <a href="https://www.facebook.com/hivemediaworks/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <br />
          <a href="https://twitter.com/hivemediaworks" target="_blank" rel="noopener noreferrer">Twitter
          </a>
        </p>
      </div>
    </div>
  </>
);

export default ContactContent;