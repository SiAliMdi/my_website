import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const s = 'sid';
  const a = 'ali';
  const m = 'mahmoud';
  const ph1 = '07 84';
  const ph2 = ' 88 79';
  const ph3 = ' 26';
  const phoneNumber = '+33 ' + ph1 + ph2 + ph3;
  const phoneLink = 'tel:' + phoneNumber.replace(/\s/g, '');
  const emailLink = 'mailto:eng.' + s + a+'.' + m + 'i@gmail.com';
  const username = 'SiAliMdi';
  const githubUrl = 'https://github.com/' + username;
  const linkedinUrl = 'https://www.linkedin.com/in/'+s+'-'+a+'-'+m+'i/';
  return (
    <div className="flex space-x-4">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-600 hover:text-gray-800 transition-colors" size={24} />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-600 hover:text-gray-800 transition-colors" size={24} />
      </a>
      <a href={phoneLink} title={phoneNumber}>
        <FaPhone className="text-gray-600 hover:text-gray-800 transition-colors" size={24} />
      </a>
      <a href={emailLink} title={'eng.' + s + a+'.' + m + 'i@gmail.com'}>
        <FaEnvelope className="text-gray-600 hover:text-gray-800 transition-colors" size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;