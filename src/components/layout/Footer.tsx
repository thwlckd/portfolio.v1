import { SiGithub, SiNotion } from 'react-icons/si';

export default function Footer() {
  return (
    <section className="flex items-center justify-center gap-4 py-5">
      <p className="mr-2">©2024 ChangHyub Park</p>
      <a href="https://github.com/thwlckd" target="_blank">
        <SiGithub className="text-2xl" />
      </a>
      <a
        href="https://www.notion.so/hyub/Hyub-s-Archive-3b98532b074f4d428e65004c29ba9fdf"
        target="_blank"
      >
        <SiNotion className="text-2xl" />
      </a>
    </section>
  );
}
