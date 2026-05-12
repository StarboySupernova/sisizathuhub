import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
  FaLinkedin,
} from 'react-icons/fa';

import { IoIosMailUnread } from 'react-icons/io';

export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+27565151490',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:info@sisizathuhub.co.za',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/27565151490?text=${encodeURIComponent(
      "Hello, I would like to inquire about Sisizathu Hub's IT and Cybersecurity Solutions."
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/sisizathuhub',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/sisizathuhub',
    icon: <FaTwitter />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/sisizathuhub',
    icon: <FaLinkedin />,
  },
];
