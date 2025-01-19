import React, { useState } from "react";
// import "./FAQSection.css";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade your plan anytime." },
    { question: "What is your cancellation policy?", answer: "You can cancel your subscription anytime, no questions asked." },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can customize your invoices to include additional information." },
    { question: "How does billing work?", answer: "We bill on a monthly or annual basis, depending on your chosen plan." },
    { question: "How do I change my account email?", answer: "You can update your email in the account settings section." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently asked questions</h2>
      <p className="faq-description">Everything you need to know about the product and billing.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ) )}
      </div>
      <div className="faq-footer">
        <p className="bold">Still have questions?</p>
        <p>Can't find the answer you're looking for? Please chat to our friendly team</p>
        <button className="contact-button">Get in touch</button>
      </div>
    </div>
  );
}

export default FAQSection;