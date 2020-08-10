import React from 'react';
import Layout from '@nehalist/gatsby-theme-nehalem/src/components/layout';
import SEO from '@nehalist/gatsby-theme-nehalem/src/components/seo';
import { Container } from '@nehalist/gatsby-theme-nehalem/src/components/common';
import './contact-me.css';

const ContactMe = ({ location }) => (
   <Layout bigHeader={false}>
      <SEO location={location} title={`Page title`} />
      <Container>
         <section id="contact-form">
            <h2>Contact Me</h2>
            <form
               name="contact"
               id="contact"
               method="POST"
               netlify-honeypot="bot-field"
               data-netlify="true"
            >
               <input type="hidden" name="bot-field" />
               <input type="hidden" name="form-name" value="contact" />

               <label>
                  <span>Your Name: </span>
                  <input type="text" name="name" />
               </label>

               <label>
                  <span>Your Email: </span>
                  <input type="email" name="email" />
               </label>

               {/* <label>
                  Interested In:{' '}
                  <select name="interested[]" multiple>
                     <option value="fit">Getting Fit</option>
                     <option value="fat">Getting Fat</option>
                  </select>
               </label> */}

               <label>
                  <span>Message: </span>
                  <textarea name="message"></textarea>
               </label>

               <button type="submit">Send</button>
            </form>
         </section>
      </Container>
   </Layout>
);

export default ContactMe;
