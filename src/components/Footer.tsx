import { Footer } from 'flowbite-react';
import { BsGithub, BsTwitter, BsLinkedin, BsSubstack } from 'react-icons/bs';

export function BottomFooter() {
  return (
    <div className="container mx-auto">
      <Footer.Divider />
      <div className="flex items-center justify-between">
        <Footer.Copyright
          href="https://nabeelshakeel.netlify.app"
          by="Nabeel Shakeel"
          year={2023}
        />
        <div className="flex flex-row align-center gap-2">
          <Footer.Icon
            href="https://www.linkedin.com/in/nabeel-shakeel-130/"
            icon={BsLinkedin}
          />
          <Footer.Icon
            href="https://github.com/nabeel-shakeel"
            icon={BsGithub}
          />
          <Footer.Icon
            href="https://nabeelshakeel.substack.com"
            icon={BsSubstack}
          />
          <Footer.Icon
            href="https://twitter.com/nabeel_shakeel8"
            icon={BsTwitter}
          />
        </div>
      </div>
    </div>
  );
}
