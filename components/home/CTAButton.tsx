import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Link
      href="https://github.com/weijunext/landing-page-boilerplate"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <button className="btn btn-primary">{locale.title}</button>
    </Link>
  );
};

export default CTAButton;
