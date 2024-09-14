const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="hidden lg:block">
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 mt-10" />
      <span className="block text-sm text-white sm:text-center dark:text-gray-400">
        © {year} -{" "}
        <a href="https://med-aifia.me/" className="hover:underline">
          Med Amine Aifia
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
