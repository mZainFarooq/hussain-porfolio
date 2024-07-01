import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      {/* <div
        itemScope
        itemType="http://schema.org/Person"
        className="fiverr-seller-widget"
        style={{ display: 'inline-block' }}>
        <a
          itemType="url"
          href="https://www.fiverr.com/hussain_code"
          rel="nofollow"
          target="_blank"
          style={{ display: 'inline-block' }}>
          <div
            className="fiverr-seller-content"
            id="fiverr-seller-widget-content-e84b789c-35e5-453b-8a09-2d4fbd1d8366"
            itemType="contentURL"
            style={{ display: 'none' }}></div>
          <div id="fiverr-widget-seller-data" style={{ display: 'none' }}>
            <div itemType="name">hussain_code</div>
            <div itemScope itemType="http://schema.org/Organization">
              <span itemType="name">Fiverr</span>
            </div>
            <div itemType="jobtitle">Seller</div>
            <div itemType="description">
              I'm M Hussain, a dedicated software engineer specializing in MERN
              stack development. With a proven track record of building dynamic
              and efficient web applications, including projects like sendmea, I
              excel in creating seamless user experiences. My skill set includes
              advanced proficiency in Next js and Firebase, enabling me to
              deliver high-quality products by leveraging modern technologies.
              Explore my portfolio to see how I can help bring your ideas to
              life.
            </div>
          </div>
        </a>
      </div> */}
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        {clientsHeading}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
        {clientsData.map(client => (
          <AboutClientSingle
            title={client.title}
            image={client.img}
            key={client.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutClients;
