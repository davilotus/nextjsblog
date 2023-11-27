import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

import Link from 'next/link';

import * as S from './styles';

export function Share({ url }: { url: string }) {
  return (
    <S.ShareWrap>
      <p>Gostou? Então compartilhe!</p>
      <S.ShareItems>
        <li>
          <Link
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="facebook"
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          >
            <span>Compartilhe no Facebook</span>
            <FaFacebookF />
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="twitter"
            href={`https://twitter.com/share?url=${url}`}
          >
            <span>Compartilhe no Twitter</span>
            <FaTwitter />
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="linkedin"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          >
            <span>Compartilhe no LinkedIn</span>
            <FaLinkedinIn />
          </Link>
        </li>

        <li>
          <Link
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="whatsapp"
            href={`https://api.whatsapp.com/send?text=Olha que bacana esse post: ${url}&share=true`}
          >
            <span>Compartilhe no WhatsApp</span>
            <FaWhatsapp />
          </Link>
        </li>
      </S.ShareItems>
    </S.ShareWrap>
  );
}
