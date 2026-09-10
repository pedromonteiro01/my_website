import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cvFiles } from "../../data/profile";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./Contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    if (!validateEmail(email)) {
      toast.warning("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch(process.env.REACT_APP_FORMSPREE_ID, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Message successfully sent!");
          setFormData({ name: "", company: "", email: "", website: "", message: "" });
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      })
      .catch(() => toast.error("There was an error sending the message. Please try again."));
  };

  return (
    <section className="contacts" id="contacts">
      <Breadcrumb path={["portfolio", "src", "sections", "contact.sh"]} />

      <div className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
          <span className="terminal-titlebar-text">zsh — contact.sh</span>
        </div>

        <div className="terminal-body">
          <p className="terminal-line">
            <span className="terminal-prompt">$</span> ls -la ./cv/
          </p>
          {cvFiles.map((cv) => (
            <a key={cv.id} className="terminal-line terminal-file" href={cv.path} target="_blank" rel="noreferrer">
              -rw-r--r-- 1 pedro staff {cv.size} <span className="terminal-file-name">{cv.label}</span>
              <span className="terminal-file-hint"> ({cv.desc})</span>
            </a>
          ))}

          <p className="terminal-line terminal-line-spaced">
            <span className="terminal-prompt">$</span> ./contact.sh --to=pedro
          </p>

          <form className="terminal-form" onSubmit={handleSubmit}>
            <div className="terminal-field-row">
              <label className="terminal-field">
                <span className="terminal-field-label">--name<span className="required">*</span></span>
                <input name="name" required value={formData.name} onChange={handleChange} />
              </label>
              <label className="terminal-field">
                <span className="terminal-field-label">--company</span>
                <input name="company" value={formData.company} onChange={handleChange} />
              </label>
            </div>
            <div className="terminal-field-row">
              <label className="terminal-field">
                <span className="terminal-field-label">--email<span className="required">*</span></span>
                <input name="email" required value={formData.email} onChange={handleChange} />
              </label>
              <label className="terminal-field">
                <span className="terminal-field-label">--website</span>
                <input name="website" value={formData.website} onChange={handleChange} />
              </label>
            </div>
            <label className="terminal-field terminal-field-full">
              <span className="terminal-field-label">--message<span className="required">*</span></span>
              <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit" className="terminal-submit">
              <span className="terminal-prompt">$</span> send --confirm
            </button>
          </form>

          <p className="terminal-cursor-line">
            <span className="terminal-prompt">$</span> <span className="terminal-cursor" />
          </p>
        </div>
      </div>

      <ToastContainer theme="dark" position="bottom-right" />
    </section>
  );
};

export default Contacts;
